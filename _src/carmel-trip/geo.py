import json, time, urllib.request, urllib.parse
Q = {
 'h-drury':'9625 N Meridian St, Indianapolis, IN 46290','h-residence':'11895 N Meridian St, Carmel, IN 46032','h-fairfield':'1335 W Main St, Carmel, IN 46032',
 'h-staybridge':'10675 N Pennsylvania St, Carmel, IN 46280','h-home2':'12845 Old Meridian St, Carmel, IN 46032','h-hiex':'9797 N Michigan Rd, Carmel, IN 46032','h-carmichael':'1 Carmichael Square, Carmel, IN 46032',
 'drive-airforce':'1100 Spaatz St, Dayton, OH 45433','drive-hayes':'801 Elks Rd, Richmond, IN 47374',
 'cm-fri':'3000 N Meridian St, Indianapolis, IN 46208','cm-sat':'3000 N Meridian St, Indianapolis, IN 46208','cm-sun':'3000 N Meridian St, Indianapolis, IN 46208',
 'fri-hp':'6363 Spring Mill Rd, Indianapolis, IN 46260','fri-hh':'13400 Allisonville Rd, Fishers, IN 46038','fri-newfields':'4000 N Michigan Rd, Indianapolis, IN 46208',
 'fri-foodtrucks':'930 N Range Line Rd, Carmel, IN 46032','fri-pumpkintown':'11405 Allisonville Rd, Fishers, IN 46038',
 'sat-fallfest':'200 E Washington St, Indianapolis, IN 46204','sat-locallymade':'820 E 67th St, Indianapolis, IN 46220','sat-pioneer':'12308 Strawtown Ave, Noblesville, IN 46060',
 'sat-wfc':'1202 E 38th St, Indianapolis, IN 46205','sat-market':'611 3rd Ave SW, Carmel, IN 46032','sat-train':'825 Forest Park Dr, Noblesville, IN 46060',
 'aia':'365 Monon Blvd, Carmel, IN 46032','boonbrew':'14390 Clay Terrace Blvd, Carmel, IN 46032','minis':'111 E Main St, Carmel, IN 46032','history':'211 1st St SW, Carmel, IN 46032',
 'zooboo':'1200 W Washington St, Indianapolis, IN 46222','pumpkin-russell':'Russell Farms, Noblesville, IN','rain-statemuseum':'650 W Washington St, Indianapolis, IN 46204',
 'park-westermeier':'920 Central Park Dr W, Carmel, IN 46032','park-west':'2700 W 116th St, Carmel, IN 46032','park-flatfork':'16141 E 101st St, Fishers, IN 46037',
 'park-coxhall':'11677 Towne Rd, Carmel, IN 46032','park-founders':'11675 Hazel Dell Pkwy, Carmel, IN 46033','monon-center':'1235 Central Park Dr E, Carmel, IN 46032',
 'eat-bubs':'210 W Main St, Carmel, IN 46032','eat-sunking':'351 Monon Blvd, Carmel, IN 46032','eat-rosies':'1111 W Main St, Carmel, IN 46032','eat-sweets':'2284 E 116th St, Carmel, IN 46032','eat-tpc':'9101 Moore Rd, Zionsville, IN 46077',
 'home-uranus':'6400 National Rd E, Richmond, IN 47374','home-portillos':'9201 E 116th St, Fishers, IN 46037','home-boonshoft':'2600 DeWeese Pkwy, Dayton, OH 45414',
}
out={}
for k,q in Q.items():
    u='https://nominatim.openstreetmap.org/search?'+urllib.parse.urlencode({'q':q,'format':'json','limit':1,'countrycodes':'us'})
    req=urllib.request.Request(u,headers={'User-Agent':'carmel-trip-planner/1.0 (david.hague@gmail.com)'})
    try:
        r=json.load(urllib.request.urlopen(req,timeout=20))
        out[k]=[round(float(r[0]['lat']),5),round(float(r[0]['lon']),5)] if r else None
    except Exception as e: out[k]=None; print('ERR',k,e)
    print(k,out[k]); time.sleep(1.1)
json.dump(out,open('geo.json','w'),indent=0)
