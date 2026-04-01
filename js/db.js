// ============================================
// CampusConnect — Data Store (db.js)
// Real Unsplash photos via ?w=400&q=80
// ============================================

const CC_DB = {

  currentUser: {
    id: "u001",
    name: "Arjun Reddy",
    initials: "AR",
    email: "arjun.reddy@university.edu",
    college: "Andhra University",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80",
    joined: "Jan 2024",
    rating: 4.8,
    reviews: 12,
    listings: 5,
    sold: 23,
    wallet: 1250.00
  },

  listings: [
    {
      id:"l001", title:"Engineering Mathematics Vol.2", category:"textbooks",
      price:280, original:650, seller:"Priya K.", sellerId:"u002", college:"JNTU Kakinada",
      condition:"Good",
      image:"https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=400&q=80",
      views:145, saved:23, badge:"Hot Deal",
      desc:"Covers calculus, linear algebra, differential equations. Minimal highlighting. 3rd edition.", posted:"2 days ago"
    },
    {
      id:"l002", title:"Data Structures & Algorithms", category:"textbooks",
      price:350, original:800, seller:"Rahul M.", sellerId:"u003", college:"Andhra University",
      condition:"Like New",
      image:"https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&q=80",
      views:98, saved:18, badge:"Like New",
      desc:"Cormen's CLRS. Almost untouched, bought last sem but switched branch.", posted:"1 day ago"
    },
    {
      id:"l003", title:"Python Tutoring — Beginner to Intermediate", category:"tutoring",
      price:200, original:null, seller:"Sneha T.", sellerId:"u004", college:"VITU Vizag",
      condition:null,
      image:"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&q=80",
      views:201, saved:41, badge:"Top Rated",
      desc:"1-on-1 sessions, 1hr each. Covers basics to web scraping. 20+ students tutored.", posted:"3 days ago"
    },
    {
      id:"l004", title:"Campus Event Photography", category:"gigs",
      price:1500, original:null, seller:"Kiran P.", sellerId:"u005", college:"BVC Engineering",
      condition:null,
      image:"https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=400&q=80",
      views:87, saved:15, badge:"Gig",
      desc:"Professional DSLR shoot for college fests, symposiums, farewell events. Delivery in 48hrs.", posted:"5 days ago"
    },
    {
      id:"l005", title:"Physics Practical Lab Manual", category:"textbooks",
      price:120, original:250, seller:"Divya S.", sellerId:"u006", college:"Andhra University",
      condition:"Acceptable",
      image:"https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80",
      views:63, saved:9, badge:null,
      desc:"Full lab manual with completed observations. Very useful for reference.", posted:"1 week ago"
    },
    {
      id:"l006", title:"Organic Chemistry (Morrison Boyd)", category:"textbooks",
      price:420, original:950, seller:"Vikram R.", sellerId:"u007", college:"GITAM Vizag",
      condition:"Good",
      image:"https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&q=80",
      views:134, saved:27, badge:"Hot Deal",
      desc:"Classic reference. Some pages underlined in pencil. Cover slightly worn.", posted:"4 days ago"
    },
    {
      id:"l007", title:"Machine Learning — Coursework Help", category:"tutoring",
      price:300, original:null, seller:"Ananya V.", sellerId:"u008", college:"IIT Tirupati",
      condition:null,
      image:"https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&q=80",
      views:312, saved:58, badge:"IIT Tutor",
      desc:"PhD scholar. Covers ML fundamentals, sklearn, TensorFlow. Project help available.", posted:"2 days ago"
    },
    {
      id:"l008", title:"Graphic Design for Fest Posters", category:"gigs",
      price:800, original:null, seller:"Rohan D.", sellerId:"u009", college:"VIGNAN University",
      condition:null,
      image:"https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&q=80",
      views:76, saved:20, badge:"Gig",
      desc:"Canva & Illustrator designs. 2-day delivery. Unlimited revisions. 40+ designs made.", posted:"1 week ago"
    },
    {
      id:"l009", title:"Engineering Drawing Instruments Set", category:"supplies",
      price:180, original:400, seller:"Meera G.", sellerId:"u010", college:"JNTU Kakinada",
      condition:"Good",
      image:"https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&q=80",
      views:55, saved:11, badge:null,
      desc:"Full Staedtler set. Compass, drafter, scale — all intact. Selling as switching branch.", posted:"3 days ago"
    },
    {
      id:"l010", title:"Video Editing for College Projects", category:"gigs",
      price:600, original:null, seller:"Aditya K.", sellerId:"u011", college:"Andhra University",
      condition:null,
      image:"https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&q=80",
      views:143, saved:32, badge:"Popular",
      desc:"Premiere Pro + After Effects. Short films, documentary edits, title sequences.", posted:"6 days ago"
    },
    {
      id:"l011", title:"Calculus — A Complete Course (8th Ed)", category:"textbooks",
      price:320, original:750, seller:"Nisha P.", sellerId:"u012", college:"VR Siddhartha",
      condition:"Like New",
      image:"https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&q=80",
      views:89, saved:14, badge:"Like New",
      desc:"Adams & Essex. Clean copy, no annotations. Selling because finished course.", posted:"2 days ago"
    },
    {
      id:"l012", title:"Freelance Content Writing", category:"gigs",
      price:400, original:null, seller:"Teja R.", sellerId:"u013", college:"Andhra University",
      condition:null,
      image:"https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&q=80",
      views:67, saved:18, badge:"Gig",
      desc:"Blog posts, research reports, tech articles. 1000 words min. SEO-aware writing.", posted:"4 days ago"
    }
  ],

  cart: JSON.parse(localStorage.getItem('cc_cart') || '[]'),
  wishlist: JSON.parse(localStorage.getItem('cc_wishlist') || '[]'),

  messages: [
    { id:"m001", from:"Priya K.", fromId:"u002", initials:"PK", preview:"Hey! Is the Maths book still available?", time:"2h ago", unread:true, listing:"Engineering Mathematics Vol.2", avatar:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80" },
    { id:"m002", from:"Vikram R.", fromId:"u007", initials:"VR", preview:"Can you do ₹380 for the Organic Chem?", time:"5h ago", unread:true, listing:"Organic Chemistry", avatar:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80" },
    { id:"m003", from:"Ananya V.", fromId:"u008", initials:"AV", preview:"Session booked for Saturday 4PM ✓", time:"1d ago", unread:false, listing:"ML Tutoring", avatar:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80" },
    { id:"m004", from:"Kiran P.", fromId:"u005", initials:"KP", preview:"Photos delivered to your Drive 📸", time:"2d ago", unread:false, listing:"Event Photography", avatar:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80" }
  ],

  reviews: [
    { id:"r001", from:"Rahul M.", initials:"RM", rating:5, text:"Super fast delivery, book was exactly as described. Great seller!", listing:"Engineering Maths", date:"Mar 2025" },
    { id:"r002", from:"Sneha T.", initials:"ST", rating:5, text:"Arjun was very responsive and the item was in perfect condition.", listing:"Lab Manual", date:"Feb 2025" },
    { id:"r003", from:"Kiran P.", initials:"KP", rating:4, text:"Good overall. Slight delay in response but item was great value.", listing:"Python Notes", date:"Jan 2025" }
  ],

  orders: [
    { id:"o001", item:"Data Structures & Algorithms", seller:"Rahul M.", price:350, status:"Delivered", date:"Mar 15, 2025", image:"https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=80&q=80" },
    { id:"o002", item:"Python Tutoring Session", seller:"Sneha T.", price:200, status:"Completed", date:"Mar 10, 2025", image:"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=80&q=80" },
    { id:"o003", item:"Event Photography", seller:"Kiran P.", price:1500, status:"In Progress", date:"Mar 20, 2025", image:"https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=80&q=80" }
  ],

  colleges: ["Andhra University","JNTU Kakinada","GITAM Vizag","VITU Vizag","BVC Engineering","VR Siddhartha","VIGNAN University","IIT Tirupati","NIT Warangal","RGUKT"],

  categories: [
    { id:"all", label:"All", icon:"🏷️" },
    { id:"textbooks", label:"Textbooks", icon:"📚" },
    { id:"tutoring", label:"Tutoring", icon:"🎓" },
    { id:"gigs", label:"Gigs", icon:"💼" },
    { id:"supplies", label:"Supplies", icon:"📐" }
  ],

  saveCart() { localStorage.setItem('cc_cart', JSON.stringify(this.cart)); },
  saveWishlist() { localStorage.setItem('cc_wishlist', JSON.stringify(this.wishlist)); },

  addToCart(listingId) {
    if (!this.cart.find(i => i.id === listingId)) {
      const item = this.listings.find(l => l.id === listingId);
      if (item) { this.cart.push({ id: listingId, qty: 1, addedAt: new Date().toISOString() }); this.saveCart(); return true; }
    }
    return false;
  },

  toggleWishlist(listingId) {
    const idx = this.wishlist.indexOf(listingId);
    if (idx === -1) this.wishlist.push(listingId);
    else this.wishlist.splice(idx, 1);
    this.saveWishlist();
    return this.wishlist.includes(listingId);
  },

  getCartItems() {
    return this.cart.map(c => {
      const l = this.listings.find(x => x.id === c.id);
      return l ? { ...l, qty: c.qty } : null;
    }).filter(Boolean);
  },

  getCartTotal() {
    return this.getCartItems().reduce((sum, i) => sum + i.price * i.qty, 0);
  },

  getUnreadCount() { return this.messages.filter(m => m.unread).length; }
};

window.CC_DB = CC_DB;
