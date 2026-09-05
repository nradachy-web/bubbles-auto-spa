// ============================================================
// Bubbles Auto Spa, LLC. Site data (single source of truth for copy)
// St. Clair Shores, Michigan. Shop + mobile auto detailing.
// Rules baked in: no fabricated reviews/prices/years, no em dashes.
// ============================================================

export const SITE_URL = "https://bubblesautospa.org";

export const BRAND = {
  name: "Bubbles Auto Spa",
  legalName: "Bubbles Auto Spa, LLC",
  wordmark: { strong: "Bubbles", light: "Auto Spa" },
  tagline: "Premium detailing at our shop or at your door",
  taglineShort: "Shop or mobile. Certified care, every vehicle.",
  phoneDisplay: "(586) 217-0123",
  phoneTel: "+15862170123",
  address: {
    street: "23525 Little Mack Ave",
    city: "St. Clair Shores",
    state: "MI",
    zip: "48080",
    full: "23525 Little Mack Ave, St. Clair Shores, MI 48080",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Bubbles+Auto+Spa+23525+Little+Mack+Ave+St+Clair+Shores+MI+48080",
  },
  hours: "Open 24 hours. Call or text anytime.",
  county: "Macomb County",
  serviceArea: [
    "St. Clair Shores",
    "Sterling Heights",
    "Warren",
    "Clinton Township",
    "Shelby Township",
    "Roseville",
    "Harrison Township",
    "Chesterfield",
  ],
  certs: ["Nasiol", "3M", "3D"],
  social: {
    instagram: "https://www.instagram.com/bubblesautospa_llc/",
    instagramHandle: "@bubblesautospa_llc",
    facebook: "https://www.facebook.com/profile.php?id=61553353739826",
    google: "https://share.google/8nlXeO8ut7QiWSOO4",
  },
  reviewUrl: "https://share.google/8nlXeO8ut7QiWSOO4",
} as const;

export const CTA = {
  primary: "Get a custom quote",
  hero: "Get a custom quote",
  heroSecondary: "See the work",
  secondary: "Call (586) 217-0123",
} as const;

export const NAV_LINKS = [
  { href: "/exterior-detailing", label: "Exterior" },
  { href: "/interior-detailing", label: "Interior" },
  { href: "/paint-correction", label: "Paint correction" },
  { href: "/ceramic-coating", label: "Ceramic coating" },
  { href: "/marine-rv-detailing", label: "Marine & RV" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
] as const;

// ---------------- HERO ----------------
export const HERO = {
  headline: "Auto detailing under our lights, or in your driveway.",
  sub: "Bubbles Auto Spa is a certified detailing shop on Little Mack in St. Clair Shores, with a mobile rig that covers Macomb County. Interiors, exteriors, paint correction, ceramic coating, boats, and RVs.",
  trust: "Certified in Nasiol, 3M, and 3D products. Cars, trucks, SUVs, motorcycles, boats, and RVs, quoted per vehicle.",
} as const;

// ---------------- STATS / quick facts ----------------
export const STATS = [
  { value: "2 Ways", label: "Drop off at the shop or we come to you" },
  { value: "Macomb County", label: "Served from our St. Clair Shores base" },
  { value: "Nasiol, 3M, 3D", label: "Certified coating and care products" },
  { value: "Cars to Boats", label: "Cars, trucks, RVs, and marine" },
] as const;

// ---------------- CERTIFICATIONS (gold chips, facts only) ----------------
export const CERTIFICATIONS = [
  { name: "Nasiol", blurb: "Certified ceramic coating systems" },
  { name: "3M", blurb: "Certified professional products" },
  { name: "3D", blurb: "Certified detailing chemicals" },
] as const;

// ---------------- SERVICES (preview cards) ----------------
export interface Service {
  id: string;
  href: string;
  name: string;
  icon: string; // lucide-react icon name
  oneLine: string;
  features: string[];
  priceFraming: string;
  cta: string;
  image: string;
  featured?: boolean;
}

export const SERVICES: Service[] = [
  {
    id: "exterior",
    href: "/exterior-detailing",
    name: "Exterior detailing",
    icon: "CarFront",
    oneLine: "A real hand wash and clay bar decontamination that pulls salt, tar, and brake dust off your paint.",
    features: [
      "Hand wash with premium pH-balanced soaps",
      "Clay bar decontamination",
      "Wheels, tires, and rims cleaned and protected",
      "Headlight restoration and trim reconditioning",
    ],
    priceFraming: "Custom quote per vehicle",
    cta: "See exterior detailing",
    image: "/photos/svc-exterior.webp",
  },
  {
    id: "interior",
    href: "/interior-detailing",
    name: "Interior detailing",
    icon: "Armchair",
    oneLine: "A full interior reset: vacuumed, shampooed, conditioned, and deodorized from the headliner to the trunk.",
    features: [
      "Carpet shampoo with hot water extraction",
      "Upholstery deep cleaning and stain removal",
      "Leather cleaning and conditioning",
      "Pet hair removal and odor elimination",
    ],
    priceFraming: "Custom quote per vehicle",
    cta: "See interior detailing",
    image: "/photos/svc-interior.webp",
  },
  {
    id: "paint-correction",
    href: "/paint-correction",
    name: "Paint correction",
    icon: "Sparkles",
    oneLine: "Machine polishing that removes swirls, scratches, and haze to bring back true gloss and depth.",
    features: [
      "Removes swirl marks and spider-webbing",
      "Cuts oxidation and dull, chalky haze",
      "One-step and multi-step options",
      "The right prep before a ceramic coating",
    ],
    priceFraming: "Custom quote per vehicle",
    cta: "See paint correction",
    image: "/photos/svc-paint.webp",
  },
  {
    id: "ceramic-coating",
    href: "/ceramic-coating",
    name: "Ceramic coating",
    icon: "ShieldCheck",
    oneLine: "A bonded ceramic layer that locks in gloss and shrugs off Michigan salt, sun, and grime for years.",
    features: [
      "Certified Nasiol coating systems",
      "Hydrophobic surface that sheets water away",
      "Deep, long-lasting wet-look gloss",
      "UV and contaminant protection",
    ],
    priceFraming: "Custom quote per vehicle",
    cta: "See ceramic coating",
    image: "/photos/svc-ceramic.webp",
    featured: true,
  },
  {
    id: "marine-rv",
    href: "/marine-rv-detailing",
    name: "Marine & RV detailing",
    icon: "Ship",
    oneLine: "Boats and RVs get gel coat polishing, oxidation removal, and protective sealants built for Michigan water.",
    features: [
      "Gel coat and fiberglass polishing",
      "Oxidation removal on faded surfaces",
      "Deep interior cleaning and conditioning",
      "Protective sealants for season and storage",
    ],
    priceFraming: "Custom quote per vehicle",
    cta: "See marine & RV",
    image: "/photos/svc-marine.webp",
  },
];

// Quote-form service options (ids match SERVICES)
export const SERVICE_OPTIONS = [
  { id: "exterior", label: "Exterior detailing" },
  { id: "interior", label: "Interior detailing" },
  { id: "paint-correction", label: "Paint correction" },
  { id: "ceramic-coating", label: "Ceramic coating" },
  { id: "marine-rv", label: "Marine & RV detailing" },
] as const;

// Quote-form vehicle types (tactile picker)
export const VEHICLE_TYPES = [
  { id: "car", label: "Car", icon: "Car" },
  { id: "suv", label: "SUV", icon: "Truck" },
  { id: "truck", label: "Truck", icon: "Truck" },
  { id: "motorcycle", label: "Motorcycle", icon: "Bike" },
  { id: "rv", label: "RV", icon: "Caravan" },
  { id: "boat", label: "Boat", icon: "Ship" },
] as const;

// Shop-vs-mobile preference toggle
export const SERVICE_MODES = [
  { id: "shop", label: "At the shop" },
  { id: "mobile", label: "At your door" },
] as const;

// ---------------- WHY US ----------------
export const WHY_US = {
  heading: "Why people across Macomb County book Bubbles Auto Spa",
  reasons: [
    {
      icon: "MapPin",
      title: "Shop and mobile, your call",
      body: "Drop your car off at 23525 Little Mack Ave in St. Clair Shores, or stay home and let us pull up and detail it in your driveway. Same standards either way.",
    },
    {
      icon: "BadgeCheck",
      title: "Certified in Nasiol, 3M, and 3D",
      body: "We do not guess with off-the-shelf products. Our ceramic coatings are Nasiol, applied by certified installers, and our paint care runs on 3M and 3D professional products used the way they are meant to be used.",
    },
    {
      icon: "Sparkles",
      title: "Interior and exterior specialists",
      body: "Deep interior cleaning and full exterior work are what we do every day, from seats and carpets to paint correction that takes out swirls and brings the finish back.",
    },
    {
      icon: "Ship",
      title: "Cars, trucks, RVs, and marine",
      body: "Daily drivers, work trucks, the RV before a trip, and the boat before the lake. We detail all of it, sized and quoted per vehicle.",
    },
    {
      icon: "ShieldCheck",
      title: "Protection that lasts past the wash",
      body: "Ceramic coating and proper sealants do more than shine. They guard your paint against Michigan winters, road salt, and sun so the work holds up.",
    },
  ],
} as const;

// ---------------- PROCESS (the real detailing sequence) ----------------
export const PROCESS = {
  heading: "How a detail with us works",
  intro: "Five steps from your first call to handing back a vehicle that looks sharp and has real protection on it. The order matters, and we do not skip a stage.",
  steps: [
    {
      title: "Intake and quote",
      body: "Tell us the vehicle and what you want. We look at size and condition, then give you a straight, custom quote and book shop drop-off or mobile service to your door.",
    },
    {
      title: "Wash and decontaminate",
      body: "A real hand wash with pH-balanced soaps, then clay bar decontamination to pull bonded salt, tar, and brake dust off the surface before any polishing.",
    },
    {
      title: "Correct and polish",
      body: "Where the paint calls for it, we machine polish to cut swirls, scratches, and oxidation, bringing the gloss and depth back the right way.",
    },
    {
      title: "Protect or coat",
      body: "We finish with a sealant or apply a certified Nasiol ceramic coating so the work holds up against Michigan salt, sun, and grime.",
    },
    {
      title: "Final inspection and handoff",
      body: "We walk the whole vehicle in good light, inside and out, then hand it back or come find you. You drive away protected, not just freshly wet.",
    },
  ],
} as const;

// ---------------- FINAL CTA ----------------
export const FINAL_CTA = {
  heading: "Ready when you are.",
  sub: "Call or text (586) 217-0123, or send a quote request and we will get back to you with a price and a time. Drop off in St. Clair Shores, or we come to you.",
} as const;

// ---------------- FAQ (home) ----------------
export const FAQ = [
  {
    q: "Do you detail at your shop, or do you come to me?",
    a: "Both. You can drop your vehicle off at our shop at 23525 Little Mack Ave in St. Clair Shores, or we can bring our mobile detailing setup to your home or office. Bigger jobs like paint correction and ceramic coating are usually best done at the shop where we control lighting and conditions. Call us at (586) 217-0123 and we will set up whatever works for you.",
  },
  {
    q: "What areas do you serve?",
    a: "We are based in St. Clair Shores and cover Macomb County and the surrounding area, including Sterling Heights, Warren, Clinton Township, Shelby Township, Roseville, Harrison Township, and Chesterfield. If you are nearby and do not see your city listed, call (586) 217-0123 and ask.",
  },
  {
    q: "What services do you offer?",
    a: "Exterior detailing, interior detailing, paint correction, ceramic coating, and marine and RV detailing. We handle cars, trucks, SUVs, boats, and RVs. Whether you want a straightforward wash and interior cleanup or full multi-stage paint correction with a ceramic coating on top, we can build the right package for your vehicle.",
  },
  {
    q: "How long does ceramic coating last?",
    a: "It depends on the product and how the vehicle is maintained, and we will walk you through the options when you call. We are certified Nasiol installers, so we apply a professional-grade coating and prep the paint correctly first. A ceramic coating adds a hard, hydrophobic layer that protects the clear coat, makes washing easier, and helps the finish hold its gloss far longer than wax.",
  },
  {
    q: "How do I book, and is the quote free?",
    a: "Call or text us at (586) 217-0123 for a free quote. Tell us the vehicle, what you are after, and whether you want to drop off at the shop or have us come mobile, and we will give you a price and get you on the schedule. Every job is a custom quote per vehicle since condition and size vary.",
  },
  {
    q: "Do you only do cars, or boats and RVs too?",
    a: "We do both. Beyond cars, trucks, and SUVs, we offer marine and RV detailing for boats and motorhomes. Oxidized gel coat, salt and lake residue, road grime, and big interiors all get specialized attention. Call (586) 217-0123 with the make and size and we will quote it.",
  },
  {
    q: "Why choose Bubbles Auto Spa?",
    a: "We are a local St. Clair Shores detailer certified through Nasiol, 3M, and 3D, with both a shop and a mobile service. That means professional products and trained application, the convenience of drop-off or on-site work, and one team that handles everything from a basic interior cleanup to full paint correction and ceramic coating. Call (586) 217-0123 to talk through what your vehicle needs.",
  },
] as const;

// ---------------- SERVICE DETAIL PAGES ----------------
export interface ServiceDetail {
  id: string;
  name: string;
  href: string;
  image: string;
  icon: string;
  oneLine: string;
  heroSubtitle: string;
  longDescription: string[];
  benefits: string[];
  process: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
  whyUs: string[];
  tiers?: { name: string; body: string; price?: string }[];
}

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  exterior: {
    id: "exterior",
    name: "Exterior detailing",
    href: "/exterior-detailing",
    image: "/photos/svc-exterior.webp",
    icon: "CarFront",
    oneLine: "A full hand-wash and decontamination service that pulls road tar, brake dust, and salt off your paint and leaves the whole exterior clean, protected, and sharp.",
    heroSubtitle: "Hand wash, clay bar decontamination, and full exterior cleanup at our St. Clair Shores shop, or at your driveway anywhere in Macomb County.",
    longDescription: [
      "A Michigan exterior takes a beating. Winter salt and brake dust grind into the clear coat, summer road tar and tree sap bake on, and an automatic car wash just smears it around. Our exterior detail starts with a real hand wash using premium pH-balanced soaps, then we clay bar the paint to physically pull off the bonded contaminants a wash leaves behind. When you run your hand over the panel afterward it feels like glass instead of sandpaper.",
      "From there we move to paint-safe drying and polishing to knock back haze and bring the gloss back, then clean the wheels, tires, and rims and lay down a tire protectant so they hold their look. We restore foggy, yellowed headlights so your lights actually project at night, and recondition the faded exterior plastic and rubber trim that Michigan sun chalks out.",
      "Bubbles Auto Spa runs out of 23525 Little Mack Ave in St. Clair Shores, and we also come to you with our mobile setup across Macomb County. We are certified with Nasiol, 3M, and 3D, so if your paint is ready for correction or a ceramic coating after the decon, we can build on this same prep. Cars, trucks, RVs, and marine all welcome.",
    ],
    benefits: [
      "Salt, brake dust, and road tar come off the paint instead of getting ground in by an automatic wash",
      "Clay bar decontamination leaves the surface smooth, which is also the right prep for wax, sealant, or a ceramic coating",
      "Restored headlights mean clearer light output and a vehicle that looks years newer",
      "Reconditioned trim and clean wheels make the whole car read sharp, not just the body panels",
      "Choose the shop in St. Clair Shores or have us detail it in your own driveway anywhere in Macomb County",
    ],
    process: [
      { title: "Quote and walk-around", body: "Call (586) 217-0123 or stop by the shop. We look at the size, the paint, and how much road tar, brake dust, and salt buildup we are dealing with, then give you a straight quote for your specific vehicle." },
      { title: "Hand wash and decontamination", body: "We hand wash with premium pH-balanced soaps to lift loose dirt, then clay bar the paint to pull off bonded tar, brake dust, and contaminants the wash cannot remove." },
      { title: "Dry, polish, and detail", body: "Paint-safe drying and polishing brings the gloss back, then we clean the wheels, tires, and rims, apply tire protectant, restore the headlights, and recondition the exterior plastic and rubber." },
    ],
    faqs: [
      { q: "What is the difference between this and a car wash?", a: "A car wash rinses off loose surface dirt. Our exterior detail hand washes the vehicle and then clay bars the paint to physically remove the road tar, brake dust, and bonded contaminants that stay stuck after any wash, plus we polish, restore the headlights, recondition the trim, and detail the wheels." },
      { q: "Will this remove the salt and winter grime from my paint?", a: "Yes. The pH-balanced hand wash gets the loose salt and grime off, and the clay bar treatment lifts the bonded brake dust and tar that Michigan winters drive into the clear coat. If you also want long-term protection against salt, we are certified with Nasiol, 3M, and 3D and can talk through a coating on top of this prep." },
      { q: "Do you come to me, or do I bring the car to you?", a: "Either works. We have our shop at 23525 Little Mack Ave in St. Clair Shores, and we also run mobile service across Macomb County, so we can detail the vehicle in your driveway. Just let us know which you prefer when you call." },
      { q: "Does this fix foggy headlights?", a: "Yes, headlight restoration is part of the exterior detail. We clear up the yellowed, hazy lenses so the lights look right and project better at night, instead of you paying to replace the whole housing." },
    ],
    whyUs: [
      "Certified with Nasiol, 3M, and 3D, so the decontamination here doubles as proper prep if you step up to correction or a ceramic coating",
      "Local to St. Clair Shores at 23525 Little Mack Ave, with mobile service throughout Macomb County",
      "Real hand wash and clay bar work, not an automatic-wash pass that grinds grit into your clear coat",
      "We detail cars, trucks, RVs, and marine, so oversized and odd jobs are not a problem",
    ],
  },
  interior: {
    id: "interior",
    name: "Interior detailing",
    href: "/interior-detailing",
    image: "/photos/svc-interior.webp",
    icon: "Armchair",
    oneLine: "A complete interior reset: vacuumed, shampooed, deep-cleaned, conditioned, and deodorized from the headliner to the trunk.",
    heroSubtitle: "Carpets shampooed, upholstery and leather brought back, pet hair pulled out, and odors gone. At our St. Clair Shores shop or mobile to your driveway anywhere in Macomb County.",
    longDescription: [
      "Michigan winters are hard on the inside of a vehicle. Road salt tracks in on your shoes and dries into white rings on the carpet and mats. Slush soaks the floors, melts into the padding underneath, and leaves a damp, musty smell that hangs around for weeks. Spilled coffee, kid messes, and fast-food runs add up over a season. Our interior detail is built to undo all of it, not just push it around.",
      "We start with a full vacuum of every carpet, mat, and the trunk, then shampoo the carpets and pull the dirt out with hot water extraction so the salt and grime actually leave the fibers instead of getting smeared deeper. Cloth upholstery gets deep-cleaned with stain removal worked into the spots that need it. Leather seats are cleaned and conditioned so they stay soft and resist cracking through the cold months. If you have pets, we remove the hair that a regular vacuum leaves behind, and we detail the dashboard, vents, and center console by hand.",
      "We finish with odor elimination and sanitization, so the inside smells clean instead of covered up. Bring it to our shop on Little Mack Ave in St. Clair Shores, or have us come to you anywhere in Macomb County. We detail cars, trucks, RVs, and marine, and we are certified with Nasiol, 3M, and 3D.",
    ],
    benefits: [
      "Salt stains, mud, and winter grime extracted from carpets and mats, not just hidden",
      "Seats and surfaces you actually want to sit in, with conditioned leather that resists cracking",
      "Pet hair and embedded debris removed that a household vacuum cannot reach",
      "Musty, lingering odors eliminated at the source and the interior sanitized",
      "Done at our St. Clair Shores shop or mobile in your own driveway",
    ],
    process: [
      { title: "Quote and schedule", body: "Call (586) 217-0123 and tell us the vehicle and what is going on inside, road salt, spills, pet hair, or just a deep clean. We quote per vehicle and set you up at our shop or mobile to your location in Macomb County." },
      { title: "Vacuum and pre-treat", body: "We fully vacuum the carpets, floor mats, and trunk, then pre-treat stains on the carpet and upholstery and loosen embedded dirt and pet hair before any cleaning starts." },
      { title: "Shampoo, extract, and deep clean", body: "Carpets are shampooed and run through hot water extraction to pull the dirt and salt out of the fibers. Cloth seats get deep cleaned with stain removal, and leather is cleaned and conditioned by hand." },
      { title: "Detail the hard surfaces", body: "Dashboard, vents, center console, door panels, and trim are cleaned and detailed so the whole cabin matches, not just the seats and floors." },
      { title: "Deodorize and final check", body: "We finish with odor elimination and sanitization, then walk the interior to make sure every surface is done before you drive off or we pack up." },
    ],
    faqs: [
      { q: "Can you get road salt stains out of my carpet and mats?", a: "In most cases, yes. Hot water extraction is designed to pull salt and dirt out of the carpet fibers and padding instead of just wiping the surface. Older, set-in salt rings can be stubborn, so we will give you an honest read on what we can fully remove when we quote the vehicle." },
      { q: "Do you remove pet hair?", a: "Yes. Pet hair removal is part of the interior detail. We use the right tools to lift hair that has woven into the carpet and upholstery, the kind a regular vacuum leaves behind. Heavy pet hair takes more time, so let us know when you call so we can quote it accurately." },
      { q: "Will the inside still smell like smoke or pets after?", a: "Our interior detail includes odor elimination and sanitization, so we treat the source rather than just spraying over it. Cleaning the carpets, upholstery, and surfaces removes most of what causes the smell. Severe or long-standing odors may need additional treatment, which we will talk through with you upfront." },
      { q: "Do I come to you or do you come to me?", a: "Either one. You can bring your vehicle to our shop at 23525 Little Mack Ave in St. Clair Shores, or we can come to you mobile anywhere in Macomb County. Tell us what works when you call (586) 217-0123." },
    ],
    whyUs: [
      "Certified with Nasiol, 3M, and 3D",
      "Local shop in St. Clair Shores plus mobile service across Macomb County",
      "We detail cars, trucks, RVs, and marine",
      "Hot water extraction that pulls Michigan road salt and grime out of the carpet, not just over it",
      "Every interior quoted per vehicle so you pay for the actual work your car needs",
    ],
  },
  "paint-correction": {
    id: "paint-correction",
    name: "Paint correction",
    href: "/paint-correction",
    image: "/photos/svc-paint.webp",
    icon: "Sparkles",
    oneLine: "Machine polishing that removes swirl marks, scratches, oxidation, and haze from your clear coat to bring back true gloss and depth.",
    heroSubtitle: "Swirl marks, light scratches, oxidation, and haze cut out of the clear coat with a careful machine polish. One-step and multi-step correction at our St. Clair Shores shop or at your driveway across Macomb County.",
    longDescription: [
      "Paint correction is a machine polishing process, not a product you wipe on. Using a polisher and the right pads and compounds, we level the very top of the clear coat just enough to remove the defects sitting in it: swirl marks from automatic car washes, spider-webbing from dirty wash mitts, light scratches, water spots, and the dull oxidized haze that builds up after years of sun and weather. What is left is the deep, clear gloss the paint had when it was new.",
      "Michigan paint takes a beating. Road salt and brine all winter, sand and grit kicked up on I-94 and Jefferson, sun fade through the summer, and the swirl marks that come from quick drive-through washes. By the time most people notice their paint looks flat or hazy, the clear coat is full of fine scratches catching the light. Correction is what actually fixes that instead of hiding it.",
      "We offer two routes depending on what your paint needs. A one-step is a single polishing pass that knocks out lighter swirls and haze and works well on newer or well-kept finishes. A multi-step starts with compounding to cut the heavier defects, then follows with polishing to refine the finish to a clean, glossy result. We look at the paint first and tell you which one makes sense, rather than overselling a job your car does not need. Bubbles Auto Spa is based in St. Clair Shores and serves Macomb County by shop appointment or mobile, and we are certified with Nasiol, 3M, and 3D.",
    ],
    benefits: [
      "Removes swirl marks and fine scratches instead of masking them with a glaze that washes away",
      "Brings back real gloss, depth, and a sharp reflection in the paint",
      "Reverses the dull, oxidized look that Michigan sun and weather leave behind",
      "The ideal prep step before a ceramic coating or sealant goes on",
      "Done at our shop or at your driveway anywhere in Macomb County",
    ],
    process: [
      { title: "Look at the paint and quote it", body: "We inspect the clear coat in good light, often after a wash, to see exactly what kind of defects you have and how deep they sit. That tells us whether a one-step or multi-step correction is the right call, and we quote the job before any work starts." },
      { title: "Wash and decontaminate", body: "The paint is washed and the surface is decontaminated so we are polishing clean paint, not grinding grit into it. This step matters in Michigan where road film, salt, and bonded contaminants build up fast." },
      { title: "Machine polish the correction", body: "We run the correction with a machine polisher, pads, and compound matched to your paint. A one-step is a single refining pass. A multi-step starts with compounding to cut heavier defects, then polishes to bring the finish back to a clean gloss." },
      { title: "Wipe down and inspect", body: "We wipe the panels down and check the results in proper lighting to confirm the swirls, scratches, and haze we targeted are gone and the finish is even across the vehicle." },
      { title: "Protect or coat the fresh paint", body: "Corrected paint is bare and ready for protection. We can finish with a sealant or set you up for a ceramic coating so the work lasts, and we are certified Nasiol installers for coatings." },
    ],
    faqs: [
      { q: "What is the difference between a one-step and a multi-step correction?", a: "A one-step is a single polishing pass that removes lighter swirls, oxidation, and haze, and it suits newer or well-maintained paint. A multi-step adds a compounding stage first to cut heavier or deeper defects, then follows with polishing to refine the finish. We look at your clear coat and tell you which one your car actually needs." },
      { q: "Will paint correction remove every scratch?", a: "It removes the defects that sit within the clear coat, which covers most swirl marks, light scratches, water spots, and oxidation. A scratch you can catch with a fingernail has usually gone past the clear coat into the paint or primer, and that needs touch-up or refinishing rather than polishing. We will tell you straight which of your marks will come out and which will not." },
      { q: "Should I get a ceramic coating after correction?", a: "It is a great pairing. Correction leaves the paint at its best and bare, so it is the ideal time to lock in that finish. We can apply a sealant or a Nasiol ceramic coating to protect the work, and we are certified Nasiol installers. It is not required, but it is the smart way to make the correction last." },
      { q: "Can you do paint correction at my house?", a: "Yes. Bubbles Auto Spa runs both a shop on Little Mack Ave in St. Clair Shores and a mobile service across Macomb County, so we can correct your paint at the shop or in your driveway. Call (586) 217-0123 and we will set up whichever works for you and quote the job for your vehicle." },
    ],
    whyUs: [
      "Certified with Nasiol, 3M, and 3D, so the correction and any coating that follows are done with professional-grade systems",
      "Honest assessment of your paint: we recommend one-step or multi-step based on what the clear coat needs, not the bigger ticket",
      "Shop appointments in St. Clair Shores plus full mobile service throughout Macomb County",
      "We correct cars, trucks, RVs, and marine finishes, not just everyday vehicles",
      "Local to the St. Clair Shores area and built around how Michigan weather, salt, and sun actually wear on paint",
    ],
    tiers: [
      { name: "One-step correction", body: "A single machine polishing pass that removes lighter swirl marks, oxidation, and haze. Best for newer vehicles or well-kept paint that needs its gloss and clarity brought back without heavy defect removal." },
      { name: "Multi-step correction", body: "Compounding to cut heavier swirls, deeper scratches, and faded oxidation, followed by polishing to refine the finish. Best for older, neglected, or heavily marred paint that needs more than a single pass." },
    ],
  },
  "ceramic-coating": {
    id: "ceramic-coating",
    name: "Ceramic coating",
    href: "/ceramic-coating",
    image: "/photos/svc-ceramic.webp",
    icon: "ShieldCheck",
    oneLine: "A liquid polymer that bonds to your clear coat for years of gloss, easy cleaning, and protection from Michigan road salt, UV, and grime.",
    heroSubtitle: "A bonded ceramic layer that locks in gloss and shrugs off salt, sun, and dirt. Applied at our St. Clair Shores shop or at your driveway by certified Nasiol installers.",
    longDescription: [
      "Wax and spray sealants sit on top of your paint and wash away in a month or two. A ceramic coating is different. It is a liquid polymer that chemically bonds to the clear coat and becomes part of the surface, so the protection lasts far longer than anything you spray on at a car wash. Once it cures, the paint feels slick, water beads up and rolls off, and the everyday grime that used to stick has a much harder time holding on.",
      "That matters a lot in this part of Michigan. Between road salt in the winter, sand and gravel in spring, and full sun baking your hood all summer, paint around St. Clair Shores takes a beating. The hydrophobic layer means salty slush sheets off instead of sitting on the finish, and the UV protection slows the fading and oxidation that turns a deep color chalky over a few seasons. Washing gets easier too, because most of the dirt rinses away instead of needing to be scrubbed.",
      "We are certified Nasiol installers, so we match the Nasiol product to your paint and how you drive instead of forcing one bottle onto every car. We do the work at our shop on Little Mack, or we bring it to your driveway if that is easier. Daily driver, weekend truck, RV, or boat, we will tell you straight what the coating will and will not do before we book anything.",
    ],
    benefits: [
      "Less time washing, because road salt and grime rinse off instead of caking onto the paint",
      "Color stays deeper and richer longer thanks to real UV protection against Michigan sun",
      "A glossy, wet-looking finish that holds up season after season, not just for a few weeks",
      "Better defense against salt, sap, bird droppings, and the bug splatter that damages clear coat",
      "A harder surface that helps resist the light scratches and swirls that come from normal washing",
    ],
    process: [
      { title: "Quote and walkthrough", body: "Call (586) 217-0123 and tell us the vehicle, the color, and how you use it. We look at the paint, talk through which coating package fits, and give you a custom quote. No guessing over the phone on price." },
      { title: "Decontaminate and prep", body: "A coating is only as good as the surface under it. We wash, clay, and clean the paint so the polymer bonds to bare clear coat, not to dirt or old wax. Any paint correction you choose happens at this stage." },
      { title: "Apply the certified coating", body: "We hand-apply the Nasiol coating panel by panel and level it correctly so it bonds evenly. This is where certification and patience pay off." },
      { title: "Cure and inspect", body: "The coating needs time to cure before it gets wet. We inspect every panel under proper lighting, then walk you through how to wash and care for the finish so it lasts." },
    ],
    faqs: [
      { q: "How long does a ceramic coating last?", a: "It depends on the product and how the vehicle is stored and washed, which is one reason we match the coating to your situation. A bonded ceramic coating lasts far longer than wax or spray sealants. We will give you a straight answer for the specific package you choose when we quote your vehicle." },
      { q: "Does a ceramic coating make my car scratch proof?", a: "No, and anyone who tells you that is overselling. A coating adds hardness and helps resist minor scratches and wash swirls, but it will not stop rock chips or a careless cart in a parking lot. What it does well is protect against UV, dirt, salt, and light marring while keeping the paint glossy." },
      { q: "Do I still have to wash my car after it is coated?", a: "Yes, but it gets a lot easier. The hydrophobic surface sheets water and lets most dirt and road salt rinse right off, so washes are quicker and you scrub less. We will show you how to wash it so you do not undo the coating." },
      { q: "Can you coat my truck, RV, or boat, and do you come to me?", a: "Yes. We coat cars, trucks, RVs, and marine, and we work either at our shop at 23525 Little Mack Ave in St. Clair Shores or mobile at your location across Macomb County. Call (586) 217-0123 and we will figure out what fits best." },
    ],
    whyUs: [
      "Certified Nasiol installers, so we pick the right Nasiol coating for your paint instead of selling one bottle to every car",
      "Shop and mobile service, so you can drop the vehicle at Little Mack or have us come to your driveway",
      "We coat cars, trucks, RVs, and marine, not just daily drivers",
      "Honest about what a coating can and cannot do before you spend a dollar",
      "Local to St. Clair Shores and built for Macomb County roads, salt, and weather",
    ],
    tiers: [
      { name: "Single-stage coating", body: "A solid choice for paint that is already in good shape. We prep and decontaminate, then apply one layer of certified ceramic coating for strong gloss, hydrophobic protection, and UV defense. A clean, lasting upgrade over wax." },
      { name: "Multi-layer coating", body: "Built for owners who want the deepest gloss and longest-lasting protection. We layer the coating for added durability and slickness, ideal for daily drivers fighting Michigan salt and sun or anyone keeping a vehicle for the long haul." },
      { name: "Correction plus coating", body: "The full treatment. We pair paint correction to remove swirls and light scratches with a certified ceramic coating, so the finish is dialed in first and then locked under the polymer. Best for restoring an older finish or protecting a fresh one." },
    ],
  },
  "marine-rv": {
    id: "marine-rv",
    name: "Marine & RV detailing",
    href: "/marine-rv-detailing",
    image: "/photos/svc-marine.webp",
    icon: "Ship",
    oneLine: "Full exterior and interior detailing for boats and RVs, with gel coat polishing, oxidation removal, and protective sealants built for Michigan water and weather.",
    heroSubtitle: "Boat and RV detailing in St. Clair Shores, serving Macomb County at our shop or at your slip, storage lot, or driveway. Gel coat polishing, oxidation removal, deep interior cleaning, and protective sealants that hold up to Michigan summers and storage.",
    longDescription: [
      "Boats and RVs take a beating in Michigan. A hull sits in lake water all season, then gets shrink-wrapped and parked through a long winter. An RV bakes in the sun on the highway, collects road film and bug splatter, then sits in a storage lot for months. By spring, the gel coat looks chalky, the trim is faded, and the interior smells like it has been closed up since fall. That is the work we do at Bubbles Auto Spa, and we do it on units most car washes will not touch.",
      "Gel coat and fiberglass are not car paint, and they need different care. When the surface goes dull and chalky, that is oxidation, and we remove it with the right cut and polish instead of grinding through a finish that does not grow back. Once the gel coat is corrected, we lock it down with a protective sealant so it holds its shine and shrugs off water spotting and UV through the next season. Chrome, stainless, and aluminum get their own dedicated care, because the rails, ladders, and trim are the first things people notice and the first to dull.",
      "We come to you or you bring it to us, whatever is easier. The shop is at 23525 Little Mack Ave in St. Clair Shores, and our mobile setup reaches boats at the marina and RVs sitting in storage or in your driveway across Macomb County. Tell us the size, where it lives, and what condition it is in, and we will give you a straight quote. Call (586) 217-0123.",
    ],
    benefits: [
      "Brings faded, chalky gel coat and fiberglass back to a deep, even shine instead of letting oxidation keep eating the surface",
      "Protective sealants guard against UV, water spotting, and the grime that builds up over a Michigan season and through winter storage",
      "A deep interior clean and conditioning pulls out the musty closed-up smell and keeps vinyl and leather from cracking",
      "Mobile service means we handle it at your slip, storage lot, or driveway, so you are not hauling a boat or RV across town",
    ],
    process: [
      { title: "Walk the unit and quote it", body: "We look over the hull or RV body, check how much oxidation has set in, and inspect the interior. Then we quote the job for your unit before we start." },
      { title: "Wash and decontaminate", body: "Full exterior wash to strip road film, lake scum, bug splatter, and built-up grime off the body, deck, and trim so we are polishing a clean surface, not pushing dirt around." },
      { title: "Polish and remove oxidation", body: "We cut and polish the gel coat and fiberglass to clear oxidation and restore depth, and give chrome, stainless steel, and aluminum their own dedicated attention." },
      { title: "Detail the interior", body: "Vacuum and shampoo carpets and upholstery, condition vinyl, leather, and trim, and clean all the windows and glass so the cabin feels fresh, not closed up." },
      { title: "Seal and protect", body: "We finish with wax and protective sealants that lock in the shine and help the surface hold up through the season and into winter storage." },
    ],
    faqs: [
      { q: "Do you come to the boat or RV, or do I bring it to you?", a: "Either one. We have a shop at 23525 Little Mack Ave in St. Clair Shores, and we also run mobile, so we can detail your boat at the marina or your RV in a storage lot or driveway across Macomb County. Tell us where it lives and we will work it out." },
      { q: "My gel coat looks chalky and faded. Can that be fixed?", a: "Usually, yes. That chalky look is oxidation, and removing it is one of the main things this service is built for. We cut and polish the gel coat and fiberglass to restore the shine, then seal it so it stays protected. Once we see the unit in person we can tell you how far the finish will come back." },
      { q: "How much does marine or RV detailing cost?", a: "We quote each unit individually because boats and RVs vary so much in size, surface condition, and how much oxidation has set in. We walk the unit, look at the gel coat and interior, and quote the unit before any work starts. Call (586) 217-0123 to set it up." },
      { q: "When is the best time to get this done in Michigan?", a: "Spring before you launch or hit the road is the most popular, since the unit has been sitting all winter and the sealant gives you a full season of protection. Fall is smart too, right before storage, so it goes into winter clean and protected. We work year round, so call whenever it fits your schedule." },
    ],
    whyUs: [
      "Local to St. Clair Shores at 23525 Little Mack Ave, serving Macomb County with both shop and mobile service",
      "We work on boats and RVs, not just cars and trucks, including the gel coat and fiberglass car washes do not handle",
      "Certified with Nasiol, 3M, and 3D, so the products and protection we use are professional grade",
      "Quoted per unit before any work starts",
      "Dedicated specialty care for chrome, stainless steel, and aluminum, the trim that shows wear first",
    ],
    tiers: [
      { name: "Single-stage protection", body: "A wash, polish, and protective sealant to bring back shine and lock it in. A strong fit for gel coat that is in decent shape and just needs correction and a season of protection." },
      { name: "Multi-stage restoration", body: "For boats and RVs with heavier oxidation and weathering. Multiple cut and polish stages to pull the gel coat back as far as it will go, followed by sealant. We confirm the right level after we see the unit in person." },
    ],
  },
};

export const SERVICE_ORDER = [
  "exterior",
  "interior",
  "paint-correction",
  "ceramic-coating",
  "marine-rv",
] as const;

// ---------------- GALLERY ----------------
// Captions describe only what is visible in the photo. They never claim which service was performed.
export interface WorkPhoto {
  src: string;
  alt: string;
  caption: string;
  w: number;
  h: number;
}

export const WORK: WorkPhoto[] = [
  // first eight = the home and city mosaic (Work.tsx). Keep the five service-index photos out of these.
  { src: "/photos/shop-gt3.webp", alt: "Silver Porsche 911 GT3 under hexagonal ceiling lights in the Bubbles Auto Spa studio", caption: "Porsche 911 GT3, in the studio", w: 1125, h: 2000 },
  { src: "/photos/challenger.webp", alt: "Blue Dodge Challenger in the studio with the door open to the street", caption: "Dodge Challenger", w: 1600, h: 1200 },
  { src: "/photos/red-coupe-studio.webp", alt: "Red sports coupe under the hexagonal lights in the studio", caption: "Red coupe, in the studio", w: 1200, h: 1600 },
  { src: "/photos/amg-front.webp", alt: "White Mercedes-AMG coupe with black wheels in a driveway", caption: "Mercedes-AMG coupe", w: 1600, h: 1200 },
  { src: "/photos/truck-white-studio.webp", alt: "White Ford Super Duty pickup under the hexagonal lights in the studio", caption: "Super Duty, in the studio", w: 1200, h: 1600 },
  { src: "/photos/boat-hull.webp", alt: "Navy and white cabin cruiser hull on blocks", caption: "Cabin cruiser hull", w: 1600, h: 1200 },
  { src: "/photos/wagoneer.webp", alt: "Black Jeep Grand Wagoneer with water beading on the paint in a driveway", caption: "Grand Wagoneer, water beading", w: 1200, h: 1600 },
  { src: "/photos/gwagon.webp", alt: "Black Mercedes G-Class in a shaded driveway", caption: "Mercedes G-Class", w: 1600, h: 1496 },
  // gallery only, from here down
  { src: "/photos/suv-black-studio.webp", alt: "Black SUV under the hexagonal lights in the studio", caption: "Black SUV, in the studio", w: 1200, h: 1600 },
  { src: "/photos/merc-interior-red.webp", alt: "Mercedes front cabin with black and red seats and a wide screen", caption: "Mercedes cabin, red trim", w: 1200, h: 1600 },
  { src: "/photos/g90-front.webp", alt: "White Genesis G90 sedan parked on a residential street", caption: "Genesis G90", w: 1200, h: 1600 },
  { src: "/photos/boxster.webp", alt: "Grey Porsche Boxster outside the shop on a sunny day", caption: "Porsche Boxster", w: 1200, h: 1600 },
  { src: "/photos/tesla-interior.webp", alt: "Tesla Model Y interior with black seats and floor mats", caption: "Tesla interior", w: 1200, h: 1600 },
  { src: "/photos/rv-eagle.webp", alt: "White Jayco Eagle fifth-wheel RV parked on a lawn", caption: "Fifth-wheel RV", w: 1600, h: 1200 },
  { src: "/photos/gwagon-dash.webp", alt: "Mercedes G-Class dashboard and red leather seats", caption: "G-Class, red leather", w: 1600, h: 1200 },
  { src: "/photos/speedboat.webp", alt: "White speedboat with red stripes on a trailer outside the shop", caption: "Speedboat on the trailer", w: 1085, h: 1450 },
  { src: "/photos/truck-cabin-grey.webp", alt: "Pickup rear cabin with grey leather seats and a child seat", caption: "Pickup rear cabin", w: 1200, h: 1600 },
  { src: "/photos/rv-side.webp", alt: "White and grey travel trailer RV under a bright sky", caption: "Travel trailer", w: 1600, h: 1200 },
  { src: "/photos/suv-cargo-clean.webp", alt: "SUV cargo area with the seats folded, looking in from the tailgate", caption: "SUV cargo area", w: 1200, h: 1600 },
  { src: "/photos/gv70.webp", alt: "Grey Genesis GV70 in a tree-lined driveway", caption: "Genesis GV70", w: 1200, h: 1600 },
  { src: "/photos/rv-north-point.webp", alt: "Fifth-wheel RV beside a house with a ladder against it", caption: "Fifth-wheel RV, roof day", w: 1600, h: 1200 },
  { src: "/photos/tahoe-interior.webp", alt: "Chevrolet Tahoe interior with tan and black leather seats", caption: "Tahoe, tan leather", w: 1200, h: 1600 },
  { src: "/photos/rv-roof.webp", alt: "The roof of an RV, looking down from a ladder", caption: "RV roof", w: 1200, h: 1600 },
  { src: "/photos/amg-wide.webp", alt: "White Mercedes-AMG coupe photographed from the front corner in a driveway", caption: "Mercedes-AMG coupe", w: 1600, h: 1200 },
  { src: "/photos/stelvio.webp", alt: "Dark Alfa Romeo Stelvio in front of a garage", caption: "Alfa Romeo Stelvio", w: 1600, h: 1200 },
  { src: "/photos/wheel-michelin.webp", alt: "Close-up of an alloy wheel and Michelin tire", caption: "Wheel and tire", w: 1200, h: 1600 },
  { src: "/photos/gwagon-seats.webp", alt: "Red quilted leather rear seats inside a Mercedes G-Class", caption: "G-Class rear seats", w: 1200, h: 1600 },
  { src: "/photos/sierra-ev.webp", alt: "White GMC Sierra EV pickup in a driveway", caption: "GMC Sierra EV", w: 1200, h: 1600 },
  { src: "/photos/g90-interior.webp", alt: "Genesis G90 front cabin with black leather and protective paper floor mats", caption: "Genesis G90 cabin", w: 1600, h: 1200 },
  { src: "/photos/boat-bow.webp", alt: "Bow of a navy cabin cruiser on blocks with a bright sky behind it", caption: "Cabin cruiser bow", w: 1600, h: 1200 },
  { src: "/photos/durango.webp", alt: "White Dodge Durango with black wheels parked beside a brick house", caption: "Dodge Durango", w: 1200, h: 1600 },
  { src: "/photos/trailer.webp", alt: "The white Bubbles Auto Spa trailer lettered with the phone number and We Come To You, parked on a driveway", caption: "The mobile trailer", w: 1600, h: 1203 },
  // the five service-index photos (ServicesIndex and the service page heroes read alt and size from here)
  { src: "/photos/svc-exterior.webp", alt: "Black Mercedes-AMG under the hexagonal lights in the studio", caption: "Mercedes-AMG, in the studio", w: 1200, h: 1600 },
  { src: "/photos/svc-interior.webp", alt: "Mercedes front cabin with black leather seats and the steering wheel", caption: "Mercedes cabin", w: 1200, h: 1600 },
  { src: "/photos/svc-paint.webp", alt: "Black Porsche under the hexagonal lights in the studio, seen from above the hood", caption: "Porsche, in the studio", w: 1200, h: 1600 },
  { src: "/photos/svc-ceramic.webp", alt: "A gloved hand applying Nasiol ZR53 coating to a Porsche hood in front of the Bubbles Auto Spa sign", caption: "Coating going on", w: 819, h: 1024 },
  { src: "/photos/svc-marine.webp", alt: "Bow of a white speedboat with red stripes on its trailer, the left half after and the right half before", caption: "Speedboat bow, after and before", w: 1086, h: 1358 },
];

export interface WorkClip {
  video: string; // silent mp4 under /public/video, the owner's own phone footage
  poster: string; // first frame, under /public/photos
  alt: string;
  caption: string;
  w: number;
  h: number;
}

/** Real phone clips from the owner, shown in the gallery through the Loop component. */
export const GALLERY_CLIPS: WorkClip[] = [
  { video: "/video/clip-hood-water.mp4", poster: "/photos/clip-hood-water.webp", alt: "Water running off the hood of a green Dodge Challenger", caption: "Challenger hood, water beading", w: 720, h: 1222 },
  { video: "/video/clip-denali-door.mp4", poster: "/photos/clip-denali-door.webp", alt: "The polished door of a black GMC Denali in the studio", caption: "GMC Denali, in the studio", w: 720, h: 1012 },
];

// Real before-and-after pairs from the owner's phone. Order in each pair is verified by eye.
export interface BeforeAfterPair {
  id: string;
  title: string;
  before: string;
  after: string;
  w: number;
  h: number;
  alt: string;
  /** landscape pairs get a 4:3 frame and span two columns in the gallery grid */
  aspect?: "portrait" | "landscape";
}

export const BEFORE_AFTER: BeforeAfterPair[] = [
  { id: "cargo", title: "Jeep cargo area", before: "/photos/ba-cargo-before.webp", after: "/photos/ba-cargo-after.webp", w: 1050, h: 1400, alt: "Jeep Wrangler cargo carpet" },
  { id: "seats", title: "Rear cloth seats", before: "/photos/ba-seats-before.webp", after: "/photos/ba-seats-after.webp", w: 1054, h: 1400, alt: "Rear cloth bench seat and floor" },
  { id: "trunk", title: "SUV trunk carpet", before: "/photos/ba-trunk-before.webp", after: "/photos/ba-trunk-after.webp", w: 1050, h: 1400, alt: "SUV trunk carpet" },
  { id: "cabin", title: "Acura front cabin", before: "/photos/ba-cabin-before.webp", after: "/photos/ba-cabin-after.webp", w: 1050, h: 1400, alt: "Acura front cabin with tan leather" },
  { id: "engine", title: "Ram engine bay", before: "/photos/ba-engine-before.webp", after: "/photos/ba-engine-after.webp", w: 1600, h: 1200, alt: "Ram 1500 engine bay", aspect: "landscape" },
];

export const GALLERY = {
  heading: "The work, as it actually happens",
  intro: "Real vehicles in real driveways and in our St. Clair Shores studio. Toggle the before-and-after pairs, then scroll the recent work.",
  sub: "See something close to your vehicle? Call (586) 217-0123 for a quote.",
} as const;

// ---------------- ABOUT ----------------
export const ABOUT = {
  heading: "Detailing built around your vehicle and your schedule",
  subheading: "Bubbles Auto Spa, LLC, St. Clair Shores, Michigan",
  body: [
    "At Bubbles Auto Spa, we think your vehicle deserves more than a quick rinse. A real detail is a transformation, and that is the standard we bring to every car, truck, RV, and boat that comes through.",
    "We started this business to deliver professional detailing that protects and improves every vehicle, and we hold ourselves to quality, convenience, and genuine attention to detail. Bring your vehicle to our shop at 23525 Little Mack Ave in St. Clair Shores for drop-off service, or book mobile detailing and we bring certified expertise and high-end work straight to your driveway.",
    "Our exterior and interior detailing, paint correction, ceramic coating, and marine and RV services all run on certified Nasiol, 3M, and 3D products, applied by people who care how it turns out. When you choose Bubbles Auto Spa, you are choosing peace of mind, reliability, and a vehicle that looks better than it has in a long time.",
  ],
  pillars: [
    { icon: "CarFront", title: "Exterior detailing", body: "Thorough wash, decontamination, and finishing that brings out the paint and clears off road grime and buildup." },
    { icon: "Armchair", title: "Interior detailing", body: "Seats, carpets, panels, and glass cleaned and conditioned so the inside feels as good as the outside looks." },
    { icon: "Layers", title: "Paint correction and coating", body: "Swirl and defect removal followed by certified Nasiol ceramic coating for a deep, protected finish." },
    { icon: "Anchor", title: "Marine & RV", body: "Boats and RVs get the same certified care, sized to the rig and quoted per vehicle." },
  ],
} as const;

// ---------------- CONTACT / QUOTE ----------------
export const QUOTE = {
  heading: "Build your detailing quote",
  intro: "Four quick steps. Tell us about your vehicle and the service you want, share your contact info, and review before you send. We will follow up to confirm pricing and a time.",
  reassurance: "No payment now and no obligation. Pricing is a custom quote per vehicle, since a sedan, a work truck, an RV, and a boat all take different amounts of work.",
  trustMicro: "Shop drop-off in St. Clair Shores or mobile service to your door. Certified Nasiol, 3M, and 3D.",
  submit: "Send quote request",
  success: "We will reach out from (586) 217-0123 to confirm your quote and a time. For anything urgent, call or text us anytime.",
  error: "Something went wrong sending your request. Please try again, or call us at (586) 217-0123.",
  steps: {
    vehicle: { header: "Your vehicle", helper: "Car, truck, SUV, RV, or boat. This helps us size the job and quote it accurately." },
    services: { header: "Services", helper: "Pick what you want. Choose as many as apply, and tell us if you prefer the shop or mobile." },
    contact: { header: "Your contact info", helper: "Name, phone, and email so we can confirm pricing and a time. No spam, ever." },
    review: { header: "Review and send", helper: "Double-check your details, then send. We will follow up to lock in the quote and your spot." },
  },
} as const;

// ---------------- SEO ----------------
export const SEO: Record<string, { title: string; description: string }> = {
  home: {
    title: "Bubbles Auto Spa | Auto Detailing in St. Clair Shores, MI",
    description:
      "Shop and mobile auto detailing in St. Clair Shores and Macomb County. Exterior, interior, paint correction, and ceramic coating. Call (586) 217-0123.",
  },
  exterior: {
    title: "Exterior Detailing St. Clair Shores | Bubbles Auto Spa",
    description:
      "Professional exterior detailing in St. Clair Shores, MI. Wash, decontamination, and protection for cars, trucks, and SUVs. Free quote at (586) 217-0123.",
  },
  interior: {
    title: "Interior Detailing St. Clair Shores | Bubbles Auto Spa",
    description:
      "Deep interior detailing in St. Clair Shores and Macomb County. Seats, carpets, leather, and surfaces cleaned and conditioned. Call (586) 217-0123.",
  },
  "paint-correction": {
    title: "Paint Correction St. Clair Shores, MI | Bubbles Auto Spa",
    description:
      "Multi-stage paint correction in St. Clair Shores removes swirls and scratches for a deep gloss. Certified Nasiol, 3M, and 3D. Call (586) 217-0123.",
  },
  "ceramic-coating": {
    title: "Ceramic Coating St. Clair Shores, MI | Bubbles Auto Spa",
    description:
      "Certified Nasiol ceramic coating in St. Clair Shores and Macomb County. Long-lasting paint protection and gloss. Call (586) 217-0123.",
  },
  "marine-rv": {
    title: "Marine & RV Detailing St. Clair Shores | Bubbles Auto Spa",
    description:
      "Boat and RV detailing in St. Clair Shores and Macomb County. Gel coat, oxidation removal, and big-interior cleanup. Free quote at (586) 217-0123.",
  },
  gallery: {
    title: "Detailing Gallery | Bubbles Auto Spa, St. Clair Shores MI",
    description:
      "Recent detailing work and real before-and-after pairs from Bubbles Auto Spa in St. Clair Shores, MI. Cars, trucks, boats, and RVs. Call (586) 217-0123 for a quote.",
  },
  about: {
    title: "About Bubbles Auto Spa | Detailing St. Clair Shores, MI",
    description:
      "Bubbles Auto Spa is a St. Clair Shores detailer with shop and mobile service, certified Nasiol, 3M, and 3D. Serving Macomb County. Call (586) 217-0123.",
  },
  contact: {
    title: "Contact Bubbles Auto Spa | St. Clair Shores Detailing",
    description:
      "Book detailing at our St. Clair Shores shop or mobile across Macomb County. 23525 Little Mack Ave. Call or text (586) 217-0123 for a free quote.",
  },
};

// ---------------- LOCAL SEO: CITY PAGES ----------------
export interface City {
  slug: string;
  name: string;
  blurb: string; // short line for links/cards
  intro: string[]; // unique local copy
  nearby: string[]; // slugs
}

export const CITIES: City[] = [
  {
    slug: "st-clair-shores",
    name: "St. Clair Shores",
    blurb: "Our home base on Little Mack",
    intro: [
      "Bubbles Auto Spa is based right here in St. Clair Shores, at 23525 Little Mack Ave, a few minutes from the Nautical Mile and Lake St. Clair. This is our neighborhood, and we treat every car, truck, and boat in town like it is our own.",
      "Drop your vehicle off at the shop or have our mobile van pull up to your driveway anywhere in the city. With Lake St. Clair around the corner, we do a lot of boat and gel coat work here, alongside full interior and exterior detailing, paint correction, and certified ceramic coating.",
    ],
    nearby: ["roseville", "harrison-township", "warren"],
  },
  {
    slug: "sterling-heights",
    name: "Sterling Heights",
    blurb: "Shop or mobile across the Hall Road area",
    intro: [
      "Sterling Heights drivers do not have to settle for a drive-through wash. Bubbles Auto Spa brings shop-quality detailing to the Hall Road and M-59 corridor, from the neighborhoods off Dodge Park to the lots around Lakeside, with our mobile van or a drop-off at our St. Clair Shores studio.",
      "Whether it is a daily driver caked in Michigan road salt or a weekend car you want corrected and ceramic coated, we size and quote every job for your vehicle. Certified in Nasiol, 3M, and 3D.",
    ],
    nearby: ["shelby-township", "clinton-township", "warren"],
  },
  {
    slug: "warren",
    name: "Warren",
    blurb: "Detailing for Macomb's biggest city",
    intro: [
      "Warren is the largest city in Macomb County, and there are a lot of cars between Van Dyke, Mound, and the GM Tech Center that deserve better than a tunnel wash. Bubbles Auto Spa comes to you anywhere in Warren, or you can drop off at our St. Clair Shores shop.",
      "From a deep interior reset on a work truck to multi-stage paint correction and a certified ceramic coating, we do the real work by hand and quote it per vehicle. No upsell games.",
    ],
    nearby: ["roseville", "sterling-heights", "st-clair-shores"],
  },
  {
    slug: "clinton-township",
    name: "Clinton Township",
    blurb: "Mobile detailing off Gratiot and Hall Road",
    intro: [
      "Clinton Township sits right in the middle of everything we serve, from Gratiot to the Hall Road shopping corridor near Partridge Creek. Bubbles Auto Spa details cars, trucks, SUVs, RVs, and boats here with both mobile service and shop drop-off.",
      "We handle exterior and interior detailing, paint correction, and certified ceramic coating, and we are happy to come to your home or office and do it in your driveway.",
    ],
    nearby: ["harrison-township", "sterling-heights", "roseville"],
  },
  {
    slug: "shelby-township",
    name: "Shelby Township",
    blurb: "Certified detailing up the Van Dyke corridor",
    intro: [
      "Up the M-53 and Van Dyke corridor near Stony Creek, Shelby Township is full of late-model vehicles, trucks, and RVs that get a workout. Bubbles Auto Spa brings certified detailing to your driveway, or you can drop off at our St. Clair Shores studio.",
      "Paint correction to cut the swirls, a ceramic coating to fight Michigan salt and sun, or a full interior deep clean, we build the right package for your vehicle and quote it honestly.",
    ],
    nearby: ["sterling-heights", "clinton-township", "chesterfield"],
  },
  {
    slug: "roseville",
    name: "Roseville",
    blurb: "Quick to reach off Gratiot and 12 Mile",
    intro: [
      "Roseville is a short hop from our shop, right off Gratiot near Macomb Mall and 12 Mile. That makes it one of the easiest cities for us to serve, by mobile van at your place or a fast drop-off at our St. Clair Shores studio.",
      "We get the salt and grime off the right way with a real hand wash and clay bar, then correct and protect the paint with certified Nasiol, 3M, and 3D products. Cars, trucks, RVs, and boats welcome.",
    ],
    nearby: ["st-clair-shores", "warren", "clinton-township"],
  },
  {
    slug: "harrison-township",
    name: "Harrison Township",
    blurb: "Boat and car detailing on Lake St. Clair",
    intro: [
      "Harrison Township lives on the water, and that is right in our wheelhouse. With the marinas and canals off Lake St. Clair, Bubbles Auto Spa does a lot of boat and gel coat work here, from oxidation removal to wax and protective sealants, plus full car and truck detailing.",
      "We can meet your boat at the marina or your car in the driveway. Gel coat polishing, ceramic coating, interior deep cleans, and paint correction, all quoted per vehicle or vessel.",
    ],
    nearby: ["st-clair-shores", "chesterfield", "clinton-township"],
  },
  {
    slug: "chesterfield",
    name: "Chesterfield",
    blurb: "Car, RV, and marine detailing near Anchor Bay",
    intro: [
      "Up by Anchor Bay and the 23 Mile area, Chesterfield is boat and RV country, and those take a beating from sun and a long Michigan winter in storage. Bubbles Auto Spa handles gel coat restoration, RV exteriors, and full auto detailing here with mobile service or shop drop-off.",
      "Bring us the boat before launch, the RV before a trip, or the daily driver any time. Certified in Nasiol, 3M, and 3D, and quoted per vehicle.",
    ],
    nearby: ["harrison-township", "shelby-township", "clinton-township"],
  },
];

export const BUSINESS_DESCRIPTION =
  "Bubbles Auto Spa, LLC is an auto detailing company based in St. Clair Shores, Michigan, serving Macomb County and the surrounding metro Detroit area. Operating from a shop at 23525 Little Mack Ave, the business also offers mobile detailing that comes to the customer. Services include exterior detailing, interior detailing, paint correction, ceramic coating, and marine and RV detailing, with every job quoted per vehicle. The team is certified through Nasiol, 3M, and 3D.";


// ---------------- TWO WAYS (shop vs mobile) ----------------
export const TWO_WAYS = {
  heading: "Drop it at the shop. Or do not leave the house.",
  lede: "Same people, same products, same standard. The only difference is where the vehicle sits.",
  shop: {
    title: "The shop on Little Mack",
    body: "A dedicated studio at 23525 Little Mack Ave in St. Clair Shores with controlled lighting and a clean floor. Paint correction and ceramic coating are usually done here, where we can see every panel properly.",
    photo: "/photos/shop-gt3.webp",
    alt: "Porsche 911 GT3 under the hexagonal lights inside the Bubbles Auto Spa studio in St. Clair Shores",
    w: 1125,
    h: 2000,
  },
  mobile: {
    title: "Our rig, your driveway",
    body: "The van and trailer carry water, power, and everything else we need. We come to homes, offices, and marinas across Macomb County, and you do not rearrange your day.",
    photo: "/photos/truck-bubbles.webp",
    alt: "The black Bubbles Auto Spa van, lettered with the name and phone number, parked outside the shop",
    w: 1200,
    h: 900,
  },
} as const;

// ---------------- SERVICES INDEX (home) ----------------
export const SERVICES_INDEX = {
  heading: "Five things we do well",
  lede: "Every job is sized and quoted for your vehicle. Pick one, or let us put the right combination together.",
} as const;

// ---------------- MARINE BAND ----------------
export const MARINE_BAND = {
  heading: "A lake town needs a boat detailer.",
  body: "St. Clair Shores sits on Lake St. Clair, so a lot of what we do has a hull. Gel coat polishing, oxidation removal, and protective sealants for boats, plus full exterior and interior work on RVs before the trip or before storage.",
  cta: "See marine & RV detailing",
  photo: "/photos/boat-side-wide.webp",
  alt: "The hull of a navy cabin cruiser on blocks with a ladder leaning against it",
  w: 1600,
  h: 900,
} as const;

// ---------------- SPEC SHEET ----------------
export const SPEC_SHEET = {
  heading: "The shop, on paper",
  rows: [
    { label: "Business", value: "Bubbles Auto Spa, LLC" },
    { label: "Shop", value: "23525 Little Mack Ave, St. Clair Shores, MI 48080" },
    { label: "Mobile coverage", value: "Macomb County: St. Clair Shores, Sterling Heights, Warren, Clinton Township, Shelby Township, Roseville, Harrison Township, Chesterfield" },
    { label: "Certifications", value: "Nasiol ceramic coatings, 3M professional products, and 3D detailing chemicals" },
    { label: "Vehicles", value: "Cars, trucks, SUVs, motorcycles, boats, and RVs" },
    { label: "Services", value: "Exterior detailing, interior detailing, paint correction, ceramic coating, and marine and RV detailing" },
    { label: "Pricing", value: "Custom quote per vehicle, based on size and condition" },
    { label: "Booking", value: "Call or text (586) 217-0123, or send a quote request online" },
    { label: "Hours", value: "Open 24 hours. Call or text anytime." },
  ],
} as const;

// ---------------- WORK SECTION (home) ----------------
export const WORK_SECTION = {
  heading: "Real vehicles, real driveways.",
  lede: "Photos from real jobs, taken on a phone. Each before-and-after pair is the same vehicle.",
  cta: "See the full gallery",
} as const;

// ---------------- Web3Forms (client-side submit) ----------------
// Set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to the Bubbles Auto Spa Web3Forms key
// (create one for the business inbox and lock it to the live origin). Without a
// real key the form does not route to /thank-you: it shows QUOTE.error with the
// phone fallback and logs the lead to the console, so no lead is silently dropped
// and nothing delivers to the wrong inbox. Set the key to deliver.
export const WEB3FORMS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
  "REPLACE_WITH_BUBBLES_WEB3FORMS_ACCESS_KEY";
