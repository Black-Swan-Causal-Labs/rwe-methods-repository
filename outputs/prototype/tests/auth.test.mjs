import {test} from 'node:test';
import assert from 'node:assert/strict';
import {onRequest} from '../functions/_middleware.js';
const env={PROTOTYPE_USERNAME:'learner',PROTOTYPE_PASSWORD:'test-only:password'};
const auth=(u,p)=>'Basic '+btoa(`${u}:${p}`);
for(const path of ['/','/dataset.json','/repository-learning-skill.zip','/assets/app.js','/ispe-logo.png']){
 test(`protects ${path}`,async()=>{
  for(const authorization of [null,'Bearer token','Basic !!!',auth('wrong',env.PROTOTYPE_PASSWORD),auth('learner','wrong')]){
   let served=false;
   const response=await onRequest({env,request:new Request('https://example.com'+path,{headers:authorization?{Authorization:authorization}:{}}),next:()=>{served=true;return new Response('private')}});
   assert.equal(response.status,401);assert.equal(served,false);assert.match(response.headers.get('WWW-Authenticate'),/^Basic/);
  }
 });
}
test('missing credentials fail closed',async()=>{const r=await onRequest({env:{},request:new Request('https://example.com'),next:()=>{throw Error('must not serve')}});assert.equal(r.status,503)});
test('valid login serves content without caching',async()=>{const r=await onRequest({env,request:new Request('https://example.com/dataset.json',{headers:{Authorization:auth('learner',env.PROTOTYPE_PASSWORD)}}),next:()=>new Response('private')});assert.equal(r.status,200);assert.equal(await r.text(),'private');assert.equal(r.headers.get('Cache-Control'),'private, no-store')});
