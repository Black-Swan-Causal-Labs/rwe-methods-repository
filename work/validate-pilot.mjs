import fs from 'node:fs';import assert from 'node:assert/strict';
import{createCorpus,registerWebMCP}from'../outputs/prototype/src/corpus.js';
const d=JSON.parse(fs.readFileSync(new URL('../outputs/pilot-dataset.json',import.meta.url)));const c=createCorpus(d);
assert.equal(c.readings.length,30);assert.equal(c.competencies.size,55);assert.equal(c.questions.length,33);
for(const [label,rows,key]of[['article',d.articles,'article_id'],['reading',d.teaching_records,'record_id'],['question',c.questions,'question_id'],['evidence',d.evidence_index,'evidence_id']])assert.equal(new Set(rows.map(r=>r[key])).size,rows.length,label+' unique IDs');
for(const r of c.readings){assert(r.article);assert(r.summary_evidence_ids.length);for(const id of r.summary_evidence_ids)assert.equal(c.evidence.get(id)?.article_id,r.article_id);for(const m of r.competency_mappings)assert(c.competencies.has(m.competency_id));}
for(const q of c.questions){for(const e of q.evidence_ids)assert.equal(c.evidence.get(e)?.article_id,q.article_id);assert.equal(c.answer(q.question_id).answer,q.reference_answer);assert.equal(c.answer(q.question_id).status,'draft');}
assert.equal(c.answer('missing').status,'not_found');assert.equal(c.findQuestions('quantum banana spaceship').length,0);assert(c.search('immortal time').some(r=>r.article_id==='A08'));assert(c.search('','C06').some(r=>r.article_id==='A19'));
const captured=[];const reg=await registerWebMCP(c,{registerTool:async x=>captured.push(x)});assert.equal(reg.count,9);assert.equal((await captured.find(t=>t.name==='get_reference_answer').execute({question_id:'Q01'})).answer,c.answer('Q01').answer);reg.dispose();
console.log('PASS: 30 records, 55 competencies, 33 verbatim answers, unique IDs, evidence and mapping integrity, search, no-match, 9 tool contracts.');
