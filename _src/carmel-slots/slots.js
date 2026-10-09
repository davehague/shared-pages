const DAYS=[
 {id:'fri',name:'Friday',date:'Oct 16',lede:'Leave whenever you like. The real decision is whether the Children’s Museum eats the day on the way in.'},
 {id:'sat',name:'Saturday',date:'Oct 17',lede:'The only day with no driving on either end. Two free Carmel festivals share the 2–5 window; the museum or the zoo could take the whole day instead.'},
 {id:'sun',name:'Sunday',date:'Oct 18',lede:'Home by 5–6pm for bath and a school night, so leave Carmel by 2–2:30. Morning is real; the afternoon is the drive, with one stop.'}
];
const SLOTS=[
 {id:'full',name:'All day options',short:'All day',kind:'full'},
 {id:'am',name:'Morning',short:'AM',kind:'do'},
 {id:'pm',name:'Afternoon',short:'PM',kind:'do'},
 {id:'eve',name:'Evening',short:'Eve',kind:'eve'}
];
const DAYSLOTS={fri:['full','am','pm','eve'],sat:['full','am','pm','eve'],sun:['am','pm']};
const SLOTLEDE={
 'fri-full':'One thing, 10–5, then dinner.','fri-am':'How you leave Worthington and what you do with the first hours.','fri-pm':'Roughly 1–5. Check-in at the hotel is around 3–4pm.','fri-eve':'5pm on. Dinner, one outing if you have the energy, then wind down.',
 'sat-full':'One thing, 10–5, then dinner.','sat-am':'After hotel breakfast, roughly 9–1.','sat-pm':'Roughly 1–5. The two Carmel festivals both run 2–5.','sat-eve':'5pm on. Dinner, a Halloween night if you want one, then wind down.',
 'sun-am':'Check out, breakfast, then 9:30–2 at the latest.','sun-pm':'The drive home: lunch and one stop. Home by 5–6.'
};
/* which options fit which slot; optional per-slot note/when override. kind: do | eat | wind */
const AVAIL=[
 // Friday
 {id:'drive-early',s:['fri-am']},{id:'drive-airforce',s:['fri-am']},{id:'drive-hayes',s:['fri-am']},{id:'fri-leisure',s:['fri-am']},
 {id:'cm-fri',s:['fri-full']},{id:'zoo-day',s:['fri-full','sat-full'],note:'Friday: arrive by 11 if you leave at 7:30 and skip stops.'},
 {id:'fri-hp',s:['fri-pm','sat-am','sat-pm','sun-am']},{id:'fri-settle',s:['fri-pm']},{id:'park-westermeier',s:['fri-pm','sat-am','sat-pm','sun-am']},{id:'park-west',s:['fri-pm','sat-am','sat-pm','sun-am']},
 {id:'zooboo',s:['fri-pm','sat-pm'],note:'ZooBoo starts at 2; the trick-or-treat trail and rides run into the evening (to 9 Fri/Sat).'},
 {id:'fri-foodtrucks',s:['fri-eve'],kind:'eat'},{id:'kickback',s:['fri-eve','sat-eve'],kind:'eat'},{id:'fri-hh',s:['fri-eve','sat-eve'],note:'Festival runs 5–10; book the earliest hayride slot or skip the hayride.'},{id:'fri-newfields',s:['fri-eve','sat-eve']},{id:'fri-pumpkintown',s:['fri-pm','fri-eve','sat-am','sat-pm','sun-am'],note:'Times are by reservation; call 317-255-9230.'},
 {id:'home-portillos',s:['fri-eve','sat-eve','sat-pm'],kind:'eat',note:'Westfield (870 E SR 32) is the closer one for a Carmel evening, 10–15 min.'},
 {id:'eat-bubs',s:['fri-eve','sat-am','sat-pm','sat-eve','sun-am'],kind:'eat'},{id:'eat-sunking',s:['fri-eve','sat-pm','sat-eve'],kind:'eat'},{id:'eat-sweets',s:['fri-eve','sat-am','sat-pm','sat-eve','sun-am'],kind:'eat'},
 {id:'wind-pool',s:['fri-eve','sat-eve'],kind:'wind'},{id:'wind-early',s:['fri-eve','sat-eve'],kind:'wind'},{id:'wind-monon',s:['fri-eve','sat-eve'],kind:'wind'},
 // Saturday
 {id:'eat-hotel',s:['sat-am','sun-am'],kind:'eat'},{id:'cm-sat',s:['sat-full']},{id:'sun-cp',s:['sat-full','sat-am','sun-am'],note:'Saturday full day: 10–4 covers it; Sunday: 10–1:30.'},
 {id:'sat-market',s:['sat-am']},{id:'sat-fallfest',s:['sat-am']},{id:'sat-train',s:['sat-am','sat-pm','sun-pm'],note:'Sunday’s 1pm run ends ~2:05 and pushes departure to 2:30, home ~6:30.'},{id:'eat-rosies',s:['sat-am','sun-am'],kind:'eat'},{id:'park-coolcreek',s:['sat-am','sat-pm','sun-am']},{id:'park-flatfork',s:['sat-am','sat-pm','sun-am']},{id:'park-coxhall',s:['sat-am','sat-pm','sun-am']},{id:'park-founders',s:['sat-am','sat-pm','sun-am']},{id:'pumpkin-russell',s:['sat-am','sat-pm','sun-am']},
 {id:'aia',s:['sat-pm']},{id:'boonbrew',s:['sat-pm']},{id:'sat-locallymade',s:['sat-pm']},{id:'sat-pioneer',s:['sat-pm']},{id:'sat-wfc',s:['sat-am','sat-pm']},{id:'minis',s:['fri-pm','sat-am','sat-pm','sun-am'],note:'Sunday opens at 1, so Sunday is a stretch.'},{id:'history',s:['sat-am','sat-pm','sun-am'],note:'Sunday opens at noon.'},
 {id:'monon-center',s:['fri-pm','sat-am','sat-pm','sun-am']},{id:'rain-statemuseum',s:['fri-pm','sat-am','sat-pm']},{id:'eat-tpc',s:['sat-am','sun-am'],kind:'eat'},
 // Sunday drive
 {id:'cm-sun',s:['sun-am']},{id:'home-uranus',s:['sun-pm']},{id:'home-portillos-sun',s:['sun-pm'],kind:'eat'},{id:'home-boonshoft',s:['sun-pm']},{id:'home-straight',s:['sun-pm']}
];
/* options that exist only in this view */
const EXTRA=[
 {id:'eat-hotel',block:'eat',rec:true,title:'Breakfast at the hotel',when:'Sat & Sun · from 6–7:30am depending on hotel',where:'Wherever you book',why:'Valerie’s non-negotiable, and free at every shortlisted hotel. The weekend window is the thing to watch: some start at 7, Staybridge not until 7:30, and most close by 10.',tags:['free:Free with the room','Food','kid:The reason for the hotel filter'],
  body:'<div class="k">Weekend breakfast hours by hotel</div><ul><li>Drury Plaza: hot buffet daily; weekend hours not posted (typically 7–10). Waffles, eggs, biscuits and gravy.</li><li>Residence Inn: Sat–Sun 7–10am (verified)</li><li>Fairfield Inn: daily 6–10am (verified; best hours)</li><li>Staybridge Suites: weekends 7:30–10:30am (verified)</li><li>Home2 / Homewood: hot buffet; hours not posted</li><li>Holiday Inn Express: Express Start buffet; hours not posted</li><li>Hotel Carmichael: paid, continental ~$10–20 each</li></ul><div class="tip">Sunday: eat at opening, check out, load the car, and you are on the road to the morning activity by 9:30.</div>',links:[{t:'Residence Inn (hours)',u:'https://www.marriott.com/en-us/hotels/indcr-residence-inn-indianapolis-carmel/overview/'},{t:'Fairfield Inn (hours)',u:'https://www.marriott.com/en-us/hotels/indml-fairfield-inn-and-suites-indianapolis-carmel/overview/'},{t:'Staybridge (hours)',u:'https://www.ihg.com/staybridge/hotels/us/en/indianapolis/indca/hoteldetail'},{t:'Drury',u:'https://www.druryhotels.com/locations/indianapolis-in/drury-plaza-hotel-indianapolis-carmel'}]},
 {id:'fri-leisure',block:'fri-drive',title:'Leave mid-morning, arrive after lunch',when:'Fri · depart ~10am, arrive ~1:30',where:'I-70 West',why:'No alarm, no agenda. Arrive in time for a park and check-in, save the museum for Saturday or Sunday.',tags:['free:Free','Low-key'],body:'<p>Same route and road-work notes as the early-departure card. A 1:30 arrival still leaves two hours before check-in for Holliday Park or Westermeier Commons.</p>'},
 {id:'fri-settle',block:'fri-pm',title:'Check in, unpack, swim',when:'Fri · 3–5pm',where:'The hotel',why:'The honest option after three hours in the car: check in, let Valerie swim, then a short evening. Every shortlisted hotel has a pool.',tags:['free:Free','pool:Pool','Wind down'],body:''},
 {id:'zoo-day',block:'sat-pm',title:'Indianapolis Zoo, the whole day (ZooBoo from 2)',when:'Fri/Sat · 9am–7pm+',where:'1200 W Washington St, Indianapolis · 35 min',why:'Animals in the morning when they are active, lunch, then ZooBoo from 2: trick-or-treat trail, potions show, backwards carousel, costumes welcome. Up to 50% off buying online ahead. Parking $10.',tags:['cost:$15–35 adult, kids $15–32','kid:Safest Halloween pick','Outdoor'],body:'<p>Rides close at 7. ZooBoo is included with admission. See the ZooBoo card for details and sources.</p>',links:[{t:'ZooBoo official',u:'https://www.indianapoliszoo.com/zoo-events/zooboo/'},{t:'Visit Indy pricing',u:'https://www.visitindy.com/directory/indianapolis-zoo-located-in-white-river-state-park/'}],map:'Indianapolis Zoo'},
 {id:'kickback',block:'eat',title:'Drury 5:30 Kickback (free dinner at the hotel)',when:'Daily 5:30–7pm',where:'Drury Plaza Carmel only',why:'If you book Drury: free hot food (rotating; think baked potatoes, hot dogs, pasta, salad) plus three drinks per adult. Eat in your pajamas, swim, bed. Only applies at Drury.',tags:['free:Free with the room','Food','Wind down'],body:'',links:[{t:'Drury page',u:'https://www.druryhotels.com/locations/indianapolis-in/drury-plaza-hotel-indianapolis-carmel'}]},
 {id:'wind-pool',block:'parks',title:'Hotel pool, then bed',when:'Any evening',where:'The hotel',why:'Thirty minutes in the pool is the most reliable wind-down there is. Drury, Staybridge and Holiday Inn Express have whirlpools too.',tags:['free:Free','pool:Pool'],body:''},
 {id:'wind-early',block:'parks',title:'Early night, no plan',when:'Any evening',where:'The hotel',why:'Dinner by 6, in the room by 7, lights out by 8. Valuable after a festival day.',tags:['free:Free'],body:''},
 {id:'wind-monon',block:'parks',title:'Monon Trail stroll + ice cream',when:'Any evening before dark (~7pm)',where:'Midtown Carmel',why:'Walk the Monon from Midtown to Main Street (10 min) for Bub’s ice cream or Graeter’s, then back. Sunset is about 7.',tags:['free:Free','Outdoor'],body:''},
 {id:'home-portillos-sun',block:'sun-drive',title:'Portillo’s Fishers for lunch on the way out',when:'Sun · opens 10:30',where:'9201 E 116th St, Fishers · on I-69',why:'Italian beef and a chocolate cake shake 15 minutes into the drive. Fishers sits on I-69 toward I-465/I-70.',tags:['cost:$$','Food'],body:'',links:[{t:'Portillo’s locations',u:'https://locations.portillos.com/'}],map:'Portillo\'s Fishers IN'},
 {id:'home-straight',block:'sun-drive',title:'Straight home, no stops',when:'Sun · leave by 2:30, home ~5:30',where:'I-70 East',why:'Lunch in the car, one gas-and-bathroom stop, home with time to unpack and start the week.',tags:['free:Free'],body:''}
];
