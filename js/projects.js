/* ==========================================================================
   YOUR CONTENT FILE
   ------------------------------------------------------------------------
   Almost everything you will want to change lives in this one file:
   contact details, project cards, and every case-study page.

   HOW TO ADD A PROJECT
   1. Copy one whole project block, from its "PROJECT 0X" comment down to
      the closing  },  and paste it below the last project.
   2. Change the values between the quote marks.
   3. Copy the folder  projects/_template/  and rename the copy to match
      the new project's  id  (for example  projects/my-new-project/ ).
      Open its index.html and change the title and description at the top.

   RULES
   - Keep the quote marks "..." and the commas at the end of each line.
   - Anything that starts with  [PLACEHOLDER  shows on the site in amber
     so you can spot what still needs real content.
   - Image paths start from the site root, e.g. "images/projects/lima/cover.webp".
   ========================================================================== */


/* ----------------------------------------------------------------------------
   SITE DETAILS
---------------------------------------------------------------------------- */
window.SITE = {
  name:      "Pramod Premarathna",
  email:     "ppm.pemarathna@gmail.com",                     // your public email
  phone:     "+94 77 876 3040",                              // your contact number / WhatsApp
  linkedin:  "https://www.linkedin.com/in/pramod-premarathna/",   // your LinkedIn URL
  cv:        "cv/Pramod-Premarathna-CV.pdf"                  // replace this PDF with your CV
};


/* ----------------------------------------------------------------------------
   FILTER CATEGORIES  (id is used inside projects below; label is what shows)
---------------------------------------------------------------------------- */
window.CATEGORIES = [
  { id: "all",       label: "All" },
  { id: "graphic",   label: "Graphic Design" },
  { id: "video",     label: "Video & Motion" },
  { id: "brand",     label: "Brand & Digital" },
  { id: "learning",  label: "Learning & Development" },
  { id: "elearning", label: "E-Learning" },
  { id: "other",     label: "Other Projects" }
];


/* ----------------------------------------------------------------------------
   PROJECTS
   layout:  "feature" = full width   "large" = 7/12   "small" = 5/12
            "half"    = 6/12         add  offset: true  to drop a card lower
   tracks:  which hero-timeline rows the project appears on:
            "design", "video", "learning"
   media types in case studies:
     { type: "image", src: "", alt: "", caption: "", size: "full|half|third" }
     { type: "video", src: "videos/x.mp4", poster: "images/x.webp", caption: "" }
     { type: "youtube", id: "VIDEO_ID", caption: "" }
     { type: "vimeo", id: "123456789", poster: "images/x.webp", caption: "" }
     { type: "beforeafter", before: "", after: "", alt: "" }
---------------------------------------------------------------------------- */
window.PROJECTS = [

  /* ======================================================================
     PROJECT 01 — SELFY LMS
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
    cover:     { src: "images/projects/selfy-lms/cover.svg", alt: "SELFY LMS brand identity cover" },
    preview:   "",                         // short muted MP4 for hover, e.g. "videos/previews/selfy.mp4"
    tag:       "Case study",
    layout:    "feature",
    showOnHome:true,

    /* Images for the sideways-scrolling feature band on the homepage */
    band: [
      { src: "images/projects/selfy-lms/01.svg", alt: "SELFY logo",              caption: "Logo" },
      { src: "images/projects/selfy-lms/02.svg", alt: "SELFY brand guidelines",  caption: "Brand guidelines" },
      { src: "images/projects/selfy-lms/03.svg", alt: "SELFY LMS platform",      caption: "LMS platform" },
      { src: "images/projects/selfy-lms/04.svg", alt: "SELFY launch event",      caption: "Launch event visuals" },
      { src: "images/projects/selfy-lms/05.svg", alt: "SELFY animation frames",  caption: "Animations" },
      { src: "images/projects/selfy-lms/06.svg", alt: "SELFY promotional material", caption: "Promotional materials" }
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
                     { type: "image", src: "images/projects/selfy-lms/01.svg", alt: "Logo exploration", caption: "Logo exploration", size: "half" },
                     { type: "image", src: "images/projects/selfy-lms/02.svg", alt: "Brand guideline pages", caption: "Brand guidelines", size: "half" }
                   ]},
      production:{ text: [ "Brand identity, logo, brand guidelines, LMS interface visuals, launch event visuals, animations and promotional materials." ],
                   media: [
                     { type: "gdrive", id: "1AwXF_3i_4IQQ_TqB7ySzKgYbSsxscuK6", caption: "SELFY Motion Graphics & Animation", size: "full" },
                     { type: "image", src: "images/projects/selfy-lms/03.svg", alt: "LMS platform screens", caption: "LMS platform", size: "full" },
                     { type: "image", src: "images/projects/selfy-lms/04.svg", alt: "Launch event visuals", caption: "Launch event", size: "half" },
                     { type: "image", src: "images/projects/selfy-lms/06.svg", alt: "Promotional material", caption: "Promotional materials", size: "half" }
                   ]},
      final:     { text: [ "Full brand identity suite delivered: logo system, brand guidelines, LMS interface theming, launch animations, and introductory e-learning modules." ],
                   media: [
                     { type: "image", src: "images/projects/selfy-lms/cover.svg", alt: "SELFY final brand", caption: "", size: "full" }
                   ]},
      outcome:   { hasResults: true,
                   text: [ "Delivered: brand identity, logo, brand guidelines, LMS visuals, launch event visuals, animations and promotional materials.", "Successfully rolled out across Singer Sri Lanka PLC's nationwide retail and dealer network." ]}
    }
  },

  /* ======================================================================
     PROJECT 02 — PRODUCT & SALES VIDEO SERIES
     ====================================================================== */
  {
    id:        "product-sales-videos",
    title:     "Product & Sales Video Series",
    subtitle:  "Product and sales training videos",
    categories:["video", "learning"],
    tracks:    ["video", "learning"],
    year:      "2024 – Present",
    client:    "Singer Sri Lanka PLC",
    summary:   "A series of product and sales training videos, from script and storyboard through motion graphics and edit.",
    role:      "Video Producer & Editor",
    tools:     ["Premiere Pro", "After Effects", "DaVinci Resolve", "Audition"],
    cover:     { src: "images/projects/product-sales-videos/cover.svg", alt: "Product and sales video series cover" },
    preview:   "",
    tag:       "Video series",
    layout:    "large",
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
                     { type: "image", src: "images/projects/product-sales-videos/01.svg", alt: "Script page", caption: "Script", size: "third" },
                     { type: "image", src: "images/projects/product-sales-videos/02.svg", alt: "Storyboard frames", caption: "Storyboard", size: "third" },
                     { type: "image", src: "images/projects/product-sales-videos/03.svg", alt: "Motion graphics frame", caption: "Motion graphics", size: "third" }
                   ]},
      production:{ text: [ "Portfolio video showreel, editing, and motion design." ],
                   media: [
                     { type: "gdrive", id: "1lHjc2kxiZpcXszSgOlQ62nUEsfBhUlJW", caption: "Portfolio Video Showreel — Pramod Premarathna", size: "full" }
                   ]},
      final:     { text: [ "Delivered multi-format video assets optimised for high-definition displays, digital social channels, and in-store training screens." ] },
      outcome:   { hasResults: true, text: [ "Broadcast across internal LMS and digital channels, directly supporting nationwide product rollouts and retail sales performance." ]}
    }
  },

  /* ======================================================================
     PROJECT 03 — LIMA ELECTRIC BIKE
     ====================================================================== */
  {
    id:        "lima-electric-bike",
    title:     "LIMA Electric Bike",
    subtitle:  "Brand video and social content",
    categories:["video", "brand"],
    tracks:    ["video"],
    year:      "2024",
    client:    "LIMA",
    summary:   "Video concept, production, edit and social media content for the LIMA electric bike.",
    role:      "Creative Director & Video Editor",
    tools:     ["Premiere Pro", "After Effects", "DaVinci Resolve", "Photoshop"],
    cover:     { src: "images/projects/lima-electric-bike/cover.svg", alt: "LIMA electric bike campaign still" },
    preview:   "",
    tag:       "Video",
    layout:    "small",
    showOnHome:true,

    caseStudy: {
      overview:  { text: [
        "Brand and video work for the LIMA electric bike: concept, production, storytelling, editing and social media content.",
        "Produced for commercial launch and social media digital channels to introduce the brand to urban commuters."
      ]},
      challenge: { text: [ "Standing out in a competitive urban mobility market by establishing an emotive, lifestyle-oriented connection rather than merely listing electric vehicle specs." ]},
      objective: { text: [ "Position LIMA as an iconic, stylish everyday ride through cinematic visual storytelling and evocative colour grading." ]},
      approach:  { text: [ "Crafted a vintage cinematic grade, pairing film-look textures with energetic editing and urban rhythm to create an atmospheric, timeless lifestyle commercial." ]},
      role:      { text: [ "Concept development, creative direction, video editing, vintage film colour grading, sound design, and social media cut-downs." ]},
      process:   { text: [ "Creative treatment → storyboard → shoot supervision → vintage film look colour grading → rhythm-based editing & sound design." ],
                   media: [
                     { type: "image", src: "images/projects/lima-electric-bike/01.svg", alt: "Concept frame", caption: "Concept", size: "half" },
                     { type: "image", src: "images/projects/lima-electric-bike/02.svg", alt: "Production still", caption: "Production", size: "half" }
                   ]},
      production:{ text: [ "LIMA electric bike video production and vintage color grade." ],
                   media: [
                     { type: "gdrive", id: "1XJhkzH7-1uLjaMOiYoCMltgX4zjAg0Tf", caption: "LIMA Electric Bike — Vintage Transformation Commercial", size: "full" }
                   ]},
      final:     { text: [ "Delivered master commercial film, teaser reels, and high-engagement social media aspect ratio cut-downs (9:16, 1:1, 16:9)." ],
                   media: [
                     { type: "image", src: "images/projects/lima-electric-bike/03.svg", alt: "Social post", caption: "Social media", size: "third" },
                     { type: "image", src: "images/projects/lima-electric-bike/04.svg", alt: "Social post", caption: "Social media", size: "third" },
                     { type: "image", src: "images/projects/lima-electric-bike/05.svg", alt: "Social post", caption: "Social media", size: "third" }
                   ]},
      outcome:   { hasResults: true, text: [ "Delivered: brand video and social media content with high viewer retention and positive community response." ]}
    }
  },

  /* ======================================================================
     PROJECT 04 — LEARNING & DEVELOPMENT
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
    cover:     { src: "images/projects/learning-development/cover.svg", alt: "E-learning module screens" },
    preview:   "",
    tag:       "Case study",
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
                     { type: "image", src: "images/projects/learning-development/01.svg", alt: "Module storyboard", caption: "Storyboard", size: "half" },
                     { type: "image", src: "images/projects/learning-development/02.svg", alt: "Module screen", caption: "E-learning module", size: "half" }
                   ]},
      production:{ text: [ "Interactive SCORM/xAPI modules, animated explainer videos, downloadable job aids, and assessment quizzes." ],
                   media: [
                     { type: "image", src: "images/projects/learning-development/03.svg", alt: "Instructional animation frame", caption: "Instructional animation", size: "full" }
                   ]},
      final:     { text: [ "Deployed multi-tier curriculum covering product mastery, retail compliance, and customer service operations." ] },
      outcome:   { hasResults: true, text: [ "Successfully deployed on Singer's enterprise LMS, achieving consistent completion rates and positive employee feedback across nationwide branches." ]}
    }
  },

  /* ======================================================================
     PROJECT 05 — GRAPHIC DESIGN
     ====================================================================== */
  {
    id:        "graphic-design",
    title:     "Graphic Design",
    subtitle:  "Social, event, campaign and corporate design",
    categories:["graphic", "brand"],
    tracks:    ["design"],
    year:      "2021 – 2025",
    client:    "Corporate & Commercial Clients",
    summary:   "Social media designs, event visuals, posters, digital campaigns, presentation design and brand assets.",
    role:      "Art Director & Graphic Designer",
    tools:     ["Photoshop", "Illustrator", "InDesign", "Canva", "AI Visualisation"],
    cover:     { src: "images/projects/graphic-design/cover.jpg", alt: "Selection of graphic design work" },
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
      process:   { text: [ "Client brief analysis → moodboard & sketch → digital composition in Illustrator & Photoshop → typography styling → final print/digital export." ] },
      production:{ text: [ "Posters, social posts and event visuals." ],
                   media: [
                     { type: "image", src: "images/projects/graphic-design/01.jpg", alt: "Poster Design", caption: "Poster Design", size: "third" },
                     { type: "image", src: "images/projects/graphic-design/02.jpg", alt: "Social Media Campaign", caption: "Social Media Campaign", size: "third" },
                     { type: "image", src: "images/projects/graphic-design/03.jpg", alt: "Event Visual", caption: "Event Visual", size: "third" },
                     { type: "image", src: "images/projects/graphic-design/04.jpg", alt: "Brand Design", caption: "Brand Design", size: "half" },
                     { type: "image", src: "images/projects/graphic-design/05.jpg", alt: "Creative Visual", caption: "Campaign Poster", size: "half" },
                     { type: "image", src: "images/projects/graphic-design/06.jpg", alt: "Digital Graphic", caption: "Digital Art", size: "third" },
                     { type: "image", src: "images/projects/graphic-design/07.jpg", alt: "Commercial Creative", caption: "Commercial Visual", size: "third" },
                     { type: "image", src: "images/projects/graphic-design/08.jpg", alt: "Corporate Poster", caption: "Corporate Graphic", size: "third" }
                   ]},
      final:     { text: [ "Comprehensive graphic design suite across print and digital media." ] },
      outcome:   { hasResults: true, text: [ "Delivered: social media designs, event visuals, posters, digital campaign assets and presentation design with high client satisfaction." ]}
    }
  },

  /* ======================================================================
     PROJECT 06 — NEWSPAPER ARTICLES & PRESS FEATURES
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
      process:   { text: [ "Research → Drafting → Editorial review → Print layout → Publication." ] },
      production:{ text: [ "Published national newspaper articles and spreads." ],
                   media: [
                     { type: "image", src: "images/projects/newspaper-articles/cover.jpg", alt: "Mawbima Newspaper Article 01", caption: "Mawbima Feature Article", size: "half" },
                     { type: "image", src: "images/projects/newspaper-articles/01.jpg", alt: "Mawbima Article Spread", caption: "Editorial Spread", size: "half" },
                     { type: "image", src: "images/projects/newspaper-articles/02.jpg", alt: "Newspaper Publication Page", caption: "Published Article", size: "third" },
                     { type: "image", src: "images/projects/newspaper-articles/03.jpg", alt: "Press Feature Section", caption: "Press Feature", size: "third" },
                     { type: "image", src: "images/projects/newspaper-articles/04.jpg", alt: "Newspaper Column", caption: "National Press Feature", size: "third" }
                   ]},
      final:     { text: [ "Archive of published editorial features." ] },
      outcome:   { hasResults: true, text: [ "Published across nationwide print editions with wide public readership." ]}
    }
  }
];
