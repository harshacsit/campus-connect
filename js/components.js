
// ============================================
// CampusConnect — Shared UI Components v2
// ============================================

function renderNavbar(activePage = '') {
  const unread = CC_DB.getUnreadCount();
  const cartCount = CC_DB.cart.length;
  document.getElementById('cc-navbar').innerHTML = `
  <nav class="navbar navbar-expand-lg cc-nav">
    <div class="container-fluid">
      <a class="navbar-brand" href="../index.html">
        Campus<span class="dot">Connect</span>
      </a>
      <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#ccNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="ccNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-3 gap-1">
          <li class="nav-item"><a class="nav-link ${activePage==='browse'?'active':''}" href="../pages/browse.html">Browse</a></li>
          <li class="nav-item"><a class="nav-link ${activePage==='sell'?'active':''}" href="../pages/sell.html">Sell / Post</a></li>
          <li class="nav-item"><a class="nav-link ${activePage==='tutoring'?'active':''}" href="../pages/tutoring.html">Tutoring</a></li>
          <li class="nav-item"><a class="nav-link ${activePage==='gigs'?'active':''}" href="../pages/gigs.html">Gigs</a></li>
          <li class="nav-item"><a class="nav-link ${activePage==='messages'?'active':''}" href="../pages/messages.html">Messages ${unread>0?`<span class="nav-badge">${unread}</span>`:''}</a></li>
        </ul>
        <div class="d-flex align-items-center gap-2">
          <a href="../pages/browse.html" class="nav-link" title="Browse"><i class="bi bi-search"></i></a>
          <a href="../pages/wishlist.html" class="nav-link" title="Wishlist"><i class="bi bi-heart"></i></a>
          <a href="../pages/cart.html" class="nav-link position-relative" title="Cart">
            <i class="bi bi-bag"></i>
            ${cartCount>0?`<span style="position:absolute;top:-3px;right:-3px;background:var(--primary);color:#fff;font-size:.55rem;width:15px;height:15px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700">${cartCount}</span>`:''}
          </a>
          <a href="../pages/profile.html" class="ms-1">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80"
              style="width:32px;height:32px;border-radius:50%;object-fit:cover;border:2px solid var(--border)"
              onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
              alt="Profile" />
            <div class="avatar" style="display:none">AR</div>
          </a>
        </div>
      </div>
    </div>
  </nav>`;
}

function renderFooter() {
  document.getElementById('cc-footer').innerHTML = `
  <footer class="cc-footer">
    <div class="container">
      <div class="row g-4">
        <div class="col-lg-4">
          <div class="footer-brand">Campus<span>Connect</span></div>
          <p style="font-size:.875rem;max-width:280px;margin-bottom:1rem;line-height:1.65">The peer-to-peer campus marketplace. Buy, sell, tutor, and gig — all within your college community.</p>
          <div class="d-flex gap-3">
            <a href="#" class="footer-link" style="font-size:1rem"><i class="bi bi-instagram"></i></a>
            <a href="#" class="footer-link" style="font-size:1rem"><i class="bi bi-twitter-x"></i></a>
            <a href="#" class="footer-link" style="font-size:1rem"><i class="bi bi-linkedin"></i></a>
          </div>
        </div>
        <div class="col-6 col-lg-2">
          <div class="footer-head">Marketplace</div>
          <a href="pages/browse.html" class="footer-link">Browse All</a>
          <a href="pages/sell.html" class="footer-link">Sell Item</a>
          <a href="pages/tutoring.html" class="footer-link">Tutoring</a>
          <a href="pages/gigs.html" class="footer-link">Gigs</a>
        </div>
        <div class="col-6 col-lg-2">
          <div class="footer-head">Account</div>
          <a href="pages/profile.html" class="footer-link">Profile</a>
          <a href="pages/orders.html" class="footer-link">My Orders</a>
          <a href="pages/messages.html" class="footer-link">Messages</a>
          <a href="pages/wishlist.html" class="footer-link">Wishlist</a>
        </div>
        <div class="col-6 col-lg-2">
          <div class="footer-head">Support</div>
          <a href="#" class="footer-link">Help Center</a>
          <a href="#" class="footer-link">Safety Tips</a>
          <a href="#" class="footer-link">Report Issue</a>
        </div>
        <div class="col-6 col-lg-2">
          <div class="footer-head">Legal</div>
          <a href="#" class="footer-link">Terms of Use</a>
          <a href="#" class="footer-link">Privacy Policy</a>
          <a href="#" class="footer-link">Cookie Policy</a>
        </div>
      </div>
      <div class="footer-bottom d-flex justify-content-between flex-wrap gap-2">
        <span>© 2025 CampusConnect. Made for students, by students.</span>
        <span>Available across Andhra Pradesh & Telangana</span>
      </div>
    </div>
  </footer>`;
}

function showToast(msg, icon = '✅') {
  let t = document.getElementById('cc-toast');
  if (!t) { t = document.createElement('div'); t.id = 'cc-toast'; t.className = 'cc-toast'; document.body.appendChild(t); }
  t.innerHTML = `<span>${icon}</span><span>${msg}</span>`;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

function renderListingCard(l) {
  const inWishlist = CC_DB.wishlist.includes(l.id);
  const badgeClass = l.badge === 'Top Rated' || l.badge === 'IIT Tutor' ? 'green' : l.badge === 'Like New' ? 'yellow' : '';
  return `
  <div class="cc-card h-100">
    <div class="card-img-wrap">
      <img src="${l.image}" alt="${l.title}"
        onerror="this.parentElement.innerHTML='<div style=\\'width:100%;height:100%;background:#f1f5f9;display:flex;align-items:center;justify-content:center;font-size:2.5rem\\'>${l.category==='textbooks'?'📚':l.category==='tutoring'?'🎓':l.category==='gigs'?'💼':'📐'}</div>'" />
      ${l.badge ? `<span class="card-badge ${badgeClass}">${l.badge}</span>` : ''}
      <button onclick="toggleWish('${l.id}', this)"
        style="position:absolute;top:10px;right:10px;background:white;border:none;width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,.12);font-size:.9rem;transition:transform .18s"
        title="Wishlist">${inWishlist ? '❤️' : '🤍'}</button>
    </div>
    <div class="cc-card-body">
      <div class="d-flex align-items-center gap-2 mb-1">
        <span class="chip ${l.category==='tutoring'?'green':l.category==='gigs'?'yellow':''}">${l.category}</span>
        ${l.condition ? `<span style="font-size:.7rem;color:var(--text-muted)">${l.condition}</span>` : ''}
      </div>
      <div class="cc-card-title">${l.title}</div>
      <div class="cc-card-meta">By ${l.seller} · ${l.college}</div>
      <div class="cc-card-meta" style="margin-bottom:.6rem">
        <i class="bi bi-eye" style="font-size:.7rem"></i> ${l.views} &nbsp;
        <i class="bi bi-bookmark" style="font-size:.7rem"></i> ${l.saved} saved · ${l.posted}
      </div>
      <div class="d-flex align-items-center justify-content-between">
        <div class="cc-card-price">₹${l.price.toLocaleString('en-IN')}${l.original ? `<span class="orig">₹${l.original.toLocaleString('en-IN')}</span>` : ''}</div>
        <button class="btn-cc" style="padding:.35rem .8rem;font-size:.78rem" onclick="addCart('${l.id}')">
          <i class="bi bi-bag-plus"></i> Add
        </button>
      </div>
    </div>
  </div>`;
}

function toggleWish(id, btn) {
  const isNow = CC_DB.toggleWishlist(id);
  btn.textContent = isNow ? '❤️' : '🤍';
  btn.style.transform = 'scale(1.3)';
  setTimeout(() => btn.style.transform = 'scale(1)', 200);
  showToast(isNow ? 'Added to wishlist!' : 'Removed from wishlist', isNow ? '❤️' : '🤍');
}

function addCart(id) {
  const added = CC_DB.addToCart(id);
  showToast(added ? 'Added to cart!' : 'Already in cart', added ? '🛒' : 'ℹ️');
}

window.renderNavbar = renderNavbar;
window.renderFooter = renderFooter;
window.showToast = showToast;
window.renderListingCard = renderListingCard;
window.toggleWish = toggleWish;
window.addCart = addCart;
