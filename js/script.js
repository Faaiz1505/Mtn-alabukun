/* =========================================================
   MTN Alabukun — script.js
   Everything a non-developer client needs to edit lives in the
   two blocks below: SITE_CONFIG and PRODUCTS.
   ========================================================= */

/* ---------------------------------------------------------
   1. SITE CONFIGURATION — edit business details here
   --------------------------------------------------------- */
const SITE_CONFIG = {
  businessName: "MTN Alabukun",
  phone: "08061566689", // Displayed phone number
  phoneIntl: "+2348061566689", // Used for tel: links
  whatsapp: "2349049282880", // WhatsApp number — international format, no leading +
  email: "", // TODO: replace with client's official email
  address: "9, Alabukun Plaza, Opp BRT Terminal Ikorodu Garage, Lagos State",
  mapsUrl: "https://maps.app.goo.gl/NjvF2BPSTPkiMBgH7",
};

function waLink(message) {
  return `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
}

/* ---------------------------------------------------------
   2. SERVICES — edit / add / remove services here
   --------------------------------------------------------- */
const SERVICES = [
  {
    id: "sim-reg",
    name: "SIM Registration",
    icon: "fa-solid fa-sim-card",
    desc: "Register a new MTN SIM card quickly and correctly.",
  },
  {
    id: "sim-swap",
    name: "SIM Swap",
    icon: "fa-solid fa-arrow-right-arrow-left",
    desc: "Replace a lost, damaged or upgraded SIM (eligibility applies).",
  },
  {
    id: "esim",
    name: "eSIM",
    icon: "fa-solid fa-qrcode",
    desc: "Get help activating an MTN eSIM on supported devices.",
  },
  {
    id: "plastic-nin",
    name: "Plastic NIN",
    icon: "fa-solid fa-id-card",
    desc: "Get your NIN printed on a durable plastic card for convenient identification.",
  },
  {
    id: "broadband",
    name: "MTN Broadband",
    icon: "fa-solid fa-tower-broadcast",
    desc: "Get connected with MTN's broadband internet products.",
  },
  {
    id: "routers",
    name: "MTN Routers",
    icon: "fa-solid fa-wifi",
    desc: "4G and 5G routers for home and office connectivity.",
  },
  {
    id: "mifi",
    name: "MiFi",
    icon: "fa-solid fa-signal",
    desc: "Portable MTN MiFi devices for internet on the go.",
  },
  {
    id: "phones",
    name: "Samsung A Series Phones",
    icon: "fa-solid fa-mobile-screen",
    desc: "Selected Samsung Galaxy A Series smartphones in stock.",
  },
];

/* ---------------------------------------------------------
   3. PRODUCTS
   ---------------------------------------------------------
   UPDATE PRODUCT PRICES AND AVAILABILITY HERE.
   Starting prices below are drawn from publicly reported MTN
   Nigeria / retail listings as a starting point only — MTN
   prices and stock change often. CONFIRM every price and
   specification with the client before publishing, then keep
   this array updated. Set available:false to hide the "Order"
   button and show "Out of Stock" instead.
   icon = Font Awesome class used as a placeholder visual.
   Replace with real product photography in assets/products/
   and swap "image" for the file path when ready.
   --------------------------------------------------------- */
const products = [
  {
    id: 1,
    name: "MTN 4G Router (30GB Bonus)",
    category: "router",
    price: 25000,
    image: "assets/4g-router 2.webp",
    icon: "fa-solid fa-signal",
    description:
      "MTN 4G LTE home router with a 30GB bonus, designed for reliable everyday internet access at home or in a small office.",
    specifications: [
      "Network: 4G LTE",
      "Wi-Fi: Single-band",
      "Use case: Home / small office",
      "Power: Mains-powered",
      "Bonus: 30GB",
    ],
    rating: 3.9,
    reviewCount: 98,
    available: true,
    featured: true,
  },

  {
    id: 2,
    name: "MTN 4G Universal Router (30GB)",
    category: "router",
    price: 35000,
    image: "assets/4g-router.webp",
    icon: "fa-solid fa-wifi",
    description:
      "MTN 4G Universal Router offering dependable wireless connectivity for homes, offices and multiple connected devices, with a 30GB bonus.",
    specifications: [
      "Network: 4G LTE",
      "Wi-Fi: Single-band",
      "Use case: Home / office",
      "Power: Mains-powered",
      "Bonus: 30GB",
    ],
    rating: 3.7,
    reviewCount: 100,
    available: true,
    featured: true,
  },

  {
    id: 3,
    name: "MTN 4G MiFi (30GB Bonus)",
    category: "mifi",
    price: 17000,
    image: "assets/m80plus-mtn_1.png",
    icon: "fa-solid fa-wifi",
    description:
      "Portable MTN 4G MiFi with a 30GB bonus, perfect for staying connected while travelling, studying or working on the go.",
    specifications: [
      "Network: 4G LTE",
      "Connectivity: Portable Wi-Fi",
      "Use case: Travel / study / work",
      "Battery: Built-in rechargeable battery",
      "Bonus: 30GB",
    ],
    rating: 3.8,
    reviewCount: 97,
    available: true,
    featured: true,
  },

  {
    id: 4,
    name: "MTN Universal MiFi (30GB Bonus)",
    category: "mifi",
    price: 20000,
    image: "assets/4g-universal.jpg",
    icon: "fa-solid fa-wifi",
    description:
      "Portable MTN Universal MiFi designed to provide convenient 4G internet access across multiple devices, with a 30GB bonus.",
    specifications: [
      "Network: 4G LTE",
      "Connectivity: Portable Wi-Fi",
      "Use case: Personal / travel",
      "Battery: Built-in rechargeable battery",
      "Bonus: 30GB",
    ],
    rating: 3.8,
    reviewCount: 97,
    available: false,
    featured: false,
  },

  {
    id: 5,
    name: "MTN 5G MiFi (120GB Bonus)",
    category: "mifi",
    price: 75000,
    image: "assets/5g-mifi.webp",
    icon: "fa-solid fa-signal",
    description:
      "Portable MTN 5G MiFi built for high-speed internet access on the go, with 4G fallback support and a 120GB bonus.",
    specifications: [
      "Network: 5G / 4G",
      "Connectivity: Portable Wi-Fi",
      "Connects: Multiple devices",
      "Feature: NFC quick connect",
      "Bonus: 120GB",
    ],
    rating: 4.3,
    reviewCount: 76,
    available: true,
    featured: true,
  },

  {
    id: 6,
    name: "MTN 5G Router (Unlimited Data)",
    category: "router",
    price: 85000,
    image: "assets/5g-router.webp",
    icon: "fa-solid fa-tower-broadcast",
    description:
      "High-speed MTN 5G home broadband router designed for demanding households and offices that need fast and reliable connectivity.",
    specifications: [
      "Network: 5G / 4G fallback",
      "Wi-Fi: Dual-band",
      "Use case: Home / office",
      "Power: Mains-powered",
      "Plan: Unlimited data",
    ],
    rating: 4.5,
    reviewCount: 84,
    available: true,
    featured: true,
  },

  {
    id: 7,
    name: "ODU Router (5G Unlimited Data)",
    category: "router",
    price: 40000,
    image: "assets/mtn-5g-odu.jpeg",
    icon: "fa-solid fa-tower-broadcast",
    description:
      "MTN 5G ODU router designed to deliver high-speed broadband connectivity for homes and offices, with outdoor installation for improved signal reception.",
    specifications: [
      "Network: 5G / 4G",
      "Installation: Outdoor unit",
      "Use case: Home / office",
      "Connectivity: High-speed broadband",
      "Plan: Unlimited data",
    ],
    rating: 4.1,
    reviewCount: 63,
    available: true,
    featured: true,
  },

  {
    id: 8,
    name: "Samsung Galaxy A06",
    category: "smartphone",
    price: 150000,
    image: "assets/samsung_ao6.webp",
    icon: "fa-solid fa-mobile-screen",
    description:
      "Samsung Galaxy A06 is an affordable everyday smartphone with a large display, long-lasting battery and dependable performance for calls, social media, browsing and entertainment.",
    specifications: [
      'Display: 6.7" HD+ PLS LCD',
      "Refresh rate: 60Hz",
      "Battery: 5,000mAh",
      "Charging: 25W fast charging",
      "Storage: 64GB",
      "Network: 4G LTE",
    ],
    rating: 4.2,
    reviewCount: 112,
    available: true,
    featured: false,
  },

  {
    id: 9,
    name: "Samsung Galaxy A07",
    category: "smartphone",
    price: 177000,
    image: "assets/samsung_a07.webp",
    icon: "fa-solid fa-mobile-screen",
    description:
      "Samsung Galaxy A07 combines a large smooth display, capable camera system, long-lasting battery and modern Galaxy features for everyday use.",
    specifications: [
      'Display: 6.7" HD+ display',
      "Camera: 50MP main camera",
      "Front camera: 8MP",
      "Battery: 5,000mAh",
      "Charging: 25W",
      "Network: 4G LTE",
    ],
    rating: 4.3,
    reviewCount: 89,
    available: true,
    featured: true,
  },

  {
    id: 10,
    name: "Samsung Galaxy A16 4G",
    category: "smartphone",
    price: 217000,
    image: "assets/samsung_a16.png",
    icon: "fa-solid fa-mobile-screen",
    description:
      "Samsung Galaxy A16 4G delivers a vivid Super AMOLED display, capable performance, long battery life and a durable design for everyday productivity and entertainment.",
    specifications: [
      'Display: 6.7" Super AMOLED',
      "Refresh rate: 90Hz",
      "Battery: 5,000mAh",
      "Charging: 25W fast charging",
      "Storage: 128GB",
      "Network: 4G LTE",
      "Protection: IP54",
    ],
    rating: 4.4,
    reviewCount: 137,
    available: true,
    featured: true,
  },

  {
    id: 11,
    name: "Samsung Galaxy A16 5G",
    category: "smartphone",
    price: 245000,
    image: "assets/samsung_a16_5g.png",
    icon: "fa-solid fa-mobile-screen",
    description:
      "Samsung Galaxy A16 5G combines a vibrant Super AMOLED display, 5G connectivity, dependable battery life and long-term software support in a slim Galaxy design.",
    specifications: [
      'Display: 6.7" Super AMOLED',
      "Refresh rate: 90Hz",
      "Battery: 5,000mAh",
      "Charging: 25W fast charging",
      "Storage: 128GB",
      "Network: 5G / 4G",
      "Protection: IP54",
    ],
    rating: 4.5,
    reviewCount: 121,
    available: true,
    featured: false,
  },

  {
    id: 12,
    name: "Samsung Galaxy A17",
    category: "smartphone",
    price: 253000,
    image: "assets/samsung_a17.png",
    icon: "fa-solid fa-mobile-screen",
    description:
      "Samsung Galaxy A17 offers a premium everyday experience with a vibrant display, capable cameras, strong battery life and modern Galaxy features.",
    specifications: [
      'Display: 6.7" Super AMOLED',
      "Refresh rate: 90Hz",
      "Camera: 50MP main camera",
      "Battery: 5,000mAh",
      "Charging: Fast charging",
      "Storage: 128GB",
      "Network: 5G / 4G",
    ],
    rating: 4.4,
    reviewCount: 94,
    available: true,
    featured: false,
  },
];
/* ---------------------------------------------------------
   4. FAQ CONTENT
   --------------------------------------------------------- */
const FAQS = [
  {
    q: "Where is MTN Alabukun located?",
    a: `We're located at ${SITE_CONFIG.address}.`,
  },
  {
    q: "What time do you open?",
    a: "Monday to Friday, 8:00 AM – 6:00 PM. Saturday, 9:00 AM – 5:00 PM. We are closed on Sundays.",
  },
  {
    q: "Can I order a Broadband device or smartphone from this website?",
    a: 'Yes. Browse our products and tap "Order" to send us a pre-filled WhatsApp message. You can reserve your preferred device online, but you will need to visit our office to complete the required registration and verification before collection or activation.',
  },
  {
    q: "How do I book a service?",
    a: "Use the booking form in the Services section, or message us directly on WhatsApp.",
  },
  {
    q: "How do I contact MTN Alabukun?",
    a: `Call or WhatsApp us on ${SITE_CONFIG.phone}, or visit us during opening hours.`,
  },
];

/* ---------------------------------------------------------
   5. INITIALISATION
   --------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  applyConfigToDOM();
  initTheme();
  initNavbar();
  initHamburger();
  renderServices();
  populateBookingSelect();
  initBookingForm();
  renderCarousel();
  renderProducts();
  initCatalogueControls();
  initPromoCarousel();
  renderFaq();
  initModal();
  initBackToTop();
  initReveal();
  document.getElementById("year").textContent = new Date().getFullYear();
});

/* ---------------------------------------------------------
   6. CONFIG → DOM (contact links, footer, etc.)
   --------------------------------------------------------- */
function applyConfigToDOM() {
  const defaultMsg = `Hello ${SITE_CONFIG.businessName}, I'd like to know more about your products and services.`;
  const wa = waLink(defaultMsg);
  [
    "heroWhatsapp",
    "ctaWhatsapp",
    "floatWhatsapp",
    "fWhatsapp",
    "promoWhatsapp",
  ].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.href = wa;
  });

  const tel = `tel:${SITE_CONFIG.phoneIntl}`;
  ["ctaCall", "fCall"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.href = tel;
  });

  ["ctaDirections", "fMaps", "mapLink"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.href = SITE_CONFIG.mapsUrl;
  });

  document.getElementById("cAddress").textContent = SITE_CONFIG.address;
  document.getElementById("cPhone").textContent = SITE_CONFIG.phone;
  document.getElementById("cEmail").textContent = SITE_CONFIG.email;
  document.getElementById("fPhone").textContent = SITE_CONFIG.phone;
  document.getElementById("fEmail").textContent = SITE_CONFIG.email;
}

/* ---------------------------------------------------------
   7. THEME TOGGLE (defaults to dark, persists via localStorage)
   --------------------------------------------------------- */
function initTheme() {
  const saved = localStorage.getItem("mtn-alabukun-theme");
  const theme = saved === "light" ? "light" : "dark"; // dark by default
  setTheme(theme);

  document.getElementById("themeToggle").addEventListener("click", () => {
    const current = document.body.classList.contains("theme-dark")
      ? "dark"
      : "light";
    setTheme(current === "dark" ? "light" : "dark");
  });
}
function setTheme(theme) {
  document.body.classList.toggle("theme-dark", theme === "dark");
  document.body.classList.toggle("theme-light", theme === "light");
  const btn = document.getElementById("themeToggle");
  btn.setAttribute("aria-pressed", theme === "light");
  btn.setAttribute(
    "aria-label",
    theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
  );
  localStorage.setItem("mtn-alabukun-theme", theme);
}

/* ---------------------------------------------------------
   8. NAVBAR SCROLL STATE
   --------------------------------------------------------- */
function initNavbar() {
  const nav = document.getElementById("navbar");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 20);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* ---------------------------------------------------------
   9. MOBILE MENU
   --------------------------------------------------------- */
function initHamburger() {
  const btn = document.getElementById("hamburger");
  const links = document.getElementById("navLinks");
  btn.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    btn.setAttribute("aria-expanded", open);
    btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      links.classList.remove("open");
      btn.setAttribute("aria-expanded", false);
    }),
  );
}

/* ---------------------------------------------------------
   10. SERVICES
   --------------------------------------------------------- */
function renderServices() {
  const grid = document.getElementById("servicesGrid");
  grid.innerHTML = SERVICES.map(
    (s) => `
    <div class="service-card">
      <i class="svc-icon ${s.icon}" aria-hidden="true"></i>
      <h3>${s.name}</h3>
      <p>${s.desc}</p>
      <a class="btn btn-outline" href="${waLink(`Hello ${SITE_CONFIG.businessName}, I'd like to enquire about ${s.name}.`)}" target="_blank" rel="noopener">
        Make Enquiry <i class="fa-brands fa-whatsapp" aria-hidden="true"></i>
      </a>
    </div>
  `,
  ).join("");
}

function populateBookingSelect() {
  const select = document.getElementById("bkService");
  SERVICES.forEach((s) => {
    const opt = document.createElement("option");
    opt.value = s.name;
    opt.textContent = s.name;
    select.appendChild(opt);
  });
}

/* ---------------------------------------------------------
   11. BOOKING FORM → WHATSAPP
   --------------------------------------------------------- */
function initBookingForm() {
  const form = document.getElementById("bookingForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const service = document.getElementById("bkService").value;
    const name = document.getElementById("bkName").value.trim();
    const phone = document.getElementById("bkPhone").value.trim();
    const date = document.getElementById("bkDate").value;
    const time = document.getElementById("bkTime").value;
    const message = document.getElementById("bkMessage").value.trim();

    const text =
      `Hello ${SITE_CONFIG.businessName}, I would like to book/request the following service:\n\n` +
      `Service: ${service}\n` +
      `Name: ${name}\n` +
      `Phone: ${phone}\n` +
      `Preferred date: ${date || "Not specified"}\n` +
      `Preferred time: ${time || "Not specified"}\n` +
      `Additional message: ${message || "None"}`;

    window.open(waLink(text), "_blank", "noopener");
  });
}

/* ---------------------------------------------------------
   12. CAROUSEL (featured products)
   --------------------------------------------------------- */
function renderCarousel() {
  const track = document.getElementById("carouselTrack");
  const dotsWrap = document.getElementById("carouselDots");
  const prevBtn = document.getElementById("carPrev");
  const nextBtn = document.getElementById("carNext");

  const featured = products.filter((p) => p.featured);

  if (!featured.length) {
    track.innerHTML = "";
    dotsWrap.innerHTML = "";
    return;
  }

  // Render carousel slides
  track.innerHTML = featured
    .map(
      (p) => `
      <div class="carousel-slide">
        <div class="thumb" data-product-id="${p.id}" role="button" tabindex="0">
          <img src="${p.image}" alt="${p.name}">
        </div>

        <h4>${p.name}</h4>

        <span class="price">
          ${formatPrice(p.price)}
        </span>
      </div>
    `,
    )
    .join("");

  const thumbs = track.querySelectorAll(".carousel-slide .thumb");
  thumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      const productId = Number(thumb.dataset.productId);
      openProductModal(productId);
    });
  });

  // Render dots
  dotsWrap.innerHTML = featured
    .map(
      (_, i) => `
        <span
          data-i="${i}"
          class="${i === 0 ? "active" : ""}"
          role="button"
          tabindex="0"
          aria-label="Go to slide ${i + 1}"
        ></span>
      `,
    )
    .join("");

  const slides = track.querySelectorAll(".carousel-slide");
  const dots = dotsWrap.querySelectorAll("span");

  let index = 0;
  let autoplay = null;

  // Move ONLY the carousel's horizontal scroll area
  function goTo(i) {
    index = (i + slides.length) % slides.length;

    const slide = slides[index];

    if (!slide) return;

    track.scrollTo({
      left: slide.offsetLeft,
      behavior: "smooth",
    });

    // Update active dot
    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle("active", dotIndex === index);
    });
  }

  // Restart autoplay
  function restartAutoplay() {
    clearInterval(autoplay);

    autoplay = setInterval(() => {
      goTo(index + 1);
    }, 2500);
  }

  // Dot controls
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      goTo(Number(dot.dataset.i));
      restartAutoplay();
    });

    // Keyboard support
    dot.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        goTo(Number(dot.dataset.i));
        restartAutoplay();
      }
    });
  });

  // Previous button
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      goTo(index - 1);
      restartAutoplay();
    });
  }

  // Next button
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      goTo(index + 1);
      restartAutoplay();
    });
  }

  // Pause autoplay when mouse enters
  track.addEventListener("mouseenter", () => {
    clearInterval(autoplay);
  });

  // Resume autoplay when mouse leaves
  track.addEventListener("mouseleave", restartAutoplay);

  // Pause while touching on mobile
  track.addEventListener(
    "touchstart",
    () => {
      clearInterval(autoplay);
    },
    { passive: true },
  );

  // Resume after touching
  track.addEventListener(
    "touchend",
    () => {
      restartAutoplay();
    },
    { passive: true },
  );

  // Start at first slide
  goTo(0);

  // Start autoplay
  restartAutoplay();
}

/* ---------------------------------------------------------
   13. PRODUCT CATALOGUE — render, search, filter, sort
   --------------------------------------------------------- */
let activeFilters = {
  search: "",
  category: "all",
  availability: "all",
  sort: "default",
};

function getFilteredProducts() {
  let list = products.filter((p) => {
    const matchesSearch = p.name
      .toLowerCase()
      .includes(activeFilters.search.toLowerCase());
    const matchesCategory =
      activeFilters.category === "all" || p.category === activeFilters.category;
    const matchesAvailability =
      activeFilters.availability === "all" ||
      (activeFilters.availability === "available" && p.available) ||
      (activeFilters.availability === "out" && !p.available);
    return matchesSearch && matchesCategory && matchesAvailability;
  });

  if (activeFilters.sort === "low")
    list = list.slice().sort((a, b) => a.price - b.price);
  if (activeFilters.sort === "high")
    list = list.slice().sort((a, b) => b.price - a.price);

  return list;
}

function renderProducts() {
  const grid = document.getElementById("productGrid");
  const empty = document.getElementById("noResults");
  const count = document.getElementById("catalogueCount");
  const list = getFilteredProducts();

  count.textContent = `${list.length} product${list.length === 1 ? "" : "s"} found`;
  empty.hidden = list.length !== 0;
  grid.hidden = list.length === 0;

  grid.innerHTML = list
    .map(
      (p) => `
    <div class="product-card">
      <div class="product-thumb" data-product-id="${p.id}" role="button" tabindex="0">
        <span class="badge ${p.available ? "in" : "out"}">${p.available ? "Available" : "Out of Stock"}</span>
        <img src="${p.image}" alt="${p.name}">
      </div>
      <div class="product-body">
        <span class="product-cat">${categoryLabel(p.category)}</span>
        <h3>${p.name}</h3>
        <p class="product-rating">${ratingLabel(p)}</p>
        <span class="product-price">${formatPrice(p.price)}</span>
        <div class="product-actions">
          <button class="btn btn-view" data-view="${p.id}">View Details</button>
          ${
            p.available
              ? `<a class="btn btn-primary" href="${orderLink(p)}" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i> Order</a>`
              : `<button class="btn btn-outline" disabled>Out of Stock</button>`
          }
        </div>
      </div>
    </div>
  `,
    )
    .join("");

  const productThumbs = grid.querySelectorAll(".product-card .product-thumb");
  productThumbs.forEach((productThumb) => {
    productThumb.addEventListener("click", () => {
      const productId = Number(productThumb.dataset.productId);
      openProductModal(productId);
    });
  });

  grid.querySelectorAll("[data-view]").forEach((btn) => {
    btn.addEventListener("click", () => openProductModal(+btn.dataset.view));
  });
}

function categoryLabel(cat) {
  return (
    {
      broadband: "Broadband",
      mifi: "MiFi",
      router: "Router",
      smartphone: "Smartphone",
    }[cat] || cat
  );
}
function ratingLabel(p) {
  if (!p.rating) return "No reviews yet";
  return `<span class="stars">${"★".repeat(Math.round(p.rating))}${"☆".repeat(5 - Math.round(p.rating))}</span> (${p.reviewCount})`;
}
function formatPrice(n) {
  return "₦" + n.toLocaleString("en-NG");
}
function orderLink(p) {
  const text =
    `Hello ${SITE_CONFIG.businessName}, I would like to order:\n\n` +
    `Product: ${p.name}\nPrice: ${formatPrice(p.price)}\n\n` +
    `Please confirm availability and the next steps.`;
  return waLink(text);
}

function initCatalogueControls() {
  document.getElementById("productSearch").addEventListener("input", (e) => {
    activeFilters.search = e.target.value;
    renderProducts();
  });
  document.getElementById("categoryFilter").addEventListener("change", (e) => {
    activeFilters.category = e.target.value;
    renderProducts();
  });
  document
    .getElementById("availabilityFilter")
    .addEventListener("change", (e) => {
      activeFilters.availability = e.target.value;
      renderProducts();
    });
  document.getElementById("sortFilter").addEventListener("change", (e) => {
    activeFilters.sort = e.target.value;
    renderProducts();
  });
}

/* ---------------------------------------------------------
   14. PRODUCT DETAIL MODAL
   --------------------------------------------------------- */
function initModal() {
  const overlay = document.getElementById("productModal");
  const closeBtn = document.getElementById("modalClose");
  closeBtn.addEventListener("click", closeProductModal);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeProductModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !overlay.hidden) closeProductModal();
  });
}

function openProductModal(id) {
  const p = products.find((x) => x.id === id);
  if (!p) return;
  const overlay = document.getElementById("productModal");
  const body = document.getElementById("modalBody");

  body.innerHTML = `
    <div class="modal-thumb"><img src="${p.image}" alt="${p.name}"></div>
    <span class="product-cat">${categoryLabel(p.category)}</span>
    <h3 id="modalTitle">${p.name}</h3>
    <div class="modal-price">${formatPrice(p.price)}</div>
    <p>${p.description}</p>
    <ul class="spec-list">
      ${p.specifications
        .map((s) => {
          const [label, ...rest] = s.split(":");
          return `<li><strong>${label}</strong>${rest.join(":").trim()}</li>`;
        })
        .join("")}
    </ul>
    <p class="product-rating">${ratingLabel(p)}</p>
    <div class="modal-actions">
      ${
        p.available
          ? `<a class="btn btn-primary btn-block" href="${orderLink(p)}" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i> Order</a>`
          : `<button class="btn btn-outline btn-block" disabled>Out of Stock</button>`
      }
    </div>
  `;

  overlay.hidden = false;
  requestAnimationFrame(() => overlay.classList.add("show"));
  document.body.style.overflow = "hidden";
}

function closeProductModal() {
  const overlay = document.getElementById("productModal");
  overlay.classList.remove("show");
  document.body.style.overflow = "";
  setTimeout(() => {
    overlay.hidden = true;
  }, 200);
}

/* ---------------------------------------------------------
   15. PROMO CAROUSEL (background images on homepage)
   --------------------------------------------------------- */
function initPromoCarousel() {
  const slides = document.querySelectorAll(".promo-bg");

  if (slides.length <= 1) return;

  let current = 0;

  setInterval(() => {
    slides[current].classList.remove("active");

    current = (current + 1) % slides.length;

    slides[current].classList.add("active");
  }, 3500);
}

/* ---------------------------------------------------------
   15. FAQ ACCORDION
   --------------------------------------------------------- */
function renderFaq() {
  const list = document.getElementById("faqList");
  list.innerHTML = FAQS.map(
    (f, i) => `
    <div class="faq-item" data-open="false">
      <button class="faq-q" id="faqBtn${i}" aria-expanded="false" aria-controls="faqPanel${i}">
        <span>${f.q}</span><i class="fa-solid fa-plus" aria-hidden="true"></i>
      </button>
      <div class="faq-a" id="faqPanel${i}" role="region" aria-labelledby="faqBtn${i}">
        <p>${f.a}</p>
      </div>
    </div>
  `,
  ).join("");

  list.querySelectorAll(".faq-item").forEach((item) => {
    const btn = item.querySelector(".faq-q");
    const panel = item.querySelector(".faq-a");
    btn.addEventListener("click", () => {
      const isOpen = item.dataset.open === "true";
      item.dataset.open = String(!isOpen);
      btn.setAttribute("aria-expanded", String(!isOpen));
      panel.style.maxHeight = isOpen ? null : panel.scrollHeight + "px";
    });
  });
}

/* ---------------------------------------------------------
   16. BACK TO TOP
   --------------------------------------------------------- */
function initBackToTop() {
  const btn = document.getElementById("backToTop");
  window.addEventListener(
    "scroll",
    () => {
      btn.hidden = false;
      btn.classList.toggle("show", window.scrollY > 500);
    },
    { passive: true },
  );
  btn.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" }),
  );
}

/* ---------------------------------------------------------
   17. SCROLL REVEAL (respects prefers-reduced-motion)
   --------------------------------------------------------- */
function initReveal() {
  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const items = document.querySelectorAll("[data-reveal]");
  if (prefersReduced || !("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("in-view"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 },
  );
  items.forEach((el) => observer.observe(el));
}
