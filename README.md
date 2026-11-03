# NAHORA

**One Platform. Every Business. Infinite Possibilities.**

NAHORA is a responsive, Bangladesh-first frontend prototype for a multi-vendor marketplace and its independent customer, merchant, and platform workspaces. It is built with React, TypeScript, and Vite.

> **Prototype notice:** This repository contains frontend-only screens and local demo state. Products, merchants, orders, analytics, courier activity, reviews, and financial figures are illustrative. No orders, payments, messages, campaigns, payouts, integrations, or other real-world actions are submitted or completed.

## Get started

### Requirements

- Node.js 20.19+ or 22.12+
- npm

### Install and run

```bash
npm install
npm run dev
```

Vite prints the local development URL in the terminal.

### Build for production

```bash
npm run build
npm run preview
```

The build command runs the TypeScript project checks and creates the static frontend bundle in `dist/`.

## Frontend stack

- React 18, TypeScript, Vite, React Router
- Tailwind CSS and shared CSS design tokens
- Lucide React icons
- Zustand for local theme, cart, and toast state
- i18next / react-i18next for English and Bengali dictionaries
- React Hook Form and Zod for demo form validation
- TanStack Table for sortable workspace tables
- Recharts for illustrative dashboard charts
- Framer Motion for a subtle landing-page animation

## Project structure

| Path | Purpose |
| --- | --- |
| `src/main.tsx` | React entry point, router and global stylesheet setup |
| `src/App.tsx` | Public, customer, and workspace route declarations |
| `src/pages.tsx` | Marketplace, buyer, and shared workspace page surfaces |
| `src/advanced.tsx` | Merchant operations, customer advanced tools, AI mock workspace, universal search, notification center, and mobile previews |
| `src/components.tsx` | Reusable headers, navigation, product cards, status pills, and shared UI |
| `src/data.ts` | Typed demo products, merchants, table records, and portal navigation |
| `src/store.ts` | Local Zustand state for theme, cart, and toast notifications |
| `src/i18n.ts` | English and Bengali translation dictionaries |
| `src/styles.css` | Design system, light/dark themes, and responsive page styling |
| `tailwind.config.js` | Tailwind theme colors and font configuration |
| `vite.config.ts` | Vite configuration and production chunk splitting |

## Routes and available screens

### Public marketplace

| Route | Screen |
| --- | --- |
| `/` | Marketplace home: categories, product picks, stores, seasonal feature, and newsletter preview |
| `/search` | Product discovery with query, category, price, rating, store, location, and sale filters; sorting, pagination, and grid/list layout |
| `/product/:productId` | Product detail, image gallery, interactive variants, seller preview, wishlist, reviews, and Q&A |
| `/stores` | Independent store directory |
| `/stores/:storeId` | Merchant storefront preview with products, policies, and contact options |
| `/deals` | Deals and campaigns preview |
| `/community` | Community and stories preview |
| `/products` | Redirects to `/search` |

### Customer

| Route | Screen |
| --- | --- |
| `/account` | Customer account hub |
| `/orders` | Demo order list, status filters, and support actions |
| `/wishlist` | Local-state saved products |
| `/inbox` | Buyer/merchant conversation preview |
| `/cart` | Multi-seller demo cart with editable quantities |
| `/checkout` | Validated delivery form and payment preview; no order is submitted |
| `/compare` | Interactive product comparison preview |
| `/collections` | Shopping collections preview |
| `/recently-viewed` | Product history in local app state |
| `/saved-searches` | Saved search preview |
| `/reviews` | Reviews and ratings preview |
| `/questions` | Product Q&A preview |
| `/returns` | Return and replacement request preview |
| `/refunds` | Refund status preview |
| `/warranty` | Warranty claim preview |
| `/complaints` | Buyer complaint/support preview |
| `/rewards` | Membership and rewards preview |
| `/coupons` | Coupon wallet preview |
| `/gift-center` | Gift and store-credit preview |
| `/gift-registry` | Gift registry preview |
| `/referrals` | Referral dashboard preview |
| `/assistant` | Shopping assistant preview |
| `/wholesale` | Wholesale and bulk shopping preview |
| `/nearby` | Nearby stores and local deals preview |
| `/price-alerts` | Price and back-in-stock alert preview |
| `/share` | Social sharing preview |
| `/notifications` | Notification preferences preview |
| `/subscriptions` | Recurring product subscription preview |
| `/pre-orders` | Maker pre-order preview |
| `/group-buying` | Group price threshold preview |
| `/authenticity` | Product authenticity QR preview |
| `/order-tracking` | Sample order tracking timeline |
| `/customer-community` | Customer community preview |
| `/profile` | Editable customer profile preview |
| `/addresses` | Bangladesh address book and local add/edit actions |
| `/followed-stores` | Followed merchant storefronts |
| `/brands` | Favourite brands preview |
| `/accessibility` | Display and accessibility preferences |
| `/privacy-settings` | Privacy preference controls |

### Role workspaces

Each workspace has a role-specific sidebar and header. Overview routes include illustrative metrics, charts, activity, quick actions, and searchable records. Merchant areas include onboarding, product and universal catalog, inventory, order fulfillment, CRM, accounting, store builder, procurement, returns, marketing automation, social commerce, branches/team, subscriptions and data portability. Super Admin also includes risk, system, privacy and audit previews; courier includes bulk booking, agent and dispute views. Other portals retain their dedicated campaign, creator, staff and developer screens. All values and actions are demo-only.

| Workspace | Routes |
| --- | --- |
| Merchant | `/merchant`, `/merchant/onboarding`, `/merchant/products`, `/merchant/catalog`, `/merchant/inventory`, `/merchant/orders`, `/merchant/customers`, `/merchant/accounting`, `/merchant/store-builder`, `/merchant/procurement`, `/merchant/returns`, `/merchant/marketing`, `/merchant/automation`, `/merchant/social`, `/merchant/analytics`, `/merchant/branches`, `/merchant/team`, `/merchant/subscription`, `/merchant/data`, `/merchant/settings` |
| Super Admin | `/admin`, `/admin/merchants`, `/admin/customers`, `/admin/catalog`, `/admin/finance`, `/admin/campaigns`, `/admin/support`, `/admin/risk`, `/admin/governance`, `/admin/system`, `/admin/privacy`, `/admin/audit`, `/admin/analytics` |
| Courier | `/courier`, `/courier/parcels`, `/courier/pickups`, `/courier/bulk-booking`, `/courier/tracking`, `/courier/agents`, `/courier/remittance`, `/courier/disputes`, `/courier/settlements`, `/courier/areas`, `/courier/reports` |
| Advertiser | `/advertiser`, `/advertiser/campaigns`, `/advertiser/create`, `/advertiser/calendar`, `/advertiser/analytics`, `/advertiser/billing`, `/advertiser/profile` |
| Creator & Affiliate | `/creator`, `/creator/partnerships`, `/creator/links`, `/creator/content`, `/creator/earnings`, `/creator/analytics` |
| Staff | `/staff`, `/staff/tasks`, `/staff/support`, `/staff/moderation`, `/staff/disputes`, `/staff/calendar` |
| Developer | `/developer`, `/developer/docs`, `/developer/keys`, `/developer/webhooks`, `/developer/integrations`, `/developer/sandbox`, `/developer/changelog` |

### Learning and help

- `/academy` — Merchant Academy courses and progress preview
- `/help` — Help center preview
- `/privacy` — Privacy and trust information preview
- `/search/all` — local universal search for products, stores, customers, orders and workspace pages
- `/ai` — reviewable AI-themed mock suggestions
- `/notifications-center` — category-filtered demo notifications and read state
- `/mobile-preview` — install prompt and offline-state UI previews (not actual PWA/offline functionality)

## Shared interactions

- **Language:** use the header language button to switch English/Bengali. Document language and text direction follow the selected locale; product names remain as supplied in the product data, with Bengali names used where a translation is provided.
- **Language preference:** the selected locale is stored locally in the browser and restored on reload. Translation coverage is strongest in shared navigation and common interface labels; some content remains English.
- **Theme:** switch light/dark mode from the header. The choice is stored in browser local storage.
- **Quick navigation:** press `Ctrl+K` to open the command palette; press `Escape` to close it.
- **Unified activity:** the header notification button opens the notification center; mark entries read and filter by category locally.
- **Universal search:** use `/search/all` to search sample products, stores, customers, orders, campaigns, conversations, reports and workspace routes. Recent search terms are stored locally.
- **AI previews:** `/ai` offers 18 reviewable mock suggestions; no model, upload processing or autonomous business decisions are connected.
- **Cart and buyer history:** add/change/remove products, save cart items to the wishlist, and record recently viewed items in local app state. The cart groups seller subtotals, estimates delivery per merchant, previews the `NAHORA10` sample coupon and feeds current cart contents into checkout. Checkout carries the sample coupon forward and recalculates totals when delivery speed changes. These changes do not persist as an order.
- **Order history:** `/orders` supports local order details/invoice previews, reorder-to-cart, return/help and processing cancellation request previews. Sample request states persist in browser storage and do not contact merchants or couriers.
- **Local persistence:** cart, wishlist, recently viewed items, theme, locale, accessibility preferences, universal search history, notification read state, address book, and selected merchant record changes are stored in browser local storage. This is device-local demo state, not an account sync.
- **Forms:** checkout, campaign, buyer request, review and affiliate-link interfaces demonstrate client-side validation/interactions. Submit actions only update local preview UI or show a notice.
- **Messaging:** filter conversations, switch stores, add local draft messages, pin/archive/mute conversations, choose labels, save internal notes, use quick replies and preview translation/attachments. Nothing is sent outside the browser preview.
- **Tables and search:** workspace tables support local search and sorting; product discovery supports local query, category, price, rating, store, location and sale filtering, sorting, and pagination.
- **Merchant records:** product add/edit, price and status changes, in-browser CSV column mapping and row-validation previews, inventory adjustments, warehouse transfer/receiving previews, catalog identity prompts and CRM notes update device-local demo state. Product, inventory, catalog, and CRM record edits persist in browser local storage; CSV data is not uploaded or imported, and no stock or listing is published.
- **Product sharing:** `/share` supports product selection, copying a clearly marked demo link and downloading an SVG card preview. Social publishing is unavailable; the QR interface explicitly states it is not scannable.
- **Account data:** `/profile` supports editing validated customer contact details; `/addresses` supports adding/editing, setting a single default, and confirming/removing delivery addresses with Bangladesh mobile validation. These records persist only in this browser's local storage.
- **Responsive layout:** public pages and portal navigation adapt to mobile and desktop widths.

## Design and demo data

- Brand palette: forest green `#123B32`, green `#176B52`, accent gold `#D7A84B`, and a soft neutral canvas.
- English is the default locale; Bengali text uses a Bengali-capable font stack.
- Currency display starts in Bangladeshi Taka (৳ BDT).
- Sample merchants, locations, and products are Bangladesh-oriented.
- Status badges, dashboard metrics, tracking, review, and financial examples are not verified real-world information.

## Current scope and next frontend work

The app is a working interactive frontend prototype covering the five supplied phase prompts. It is not a feature-complete production marketplace: many specialist screens are structured demo workflows rather than complete business applications. Remaining frontend work includes deeper return/refund/order and messaging lifecycle states; complete merchant accounting, inventory and HR management; expanded bilingual content; and full accessibility, loading, error and permission audits.

The following are intentionally outside this frontend prototype: backend services, databases, APIs, authentication, payment processing, courier connections, publishing, messaging delivery, and persistent account/order data.

## Verification

Run `npm run build` to type-check and create the production bundle. All 121 current public, customer and portal routes were smoke-tested for rendering. Commission math, store-builder undo/reorder, onboarding progress, AI suggestions, notification read state, universal customer search, Bengali switching and mobile horizontal overflow were checked. See [FEATURE_AUDIT.md](./FEATURE_AUDIT.md) for the phase-by-phase status and outstanding frontend work.
