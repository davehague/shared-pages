const BLOCKS=[
 {id:'hotel',day:'Both nights',title:'Where we sleep',pickOne:true,lede:'Filtered for free hot breakfast first (Valerie’s non-negotiable), then free parking. Pool is called out on every card. Rates are indicative for Oct 16–18; click through to book.'},
 {id:'fri-drive',day:'Friday morning',title:'The drive out',lede:'About three hours on I-70, same time zone. Leave as early as you like. The choice is really “straight to the museum” vs. “break the drive in Dayton.”'},
 {id:'museum',day:'Fri, Sat or Sun',title:'The Children’s Museum: which window?',pickOne:true,lede:'Open 10–5 all three days, free garage, dated tickets (buy this week for the online discount). The Playscape under-5 area is closed until Nov 6. The only real question is when.'},
 {id:'fri-pm',day:'Friday afternoon & evening',title:'First afternoon in Indy',lede:'Check-in is usually 3–4pm. Something outdoors to shake off the car, then a Halloween night if you want one.'},
 {id:'sat-am',day:'Saturday morning',title:'Saturday before Arts in Autumn',lede:'Arts in Autumn is the Saturday anchor at 2pm in Carmel. Morning options range from a slow hotel breakfast and a Carmel park to a drive into downtown Indy.'},
 {id:'carmel',day:'Saturday afternoon',title:'Carmel: Arts in Autumn and the neighborhood',lede:'Midtown Plaza, the Monon, the Arts & Design District. The cards here are the ones you asked about plus what Indy’s Child recommends for families in Midtown.'},
 {id:'sat-pm',day:'Saturday evening (or any slot)',title:'Halloween-ish and other fillers',lede:'The gentler Halloween options, a pumpkin patch, and a rain plan.'},
 {id:'parks',day:'Any open hour',title:'Parks and play, Carmel & Hamilton County',lede:'Free outdoor spots within 20 minutes of the hotel. Good for the gap between breakfast and an event, or a Sunday-morning run-around before the drive home.'},
 {id:'eat',day:'Any meal',title:'Where to eat',lede:'Kid-tolerant, near Midtown or on the way to things. Hotel breakfast covers mornings.'},
 {id:'sun-drive',day:'Sunday',title:'The drive home',lede:'Museum first if you picked Sunday, then I-70 east. Uranus is right at the Ohio line, so it costs nothing to stop.'}
];
const FACTS=[
 '📅 <b>Fri Oct 16 → Sun Oct 18</b>','🚗 <b>~3h</b> Worthington → Carmel, I-70 W','🕐 Same time zone','🎃 <b>Arts in Autumn</b> Sat 2–5pm, Midtown Plaza','🦖 Museum <b>10–5</b> all three days, free garage','🌡️ Typical mid-Oct: highs mid-60s, lows mid-40s · sunset ~7:03pm'
];
const PATHS=[
 {id:'easy',title:'🧸 Easy mode (David’s pick)',desc:'Food Truck Nights Friday, winter market + Westermeier Commons Saturday morning, Arts in Autumn at 2, Bub’s for dinner, Children’s Museum Sunday at opening, Uranus on the way home.',items:['h-drury','drive-early','fri-foodtrucks','park-westermeier','sat-market','aia','eat-bubs','cm-sun','home-uranus']},
 {id:'halloween',title:'🎃 Max Halloween',desc:'Conner Prairie Headless Horseman Friday night (early hayride), Boo ’n Brew trick-or-treat Saturday afternoon, pumpkin patch, museum Sunday with the lights-on Haunted House.',items:['h-drury','drive-early','fri-hh','sat-market','boonbrew','pumpkin-russell','cm-sun','home-uranus']},
 {id:'indy',title:'🏙️ More Indy, less Carmel',desc:'Museum Friday at opening, Holliday Park, ZooBoo Saturday after the Carmel festival, Portillo’s and Uranus on the way home.',items:['h-drury','drive-early','cm-fri','fri-hp','sat-market','aia','zooboo','home-portillos','home-uranus']},
 {id:'rain',title:'🌧️ If it rains',desc:'Museum Friday, Monon Community Center pool + indoor playground, miniatures museum and Bub’s, Boonshoft on the way home.',items:['cm-fri','monon-center','minis','eat-bubs','home-boonshoft']}
];
