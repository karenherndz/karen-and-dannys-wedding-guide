// Wedding data - embedded for local file access
const WEDDING_DATA = {
  "couple": {
    "person1": "Karen",
    "person1Phone": "(216) 212-6400",
    "person2": "Danny",
    "person2Phone": "(504) 491-6756"
  },
  "date": "2026-04-11",
  "website": "https://karenanddanny.xyz/",

  "family": {
    "karen": {
      "dad": "Jose Nestor Hernandez",
      "dadPhone": "(216) 502-7882",
      "mom": "Kathryn Alatha Williams (Posthumously Honored)",
      "brother": "Jose David Hernandez",
      "brotherPhone": "(216) 375-5326"
    },
    "danny": {
      "mom": "Cindy Milojevic",
      "momPhone": "(708) 606-8839",
      "dad": "Duschan Milojevic",
      "dadPhone": "(708) 689-7000",
      "sister": "Lauren Langenmayr",
      "sisterPhone": "(708) 606-9583"
    },
    "extended": {
      "elizabethMazzie": { "role": "Dad's Wife", "phone": "(216) 767-6293" },
      "peggy": { "role": "Assists Karen and girls", "phone": "(217) 390-6527" },
      "marilyn": { "role": "Assists men with boutonnieres", "phone": "(708) 807-0568" },
      "lauren": "Family",
      "dave": "Family",
      "milo": "Family",
      "remy": "Family",
      "amanda": "Family",
      "doug": "Family",
      "ellison": "Family"
    }
  },

  "venues": {
    "rehearsal": {
      "name": "Industrial Gardens",
      "date": "Friday April 10",
      "time": "1:00 PM - 3:00 PM",
      "address": "1024 Elysian Fields Avenue, New Orleans, LA 70118",
      "notes": "Walk through ceremony and room flip. Antonia sets up banners."
    },
    "welcomeParty": {
      "name": "Milo Gardens",
      "date": "Friday April 10",
      "time": "4:00 PM - 7:00 PM",
      "address": "",
      "notes": "Beer & Wine, Crawfish Boil, Pizza, Music. Marilyn, Peggy, Scottie & Tim prep and greet early arrivals."
    },
    "rehearsalDinner": {
      "name": "Oak & Ale",
      "date": "Friday April 10",
      "time": "7:00 PM",
      "address": "",
      "notes": "Family dinner after rehearsal"
    },
    "ceremony": {
      "name": "Industrial Gardens",
      "date": "Saturday April 11",
      "time": "3:15 PM",
      "address": "1024 Elysian Fields Avenue, New Orleans, LA 70118",
      "notes": "Guests told 3:00 PM. Prelude music (Kamasi Washington - Harmony of Difference) at 2:40 PM.",
      "seating": {
        "right": 52,
        "back": 64,
        "main": 18,
        "danceFloor": 36,
        "courtyard": 18,
        "total": "170-188"
      }
    },
    "layout": {
      "tablesToFlip": 8,
      "notes": "8 round tables (yellow on layout) already decorated and ready to move. Flip all ceremony chairs to face tables for dinner.",
      "bars": ["Ceremony space bar (sets up during flip)", "Courtyard bar (open during cocktail hour)"],
      "photobooth": "14' x 5'",
      "seatingChart": "Near entrance"
    },
    "reception": {
      "name": "Industrial Gardens",
      "date": "Saturday April 11",
      "time": "5:00 PM",
      "address": "1024 Elysian Fields Avenue, New Orleans, LA 70118",
      "notes": "Room flip 4:00-4:30 PM. Cocktail hour during flip."
    },
    "afterParty": {
      "name": "No Dice",
      "date": "Saturday April 11",
      "time": "9:00 PM",
      "address": "",
      "notes": "Thomas Glass Band. Second line at 8:45 PM leads to venue."
    },
    "sundayFarewell": {
      "name": "CastleDay",
      "date": "Sunday April 12",
      "time": "11:00 AM - 2:00 PM",
      "address": "1319 Japonica Street, New Orleans, LA",
      "notes": "Poolside Farewell / Despedida al lado de la piscina. Casual attire."
    },
    "gettingReady": {
      "karen": {
        "name": "Hotel Peter and Paul",
        "notes": "Hair, Makeup, Dress - with Mady, Kelsey, Kali, Kagan. Kagan helps with hair. Peggy assists."
      },
      "danny": {
        "name": "Greatman Loft",
        "notes": "Marilyn assists with boutonnieres"
      }
    }
  },

  "vendors": [
    {
      "role": "Day-of Coordinator",
      "name": "Jeanne Gallo",
      "company": "",
      "phone": "(312) 882-2087",
      "email": "",
      "cost": null,
      "paid": false,
      "arrivalTime": "12:00 PM Saturday",
      "status": "booked",
      "notes": "Oversee setup, vendors, manage ceremony. Distributes vendor payments at 7:30 PM."
    },
    {
      "role": "Caterer",
      "name": "David Hargrove",
      "company": "2 Brothers 1 Love (2B1L)",
      "phone": "(646) 842-9038",
      "email": "",
      "cost": 10661.25,
      "deposit": 6103.86,
      "remainder": 4557.39,
      "arrivalTime": "",
      "status": "booked",
      "notes": "Saturday catering. 50% deposit paid by Cindy & Duschan. Remainder due 4/11/26."
    },
    {
      "role": "Decor / Banners",
      "name": "Antonia Zennaro",
      "company": "",
      "phone": "(504) 518-3218",
      "email": "",
      "cost": 1650,
      "deposit": 825,
      "remainder": 825,
      "arrivalTime": "12:00 PM Saturday",
      "status": "booked",
      "notes": "Make & install banners, draping. Sets up banners at Friday rehearsal. Deposit paid by Jose Nestor Remainder due 4/11/26."
    },
    {
      "role": "DJ, Ritmeaux Krewe & Puerto Rican Second Line",
      "name": "Lady B",
      "company": "",
      "phone": "(504) 214-8105",
      "email": "",
      "cost": 1500,
      "deposit": null,
      "remainder": 1500,
      "arrivalTime": "1:00 PM Saturday",
      "status": "booked",
      "notes": "Cocktail reception music, dancing, PA for ceremony, handheld mic with stand. Leads Puerto Rican second line at 8:45 PM."
    },
    {
      "role": "Piano",
      "name": "Sam Kuslan",
      "company": "",
      "phone": "(203) 535-2159",
      "email": "",
      "cost": null,
      "paid": false,
      "arrivalTime": "2:00 PM Saturday",
      "status": "booked",
      "notes": "Ceremony music. Dates blocked."
    },
    {
      "role": "Furniture Rentals",
      "name": "",
      "company": "YUR Event Rentals",
      "phone": "(504) 218-0726",
      "email": "",
      "cost": 3176,
      "paid": 785.40,
      "amountDue": 2390.69,
      "arrivalTime": "12:00 PM Saturday",
      "pickupTime": "8:50 PM Saturday",
      "status": "booked",
      "notes": "170 fruitwood folding chairs w/ seat pads, 2 wood alpine bars, 12 banquet tables (8'), 7 round tables (60\"), 6 adjustable rounds (30\"), 12 chocolate linens (90x156), 13 chocolate linens (120\" round), 3 trash cans. Includes setup/breakdown. Pickup contact: Jeanne Gallo."
    },
    {
      "role": "Photographer",
      "name": "Stephanie Terrant",
      "company": "",
      "phone": "(219) 776-9158",
      "email": "",
      "cost": 3000,
      "deposit": 300,
      "remainder": 2700,
      "arrivalTime": "2:00 PM Saturday",
      "status": "booked",
      "notes": "First look at 2:00 PM at Greatman Cottage Courtyard. Departs after second line at 8:45 PM. Deposit paid by Karen."
    },
    {
      "role": "Florist",
      "name": "",
      "company": "",
      "phone": "",
      "email": "",
      "cost": null,
      "paid": false,
      "arrivalTime": "1:00 PM Saturday",
      "status": "TBD",
      "notes": "Personal flowers delivered to Greatman Cottage. Jenny leads design team for table flowers."
    },
    {
      "role": "Officiant",
      "name": "Kali Serna",
      "company": "",
      "phone": "(347) 526-6632",
      "email": "",
      "cost": null,
      "paid": false,
      "arrivalTime": "",
      "status": "booked",
      "notes": "Friend officiating ceremony"
    },
    {
      "role": "Cake",
      "name": "",
      "company": "La Boulangerie",
      "phone": "(504) 269-3777",
      "email": "",
      "cost": null,
      "paid": false,
      "arrivalTime": "",
      "status": "TBD",
      "notes": "On Magazine St"
    },
    {
      "role": "After Party Band",
      "name": "Thomas Glass Band",
      "company": "",
      "phone": "",
      "email": "",
      "cost": 3000,
      "deposit": 1300,
      "remainder": 1700,
      "arrivalTime": "",
      "status": "booked",
      "notes": "Playing at No Dice. Deposit paid by Papa (Jose Nestor). Remainder due 4/11/26."
    },
    {
      "role": "Tailor / Dress",
      "name": "Sophie Tran",
      "company": "",
      "phone": "(504) 319-7799",
      "email": "",
      "cost": null,
      "paid": false,
      "arrivalTime": "",
      "status": "booked",
      "notes": "On Magazine St"
    },
    {
      "role": "Bartenders",
      "name": "",
      "company": "Branson Bartending",
      "phone": "(337) 940-2190",
      "email": "",
      "cost": 750,
      "deposit": 300,
      "remainder": 450,
      "arrivalTime": "",
      "status": "booked",
      "notes": "Bar service with BYOB supply (Costco run)"
    },
    {
      "role": "Rain Contingency Tent",
      "name": "",
      "company": "Larkin",
      "phone": "(504) 444-7877",
      "email": "",
      "cost": 3358,
      "deposit": 1679,
      "remainder": 1679,
      "arrivalTime": "",
      "status": "booked",
      "notes": "Tenting option for rain contingency"
    },
    {
      "role": "Rehearsal Dinner",
      "name": "",
      "company": "Oak & Ale",
      "phone": "(504) 324-6658",
      "email": "",
      "cost": null,
      "paid": false,
      "arrivalTime": "",
      "status": "booked",
      "notes": "Friday rehearsal dinner - 7:00 PM"
    }
  ],

  "appointments": [
    {
      "date": "2026-02-10",
      "time": "11:00 AM",
      "event": "Dress Fitting",
      "with": "Sophie Tran",
      "location": "Magazine St",
      "notes": ""
    }
  ],

  "ceremony": {
    "preludeMusic": "Kamasi Washington - Harmony of Difference",
    "processionalMusic": "James Blake - I'll Come Too (Sam Kuslan on piano)",
    "brideProcessionalMusic": "There Goes My Baby (Sam Kuslan on piano)",
    "processional": [
      "Kali enters and stands up front",
      "Cindy escorted to seat by Danny, Duschan follows (sits left side)",
      "Danny stays up front next to Kali",
      "Lauren Langenmayr and Jose David come down the aisle",
      "Ring Bearers enter",
      "Bride's processional music begins - There Goes My Baby",
      "Karen enters with her father Jose Nestor Hernandez",
      "Guests stand as bride enters"
    ],
    "program": [
      "Welcome - Kali",
      "Poem or literature reading",
      "Vows",
      "Ring ceremony",
      "Kiss the bride!"
    ],
    "recessionalMusic": "Gal Costa - Cuidando de Longe",
    "recessionalOrder": [
      "Bride and Groom process down the aisle",
      "Lauren Langenmayr and Jose David process",
      "Cindy, Duschan, and Jose Nestor process",
      "Flower girls guide the rest of the guests"
    ],
    "notes": "Jose Nestor walks Karen down the aisle and takes his seat. Kali says 'You may all be seated' and begins the ceremony. Jeanne holds latecomers until ceremony is over."
  },

  "speeches": {
    "order": [
      { "speaker": "Jose Nestor Hernandez (Karen's Dad)", "time": "3 minutes" },
      { "speaker": "Cindy & Duschan Milojevic (Danny's Parents)", "time": "3 minutes" },
      { "speaker": "Jose David Hernandez (Best Man)", "time": "5 minutes" },
      { "speaker": "Lauren Langenmayr (Danny's Sister / Maid of Honor)", "time": "5 minutes" }
    ],
    "maxTime": "5:30 PM",
    "notes": "Speeches before dinner. Parents and siblings only."
  },

  "dances": {
    "firstDance": {
      "song": "Virgen - Adolescent Orchestra",
      "time": "6:45 PM"
    },
    "parentDance": {
      "time": "After first dance"
    },
    "danceFloorOpen": "6:50 PM"
  },

  "flowers": {
    "delivery": "1:00 PM to Greatman Cottage",
    "list": [
      "1 bridal bouquet",
      "Lauren flowers",
      "1 groom's boutonniere",
      "1 father of groom boutonniere (Duey)",
      "1 Best Bro boutonniere",
      "1 FOB boutonniere (Jose Sr)",
      "4 usher boutonnieres"
    ]
  },

  "staffing": [
    {
      "role": "Plant Setup",
      "name": "Khristian",
      "task": "Transport & layout plants"
    },
        {
      "role": "Flower Girls / Ushers",
      "name": "Flower Girls / Ushers",
      "task": "Hand out flower petals to guests, usher guests to seats"
    },
    {
      "role": "Room Flip Crew",
      "name": "Zach, Joey, John, Gabriel + any guys",
      "task": "Move 7 pre-decorated tables, redistribute ceremony chairs to tables"
    },
    {
      "role": "Cleanup",
      "name": "TBD",
      "task": "Post-event cleanup"
    },
    {
      "role": "After Party Coordinator",
      "name": "Kali Serna",
      "task": "Call to confirm Thomas Glass is set up, let Lady B know we're on for the second line"
    },
    {
      "role": "Design Team Lead",
      "name": "Jenny",
      "task": "Lead placing flowers on tables"
    },
    {
      "role": "Bride Assistant",
      "name": "Peggy",
      "task": "Assists Karen and girls getting ready"
    },
    {
      "role": "Groom Assistant",
      "name": "Marilyn",
      "task": "Assists men with boutonnieres"
    },
    {
      "role": "Friday Welcome Party Prep",
      "name": "Marilyn, Peggy, Scotty, Tim",
      "task": "Prep Milo Gardens for Friday event and greet early arrivals"
    }
  ],

  "flowerGirls": [
    "Jonah", "Jess", "Mady", "Kelsey", "Gabi", "Anna", "Carly",
    "Blair", "Sara K", "Reagan", "Jenny", "Kagan", "Sara B"
  ],
  "flipCrew": [
    "Zach", "Joey", "John", "Gabriel", "+ any guys who want to help"
  ],

  "weddingParty": {
    "maidOfHonor": "Lauren Langenmayr",
    "bestMan": "Jose David Hernandez",
    "karen": {
      "gettingReadyWith": ["Mady", "Kelsey", "Kali", "Kagan"],
      "hairHelp": "Kagan",
      "assistant": "Peggy"
    },
    "danny": {
      "gettingReadyAt": "Greatman Loft",
      "assistant": "Marilyn"
    },
    "ringBearers": "TBD",
    "flowerGirls": "TBD (hand out petals, usher guests)"
  },

  "lodging": {
    "hotels": [
      "Hampton Inn New Orleans French Quarter Market Area",
      "Hotel Peter and Paul",
      "Royal Frenchman Hotel"
    ],
    "vacationRentals": {
      "theSyd": {
        "units": ["A", "B", "C", "D"],
        "assignments": {
          "A": "Mom's family",
          "B": "Danny's family",
          "C": "Danny's family",
          "D": "Papa's family"
        }
      },
      "castleDay": {
        "assignments": "Danny's friends / Karen's friends / VIPs TBD"
      }
    }
  },

  "dayOfItems": {
    "forJeanne": [
      "Table numbers",
      "Receptacle for gift cards",
      "Vendor envelopes with thank you's",
      "Envelope with $50 petty cash in small bills",
      "Board for table seating"
    ],
    "ceremonySetup": [
      "Reserve first two rows with ivory ribbon for family",
      "Set up card box, guest book and pen (courtyard by photobooth if weather permits, otherwise kitchen/dining inside)",
      "Collect cell phones from wedding party"
    ],
    "forGuests": [
      "Custom koozies",
      "Custom kerchiefs for Puerto Rican second line",
      "Maracas for Puerto Rican second line",
      "Chimes to cue guests (Cindy bringing)"
    ]
  },

  "todos": [
    { "task": "Pay photographer remainder ($2,700)", "assignee": "", "due": "Before April 11", "status": "not started", "priority": "high" },
    { "task": "Pay Antonia remainder ($825)", "assignee": "", "due": "4/11/26", "status": "not started", "priority": "high" },
    { "task": "Pay 2B1L catering remainder ($4,557.39)", "assignee": "", "due": "4/11/26", "status": "not started", "priority": "high" },
    { "task": "Pay venue remainder ($3,950)", "assignee": "", "due": "3/31/26", "status": "not started", "priority": "high" },
    { "task": "Pay Thomas Glass Band remainder ($1,700)", "assignee": "", "due": "4/11/26", "status": "not started", "priority": "high" },
    { "task": "Sam Kuslan confirmed for ceremony piano", "assignee": "", "due": "", "status": "done", "priority": "high" },
    { "task": "Dress fitting with Sophie Tran", "assignee": "Karen", "due": "Feb 10, 11am", "status": "scheduled", "priority": "high" },
    { "task": "Confirm layout at venue", "assignee": "", "due": "", "status": "not started", "priority": "high" },
    { "task": "Finalize ceremony music selections", "assignee": "", "due": "", "status": "not started", "priority": "medium" },
    { "task": "Create DJ playlist for dinner", "assignee": "", "due": "", "status": "not started", "priority": "medium" },
    { "task": "Plan Bach Party Trip", "assignee": "", "due": "", "status": "not started", "priority": "medium" },
    { "task": "Finalize lodging assignments", "assignee": "", "due": "", "status": "not started", "priority": "medium" },
    { "task": "Pay YUR Rentals remainder ($2,364.75)", "assignee": "", "due": "Before April 11", "status": "not started", "priority": "high" },
    { "task": "Costco run for liquor/BYOB supplies", "assignee": "", "due": "", "status": "not started", "priority": "medium" },
    { "task": "Book hair and makeup artist", "assignee": "", "due": "", "status": "not started", "priority": "medium" },
    { "task": "Create seating chart and table numbers", "assignee": "", "due": "", "status": "not started", "priority": "medium" },
    { "task": "Order wedding cake from Boulangerie", "assignee": "", "due": "", "status": "not started", "priority": "medium" },
    { "task": "Get marriage license", "assignee": "", "due": "", "status": "not started", "priority": "medium" },
    { "task": "Purchase wedding bands", "assignee": "", "due": "", "status": "not started", "priority": "medium" },
    { "task": "Finalize vows", "assignee": "Karen & Danny", "due": "", "status": "not started", "priority": "medium" },
    { "task": "Create family photo list for photographer", "assignee": "", "due": "", "status": "not started", "priority": "low" },
    { "task": "Order custom koozies", "assignee": "", "due": "", "status": "not started", "priority": "medium" },
    { "task": "Order custom kerchiefs for Puerto Rican second line", "assignee": "", "due": "", "status": "not started", "priority": "medium" },
    { "task": "Order maracas for Puerto Rican second line", "assignee": "", "due": "", "status": "not started", "priority": "medium" },
    { "task": "Order dinnerware disposables", "assignee": "", "due": "", "status": "not started", "priority": "high" },
    { "task": "Book after party DJ for No Dice", "assignee": "", "due": "", "status": "not started", "priority": "high" }
  ],

  "timeline": {
    "friday": [
      { "time": "1:00 - 3:00 PM", "event": "Rehearsal", "location": "Industrial Gardens", "who": "Karen, Danny, Jeanne (1pm), Antonia (1pm for setup), Khristian (plants), Cindy, Duschan, Jose Nestor, Jose David, Lauren, Dave, Milo, Remy, Amanda, Doug, Ellison, Kali, Elizabeth", "notes": "Walk through ceremony and room flip. Jeanne arrives at 1pm. Antonia arrives at 1pm to set up banners/decor. Khristian drops off plants. Give Jeanne all items for next day." },
      { "time": "1:00 - 3:30 PM", "event": "Garden Welcome Crew Set Up", "location": "Milo Gardens", "who": "Marilyn, Peggy, Scottie, Tim", "notes": "Prep Milo Gardens for Friday welcome party" },
      { "time": "3:30 PM", "event": "Back to Milo Gardens", "location": "Milo Gardens", "who": "Karen, Danny, Cindy, Duschan, Jose Nestor, Jose David, Lauren, Dave, Milo, Remy, Amanda, Doug, Ellison, Kali, Elizabeth" },
      { "time": "4:00 - 7:00 PM", "event": "Welcome Party", "location": "Milo Gardens", "who": "Everyone", "notes": "Crawfish boil, pizza, beer & wine, music. High-tops, seating areas." },
      { "time": "7:00 PM", "event": "Rehearsal Dinner", "location": "Oak & Ale", "who": "Karen, Danny, Family" }
    ],
    "saturday": [
      { "time": "11:00 AM", "event": "Setup begins", "location": "Industrial Gardens", "who": "Venue staff" },
      { "time": "12:00 PM", "event": "Jeanne, Antonia & YUR Rentals arrive", "location": "Industrial Gardens", "who": "Jeanne, Antonia, YUR Rentals", "notes": "Jeanne oversees setup. Decor/draping setup and furniture delivery." },
      { "time": "11:30 - 12:30 PM", "event": "Lunch available", "location": "Greatman Cottage/Loft", "who": "Wedding party" },
      { "time": "11:30 AM - 1:30 PM", "event": "Hair & Makeup", "location": "Hotel Peter and Paul", "who": "Karen, Mady, Kelsey, Kali, Kagan", "notes": "Kagan helps with hair. Peggy assists." },
      { "time": "1:00 PM", "event": "Vendors & Crew Arrive", "location": "Industrial Gardens", "who": "Lady B, Jenny and any girls that want to help decorate tables", "notes": "DJ sets up sound." },
      { "time": "1:00 PM", "event": "Flower delivery", "location": "Greatman Cottage", "who": "Florist", "notes": "Bridal bouquet, boutonnieres, Lauren's flowers" },
      { "time": "1:30 PM", "event": "Stephanie meets Karen at P&P", "location": "Hotel Peter and Paul", "who": "Karen, Stephanie Terrant", "notes": "Photographer meets Karen after hair & makeup for photos at Hotel Peter and Paul" },
      { "time": "2:00 PM", "event": "First Look & Sam Kuslan arrives", "location": "Milo Gardens / Industrial Gardens", "who": "Karen, Danny, Photographer, Sam Kuslan", "notes": "First look photos. Sam sets up piano at venue." },
      { "time": "2:30 PM", "event": "Flower Girls / Ushers arrive", "location": "Industrial Gardens", "who": "Flower Girls", "notes": "Hand out flower petals and usher guests to seats at 3pm." },
      { "time": "2:30 - 3:15 PM", "event": "Touch-ups & hang out", "location": "Conference room", "who": "Karen, Danny, Cindy, Duschan, Jose Nestor, Jose David, Lauren", "notes": "Away from guests" },
      { "time": "2:40 PM", "event": "Prelude music begins", "location": "Industrial Gardens", "who": "DJ", "notes": "Kamasi Washington - Harmony of Difference Album" },
      { "time": "3:00 PM", "event": "Guests arrive - Flower Girls usher", "location": "Industrial Gardens", "who": "Flower Girls, Guests", "notes": "Flower girls hand out petals and usher guests. Seat family up front (roped off)." },
      { "time": "3:15 - 3:45 PM", "event": "CEREMONY", "location": "Industrial Gardens", "who": "Everyone", "notes": "Guests told 3:00 PM. Jeanne holds latecomers until ceremony is over." },
      { "time": "4:00 - 4:30 PM", "event": "Room Flip & Cocktail Hour", "location": "Industrial Gardens", "who": "Zach, Joey, John, Gabriel + any guys, Family, Photographer", "notes": "High tops stocked with champagne glasses. Courtyard bar open. Guests hang out in street, balcony, or conference room while guys move 8 round tables and flip all chairs for dinner. Bar in ceremony space sets up during flip. Family photos happening simultaneously." },
      { "time": "5:00 - 6:30 PM", "event": "Dinner & Buffet", "location": "Industrial Gardens", "who": "Everyone", "notes": "DJ plays Karen & Danny's playlist." },
      { "time": "6:15 PM", "event": "Speeches", "location": "Industrial Gardens", "who": "Jose Nestor, Cindy, Duschan, Jose David, Lauren", "notes": "After everyone has their meal." },
      { "time": "6:35 PM", "event": "First Dance & Parent Dance", "location": "Industrial Gardens", "who": "Karen & Danny, then Parents", "notes": "First dance song: Virgen - Adolescent Orchestra." },
      { "time": "6:40 PM", "event": "Dance Floor Open!", "location": "Industrial Gardens", "who": "Everyone" },
      { "time": "7:30 PM", "event": "Dessert", "location": "Industrial Gardens", "who": "Milo announces", "notes": "Milo does the dessert announcement." },
      { "time": "7:30 PM", "event": "Vendor payments distributed", "location": "Industrial Gardens", "who": "Jeanne" },
      { "time": "8:45 PM", "event": "Puerto Rican Second Line Begins", "location": "Industrial Gardens to No Dice", "who": "Everyone", "notes": "DJ concludes, photographer departs. Pass out maracas/kerchiefs." },
      { "time": "9:00 PM", "event": "Second Line Lands at No Dice", "location": "No Dice", "who": "Everyone", "notes": "Jam out in the street, then head inside for drinks and hanging out." },
      { "time": "9:30 PM", "event": "Thomas Glass Band!", "location": "No Dice", "who": "Everyone", "notes": "Live music!" }
    ],
    "sunday": [
      { "time": "11:00 AM - 2:00 PM", "event": "Poolside Farewell", "location": "CastleDay, 1319 Japonica St", "who": "Everyone", "notes": "Despedida al lado de la piscina. Casual attire." }
    ]
  },

  "budget": {
    "totalBudget": 39000,
    "totalCosts": 38531.94,
    "totalDeposits": 16411.80,
    "totalRemaining": 15797.14,
    "budgetRemainder": 468.06,
    "expenses": [
      { "item": "PJI Industrial Garden (venue, security, clean)", "total": 4700, "deposit": 750, "paid": true, "remainder": 3950, "dueDate": "3/31/26", "whoPaid": "Danny" },
      { "item": "Tenting option", "total": 3358, "deposit": 1679, "paid": true, "remainder": 1679, "dueDate": null, "whoPaid": null },
      { "item": "Insurance", "total": 160, "deposit": null, "paid": false, "remainder": 160, "dueDate": null, "whoPaid": null },
      { "item": "Tailoring", "total": 350, "deposit": null, "paid": false, "remainder": 350, "dueDate": null, "whoPaid": null },
      { "item": "Karen's Dress", "total": 2242.69, "deposit": 2242.69, "paid": true, "remainder": 0, "dueDate": "N/A", "whoPaid": "Elizabeth ($1000), Karen ($1242.69)" },
      { "item": "Stationary & Invites", "total": 600, "deposit": 600, "paid": true, "remainder": 0, "dueDate": "N/A", "whoPaid": "Jose Nestor" },
      { "item": "Bartenders (Branson)", "total": 750, "deposit": 300, "paid": true, "remainder": 450, "dueDate": null, "whoPaid": "Jose Nestor" },
      { "item": "Restroom Trailer", "total": 650, "deposit": null, "paid": false, "remainder": 650, "dueDate": null, "whoPaid": null, "estimated": true },
      { "item": "DJ, Ritmeaux Krewe, Puerto Rican Second Line & Ceremony Sound", "total": 1500, "deposit": 1500, "paid": false, "remainder": 0, "dueDate": null, "whoPaid": null },
      { "item": "Antonia's Decorating Setup", "total": 1650, "deposit": 825, "paid": true, "remainder": 825, "dueDate": "4/11/26", "whoPaid": "Jose Nestor" },
      { "item": "Alcohol (wholesale liquor) Both Days", "total": 1734, "deposit": null, "paid": false, "remainder": 1734, "dueDate": null, "whoPaid": null, "estimated": true },
      { "item": "Photographer (Stephanie Terrant)", "total": 3000, "deposit": 300, "paid": true, "remainder": 2700, "dueDate": null, "whoPaid": "Karen" },
      { "item": "Furniture Rental (YUR)", "total": 3176, "deposit": 811.25, "paid": true, "remainder": 2364.75, "dueDate": null, "whoPaid": null },
      { "item": "Saturday Catering (2B1L)", "total": 10661.25, "deposit": 6103.86, "paid": true, "remainder": 4557.39, "dueDate": "4/11/26", "whoPaid": "Cindy & Duschan" },
      { "item": "Food for Friday", "total": 500, "deposit": null, "paid": false, "remainder": 500, "dueDate": null, "whoPaid": null, "estimated": true },
      { "item": "Clean up Staff", "total": 300, "deposit": null, "paid": false, "remainder": 300, "dueDate": null, "whoPaid": null },
      { "item": "After Party DJ", "total": 500, "deposit": null, "paid": false, "remainder": 500, "dueDate": null, "whoPaid": null },
      { "item": "After Party Live Band (Thomas Glass)", "total": 3000, "deposit": 1300, "paid": true, "remainder": 1700, "dueDate": "4/11/26", "whoPaid": "Papa (Jose Nestor)" }
    ],
    "tbd": [
      "Danny's Suit",
      "After Party DJ",
      "Fruit & Flowers/Florist",
      "Friday Food (pizza & crawfish)"
    ]
  }
};
