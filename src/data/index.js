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
export const CITY_INFLUENCERS = {
  "Karachi": [
    { 
      name: "Ayesha Khan", 
      handle: "@ayeshakhan", 
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80",
      bio: "Fashion and lifestyle creator based in Karachi. I specialize in styling modern Pakistani wear with a global twist. Let's work together to elevate your brand's visual storytelling.",
      work: [
        "https://images.pexels.com/photos/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    { 
      name: "Bilal Raza", 
      handle: "@bilalraza", 
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
      bio: "Tech reviewer and gadget enthusiast. I break down the latest tech in a way that's easy to understand. Perfect for brands launching new hardware or software.",
      work: [
        "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/6476260/pexels-photo-6476260.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    { 
      name: "Hina Siddiqui", 
      handle: "@hinasiddiqui", 
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80",
      bio: "Food and hospitality storyteller. I bring restaurants, cafes, and local food brands to life through mouth-watering visuals and honest reviews.",
      work: [
        "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    { 
      name: "Usman Iqbal", 
      handle: "@usmaniqbal", 
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80",
      bio: "Fitness coach and lifestyle vlogger. I focus on sustainable health, training routines, and the mental side of fitness. Partner with me for authentic wellness campaigns.",
      work: [
        "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3764014/pexels-photo-3764014.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    { 
      name: "Sana Malik", 
      handle: "@sanamalik", 
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80",
      bio: "Beauty and skincare educator. I review products based on ingredients and real results, helping my audience build routines they can trust.",
      work: [
        "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1556228720-195a672e8a03.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    { 
      name: "Zara Ahmed", 
      handle: "@zaraahmed", 
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80",
      bio: "Travel and culture vlogger. From the streets of Karachi to the mountains of the north, I document authentic travel experiences and local stories.",
      work: [
        "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1488646953014-85cb44e25828.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/16029930/pexels-photo-16029930.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
  ],
  "Islamabad": [
    { 
      name: "Ali Hassan", 
      handle: "@alihassan", 
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80",
      bio: "Corporate and finance creator. I simplify complex business topics and interview industry leaders. Ideal for B2B brands and financial services.",
      work: [
        "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1454165804606-c3d57bc86b40.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    { 
      name: "Fatima Noor", 
      handle: "@fatimanoor", 
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&q=80",
      bio: "Home decor and interior styling. I show how to transform everyday spaces into beautiful, functional homes without breaking the bank.",
      work: [
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1616486338812-3dadae4b4ace.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    { 
      name: "Hamza Tariq", 
      handle: "@hamzah", 
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=600&q=80",
      bio: "Gaming and esports streamer. I create high-energy gameplay content and reviews. Perfect for gaming brands and tech accessories.",
      work: [
        "https://images.pexels.com/photos/1542751371-adc38448a05e.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3945659/pexels-photo-3945659.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    { 
      name: "Mariam Shah", 
      handle: "@mariamshah", 
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&q=80",
      bio: "Book lover and education advocate. I review literature, share study tips, and promote literacy. Great for publishers and ed-tech platforms.",
      work: [
        "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1495446815901-a7297e633e8d.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    { 
      name: "Zainab Riaz", 
      handle: "@zainabriaz", 
      image: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=600&q=80",
      bio: "Motivational speaker and self-help creator. I share daily habits, mindset shifts, and productivity hacks to help my audience grow.",
      work: [
        "https://images.pexels.com/photos/1499750310107-5fef28a66643.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3757954/pexels-photo-3757954.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    { 
      name: "Saad Iqbal", 
      handle: "@saadiqbal", 
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80",
      bio: "Automotive reviewer. I test drive the latest cars and bikes, focusing on performance and value. Reach car enthusiasts directly.",
      work: [
        "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1503376780353-7e6692767b70.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
  ],
  "Lahore": [
    { 
      name: "Imran Yousaf", 
      handle: "@imranyousaf", 
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80",
      bio: "Music producer and artist. I share behind-the-scenes studio content and music tips. Great for audio brands and event promotions.",
      work: [
        "https://images.pexels.com/photos/164829/pexels-photo-164829.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1511671782779-c97d3d27a1d4.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/2111015/pexels-photo-2111015.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    { 
      name: "Rabia Khan", 
      handle: "@rabiakhan", 
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&q=80",
      bio: "Family and parenting vlogger. I share real, unscripted moments of raising kids and managing a home. Ideal for family-friendly brands.",
      work: [
        "https://images.pexels.com/photos/1511895426328-dc8714191300.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1476703993599-0035a21b17a9.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1683975/pexels-photo-1683975.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    { 
      name: "Ahmed Sheikh", 
      handle: "@ahmedsheikh", 
      image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=600&q=80",
      bio: "Photography and cinematography educator. I teach people how to take better photos and videos with the gear they already own.",
      work: [
        "https://images.pexels.com/photos/212372/pexels-photo-212372.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1502920917128-1aa500764cbd.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1203803/pexels-photo-1203803.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    { 
      name: "Nida Akhtar", 
      handle: "@nidaakhtar", 
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&q=80",
      bio: "Art and calligraphy creator. I showcase traditional and modern calligraphy techniques, and collaborate with brands on bespoke artwork.",
      work: [
        "https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1513364776144-60967b0f800f.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    { 
      name: "Talha Rehman", 
      handle: "@talharehman", 
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=600&q=80",
      bio: "Comedy and sketch creator. I create relatable, clean humor that resonates with a wide audience. Perfect for brand awareness campaigns.",
      work: [
        "https://images.pexels.com/photos/1585699324551-f6c309eedeca.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3228892/pexels-photo-3228892.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    { 
      name: "Maha Butt", 
      handle: "@mahabutt", 
      image: "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?w=600&q=80",
      bio: "Dance and choreography creator. I share dance tutorials and performance videos. Great for fitness, fashion, and music partnerships.",
      work: [
        "https://images.pexels.com/photos/1701202/pexels-photo-1701202.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1508700115892-45ecd05ae2ad.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/358010/pexels-photo-358010.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
  ],
  "London": [
    { 
      name: "Emma Wilson", 
      handle: "@emmawilson", 
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&q=80",
      bio: "London-based fashion stylist and creator. I focus on sustainable fashion and high-street styling. Connecting brands with conscious consumers.",
      work: [
        "https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    { 
      name: "James Clarke", 
      handle: "@jamesclarke", 
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80",
      bio: "Fitness and nutrition expert. I debunk fitness myths and share science-backed training routines. Perfect for sports and supplement brands.",
      work: [
        "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3764014/pexels-photo-3764014.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    { 
      name: "Sophie Turner", 
      handle: "@sophieturner", 
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80",
      bio: "Skincare and beauty reviewer. I test products for sensitive skin and share honest reviews. Trusted by a loyal beauty community.",
      work: [
        "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1556228720-195a672e8a03.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    { 
      name: "Oliver Smith", 
      handle: "@oliversmith", 
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
      bio: "Tech and gadget reviewer based in London. I focus on productivity tools and smart home tech. Ideal for tech brands.",
      work: [
        "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/6476260/pexels-photo-6476260.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    { 
      name: "Ava Brown", 
      handle: "@avabrown", 
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&q=80",
      bio: "Food and travel vlogger. I explore London's hidden food spots and share travel guides. Great for hospitality and tourism brands.",
      work: [
        "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    { 
      name: "Liam Davies", 
      handle: "@liamdavies", 
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=600&q=80",
      bio: "Motorsport and automotive creator. I cover car reviews, racing news, and maintenance tips. Reach a passionate automotive audience.",
      work: [
        "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1503376780353-7e6692767b70.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
  ],
  "Manchester": [
    { 
      name: "Charlotte Evans", 
      handle: "@charlotteevans", 
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80",
      bio: "Lifestyle and home decor creator. I share cozy home styling tips and DIY projects. Perfect for homeware and furniture brands.",
      work: [
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1616486338812-3dadae4b4ace.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    { 
      name: "Daniel Hughes", 
      handle: "@danielhughes", 
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80",
      bio: "Business and finance creator. I break down market trends and personal finance tips. Reaching a professional, ambitious audience.",
      work: [
        "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1454165804606-c3d57bc86b40.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    { 
      name: "Grace Taylor", 
      handle: "@gracetaylor", 
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80",
      bio: "Beauty and makeup artist. I create editorial looks and share application techniques. Ideal for cosmetics and skincare brands.",
      work: [
        "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1556228720-195a672e8a03.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    { 
      name: "Harry Thomas", 
      handle: "@harrythomas", 
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80",
      bio: "Gaming streamer and reviewer. I play the latest releases and share honest reviews. Connecting with a highly engaged gaming community.",
      work: [
        "https://images.pexels.com/photos/1542751371-adc38448a05e.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3945659/pexels-photo-3945659.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    { 
      name: "Isla White", 
      handle: "@islawhite", 
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80",
      bio: "Travel and adventure creator. I document hikes, city breaks, and outdoor adventures. Great for travel, outdoor, and apparel brands.",
      work: [
        "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1488646953014-85cb44e25828.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/16029930/pexels-photo-16029930.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    { 
      name: "Jack Martin", 
      handle: "@jackmartin", 
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80",
      bio: "Music and entertainment creator. I cover festivals, artist interviews, and music reviews. Perfect for music platforms and event brands.",
      work: [
        "https://images.pexels.com/photos/164829/pexels-photo-164829.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1511671782779-c97d3d27a1d4.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/2111015/pexels-photo-2111015.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
  ],
  "Birmingham": [
    { 
      name: "Mia Johnson", 
      handle: "@miajohnson", 
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&q=80",
      bio: "Parenting and family lifestyle creator. I share honest parenting stories and family-friendly product recommendations.",
      work: [
        "https://images.pexels.com/photos/1511895426328-dc8714191300.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1476703993599-0035a21b17a9.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1683975/pexels-photo-1683975.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    { 
      name: "Noah Walker", 
      handle: "@noahwalker", 
      image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=600&q=80",
      bio: "DIY and woodworking creator. I build custom furniture and home projects from scratch. Ideal for tool and hardware brands.",
      work: [
        "https://images.pexels.com/photos/1616486338812-3dadae4b4ace.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    { 
      name: "Ruby Hall", 
      handle: "@rubyhall", 
      image: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=600&q=80",
      bio: "Skincare and wellness advocate. I share my journey to clear skin and promote natural skincare solutions. Great for beauty brands.",
      work: [
        "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1556228720-195a672e8a03.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    { 
      name: "Leo Allen", 
      handle: "@leoallen", 
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=600&q=80",
      bio: "Sports and fitness creator. I share training drills, match analysis, and athlete interviews. Perfect for sports brands and apparel.",
      work: [
        "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3764014/pexels-photo-3764014.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    { 
      name: "Ella Young", 
      handle: "@ellayoung", 
      image: "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?w=600&q=80",
      bio: "Music and dance creator. I choreograph routines to trending sounds and review new albums. Reaching a young, vibrant audience.",
      work: [
        "https://images.pexels.com/photos/164829/pexels-photo-164829.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1511671782779-c97d3d27a1d4.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/2111015/pexels-photo-2111015.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    { 
      name: "Oscar King", 
      handle: "@oscarking", 
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80",
      bio: "Automotive and motorsport creator. I review cars, bikes, and share maintenance tips. Connecting with a dedicated automotive audience.",
      work: [
        "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1503376780353-7e6692767b70.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
  ],
  "Los Angeles, CA": [
    { 
      name: "Sophia Lee", 
      handle: "@sophialee", 
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&q=80",
      bio: "LA-based fashion and beauty creator. I focus on trend forecasting and high-end styling. Partner with me for premium brand campaigns.",
      work: [
        "https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    { 
      name: "Ethan Park", 
      handle: "@ethanpark", 
      image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=600&q=80",
      bio: "Fitness and wellness creator. I share advanced training techniques and recovery tips. Ideal for sports and wellness brands.",
      work: [
        "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3764014/pexels-photo-3764014.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    { 
      name: "Olivia Chen", 
      handle: "@oliviachen", 
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&q=80",
      bio: "Tech and gadget reviewer. I focus on consumer electronics and smart home devices. Great for tech brands launching new products.",
      work: [
        "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/6476260/pexels-photo-6476260.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    { 
      name: "Mason Reed", 
      handle: "@masonreed", 
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80",
      bio: "Outdoor and travel creator. I document camping, hiking, and off-road adventures. Perfect for outdoor gear and vehicle brands.",
      work: [
        "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1488646953014-85cb44e25828.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/16029930/pexels-photo-16029930.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    { 
      name: "Isabella Cruz", 
      handle: "@isabellacruz", 
      image: "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?w=600&q=80",
      bio: "Food and restaurant reviewer in LA. I explore the best tacos, sushi, and fine dining spots. Great for hospitality and food brands.",
      work: [
        "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    { 
      name: "Lucas Rivera", 
      handle: "@lucasrivera", 
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=600&q=80",
      bio: "Music producer and DJ. I share studio sessions and live sets. Perfect for music equipment and event partnerships.",
      work: [
        "https://images.pexels.com/photos/164829/pexels-photo-164829.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1511671782779-c97d3d27a1d4.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/2111015/pexels-photo-2111015.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
  ],
  "New York City": [
    { 
      name: "Maya Patel", 
      handle: "@mayapatel", 
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80",
      bio: "NYC-based business and finance creator. I share career advice and market insights. Reaching ambitious professionals and entrepreneurs.",
      work: [
        "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1454165804606-c3d57bc86b40.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    { 
      name: "Ryan Cohen", 
      handle: "@ryancohen", 
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
      bio: "Tech and startup creator. I cover the latest gadgets and interview founders. Ideal for B2B tech brands and SaaS products.",
      work: [
        "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/6476260/pexels-photo-6476260.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    { 
      name: "Zoe Kim", 
      handle: "@zoekim", 
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&q=80",
      bio: "Beauty and skincare reviewer. I focus on clean beauty and K-beauty trends. Great for beauty brands looking for authentic reviews.",
      work: [
        "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1556228720-195a672e8a03.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    { 
      name: "Ethan Ross", 
      handle: "@ethanross", 
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80",
      bio: "Fitness and bodybuilding creator. I share intense workouts and nutrition plans. Perfect for supplement and athletic wear brands.",
      work: [
        "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3764014/pexels-photo-3764014.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    { 
      name: "Layla Aziz", 
      handle: "@laylaaziz", 
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80",
      bio: "Travel and lifestyle creator in NYC. I share city guides and hidden gems. Ideal for tourism, hospitality, and lifestyle brands.",
      work: [
        "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1488646953014-85cb44e25828.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/16029930/pexels-photo-16029930.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    { 
      name: "Jordan Miles", 
      handle: "@jordanmiles", 
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80",
      bio: "Music and entertainment vlogger. I cover concerts, festivals, and album releases. Reaching a young, passionate audience.",
      work: [
        "https://images.pexels.com/photos/164829/pexels-photo-164829.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1511671782779-c97d3d27a1d4.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/2111015/pexels-photo-2111015.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
  ],
  "Miami, Florida": [
    { 
      name: "Diego Torres", 
      handle: "@diegotorres", 
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80",
      bio: "Miami-based fitness and lifestyle creator. I share beach workouts and healthy living tips. Great for activewear and wellness brands.",
      work: [
        "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3764014/pexels-photo-3764014.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    { 
      name: "Camila Reyes", 
      handle: "@camilareyes", 
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80",
      bio: "Beauty and makeup creator. I love bold colors and editorial looks. Partner with me for cosmetics and skincare campaigns.",
      work: [
        "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1556228720-195a672e8a03.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    { 
      name: "Mateo Vargas", 
      handle: "@mateovargas", 
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80",
      bio: "Tech and gadget reviewer based in Miami. I focus on smart home and audio gear. Reaching an engaged tech audience.",
      work: [
        "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/6476260/pexels-photo-6476260.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    { 
      name: "Luna Castillo", 
      handle: "@lunacastillo", 
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80",
      bio: "Food and travel creator in Miami. I share the best local eats and travel tips. Perfect for hospitality and lifestyle brands.",
      work: [
        "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    { 
      name: "Santiago Ruiz", 
      handle: "@santiagoruiz", 
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=600&q=80",
      bio: "Automotive creator covering the latest supercars and street racing. Great for automotive aftermarket brands.",
      work: [
        "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1503376780353-7e6692767b70.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    { 
      name: "Valentina Paz", 
      handle: "@valentinapaz", 
      image: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=600&q=80",
      bio: "Dance and lifestyle creator. I share choreography and lifestyle vlogs. Ideal for fashion and music brands.",
      work: [
        "https://images.pexels.com/photos/1701202/pexels-photo-1701202.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1508700115892-45ecd05ae2ad.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/358010/pexels-photo-358010.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
  ],
};

export const STEPS=[["Brief intake","Product, objective, audience, geography, budget, timeline, deliverables and usage needs."],["Research","We define the niche, build a candidate pool and assess the data and brand fit."],["Recommendation","A ranked shortlist with rationale, profile links, indicative rates and data caveats."],["Creative direction","Campaign concept, hooks, scripts, key messages, CTA and platform guidance."],["Booking","Approvals, availability and rates confirmed; deliverables and usage rights documented."],["Execution","Deadlines tracked, content reviewed against the brief, revisions and publishing coordinated."],["Reporting","What was delivered, the results available, what we learned and what to do next."]];
export const DIFF=[["Selection","Follower count and who's trending","Weighted scorecard across niche, audience, brand and campaign fit"],["Audience","Assumed from where the creator lives","Checked against platform insights, with gaps clearly flagged"],["Content","Creator improvises from a product drop","Creator-specific hooks, scripts, talking points and CTA"],["Transparency","Fees and commissions unclear","Research fees, creator fees and commissions kept separate and disclosed"]];
export const TALENT=[["UGC creators","Product storytelling and demos, chosen for craft, not follower count."],["Influencers","Creators whose niche and audience can carry awareness and community."],["Models","Commercial, fashion, beauty and e-commerce work."],["Actors & presenters","Ads, branded video, events and spokesperson roles."]];
export const CLIENTS=[["Beauty & skincare","Credible demos from creators who know the category."],["Fashion & lifestyle","Models, lifestyle creators and visual storytelling."],["E-commerce & consumer","UGC, product demos and conversion-focused content."],["Ad agencies & production houses","Reliable casting and curated talent for client briefs."],["Hospitality, food & local","Creators with real reach in your city."],["International brands","Local market, language and audience insight for new markets."]];
export * from "./images";