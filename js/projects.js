/* ==========================================================================
   YOUR CONTENT FILE
   ------------------------------------------------------------------------
   Almost everything you will want to change lives in this one file:
   contact details, project cards, and every case-study page.
   ========================================================================== */


/* ----------------------------------------------------------------------------
   SITE DETAILS
---------------------------------------------------------------------------- */
window.SITE = {
  name:      "Pramod Premarathna",
  email:     "ppm.pemarathna@gmail.com",
  phone:     "+94 77 876 3040",
  linkedin:  "https://www.linkedin.com/in/pramod-premarathna/",
  cv:        "cv/Pramod-Premarathna-CV.pdf"
};


/* ----------------------------------------------------------------------------
   FILTER CATEGORIES
---------------------------------------------------------------------------- */
window.CATEGORIES = [
  { id: "all",       label: "All" },
  { id: "video",     label: "Video & Motion" },
  { id: "brand",     label: "Brand & Digital" },
  { id: "learning",  label: "Learning & Development" },
  { id: "graphic",   label: "Graphic Design" },
  { id: "elearning", label: "E-Learning" },
  { id: "other",     label: "Press & Other" }
];


/* ----------------------------------------------------------------------------
   PROJECTS
---------------------------------------------------------------------------- */
window.PROJECTS = [

  /* ======================================================================
     PROJECT 01 — COMMERCIAL VIDEO & MOTION SHOWREEL (MASTER SHOWREEL)
     ====================================================================== */
  {
    id:        "commercial-showreel",
    title:     "Commercial Video & Motion Showreel",
    subtitle:  "TVCs, Brand Films, Commercial Production & Motion Graphics",
    categories:["video", "brand"],
    tracks:    ["video", "design"],
    year:      "2021 – 2026",
    client:    "Pramod Premarathna (Master Showreel)",
    summary:   "Commercial video productions, TVCs, brand films, and motion graphics showreel covering pre-production, filming, post-production, colour grading and sound design.",
    role:      "Producer, Video Editor & Motion Designer",
    tools:     ["Premiere Pro", "After Effects", "DaVinci Resolve", "Audition"],
    cover:     { src: "images/projects/commercial-showreel/cover.jpg", alt: "Commercial Video and Motion Showreel" },
    preview:   "",
    tag:       "Featured Reel",
    layout:    "feature",
    showOnHome:true,

    band: [
      { src: "images/projects/commercial-showreel/01.jpg", alt: "CDB Gold Loan TV Commercial", caption: "CDB Gold Loan TVC" },
      { src: "images/projects/commercial-showreel/02.jpg", alt: "Falcon TVC Final Commercial", caption: "Falcon TVC" },
      { src: "images/projects/commercial-showreel/03.jpg", alt: "Phoenix Corporate Film", caption: "Phoenix Brand Film" },
      { src: "images/projects/commercial-showreel/04.jpg", alt: "Atlas Commercial Campaign", caption: "Atlas TV Campaign" },
      { src: "images/projects/commercial-showreel/05.jpg", alt: "Hyundai Brand Campaign", caption: "Hyundai Commercial" },
      { src: "images/projects/commercial-showreel/06.jpg", alt: "Singer SELFY Motion", caption: "Motion Graphics" }
    ],

    caseStudy: {
      overview:  { text: [
        "A comprehensive commercial video and motion showreel showcasing high-production-value TV commercials, corporate films, product launches, and digital motion graphics produced across agency, corporate, and freelance productions.",
        "This master showreel demonstrates end-to-end capabilities across creative direction, cinematography supervision, pacing, dynamic editing, cinematic colour grading, and immersive sound design."
      ]},
      challenge: { text: [ "Creating visually compelling commercial narratives that hold viewer attention in fast-moving digital feeds and television broadcast slots while communicating distinct brand identities and product propositions." ]},
      objective: { text: [ "Deliver emotionally resonant, rhythmically timed, and visually striking commercial films that elevate brand stature and drive viewer engagement." ]},
      approach:  { text: [ "Combining precision pacing with deliberate colour grading, fluid motion transitions, kinetic typography, and custom audio mixing tailored to television and digital multi-platform distribution." ]},
      role:      { text: [ "Directed, edited, graded, and animated commercial deliverables across TV, digital, and social channels in collaboration with brand marketing teams and creative agencies." ]},
      process:   { text: [ "Brief breakdown → visual treatment & storyboard → assembly cut → multi-layer sound design → DaVinci Resolve color grading → motion graphics integration." ],
                   media: [
                     { type: "image", src: "images/projects/commercial-showreel/01.jpg", alt: "CDB Commercial Grade", caption: "CDB Commercial Colour Grade", size: "half" },
                     { type: "image", src: "images/projects/commercial-showreel/02.jpg", alt: "Falcon TVC Production", caption: "Falcon TVC Production", size: "half" }
                   ]},
      production:{ text: [ "Master Commercial Portfolio Showreel featuring high-profile brand campaigns for Singer, CDB, Hemas, Falcon, Atlas, Hyundai, and Phoenix." ],
                   media: [
                     { type: "gdrive", id: "1lHjc2kxiZpcXszSgOlQ62nUEsfBhUlJW", caption: "Master Commercial Video Showreel — PPM Premarathna", size: "full" },
                     { type: "image", src: "images/projects/commercial-showreel/03.jpg", alt: "Phoenix Brand Still", caption: "Phoenix Brand Film", size: "half" },
                     { type: "image", src: "images/projects/commercial-showreel/04.jpg", alt: "Atlas Commercial Still", caption: "Atlas Commercial", size: "half" },
                     { type: "gdrive", id: "1d6WzMHnkIivbLCsO51U8H7qSTy6hnwjg", caption: "CDB Gold Loan TVC — 30 Sec Commercial", size: "half" },
                     { type: "gdrive", id: "1oqjU3AR5ZDOVbsnpfBx8zuLiXfIn9khr", caption: "Falcon TVC Final Commercial Video", size: "half" }
                   ]},
      final:     { text: [ "Broadcast and digital delivery across television networks, YouTube, Meta, and digital billboard formats." ],
                   media: [
                     { type: "image", src: "images/projects/commercial-showreel/05.jpg", alt: "Hyundai Campaign Still", caption: "Hyundai Commercial Campaign", size: "half" },
                     { type: "image", src: "images/projects/commercial-showreel/06.jpg", alt: "Motion Graphics Animation Still", caption: "Brand Motion Animation", size: "half" }
                   ]},
      outcome:   { hasResults: true, text: [ "Broadcast across national television channels and distributed across digital campaigns generating millions of cumulative views." ]}
    }
  },

  /* ======================================================================
     PROJECT 02 — SELFY LMS
     ====================================================================== */
  {
    id:        "selfy-lms",
    title:     "SELFY LMS",
    subtitle:  "Singer E-Learning For You",
    categories:["brand", "elearning", "learning"],
    tracks:    ["design", "learning"],
    year:      "2024 – Present",
    client:    "Singer Sri Lanka PLC",
    summary:   "Brand identity, launch visuals and digital learning assets for Singer's e-learning platform.",
    role:      "Executive – Instructional Design",
    tools:     ["Premiere Pro", "After Effects", "Photoshop", "Illustrator", "Moodle LMS"],
    cover:     { src: "images/projects/selfy-lms/cover.jpg", alt: "SELFY LMS Brand Identity and Motion" },
    preview:   "",
    tag:       "Case study",
    layout:    "large",
    showOnHome:true,

    band: [
      { src: "images/projects/selfy-lms/01.jpg", alt: "SELFY Motion Graphics", caption: "Motion Graphics" },
      { src: "images/projects/selfy-lms/02.jpg", alt: "SELFY LMS Live Interface", caption: "LMS Interface" },
      { src: "images/projects/selfy-lms/03.jpg", alt: "Singer Digital Literacy", caption: "Digital Literacy" },
      { src: "images/projects/selfy-lms/04.jpg", alt: "Tamil Singer Scale Campaign", caption: "Campaign Visuals" },
      { src: "images/projects/selfy-lms/05.jpg", alt: "Launch Animation", caption: "Launch Animation" },
      { src: "images/projects/selfy-lms/06.jpg", alt: "Platform Rollout", caption: "Platform Rollout" }
    ],

    caseStudy: {
      overview:  { text: [
        "SELFY (Singer E-Learning For You) is the official enterprise learning management platform for Singer Sri Lanka PLC. The project covered complete brand identity, launch communications, employee engagement visuals, and interactive digital learning assets distributed across retail and dealer networks nationwide.",
        "Developed in direct collaboration with Singer Marketing and HR to foster a modern, voluntary digital learning culture."
      ]},
      challenge: { text: [ "Singer's retail staff and nationwide dealer network needed a cohesive, inviting digital learning hub to replace fragmented training methods and deliver consistent product knowledge." ]},
      objective: { text: [ "Build a recognisable, inviting employer-brand sub-identity that drives course engagement, elevates digital learning culture, and empowers sales teams across Sri Lanka." ]},
      approach:  { text: [ "Designed a friendly, vibrant identity around 'SELFY' with clean modern typography, upbeat motion graphics, and modular visual components suited for mobile and desktop learners." ]},
      role:      { text: [ "Executive – Instructional Design: led brand identity design, logo creation, launch event visuals, motion graphics, and digital course authoring in collaboration with Singer Marketing and HR." ]},
      process:   { text: [ "Concept ideation → typography & palette explorations → logo guidelines → launch motion teaser → LMS interface UI theming." ],
                   media: [
                     { type: "image", src: "images/projects/selfy-lms/01.jpg", alt: "Logo and Motion Exploration", caption: "Motion Exploration", size: "half" },
                     { type: "image", src: "images/projects/selfy-lms/02.jpg", alt: "Platform Interface Development", caption: "Platform Interface", size: "half" }
                   ]},
      production:{ text: [ "Brand identity, logo, brand guidelines, LMS interface visuals, launch event visuals, animations and promotional materials." ],
                   media: [
                     { type: "gdrive", id: "1AwXF_3i_4IQQ_TqB7ySzKgYbSsxscuK6", caption: "SELFY Motion Graphics & Animation", size: "full" },
                     { type: "gdrive", id: "1rneQ7uCs4ubMj1kMoE5dLjRXVkUkPO0h", caption: "LMS Live Broadcast & Interface — Singer", size: "half" },
                     { type: "gdrive", id: "1ABcaxX4opw2Uv4HoT2cjieOeVhEHl18M", caption: "MD Speech — Singer Digital Literacy Launch", size: "half" }
                   ]},
      final:     { text: [ "Full brand identity suite delivered: logo system, brand guidelines, LMS interface theming, launch animations, and introductory e-learning modules." ],
                   media: [
                     { type: "image", src: "images/projects/selfy-lms/03.jpg", alt: "Singer Digital Literacy Interface", caption: "Digital Literacy Portal", size: "half" },
                     { type: "image", src: "images/projects/selfy-lms/04.jpg", alt: "Tamil Singer Scale Campaign", caption: "Multilingual Rollout Asset", size: "half" }
                   ]},
      outcome:   { hasResults: true,
                   text: [ "Delivered: brand identity, logo, brand guidelines, LMS visuals, launch event visuals, animations and promotional materials.", "Successfully rolled out across Singer Sri Lanka PLC's nationwide retail and dealer network." ]}
    }
  },

  /* ======================================================================
     PROJECT 03 — PRODUCT & SALES VIDEO SERIES
     ====================================================================== */
  {
    id:        "product-sales-videos",
    title:     "Product & Sales Video Series",
    subtitle:  "Product and sales training videos",
    categories:["video", "learning"],
    tracks:    ["video", "learning"],
    year:      "2024 – Present",
    client:    "Singer Sri Lanka PLC",
    summary:   "A series of product and sales training videos, from script and storyboard through live filming, motion graphics and edit.",
    role:      "Video Producer & Editor",
    tools:     ["Premiere Pro", "After Effects", "DaVinci Resolve", "Audition"],
    cover:     { src: "images/projects/product-sales-videos/cover.jpg", alt: "Singer Appliance Product Video Series" },
    preview:   "",
    tag:       "Video series",
    layout:    "small",
    showOnHome:true,

    caseStudy: {
      overview:  { text: [
        "A high-impact series of commercial product showcases and sales training videos. Covered end-to-end production: scriptwriting, storyboarding, live filming, colour grading, motion graphics, and audio cleanup.",
        "Created to bridge the gap between technical consumer durable specifications and clear customer-facing sales communication."
      ]},
      challenge: { text: [ "Translating intricate consumer appliance features and technical specifications into engaging, easy-to-digest visual stories that retail teams and customers instantly understand." ]},
      objective: { text: [ "Accelerate product knowledge retention, boost retail sales confidence, and deliver high-production-value video assets for digital campaigns and internal training." ]},
      approach:  { text: [ "Adopted dynamic pacing, kinetic typography, clean split-screen demonstrations, and custom sound design to highlight key product differentiators within concise runtimes." ]},
      role:      { text: [ "Produced, scripted, edited, motion-designed, and audio-mastered the video series from concept through final export." ]},
      process:   { text: [ "Script → storyboard → production → edit → motion graphics." ],
                   media: [
                     { type: "image", src: "images/projects/product-sales-videos/01.jpg", alt: "Gas Cooker Features", caption: "Gas Cooker Features", size: "third" },
                     { type: "image", src: "images/projects/product-sales-videos/02.jpg", alt: "Singer Irons Demonstration", caption: "Appliance Demonstration", size: "third" },
                     { type: "image", src: "images/projects/product-sales-videos/03.jpg", alt: "Singer Electric Kettle", caption: "Product Overview", size: "third" }
                   ]},
      production:{ text: [ "Multi-camera studio shoots, motion graphics overlays, and product sales training videos." ],
                   media: [
                     { type: "gdrive", id: "1EGuCxcsKdNNw24s8mqg4QIeoF5bVK6py", caption: "Sales Process — Gas Cooker (Singer Training Video)", size: "half" },
                     { type: "gdrive", id: "1lthcK034fps_nBIEbe779G9LkMDUBg7n", caption: "Sales Process — Singer Irons Product Video", size: "half" },
                     { type: "gdrive", id: "1dnCqUvJFbIzkJpk7HBMFiQBRl0MMN2CN", caption: "Sales Process — Singer Electric Kettle Video", size: "half" },
                     { type: "gdrive", id: "1956lqqXs8I6rnQ7r2MFZHthGxck9OD2U", caption: "Singer AC — Electricity Bill Concern Commercial", size: "half" }
                   ]},
      final:     { text: [ "Delivered multi-format video assets optimised for high-definition displays, digital social channels, and in-store training screens." ],
                   media: [
                     { type: "image", src: "images/projects/product-sales-videos/04.jpg", alt: "Singer AC Campaign", caption: "Singer AC Campaign", size: "half" },
                     { type: "image", src: "images/projects/product-sales-videos/05.jpg", alt: "Inverter Technology Demonstration", caption: "Inverter Technology Demonstration", size: "half" }
                   ]},
      outcome:   { hasResults: true, text: [ "Broadcast across internal LMS and digital channels, directly supporting nationwide product rollouts and retail sales performance." ]}
    }
  },

  /* ======================================================================
     PROJECT 04 — LIMA ELECTRIC BIKE
     ====================================================================== */
  {
    id:        "lima-electric-bike",
    title:     "LIMA Electric Bike",
    subtitle:  "Brand video and vintage commercial content",
    categories:["video", "brand"],
    tracks:    ["video"],
    year:      "2024",
    client:    "LIMA",
    summary:   "Video concept, production, edit and social media content for the LIMA electric bike.",
    role:      "Creative Director & Video Editor",
    tools:     ["Premiere Pro", "After Effects", "DaVinci Resolve", "Photoshop"],
    cover:     { src: "images/projects/lima-electric-bike/cover.jpg", alt: "LIMA electric bike campaign still" },
    preview:   "",
    tag:       "Commercial",
    layout:    "half",
    showOnHome:true,

    caseStudy: {
      overview:  { text: [
        "Brand video and social campaign for the LIMA electric bike, featuring a signature vintage visual transformation that fuses nostalgic cinema aesthetics with modern eco-friendly mobility.",
        "Produced for commercial launch and social media digital channels to introduce the brand to urban commuters."
      ]},
      challenge: { text: [ "Standing out in a competitive urban mobility market by establishing an emotive, lifestyle-oriented connection rather than merely listing electric vehicle specs." ]},
      objective: { text: [ "Position LIMA as an iconic, stylish everyday ride through cinematic visual storytelling and evocative colour grading." ]},
      approach:  { text: [ "Crafted a vintage cinematic grade, pairing film-look textures with energetic editing and urban rhythm to create an atmospheric, timeless lifestyle commercial." ]},
      role:      { text: [ "Concept development, creative direction, video editing, vintage film colour grading, sound design, and social media cut-downs." ]},
      process:   { text: [ "Creative treatment → storyboard → shoot supervision → vintage film look colour grading → rhythm-based editing & sound design." ],
                   media: [
                     { type: "image", src: "images/projects/lima-electric-bike/01.jpg", alt: "Vintage Colour Grade", caption: "Vintage Film Look Grade", size: "half" },
                     { type: "image", src: "images/projects/lima-electric-bike/02.jpg", alt: "Urban Lifestyle Shot", caption: "Urban Lifestyle Scene", size: "half" }
                   ]},
      production:{ text: [ "LIMA electric bike video production and vintage color grade." ],
                   media: [
                     { type: "gdrive", id: "1XJhkzH7-1uLjaMOiYoCMltgX4zjAg0Tf", caption: "LIMA Electric Bike — Vintage Transformation Commercial", size: "full" }
                   ]},
      final:     { text: [ "Delivered master commercial film, teaser reels, and high-engagement social media aspect ratio cut-downs (9:16, 1:1, 16:9)." ],
                   media: [
                     { type: "image", src: "images/projects/lima-electric-bike/03.jpg", alt: "Final Commercial Grade", caption: "Final Commercial Grade", size: "full" }
                   ]},
      outcome:   { hasResults: true, text: [ "Delivered: brand video and social media content with high viewer retention and positive community response." ]}
    }
  },

  /* ======================================================================
     PROJECT 05 — LEARNING & DEVELOPMENT
     ====================================================================== */
  {
    id:        "learning-development",
    title:     "Learning & Development",
    subtitle:  "E-learning modules, instructional animation and training video",
    categories:["learning", "elearning"],
    tracks:    ["learning", "video"],
    year:      "2024 – Present",
    client:    "Singer Sri Lanka PLC",
    summary:   "E-learning modules, instructional animations, training videos and LMS content for employee learning.",
    role:      "Executive – Instructional Design",
    tools:     ["Adobe Captivate", "Moodle LMS", "Premiere Pro", "After Effects", "Photoshop"],
    cover:     { src: "images/projects/learning-development/cover.jpg", alt: "Singer Digital Literacy Launch Screen" },
    preview:   "",
    tag:       "E-Learning",
    layout:    "half",
    showOnHome:true,

    caseStudy: {
      overview:  { text: [
        "A comprehensive body of learning and enablement programmes built for Singer Sri Lanka PLC: interactive e-learning modules, instructional animations, training videos, LMS content and employee learning materials.",
        "Visual design here has one job: help people understand, retain, and apply skills in real-world retail environments."
      ]},
      challenge: { text: [ "Training a geographically dispersed workforce with diverse educational backgrounds, requiring intuitive, self-paced, and engaging learning materials." ]},
      objective: { text: [ "Standardise product and compliance knowledge across branches island-wide, reducing onboarding time and elevating customer service excellence." ]},
      approach:  { text: [ "Applied instructional design principles (ADDIE/micro-learning), modular storyboarding, scenario-based assessments, and interactive visual aids to maximise knowledge retention." ]},
      role:      { text: [ "Instructional designer and multimedia developer: managed needs analysis, curriculum structuring, authoring in Adobe Captivate/Moodle, and creating all supporting video and animation assets." ]},
      process:   { text: [ "Needs analysis → storyboard → interactive prototyping → media asset build → LMS review." ],
                   media: [
                     { type: "image", src: "images/projects/learning-development/01.jpg", alt: "Digital Learning Screen", caption: "Instructional Video Production", size: "half" },
                     { type: "image", src: "images/projects/learning-development/02.jpg", alt: "LMS Live Broadcast", caption: "LMS Live Broadcast Interface", size: "half" }
                   ]},
      production:{ text: [ "Interactive SCORM/xAPI modules, animated explainer videos, downloadable job aids, and executive presentations." ],
                   media: [
                     { type: "gdrive", id: "1ABcaxX4opw2Uv4HoT2cjieOeVhEHl18M", caption: "Singer Digital Literacy Launch — Keynote & Executive Module", size: "full" },
                     { type: "image", src: "images/projects/learning-development/03.jpg", alt: "Singer Spark Interactive Project", caption: "Interactive Coursework", size: "half" },
                     { type: "image", src: "images/projects/learning-development/04.jpg", alt: "Knowledge Assessment Architecture", caption: "Assessment Architecture", size: "half" }
                   ]},
      final:     { text: [ "Deployed multi-tier curriculum covering product mastery, retail compliance, and customer service operations." ] },
      outcome:   { hasResults: true, text: [ "Successfully deployed on Singer's enterprise LMS, achieving consistent completion rates and positive employee feedback across nationwide branches." ]}
    }
  },

  /* ======================================================================
     PROJECT 06 — GRAPHIC DESIGN & BRAND COLLATERAL
     ====================================================================== */
  {
    id:        "graphic-design",
    title:     "Graphic Design & Brand Collateral",
    subtitle:  "Social, event, campaign and corporate design",
    categories:["graphic", "brand"],
    tracks:    ["design"],
    year:      "2021 – 2025",
    client:    "Corporate & Commercial Clients",
    summary:   "Social media designs, event visuals, posters, digital campaigns, presentation design and brand assets.",
    role:      "Art Director & Graphic Designer",
    tools:     ["Photoshop", "Illustrator", "InDesign", "Canva", "AI Visualisation"],
    cover:     { src: "images/projects/graphic-design/cover.jpg", alt: "Curated Graphic Design Retrospective" },
    preview:   "",
    tag:       "Gallery",
    layout:    "half",
    offset:    true,
    showOnHome:true,

    caseStudy: {
      overview:  { text: [ "A curated retrospective of graphic design, art direction, and brand communication work produced across agency, corporate, and freelance roles: event branding, commercial posters, social campaigns, digital ads, and publication collateral." ]},
      challenge: { text: [ "Delivering distinctive, brand-aligned visual solutions under tight deadlines across vastly different industries—from consumer retail and automotive to cultural events and religious festivals." ]},
      objective: { text: [ "Create striking visual identities and marketing collateral that capture attention, communicate value propositions instantly, and drive real audience response." ]},
      approach:  { text: [ "Unified typography hierarchy, bold color theory, balanced composition, and strategic visual messaging tailored to audience psychology across both digital and physical touchpoints." ]},
      role:      { text: [ "Concept generation, graphic design, photo retouching, vector illustration, print prepress production, and social asset formatting." ]},
      process:   { text: [ "Client brief analysis → moodboard & sketch → digital composition in Illustrator & Photoshop → typography styling → final print/digital export." ],
                   media: [
                     { type: "image", src: "images/projects/graphic-design/01.jpg", alt: "Commercial Poster Design", caption: "Commercial Poster Design", size: "half" },
                     { type: "image", src: "images/projects/graphic-design/02.jpg", alt: "Social Campaign", caption: "Social Media Campaign", size: "half" }
                   ]},
      production:{ text: [ "Posters, social posts and event visuals." ],
                   media: [
                     { type: "image", src: "images/projects/graphic-design/03.jpg", alt: "Event Visual", caption: "Event Identity Visual", size: "third" },
                     { type: "image", src: "images/projects/graphic-design/04.jpg", alt: "Brand Design", caption: "Brand Layout Design", size: "third" },
                     { type: "image", src: "images/projects/graphic-design/05.jpg", alt: "Creative Visual", caption: "Campaign Poster", size: "third" },
                     { type: "image", src: "images/projects/graphic-design/06.jpg", alt: "Digital Graphic", caption: "Digital Art & Imaging", size: "third" },
                     { type: "image", src: "images/projects/graphic-design/07.jpg", alt: "Commercial Creative", caption: "Commercial Visual", size: "third" },
                     { type: "image", src: "images/projects/graphic-design/08.jpg", alt: "Corporate Poster", caption: "Corporate Graphic", size: "third" }
                   ]},
      final:     { text: [ "Comprehensive graphic design suite across print and digital media." ] },
      outcome:   { hasResults: true, text: [ "Delivered: social media designs, event visuals, posters, digital campaign assets and presentation design with high client satisfaction." ]}
    }
  },

  /* ======================================================================
     PROJECT 07 — NEWSPAPER ARTICLES & PRESS FEATURES
     ====================================================================== */
  {
    id:        "newspaper-articles",
    title:     "Newspaper Articles & Press",
    subtitle:  "Published editorial features and newspaper spreads",
    categories:["other", "brand"],
    tracks:    ["design"],
    year:      "2023 – 2026",
    client:    "Mawbima & National Press",
    summary:   "Collection of published editorial features, newspaper articles, and journalistic layouts.",
    role:      "Writer & Visual Contributor",
    tools:     ["Editorial Design", "Journalism", "Print Production"],
    cover:     { src: "images/projects/newspaper-articles/cover.jpg", alt: "Mawbima Newspaper Feature Article" },
    preview:   "",
    tag:       "Press",
    layout:    "large",
    showOnHome:true,

    caseStudy: {
      overview:  { text: [ "A curated collection of published national newspaper articles and editorial spreads featured in Mawbima and mainstream media.", "Covering industry developments, technology, cultural commentary, and educational perspectives." ]},
      challenge: { text: [ "Creating impactful print articles that convey meaningful narratives while fitting demanding national newspaper print deadlines and formatting standards." ]},
      objective: { text: [ "Deliver engaging, informative press features for a nationwide readership." ]},
      approach:  { text: [ "Combining thoughtful storytelling with strong headline structure and compelling editorial layout." ]},
      role:      { text: [ "Researched, authored, and coordinated editorial layout and imagery for publication." ]},
      process:   { text: [ "Research → Drafting → Editorial review → Print layout → Publication." ],
                   media: [
                     { type: "image", src: "images/projects/newspaper-articles/cover.jpg", alt: "Mawbima Newspaper Article 01", caption: "Mawbima Feature Article", size: "half" },
                     { type: "image", src: "images/projects/newspaper-articles/01.jpg", alt: "Mawbima Article Spread", caption: "Editorial Spread", size: "half" }
                   ]},
      production:{ text: [ "Published national newspaper articles and spreads." ],
                   media: [
                     { type: "image", src: "images/projects/newspaper-articles/02.jpg", alt: "Newspaper Publication Page", caption: "Published Article", size: "third" },
                     { type: "image", src: "images/projects/newspaper-articles/03.jpg", alt: "Press Feature Section", caption: "Press Feature", size: "third" },
                     { type: "image", src: "images/projects/newspaper-articles/04.jpg", alt: "Newspaper Column", caption: "National Press Feature", size: "third" }
                   ]},
      final:     { text: [ "Archive of published editorial features." ] },
      outcome:   { hasResults: true, text: [ "Published across nationwide print editions with wide public readership." ]}
    }
  }
];
