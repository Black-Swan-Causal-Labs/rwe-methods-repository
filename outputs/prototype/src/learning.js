export const evidencePolicy={version:'1.0',repository:'Label supported claims (Repository: article ID; locator), with a source link and evidence-basis limits.',outside:'Label inspected external sources (Outside source: author, year) and link them.',background:'Label unsupported recalled background (General model knowledge; not verified against the repository).',synthesis:'Label new interpretations separately, identifying repository and/or outside premises.',boundary:'Being in the reading list does not make uncurated article content repository evidence.',limitations:'Disclosure depends on model compliance. Structural validation is not verification that a claim is supported.'};
export function checkEvidenceLabels(corpus,{claims=[]}={}){
 const issues=[];const kinds=['repository','outside_source','model_knowledge','interpretation','illustrative_example'];
 const result=claims.map((claim,i)=>{
  const problems=[];if(!claim.text?.trim())problems.push('Missing claim text');if(!kinds.includes(claim.source_type))problems.push('Unknown or missing source type');
  const refs=claim.evidence_ids||[];
  for(const id of refs)if(!corpus.evidence.has(id))problems.push('Unknown evidence ID: '+id);
  if(claim.source_type==='repository'&&!refs.length)problems.push('Repository claims require evidence IDs, not just an article title');
  if(claim.source_type==='outside_source'&&(!claim.source_url||!/^https?:\/\//i.test(claim.source_url)||!claim.source_name||claim.source_inspected!==true))problems.push('Outside-source claims require a named, inspected HTTP(S) source');
  if(claim.source_type==='interpretation'&&!claim.basis?.trim())problems.push('Interpretation requires a statement of its premises and their provenance');
  const ids=[...new Set(refs.map(id=>corpus.evidence.get(id)?.article_id).filter(Boolean))];
  const label=claim.source_type==='repository'?`(Repository: ${ids.join(', ')})`:claim.source_type==='outside_source'?`(Outside source: ${claim.source_name||'unspecified'})`:claim.source_type==='model_knowledge'?'(General model knowledge; not verified against the repository)':claim.source_type==='illustrative_example'?'(Illustrative example; not from the repository)':`(Interpretation: ${claim.basis||'basis not supplied'})`;
  if(problems.length)issues.push({claim_index:i,problems});return{...claim,suggested_label:problems.length?null:label,status:problems.length?'needs_revision':'structure_checked',evidence:refs.map(id=>corpus.evidence.get(id)).filter(Boolean)};
 });
 if(!claims.length)issues.push({problems:['No claims supplied']});
 return{status:issues.length?'needs_revision':'structure_checked',claims:result,issues,disclaimer:'Checks fields and evidence identifiers only. Does not verify truth, source inspection, entailment, or disclosure of omitted claims.'};
}
export function buildSessionSummary(corpus,input={}){
 const {discussion_points=[],article_ids=[],question_ids=[],outside_information=[],open_questions=[]}=input;
 const invalidArticles=article_ids.filter(id=>!corpus.readings.some(r=>r.article_id===id));const invalidQuestions=question_ids.filter(id=>!corpus.questions.some(q=>q.question_id===id));
 if(invalidArticles.length||invalidQuestions.length)return{status:'invalid_references',unknown_article_ids:invalidArticles,unknown_question_ids:invalidQuestions};
 if(!discussion_points.length&&!article_ids.length&&!question_ids.length)return{status:'needs_context',message:'Supply topics actually discussed and repository records actually used. This tool cannot see the chat.'};
 const usedIds=new Set([...article_ids,...corpus.questions.filter(q=>question_ids.includes(q.question_id)).map(q=>q.article_id)]);
 const used=corpus.readings.filter(r=>usedIds.has(r.article_id));const connected=new Map();
 for(const r of used)for(const m of r.competency_mappings){if(!connected.has(m.competency_id))connected.set(m.competency_id,{competency_id:m.competency_id,label:corpus.competencies.get(m.competency_id).source_text,article_ids:[],status:'provisional_connection_not_mastery'});connected.get(m.competency_id).article_ids.push(r.article_id);}
 const suggestions=corpus.readings.filter(r=>!usedIds.has(r.article_id)).map(r=>({r,shared:r.competency_mappings.filter(m=>connected.has(m.competency_id)).map(m=>m.competency_id)})).filter(x=>x.shared.length).sort((a,b)=>b.shared.length-a.shared.length||a.r.article.number-b.r.article.number).slice(0,3).map(({r,shared})=>({article_id:r.article_id,title:r.title,url:r.article.doi_url,reading_url:'#reading/'+r.article_id,reason:'Shares provisional competency connections: '+shared.map(id=>corpus.competencies.get(id).source_keyword).join('; '),competency_ids:shared,evidence_basis:r.evidence_basis,status:'provisional_suggestion'}));
 return{status:'draft_session_recap',dataset_version:corpus.data.version,context_basis:'Caller-supplied session ledger; not an observed transcript',discussed:discussion_points,readings_used:used.map(r=>({article_id:r.article_id,title:r.title,url:r.article.doi_url})),connected_competencies:[...connected.values()],suggested_readings:suggestions,outside_information,open_questions,limits:['Topic connections do not establish learner mastery.','Reading suggestions use provisional competency overlap, not a validated learning sequence.','Outside-information completeness depends on the caller disclosing it.','No transcript or persistent session history is stored by this tool.']};
}
