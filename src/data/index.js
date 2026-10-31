// Top-level menu items with sub-links.
// `to` is either a section id on the home page (e.g. "services")
// or a page path (e.g. "/brief").
export const NAV = [
  {
    label: "Expertise",
    children: [
      { name: "PR", to: "/what-we-do#pr" },
      { name: "Social Media", to: "/what-we-do#social-media" },
      { name: "Our Work", to: "/what-we-do#our-work" },
    ],
  },
  { label: "How we work", to: "how" },
];

export const CATS=["UGC creators","Influencers","Models","Actors & presenters","Photographers & videographers"];
export const HERO_LABELS=[["01","Niche"],["02","Audience"],["03","Geography"],["04","Brand"]];
export const METHOD=[["Niche fit","We match a creator's recurring content, expertise and style to your product category, from their recent posts, themes and portfolio."],["Geographic fit","Where the creator lives isn't where their audience lives. We check audience location, language and regional relevance."],["Audience fit","We check that a creator's audience looks like your customers (age, location, language and interests) and state any data limits."],["Brand fit","Tone, values, visual style, professionalism and brand safety, reviewed across public content and prior work."],["Campaign fit","Format, budget, deliverables, timing and objectives, matched against rates, availability and engagement quality."],["Creative direction","Each creator gets an actionable brief: the hook, script, talking points and CTA, written in their own voice."]];
export const SCORE=[["Niche & content relevance",25],["Audience geography & demographic fit",20],["Content quality & storytelling",15],["Engagement authenticity & quality",15],["Brand safety & professionalism",10],["Budget & availability",10],["Past campaign evidence & reliability",5]];
export const PKGS = [
  { n: "Right Match", tag: "Research", d: "We research and recommend the right talent for one defined brief.",
    f: ["Up to 15 creators assessed", "Ranked shortlist of 5", "Niche, location & audience review", "Rationale for every recommendation", "Indicative rates + one revision"],
    cta: "Start with Right Match" },
  { n: "Right Direction", tag: "Research + creative", best: "Most complete", d: "Everything in Right Match, plus campaign strategy and creator-specific scripts.",
    f: ["One creative strategy", "Up to 3 short-form scripts", "Hooks, talking points & CTA", "Platform guidelines", "One consolidated script revision"],
    cta: "Get creative direction" },
  { n: "Right Campaign", tag: "End-to-end", d: "Everything in Right Direction, plus sourcing, booking, delivery and reporting.",
    f: ["Outreach to up to 10 candidates", "Booking for up to 3 creators", "Negotiation & admin handled", "Deadline tracking & content review", "Final campaign report"],
    cta: "Plan a campaign" },
];

export const SERVICES = [
  {
    id: "talent-pr",
    number: "01",
    title: "Talent & PR",
    shortTag: "Get seen and trusted",
    tagline: "Get your brand seen, talked about and trusted, through the media and the right people.",
    video: "https://videos.pexels.com/video-files/3205624/3205624-uhd_2560_1440_25fps.mp4",
    poster: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1200",
    secondary: "https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=800",
    checklist: [
      "Influencer campaigns",
      "Press coverage",
      "PR seeding & gifting",
      "Launch events",
    ],
    cta: "Get a PR proposal",
    items: [
      "Press releases & media relations",
      "Media outreach & press coverage",
      "Product & brand launch campaigns",
      "Press events & launch events",
      "Influencer & creator campaigns",
      "Talent research & matching",
      "Brand ambassador & celebrity partnerships",
      "PR seeding, gifting & PR packages",
      "Brand storytelling & key messaging",
      "Press kits & media kits",
      "Founder profiling & thought leadership",
      "Awards & speaking opportunities",
      "Brand collaborations & partnerships",
      "Event PR & brand activations",
      "Reputation & crisis management",
      "Creative direction & creator scripts",
      "Talent booking, contracts & usage rights",
      "Media monitoring & PR reporting",
    ],
  },
  {
    id: "social-media",
    number: "02",
    title: "Social media",
    shortTag: "Show up consistently",
    tagline: "Show up consistently, with content made for each platform and a voice that sounds like you.",
    video: "https://videos.pexels.com/video-files/5077610/5077610-uhd_2560_1440_24fps.mp4",
    poster: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1200",
    secondary: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
    checklist: [
      "Content calendar",
      "Reels & stories",
      "Community management",
      "Monthly reporting",
    ],
    cta: "Plan my social media",
    items: [
      "Social media strategy & audits",
      "Content calendar & planning",
      "Posts, carousels & stories",
      "Reels & short-form video",
      "Video editing",
      "Graphic design & branded templates",
      "Copywriting & captions (English & Urdu)",
      "Hashtag & trend research",
      "Profile setup & optimisation",
      "Community management (comments & DMs)",
      "Social listening",
      "Competitor analysis",
      "Giveaways & contests",
      "User-generated content curation",
      "Live sessions & collaborations",
      "Instagram, TikTok, Facebook & YouTube",
      "LinkedIn, X, Snapchat & Pinterest",
      "Analytics & monthly reporting",
    ],
  },
  {
    id: "paid-media",
    number: "03",
    title: "Paid media",
    shortTag: "Reach the right audience",
    tagline: "Ads that put your best content in front of the right audience, and keep improving.",
    video: "https://videos.pexels.com/video-files/3252919/3252919-uhd_2560_1440_25fps.mp4",
    poster: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1200",
    secondary: "https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
    checklist: [
      "Meta & TikTok ads",
      "Google & YouTube ads",
      "A/B testing",
      "Performance dashboards",
    ],
    cta: "Build my ad plan",
    items: [
      "Paid media strategy & media planning",
      "Budget planning & management",
      "Audience research & targeting",
      "Retargeting & lookalike audiences",
      "Meta ads (Facebook & Instagram)",
      "TikTok ads",
      "YouTube ads",
      "Google Search & Display ads",
      "Snapchat & LinkedIn ads",
      "Creator ads, Spark ads & whitelisting",
      "Ad creative & ad copy",
      "A/B testing",
      "Pixel & conversion tracking setup",
      "Landing page recommendations",
      "Lead generation campaigns",
      "E-commerce & catalogue ads",
      "Bid management & optimisation",
      "Performance reporting & dashboards",
    ],
  },
  {
    id: "shoots-production",
    number: "04",
    title: "Shoots & production",
    shortTag: "Look the part",
    tagline: "From idea to final edit: photo and video shoots, cast from our own vetted roster.",
    video: "https://videos.pexels.com/video-files/3059263/3059263-uhd_2560_1440_24fps.mp4",
    poster: "https://images.pexels.com/photos/3014016/pexels-photo-3014016.jpeg?auto=compress&cs=tinysrgb&w=1200",
    secondary: "https://images.pexels.com/photos/3735149/pexels-photo-3735149.jpeg?auto=compress&cs=tinysrgb&w=800",
    checklist: [
      "Concept & direction",
      "Model & creator casting",
      "Product & campaign shoots",
      "TVCs & brand films",
    ],
    cta: "Book a shoot",
    items: [
      "Concept development & mood boards",
      "Creative & art direction",
      "Scriptwriting & storyboards",
      "Model, actor & creator casting",
      "Location scouting & permits",
      "Set design & props",
      "Styling, wardrobe, hair & makeup",
      "Photographers, videographers & crew",
      "Lighting & equipment",
      "Product & e-commerce photography",
      "Lifestyle & campaign photography",
      "Fashion & lookbook shoots",
      "Food & hospitality shoots",
      "TVCs & brand films",
      "Reels, TikToks & UGC-style video",
      "Behind-the-scenes content",
      "Event coverage",
      "Drone footage",
      "Editing, colour grading & retouching",
      "Motion graphics & subtitles",
      "Sound design & music licensing",
      "Delivery sized for every platform",
    ],
  },
];

export const RET = [
  ["Monthly Intelligence", "Up to 2 research briefs a month, up to 10 recommendations each, plus monthly talent and market insights."],
  ["Monthly Creative Partner", "Up to 2 briefs and 6 short-form scripts a month, creator-specific direction and a monthly planning meeting."],
  ["Managed Partner", "Sourcing, strategy, scripting and up to 5 creator bookings a month, with tracking, review and monthly reporting."],
];

export const INDUSTRIES = [
  { name: "Fashion", image: "https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Beauty & Makeup", image: "https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Skincare", image: "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Food & Restaurant", image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Fitness", image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Health & Wellness", image: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Lifestyle", image: "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Travel", image: "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Comedy", image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Dance", image: "https://images.pexels.com/photos/1701202/pexels-photo-1701202.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Music", image: "https://images.pexels.com/photos/164829/pexels-photo-164829.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Education & Study", image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Tech & Gadgets", image: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Gaming", image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Finance & Business", image: "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Motivation & Self-Help", image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Family & Mom", image: "https://images.pexels.com/photos/1683975/pexels-photo-1683975.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Parenting", image: "https://images.pexels.com/photos/1912868/pexels-photo-1912868.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Home Decor", image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Automotive (Cars & Bikes)", image: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Pets", image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Books", image: "https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Art & Calligraphy", image: "https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Wedding & Events", image: "https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Sports", image: "https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Photography", image: "https://images.pexels.com/photos/212372/pexels-photo-212372.jpeg?auto=compress&cs=tinysrgb&w=400" },
];

// ============ PLACES with images ============
export const PLACES = [
  {
    country: "Pakistan",
    cities: ["Karachi", "Islamabad", "Lahore"],
    image: "https://images.unsplash.com/photo-1693141520831-f0466dd82cdc?q=80&w=1256&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    country: "United Kingdom",
    cities: ["London", "Manchester", "Birmingham"],
    image: "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    country: "United States",
    cities: ["Los Angeles, CA", "New York City", "Miami, Florida"],
    image: "https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];
// ============ CITY INFLUENCERS with avatars ============
// Add this to your data.js file (replacing the old CITY_INFLUENCERS)

export const CITY_INFLUENCERS = {
  "Lahore": [
    {
      handle: "@litwithnoor",
      url: "https://www.instagram.com/litwithnoor/",
      name: "Syed Noor",
      followers: 18500,
      niche: "Lifestyle & Books",
      city: "Lahore",
      gender: "Female",
      image: "/Lifestyle & Fashion/Noor syed.jpg",
      work: [
        "https://images.pexels.com/photos/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    {
      handle: "@noorayblog",
      url: "https://www.instagram.com/noorayblog/",
      name: "Nooray",
      followers: 32800,
      niche: "Beauty & Lifestyle",
      city: "Lahore",
      gender: "Female",
      image: "/Lifestyle & Fashion/Mahnoor Nawaz.jpg",
      work: [
        "https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    {
      handle: "@celina_arif",
      url: "https://www.instagram.com/celina_arif/",
      name: "Celina Arif",
      followers: 56400,
      niche: "Fashion & Lifestyle",
      city: "Lahore",
      gender: "Female",
      image: "/Lifestyle & Fashion/Celina Arif.jpg",
      work: [
        "https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    {
      handle: "@sanam.raza797",
      url: "https://www.instagram.com/sanam.raza797/",
      name: "Sanam Raza",
      followers: 38900,
      niche: "Food & Lifestyle",
      city: "Lahore",
      gender: "Female",
      image: "/Lifestyle & Fashion/Sanam.raza.jpg", 
      work: [
        "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    {
      handle: "@haiyab",
      url: "https://www.instagram.com/haiyab/",
      name: "Haiya Bokhari",
      followers: 14400,
      niche: "Fashion & Editorial",
      city: "Lahore",
      gender: "Female",
      image: "/Lifestyle & Fashion/Haiya Bokhari.jpg",
      work: [
        "https://images.pexels.com/photos/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    {
      handle: "@rabikaatahir",
      url: "https://www.instagram.com/rabikaatahir/",
      name: "Rabika Tahir",
      followers: 94600,
      niche: "Lifestyle & Fashion",
      city: "Lahore",
      gender: "Female",
      image: "/Lifestyle & Fashion/Rabika Tahir.jpg",
      work: [
        "https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    {
      handle: "@tasbeeha._.shahid",
      url: "https://www.instagram.com/tasbeeha._.shahid/",
      name: "Tasbeeha Shahid",
      followers: 15600,
      niche: "Lifestyle & Fashion",
      city: "Lahore",
      gender: "Female",
      image: "/Lifestyle & Fashion/tasbeeha shahid.jpg",
      work: [
        "https://images.pexels.com/photos/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    }
  ],
  "Karachi": [
    {
      handle: "@missposable_",
      url: "https://www.instagram.com/missposable_/",
      name: "Areeba (Miss Posable)",
      followers: 22700,
      niche: "Fashion & Lifestyle",
      city: "Karachi",
      gender: "Female",
      image: "/Lifestyle & Fashion/Maryam Ali.jpg",
      work: [
        "https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    {
      handle: "@jerusshha",
      url: "https://www.instagram.com/jerusshha/",
      name: "Jerusha",
      followers: 85200,
      niche: "Beauty & Lifestyle",
      city: "Karachi",
      gender: "Female",
      image: "/Lifestyle & Fashion/Jerusha.png",
      work: [
        "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    {
      handle: "@sawerajamalii",
      url: "https://www.instagram.com/sawerajamalii/",
      name: "Sawera Jamali",
      followers: 19300,
      niche: "Lifestyle & Fashion",
      city: "Karachi",
      gender: "Female",
      image: "/Lifestyle & Fashion/Dr.Sawera Jamali.jpg",
      work: [
        "https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    {
      handle: "@iqramiandad",
      url: "https://www.instagram.com/iqramiandad/",
      name: "Iqra Miandad",
      followers: 14800,
      niche: "Beauty & Skincare",
      city: "Karachi",
      gender: "Female",
      image: "/Lifestyle & Fashion/Iqra Kiran.jpg",
      work: [
        "https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    }
  ],
  "Islamabad": [
    {
      handle: "@evm26",
      url: "https://www.instagram.com/evm26/",
      name: "Emaan (EVM)",
      followers: 16700,
      niche: "Modest Fashion & Lifestyle",
      city: "Islamabad",
      gender: "Female",
      image: "/Lifestyle & Fashion/evm26.png",
      work: [
        "https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    {
      handle: "@laibaaa._3",
      url: "https://www.instagram.com/laibaaa._3/",
      name: "Laiba",
      followers: 63200,
      niche: "Lifestyle & Fashion",
      city: "Islamabad",
      gender: "Female",
      image: "/Lifestyle & Fashion/laiba.png", 
      work: [
        "https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    {
      handle: "@zarjanyousafkhan",
      url: "https://www.instagram.com/zarjanyousafkhan/",
      name: "Zarjan Yousaf Khan",
      followers: 26500,
      niche: "Lifestyle & Travel",
      city: "Islamabad",
      gender: "Female",
      image: "/Lifestyle & Fashion/zarjan khan.png",
      work: [
        "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1488646953014-85cb44e25828.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    {
      handle: "@ummema.abbasi",
      url: "https://www.instagram.com/ummema.abbasi/",
      name: "Ummema Abbasi",
      followers: 24200,
      niche: "Lifestyle & Fashion",
      city: "Islamabad",
      gender: "Female",
      image: "/Lifestyle & Fashion/ummema.abbasi.jpg", 
      work: [
        "https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    {
      handle: "@amu.kay_",
      url: "https://www.instagram.com/amu.kay_/",
      name: "Amna Kayani",
      followers: 33100,
      niche: "Fashion & Lifestyle",
      city: "Islamabad",
      gender: "Female",
      image: "/Lifestyle & Fashion/Amna Khan.jpg",
      work: [
        "https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    }
  ]
};

export const STEPS=[["Brief intake","Product, objective, audience, geography, budget, timeline, deliverables and usage needs."],["Research","We define the niche, build a candidate pool and assess the data and brand fit."],["Recommendation","A ranked shortlist with rationale, profile links, indicative rates and data caveats."],["Creative direction","Campaign concept, hooks, scripts, key messages, CTA and platform guidance."],["Booking","Approvals, availability and rates confirmed; deliverables and usage rights documented."],["Execution","Deadlines tracked, content reviewed against the brief, revisions and publishing coordinated."],["Reporting","What was delivered, the results available, what we learned and what to do next."]];
export const DIFF=[["Selection","Follower count and who's trending","Weighted scorecard across niche, audience, brand and campaign fit"],["Audience","Assumed from where the creator lives","Checked against platform insights, with gaps clearly flagged"],["Content","Creator improvises from a product drop","Creator-specific hooks, scripts, talking points and CTA"],["Transparency","Fees and commissions unclear","Research fees, creator fees and commissions kept separate and disclosed"]];
export const TALENT=[["UGC creators","Product storytelling and demos, chosen for craft, not follower count."],["Influencers","Creators whose niche and audience can carry awareness and community."],["Models","Commercial, fashion, beauty and e-commerce work."],["Actors & presenters","Ads, branded video, events and spokesperson roles."]];
export const CLIENTS=[["Beauty & skincare","Credible demos from creators who know the category."],["Fashion & lifestyle","Models, lifestyle creators and visual storytelling."],["E-commerce & consumer","UGC, product demos and conversion-focused content."],["Ad agencies & production houses","Reliable casting and curated talent for client briefs."],["Hospitality, food & local","Creators with real reach in your city."],["International brands","Local market, language and audience insight for new markets."]];
export * from "./images";