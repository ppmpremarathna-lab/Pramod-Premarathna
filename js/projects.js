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
  linkedin:  "https://www.linkedin.com/in/[PLACEHOLDER]/",   // your LinkedIn URL
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
    year:      "[PLACEHOLDER: year]",
    client:    "Singer Sri Lanka PLC",
    summary:   "Brand identity, launch visuals and digital learning assets for Singer's e-learning platform.",
    role:      "[PLACEHOLDER: your role]",
    tools:     ["[PLACEHOLDER: tools used]"],   // e.g. ["Premiere Pro", "After Effects"]
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
        "SELFY (Singer E-Learning For You) is the learning management platform for Singer Sri Lanka PLC. The project covered its brand identity, launch communication and the digital learning assets that live on the platform.",
        "[PLACEHOLDER: add one or two sentences on who uses SELFY and when it launched.]"
      ]},
      challenge: { text: [ "[PLACEHOLDER: what communication problem did the platform need to solve? e.g. why a new LMS brand was needed and what staff expected from it.]" ]},
      objective: { text: [ "[PLACEHOLDER: what the brand and launch had to achieve.]" ]},
      approach:  { text: [ "[PLACEHOLDER: the creative idea behind the name, logo and visual style, and why it suits the audience.]" ]},
      role:      { text: [ "[PLACEHOLDER: list what you personally did — e.g. logo design, brand guidelines, launch visuals, animations — and who you worked with.]" ]},
      process:   { text: [ "[PLACEHOLDER: sketches, logo explorations, guideline drafts.]" ],
                   media: [
                     { type: "image", src: "images/projects/selfy-lms/01.svg", alt: "Logo exploration", caption: "Logo exploration", size: "half" },
                     { type: "image", src: "images/projects/selfy-lms/02.svg", alt: "Brand guideline pages", caption: "Brand guidelines", size: "half" }
                   ]},
      production:{ text: [ "Brand identity, logo, brand guidelines, LMS interface visuals, launch event visuals, animations and promotional materials." ],
                   media: [
                     { type: "image", src: "images/projects/selfy-lms/03.svg", alt: "LMS platform screens", caption: "LMS platform", size: "full" },
                     { type: "image", src: "images/projects/selfy-lms/04.svg", alt: "Launch event visuals", caption: "Launch event", size: "third" },
                     { type: "image", src: "images/projects/selfy-lms/05.svg", alt: "Animation frames", caption: "Animations", size: "third" },
                     { type: "image", src: "images/projects/selfy-lms/06.svg", alt: "Promotional material", caption: "Promotional materials", size: "third" }
                   ]},
      final:     { text: [ "[PLACEHOLDER: describe the final launch package.]" ],
                   media: [
                     { type: "image", src: "images/projects/selfy-lms/cover.svg", alt: "SELFY final brand", caption: "", size: "full" }
                   ]},
      outcome:   { hasResults: false,   // set true ONLY if you add real, verifiable results
                   text: [ "Delivered: brand identity, logo, brand guidelines, LMS visuals, launch event visuals, animations and promotional materials.", "[PLACEHOLDER: launch date or rollout scope, if you can share it.]" ]}
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
    year:      "[PLACEHOLDER: year]",
    client:    "[PLACEHOLDER: client or department]",
    summary:   "A series of product and sales training videos, from script and storyboard through motion graphics and edit.",
    role:      "[PLACEHOLDER: your role]",
    tools:     ["[PLACEHOLDER: tools used]"],   // e.g. ["Premiere Pro", "After Effects"]
    cover:     { src: "images/projects/product-sales-videos/cover.svg", alt: "Product and sales video series cover" },
    preview:   "",
    tag:       "Video series",
    layout:    "large",
    showOnHome:true,

    caseStudy: {
      overview:  { text: [ "A series of product videos and sales training videos. The work covered script development, storyboards, motion graphics, editing and visual storytelling.", "[PLACEHOLDER: which products, and who watches these videos.]" ]},
      challenge: { text: [ "[PLACEHOLDER: e.g. product features that were hard to explain in a classroom or in print.]" ]},
      objective: { text: [ "[PLACEHOLDER]" ]},
      approach:  { text: [ "[PLACEHOLDER: the storytelling structure you used for each video.]" ]},
      role:      { text: [ "[PLACEHOLDER: script, storyboard, shoot, edit, motion — which parts were yours?]" ]},
      process:   { text: [ "Script → storyboard → production → edit → motion graphics." ],
                   media: [
                     { type: "image", src: "images/projects/product-sales-videos/01.svg", alt: "Script page", caption: "Script", size: "third" },
                     { type: "image", src: "images/projects/product-sales-videos/02.svg", alt: "Storyboard frames", caption: "Storyboard", size: "third" },
                     { type: "image", src: "images/projects/product-sales-videos/03.svg", alt: "Motion graphics frame", caption: "Motion graphics", size: "third" }
                   ]},
      production:{ text: [ "[PLACEHOLDER: notes on the edit and motion design.]" ],
                   media: [
                     /* Replace with your real video. Examples:
                        { type: "youtube", id: "YOUR_VIDEO_ID", caption: "" }
                        { type: "video", src: "videos/product-01.mp4", poster: "images/projects/product-sales-videos/cover.webp", caption: "" } */
                     { type: "image", src: "images/projects/product-sales-videos/cover.svg", alt: "Video still", caption: "[PLACEHOLDER: replace with the video]", size: "full" }
                   ]},
      final:     { text: [ "[PLACEHOLDER: number of videos and formats delivered.]" ] },
      outcome:   { hasResults: false, text: [ "Delivered: product videos and sales training videos, with scripts, storyboards and motion graphics." ]}
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
    year:      "[PLACEHOLDER: year]",
    client:    "LIMA",
    summary:   "Video concept, production, edit and social media content for the LIMA electric bike.",
    role:      "[PLACEHOLDER: your role]",
    tools:     ["[PLACEHOLDER: tools used]"],   // e.g. ["Premiere Pro", "After Effects"]
    cover:     { src: "images/projects/lima-electric-bike/cover.svg", alt: "LIMA electric bike campaign still" },
    preview:   "",
    tag:       "Video",
    layout:    "small",
    showOnHome:true,

    caseStudy: {
      overview:  { text: [ "Brand and video work for the LIMA electric bike: concept, production, storytelling, editing and social media content.", "[PLACEHOLDER: context — launch, campaign, or product awareness?]" ]},
      challenge: { text: [ "[PLACEHOLDER]" ]},
      objective: { text: [ "[PLACEHOLDER]" ]},
      approach:  { text: [ "[PLACEHOLDER: the story idea behind the film.]" ]},
      role:      { text: [ "[PLACEHOLDER]" ]},
      process:   { text: [ "[PLACEHOLDER: concept, shoot and edit notes.]" ],
                   media: [
                     { type: "image", src: "images/projects/lima-electric-bike/01.svg", alt: "Concept frame", caption: "Concept", size: "half" },
                     { type: "image", src: "images/projects/lima-electric-bike/02.svg", alt: "Production still", caption: "Production", size: "half" }
                   ]},
      production:{ text: [ "[PLACEHOLDER]" ],
                   media: [
                     { type: "image", src: "images/projects/lima-electric-bike/cover.svg", alt: "Final film still", caption: "[PLACEHOLDER: replace with the final video — YouTube, Vimeo or MP4]", size: "full" }
                   ]},
      final:     { text: [ "[PLACEHOLDER: final film and social cut-downs.]" ],
                   media: [
                     { type: "image", src: "images/projects/lima-electric-bike/03.svg", alt: "Social post", caption: "Social media", size: "third" },
                     { type: "image", src: "images/projects/lima-electric-bike/04.svg", alt: "Social post", caption: "Social media", size: "third" },
                     { type: "image", src: "images/projects/lima-electric-bike/05.svg", alt: "Social post", caption: "Social media", size: "third" }
                   ]},
      outcome:   { hasResults: false, text: [ "Delivered: brand video and social media content." ]}
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
    role:      "Executive – Instructional Designer",
    tools:     ["[PLACEHOLDER: tools used]"],   // e.g. ["Premiere Pro", "After Effects"]
    cover:     { src: "images/projects/learning-development/cover.svg", alt: "E-learning module screens" },
    preview:   "",
    tag:       "Case study",
    layout:    "half",
    showOnHome:true,

    caseStudy: {
      overview:  { text: [ "A body of learning work created in the Learning & Development team at Singer Sri Lanka PLC: e-learning modules, instructional animations, training videos, LMS content and employee learning materials.", "Visual design here has one job: help people understand and remember." ]},
      challenge: { text: [ "[PLACEHOLDER: e.g. training a large, spread-out workforce with consistent content.]" ]},
      objective: { text: [ "[PLACEHOLDER]" ]},
      approach:  { text: [ "[PLACEHOLDER: how you use visuals, pacing and structure to support learning.]" ]},
      role:      { text: [ "[PLACEHOLDER]" ]},
      process:   { text: [ "[PLACEHOLDER: needs analysis → storyboard → build → review.]" ],
                   media: [
                     { type: "image", src: "images/projects/learning-development/01.svg", alt: "Module storyboard", caption: "Storyboard", size: "half" },
                     { type: "image", src: "images/projects/learning-development/02.svg", alt: "Module screen", caption: "E-learning module", size: "half" }
                   ]},
      production:{ text: [ "[PLACEHOLDER]" ],
                   media: [
                     { type: "image", src: "images/projects/learning-development/03.svg", alt: "Instructional animation frame", caption: "Instructional animation", size: "full" }
                   ]},
      final:     { text: [ "[PLACEHOLDER]" ] },
      outcome:   { hasResults: false, text: [ "Delivered: e-learning modules, instructional animations, training videos and LMS content." ]}
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
    year:      "[PLACEHOLDER: years]",
    client:    "[PLACEHOLDER: clients you can name]",
    summary:   "Social media designs, event visuals, posters, digital campaigns, presentation design and brand assets.",
    role:      "Graphic Designer",
    tools:     ["[PLACEHOLDER: tools used]"],   // e.g. ["Premiere Pro", "After Effects"]
    cover:     { src: "images/projects/graphic-design/cover.svg", alt: "Selection of graphic design work" },
    preview:   "",
    tag:       "Gallery",
    layout:    "half",
    offset:    true,
    showOnHome:true,

    caseStudy: {
      overview:  { text: [ "A selection of graphic design work: social media designs, event visuals, posters, digital campaigns, corporate communication, presentation design and brand assets." ]},
      challenge: { text: [ "[PLACEHOLDER]" ]},
      objective: { text: [ "[PLACEHOLDER]" ]},
      approach:  { text: [ "[PLACEHOLDER]" ]},
      role:      { text: [ "[PLACEHOLDER]" ]},
      process:   { text: [ "[PLACEHOLDER]" ] },
      production:{ text: [ "Posters, social posts and event visuals." ],
                   media: [
                     { type: "image", src: "images/projects/graphic-design/01.svg", alt: "Poster", caption: "Poster", size: "third" },
                     { type: "image", src: "images/projects/graphic-design/02.svg", alt: "Social media design", caption: "Social media", size: "third" },
                     { type: "image", src: "images/projects/graphic-design/03.svg", alt: "Event visual", caption: "Event visual", size: "third" },
                     { type: "image", src: "images/projects/graphic-design/04.svg", alt: "Presentation design", caption: "Presentation design", size: "full" }
                   ]},
      final:     { text: [ "[PLACEHOLDER]" ] },
      outcome:   { hasResults: false, text: [ "Delivered: social media designs, event visuals, posters, digital campaign assets and presentation design." ]}
    }
  }

  /* To add PROJECT 06, paste a copied block above this line
     (remember the comma after the previous block's closing brace). */
];
