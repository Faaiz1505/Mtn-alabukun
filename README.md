# MTN Alabukun — Website

A plain HTML/CSS/JavaScript storefront for MTN Alabukun (Ikorodu, Lagos). No frameworks, no build step — open `index.html` in a browser, or upload the folder as-is to any static host.

## Project structure

```
mtn-alabukun/
├── index.html          → all page markup/sections
├── css/style.css        → design tokens + all styling
├── js/script.js         → config, product data, all interactivity
├── assets/
│   ├── images/          → general site images (hero, OG cover, etc.)
│   ├── products/         → product photography
│   ├── icons/            → any custom icons
│   └── logo/              → logo files
└── README.md
```

## What to edit, and where

### 1. Business details — `js/script.js`, `SITE_CONFIG` object (top of file)
Phone, WhatsApp number, email, address and Google Maps link all live here in one place. Change them once and every button/link on the site updates.

### 2. Products — `js/script.js`, `products` array
Each product is one JavaScript object. To change a price, availability, description or specs, edit that product's fields directly — look for the `UPDATE PRODUCT PRICES AND AVAILABILITY HERE` comment. Set `available: false` to automatically show "Out of Stock" and hide the order button. Set `featured: true` to include a product in the homepage carousel.

**Starting prices/specs are placeholders** pulled from public retail listings as a reference point only — MTN's own pricing and stock change frequently. Confirm every figure with the client before publishing, and keep this file updated afterward.

### 3. Services — `js/script.js`, `SERVICES` array
Add, remove or reword services offered at the centre.

### 4. FAQ — `js/script.js`, `FAQS` array
Add or edit question/answer pairs; the accordion renders automatically.

### 5. Images
Product cards currently use Font Awesome icons as placeholder visuals (`icon` field on each product) so the site works immediately without needing licensed photography. To switch to real photos:
1. Add the image file to `assets/products/`.
2. Set `image: "assets/products/your-file.jpg"` on the product.
3. Update the corresponding render logic in `script.js` (`renderProducts`, `renderCarousel`, `openProductModal`) to use an `<img>` tag when `image` is set — this keeps the icon as an automatic fallback for products without a photo yet.

### 6. Theme
The site loads in dark mode by default. Visitors can switch to light mode with the toggle in the navbar; their choice is remembered via `localStorage`.

### 7. Map
No Google Maps API key is used or required. The location section shows a styled placeholder card with a "View on Google Maps" button linking directly to the provided Maps URL.

## Notes

- All ordering and service booking happens via pre-filled WhatsApp messages — there is no backend or payment gateway.
- The site does not collect NIN, passwords, banking or card details.
- Update the footer disclaimer if pricing/availability policies change.
