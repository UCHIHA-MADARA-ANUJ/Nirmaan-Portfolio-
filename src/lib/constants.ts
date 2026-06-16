export const SITE_CONFIG = {
  brand: "NIRMAN",
  hindiBrand: "निर्माण",
  tagline: "Swiggy for E-Waste.",
  subTagline: "Book a pickup. Choose a verified recycler. Track every kilogram of impact.",
  domainContext: "India's first AI-powered e-waste pickup & recycling network.",
  footerText: "Built to make e-waste collection accessible, verified, and measurable.",
};

export const NAV_LINKS = [
  { label: "Mission", href: "#mission" },
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "Product", href: "#product" },
  { label: "Network", href: "#network" },
  { label: "AI Cortex", href: "#ai" },
  { label: "Impact", href: "#impact" },
  { label: "Tech", href: "#tech" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Architects", href: "#team" },
];

export const PROBLEM_STATS = [
  {
    number: "14.14",
    unit: "Lakh Tonnes",
    label: "GENERATED ANNUALLY",
    desc: "India's massive electronic waste surging every year without structured collection.",
  },
  {
    number: "3RD",
    unit: "Largest Globally",
    label: "GLOBAL E-WASTE RANK",
    desc: "Only behind China and USA, yet lacking a unified doorstep logistics infrastructure.",
  },
  {
    number: ">70%",
    unit: "Informally Burned",
    label: "TOXIC PROCESSING",
    desc: "Dismantled by unprotected workers in acid baths, releasing lethal heavy metals.",
  },
  {
    number: "99%",
    unit: "Blind Spot",
    label: "THE REAL BOTTLENECK",
    desc: "The root failure is not intent—it is household access, convenience, and certified trust.",
  },
];

export const COMPARISON_MATRIX = [
  {
    feature: "Home pickup on-demand",
    informal: "✗ No",
    b2b: "✗ No",
    dropOff: "~ Slow",
    nirman: "✓ Yes (Instant)",
  },
  {
    feature: "Open to every household",
    informal: "✓ Yes",
    b2b: "✗ B2B Only",
    dropOff: "~ Urban Only",
    nirman: "✓ Universal",
  },
  {
    feature: "Verified / CPCB Certified",
    informal: "✗ Never",
    b2b: "✓ Yes",
    dropOff: "✓ Yes",
    nirman: "✓ 100% Guaranteed",
  },
  {
    feature: "Live tracking + IoT Scale Sync",
    informal: "✗ No",
    b2b: "~ Manual",
    dropOff: "✗ No",
    nirman: "✓ Live Telemetry",
  },
  {
    feature: "AI categorization & valuation",
    informal: "✗ Arbitrary",
    b2b: "✗ Flat rate",
    dropOff: "✗ None",
    nirman: "✓ EcoBot AI",
  },
  {
    feature: "Safe traceable proof & CO₂ ledger",
    informal: "✗ None",
    b2b: "✓ Annual",
    dropOff: "~ Paper receipt",
    nirman: "✓ Blockchain Token",
  },
];

export const FIVE_STEPS_OVERVIEW = [
  {
    number: "01",
    title: "SELECT",
    desc: "Tap your old phones, dead laptops, or tangled cords. EcoBot estimates instant value.",
    icon: "📱",
  },
  {
    number: "02",
    title: "DISCOVER",
    desc: "Radar locate CPCB-authorized, top-tier recycling facilities in your exact neighborhood.",
    icon: "🗺️",
  },
  {
    number: "03",
    title: "BOOK",
    desc: "Choose a time slot. Like Swiggy or Porter, a verified pickup agent gets dispatched.",
    icon: "⚡",
  },
  {
    number: "04",
    title: "COLLECT",
    desc: "Doorstep OTP handover. Live IoT weight scale authentication directly into your app.",
    icon: "🚚",
  },
  {
    number: "05",
    title: "RECYCLE",
    desc: "Zero landfill. 100% formal extraction. Get ecological rewards and digital CO₂ certificates.",
    icon: "♻️",
  },
];

export const PRODUCT_JOURNEY_STEPS = [
  {
    step: "01",
    title: "Start the Pickup",
    desc: "Clear your clutter instantly. One intuitive dashboard to initiate dispatches.",
    img: "/images/screenshots/landing.png",
    status: "DISPATCH_READY",
  },
  {
    step: "02",
    title: "Find Verified Centres",
    desc: "Live GPS mapping of highly certified CPCB processing facilities.",
    img: "/images/screenshots/map.png",
    status: "RADAR_ACTIVE",
  },
  {
    step: "03",
    title: "Get Guided by AI",
    desc: "EcoBot AI uses multimodal computer vision to sort and inspect your devices.",
    img: "/images/screenshots/ecobot.png",
    status: "VISION_ONLINE",
  },
  {
    step: "04",
    title: "Track Live State",
    desc: "Monitor your doorstep courier and IoT weight scale telemetry real-time.",
    img: "/images/screenshots/dashboard.png",
    status: "TELEMETRY_SYNCED",
  },
  {
    step: "05",
    title: "See Real Impact",
    desc: "Cryptographic impact proof, carbon offset figures, and direct bank compensation.",
    img: "/images/screenshots/profile.png",
    status: "IMPACT_LOGGED",
  },
];

export const VERIFIED_CENTRES_DEMO = [
  {
    name: "Attero Recycling Hub",
    city: "Noida, Sector 63",
    distance: "14.2 km",
    rating: "4.9 ★",
    status: "CERTIFIED • CPCB",
    cords: [28.625, 77.375] as [number, number],
  },
  {
    name: "E-Parisaraa Global Hub",
    city: "Bengaluru, Peenya",
    distance: "5.8 km",
    rating: "5.0 ★",
    status: "CERTIFIED • R2v3",
    cords: [13.03, 77.52] as [number, number],
  },
  {
    name: "Cerebra Integrated Park",
    city: "Hyderabad, HITEC City",
    distance: "11.1 km",
    rating: "4.8 ★",
    status: "CERTIFIED • CPCB",
    cords: [17.44, 78.38] as [number, number],
  },
  {
    name: "EcoMetals Central Hub",
    city: "Mumbai, Navi Mumbai",
    distance: "19.4 km",
    rating: "4.9 ★",
    status: "CERTIFIED • ISO 14001",
    cords: [19.03, 73.02] as [number, number],
  },
  {
    name: "Exigo Recycling Plant",
    city: "Gurugram, Manesar",
    distance: "22.5 km",
    rating: "4.7 ★",
    status: "CERTIFIED • CPCB",
    cords: [28.35, 76.94] as [number, number],
  },
  {
    name: "Greentek Reman Park",
    city: "Chennai, Guindy",
    distance: "8.3 km",
    rating: "4.9 ★",
    status: "CERTIFIED • R2v3",
    cords: [13.01, 80.21] as [number, number],
  },
];

export const ECOSYSTEM_ROLES = [
  {
    icon: "👤",
    title: "Citizens & RWAs",
    bullets: ["Free doorstep pickup", "Instant appraisal via EcoBot", "Carbon offset proof & token rewards"],
    desc: "Empowering every Indian household and resident welfare association to monetize dead electronics effortlessly.",
  },
  {
    icon: "🏭",
    title: "Verified Partners",
    bullets: ["Predictable continuous inflow", "CPCB KYC authorization", "Automated IoT dispatch logistics"],
    desc: "Providing highly formal recyclers with reliable, aggregated raw material streams across major urban corridors.",
  },
  {
    icon: "🛡️",
    title: "Municipal Admins",
    bullets: ["Citywide tracking ledger", "Illegal scrap yard detection", "EPR policy compliance monitoring"],
    desc: "Enabling urban local bodies to formally govern, inspect, and authenticate their city's circular economy.",
  },
  {
    icon: "⚡",
    title: "NIRMAN Core Engine",
    bullets: ["Autonomous ML routing", "Multimodal CV inspection", "Cryptographic impact ledgers"],
    desc: "The overarching digital brain coordinating dispatch riders, smart scales, and metallurgical recovery.",
  },
];

export const AI_MODULES = [
  {
    title: "NIRMAN AI Assistant",
    status: "LIVE",
    tech: "Fine-tuned Indic LLM / NLP",
    desc: "Conversational eco-guidance embedded directly into the app, fluent in Hindi, English, and local languages.",
    icon: "🤖",
  },
  {
    title: "Impact Intelligence Engine",
    status: "ACTIVE",
    tech: "Real-time Stream Aggregation",
    desc: "Autonomous auditing algorithms that transform raw device weights into exact CO₂ offset and precious metal values.",
    icon: "📊",
  },
  {
    title: "Snap-to-Sort Vision",
    status: "PLANNED",
    tech: "Multimodal Computer Vision",
    desc: "Camera scan that instantly identifies component models, battery chemistry, and structural degradation.",
    icon: "📷",
  },
  {
    title: "Smart Match & Routing",
    status: "PLANNED",
    tech: "Predictive Geospatial ML",
    desc: "Dynamic clustering that groups rider pickups to minimize carbon expenditure per metric ton collected.",
    icon: "🗺️",
  },
];

export const TRUST_VERIFICATION_FLOW = [
  { step: "01", title: "Partner Identity", desc: "Corporate MCA verification & tax KYC authentication." },
  { step: "02", title: "Geospatial Pin", desc: "Physical GPS geofencing and CPCB license inspection." },
  { step: "03", title: "Document Upload", desc: "Zero-landfill compliance covenants & ISO certificates." },
  { step: "04", title: "Admin Review", desc: "Rigorous metallurgical audit by environmental engineers." },
  { step: "05", title: "Public Listing", desc: "Instant activation on NIRMAN consumer radar." },
];

export const IMPACT_CHART_GENERATED_VS_RECYCLED = [
  { year: "2021", generated: 13.5, recycled: 3.5 },
  { year: "2022", generated: 16.0, recycled: 5.3 },
  { year: "2023", generated: 16.1, recycled: 5.4 },
  { year: "2024", generated: 12.5, recycled: 7.8 },
  { year: "2025", generated: 14.0, recycled: 11.6 },
  { year: "2026", generated: 14.2, recycled: 9.8 },
];

export const IMPACT_CHART_FORMAL_RATE = [
  { quarter: "Q1 '25", rate: 26 },
  { quarter: "Q2 '25", rate: 33 },
  { quarter: "Q3 '25", rate: 34 },
  { quarter: "Q4 '25", rate: 62 },
  { quarter: "Q1 '26", rate: 83 },
];

export const TECHNOLOGY_LAYERS = [
  {
    layer: "01",
    name: "Frontend User Experience",
    stack: "Next.js 14 • React 18 • Tailwind CSS • Framer Motion • PWA",
    desc: "Ultra-responsive cinematic interfaces engineered for sub-second boot times across Indian mobile networks.",
  },
  {
    layer: "02",
    name: "Geospatial & Radar Engine",
    stack: "Leaflet • OpenStreetMap • WebGL Shaders • Nominatim Geocoding",
    desc: "High-precision live partner discovery and rider tracking optimized for minimal battery consumption.",
  },
  {
    layer: "03",
    name: "Core Backend & Data Mesh",
    stack: "Node Engine • Role-based JWT Auth • Real-time WebSocket Sync",
    desc: "High-throughput transactional architecture capable of authenticating thousands of simultaneous IoT scale drops.",
  },
  {
    layer: "04",
    name: "Artificial Intelligence Cortex",
    stack: "Indic LLM Models • PyTorch CV Pipeline • Geospatial Clustering Engine",
    desc: "The analytical powerhouse enabling voice sorting, market valuation, and automated routing.",
  },
  {
    layer: "05",
    name: "Cloud Hosting & Telemetry",
    stack: "Vercel Edge Network • Distributed Core DB • Automated CI/CD Pipelines",
    desc: "Global CDN caching and serverless deployment models guaranteeing 99.99% operational uptime.",
  },
];

export const MARKET_SCALABILITY_DATA = [
  { year: "2024", market: 22.2 },
  { year: "2026", market: 28.5 },
  { year: "2028", market: 40.0 },
  { year: "2030", market: 54.2 },
];

export const ROADMAP_MILESTONES = [
  {
    time: "NOW",
    title: "Prototype & Validation",
    content: "Portfolio live, core prototype screens constructed, algorithmic feasibility proven, citizen survey validation.",
    status: "COMPLETED",
  },
  {
    time: "0–3 MONTHS",
    title: "Production App & Partner Onboarding",
    content: "Production iOS & Android PWA deployment, municipal admin control panel, real-time IoT scale integration.",
    status: "IN PROGRESS",
  },
  {
    time: "3–6 MONTHS",
    title: "Pilot City Execution",
    content: "Launch in NCR / Delhi pilot sector, 30+ fully verified CPCB partners, tokenized ecological rewards engine.",
    status: "UPCOMING",
  },
  {
    time: "6–18 MONTHS",
    title: "Pan-Urban Expansion",
    content: "Scaling across 10+ Indian tech metropolises (Bengaluru, Hyderabad, Mumbai), autonomous CV device sorting.",
    status: "UPCOMING",
  },
  {
    time: "18 MONTHS+",
    title: "National EPR Infrastructure",
    content: "Integration with corporate Extended Producer Responsibility (EPR) mandates, national carbon credit exchange.",
    status: "UPCOMING",
  },
];
