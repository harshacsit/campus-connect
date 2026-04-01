// ============================================
// CampusConnect — Shared Data Store (db.js)
// Simulates a real backend database.
// In production: replace fetch calls with
// GET /api/listings, POST /api/cart, etc.
// ============================================

const CC_DB = {

  currentUser: {
    id: "u001",
    name: "Arjun Reddy",
    initials: "AR",
    email: "arjun.reddy@university.edu",
    college: "Andhra University",
    avatar: null,
    joined: "Jan 2024",
    rating: 4.8,
    reviews: 12,
    listings: 5,
    sold: 23,
    wallet: 1250.00
  },

  listings: [
    { id:"l001", title:"Engineering Mathematics Vol.2", category:"textbooks", price:280, original:650, seller:"Priya K.", sellerId:"u002", college:"JNTU Kakinada", condition:"Good", image:"📚", views:145, saved:23, badge:"Hot Deal", desc:"Covers calculus, linear algebra, differential equations. Minimal highlighting. 3rd edition.", posted:"2 days ago" },
    { id:"l002", title:"Data Structures & Algorithms", category:"textbooks", price:350, original:800, seller:"Rahul M.", sellerId:"u003", college:"Andhra University", condition:"Like New", image:"📖", views:98, saved:18, badge:"Like New", desc:"Cormen's CLRS. Almost untouched, bought last sem but switched branch.", posted:"1 day ago" },
    { id:"l003", title:"Python Tutoring — Beginner to Intermediate", category:"tutoring", price:200, original:null, seller:"Sneha T.", sellerId:"u004", college:"VITU Vizag", condition:null, image:"🐍", views:201, saved:41, badge:"Top Rated", desc:"1-on-1 sessions, 1hr each. Covers basics to web scraping. 20+ students tutored.", posted:"3 days ago" },
    { id:"l004", title:"Campus Event Photography", category:"gigs", price:1500, original:null, seller:"Kiran P.", sellerId:"u005", college:"BVC Engineering", condition:null, image:"📷", views:87, saved:15, badge:"Gig", desc:"Professional DSLR shoot for college fests, symposiums, farewell events. Delivery in 48hrs.", posted:"5 days ago" },
    { id:"l005", title:"Physics Practical Lab Manual", category:"textbooks", price:120, original:250, seller:"Divya S.", sellerId:"u006", college:"Andhra University", condition:"Acceptable", image:"🔬", views:63, saved:9, badge:null, desc:"Full lab manual with completed observations. Very useful for reference.", posted:"1 week ago" },
    { id:"l006", title:"Organic Chemistry (Morrison Boyd)", category:"textbooks", price:420, original:950, seller:"Vikram R.", sellerId:"u007", college:"GITAM Vizag", condition:"Good", image:"⚗️", views:134, saved:27, badge:"Hot Deal", desc:"Classic reference. Some pages underlined in pencil. Cover slightly worn.", posted:"4 days ago" },
    { id:"l007", title:"Machine Learning — Coursework Help", category:"tutoring", price:300, original:null, seller:"Ananya V.", sellerId:"u008", college:"IIT Tirupati", condition:null, image:"🤖", views:312, saved:58, badge:"IIT Tutor", desc:"PhD scholar. Covers ML fundamentals, sklearn, TensorFlow. Project help available.", posted:"2 days ago" },
    { id:"l008", title:"Graphic Design for Fest Posters", category:"gigs", price:800, original:null, seller:"Rohan D.", sellerId:"u009", college:"VIGNAN University", condition:null, image:"🎨", views:76, saved:20, badge:"Gig", desc:"Canva & Illustrator designs. 2-day delivery. Unlimited revisions. 40+ designs made.", posted:"1 week ago" },
    { id:"l009", title:"Engineering Drawing Instruments Set", category:"supplies", price:180, original:400, seller:"Meera G.", sellerId:"u010", college:"JNTU Kakinada", condition:"Good", image:"📐", views:55, saved:11, badge:null, desc:"Full Staedtler set. Compass, drafter, scale — all intact. Selling as switching branch.", posted:"3 days ago" },
    { id:"l010", title:"Video Editing for College Projects", category:"gigs", price:600, original:null, seller:"Aditya K.", sellerId:"u011", college:"Andhra University", condition:null, image:"🎬", views:143, saved:32, badge:"Popular", desc:"Premiere Pro + After Effects. Short films, documentary edits, title sequences.", posted:"6 days ago" },
    { id:"l011", title:"Calculus — A Complete Course (8th Ed)", category:"textbooks", price:320, original:750, seller:"Nisha P.", sellerId:"u012", college:"VR Siddhartha", condition:"Like New", image:"📐", views:89, saved:14, badge:"Like New", desc:"Adams & Essex. Clean copy, no annotations. Selling because finished course.", posted:"2 days ago" },
    { id:"l012", title:"Freelance Content Writing", category:"gigs", price:400, original:null, seller:"Teja R.", sellerId:"u013", college:"Andhra University", condition:null, image:"✍️", views:67, saved:18, badge:"Gig", desc:"Blog posts, research reports, tech articles. 1000 words min. SEO-aware writing.", posted:"4 days ago" }
  ],

  cart: JSON.parse(localStorage.getItem('cc_cart') || '[]'),

  wishlist: JSON.parse(localStorage.getItem('cc_wishlist') || '[]'),

  messages: [
    { id:"m001", from:"Priya K.", fromId:"u002", initials:"PK", preview:"Hey! Is the Maths book still available?", time:"2h ago", unread:true, listing:"Engineering Mathematics Vol.2" },
    { id:"m002", from:"Vikram R.", fromId:"u007", initials:"VR", preview:"Can you do ₹380 for the Organic Chem?", time:"5h ago", unread:true, listing:"Organic Chemistry" },
    { id:"m003", from:"Ananya V.", fromId:"u008", initials:"AV", preview:"Session booked for Saturday 4PM ✓", time:"1d ago", unread:false, listing:"ML Tutoring" },
    { id:"m004", from:"Kiran P.", fromId:"u005", initials:"KP", preview:"Photos delivered to your Drive 📸", time:"2d ago", unread:false, listing:"Event Photography" }
  ],

  reviews: [
    { id:"r001", from:"Rahul M.", initials:"RM", rating:5, text:"Super fast delivery, book was exactly as described. Great seller!", listing:"Engineering Maths", date:"Mar 2025" },
    { id:"r002", from:"Sneha T.", initials:"ST", rating:5, text:"Arjun was very responsive and the item was in perfect condition.", listing:"Lab Manual", date:"Feb 2025" },
    { id:"r003", from:"Kiran P.", initials:"KP", rating:4, text:"Good overall. Slight delay in response but item was great value.", listing:"Python Notes", date:"Jan 2025" }
  ],

  orders: [
    { id:"o001", item:"Data Structures & Algorithms", seller:"Rahul M.", price:350, status:"Delivered", date:"Mar 15, 2025", image:"📖" },
    { id:"o002", item:"Python Tutoring Session", seller:"Sneha T.", price:200, status:"Completed", date:"Mar 10, 2025", image:"🐍" },
    { id:"o003", item:"Event Photography", seller:"Kiran P.", price:1500, status:"In Progress", date:"Mar 20, 2025", image:"📷" }
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
    if (idx === -1) { this.wishlist.push(listingId); }
    else { this.wishlist.splice(idx, 1); }
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