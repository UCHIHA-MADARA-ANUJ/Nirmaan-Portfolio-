const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'public', 'images', 'screenshots');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function generateSvg(filename, svgContent) {
  const outputPath = path.join(outDir, filename);
  await sharp(Buffer.from(svgContent))
    .png()
    .toFile(outputPath);
  console.log(`Generated ${filename}`);
}

const fontDefs = `<defs>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&amp;family=Inter:wght@400;500;600&amp;family=JetBrains+Mono:wght@400;700&amp;display=swap');
    .display { font-family: 'Space Grotesk', sans-serif; }
    .body { font-family: 'Inter', sans-serif; }
    .mono { font-family: 'JetBrains Mono', monospace; }
  </style>
  <linearGradient id="limeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#B6FF3C" />
    <stop offset="100%" stop-color="#00FF8A" />
  </linearGradient>
  <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="rgba(255,255,255,0.08)" />
    <stop offset="100%" stop-color="rgba(255,255,255,0.02)" />
  </linearGradient>
  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur stdDeviation="15" result="blur" />
    <feComposite in="SourceGraphic" in2="blur" operator="over" />
  </filter>
  <filter id="shadow">
    <feDropShadow dx="0" dy="10" stdDeviation="10" flood-color="#000" flood-opacity="0.5"/>
  </filter>
</defs>`;

// 1. landing.png (1200x1600)
const landingSvg = `<svg width="1200" height="1600" viewBox="0 0 1200 1600" xmlns="http://www.w3.org/2000/svg">
  ${fontDefs}
  <rect width="1200" height="1600" fill="#050706" />
  <!-- Background glow -->
  <circle cx="600" cy="400" r="400" fill="#00FF8A" opacity="0.12" filter="url(#glow)" />
  
  <!-- App Header -->
  <rect x="50" y="60" width="1100" height="100" rx="30" fill="url(#glassGrad)" stroke="rgba(182,255,60,0.2)" stroke-width="2" />
  <text x="100" y="122" class="display" font-size="42" font-weight="700" fill="#B6FF3C" letter-spacing="2">निर्माण</text>
  <text x="250" y="122" class="mono" font-size="28" font-weight="700" fill="#fff">NIRMAN</text>
  <rect x="920" y="85" width="180" height="50" rx="25" fill="#B6FF3C" />
  <text x="1010" y="117" class="display" font-size="20" font-weight="700" fill="#050706" text-anchor="middle">PICKUP</text>

  <!-- Hero Elements inside Mockup -->
  <text x="600" y="340" class="display" font-size="84" font-weight="700" fill="#fff" text-anchor="middle">Zero-Effort</text>
  <text x="600" y="440" class="display" font-size="84" font-weight="700" fill="url(#limeGrad)" text-anchor="middle">E-Waste Logistics.</text>
  <text x="600" y="510" class="body" font-size="28" fill="#8A938C" text-anchor="middle">Doorstep collection. AI sorting. Verified impact.</text>

  <!-- Interactive Action Card -->
  <rect x="100" y="580" width="1000" height="580" rx="40" fill="#101411" stroke="rgba(255,255,255,0.1)" stroke-width="2" filter="url(#shadow)" />
  <text x="160" y="660" class="mono" font-size="20" fill="#5AB2FF">STEP 1 OF 3</text>
  <text x="160" y="720" class="display" font-size="48" font-weight="700" fill="#fff">Select Electronic Category</text>
  
  <g transform="translate(160, 770)">
    <rect width="260" height="140" rx="20" fill="#141A16" stroke="#B6FF3C" stroke-width="3" />
    <text x="130" y="65" class="display" font-size="36" fill="#B6FF3C" text-anchor="middle">📱 Phones</text>
    <text x="130" y="105" class="body" font-size="18" fill="#8A938C" text-anchor="middle">2 Devices</text>
    
    <rect x="310" y="0" width="260" height="140" rx="20" fill="#141A16" stroke="rgba(255,255,255,0.1)" stroke-width="2" />
    <text x="440" y="65" class="display" font-size="36" fill="#fff" text-anchor="middle">💻 Laptops</text>
    <text x="440" y="105" class="body" font-size="18" fill="#8A938C" text-anchor="middle">+500 Reward</text>
    
    <rect x="620" y="0" width="260" height="140" rx="20" fill="#141A16" stroke="rgba(255,255,255,0.1)" stroke-width="2" />
    <text x="750" y="65" class="display" font-size="36" fill="#fff" text-anchor="middle">🔋 Batteries</text>
    <text x="750" y="105" class="body" font-size="18" fill="#8A938C" text-anchor="middle">Lithium / Lead</text>
  </g>

  <rect x="160" y="960" width="880" height="90" rx="45" fill="url(#limeGrad)" />
  <text x="600" y="1015" class="display" font-size="32" font-weight="700" fill="#050706" text-anchor="middle">Insta-Schedule Doorstep Pickup →</text>

  <!-- Live Stats Banner -->
  <rect x="100" y="1220" width="1000" height="280" rx="40" fill="url(#glassGrad)" stroke="rgba(182,255,60,0.15)" stroke-width="2" />
  <g transform="translate(250, 1330)">
    <text x="0" y="0" class="display" font-size="64" font-weight="700" fill="#B6FF3C" text-anchor="middle">14.2 kg</text>
    <text x="0" y="40" class="mono" font-size="18" fill="#8A938C" text-anchor="middle">CO2 OFFSET</text>
    
    <text x="350" y="0" class="display" font-size="64" font-weight="700" fill="#fff" text-anchor="middle">76</text>
    <text x="350" y="40" class="mono" font-size="18" fill="#8A938C" text-anchor="middle">VERIFIED HUBS</text>
    
    <text x="700" y="0" class="display" font-size="64" font-weight="700" fill="#00FF8A" text-anchor="middle">₹1,450</text>
    <text x="700" y="40" class="mono" font-size="18" fill="#8A938C" text-anchor="middle">VALUE RECOVERED</text>
  </g>
</svg>`;

// 2. dashboard.png (1600x1200)
const dashboardSvg = `<svg width="1600" height="1200" viewBox="0 0 1600 1200" xmlns="http://www.w3.org/2000/svg">
  ${fontDefs}
  <rect width="1600" height="1200" fill="#050706" />
  
  <!-- Sidebar -->
  <rect x="30" y="30" width="280" height="1140" rx="30" fill="#0A0F0C" stroke="rgba(255,255,255,0.05)" />
  <text x="70" y="100" class="display" font-size="36" font-weight="700" fill="#B6FF3C">NIRMAN</text>
  
  <rect x="50" y="150" width="240" height="60" rx="20" fill="rgba(182,255,60,0.1)" />
  <text x="90" y="187" class="body" font-size="20" font-weight="600" fill="#B6FF3C">📊 Intelligence</text>
  <text x="90" y="260" class="body" font-size="20" font-weight="500" fill="#8A938C">🗺️ Live Fleet</text>
  <text x="90" y="330" class="body" font-size="20" font-weight="500" fill="#8A938C">🤖 EcoBot AI</text>
  <text x="90" y="400" class="body" font-size="20" font-weight="500" fill="#8A938C">🛡️ Verification</text>
  <text x="90" y="470" class="body" font-size="20" font-weight="500" fill="#8A938C">👤 Impact Ledger</text>
  
  <rect x="50" y="1050" width="240" height="90" rx="25" fill="url(#glassGrad)" stroke="rgba(0,255,138,0.3)" stroke-width="2" />
  <circle cx="90" cy="1095" r="8" fill="#00FF8A" />
  <text x="115" y="1090" class="mono" font-size="16" font-weight="700" fill="#fff">SYSTEM_ONLINE</text>
  <text x="115" y="1110" class="mono" font-size="14" fill="#00FF8A">LATENCY: 12ms</text>

  <!-- Top Navigation Bar -->
  <rect x="340" y="30" width="1230" height="80" rx="25" fill="#0A0F0C" />
  <text x="380" y="80" class="display" font-size="32" font-weight="700" fill="#fff">National E-Waste Logistics Control</text>
  <rect x="1350" y="45" width="180" height="50" rx="25" fill="rgba(255,255,255,0.08)" />
  <text x="1440" y="76" class="body" font-size="16" fill="#fff" text-anchor="middle">📍 NCR Hub #01</text>

  <!-- Metric Cards -->
  <g transform="translate(340, 140)">
    <rect width="380" height="180" rx="30" fill="#101411" stroke="rgba(182,255,60,0.2)" stroke-width="2" />
    <text x="40" y="50" class="mono" font-size="16" fill="#8A938C">ACTIVE DISPATCHES</text>
    <text x="40" y="115" class="display" font-size="54" font-weight="700" fill="#B6FF3C">1,482</text>
    <text x="40" y="150" class="body" font-size="16" fill="#00FF8A">↑ 28.4% this week</text>
    
    <rect x="420" y="0" width="380" height="180" rx="30" fill="#101411" stroke="rgba(255,255,255,0.08)" stroke-width="2" />
    <text x="460" y="50" class="mono" font-size="16" fill="#8A938C">DIVERTED E-WASTE</text>
    <text x="460" y="115" class="display" font-size="54" font-weight="700" fill="#fff">47.2 Tonnes</text>
    <text x="460" y="150" class="body" font-size="16" fill="#5AB2FF">Verified via Blockchain</text>

    <rect x="840" y="0" width="390" height="180" rx="30" fill="#101411" stroke="rgba(255,255,255,0.08)" stroke-width="2" />
    <text x="880" y="50" class="mono" font-size="16" fill="#8A938C">RECOVERED METALS</text>
    <text x="880" y="115" class="display" font-size="54" font-weight="700" fill="#00FF8A">₹18.5 Cr</text>
    <text x="880" y="150" class="body" font-size="16" fill="#8A938C">Au, Ag, Cu, Co extracted</text>
  </g>

  <!-- Big Analytical Chart -->
  <rect x="340" y="350" width="800" height="820" rx="40" fill="#101411" stroke="rgba(255,255,255,0.05)" />
  <text x="400" y="420" class="display" font-size="28" font-weight="700" fill="#fff">Real-Time Inflow vs Processing Rate</text>
  
  <!-- Chart Grid -->
  <path d="M 400 500 L 1080 500 M 400 650 L 1080 650 M 400 800 L 1080 800 M 400 950 L 1080 950" stroke="#1E2520" stroke-dasharray="8 8" stroke-width="2" />
  
  <!-- Smooth Area Graphic -->
  <path d="M 400 950 L 400 800 C 500 700, 600 850, 700 600 C 800 450, 900 650, 1000 450 L 1080 400 L 1080 950 Z" fill="url(#limeGrad)" opacity="0.2" />
  <path d="M 400 800 C 500 700, 600 850, 700 600 C 800 450, 900 650, 1000 450 L 1080 400" fill="none" stroke="#B6FF3C" stroke-width="5" />
  
  <!-- Secondary Line -->
  <path d="M 400 880 C 500 820, 600 750, 700 800 C 800 700, 900 600, 1080 550" fill="none" stroke="#5AB2FF" stroke-width="4" stroke-dasharray="6 6" />

  <!-- Data Point Highlight -->
  <circle cx="1000" cy="450" r="12" fill="#00FF8A" stroke="#050706" stroke-width="4" filter="url(#glow)" />
  <rect x="910" y="350" width="180" height="60" rx="15" fill="#141A16" stroke="#B6FF3C" />
  <text x="1000" y="386" class="mono" font-size="18" font-weight="700" fill="#B6FF3C" text-anchor="middle">92% Formal</text>

  <!-- Live Feeds Sidebar -->
  <rect x="1170" y="350" width="400" height="820" rx="40" fill="#0A0F0C" stroke="rgba(255,255,255,0.08)" />
  <text x="1210" y="420" class="display" font-size="28" font-weight="700" fill="#fff">Live Pickup Ledger</text>
  
  <g transform="translate(1210, 460)">
    <rect width="320" height="100" rx="20" fill="#101411" stroke="rgba(182,255,60,0.3)" />
    <text x="20" y="35" class="display" font-size="18" font-weight="700" fill="#fff">ID: #ORD-9821</text>
    <text x="230" y="35" class="mono" font-size="14" fill="#00FF8A">VERIFIED</text>
    <text x="20" y="70" class="body" font-size="16" fill="#8A938C">12.4 kg Laptops • Gurugram</text>

    <rect y="120" width="320" height="100" rx="20" fill="#101411" stroke="rgba(255,255,255,0.05)" />
    <text x="20" y="155" class="display" font-size="18" font-weight="700" fill="#fff">ID: #ORD-9820</text>
    <text x="240" y="155" class="mono" font-size="14" fill="#FFB83D">SORTING</text>
    <text x="20" y="190" class="body" font-size="16" fill="#8A938C">45.0 kg Batteries • Noida</text>
    
    <rect y="240" width="320" height="100" rx="20" fill="#101411" stroke="rgba(255,255,255,0.05)" />
    <text x="20" y="275" class="display" font-size="18" font-weight="700" fill="#fff">ID: #ORD-9819</text>
    <text x="230" y="275" class="mono" font-size="14" fill="#00FF8A">VERIFIED</text>
    <text x="20" y="310" class="body" font-size="16" fill="#8A938C">8.2 kg Phones • South Delhi</text>
  </g>
</svg>`;

// 3. map.png (1600x1200)
const mapSvg = `<svg width="1600" height="1200" viewBox="0 0 1600 1200" xmlns="http://www.w3.org/2000/svg">
  ${fontDefs}
  <rect width="1600" height="1200" fill="#050706" />
  
  <!-- Faint Map Grid Overlay -->
  <path d="M 0 300 L 1600 300 M 0 600 L 1600 600 M 0 900 L 1600 900 M 400 0 L 400 1200 M 800 0 L 800 1200 M 1200 0 L 1200 1200" stroke="#0E1410" stroke-width="2" />
  
  <!-- Stylized India Network Lines -->
  <g fill="none" stroke="rgba(182,255,60,0.25)" stroke-width="3">
    <path d="M 700 400 L 500 600 L 650 850 L 900 900 L 1100 650 L 950 450 Z" />
    <path d="M 700 400 L 950 450" />
    <path d="M 500 600 L 1100 650" />
    <path d="M 650 850 L 950 450" />
  </g>
  
  <!-- Radar pulse waves -->
  <circle cx="700" cy="400" r="120" fill="none" stroke="#B6FF3C" stroke-width="2" opacity="0.4" />
  <circle cx="700" cy="400" r="240" fill="none" stroke="#00FF8A" stroke-width="1" opacity="0.2" />

  <!-- Active Nodes -->
  <!-- Delhi Hub -->
  <circle cx="700" cy="400" r="16" fill="#B6FF3C" filter="url(#glow)" />
  <circle cx="700" cy="400" r="6" fill="#050706" />
  <rect x="730" y="370" width="220" height="60" rx="15" fill="#101411" stroke="#B6FF3C" stroke-width="2" />
  <text x="750" y="405" class="display" font-size="20" font-weight="700" fill="#fff">NCR Central Hub</text>
  <text x="900" y="405" class="mono" font-size="14" fill="#00FF8A">LIVE</text>

  <!-- Mumbai Hub -->
  <circle cx="500" cy="600" r="14" fill="#00FF8A" filter="url(#glow)" />
  <rect x="250" y="570" width="220" height="60" rx="15" fill="#101411" stroke="rgba(255,255,255,0.2)" />
  <text x="270" y="605" class="display" font-size="20" font-weight="700" fill="#fff">Mumbai Facility</text>
  <text x="410" y="605" class="mono" font-size="14" fill="#5AB2FF">98%</text>

  <!-- Bengaluru Hub -->
  <circle cx="650" cy="850" r="16" fill="#B6FF3C" filter="url(#glow)" />
  <rect x="680" y="820" width="250" height="60" rx="15" fill="#101411" stroke="#B6FF3C" />
  <text x="700" y="855" class="display" font-size="20" font-weight="700" fill="#fff">Bengaluru Eco-Park</text>
  <text x="870" y="855" class="mono" font-size="14" fill="#00FF8A">100%</text>

  <!-- Hyderabad Hub -->
  <circle cx="900" cy="700" r="12" fill="#5AB2FF" filter="url(#glow)" />

  <!-- Overlay UI Panel Overlay -->
  <rect x="50" y="50" width="460" height="900" rx="40" fill="#0A0F0C" stroke="rgba(255,255,255,0.1)" stroke-width="2" />
  <text x="90" y="120" class="display" font-size="32" font-weight="700" fill="#fff">Verified Recycler Network</text>
  <text x="90" y="160" class="body" font-size="18" fill="#8A938C">Showing GPS-authenticated recycling facilities in your sector.</text>

  <g transform="translate(90, 200)">
    <rect width="380" height="150" rx="25" fill="#141A16" stroke="#B6FF3C" stroke-width="2" />
    <text x="30" y="40" class="display" font-size="22" font-weight="700" fill="#B6FF3C">Attero Recycling</text>
    <text x="30" y="70" class="body" font-size="16" fill="#8A938C">Noida, Uttar Pradesh • 14 km away</text>
    <rect x="30" y="90" width="100" height="34" rx="17" fill="rgba(0,255,138,0.2)" />
    <text x="80" y="112" class="mono" font-size="14" font-weight="700" fill="#00FF8A" text-anchor="middle">CERTIFIED</text>
    <rect x="230" y="85" width="120" height="44" rx="22" fill="#B6FF3C" />
    <text x="290" y="112" class="display" font-size="16" font-weight="700" fill="#050706" text-anchor="middle">Book Dispatch</text>

    <rect y="170" width="380" height="150" rx="25" fill="#101411" stroke="rgba(255,255,255,0.08)" stroke-width="2" />
    <text x="30" y="210" class="display" font-size="22" font-weight="700" fill="#fff">Cerebra Integrated Tech</text>
    <text x="30" y="240" class="body" font-size="16" fill="#8A938C">Peenya, Bengaluru • Sector 4</text>
    <rect x="30" y="260" width="100" height="34" rx="17" fill="rgba(0,255,138,0.2)" />
    <text x="80" y="282" class="mono" font-size="14" font-weight="700" fill="#00FF8A" text-anchor="middle">CERTIFIED</text>

    <rect y="340" width="380" height="150" rx="25" fill="#101411" stroke="rgba(255,255,255,0.08)" stroke-width="2" />
    <text x="30" y="380" class="display" font-size="22" font-weight="700" fill="#fff">E-Parisaraa Pvt Ltd</text>
    <text x="30" y="410" class="body" font-size="16" fill="#8A938C">Dobaspet, Karnataka • Global Standard</text>
    <rect x="30" y="430" width="100" height="34" rx="17" fill="rgba(0,255,138,0.2)" />
    <text x="80" y="452" class="mono" font-size="14" font-weight="700" fill="#00FF8A" text-anchor="middle">CERTIFIED</text>
  </g>
</svg>`;

// 4. ecobot.png (1200x1600)
const ecobotSvg = `<svg width="1200" height="1600" viewBox="0 0 1200 1600" xmlns="http://www.w3.org/2000/svg">
  ${fontDefs}
  <rect width="1200" height="1600" fill="#050706" />
  
  <!-- Header -->
  <rect x="50" y="50" width="1100" height="120" rx="40" fill="#101411" stroke="rgba(182,255,60,0.3)" stroke-width="2" />
  <circle cx="120" cy="110" r="30" fill="#B6FF3C" filter="url(#glow)" />
  <text x="120" y="120" font-size="32" text-anchor="middle">🤖</text>
  <text x="180" y="105" class="display" font-size="36" font-weight="700" fill="#fff">NIRMAN EcoBot AI</text>
  <text x="180" y="135" class="mono" font-size="18" fill="#00FF8A">● MULTIMODAL_VISION_ACTIVE</text>

  <!-- Chat Area -->
  <!-- User Message -->
  <rect x="300" y="220" width="850" height="260" rx="30" fill="#141A16" stroke="rgba(255,255,255,0.08)" stroke-width="2" />
  <text x="340" y="270" class="mono" font-size="18" fill="#5AB2FF">USER_UPLOAD</text>
  <text x="340" y="320" class="display" font-size="28" fill="#fff">"I have 3 dead Lenovo ThinkPads and a bunch of frayed copper charging cables. What's the value?"</text>

  <!-- EcoBot Response -->
  <rect x="50" y="520" width="950" height="680" rx="40" fill="#101411" stroke="#B6FF3C" stroke-width="3" filter="url(#shadow)" />
  <text x="100" y="580" class="mono" font-size="20" fill="#B6FF3C">ECOBOT SYSTEM RESPONSE</text>
  
  <text x="100" y="650" class="body" font-size="26" font-weight="600" fill="#fff">Instant Multimodal Categorization Complete:</text>
  
  <g transform="translate(100, 700)">
    <!-- Breakdown Items -->
    <rect width="750" height="90" rx="20" fill="#141A16" stroke="rgba(255,255,255,0.1)" />
    <text x="30" y="55" class="display" font-size="24" fill="#fff">💻 3x Lenovo Laptops (Motherboards intact)</text>
    <text x="600" y="55" class="mono" font-size="24" font-weight="700" fill="#00FF8A">₹3,800</text>

    <rect y="110" width="750" height="90" rx="20" fill="#141A16" stroke="rgba(255,255,255,0.1)" />
    <text x="30" y="165" class="display" font-size="24" fill="#fff">🔌 4.2 kg Frayed Copper Wires (High Grade)</text>
    <text x="600" y="165" class="mono" font-size="24" font-weight="700" fill="#00FF8A">₹1,450</text>
  </g>

  <!-- Total Summary Callout -->
  <rect x="100" y="940" width="750" height="130" rx="30" fill="url(#limeGrad)" opacity="0.15" />
  <rect x="100" y="940" width="750" height="130" rx="30" fill="none" stroke="#B6FF3C" stroke-width="3" />
  <text x="140" y="1000" class="mono" font-size="18" fill="#B6FF3C">ESTIMATED RECOVERABLE COMPENSATION</text>
  <text x="140" y="1045" class="display" font-size="48" font-weight="700" fill="#fff">₹5,250 INR</text>
  
  <rect x="580" y="975" width="240" height="60" rx="30" fill="#B6FF3C" />
  <text x="700" y="1013" class="display" font-size="20" font-weight="700" fill="#050706" text-anchor="middle">Book Instant Drop →</text>

  <!-- Input Footer -->
  <rect x="50" y="1380" width="1100" height="120" rx="60" fill="#141A16" stroke="rgba(255,255,255,0.1)" stroke-width="2" />
  <text x="100" y="1450" class="body" font-size="28" fill="#8A938C">Ask anything or take a photo of your electronic clutter...</text>
  <rect x="940" y="1400" width="180" height="80" rx="40" fill="url(#limeGrad)" />
  <text x="1030" y="1448" class="display" font-size="24" font-weight="700" fill="#050706" text-anchor="middle">Send ⚡</text>
</svg>`;

// 5. verification.png (1200x1600)
const verificationSvg = `<svg width="1200" height="1600" viewBox="0 0 1200 1600" xmlns="http://www.w3.org/2000/svg">
  ${fontDefs}
  <rect width="1200" height="1600" fill="#050706" />
  
  <!-- Step Progress Header -->
  <text x="600" y="120" class="mono" font-size="24" fill="#B6FF3C" text-anchor="middle">STAGE 3 OF 5 • PARTNER AUDIT</text>
  <text x="600" y="180" class="display" font-size="54" font-weight="700" fill="#fff" text-anchor="middle">Strict Trust-First Verification</text>
  <text x="600" y="230" class="body" font-size="24" fill="#8A938C" text-anchor="middle">No informal child labor. No uncertified acid baths. 100% CPCB compliant.</text>

  <!-- Main Certified Partner Card -->
  <rect x="100" y="300" width="1000" height="1160" rx="50" fill="#101411" stroke="rgba(182,255,60,0.3)" stroke-width="3" filter="url(#shadow)" />
  
  <!-- Verified Seal -->
  <circle cx="600" cy="420" r="70" fill="url(#limeGrad)" filter="url(#glow)" />
  <path d="M 570 420 L 595 445 L 635 395" fill="none" stroke="#050706" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />

  <text x="600" y="550" class="display" font-size="48" font-weight="700" fill="#fff" text-anchor="middle">EcoMetals Facility India</text>
  <text x="600" y="595" class="mono" font-size="22" fill="#00FF8A" text-anchor="middle">✔ CENTRAL POLLUTION CONTROL BOARD CERTIFIED</text>

  <!-- Document Checklist Flow -->
  <g transform="translate(160, 660)">
    <!-- Checklist Item 1 -->
    <rect width="880" height="110" rx="25" fill="#141A16" stroke="rgba(0,255,138,0.4)" stroke-width="2" />
    <circle cx="60" cy="55" r="20" fill="#00FF8A" />
    <path d="M 50 55 L 57 62 L 70 48" fill="none" stroke="#050706" stroke-width="4" />
    <text x="110" y="50" class="display" font-size="26" font-weight="700" fill="#fff">Identity &amp; Corporate Registration</text>
    <text x="110" y="80" class="mono" font-size="16" fill="#8A938C">HASH: 98a7c6f5...2100 • VERIFIED BY GOVT MCR</text>

    <!-- Checklist Item 2 -->
    <rect y="140" width="880" height="110" rx="25" fill="#141A16" stroke="rgba(0,255,138,0.4)" stroke-width="2" />
    <circle cx="60" cy="195" r="20" fill="#00FF8A" />
    <path d="M 50 195 L 57 202 L 70 188" fill="none" stroke="#050706" stroke-width="4" />
    <text x="110" y="190" class="display" font-size="26" font-weight="700" fill="#fff">R2v3 Sustainable Recycling Standard</text>
    <text x="110" y="220" class="mono" font-size="16" fill="#8A938C">INTERNATIONAL AUDIT PASSED • EXPIRES 2028</text>

    <!-- Checklist Item 3 -->
    <rect y="280" width="880" height="110" rx="25" fill="#141A16" stroke="rgba(0,255,138,0.4)" stroke-width="2" />
    <circle cx="60" cy="335" r="20" fill="#00FF8A" />
    <path d="M 50 335 L 57 342 L 70 328" fill="none" stroke="#050706" stroke-width="4" />
    <text x="110" y="330" class="display" font-size="26" font-weight="700" fill="#fff">Zero-Landfill Processing Undertaking</text>
    <text x="110" y="360" class="mono" font-size="16" fill="#8A938C">SLAG AVOIDANCE PROTOCOL ACTIVE</text>

    <!-- Checklist Item 4 -->
    <rect y="420" width="880" height="110" rx="25" fill="#141A16" stroke="rgba(0,255,138,0.4)" stroke-width="2" />
    <circle cx="60" cy="475" r="20" fill="#00FF8A" />
    <path d="M 50 475 L 57 482 L 70 468" fill="none" stroke="#050706" stroke-width="4" />
    <text x="110" y="470" class="display" font-size="26" font-weight="700" fill="#fff">Live Blockchain Weight Scale Sync</text>
    <text x="110" y="500" class="mono" font-size="16" fill="#8A938C">REAL-TIME IOT TELEMETRY ENABLED</text>
  </g>

  <!-- Final Approval Footer -->
  <rect x="160" y="1260" width="880" height="120" rx="60" fill="url(#limeGrad)" />
  <text x="600" y="1330" class="display" font-size="36" font-weight="700" fill="#050706" text-anchor="middle">Authorize Public Listing 🛡️</text>
</svg>`;

// 6. profile.png (1200x1600)
const profileSvg = `<svg width="1200" height="1600" viewBox="0 0 1200 1600" xmlns="http://www.w3.org/2000/svg">
  ${fontDefs}
  <rect width="1200" height="1600" fill="#050706" />
  
  <!-- Profile Header -->
  <circle cx="600" cy="180" r="80" fill="#141A16" stroke="#B6FF3C" stroke-width="4" filter="url(#glow)" />
  <text x="600" y="205" font-size="72" text-anchor="middle">🏡</text>
  <text x="600" y="320" class="display" font-size="48" font-weight="700" fill="#fff" text-anchor="middle">Green RWA Society, Sector 54</text>
  <text x="600" y="360" class="mono" font-size="20" fill="#5AB2FF" text-anchor="middle">MEMBER SINCE 2024 • GURUGRAM</text>

  <!-- Big Ledger Total Stats -->
  <rect x="80" y="420" width="1040" height="340" rx="40" fill="#101411" stroke="rgba(255,255,255,0.08)" stroke-width="2" />
  <g transform="translate(140, 500)">
    <rect width="300" height="180" rx="30" fill="#141A16" />
    <text x="150" y="60" class="mono" font-size="16" fill="#8A938C" text-anchor="middle">TOTAL DIVERTED</text>
    <text x="150" y="125" class="display" font-size="54" font-weight="700" fill="#B6FF3C" text-anchor="middle">142 kg</text>
    
    <rect x="320" y="0" width="300" height="180" rx="30" fill="#141A16" />
    <text x="470" y="60" class="mono" font-size="16" fill="#8A938C" text-anchor="middle">CO2 PREVENTED</text>
    <text x="470" y="125" class="display" font-size="54" font-weight="700" fill="#00FF8A" text-anchor="middle">114 kg</text>

    <rect x="640" y="0" width="280" height="180" rx="30" fill="#141A16" />
    <text x="780" y="60" class="mono" font-size="16" fill="#8A938C" text-anchor="middle">NIRMAN TOKENS</text>
    <text x="780" y="125" class="display" font-size="54" font-weight="700" fill="#5AB2FF" text-anchor="middle">2,450</text>
  </g>

  <!-- Environmental Certificate Section -->
  <rect x="80" y="800" width="1040" height="680" rx="50" fill="url(#glassGrad)" stroke="rgba(182,255,60,0.3)" stroke-width="3" filter="url(#shadow)" />
  <text x="600" y="880" class="mono" font-size="22" fill="#B6FF3C" text-anchor="middle">OFFICIAL IMPACT LEDGER</text>
  <text x="600" y="940" class="display" font-size="42" font-weight="700" fill="#fff" text-anchor="middle">Verified Impact Flow</text>
  
  <g transform="translate(140, 1000)">
    <!-- Entry 1 -->
    <rect width="920" height="120" rx="25" fill="#101411" stroke="rgba(255,255,255,0.05)" />
    <text x="40" y="50" class="display" font-size="24" font-weight="700" fill="#fff">45.0 kg Old Desktop Servers</text>
    <text x="40" y="85" class="body" font-size="18" fill="#8A938C">Processed at E-Parisaraa facility • 36 kg CO2 saved</text>
    <rect x="740" y="35" width="140" height="50" rx="25" fill="rgba(182,255,60,0.15)" stroke="#B6FF3C" />
    <text x="810" y="66" class="mono" font-size="16" font-weight="700" fill="#B6FF3C" text-anchor="middle">+900 PTS</text>

    <!-- Entry 2 -->
    <rect y="150" width="920" height="120" rx="25" fill="#101411" stroke="rgba(255,255,255,0.05)" />
    <text x="40" y="200" class="display" font-size="24" font-weight="700" fill="#fff">18.2 kg Abandoned Inverter Batteries</text>
    <text x="40" y="235" class="body" font-size="18" fill="#8A938C">Processed at Attero Recycling • Zero Lead Leaked</text>
    <rect x="740" y="185" width="140" height="50" rx="25" fill="rgba(182,255,60,0.15)" stroke="#B6FF3C" />
    <text x="810" y="216" class="mono" font-size="16" font-weight="700" fill="#B6FF3C" text-anchor="middle">+650 PTS</text>
    
    <!-- Entry 3 -->
    <rect y="300" width="920" height="120" rx="25" fill="#101411" stroke="rgba(255,255,255,0.05)" />
    <text x="40" y="350" class="display" font-size="24" font-weight="700" fill="#fff">12.4 kg Mixed Smartphones &amp; Tablets</text>
    <text x="40" y="385" class="body" font-size="18" fill="#8A938C">100% data shredded • Cobalt / Gold recovered</text>
    <rect x="740" y="335" width="140" height="50" rx="25" fill="rgba(182,255,60,0.15)" stroke="#B6FF3C" />
    <text x="810" y="366" class="mono" font-size="16" font-weight="700" fill="#B6FF3C" text-anchor="middle">+900 PTS</text>
  </g>
</svg>`;

async function run() {
  await generateSvg('landing.png', landingSvg);
  await generateSvg('dashboard.png', dashboardSvg);
  await generateSvg('map.png', mapSvg);
  await generateSvg('ecobot.png', ecobotSvg);
  await generateSvg('verification.png', verificationSvg);
  await generateSvg('profile.png', profileSvg);
  console.log('All screenshots generated flawlessly!');
}

run();
