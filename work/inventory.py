import json,re,time,urllib.request,urllib.parse,concurrent.futures,difflib
from pathlib import Path
ROOT=Path(__file__).resolve().parent
def fetch(url):
    req=urllib.request.Request(url,headers={'User-Agent':'MethodsRepositoryPilot/0.1 (research source verification)'})
    for i in range(3):
        try:return urllib.request.urlopen(req,timeout=40).read()
        except Exception:
            if i==2:raise
            time.sleep(1+i)
def norm(s):return re.sub(r'[^a-z0-9]','',s.lower())
def run(row):
    title=row['listed_title'].split(' (Greenland')[0]
    url=row['listed_url']; parts=urllib.parse.urlsplit(url)
    query=urllib.parse.parse_qs(parts.query);query.pop('trk',None)
    row['listed_url']=urllib.parse.urlunsplit((parts.scheme,parts.netloc,parts.path,urllib.parse.urlencode(query,doseq=True),''))
    match=re.search(r'(10\.\d{4,9}/[^?]+)',url)
    doi=match[1] if match else None
    if 'bmj.com/content/' in url:doi='10.1136/'+parts.path.split('/')[-1].removesuffix('.long')
    doi='10.1371/journal.pmed.0020124' if row['number']==6 else doi
    title=title+'s' if row['number']==29 else title
    q='DOI:'+doi if doi else 'TITLE:"'+title+'"'
    api='https://www.ebi.ac.uk/europepmc/webservices/rest/search?'+urllib.parse.urlencode({'query':q,'format':'json','resultType':'core','pageSize':5})
    try:
        raw=json.loads(fetch(api));(ROOT/f'metadata-{row["number"]:02}.json').write_text(json.dumps(raw,indent=2))
        results=raw.get('resultList',{}).get('result',[])
        if not results:raise ValueError('No metadata match')
        best=max(results,key=lambda r:difflib.SequenceMatcher(None,norm(title),norm(r.get('title',''))).ratio())
        score=difflib.SequenceMatcher(None,norm(title),norm(best.get('title',''))).ratio()
        row.update({'article_id':f'A{row["number"]:02}','title':best.get('title'),'authors':[a.get('fullName') for a in best.get('authorList',{}).get('author',[])], 'year':best.get('pubYear'),'journal':best.get('journalInfo',{}).get('journal',{}).get('title'),'doi':best.get('doi'),'pmid':best.get('id') if best.get('source')=='MED' else None,'pmcid':best.get('pmcid'),'title_match_score':round(score,3),'metadata_status':'matched' if score>.92 else 'check_match','metadata_url':api,'full_text_links':best.get('fullTextUrlList',{}).get('fullTextUrl',[]),'open_access_index_flag':best.get('isOpenAccess'),'license_index':best.get('license'),'correction_index':best.get('commentCorrectionList',{}),'publication_types':best.get('pubTypeList',{}).get('pubType',[]),'full_text_review_status':'not_reviewed','reuse_status':'not_cleared_for_publication','checked_date':'2026-09-15'})
    except Exception as e:row.update({'article_id':f'A{row["number"]:02}','metadata_status':'unresolved','error':str(e)})
    return row
rows=json.loads((ROOT/'list.json').read_text())
with concurrent.futures.ThreadPoolExecutor(max_workers=4) as ex:out=list(ex.map(run,rows))
(ROOT/'inventory.json').write_text(json.dumps(out,indent=2,ensure_ascii=False))
for r in out: print(r['number'],r['metadata_status'],r.get('title_match_score'),r.get('doi'),r.get('pmcid'),r.get('license_index'),flush=True)
