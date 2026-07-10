const SERVICE_DATA = {
  // --- SEO SERVICES ---
  "local-seo": {
    title: "Local SEO Services",
    category: "SEO",
    icon: "fa-map-marker-alt",
    bg: "linear-gradient(135deg,#6254E7,#8b80f0)",
    desc: "Dominate local search results and drive foot traffic directly to your business location. We optimize your local footprint to attract high-intent customers who are searching for your services nearby.",
    features: [
      { title: "Google Business Profile Optimization", desc: "Complete setup, optimization, and ongoing management of your Google Business Profile to capture map pack rankings." },
      { title: "NAP Citation Building", desc: "Ensure consistent Name, Address, and Phone number information across all directory listings online." },
      { title: "Review Management", desc: "Strategies to acquire, manage, and respond to Google reviews to build authority and trust." },
      { title: "Local Keyword Optimization", desc: "Targeting search queries matching local intent (e.g., 'near me' and city-specific phrases)." }
    ],
    process: [
      { step: "01", name: "Audit & Cleanup", desc: "We scan the web to find and fix inconsistent NAP details and evaluate current map pack visibility." },
      { step: "02", name: "Profile Optimization", desc: "We enrich your Google Business Profile with expert descriptions, categories, services, and visual media." },
      { step: "03", name: "Citation Campaign", desc: "We submit your details to top local citation directories and industry-specific networks." },
      { step: "04", name: "Review Strategy", desc: "We implement review acquisition campaigns to start getting consistent 5-star customer ratings." }
    ],
    faq: [
      { q: "How long does Local SEO take to show results?", a: "Typically, you will see improvements in local map rankings within 30 to 90 days of starting our campaign." },
      { q: "Do I need a physical address for Local SEO?", a: "Yes, to rank in Google Maps, you need a physical address or a designated service area location." },
      { q: "What is the Google Map Pack?", a: "It is the set of 3 business listings that appear at the top of Google Search when people look for local businesses." }
    ]
  },
  "ecommerce-seo": {
    title: "E-commerce SEO Services",
    category: "SEO",
    icon: "fa-shopping-bag",
    bg: "linear-gradient(135deg,#6254E7,#8b80f0)",
    desc: "Maximize your online store's visibility, attract qualified shoppers, and turn search traffic into orders. We optimize your product and category pages for search intent.",
    features: [
      { title: "Category Page Optimization", desc: "Structuring and optimizing category pages to rank for high-volume commercial keywords." },
      { title: "Product Schema Markup", desc: "Implementing rich snippets so prices, ratings, and stock status show up directly in search results." },
      { title: "Site Architecture & Crawlability", desc: "Fixing faceted navigation issues and indexation blocks to ensure search bots can crawl all items." },
      { title: "Conversion Rate Optimization (CRO)", desc: "Integrating user experience audits to turn SEO traffic into direct sales conversions." }
    ],
    process: [
      { step: "01", name: "Keyword Architecture", desc: "Research and map transactional search queries to relevant product category hierarchies." },
      { step: "02", name: "Technical Audit", desc: "Address slow loading speeds, broken links, duplicate content, and indexing blocks." },
      { step: "03", name: "On-Page Tuning", desc: "Optimize title tags, meta descriptions, image alt tags, and copy for product lists." },
      { step: "04", name: "Link Acquisition", desc: "Build authority links through brand mentions, blogger features, and gift guides." }
    ],
    faq: [
      { q: "Can SEO help my Shopify or WooCommerce store?", a: "Absolutely. We specialize in optimizing all major e-commerce platforms including Shopify, WooCommerce, Magento, and BigCommerce." },
      { q: "How do you handle out-of-stock products?", a: "We apply SEO best practices (like redirects or keeping pages active with helpful recommendations) to retain ranking power." }
    ]
  },
  "enterprise-seo": {
    title: "Enterprise SEO Services",
    category: "SEO",
    icon: "fa-building",
    bg: "linear-gradient(135deg,#6254E7,#8b80f0)",
    desc: "Scalable, corporate-grade SEO solutions built to manage complex website structures, protect brand reputation, and drive growth for millions of search impressions.",
    features: [
      { title: "Scalable Technical SEO", desc: "Ongoing monitoring of site indexing, XML sitemaps, JavaScript rendering, and core web vitals." },
      { title: "Content Governance", desc: "Creating guidelines and workflows to manage content quality across thousands of global pages." },
      { title: "Competitor Market Analysis", desc: "In-depth intelligence tracking on enterprise rivals to find search share gaps." },
      { title: "Global & Multi-lingual SEO", desc: "Hreflang implementation and localization setups to rank across different countries and languages." }
    ],
    process: [
      { step: "01", name: "Deep Discovery", desc: "Analyze enterprise platform tech stack, legacy pages, and internal organizational blocks." },
      { step: "02", name: "Roadmap Formulation", desc: "Prioritize technical repairs and keyword hubs that yield the highest business impact." },
      { step: "03", name: "Cross-Functional Sync", desc: "Work closely with your internal developer and copywriting teams to deploy optimizations." },
      { step: "04", name: "Custom Reporting", desc: "Deliver advanced organic revenue attribution models and rank tracking dashboards." }
    ],
    faq: [
      { q: "What defines Enterprise SEO?", a: "Enterprise SEO handles large-scale websites (often with 10,000+ pages) and requires structured coordination across tech, brand, and legal teams." },
      { q: "Do you offer international SEO?", a: "Yes, we implement hreflang and localized keyword strategies for international businesses." }
    ]
  },
  "saas-seo": {
    title: "SaaS SEO Services",
    category: "SEO",
    icon: "fa-cloud",
    bg: "linear-gradient(135deg,#6254E7,#8b80f0)",
    desc: "Drive product signups and lower your customer acquisition cost (CAC). We build topical authority frameworks and conversion funnels specifically tailored for SaaS platforms.",
    features: [
      { title: "Topical Authority Planning", desc: "Building comprehensive content clusters that solve customer pain points across the entire SaaS funnel." },
      { title: "Comparison & Product Pages", desc: "Optimizing 'Alternative to' or 'VS' comparison landing pages to capture buyers at the evaluation stage." },
      { title: "SaaS Technical Audits", desc: "Solving indexation challenges for product documentations and dynamically loaded app domains." },
      { title: "Lead Magnet Optimization", desc: "Optimizing landing pages for free tools, template libraries, and ebooks to build subscribers." }
    ],
    process: [
      { step: "01", name: "Funnel Mapping", desc: "Map keywords across TOFU (awareness), MOFU (consideration), and BOFU (purchase) cycles." },
      { step: "02", name: "Product SEO Setup", desc: "Audit and optimize integration listing pages, templates, and help center files." },
      { step: "03", name: "Authority Clustering", desc: "Create top-tier educational guides to position your SaaS as the definitive industry authority." },
      { step: "04", name: "Product-Led Outreach", desc: "Build reputable backlinks via software reviews, technology lists, and SaaS mentions." }
    ],
    faq: [
      { q: "What is Product-Led SEO?", a: "Product-Led SEO uses your product's assets (like templates, free tools, or integrations) to capture massive search volume." },
      { q: "How do you align SEO with SaaS signups?", a: "We target search queries where users are searching for a solution your product solves, creating clear product calls-to-action in the copy." }
    ]
  },
  "healthcare-seo": {
    title: "Healthcare SEO Services",
    category: "SEO",
    icon: "fa-heartbeat",
    bg: "linear-gradient(135deg,#6254E7,#8b80f0)",
    desc: "Ethical and medical-grade search marketing. We design patient acquisition campaigns that comply with medical guidelines and build deep search credibility.",
    features: [
      { title: "Medical Authority (YMYL)", desc: "Optimizing content to align with Google's strict Your Money or Your Life (YMYL) standards." },
      { title: "Local Doctor & Clinic Listings", desc: "Optimizing individual pages for practitioners and physical clinic locations." },
      { title: "Patient Intent Keywords", desc: "Targeting symptom queries, treatment descriptions, and provider searches." },
      { title: "Trust Signals Setup", desc: "Structuring reviewer certifications, editorial reviews, and citation guidelines." }
    ],
    process: [
      { step: "01", name: "E-E-A-T Assessment", desc: "Analyze current website trust indicators, medical citations, and author expertise panels." },
      { step: "02", name: "Local Clinic Setup", desc: "Clean up listings across healthcare portals and optimize clinic Google Maps rankings." },
      { step: "03", name: "Expert Content Creation", desc: "Formulate medical pages checked by certified experts to ensure total medical accuracy." },
      { step: "04", name: "Patient Funnels Setup", desc: "Design seamless patient scheduling paths from search listings directly to booking portals." }
    ],
    faq: [
      { q: "Is Healthcare SEO compliant with privacy laws?", a: "Yes, we focus on organic visibility and structural optimization that respects patient privacy and HIPAA compliance." },
      { q: "Why is doctor authority important for SEO?", a: "Google demands higher author credentials for medical topics. Content must be written or reviewed by medical professionals." }
    ]
  },
  "ai-seo": {
    title: "AI SEO & Generative Engine Optimization (GEO)",
    category: "SEO",
    icon: "fa-brain",
    bg: "linear-gradient(135deg,#6254E7,#8b80f0)",
    desc: "Optimize your website content to be cited in AI search results (like Google Overviews, Perplexity, and ChatGPT). Prepare your business for the future of query answering.",
    features: [
      { title: "Generative Engine Benchmarking", desc: "Analyze your site's current share of voice in LLM responses and AI search answers." },
      { title: "Citation Optimization", desc: "Structuring text with clear sources, definitions, and stats that AI search engines prefer to cite." },
      { title: "Entity & Schema Setup", desc: "Leveraging structured data to establish your brand as a recognized entity in knowledge graphs." },
      { title: "Conversational Q&A Targeting", desc: "Writing answers that directly respond to natural conversation search prompts." }
    ],
    process: [
      { step: "01", name: "LLM Audit", desc: "Audit if search LLMs (Perplexity, ChatGPT, Gemini) mention and recommend your brand." },
      { step: "02", name: "Schema & RDF Setup", desc: "Implement semantic schemas to outline relations, entities, and attributes." },
      { step: "03", name: "Citation Tuning", desc: "Write authority-level descriptions that match direct citation parameters used by AI engines." },
      { step: "04", name: "Knowledge Hub Building", desc: "Publish extensive industry definitions, stats, and facts to become the source of truth." }
    ],
    faq: [
      { q: "What is GEO?", a: "GEO (Generative Engine Optimization) is the process of optimizing content so it is found, cited, and recommended by AI chatbots and engines." },
      { q: "Is traditional SEO dead due to AI?", a: "No, AI search engines gather information from high-authority websites. Traditional SEO factors like backlinks and quality text remain highly relevant." }
    ]
  },

  // --- DIGITAL MARKETING SERVICES ---
  "performance-marketing": {
    title: "Performance Marketing",
    category: "Marketing",
    icon: "fa-chart-bar",
    bg: "linear-gradient(135deg,#6254E7,#8b80f0)",
    desc: "Data-driven, ROI-focused paid campaigns. We manage budgets across Google, Meta, and LinkedIn with a focus on conversion volume and lower acquisition costs.",
    features: [
      { title: "Cross-Channel Strategy", desc: "Unified paid search, social, and display strategies aligned to your target audience." },
      { title: "Audience Segmentation", desc: "Deep custom audience development using retargeting lists and buyer characteristics." },
      { title: "A/B Creative Testing", desc: "Continuous iteration of ad copies, designs, and landing page layouts to increase conversion rates." },
      { title: "Attribution Dashboarding", desc: "Clear reporting showcasing cost per lead, customer acquisition cost, and revenue ROI." }
    ],
    process: [
      { step: "01", name: "Goal & Tracking Setup", desc: "Deploy pixels, conversion APIs, and analytics tracking to establish correct attribution." },
      { step: "02", name: "Audience Mapping", desc: "Formulate targeting blueprints matching the client's ideal customer profiles." },
      { step: "03", name: "Creative Delivery", desc: "Launch ad graphics and ad copy optimized for target channels." },
      { step: "04", name: "Bidding Optimization", desc: "Perform smart budget allocation and target CPA/ROAS tuning to maximize budget efficiency." }
    ],
    faq: [
      { q: "What is Performance Marketing?", a: "It is an advertising model where the client pays based on results, like clicks, registrations, or sales, rather than impressions." },
      { q: "What channels do you manage?", a: "We run ads on Google, Meta (Facebook/Instagram), LinkedIn, YouTube, TikTok, and programmatics." }
    ]
  },
  "b2b-lead-generation": {
    title: "B2B Lead Generation",
    category: "Marketing",
    icon: "fa-users",
    bg: "linear-gradient(135deg,#6254E7,#8b80f0)",
    desc: "Acquire high-value corporate accounts. We build lead generation pipelines that identify decision-makers and convert cold prospects into sales opportunities.",
    features: [
      { title: "LinkedIn Ads Campaigns", desc: "Laser-focused account targeting based on job titles, company size, and industries." },
      { title: "Lead Magnet Architecture", desc: "Creating high-value downloadables, calculators, or webinars to capture corporate emails." },
      { title: "Marketing Automation Integration", desc: "Setting up CRM integrations, automated email nurturing, and lead scoring systems." },
      { title: "Account-Based Marketing (ABM)", desc: "Personalized advertising campaigns targeting specific high-value companies." }
    ],
    process: [
      { step: "01", name: "ICP Formulation", desc: "Identify your Ideal Customer Profile (ICP) including job levels, company scale, and pains." },
      { step: "02", name: "Funnel Engineering", desc: "Design conversion landing pages and lead capture mechanics." },
      { step: "03", name: "Campaign Activation", desc: "Deploy targeted campaigns across LinkedIn and Google search channels." },
      { step: "04", name: "Nurturing Setup", desc: "Establish drip emails that warm up leads before they are handed over to sales." }
    ],
    faq: [
      { q: "What is ABM?", a: "Account-Based Marketing targets individual high-value companies with customized ad content rather than broad segments." },
      { q: "How do you verify lead quality?", a: "We apply pre-qualification fields on forms and score leads based on profile traits and actions." }
    ]
  },
  "social-media-marketing": {
    title: "Social Media Marketing",
    category: "Marketing",
    icon: "fa-share-alt",
    bg: "linear-gradient(135deg,#6254E7,#8b80f0)",
    desc: "Build community, establish organic reach, and drive sales through creative visual assets, community engagement, and social media trends.",
    features: [
      { title: "Content Strategy & Calendar", desc: "Designing monthly content plans that match brand goals and target audience interests." },
      { title: "Short-Form Video Production", desc: "Creating vertical video content for Reels, TikTok, and Shorts." },
      { title: "Community Moderation", desc: "Active community engagement including comments moderation and direct message responses." },
      { title: "Influencer Partnerships", desc: "Sourcing and managing niche influencers to extend brand reach." }
    ],
    process: [
      { step: "01", name: "Brand Voice Alignment", desc: "Identify brand styling, preferred platforms, guidelines, and content pillars." },
      { step: "02", name: "Asset Creation", desc: "Write ad copy, design graphic layouts, and record and edit short video content." },
      { step: "03", name: "Community Management", desc: "Schedule posts at prime hours and monitor audience feedback." },
      { step: "04", name: "Analytics Tracking", desc: "Assess engagement metrics, follower growth, website click-throughs, and conversions." }
    ],
    faq: [
      { q: "Which platforms should my business be on?", a: "We analyze your audience demographic to recommend platforms. Generally, B2C favors Instagram/TikTok, and B2B favors LinkedIn." },
      { q: "Do you reply to messages on our behalf?", a: "Yes, we establish an approved FAQ list and handle introductory customer service DMs." }
    ]
  },

  // --- DEVELOPMENT SERVICES ---
  "custom-website-development": {
    title: "Custom Website Development",
    category: "Development",
    icon: "fa-code",
    bg: "linear-gradient(135deg,#6254E7,#8b80f0)",
    desc: "Fast, custom websites built to deliver great user experiences, reflect your brand's unique character, and maximize lead conversion rate.",
    features: [
      { title: "Bespoke UI/UX Designs", desc: "Original web design layouts built from scratch, ensuring zero cookie-cutter themes." },
      { title: "Fast Loading Speed", desc: "Optimizing code compilation, image layouts, and scripts to achieve top speed rankings." },
      { title: "Mobile-First Design", desc: "Perfect interface adjustments for all phone, tablet, and widescreen devices." },
      { title: "On-Page SEO Ready", desc: "Clean semantic markup, optimized metadata configurations, and correct header structures." }
    ],
    process: [
      { step: "01", name: "Wireframing & UI", desc: "Design interactive visual mockups of key website sections for client review." },
      { step: "02", name: "Coding & Setup", desc: "Build clean, modular frontend code and connect required backend features." },
      { step: "03", name: "Testing", desc: "Verify website performance across multiple web browsers and screen dimensions." },
      { step: "04", name: "Deployment", desc: "Launch the website on your server domain and configure SSL, backups, and tracking." }
    ],
    faq: [
      { q: "How long does a custom site take to build?", a: "A custom informational website typically takes 4 to 8 weeks from initial plan to final launch." },
      { q: "Do I own the code after launch?", a: "Yes, all source codes, visual assets, and licenses are transferred to you upon project completion." }
    ]
  },
  "wordpress-development": {
    title: "WordPress Development",
    category: "Development",
    icon: "fa-wordpress",
    bg: "linear-gradient(135deg,#6254E7,#8b80f0)",
    desc: "Custom WordPress setups that combine flexible content editing options with fast loading speeds, custom themes, and robust security configurations.",
    features: [
      { title: "Custom Gutenberg Themes", desc: "Bespoke block layouts built without heavy third-party page builders." },
      { title: "Plugin Development", desc: "Coding custom plugins to handle your brand's specific business logics safely." },
      { title: "Speed & Security Tuning", desc: "Enforcing advanced database cleanups, firewalls, and page-cache networks." },
      { title: "API Integrations", desc: "Linking WordPress with external CRM platforms, mail lists, and billing systems." }
    ],
    process: [
      { step: "01", name: "Technical Scope", desc: "Outline required custom blocks, integrations, database structures, and roles." },
      { step: "02", name: "Theme Coding", desc: "Build a lightweight WordPress theme tailored exactly to approved designs." },
      { step: "03", name: "Data Transfer", desc: "Migrate legacy posts, pages, and media files without losing search rankings." },
      { step: "04", name: "Admin Training", desc: "Provide training videos showing how to edit site texts, images, and pages easily." }
    ],
    faq: [
      { q: "Are WordPress sites secure?", a: "Yes, when custom-coded and updated. We implement advanced firewall scripts and avoid bloated, vulnerable plugins." },
      { q: "Can I manage the site content myself?", a: "Absolutely. We build drag-and-drop block systems so you can edit text and images easily." }
    ]
  },
  "shopify-development": {
    title: "Shopify Development",
    category: "Development",
    icon: "fa-shopify",
    bg: "linear-gradient(135deg,#6254E7,#8b80f0)",
    desc: "High-performance Shopify storefronts optimized to drive sales, handle massive traffic, and offer a checkout flow that maximizes sales conversions.",
    features: [
      { title: "Custom Liquid Themes", desc: "Bespoke designs built on Liquid to ensure top page speed scores." },
      { title: "Shopify App Setup", desc: "Configuring logistics, billing, shipping, reviews, and tracking applications." },
      { title: "Faceted Filter Navigation", desc: "Advanced collection architectures allowing shoppers to filter products quickly." },
      { title: "Headless Commerce Options", desc: "For enterprise stores: using Shopify backend APIs with Next.js frontend pages." }
    ],
    process: [
      { step: "01", name: "Catalog Setup", desc: "Review products, variants, collections, shipping rules, and payment gateways." },
      { step: "02", name: "Store Coding", desc: "Develop the custom Liquid layout and configure user features." },
      { step: "03", name: "Checkout Tuning", desc: "Refine shipping displays and checkout options to maximize order conversions." },
      { step: "04", name: "Launch", desc: "Connect the domain, launch tracking tags, and open the online storefront." }
    ],
    faq: [
      { q: "Do you develop custom Shopify apps?", a: "Yes, we can build custom private Shopify apps using Node.js or Ruby to handle unique backend processes." },
      { q: "Can you migrate my store from WooCommerce?", a: "Yes, we handle complete data migration including customers, products, and order history." }
    ]
  },
  "ios-app-development": {
    title: "iOS App Development",
    category: "Development",
    icon: "fa-apple",
    bg: "linear-gradient(135deg,#6254E7,#8b80f0)",
    desc: "Native Apple app designs built with Swift and SwiftUI. We create high-performance apps with animations and modern mobile features.",
    features: [
      { title: "Native Swift Codebase", desc: "Utilizing modern Swift languages to deliver maximum performance and stability." },
      { title: "Apple Human Interface", desc: "App structures designed strictly in line with Apple's premium UI standards." },
      { title: "App Store Submissions", desc: "Handling App Store guidelines, metadata setups, and reviews." },
      { title: "CoreiOS Features Integration", desc: "Connecting Apple Pay, Push Notifications, FaceID, and maps." }
    ],
    process: [
      { step: "01", name: "Mobile UI Design", desc: "Create interactive mobile screens matching Apple layout guidelines." },
      { step: "02", name: "Swift Engineering", desc: "Develop clean code architecture, database features, and secure API links." },
      { step: "03", name: "Beta Testing", desc: "Deploy early versions to TestFlight to gather feedback and fix bugs." },
      { step: "04", name: "App Launch", desc: "Submit the app to the iOS App Store and assist through Google/Apple review phases." }
    ],
    faq: [
      { q: "How long does iOS App Store approval take?", a: "Usually Apple reviews and approves apps within 24 to 72 hours, provided all guidelines are followed." },
      { q: "Will the app support older iPhones?", a: "We typically support the current iOS version and the two previous versions to cover most active users." }
    ]
  },
  "flutter-app-development": {
    title: "Flutter App Development",
    category: "Development",
    icon: "fa-mobile-alt",
    bg: "linear-gradient(135deg,#6254E7,#8b80f0)",
    desc: "Build cross-platform mobile apps for both iOS and Android with a single codebase using Flutter, reducing time-to-market and development costs.",
    features: [
      { title: "Single Codebase iOS & Android", desc: "Write once, run anywhere, reducing your code maintenance costs by half." },
      { title: "Custom UI Components", desc: "Custom layouts and widgets that render identically on both platforms." },
      { title: "Fast Compile & Update", desc: "Faster feature testing and bug fixes using Flutter's hot reload capability." },
      { title: "Native Feature Access", desc: "Accessing camera, GPS, bluetooth, and file storage via platform channels." }
    ],
    process: [
      { step: "01", name: "Architecture Layout", desc: "Configure app state management and structure backend database endpoints." },
      { step: "02", name: "UI Development", desc: "Develop interactive pages and custom widgets." },
      { step: "03", name: "Cross-Platform Tests", desc: "Run automated and manual tests across multiple iOS and Android devices." },
      { step: "04", name: "App Stores Launch", desc: "Submit to both Apple App Store and Google Play Store." }
    ],
    faq: [
      { q: "Do Flutter apps perform like native apps?", a: "Yes, Flutter compiles to native ARM code, delivering 60 FPS performance and matching native app speeds." },
      { q: "Can we add Flutter to an existing native app?", a: "Yes, Flutter can be integrated into existing native iOS or Android apps as a library module." }
    ]
  },
  "web-app-development": {
    title: "Web App Development",
    category: "Development",
    icon: "fa-laptop-code",
    bg: "linear-gradient(135deg,#6254E7,#8b80f0)",
    desc: "Build robust, secure, and scalable web applications using modern Javascript frameworks (React, Next.js, Vue) and backend cloud infrastructures.",
    features: [
      { title: "Single Page Apps (SPA)", desc: "Fast, dynamic interfaces that load data without page refreshes." },
      { title: "Cloud Backend & APIs", desc: "Custom databases and RESTful/GraphQL APIs running on AWS or Google Cloud." },
      { title: "Role-Based Access Control", desc: "Secure signup, login, and user permission matrices." },
      { title: "Real-Time Data Features", desc: "Integrating real-time messaging, notifications, or dashboard analytics." }
    ],
    process: [
      { step: "01", name: "API & Data Design", desc: "Map user roles, database models, database tables, and API endpoint protocols." },
      { step: "02", name: "Frontend & Backend Development", desc: "Build the user interface and connect it to secure backend APIs." },
      { step: "03", name: "Security Audit", desc: "Validate input data, set up CORS rules, and secure database connections." },
      { step: "04", name: "CI/CD Cloud Deployment", desc: "Establish automated testing and deployment pipelines to cloud servers." }
    ],
    faq: [
      { q: "What stack do you use for web apps?", a: "We typically use the MERN stack (MongoDB, Express, React, Node.js) or Next.js with PostgreSQL/Prisma." },
      { q: "Can the web app scale to millions of users?", a: "Yes, we design cloud-hosted backend systems that scale automatically to handle traffic spikes." }
    ]
  },

  // --- TRAVEL SERVICES ---
  "flight-booking": {
    title: "Flight Booking Services",
    category: "Travel",
    icon: "fa-plane",
    bg: "linear-gradient(135deg,#0052D4,#4364F7,#6FB1FC)",
    desc: "Get the best fares on domestic and international flights. We source private tariffs, group deals, and flexible flight itineraries tailored to your schedule.",
    isTravel: true,
    features: [
      { title: "Domestic & International Route Coverage", desc: "Ticketing access across global alliance airlines (Star Alliance, SkyTeam, OneWorld)." },
      { title: "Corporate Flight Bookings", desc: "Negotiated fares, priority seat assignments, and simplified expense invoicing." },
      { title: "Flexible Flight Terms", desc: "Assistance with date modifications, route changes, and refund claims." },
      { title: "24/7 Flight Monitoring", desc: "Real-time delay alerts, gate updates, and automatic rebooking support." }
    ],
    process: [
      { step: "01", name: "Route Inquiry", desc: "Provide your travel dates, preferred class, destination, and budget details." },
      { step: "02", name: "Fare Sourcing", desc: "We compare airline systems and private portals to find the best rates." },
      { step: "03", name: "Booking Confirmation", desc: "Review and approve the flight itinerary, select seats, and complete payment." },
      { step: "04", name: "Ticket Delivery", desc: "Receive your e-tickets, baggage guides, and checkout information." }
    ],
    faq: [
      { q: "Can I make group bookings?", a: "Yes, we offer special rates and flexible payment schedules for groups of 10 or more passengers." },
      { q: "How do I make changes to my ticket?", a: "Simply contact our support desk and our agents will handle date or route changes with the airline." }
    ]
  },
  "hotel-booking": {
    title: "Hotel Booking Services",
    category: "Travel",
    icon: "fa-hotel",
    bg: "linear-gradient(135deg,#0052D4,#4364F7,#6FB1FC)",
    desc: "Handpicked hotels from budget-friendly stays to boutique properties and 5-star luxury resorts, booked with exclusive perks and verified room rates.",
    isTravel: true,
    features: [
      { title: "Global Property Options", desc: "Booking links with over 500,000 partner properties worldwide." },
      { title: "Exclusive Perks", desc: "Access to free breakfast upgrades, early check-in, late check-out, and resort credits." },
      { title: "Group & Corporate Rates", desc: "Discounted room blocks for conferences, destination weddings, and corporate groups." },
      { title: "Verified Reviews Only", desc: "We recommend properties that pass our rigorous safety and service quality checks." }
    ],
    process: [
      { step: "01", name: "Requirement Sharing", desc: "Specify destination, date, guest count, and your preferred hotel type (e.g. luxury or business)." },
      { step: "02", name: "Option Presentation", desc: "We share a curated list of properties with room rates and pictures." },
      { step: "03", name: "Secure Booking", desc: "Confirm the hotel selection and secure your room." },
      { step: "04", name: "Stay Support", desc: "We contact the hotel to verify your check-in time and ensure special requests are met." }
    ],
    faq: [
      { q: "Is cancellation free?", a: "Many of our rates offer free cancellation up to 24-48 hours before check-in. This will be clearly stated." },
      { q: "Do you match online booking prices?", a: "Yes, we offer a best price guarantee and often secure additional perks not available online." }
    ]
  },
  "holiday-packages": {
    title: "Holiday Packages",
    category: "Travel",
    icon: "fa-umbrella-beach",
    bg: "linear-gradient(135deg,#0052D4,#4364F7,#6FB1FC)",
    desc: "All-inclusive, custom-designed holiday packages. We bundle flights, hotels, transfers, and activities into a seamless and unforgettable travel itinerary.",
    isTravel: true,
    features: [
      { title: "Customized Itineraries", desc: "Vacations planned to match your pace, style, and interests." },
      { title: "Family & Honeymoon Deals", desc: "Themed packages featuring family-friendly hotels or romantic couples' activities." },
      { title: "Local Guides & Entry Tickets", desc: "Skip-the-line museum tickets, local transport passes, and certified guides." },
      { title: "Complete Travel Support", desc: "A dedicated travel concierge available 24/7 during your entire trip." }
    ],
    process: [
      { step: "01", name: "Initial Consultation", desc: "Share your travel ideas, interests, group size, budget, and destination goals." },
      { step: "02", name: "Itinerary Drafting", desc: "We create a daily travel schedule covering flights, hotels, and tours." },
      { step: "03", name: "Fine Tuning", desc: "Modify hotels or tours until the itinerary matches your expectations." },
      { step: "04", name: "Documentation", desc: "Receive a comprehensive travel pack containing all vouchers, maps, and guides." }
    ],
    faq: [
      { q: "Can I customize an itinerary?", a: "Yes, all of our packages are fully customizable. You can adjust durations, hotels, and tours." },
      { q: "What happens if a tour gets cancelled?", a: "We will arrange alternative activities or issue a refund for the cancelled tour." }
    ]
  },
  "visa-assistance": {
    title: "Visa Assistance Services",
    category: "Travel",
    icon: "fa-passport",
    bg: "linear-gradient(135deg,#0052D4,#4364F7,#6FB1FC)",
    desc: "Hassle-free visa application support. We help you prepare document checklists, complete forms, schedule interviews, and track status.",
    isTravel: true,
    features: [
      { title: "Tourist & Business Visas", desc: "Processing support for Schengen, US, UK, Canada, UAE, and Asian visas." },
      { title: "Document Review", desc: "Thorough verification of invitations, bank records, travel plans, and photos." },
      { title: "Interview Coaching", desc: "Mock questions and preparation tips for consulate appointments." },
      { title: "Status Tracking", desc: "Real-time updates on passport status and collection times." }
    ],
    process: [
      { step: "01", name: "Profile Evaluation", desc: "Review your passport details and travel history to assess visa eligibility." },
      { step: "02", name: "Document List", desc: "We share a detailed document checklist customized for your destination." },
      { step: "03", name: "Form Submission", desc: "We draft and submit the application forms and schedule appointments." },
      { step: "04", name: "Visa Collection", desc: "Track passport status and assist with collection once approved." }
    ],
    faq: [
      { q: "Are visa approvals guaranteed?", a: "No, visa approvals are decided solely by the respective consulates. We ensure your application is accurate to maximize your chances." },
      { q: "How early should I apply?", a: "We recommend starting the process 2 to 3 months before your planned travel date." }
    ]
  },
  "car-rentals": {
    title: "Car Rentals & Airport Transfers",
    category: "Travel",
    icon: "fa-car",
    bg: "linear-gradient(135deg,#0052D4,#4364F7,#6FB1FC)",
    desc: "Reliable airport transfers and car rental options across 100+ destinations worldwide, featuring clean vehicles and professional chauffeurs.",
    isTravel: true,
    features: [
      { title: "Airport Pickup & Drop", desc: "Meet-and-greet service at arrival gates with flight delay tracking." },
      { title: "Chauffeur Services", desc: "Professional, multilingual drivers booked for single trips or full days." },
      { title: "Clean Fleet Selection", desc: "Choose from budget sedans, SUVs, minivans, and luxury vehicles." },
      { title: "Self-Drive Rental Setup", desc: "Car rentals booked with top agencies, including complete insurance options." }
    ],
    process: [
      { step: "01", name: "Booking Inquiry", desc: "Provide your arrival time, flight number, passenger count, and destination." },
      { step: "02", name: "Vehicle Matching", desc: "We confirm pricing and assign a vehicle matching your baggage needs." },
      { step: "03", name: "Driver Details", desc: "Driver contact details and meeting instructions are sent 24 hours before pickup." },
      { step: "04", name: "Ride Tracking", desc: "Flight status is monitored and driver meets you at the arrivals hall." }
    ],
    faq: [
      { q: "What happens if my flight is delayed?", a: "Our drivers track your flight status and will adjust pickup times automatically at no extra charge." },
      { q: "Is insurance included in rentals?", a: "Yes, all self-drive rentals include basic collision damage waiver (CDW) options. Full insurance is available." }
    ]
  },
  "corporate-travel": {
    title: "Corporate Travel Management",
    category: "Travel",
    icon: "fa-briefcase",
    bg: "linear-gradient(135deg,#0052D4,#4364F7,#6FB1FC)",
    desc: "Tailored corporate travel management. We coordinate company travel plans, negotiate corporate discounts, track expenses, and provide priority support.",
    isTravel: true,
    features: [
      { title: "Dedicated Account Manager", desc: "A single point of contact to handle all corporate flight, hotel, and visa arrangements." },
      { title: "Corporate Discounts", desc: "Access to private business fares and hotel corporate rates." },
      { title: "Flexible Invoicing", desc: "Monthly credit lines, expense reporting, and itemized billing statements." },
      { title: "Duty of Care Support", desc: "Real-time tracking of employee locations and emergency support." }
    ],
    process: [
      { step: "01", name: "Travel Policy Setup", desc: "Formulate your company's travel guidelines and budget rules." },
      { step: "02", name: "Account Integration", desc: "Set up corporate profiles, credit structures, and booking channels." },
      { step: "03", name: "Booking Assistance", desc: "Submit inquiries via email or portal and receive options within 1 hour." },
      { step: "04", name: "Expense Auditing", desc: "Receive consolidated monthly invoices and travel analytics summaries." }
    ],
    faq: [
      { q: "Do you charge setup fees?", a: "No, account setup is free. We charge transactional fees or offer volume-based annual service plans." },
      { q: "How fast do you handle bookings?", a: "Corporate inquiries receive flight and hotel options within 1 hour during business hours." }
    ]
  }
};
