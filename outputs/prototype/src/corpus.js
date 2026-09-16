import {evidencePolicy,checkEvidenceLabels,buildSessionSummary} from './learning.js';
export function createCorpus(data){
 const articles=new Map(data.articles.map(a=>[a.article_id,a])),evidence=new Map(data.evidence_index.map(e=>[e.evidence_id,e])),competencies=new Map(data.competencies.map(c=>[c.competency_id,c]));
 const readings=data.teaching_records.map(r=>({...r,article:articles.get(r.article_id)}));
 const questions=readings.flatMap(r=>r.questions.map(q=>({...q,article_id:r.article_id,reading_title:r.title})));
 const norm=s=>String(s).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,' ').trim();
 const stop=new Set('a an the is are does do how what why can i my to of for in on with about me tell explain and this that'.split(' '));
 const terms=s=>norm(s).split(' ').filter(t=>t&&!stop.has(t));
 const rank=(items,query,text)=>{const ts=terms(query);return items.map(r=>({r,n:ts.reduce((n,t)=>n+Number(norm(text(r)).split(' ').some(w=>w===t||(t.length>3&&w.startsWith(t)))),0)})).filter(v=>!ts.length||v.n>=Math.max(1,Math.ceil(ts.length*.4))).sort((a,b)=>b.n-a.n).map(v=>v.r);};
 const search=(q='',cid='')=>rank(readings.filter(r=>!cid||r.competency_mappings.some(m=>m.competency_id===cid)),q,r=>[r.title,r.article.title,r.article.authors.join(' '),r.teaching_summary,...r.topics,...r.questions.map(q=>q.question),...r.competency_mappings.map(m=>competencies.get(m.competency_id)?.source_text)].join(' '));
 const findQuestions=(q='')=>rank(questions,q,r=>r.question+' '+r.reading_title);
 function answer(id){const q=questions.find(q=>q.question_id===id);if(!q)return{status:'not_found'};const r=readings.find(r=>r.article_id===q.article_id);return{source_scope:'curated_repository',disclosure_label:'(Repository: '+q.article_id+')',status:'draft',dataset_version:data.version,question_id:id,question:q.question,answer:q.reference_answer,source_basis:r.evidence_basis,article_id:q.article_id,citation:r.article.doi_url,evidence:q.evidence_ids.map(id=>evidence.get(id)),limitations:r.limitations.map(l=>l.text)};}
 return{data,readings,questions,competencies,evidence,search,findQuestions,answer};
}
export async function registerWebMCP(corpus,context=globalThis.document?.modelContext){
 if(!context?.registerTool)return{status:'unavailable'};
 const controller=new AbortController();
 const make=(name,description,properties,required,execute)=>({name,description,inputSchema:{type:'object',properties,required,additionalProperties:false},execute,annotations:{readOnlyHint:true,untrustedContentHint:true}});
 const string={type:'string'};const strings={type:'array',items:string,maxItems:100};
 const definitions=[
 make('get_evidence_policy','Get required labels for curated repository evidence, outside sources, and unverified model knowledge. Instructions cannot guarantee model compliance.',{},[],async()=>evidencePolicy),
 make('check_evidence_labels','Check source-label fields and repository evidence IDs. This is NOT truth or entailment validation. Does not fetch URLs.',{claims:{type:'array',minItems:1,maxItems:100,items:{type:'object',properties:{text:string,source_type:{type:'string',enum:['repository','outside_source','model_knowledge','interpretation','illustrative_example']},evidence_ids:strings,source_name:string,source_url:string,source_inspected:{type:'boolean'},basis:string},required:['text','source_type'],additionalProperties:false}}},['claims'],async input=>checkEvidenceLabels(corpus,input)),
 make('build_session_summary','Build a brief learning recap from the actual session ledger supplied by the caller. Cannot see the chat. Returns provisional competency connections and up to 3 next readings; not mastery. Does not store input.',{discussion_points:strings,article_ids:strings,question_ids:strings,outside_information:strings,open_questions:strings},['discussion_points','article_ids','question_ids','outside_information','open_questions'],async input=>buildSessionSummary(corpus,input)),
 make('get_video_catalog','List external candidate videos. Metadata only, not reviewed transcripts or repository evidence.',{},[],async()=>corpus.data.video_candidates||[]),

 make('search_corpus','Search provisional teaching records in the fixed 30-article pilot. Draft material, not validated advice.',{query:string,competency_id:string},['query'],async({query,competency_id})=>({status:'draft',source_scope:'curated_repository',evidence_policy:evidencePolicy,records:corpus.search(query,competency_id).map(r=>({article_id:r.article_id,title:r.title,summary:r.teaching_summary,source_basis:r.evidence_basis,doi:r.article.doi_url}))})),
 make('get_reading','Get a provisional teaching record, preserving its evidence limits.',{article_id:string},['article_id'],async({article_id})=>{const r=corpus.readings.find(r=>r.article_id===article_id);return r?{status:'draft',source_scope:'curated_repository',disclosure_label:'(Repository: '+r.article_id+')',record:r,evidence:r.summary_evidence_ids.map(id=>corpus.evidence.get(id))}:{status:'not_found'};}),
 make('list_competencies','List unchanged Osborne 2024 competencies with local pilot identifiers.',{},[],async()=>corpus.data.competencies),
 make('get_reference_answer','Return a stored draft answer verbatim for an explicitly selected question ID.',{question_id:string},['question_id'],async({question_id})=>corpus.answer(question_id)),
 make('find_questions','Find candidate questions for learner confirmation before returning a stored answer.',{query:string},['query'],async({query})=>corpus.findQuestions(query).map(q=>({question_id:q.question_id,question:q.question,article_id:q.article_id})))];
 try{for(const d of definitions)await context.registerTool(d,{signal:controller.signal});return{status:'registered',count:definitions.length,dispose:()=>controller.abort()};}catch(e){controller.abort();return{status:'error',message:String(e)};}
}
