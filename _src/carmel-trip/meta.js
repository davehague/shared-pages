const BLOCKS=[
 {id:'hotel',day:'Both nights',title:'Where we sleep',pickOne:true,lede:'Filtered for free hot breakfast first (Valerie’s non-negotiable), then free parking. Pool is called out on every card. Rates are indicative for Oct 16–18; click through to book.'},
 {id:'fri-drive',day:'Friday morning',title:'The drive out',lede:'About three hours on I-70, same time zone. Leave as early as you like. The choice is really “straight to the museum” vs. “break the drive in Dayton.”'},
 {id:'museum',day:'Fri, Sat or Sun',title:'The Children’s Museum: which day gets the whole day?',pickOne:true,lede:'It is enormous (five floors plus the outdoor Sports Legends campus), so budget the full 10–5. Free garage, dated tickets (buy this week for the online discount). The Playscape under-5 area is closed until Nov 6. The question is which day you give it.'},
 {id:'fri-pm',day:'Friday afternoon & evening',title:'First afternoon in Indy',lede:'Check-in is usually 3–4pm. Something outdoors to shake off the car, then a Halloween night if you want one.'},
 {id:'sat-am',day:'Saturday morning',title:'Saturday morning',lede:'Nothing is fixed. Options range from a slow hotel breakfast and a Carmel park to a train ride or a drive into downtown Indy. Some of these run into the afternoon, so they trade against the Carmel festivals below.'},
 {id:'carmel',day:'Saturday afternoon',title:'Saturday afternoon in Carmel',lede:'Two free festivals run the same 2–5pm window six miles apart (Arts in Autumn at Midtown, Boo ’n Brew at Clay Terrace), plus the Arts & Design District fillers. Picking neither and doing a park and a nap is a legitimate option too.'},
 {id:'sat-pm',day:'Saturday evening (or any slot)',title:'Halloween-ish and other fillers',lede:'The gentler Halloween options, a pumpkin patch, and a rain plan.'},
 {id:'parks',day:'Any open hour',title:'Parks and play, Carmel & Hamilton County',lede:'Free outdoor spots within 20 minutes of the hotel. Good for the gap between breakfast and an event, or a Sunday-morning run-around before the drive home.'},
 {id:'eat',day:'Any meal',title:'Where to eat',lede:'Kid-tolerant, near Midtown or on the way to things. Hotel breakfast covers mornings.'},
 {id:'sun-am',day:'Sunday morning to early afternoon',title:'Sunday before the drive',lede:'Hotel breakfast, then roughly 9:30 to 2:00 before you have to point east. Everything here is open Sunday and sits within 30 minutes of the hotel; the museum 10–2 option lives in its own chapter above. Cards marked “also in” are the same card (and the same votes) as elsewhere.'},
 {id:'sun-drive',day:'Sunday',title:'The drive home',lede:'Target: home by 5–6pm so Valerie’s 7pm bath and a school-night bedtime hold. Three hours of driving plus any stops, so leave Carmel (or the museum) by 2–2:30. Uranus is right at the Ohio line and costs only the time you spend inside.'}
];
const FACTS=[
 '📅 <b>Fri Oct 16 → Sun Oct 18</b>','🚗 <b>~3h</b> Worthington → Carmel, I-70 W','🕐 Same time zone','🎃 Two free Carmel festivals Sat 2–5pm (pick one or neither)','🦖 Museum is a <b>full day</b>: 10–5, free garage','🌡️ Typical mid-Oct: highs mid-60s, lows mid-40s · sunset ~7:03pm'
];
const PATHS=[
 {id:'easy',title:'🧸 Easy mode (David’s pick)',desc:'Museum all day Friday straight off the road, Food Truck Nights for dinner, winter market + a park Saturday morning, Arts in Autumn at 2, Bub’s, slow Sunday breakfast and Uranus on the way home.',items:['h-drury','drive-early','cm-fri','fri-foodtrucks','sat-market','park-westermeier','aia','eat-bubs','home-uranus']},
 {id:'halloween',title:'🎃 Max Halloween',desc:'Conner Prairie Headless Horseman Friday night (early hayride), Boo ’n Brew trick-or-treat Saturday afternoon, museum Sunday 10–2 with the lights-on Haunted House, home by 6.',items:['h-drury','drive-early','fri-hh','sat-market','boonbrew','cm-sun','home-uranus']},
 {id:'indy',title:'🏙️ More Indy, less Carmel',desc:'Museum Friday at opening, Holliday Park, ZooBoo Saturday after the Carmel festival, Portillo’s and Uranus on the way home.',items:['h-drury','drive-early','cm-fri','fri-hp','sat-market','aia','zooboo','home-portillos','home-uranus']},
 {id:'rain',title:'🌧️ If it rains',desc:'Museum Friday, Monon Community Center pool + indoor playground, miniatures museum and Bub’s, Boonshoft on the way home.',items:['cm-fri','monon-center','minis','eat-bubs','home-boonshoft']}
];
