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
      "time": "2:00 PM - 3:00 PM",
      "address": "1024 Elysian Fields Avenue, New Orleans, LA 70117",
      "notes": "Walk through ceremony and room flip plan. Antonia handles initial setup. Danny places plants. Bring staghorn fern and mic stand."
    },
    "welcomeParty": {
      "name": "Milo Gardens",
      "date": "Friday April 10",
      "time": "4:00 PM - 7:00 PM",
      "address": "553 ½ Brooklyn Ave., Jefferson, La 70121",
      "notes": "Beer & Wine, Costco appetizers/dips, Pizza Delicious ordered. Music from Karen and Danny's red speaker. High boys and seating areas. Karen's friend manages cleanup."
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
      "address": "1024 Elysian Fields Avenue, New Orleans, LA 70117",
      "notes": "Guests told 3:00 PM. Prelude music (Kamasi Washington - Harmony of Difference) at 2:40 PM.",
      "guestCount": {
        "total": 180,
        "drinking": "145-150"
      },
      "seating": {
        "right": 56,
        "back": 64,
        "bottom": 18,
        "danceFloor": 37,
        "courtyard": 18,
        "total": 174
      }
    },
    "layout": {
      "tablesToFlip": 8,
      "notes": "Tables in yellow are items to flip — already decorated and ready to move. Ceremony chairs redistributed to tables during this time.",
      "bars": ["Ceremony space bar (sets up during flip)", "Courtyard bar (open during cocktail hour)"],
      "photobooth": "14' x 5'",
      "seatingChart": "5' x 2', near entrance",
      "eatingGroups": [
        "Tables 10 thru 13",
        "Tables 6 thru 9",
        "Tables 4 & 5",
        "Tables 2 & 3",
        "Table 1"
      ]
    },
    "reception": {
      "name": "Industrial Gardens",
      "date": "Saturday April 11",
      "time": "5:00 PM",
      "address": "1024 Elysian Fields Avenue, New Orleans, LA 70117",
      "notes": "Room flip 4:00-4:30 PM. Cocktail hour during flip."
    },
    "afterParty": {
      "name": "No Dice",
      "date": "Saturday April 11",
      "time": "9:00 PM",
      "address": "",
      "capacity": 200,
      "notes": "Thomas Glass Band 9:00-10:45 PM. DJs ET Deaux & Kagan B2B 11:00 PM - 1:00 AM. Second line at 8:45 PM leads to venue. 21+ only. 5 minute walk from wedding venue. Capacity 200. Cash bar. Tacos available for purchase late night. Food in back. No deposit necessary — confirmed. Dani is 22. Cindy bringing water and cocktail dispensers."
    },
    "sundayFarewell": {
      "name": "CastleDay",
      "date": "Sunday April 12",
      "time": "11:00 AM - 2:00 PM",
      "address": "1319 Japonica Street, New Orleans, LA",
      "notes": "Poolside Farewell / Despedida al lado de la piscina. Casual attire. Sunday brunch: Sarah drops off coffee and bagels, someone picks up donuts. Leftover Caribbean food from wedding (maduros, ropa vieja, jerk chicken, rice and peas, stewed cabbage) set up on large dining table. Plenty of seating throughout the house."
    },
    "gettingReady": {
      "karen": {
        "name": "Hotel Peter and Paul (check-in 9:00 AM)",
        "notes": "Karen dresses at Grand Loft Room 309. Hair, Makeup, Dress - with Lauren, Mady, Kelsey, Kali, Kagan. Makeup: Karen & Lauren only (Glam Nola). Kagan helps with hair. Peggy assists."
      },
      "danny": {
        "name": "Greatman Cottage, 3421 Dauphine Street",
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
      "notes": "Arrives 12:00 PM. Three hours setup time. Oversee all vendors. Set up card box, guest book, pen in conference room. Conference room: iPad setup, white tablecloths, rearrange seating, photograph display by windows. Juliet sets up iPad and photographs. Reserve first two rows with ivory ribbon for family (both sides). Ribbon and white duct tape in bride's bag with Jeanne. Checks in with ceremony musicians and DJ. Meets bridal party at 2 PM. Preps wedding party on ceremony details. Collects cell phones. Holds latecomers. Distributes vendor payments and tucks away gifts at 7:45 PM."
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
      "notes": "Saturday catering. 50% deposit paid by Cindy & Duschan. Remainder due 4/11/26. Will likely set up a 10x10 ft space on the street — need to confirm exact location with PJI."
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
      "arrivalTime": "Friday Rehearsal & 12:00 PM Saturday",
      "status": "booked",
      "notes": "Make & install banners, draping. Sets up banners at Friday rehearsal. Deposit paid by Jose Nestor Remainder due 4/11/26."
    },
    {
      "role": "DJ, Ritmeaux Krewe & Puerto Rican Second Line",
      "name": "Bianca (Lady B)",
      "company": "",
      "phone": "(504) 214-8105",
      "email": "",
      "cost": 1500,
      "deposit": 1500,
      "remainder": 0,
      "arrivalTime": "1:00 PM Saturday",
      "status": "booked",
      "paid": true,
      "notes": "Paid in full. Cocktail reception music, dancing, PA for ceremony, handheld mic with stand. We provide mic stand. Leads Puerto Rican second line at 8:45 PM."
    },
    {
      "role": "Piano",
      "name": "Sam Kuslan",
      "company": "",
      "phone": "(203) 535-2159",
      "email": "",
      "cost": null,
      "paid": false,
      "arrivalTime": "12:00 PM Saturday",
      "status": "booked",
      "notes": "Ceremony music. Dates blocked. Bringing his own amp. Sets up piano for ceremony."
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
      "arrivalTime": "1:45 PM Saturday (from Hotel Peter and Paul)",
      "status": "booked",
      "notes": "Arrives 1:45 PM from Hotel Peter and Paul. First look photos at the venue. Departs after second line at 8:45 PM. Deposit paid by Karen."
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
      "notes": "Personal flowers delivered to Greatman Cottage. Jenny leads design team (Sara B, Liz, maybe Tom) for placing cut flowers on tables."
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
      "notes": "On Magazine St. Round chocolate cake with cool fruit on top."
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
      "notes": "Playing at No Dice 9:00-10:45 PM. Remainder due 4/11/26."
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
      "name": "Bronson",
      "company": "Branson Bartending",
      "phone": "(337) 940-2190",
      "email": "",
      "cost": 750,
      "deposit": 300,
      "remainder": 450,
      "arrivalTime": "2:00 PM Saturday",
      "status": "booked",
      "notes": "2:00 PM – 8:45 PM. 180 guests total, 145–150 drinking. Bartenders bring: bar tools (mats, shakers, strainers, ice bucket), wine keys, beer keys, fruit + garnishes, straws. They refill ice and water. Can refill ice, water, and liquor at Robert's grocery across the street if compensated. We provide: all alcohol, all cocktail ingredients, 2 carafes for passion fruit cocktail, 2 carafes for ice + small tables for them, all ice, gallons of Ozarka water (stored in fridge)."
    },
    {
      "role": "Restroom Trailer",
      "name": "Garrett",
      "company": "Beyond Septic Solutions",
      "phone": "(985) 688-8875",
      "email": "",
      "cost": 650,
      "deposit": null,
      "remainder": 650,
      "arrivalTime": "Morning of Saturday",
      "status": "booked",
      "notes": "3-stall restroom trailer. Arrives morning of Saturday. Liz will meet Garrett to move her car from the parking spot on Elysian Fields Ave. Hookup needed at hitch end of trailer (see photos). Setup location: Elysian Fields Ave parking lot.",
      "photos": ["documents/restroom-trailer-location.jpg", "documents/restroom-trailer-hookup.jpeg"]
    },
    {
      "role": "Makeup",
      "name": "Candace",
      "company": "Glam Nola",
      "phone": "(504) 432-9395",
      "email": "info@glam-nola.com",
      "cost": null,
      "paid": false,
      "arrivalTime": "",
      "status": "booked",
      "notes": ""
    },
    {
      "role": "Photo Booth",
      "name": "",
      "company": "Kru Photobooth",
      "phone": "",
      "email": "",
      "cost": null,
      "paid": false,
      "arrivalTime": "",
      "status": "TBD",
      "notes": "Photo booth for reception. 14' x 5' space allocated."
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
      "notes": "Friday rehearsal dinner - 7:00 PM. Contact: Jillian (504) 210-7709"
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
    "preludeMusic": "Kamasi Washington Album (DJ plays at 2:40 PM)",
    "processionalMusic": "Sam Kuslan piano - I Can't Believe The Way We Flow (James Blake)",
    "brideProcessionalMusic": "Sam Kuslan piano - There Goes My Baby (Charlie Wilson)",
    "processional": [
      "Kali enters and stands up front",
      "Karen's grandmother escorted by Amri (Karen's aunt) to left side",
      "Cindy escorted to seat by Danny, Duey follows (left side of aisle)",
      "Danny stays up front next to Kali",
      "Lauren and Jose come down the aisle",
      "Ring Bearers enter",
      "Bride's processional music begins - There Goes My Baby",
      "Guests stand as music changes and bride enters",
      "Karen enters with her father Jose N."
    ],
    "program": [
      "Welcome - Kali",
      "Kali speaks and ends with Kat's advice",
      "Duschan Milojevic Speech (2 minutes)",
      "Jose Hernandez Speech (2 minutes)",
      "Vows",
      "Ring ceremony",
      "Kiss the bride!"
    ],
    "recessionalMusic": "Gal Costa - Cuidando de Longe (DJ plays)",
    "recessionalOrder": [
      "Bride and Groom turn and lock arms, process down the aisle. Petals fly! Karen and Danny kiss again in the petals.",
      "Lauren and Jose process down the aisle",
      "Cindy and Duey, Jose Sr. and Elizabeth process"
    ],
    "notes": "Karen lets go of her father's arm at the arch, gives Lauren her bouquet to hold. Jose N. turns and takes a seat by Elizabeth. Jeanne holds latecomers until ceremony is over."
  },

  "speeches": {
    "order": [
      { "speaker": "Danny (Thank-you toast)", "time": "6:45 PM" }
    ],
    "maxTime": "6:45 PM",
    "notes": "After the buffet line dies down, Jeanne signals Danny for a thank-you toast."
  },

  "dances": {
    "firstDance": {
      "song": "Virgen - Adolescent Orchestra",
      "prelude": "Everlasting Love - Natalie Cole",
      "time": "4:55 PM"
    },
    "parentDance": {
      "time": "Jose & Karen first, then Danny & Cindy join, then Karen & Danny dance"
    },
    "danceFloorOpen": "5:15 PM"
  },

  "flowers": {
    "delivery": "1:00 PM to Greatman Cottage",
    "list": [
      "1 bridal bouquet (white wisteria, white orchid, jasmine sprig requested)",
      "1 groom's boutonniere",
      "1 father of groom boutonniere (Duey)",
      "1 Best Bro boutonniere",
      "1 FOB boutonniere (Jose Sr)",
      "4 usher boutonnieres",
      "Wedding decoration flowers (Trader Joe's - get 1-3 days before)"
    ]
  },

  "staffing": [
    {
      "role": "Plant Setup",
      "name": "Kristian",
      "task": "Transport & layout plants"
    },
        {
      "role": "Flower Girls / Ushers",
      "name": "Flower Girls / Ushers",
      "task": "Hand out flower petals to guests, usher guests to seats"
    },
    {
      "role": "Room Flip Crew",
      "name": "Zach, Joey, John, Gabriel, JT, Nathan + any guys",
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
      "name": "Jenny, Sara B, Liz (maybe Tom)",
      "task": "Lead placing cut flowers on tables at venue"
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
    },
    {
      "role": "Juliet's Tasks",
      "name": "Juliet Tonkin (+ Christopher Yalung)",
      "task": "1) Set up Photo Booth camera with Christopher (photojournalist). 2) Hand out kerchiefs and red hibiscus flowers to guests during the parranda. 3) Drop off cards at Hotel Peter and Paul safe during the parade, then rejoin."
    },
    {
      "role": "Leftover Coordination",
      "name": "Titi Amri's family",
      "task": "Coordinate handover of boxed leftovers from caterer David after wedding. Take leftovers to the rental house for Sunday lunches (maduros, ropa vieja, jerk chicken, rice and peas, stewed cabbage)."
    },
    {
      "role": "Sunday Brunch Setup",
      "name": "Sarah + Papa / volunteers",
      "task": "Sarah drops off coffee and bagels Sunday morning. Someone from the house picks up donuts. Set up breakfast food on the large dining table at CastleDay."
    }
  ],

  "flowerGirls": [
    "Jonah", "Jess", "Mady", "Kelsey", "Gabi", "Anna", "Carly",
    "Blair", "Sara K", "Reagan", "Jenny", "Kagan", "Sara B"
  ],
  "flipCrew": [
    "Zach", "Joey", "John", "Gabriel", "JT", "Nathan", "+ any guys who want to help"
  ],

  "weddingParty": {
    "maidOfHonor": "Lauren Langenmayr",
    "bestMan": "Jose David Hernandez",
    "karen": {
      "gettingReadyWith": ["Lauren", "Mady", "Kelsey", "Kali", "Kagan"],
      "makeup": ["Karen", "Lauren"],
      "hairHelp": "Kagan",
      "assistant": "Peggy"
    },
    "danny": {
      "gettingReadyAt": "Greatman Cottage, 3421 Dauphine Street",
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
      "Reserve first two rows with ivory ribbon for family (both sides)",
      "Set up card box, guest book and pen in conference room",
      "Collect cell phones from wedding party",
      "Ribbon and white duct tape in bride's bag with Jeanne"
    ],
    "forGuests": [
      "Custom koozies",
      "Cut-out kerchiefs and red flower clips for Puerto Rican second line (held by Juliet at corridor, big woven bowls on conference table)",
      "Chimes to cue guests (Cindy bringing)"
    ]
  },

  "masterTodos": [
    {
      "section": "KAREN'S TO DO",
      "items": [
        "MARRIAGE LICENSE!?",
        "At the final fitting, make a video of how to bustle your dress",
        "Make Slideshow",
        "Write Vows",
        "Spruce up the Milo Gardens sign",
        "Design and Order Banner for the front of the Venue (gonna ask Antonia)",
        "Create a sign for the garden welcome on Jefferson Highway",
        "Drink Menu Signs (2) (maybe banana leaf?)",
        "Talk to neighbors about the party on Friday, 4-7 pm",
        "Buffet Offering Signs (find a cute window and write on the window glass)",
        "Perrier Event Quote (wait until seating chart is finalized):\n  • Water Carafe\n  • 4 Metal Tubs for beer\n  • 16 6' banquet white tablecloths\n  • 4 fruit caddies\n  • Increase the chair count by 10?",
        "Find beautiful art with frames that you can paint over and then affix the menu to (maybe Antonia could help?? With welcome sign, seating chart and menu sign)",
        "Make buffet item identifiers",
        "Paint Yard Signs for Friday",
        "Confirm and pay Beyond Septic Solutions",
        "Need cleaning crew information",
        "Prepare tips",
        "Thank you gift/acknowledgement for Lolo, Duey & Cindy, Jose and Kali"
      ]
    },
    {
      "section": "CINDY'S TO DO",
      "items": [
        "Gather Family Photos (young photos of grandparents and parents, baby Karen & Danny, kid Karen and Danny, high school Karen & Danny)",
        "Create one pager for day of",
        "Email my guests with wedding details",
        "Check in with Rehearsal dinner location and finalize details",
        "Reach out to Mieczkowskis to ask to help flip room",
        "Reach out to sisters for help with Karen Hair (Peggy) and Danny (Marilyn) and also Friday garden set up",
        "Meet with Jeanne and give update a few weeks before the wedding",
        "White Bride's Bag!",
        "Look into and order Lunch for getting ready",
        "Nibbles for Friday garden event if local catering does not do so!",
        "Ticket for guests — Have a beer or wine on us?",
        "Book hair appointment / Dry Bar?",
        "Book pedicure and nails?",
        "Look at Hair photos to make decisions",
        "SALSA PREP! Watch videos!",
        "Sister Gift",
        "Create and send an invitation for Friday Rehearsal dinner",
        "Prep tips as needed",
        "Call Hotel P & P regarding lock box",
        "Call Oak and Ale to tighten up details for rehearsal dinner (Jillian (504) 210-7709)",
        "Finalize with Greatman Cottage and Loft",
        "Send final timeline document to vendors"
      ]
    },
    {
      "section": "BRING TO NOLA IN THE CAR",
      "items": [
        "Medella Beer",
        "Moon Man",
        "Spotted Cow",
        "Dawn Chorus",
        "Pink Candle holders",
        "Table number cubes?",
        "White Wedding bag",
        "Photos of Jose N, Kat, and Karen",
        "Aba and Abuelo Cheo"
      ]
    },
    {
      "section": "JOSE N TO DO",
      "items": [
        "Photos of Jose N, Kat, and Karen",
        "Aba and Abuelo Cheo",
        "Build Ramp for family",
        "Help Karen & Danny with house projects"
      ]
    },
    {
      "section": "DANNY'S TO DO",
      "items": [
        "Where to get pizza from for Friday???",
        "Will talk to catering company next food for snacks",
        "Talk to Sarah about bringing coffee for Sunday",
        "Order bagels for Sunday",
        "Come up with plan for Kristian",
        "Ask No Dice if the Boys can come for the first 1 1/2 hour? They cannot unless stopped at the door. In the moment… can join in the second line",
        "Duey and Dad Liquor",
        "Have a beer or wine for the first drink at the bar, Danny will ask!",
        "Create a Cocktail Hour Playlist (jazz fusion)",
        "Pick up high boys & other rentals from Perrier rentals on 4/10\n  • BRING $70 CASH\n  • Rental period: Pick up Friday 7a-1pm to Drop off 7a-1p Monday",
        "Clean the Bathtub for beer",
        "Write Vows",
        "Work with Dad on Liquor needs"
      ]
    },
    {
      "section": "DUEY TO DO",
      "items": [
        "Liquor (Binny's Wedding Consult)",
        "Define final list for Friday and Saturday needs",
        "Prep Speech — 2 minutes"
      ]
    }
  ],

  "timeline": {
    "friday": [
      { "time": "2:00 - 3:00 PM", "event": "Rehearsal", "location": "Industrial Gardens", "who": "Cindy, Duey, Jose Sr., Jose Jr., Lauren, Dave, Milo, Remy, Amanda, Doug, Ellison, Kali, Jeanne", "notes": "Walk through ceremony and room flip plan. Antonia handles initial setup. Danny places plants. Give Jeanne all items for next day: table numbers, gift card receptacle, vendor envelopes with thank-yous, envelope with $50 petty cash in small bills, board for table seating. Bring staghorn fern and mic stand." },
      { "time": "1:00 - 3:30 PM", "event": "Garden Welcome Crew Set Up", "location": "Milo Gardens", "who": "Marilyn, Peggy, Scottie, Tim", "notes": "Prep Milo Gardens and greet any early arrivals" },
      { "time": "3:30 PM", "event": "Key Members back at Milo Gardens", "location": "Milo Gardens", "who": "Wedding party & family" },
      { "time": "4:00 - 7:00 PM", "event": "Welcome Party", "location": "Milo Gardens", "who": "Everyone", "notes": "Costco appetizers/dips, Pizza Delicious, beer & wine, music from red speaker. High boys and seating areas. Karen's friend manages cleanup." },
      { "time": "7:00 PM", "event": "Rehearsal Dinner", "location": "Oak & Ale", "who": "Family" }
    ],
    "saturday": [
      { "section": "Men's Preparation", "time": "11:30 AM - 2:00 PM", "event": "Greatman Cottage", "location": "Greatman Cottage & Loft, 3421 Dauphine St", "who": "Danny, Jose, Jose Jr., Dave, Remy, Milo, Danny's friends", "bullets": [
        "Lunch for all available at Greatman Cottage",
        "DANNY GETS DRESSED AT GREATMAN LOFT",
        "Marilyn assists men pinning boutonnieres, etc.",
        "Present are Jose, Jose Jr, Dave, Remy, Milo, and Danny's friends"
      ]},
      { "section": "Flower Delivery", "time": "1:00 PM", "event": "Personal Flowers Delivered", "location": "Greatman Cottage", "who": "Florist", "bullets": [
        "1 bridal bouquet (would love white wisteria, white orchid and maybe jasmine sprig if available)",
        "Cindy, Marilyn, and Peggy will make bouquets and boutonnieres",
        "1 groom's boutonniere",
        "1 father of the groom boutonniere",
        "1 Best Bro boutonniere",
        "1 FOB boutonniere",
        "MARILYN — BRING ALL FLOWERS TO THE VENUE"
      ]},
      { "section": "Women's Preparation", "time": "11:30 AM - 1:30 PM", "event": "Hair and Makeup", "location": "Hotel Peter and Paul (check-in 9:00 AM)", "who": "Karen, Lauren, Kelsey, Mady, Kagan", "bullets": [
        "KAREN GETS DRESSED AT Grand Loft Room 309",
        "Assisted by: Lauren, Kelsey, Mady, Kagan",
        "11:00 AM: Lauren's Makeup",
        "11:45/12 PM: Karen's Makeup",
        "12 PM: Lauren's Hair",
        "Cindy: Glam Nola Makeup, (504) 432-9395"
      ]},
      { "time": "1:45 PM", "event": "Photographer Arrives", "location": "Hotel Peter and Paul", "who": "Stephanie Terrant", "bullets": [
        "Stephanie arrives and group heads to Industrial Gardens"
      ]},
      { "section": "Venue Setup", "time": "12:00 - 2:45 PM", "event": "Setup Operations", "location": "Industrial Gardens", "who": "Jeanne, Antonia, Sam Kuslan, Lady B, YUR Rentals, Design Team", "bullets": [
        "Antonia and flower girls arrive for setup",
        "1:00 PM — Lady B (DJ) arrives",
        "12:00 PM — Sam Kuslan (pianist) arrives and sets up",
        "Jeanne arrives at 12:00 PM — three hours of setup time",
        "Oversee all vendors and their setup",
        "Set up the card box, guest book, and pen in the conference room",
        "Conference room: set up the iPad, place white tablecloths over tables, rearrange seating, display photographs by the windows",
        "Juliet will set up the iPad and photographs",
        "Reserve the first two rows with ivory ribbon on each side for family",
        "Ribbon and white duct tape in the bride's bag that Jeanne has",
        "YUR Rentals arrive at 12:00 PM — set up chairs for ceremony and tables per floor plan",
        "Check in with DJ — Lady B",
        "Meet the bridal party at 2:00 PM upon arrival",
        "Check in with and attend to all wedding party needs",
        "Prep wedding party on ceremony details and instructions",
        "Collect cell phones!",
        "2:30 PM — Wedding party hides",
        "Tim and Scottie bring high tops and chairs to PJI",
        "Jenny, Sara B, Liz, maybe Tom lead placing cut flowers in vases",
        "Jenny takes the lead on placing flowers on the tables",
        "DJ Lady B sets up for cocktail reception music, dancing, and PA for ceremony; provides handheld mic",
        "Sam Kuslan (piano) sets up for ceremony"
      ]},
      { "section": "Wedding Party Arrival", "time": "2:00 PM", "event": "Bride, Groom, and Wedding Party Arrive", "location": "Industrial Gardens", "who": "Karen, Danny, Lauren, Jose D., Jose N., Elizabeth, Juliet, Dave, Milo, Remy, Cindy, Duschan, Doug Williams, Amanda Williams, Ellison, Kali, Kelsey, Mady, Jeanne, Marilyn, Peggy, Karen's grandmother", "bullets": [
        "BRING THE FLOWERS",
        "Beauty shots by photographer Stephanie:",
        "Karen and Danny first look",
        "Karen's nuclear family photos",
        "Danny's nuclear family photos",
        "Entire bridal party photos",
        "Cindy and Duey photos"
      ]},
      { "time": "2:15 - 2:30 PM", "event": "Flower Girls / Ushers Arrive", "location": "Industrial Gardens", "who": "Jonah, Jess, Mady, Kelsey, Gabi, Anna, Carly, Blair, Sara K, Reagan, Jenny, Sara B, Paloma", "bullets": [
        "Hand out petals to guests and usher them into the main area"
      ]},
      { "time": "2:30 PM", "event": "Wedding Party Hides", "location": "Conference Room", "who": "Wedding party", "bullets": [
        "Hair/makeup touch-ups as needed, bathroom break",
        "Karen, Danny, Cindy, Duey, Jose Sr. and Jr., Lauren, and boys hang out in conference room away from guests",
        "Give rings to Jose"
      ]},
      { "section": "Guest Arrival & Ushering", "time": "2:45 PM", "event": "Guests Arrive", "location": "Industrial Gardens", "who": "Ushers, Guests", "bullets": [
        "Ushers encourage guests to take seats",
        "Offer RIGHT arm to female guests; men walk behind",
        "When ushering a single male, usher walks on his left",
        "Guests can sit on either side",
        "Seat immediate family up front (roped off aisles)",
        "2:40 PM — Lady B plays prelude music (Kamasi Washington Album) while guests mingle",
        "Jeanne will hold any latecomers until the ceremony is over"
      ]},
      { "section": "Ceremony", "time": "3:00 - 3:45 PM", "event": "Ceremony", "location": "Industrial Gardens", "who": "Everyone", "notes": "Processional begins at 3:00 (up to 3:15 if many people come late). All participants enter from the door in the back of the garden.", "bullets": [
        "Prelude Music",
        "Sam Kuslan piano — \"I Can't Believe the Way We Flow\" (James Blake)",
        "Kali enters and stands up front",
        "Karen's grandmother escorted to her seat by Amri (Karen's aunt), sits on the left",
        "Cindy is escorted to seat by Danny; Duey follows behind. Sits on left side of the aisle",
        "Danny stays up front next to Kali",
        "Lauren and Jose come down the aisle together",
        "Ring bearers enter",
        "Bride's processional music begins — Sam Kuslan piano, \"There Goes My Baby\" (Charlie Wilson)",
        "Guests stand as the music changes and bride enters",
        "Karen enters with her father, Jose N.",
        "At the arch: Karen lets go of her father's arm, gives Lauren bouquet to hold, holds Danny's hand. Jose N. takes a seat by Elizabeth.",
        "Welcome — Kali",
        "Kali speaks and ends with Kat's advice",
        "Duschan Milojevic speech (2 minutes)",
        "Jose N. Hernandez speech (2 minutes)",
        "Vows",
        "Ring ceremony",
        "Kiss the bride!",
        "Recessional: DJ plays \"Cuidando de Longe\" by Gal Costa",
        "Bride and groom turn and lock arms, process down the aisle — petals fly!",
        "Karen and Danny kiss again in the petals",
        "Lauren and Jose process down the aisle",
        "Cindy and Duey, Jose Sr. and Elizabeth process"
      ]},
      { "section": "Cocktails and Reception", "time": "3:45 - 4:30 PM", "event": "Room Flip Begins // Karen and Danny Take Pictures", "location": "Industrial Gardens", "who": "Everyone", "bullets": [
        "Danny and Karen sneak with Stephanie for 15 minutes of bridal photos",
        "Ushers and Mieczkowski boys flip the room with Jeanne & Marilyn's oversight, carefully lifting preset tables and moving them into place",
        "3:45 PM — Sam Kuslan packs up his piano and amp"
      ]},
      { "time": "3:45 - 4:55 PM", "event": "Cocktails", "location": "Industrial Gardens — Courtyard", "who": "Everyone", "bullets": [
        "Cocktail hour",
        "Lady B plays Danny's playlist",
        "Champagne/wine poured and laid out by the bar",
        "Kagan and Evan go to No Dice to set up their DJ set"
      ]},
      { "time": "4:00 PM", "event": "Family & Group Photos", "location": "Industrial Gardens", "who": "Karen, Danny, Stephanie, Family", "notes": "Alert these people ahead of time. After photos: Karen and Danny escape for a private moment and bustle Karen's dress.",
        "groupPhotos": [
          "Pelleranos",
          "Hernandez (Aba, Tio Javier)",
          "Hernandez-Riveras (Titi Sonia)",
          "Williams (Grambo, Marsha, Doug, Dave, Amanda, Ellison, Jose D)",
          "Mom's Friends (Michelle, Liron, Adina, Pam, Karen White)",
          "Karen's Flower Girls",
          "Mady & Kelsey",
          "Danny's Family",
          "Ames",
          "Whitmers",
          "Mieczkowskis & Jody",
          "Ansons",
          "Selkes",
          "Danny's Friends"
        ]
      },
      { "section": "First Dance", "time": "4:55 - 5:15 PM", "event": "First Dance", "location": "Industrial Gardens", "who": "Karen, Danny, Parents", "bullets": [
        "DJ announces that guests find seats",
        "The couple is announced to the group",
        "\"Everlasting Love\" by Natalie Cole plays",
        "DJ beckons all guests to come to the dance floor",
        "Jose and Karen dance first, then Danny and Cindy join, then Karen and Danny dance",
        "First dance: \"Virgen\" — Adolescent Orchestra",
        "DJ kicks music into full gear and invites all to join on the dance floor!"
      ]},
      { "section": "Dancing & Dining", "time": "5:15 PM", "event": "Dance Floor and Buffet Open", "location": "Industrial Gardens", "who": "Everyone", "bullets": [
        "The dance floor and buffet are now open",
        "DJ calls eating groups to head to the buffet"
      ]},
      { "time": "6:45 PM", "event": "Danny's Toast", "location": "Industrial Gardens", "who": "Danny", "bullets": [
        "After the final buffet line dies down, Jeanne signals Danny for a thank-you toast"
      ]},
      { "section": "Dessert", "time": "7:30 PM", "event": "Dessert", "location": "Industrial Gardens", "who": "Milo announces", "bullets": [
        "Milo announces dessert… donuts!!!",
        "Cake and dessert table brought to the dance floor by catering"
      ]},
      { "section": "Evening Transitions", "time": "7:45 PM", "event": "Vendor Payments and Gift Management", "location": "Industrial Gardens", "who": "Jeanne", "bullets": [
        "Jeanne distributes payments and gratuities to vendors",
        "Jeanne tucks away any gifts and envelopes"
      ]},
      { "time": "8:25 PM", "event": "Last Call", "location": "Industrial Gardens", "who": "DJ", "bullets": [
        "Announce last call at the bar"
      ]},
      { "time": "8:30 PM", "event": "Outfit Change", "location": "Industrial Gardens", "who": "Karen, Lady B", "bullets": [
        "Karen goes to change and get Danny's pava hat!",
        "Lady B goes with Karen"
      ]},
      { "section": "Second Line / Parranda", "time": "8:45 PM", "event": "La Parranda Begins", "location": "Industrial Gardens to No Dice", "who": "Everyone", "bullets": [
        "DJ concludes. Bomba dancers appear and guide everyone through the corridor to begin La Parranda (Puerto Rican second line!)",
        "Cut-out kerchiefs and red flower clips held by Juliet and offered to guests at the corridor. Big woven bowls on the conference table",
        "Scottie hands out drink tickets!"
      ]},
      { "section": "After Party", "time": "9:00 PM", "event": "No Dice", "location": "No Dice", "who": "Everyone", "bullets": [
        "Drink tickets offered at the door to No Dice",
        "Thomas Glass Band 9:00 PM - 10:45 PM",
        "DJs ET Deaux & Kagan B2B 11:00 PM - 1:00 AM"
      ]},
      { "section": "Cleanup", "time": "9:00 PM", "event": "Clean Up", "location": "Industrial Gardens", "who": "Venue staff, caterers", "bullets": [
        "YUR Event Furniture Rental reclaims equipment at 8:45 PM",
        "Cleaning crew arrives — packs up decor, signage, photobooth, bathroom items, conference room items, and brings them to Milo Gardens",
        "David and caterers dishwash, bus, and disassemble the buffet line",
        "Lady B (DJ) packs up",
        "Restroom trailer gets taken back",
        "Venue manager takes out garbage and locks up",
        "Karen and Danny will take home plants, lights, and hung decor Monday morning"
      ]}
    ],
    "sunday": [
      { "time": "Morning", "event": "Sunday Brunch Setup", "location": "CastleDay, 1319 Japonica St", "who": "Sarah, Papa, volunteers", "notes": "Let Sarah in to drop off coffee and bagels. Someone from the house picks up donuts. Set up breakfast food on the large dining table. Leftover Caribbean food from wedding available (boxed by caterer David): maduros, ropa vieja, jerk chicken, rice and peas, stewed cabbage." },
      { "time": "11:00 AM - 2:00 PM", "event": "Poolside Farewell", "location": "CastleDay, 1319 Japonica St", "who": "Everyone", "notes": "Despedida al lado de la piscina. Casual attire. Plenty of seating throughout the house." }
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
      { "item": "DJ, Ritmeaux Krewe, Puerto Rican Second Line & Ceremony Sound", "total": 1500, "deposit": 1500, "paid": true, "remainder": 0, "dueDate": null, "whoPaid": null },
      { "item": "Antonia's Decorating Setup", "total": 1650, "deposit": 825, "paid": true, "remainder": 825, "dueDate": "4/11/26", "whoPaid": "Jose Nestor" },
      { "item": "Alcohol (wholesale liquor) Both Days", "total": 1734, "deposit": null, "paid": false, "remainder": 1734, "dueDate": null, "whoPaid": null, "estimated": true },
      { "item": "Photographer (Stephanie Terrant)", "total": 3000, "deposit": 300, "paid": true, "remainder": 2700, "dueDate": null, "whoPaid": "Karen" },
      { "item": "Furniture Rental (YUR)", "total": 3176, "deposit": 811.25, "paid": true, "remainder": 2364.75, "dueDate": null, "whoPaid": null },
      { "item": "Saturday Catering (2B1L)", "total": 10661.25, "deposit": 6103.86, "paid": true, "remainder": 4557.39, "dueDate": "4/11/26", "whoPaid": "Cindy & Duschan" },
      { "item": "Food for Friday", "total": 500, "deposit": null, "paid": false, "remainder": 500, "dueDate": null, "whoPaid": null, "estimated": true },
      { "item": "Clean up Staff", "total": 300, "deposit": null, "paid": false, "remainder": 300, "dueDate": null, "whoPaid": null },
      { "item": "After Party DJ", "total": 500, "deposit": null, "paid": false, "remainder": 500, "dueDate": null, "whoPaid": null },
      { "item": "After Party Live Band (Thomas Glass)", "total": 3000, "deposit": 1300, "paid": true, "remainder": 1700, "dueDate": "4/11/26", "whoPaid": null }
    ],
    "tbd": [
      "Danny's Suit",
      "After Party DJ",
      "Fruit & Flowers/Florist",
      "Friday Food (pizza & crawfish)"
    ]
  },

  "bringToVenue": {
    "forJeanneFriday": [
      "Table numbers",
      "Gift card receptacle/box",
      "Vendor envelopes with thank-you's",
      "Envelope with $50 petty cash in small bills",
      "Board for table seating"
    ],
    "barAndDrinks": [
      "All alcohol (beer, wine, liquor)",
      "All cocktail ingredients",
      "2 carafes for passion fruit cocktail",
      "2 carafes for ice",
      "Small tables for bartenders",
      "All ice",
      "Gallons of Ozarka water (stored in fridge)",
      "Champagne (poured during cocktail hour)"
    ],
    "ceremony": [
      "Ivory ribbon for first two rows",
      "Rings (give to Jose at 2:30 PM)",
      "Mic stand (we provide to Lady B)"
    ],
    "decorAndSetup": [
      "Card box",
      "Guest book + pen",
      "iPad for conference room (Juliet sets up)",
      "White tablecloths (conference room)",
      "Family photographs (display by windows)",
      "Candles",
      "Plants (Kristian transports)",
      "Cut flowers from Trader Joe's",
      "Seating chart display",
      "Slideshow (for iPad)",
      "Bathroom flowers",
      "Bathroom basket of essentials"
    ],
    "flowers": [
      "Bridal bouquet (white wisteria, white orchid, jasmine sprig)",
      "Groom's boutonniere",
      "Father of groom boutonniere (Duey)",
      "Best Bro boutonniere",
      "FOB boutonniere (Jose Sr)",
      "4 usher boutonnieres"
    ],
    "secondLine": [
      "Rainbow colored kerchiefs",
      "Red hibiscus flower clips",
      "Big woven bowls (conference table)",
      "Danny's pava hat"
    ],
    "forGuests": [
      "Custom koozies",
      "Chimes to cue guests (Cindy bringing)",
      "Drink tickets (for No Dice door)",
      "Flower petals (for flower girls)"
    ],
    "signage": [
      "Drink menu signs (2)",
      "Buffet offering signs",
      "Buffet item identifiers",
      "Banner for front of venue",
      "Art frame with menu"
    ],
    "payments": [
      "Photographer remainder ($2,700)",
      "Antonia remainder ($825)",
      "2B1L catering remainder ($4,557.39)",
      "Thomas Glass Band remainder ($1,700)",
      "YUR Rentals remainder ($2,390.69)",
      "Bartender remainder ($450)",
      "Tips/gratuities for vendors"
    ],
    "personal": [
      "Karen's dress + change of clothes (8:30 PM)",
      "White bride's bag",
      "Dinnerware (cups, plates, napkins, cutlery)",
      "Water & cocktail dispensers (Cindy to No Dice)"
    ]
  },

  "seatingChart": [
    { "table": 1, "label": "Table 1", "count": "34-36", "guests": ["Gabrielle 'Gabi' Duncan", "Andrea Calabria", "Daniel Moldonado", "Julia Russ", "Blair Reynolds", "Carly Rosenberg", "Paloma Pinto", "Sara Karaosmanoglu", "Erin Cohn-Donnellan", "Ryan Donnellan", "Natalie Toth", "Chris Cunningham", "Blake Langenbach", "Anna Reisbaum", "Jamie Brener", "James Rennert", "Derek Spaeth", "Ross Garfield", "Coles Loomis", "Kagan Taylor", "Evan Thibodaux", "Ghazi Fortenberry", "Tyla Maiden", "Anthony Badon", "Liz Beatty", "Sara Beesley", "Jenny Conradi", "Julia Daniel", "Jack Brockman", "Madalynn Wittman", "JT Wittman", "Kelsey Lee", "Connor Damaschi", "Johnny Lawson", "Kristian Bailey"] },
    { "table": 2, "label": "Table 2", "count": "18-20", "guests": ["Mike Jacobs", "Paul Economos", "Nick Ellman", "Emily Ferretti", "Dan Kowalczyk", "Jeremy Fleenor", "Kristin Fleenor", "John Murphy Fleenor", "Bahareh Javadi", "Ian Bowman", "Simon Fowell", "Dexter Gilmore", "Gabrielle Washington", "Kayla Strella-Green", "Mark Strella-Green", "Noah Young", "Shawan Rice", "Sam Kuslan", "Haley Vaughn", "Nguyen Nguyen"] },
    { "table": 3, "label": "Table 3 (VIP)", "count": "18-19", "guests": ["Jose D. Hernandez", "Jose N. Hernandez", "Elizabeth Mazzie", "Kali Serna", "Juliet Tonkin", "Duschan Milojevic", "Cindy Milojevic", "David Langenmayr", "Lauren Langenmayr", "Remy Daniel Langenmayr", "Milo Joseph Langenmayr", "Karen Hernandez", "Danny Milojevic", "Eric Langenmayr", "Nina Chen Langenmayr", "Christopher Yalung", "Douglas Williams", "Amanda Williams", "Ellison Williams"] },
    { "table": 4, "label": "Table 4", "count": "18-19", "guests": ["David S Williams II", "Roy Buckner", "Mariann Buckner", "Douglas Norris", "Autumn Solomon", "Dorothy Martin", "Karen White", "Michelle Sims", "Pamela Belyn", "Liron Anderson Bell", "Glenn Bell", "Adina Mardenbergh", "David S Williams", "Marsha Broussard", "Michael Ramey", "Lisa Kroeger", "Ed Kroeger", "David Lee", "Darlene Lee"] },
    { "table": 5, "label": "Table 5", "count": "18", "guests": ["Jessica Mieczkowski", "Mark Mieczkowski", "Joey Mieczkowski", "John Mieczkowski", "Olivia Gomez", "Zach Mieczkowski", "J Tyler Whitmer", "Nathan Taylor", "John Whitmer", "Erin Whitmer", "Amanda Johnston", "Jody Ames", "Sean Faul", "Steven Ames", "Amy Ames", "Patty Farmar", "Dan Griewe", "Phyllis Myers"] },
    { "table": 6, "label": "Table 6", "count": "8", "guests": ["Marilyn Ames", "Timothy Ames", "Peggy Noonan Whitmer", "Scott Whitmer", "Joyce Raspatello", "Richard Raspatello", "Jill Wilson", "Todd Wilson"] },
    { "table": 7, "label": "Table 7", "count": "8", "guests": ["Don Rosenwinkel", "Karen Rosenwinkel", "Tim Philosophos", "Mariann Piano", "Jeanne Gallo", "John Gallo", "Thomas Moldauer", "Chris Moldauer"] },
    { "table": 8, "label": "Table 8", "count": "7", "guests": ["Dave Sellke", "Elizabeth Sellke", "Frank Schnotala", "Chris Schnotala", "Goesel Anson", "John Anson", "Silvia Beaupre"] },
    { "table": 9, "label": "Table 9", "count": "8", "guests": ["Chris Greb", "Meredith Greb", "Mary Claire Patterson", "Charlie Diamond", "Natalia Diamond", "Rachel Moldauer", "Stephen Diamond", "Peggy Diamond"] },
    { "table": 10, "label": "Table 10", "count": "8", "guests": ["Joey Lyons", "Jack Nixon", "Henry Redman", "Claire Redman", "Nick Fowkes", "Eric Naumann", "Jesse Mathias", "Jonah Wander"] },
    { "table": 11, "label": "Table 11", "count": "7", "guests": ["Leonardo Rivera", "Laura Sofia Hernandez Gonzales", "Victor Torres Montalvo", "Deanna Pellerano", "Gabriel Pellerano", "Daniel Pellerano", "Maria Diaz"] },
    { "table": 12, "label": "Table 12", "count": "7", "guests": ["Angelina Maldonado", "Jose Javier Hernandez", "Sonia Hernandez", "Luis Rivera", "Amri Hernandez Pellerano", "Fernando Pellerano", "Paola Rivera"] },
    { "table": 13, "label": "Table 13", "count": "7", "guests": ["Niah Anson", "David King", "Erika Sellke", "Peter Sellke", "Julia Sellke", "Eric Schnotala", "Kaitlyn Schnotala"] }
  ]
};
