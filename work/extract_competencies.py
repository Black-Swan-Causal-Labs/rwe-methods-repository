import pdfplumber,json,re
from pathlib import Path
ROOT=Path(__file__).resolve().parent
domains=['Epidemiology','Clinical pharmacology','Regulatory science','Statistics and data science','Communication and other professional skills']
out=[];theme=None
with pdfplumber.open(ROOT/'competencies-rotated.pdf') as doc:
 for pi,page in enumerate(doc.pages):
  words=page.extract_words(x_tolerance=1)
  nums=[w for w in words if w['text'] in ['1','2'] and 365<w['x0']<740 and 125<w['top']<550]
  ys=sorted(set(round(w['top'],1) for w in nums))
  theme_words=[w for w in words if w['text']=='Theme:']
  for i,y in enumerate(ys):
   end=ys[i+1]-2.5 if i+1<len(ys) else 550
   for tw in theme_words:
    if tw['top']<y and (not theme or True):
     theme=' '.join(w['text'] for w in words if abs(w['top']-tw['top'])<1 and w['x0']<740).replace('Theme: ','')
    if y<tw['top']<end:end=tw['top']-.5
   def cell(x0,x1):
    selected=[w for w in words if x0<=w['x0']<x1 and y-2.5<=w['top']<end]
    lines=[]
    for w in sorted(selected,key=lambda w:w['top']):
     if not lines or abs(w['top']-lines[-1][0]['top'])>2:lines.append([])
     lines[-1].append(w)
    return ' '.join(w['text'] for line in lines for w in sorted(line,key=lambda w:w['x0']))
   name=cell(140,365)
   mappings={d:None for d in domains}
   for n in nums:
    if abs(n['top']-y)<.3:
     idx=min(range(5),key=lambda k:abs(n['x0']-[371.7,428.7,491.6,547.5,620.5][k]))
     mappings[domains[idx]]='direct' if n['text']=='1' else 'indirect'
   out.append({'competency_id':f'C{len(out)+1:02}','source_text':name.rstrip('*'),'source_keyword':cell(60,140),'theme':theme,'marked_new_in_2024':name.endswith('*'),'domain_relationships':mappings,'source':'Osborne et al. 2024, Table 1','source_page':pi+5,'doi':'10.1002/pds.5789','extraction_status':'extracted_from_table; editorial verification required'})
(ROOT/'competencies.json').write_text(json.dumps(out,indent=2,ensure_ascii=False))
print('COUNT',len(out))
for c in out:print(c['competency_id'],c['source_text'],c['domain_relationships'])
