# OXISTYLE - Fashion Store


A modern fashion e-commerce web app built with React, Vite, and Tailwind CSS.

Live site: https://fashion-store-delta-swart.vercel.app

---

## About This Project

> আমি এই প্রজেক্টে শুধু **functionality** নিয়ে কাজ করেছি। Color বা অন্য কোনো design নিয়ে আমি কাজ করিনি। তবে আমি কোনো AI দিয়ে কোড করিনি - প্রয়োজনে শুধু **documentation** পড়েছি।

This project focuses entirely on building real working features - cart management, product filtering, routing, loading states, and more.

---

## Features

- Home page with hero slider and featured products
- Products page with search and category filter sidebar
- Product details page with color, size, quantity selector and add-to-cart
- Shopping cart - navbar dropdown panel + standalone page
- Cart persistence via localStorage
- Branded loader shown on every page navigation
- Scroll to top on every route change
- Empty states for cart and no-results
- Responsive design - mobile, tablet, desktop
- Toast notifications on cart add/remove
- Newsletter, FAQ, Why Choose Us, Customer Reviews sections
- Footer with social links and quick nav

---

## Tech Stack

| Tool | Purpose |
|---|---|
| React 19 | UI framework |
| Vite 8 | Build tool and dev server |
| React Router v7 | Routing and data loaders |
| Tailwind CSS v4 | Styling |
| react-hot-toast | Toast notifications |
| react-icons | Icon library |
| Swiper | Hero slider |
| AOS | Scroll animations |
| Vercel | Deployment |

---

## Project Structure

```
src/
├── Components/      # Navbar, Footer, Loader, CartStyle, etc.
├── context/         # Cart context and provider
├── layouts/         # RootLayout
├── pages/           # Home, Product, ProductDetails, Cart
├── routers/         # React Router config with loaders
└── assets/          # Static images
public/
└── data/
    └── products.json
```

---

## Installation & Setup

**1. Clone the repo**
```bash
git clone https://github.com/hakimcolor/fashion-store.git
cd fashion-store
```

**2. Install dependencies**
```bash
npm install
```

**3. Start the dev server**
```bash
npm run dev
```

**4. Build for production**
```bash
npm run build
```

**5. Preview production build**
```bash
npm run preview
```

---

## Deployment

Deployed on **Vercel**. A _redirects file and vercel.json are included to handle client-side routing so direct URL access and page refresh work correctly.

---

## Author

Made with love by [hakimcolor](https://github.com/hakimcolor)
