import json,urllib.request,urllib.parse,concurrent.futures,re,hashlib,time
from pathlib import Path
from html.parser import HTMLParser
import xml.etree.ElementTree as E
W=Path(__file__).resolve().parent;C=W/'corpus';C.mkdir(exist_ok=True)
data=json.loads((W.parent/'outputs/pilot-dataset.json').read_text())
class Text(HTMLParser):
 def __init__(self):super().__init__();self.capture=None;self.buf=[];self.parts=[]
 def handle_starttag(self,tag,attrs):
  if tag in ['p','h1','h2','h3','h4']:self.capture=tag;self.buf=[]
 def handle_data(self,s):
  if self.capture:self.buf.append(s)
 def handle_endtag(self,t):
  if t==self.capture:
   s=' '.join(''.join(self.buf).split())
   if s:self.parts.append({'tag':t,'text':s})
   self.capture=None
def fetch(u):
 return urllib.request.urlopen(urllib.request.Request(u,headers={'User-Agent':'MethodsRepositoryPilot/0.2'}),timeout=20).read()
def run(a):
 n=a['number'];aid=a['article_id'];meta=json.loads((W/f'metadata-{n:02}.json').read_text())
 r=next(r for r in meta['resultList']['result'] if r.get('doi','').lower()==a['doi'].lower())
 out={'article_id':aid,'abstract':re.sub('<[^>]+>',' ',r.get('abstractText','')),'abstract_url':a['metadata_url'],'attempts':[],'paragraphs':[],'full_text_obtained':False}
 candidates=[]
 if a.get('pmcid'):candidates.append(f'https://pmc.ncbi.nlm.nih.gov/articles/{a["pmcid"]}/')
 candidates += [a['listed_url']]
 for url in candidates:
  try:
   b=fetch(url);p=Text();p.feed(b.decode('utf-8',errors='replace'))
   ps=p.parts
   meaningful=[x for x in ps if x['tag']=='p' and len(x['text'])>150]
   # More than a landing-page abstract is needed; keep all attempts visible.
   ok=len(meaningful)>8 and sum(len(x['text']) for x in meaningful)>8000
   out['attempts'].append({'url':url,'status':'full_text_candidate' if ok else 'insufficient_body_text','paragraphs':len(meaningful)})
   if ok:
    (C/f'{aid}.html').write_bytes(b)
    out.update({'full_text_obtained':True,'source_url':url,'sha256':hashlib.sha256(b).hexdigest(),'paragraphs':ps})
    break
  except Exception as e:out['attempts'].append({'url':url,'status':str(e)})
 (C/f'{aid}.json').write_text(json.dumps(out,indent=2,ensure_ascii=False))
 print(aid,'full candidate' if out['full_text_obtained'] else 'abstract only' if out['abstract'] else 'metadata only',flush=True)
 return out
with concurrent.futures.ThreadPoolExecutor(max_workers=4) as ex:out=list(ex.map(run,data['articles']))
(C/'acquisition.json').write_text(json.dumps(out,indent=2,ensure_ascii=False))
