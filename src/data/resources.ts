export type Resource = {
  id: string;
  name: string;
  desc: string;
  address?: string;
  phone?: string;
  website?: string;
  tags: string[];
  lat?: number;
  lng?: number;
};

const PF_ANCHOR = { lat: 30.4399, lng: -97.62 }; // Downtown Pflugerville anchor pin

export const RESOURCES: Resource[] = [
  // ------------------------------------------------------------------
  // Pflugerville core civic / community anchors
  // ------------------------------------------------------------------
  {
    id: "r1",
    name: "Pflugerville Public Library",
    desc: "Computer access, printing, ESL/digital skills classes, children’s programs.",
    address: "1008 W Pfluger St, Pflugerville, TX",
    website: "https://library.pflugervilletx.gov/",
    tags: [
      "Library",
      "Education",
      "ESL",
      "Computers",
      "Wi-Fi",
      "Children",
      "Youth",
      "Bilingual",
      "Wheelchair",
      "Free",
      "Walk-In",
    ],
    lat: 30.442555819702285,
    lng: -97.6291521,
  },
  {
    id: "r2",
    name: "Pflugerville Recreation Center",
    desc: "Recreation programs, classes, and community activities for all ages.",
    address: "400 Immanuel Rd, Pflugerville, TX",
    website: "https://www.pflugervilletx.gov/",
    tags: [
      "Recreation",
      "Community Programs",
      "Youth",
      "Adults",
      "Seniors",
      "Kid-Friendly",
      "Wheelchair",
    ],
    lat: 30.43296527167589,
    lng: -97.6125865576707,
  },
  {
    id: "r3",
    name: "Pflugerville City Hall",
    desc: "City services and official information. A starting point for local help.",
    address: "100 E Main St, Pflugerville, TX",
    website: "https://www.pflugervilletx.gov/",
    tags: ["City Services", "Government", "Information", "Wheelchair"],
    lat: 30.44203526207437,
    lng: -97.6165630139056,
  },
  {
    id: "r4",
    name: "Pflugerville Police Department (Non-Emergency)",
    desc: "Non-emergency assistance, community services, and safety resources.",
    address: "1611 E Pfennig Ln, Pflugerville, TX",
    website: "https://www.pflugervilletx.gov/",
    tags: ["Safety", "Community Support", "Information", "Wheelchair"],
    lat: 30.45100906189943,
    lng: -97.60798926562238,
  },
  {
    id: "r5",
    name: "Pflugerville Fire Department (Community Safety)",
    desc: "Fire safety education, prevention resources, and community outreach.",
    address: "201 E Pecan St, Pflugerville, TX",
    website: "https://www.pflugervilletx.gov/",
    tags: ["Safety", "Education", "Family", "Kid-Friendly", "Wheelchair"],
    lat: 30.4397,
    lng: -97.6185,
  },
  {
    id: "r6",
    name: "Pfluger Park",
    desc: "Central park with trails and event space near downtown Pflugerville.",
    address: "515 City Park Rd, Pflugerville, TX",
    website: "https://www.pflugervilletx.gov/",
    tags: ["Parks", "Community Events", "Family", "Kid-Friendly"],
    lat: 30.4463,
    lng: -97.6296,
  },
  {
    id: "r7",
    name: "Heritage House Museum / Heritage Park",
    desc: "Local history and community programs, tours, and events.",
    address: "901 Old Austin Hutto Rd, Pflugerville, TX",
    website: "https://www.pflugervilletx.gov/",
    tags: ["Community Events", "Education", "Family", "Kid-Friendly"],
    lat: 30.4543,
    lng: -97.6258,
  },
  {
    id: "r8",
    name: "Lake Pflugerville Park",
    desc: "Major park with trails, family activities, and occasional community events.",
    address: "18216 Weiss Ln, Pflugerville, TX",
    website: "https://www.pflugervilletx.gov/",
    tags: ["Parks", "Community Programs", "Family", "Kid-Friendly"],
    lat: 30.4713,
    lng: -97.5718,
  },
  {
    id: "r9",
    name: "Stone Hill Town Center (Community Hub)",
    desc: "Major shopping/community hub; useful anchor for nearby services.",
    address: "Stone Hill Dr, Pflugerville, TX",
    tags: ["Community Hub", "Information"],
    lat: 30.4618,
    lng: -97.5976,
  },
  {
    id: "r10",
    name: "Downtown Pflugerville (Main St) Anchor",
    desc: "Downtown area for festivals, markets, and community programming.",
    address: "Downtown Pflugerville, TX",
    tags: ["Community Events", "Family", "Information"],
    lat: PF_ANCHOR.lat,
    lng: PF_ANCHOR.lng,
  },

  // ------------------------------------------------------------------
  // Schools / youth / family support (anchors + common helpers)
  // ------------------------------------------------------------------
  {
    id: "r11",
    name: "Pflugerville ISD (Family & Student Support)",
    desc: "District resources, referrals, and family engagement programs.",
    address: "PfISD (district-wide)",
    website: "https://www.pfisd.net/",
    tags: [
      "Education",
      "Family",
      "Children",
      "Youth",
      "Bilingual",
      "Information",
      "Wheelchair",
    ],
    lat: 30.4411,
    lng: -97.6203,
  },
  {
    id: "r12",
    name: "Texas School for the Deaf (Regional Resource)",
    desc: "Programs and community resources for deaf/hard-of-hearing students (regional).",
    website: "https://www.tsd.state.tx.us/",
    tags: ["Education", "Youth", "Children", "Accessibility", "Appointment"],
    lat: 30.2836,
    lng: -97.7606,
  },
  {
    id: "r13",
    name: "Any Baby Can (Austin)",
    desc: "Family support services for children with special needs (regional).",
    website: "https://anybabycan.org/",
    tags: [
      "Family",
      "Children",
      "Healthcare",
      "Support Services",
      "Low-Cost",
      "Appointment",
    ],
    lat: 30.3396,
    lng: -97.7397,
  },

  // ------------------------------------------------------------------
  // Food assistance (mix of local-ish anchors + major regional support)
  // ------------------------------------------------------------------
  {
    id: "r14",
    name: "Central Texas Food Bank (Find Food)",
    desc: "Search food pantries and distributions across Central Texas.",
    website:
      "https://www.centraltexasfoodbank.org/food-assistance/get-food-now",
    tags: ["Food", "Pantry", "Free", "Family", "Bilingual", "Information"],
    lat: PF_ANCHOR.lat,
    lng: PF_ANCHOR.lng,
  },
  {
    id: "r15",
    name: "Neighbors Pantry (Near Pflugerville)",
    desc: "Weekly food distribution (near Pflugerville).",
    address: "Near Pflugerville / NE Austin",
    tags: ["Food", "Pantry", "Free", "Wheelchair", "Walk-In", "Family"],
    lat: 30.3825,
    lng: -97.6465,
  },
  {
    id: "r16",
    name: "Meals on Wheels Central Texas",
    desc: "Meal delivery and senior support services (regional).",
    website: "https://www.mealsonwheelscentraltexas.org/",
    tags: ["Food", "Seniors", "Healthcare", "Low-Cost", "Appointment"],
    lat: 30.3099,
    lng: -97.7233,
  },
  {
    id: "r17",
    name: "ATX Free Fridge (Austin)",
    desc: "Community-run fridges and pantries (regional).",
    website: "https://www.atxfreefridge.com/",
    tags: ["Food", "Free", "Walk-In", "Community Support"],
    lat: 30.2682,
    lng: -97.7429,
  },

  // ------------------------------------------------------------------
  // Housing / rent / shelters (regional but highly relevant)
  // ------------------------------------------------------------------
  {
    id: "r18",
    name: "Texas Rent Relief / Tenant Help (Info)",
    desc: "Starting point for rent relief/tenant resources in Texas (info).",
    tags: ["Housing", "Rent Help", "Information", "Free"],
    lat: PF_ANCHOR.lat,
    lng: PF_ANCHOR.lng,
  },
  {
    id: "r19",
    name: "Austin Tenants Council (Regional)",
    desc: "Tenant education, counseling, and renter resources (regional).",
    website: "https://www.housing-rights.org/",
    tags: [
      "Housing",
      "Tenant Rights",
      "Legal",
      "Bilingual",
      "Low-Cost",
      "Appointment",
    ],
    lat: 30.2902,
    lng: -97.7172,
  },
  {
    id: "r20",
    name: "Caritas of Austin (Regional)",
    desc: "Housing stability support, job training, and basic needs assistance.",
    website: "https://caritasofaustin.org/",
    tags: [
      "Housing",
      "Employment",
      "Food",
      "Low-Cost",
      "Appointment",
      "Adults",
    ],
    lat: 30.2835,
    lng: -97.7185,
  },
  {
    id: "r21",
    name: "SAFE Alliance (Regional)",
    desc: "Support for domestic violence/sexual assault survivors; safety planning.",
    website: "https://www.safeaustin.org/",
    tags: [
      "Support Services",
      "Safety",
      "Housing",
      "Crisis",
      "Bilingual",
      "Appointment",
    ],
    lat: 30.2765,
    lng: -97.7401,
  },

  // ------------------------------------------------------------------
  // Healthcare / clinics / public health
  // ------------------------------------------------------------------
  {
    id: "r22",
    name: "CommunityCare (Northeast Austin)",
    desc: "Primary care, vaccines, and support services (near Pflugerville).",
    website: "https://communitycaretx.org/",
    tags: [
      "Healthcare",
      "Clinic",
      "Medical",
      "Low-Cost",
      "Appointment",
      "Adults",
      "Children",
      "Bilingual",
      "Wheelchair",
    ],
    lat: 30.4088,
    lng: -97.6436,
  },
  {
    id: "r23",
    name: "Austin Public Health (Regional)",
    desc: "Public health programs and community resources (regional).",
    website: "https://www.austintexas.gov/department/austin-public-health",
    tags: [
      "Healthcare",
      "Public Health",
      "Vaccines",
      "Information",
      "Bilingual",
      "Free",
    ],
    lat: 30.42,
    lng: -97.67,
  },
  {
    id: "r24",
    name: "Seton/Ascension (Regional Hospital System)",
    desc: "Hospital and specialty care network (regional).",
    website: "https://healthcare.ascension.org/",
    tags: ["Healthcare", "Medical", "Appointment", "Wheelchair"],
    lat: 30.307,
    lng: -97.725,
  },

  // ------------------------------------------------------------------
  // Mental health / counseling / crisis
  // ------------------------------------------------------------------
  {
    id: "r25",
    name: "Integral Care (Travis County)",
    desc: "Mental health and developmental disability services (regional).",
    website: "https://integralcare.org/",
    tags: [
      "Mental Health",
      "Counseling",
      "Healthcare",
      "Low-Cost",
      "Bilingual",
      "Appointment",
    ],
    lat: 30.358,
    lng: -97.732,
  },
  {
    id: "r26",
    name: "NAMI Central Texas (Regional)",
    desc: "Support groups, education, and mental health advocacy (regional).",
    website: "https://namicentraltx.org/",
    tags: ["Mental Health", "Support Services", "Free", "Adults", "Families"],
    lat: 30.334,
    lng: -97.74,
  },
  {
    id: "r27",
    name: "988 Suicide & Crisis Lifeline",
    desc: "24/7 crisis support by phone/text/chat.",
    phone: "988",
    website: "https://988lifeline.org/",
    tags: ["Mental Health", "Crisis", "Free", "Bilingual", "Hotline"],
    lat: PF_ANCHOR.lat,
    lng: PF_ANCHOR.lng,
  },

  // ------------------------------------------------------------------
  // Legal / immigration / rights
  // ------------------------------------------------------------------
  {
    id: "r28",
    name: "Texas Law Help",
    desc: "Free legal info and self-help resources (tenant, family, immigration).",
    website: "https://texaslawhelp.org/",
    tags: [
      "Legal",
      "Tenant Rights",
      "Immigration",
      "Family",
      "Free",
      "Bilingual",
      "Information",
    ],
    lat: PF_ANCHOR.lat,
    lng: PF_ANCHOR.lng,
  },
  {
    id: "r29",
    name: "Volunteer Legal Services of Central Texas (Regional)",
    desc: "Legal clinics and assistance for eligible residents (regional).",
    website: "https://www.vlsoct.org/",
    tags: ["Legal", "Free", "Low-Cost", "Appointment", "Adults", "Families"],
    lat: 30.2795,
    lng: -97.743,
  },
  {
    id: "r30",
    name: "American Gateways (Immigration - Regional)",
    desc: "Immigration legal services and support (regional).",
    website: "https://americangateways.org/",
    tags: ["Immigration", "Legal", "Bilingual", "Low-Cost", "Appointment"],
    lat: 30.275,
    lng: -97.736,
  },

  // ------------------------------------------------------------------
  // Employment / workforce / training
  // ------------------------------------------------------------------
  {
    id: "r31",
    name: "Workforce Solutions Capital Area",
    desc: "Job search help, career coaching, and training referrals (regional).",
    website: "https://www.wfscapitalarea.com/",
    tags: [
      "Employment",
      "Jobs",
      "Training",
      "Education",
      "Adults",
      "Free",
      "Information",
    ],
    lat: 30.41,
    lng: -97.7,
  },
  {
    id: "r32",
    name: "Austin Community College (Regional)",
    desc: "Workforce training, continuing education, and student support resources.",
    website: "https://www.austincc.edu/",
    tags: [
      "Education",
      "Training",
      "Employment",
      "Adults",
      "Low-Cost",
      "Appointment",
    ],
    lat: 30.323,
    lng: -97.707,
  },

  // ------------------------------------------------------------------
  // Transportation
  // ------------------------------------------------------------------
  {
    id: "r33",
    name: "CapMetro (Regional Transit)",
    desc: "Public transit routes, fares, and trip planning (regional).",
    website: "https://www.capmetro.org/",
    tags: ["Transportation", "Transit", "Information", "Low-Cost"],
    lat: 30.2702,
    lng: -97.7423,
  },
  {
    id: "r34",
    name: "Ride-share / Transportation Help (Info)",
    desc: "Directory of low-cost transportation options and senior rides (info).",
    tags: ["Transportation", "Seniors", "Low-Cost", "Information"],
    lat: PF_ANCHOR.lat,
    lng: PF_ANCHOR.lng,
  },

  // ------------------------------------------------------------------
  // Community centers / nonprofits / support organizations (regional)
  // ------------------------------------------------------------------
  {
    id: "r35",
    name: "United Way for Greater Austin",
    desc: "Community programs and support services; connects people to resources.",
    website: "https://unitedwayaustin.org/",
    tags: [
      "Support Services",
      "Food",
      "Housing",
      "Education",
      "Information",
      "Bilingual",
    ],
    lat: 30.2687,
    lng: -97.7458,
  },
  {
    id: "r36",
    name: "211 Texas (Resource Hotline)",
    desc: "Call/text 2-1-1 for help finding local resources (food, rent, utilities, more).",
    phone: "211",
    website: "https://www.211texas.org/",
    tags: [
      "Information",
      "Housing",
      "Food",
      "Healthcare",
      "Free",
      "Bilingual",
      "Hotline",
    ],
    lat: PF_ANCHOR.lat,
    lng: PF_ANCHOR.lng,
  },
  {
    id: "r37",
    name: "Travis County Health & Human Services (Regional)",
    desc: "County support programs and referrals (regional).",
    website: "https://www.traviscountytx.gov/health-human-services",
    tags: ["Support Services", "Healthcare", "Housing", "Food", "Information"],
    lat: 30.2676,
    lng: -97.7413,
  },

  // ------------------------------------------------------------------
  // Seniors
  // ------------------------------------------------------------------
  {
    id: "r38",
    name: "Area Agency on Aging of the Capital Area",
    desc: "Support and resources for older adults and caregivers (regional).",
    website: "https://www.austintexas.gov/department/area-agency-aging",
    tags: ["Seniors", "Healthcare", "Support Services", "Information", "Free"],
    lat: 30.2678,
    lng: -97.7431,
  },
  {
    id: "r39",
    name: "Senior Services Directory (Info)",
    desc: "Guide to senior programs and benefits in the Pflugerville area (info).",
    tags: ["Seniors", "Information", "Healthcare", "Low-Cost"],
    lat: PF_ANCHOR.lat,
    lng: PF_ANCHOR.lng,
  },

  // ------------------------------------------------------------------
  // Youth / teens / after-school (anchors)
  // ------------------------------------------------------------------
  {
    id: "r40",
    name: "Boys & Girls Clubs (Regional)",
    desc: "After-school programs, mentoring, and youth activities (regional).",
    website: "https://www.bgca.org/",
    tags: ["Youth", "Children", "Education", "Kid-Friendly", "Low-Cost"],
    lat: 30.305,
    lng: -97.71,
  },
  {
    id: "r41",
    name: "YMCA of Austin (Regional)",
    desc: "Youth programs, classes, recreation, and community support (regional).",
    website: "https://www.austinymca.org/",
    tags: ["Youth", "Family", "Recreation", "Kid-Friendly", "Low-Cost"],
    lat: 30.3,
    lng: -97.74,
  },

  // ------------------------------------------------------------------
  // LGBTQ+ support (regional)
  // ------------------------------------------------------------------
  {
    id: "r42",
    name: "Out Youth (Austin)",
    desc: "Support and resources for LGBTQ+ youth and families (regional).",
    website: "https://www.outyouth.org/",
    tags: [
      "LGBTQ+",
      "Youth",
      "Support Services",
      "Mental Health",
      "Free",
      "Bilingual",
    ],
    lat: 30.297,
    lng: -97.741,
  },

  // ------------------------------------------------------------------
  // Utilities / bills / financial support (info + regional anchors)
  // ------------------------------------------------------------------
  {
    id: "r43",
    name: "Utility Assistance (Info)",
    desc: "Starting point for energy and utility assistance programs (info).",
    tags: ["Housing", "Utilities", "Low-Cost", "Information", "Free"],
    lat: PF_ANCHOR.lat,
    lng: PF_ANCHOR.lng,
  },
  {
    id: "r44",
    name: "Catholic Charities of Central Texas (Regional)",
    desc: "Support services including housing, counseling, and referrals (regional).",
    website: "https://ccctx.org/",
    tags: [
      "Support Services",
      "Housing",
      "Food",
      "Mental Health",
      "Low-Cost",
      "Appointment",
      "Bilingual",
    ],
    lat: 30.28,
    lng: -97.72,
  },

  // ------------------------------------------------------------------
  // Add lots of “Pflugerville-area anchor points” (keeps map dense & useful)
  // These are safe for TSA demo; you can swap to exact programs later.
  // ------------------------------------------------------------------
  ...makeAnchors(),

  // ------------------------------------------------------------------
  // A few more statewide / national directories pinned locally for visibility
  // ------------------------------------------------------------------
  {
    id: "r78",
    name: "FindHelp (Resource Search)",
    desc: "Search for free/reduced-cost services by ZIP code (food, housing, more).",
    website: "https://www.findhelp.org/",
    tags: [
      "Information",
      "Food",
      "Housing",
      "Healthcare",
      "Employment",
      "Free",
      "Low-Cost",
    ],
    lat: PF_ANCHOR.lat,
    lng: PF_ANCHOR.lng,
  },
  {
    id: "r79",
    name: "Texas Workforce Commission (Info)",
    desc: "State employment resources and benefits information.",
    website: "https://www.twc.texas.gov/",
    tags: ["Employment", "Jobs", "Information", "Free"],
    lat: PF_ANCHOR.lat,
    lng: PF_ANCHOR.lng,
  },
  {
    id: "r80",
    name: "Disaster Assistance & Preparedness (Info)",
    desc: "Preparedness guidance and emergency resource links (info).",
    tags: ["Safety", "Information", "Family", "Free"],
    lat: PF_ANCHOR.lat,
    lng: PF_ANCHOR.lng,
  },
];

// --------------------------------------------------------------------
// Helper: generates many Pflugerville-area “anchor resources” so map has
// lots of markers immediately (and they filter well by tags).
// You can replace/rename these over time with exact orgs.
// --------------------------------------------------------------------
function makeAnchors(): Resource[] {
  const a = [
    // (id, name, lat, lng, tags, desc)
    [
      "r45",
      "Pflugerville Community Programs (Anchor)",
      30.4408,
      -97.619,
      ["Community Programs", "Family", "Information"],
      "Community programs and announcements (anchor).",
    ],
    [
      "r46",
      "Pflugerville Events (Anchor)",
      30.4402,
      -97.6216,
      ["Community Events", "Family", "Kid-Friendly"],
      "Local events and seasonal activities (anchor).",
    ],
    [
      "r47",
      "Pflugerville Food Support (Anchor)",
      30.4488,
      -97.6154,
      ["Food", "Pantry", "Free", "Family"],
      "Local food support and pantry referrals (anchor).",
    ],
    [
      "r48",
      "Pflugerville Housing Help (Anchor)",
      30.4469,
      -97.6117,
      ["Housing", "Rent Help", "Information", "Low-Cost"],
      "Housing/rent assistance referrals (anchor).",
    ],
    [
      "r49",
      "Pflugerville Job Help (Anchor)",
      30.4522,
      -97.6209,
      ["Employment", "Jobs", "Training", "Free"],
      "Job search and training referrals (anchor).",
    ],
    [
      "r50",
      "Pflugerville ESL & Learning (Anchor)",
      30.4433,
      -97.6242,
      ["Education", "ESL", "Bilingual", "Free"],
      "Language learning and education referrals (anchor).",
    ],
    [
      "r51",
      "Pflugerville Youth Programs (Anchor)",
      30.4366,
      -97.6128,
      ["Youth", "Children", "Kid-Friendly", "Community Programs"],
      "After-school and youth program referrals (anchor).",
    ],
    [
      "r52",
      "Pflugerville Senior Support (Anchor)",
      30.4381,
      -97.6283,
      ["Seniors", "Support Services", "Healthcare", "Information"],
      "Senior support services and caregiver resources (anchor).",
    ],
    [
      "r53",
      "Pflugerville Mental Health (Anchor)",
      30.4339,
      -97.6198,
      ["Mental Health", "Counseling", "Low-Cost", "Appointment"],
      "Counseling and mental health referrals (anchor).",
    ],
    [
      "r54",
      "Pflugerville Healthcare Clinic (Anchor)",
      30.4317,
      -97.6091,
      ["Healthcare", "Clinic", "Medical", "Low-Cost", "Appointment"],
      "Clinic and health screening referrals (anchor).",
    ],
    [
      "r55",
      "Pflugerville Legal Aid (Anchor)",
      30.4479,
      -97.6271,
      ["Legal", "Tenant Rights", "Bilingual", "Free"],
      "Legal aid and tenant rights referrals (anchor).",
    ],
    [
      "r56",
      "Pflugerville Immigration Support (Anchor)",
      30.454,
      -97.6141,
      ["Immigration", "Legal", "Bilingual", "Low-Cost"],
      "Immigration support referrals (anchor).",
    ],
    [
      "r57",
      "Pflugerville Transportation Help (Anchor)",
      30.4584,
      -97.6068,
      ["Transportation", "Transit", "Low-Cost", "Information"],
      "Transportation options and ride help (anchor).",
    ],
    [
      "r58",
      "Pflugerville Free Wi-Fi Spots (Anchor)",
      30.4427,
      -97.6188,
      ["Wi-Fi", "Free", "Computers", "Library"],
      "Places to access Wi-Fi/computers (anchor).",
    ],
    [
      "r59",
      "Pflugerville Walk-In Services (Anchor)",
      30.4378,
      -97.6162,
      ["Walk-In", "Support Services", "Free"],
      "Walk-in assistance and referrals (anchor).",
    ],
    [
      "r60",
      "Pflugerville Appointment Services (Anchor)",
      30.4351,
      -97.6239,
      ["Appointment", "Support Services", "Low-Cost"],
      "Appointment-based programs and referrals (anchor).",
    ],

    // More geographic spread to make map look lively
    [
      "r61",
      "North Pflugerville Community Anchor",
      30.4782,
      -97.6092,
      ["Community Programs", "Family", "Information"],
      "North area anchor for programs and resources.",
    ],
    [
      "r62",
      "East Pflugerville Community Anchor",
      30.4512,
      -97.5752,
      ["Community Programs", "Family", "Information"],
      "East area anchor for programs and resources.",
    ],
    [
      "r63",
      "West Pflugerville Community Anchor",
      30.4481,
      -97.655,
      ["Community Programs", "Family", "Information"],
      "West area anchor for programs and resources.",
    ],
    [
      "r64",
      "South Pflugerville Community Anchor",
      30.4134,
      -97.6199,
      ["Community Programs", "Family", "Information"],
      "South area anchor for programs and resources.",
    ],

    // Topic-specific anchors for filters
    [
      "r65",
      "Pflugerville Food Distribution Point (Anchor)",
      30.4646,
      -97.614,
      ["Food", "Free", "Family", "Walk-In"],
      "Food distribution and pantry events (anchor).",
    ],
    [
      "r66",
      "Pflugerville Rental Assistance (Anchor)",
      30.4602,
      -97.6217,
      ["Housing", "Rent Help", "Low-Cost", "Bilingual"],
      "Rental assistance referrals (anchor).",
    ],
    [
      "r67",
      "Pflugerville Healthcare Vaccines (Anchor)",
      30.4561,
      -97.6072,
      ["Healthcare", "Public Health", "Free", "Bilingual"],
      "Vaccine and public health programs (anchor).",
    ],
    [
      "r68",
      "Pflugerville Counseling Services (Anchor)",
      30.4299,
      -97.6287,
      ["Mental Health", "Counseling", "Low-Cost", "Appointment"],
      "Counseling and support (anchor).",
    ],
    [
      "r69",
      "Pflugerville Job Training (Anchor)",
      30.4726,
      -97.5968,
      ["Employment", "Training", "Adults", "Free"],
      "Career training and resume help (anchor).",
    ],
    [
      "r70",
      "Pflugerville Adult Education (Anchor)",
      30.4417,
      -97.6099,
      ["Education", "Adults", "ESL", "Bilingual", "Low-Cost"],
      "Adult education and ESL referrals (anchor).",
    ],
    [
      "r71",
      "Pflugerville Youth/Teen Center (Anchor)",
      30.4369,
      -97.6322,
      ["Youth", "Teens", "Kid-Friendly", "Community Programs"],
      "Youth and teen programs (anchor).",
    ],
    [
      "r72",
      "Pflugerville Senior Activities (Anchor)",
      30.4442,
      -97.6341,
      ["Seniors", "Community Programs", "Kid-Friendly", "Wheelchair"],
      "Senior activities and gatherings (anchor).",
    ],
    [
      "r73",
      "Pflugerville Accessible Services (Anchor)",
      30.4529,
      -97.6313,
      ["Wheelchair", "Accessible", "Support Services", "Information"],
      "Accessibility-focused services (anchor).",
    ],
    [
      "r74",
      "Pflugerville Bilingual Services (Anchor)",
      30.4493,
      -97.6032,
      ["Bilingual", "Support Services", "Information"],
      "Bilingual support and referrals (anchor).",
    ],
    [
      "r75",
      "Pflugerville Computers & Printing (Anchor)",
      30.4424,
      -97.6257,
      ["Computers", "Education", "Free", "Library"],
      "Computers, printing, and learning access (anchor).",
    ],
    [
      "r76",
      "Pflugerville LGBTQ+ Support (Anchor)",
      30.4331,
      -97.6147,
      ["LGBTQ+", "Support Services", "Mental Health", "Free"],
      "Support resources for LGBTQ+ residents (anchor).",
    ],
    [
      "r77",
      "Pflugerville Community Volunteer Opportunities (Anchor)",
      30.4589,
      -97.6308,
      ["Community Support", "Volunteer", "Family", "Information"],
      "Volunteer opportunities and community involvement (anchor).",
    ],
  ];

  return a.map((row) => {
    const [id, name, lat, lng, tags, desc] = row as [
      string,
      string,
      number,
      number,
      string[],
      string
    ];
    return {
      id,
      name,
      desc,
      address: "Pflugerville, TX (anchor)",
      tags,
      lat,
      lng,
    };
  });
}
