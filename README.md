# ShopVault — CEMZO Technologies React Intern Assignment

A responsive React product listing app built with Vite + React.

**Live Demo:** [your-vercel-url-here]

## Features
- Product listing from Fake Store API
- Debounced search (400ms)
- Category filter tabs
- Product detail modal
- Loading skeletons & error handling with retry
- Pagination (8 items per page)
- Dark / Light theme (persisted in localStorage)
- Context API for global state

## Tech Stack
React 19, Vite, Context API, Lucide React, Vanilla CSS

## Setup

```bash
git clone <repo-url>
cd cemzo-store
npm install
npm run dev
```

Open http://localhost:5173

## Build
```bash
npm run build
```# 🛍️ ShopVault — React Developer Intern Assignment

A responsive product listing web app built with **React + Vite**, featuring search, filtering, pagination, dark/light theme, and product detail modals.

**Built for:** CEMZO Technologies — React Developer Intern Technical Assignment  
**Live Demo:** [your-vercel-url-here]  
**GitHub:** [your-github-repo-url]

---

## ✨ What You Get

### 🔍 Search
- Real-time product search by name
- **Debounced** (400ms delay) — smooth and efficient, no unnecessary API calls

### 🗂️ Category Filter
- Filter products by: **All / Men / Women / Electronics / Jewelry**
- Tab-style UI with active highlight

### 🃏 Product Cards
- Product image, name, category badge, star rating, and price
- Hover animation with purple gradient top border
- Click any card to open the detail modal

### 📋 Product Detail Modal
- Full product image, title, description, rating, and price
- "Add to Cart" button (full-width, centered)
- Close with ✕ button, clicking outside, or pressing `Escape`

### ⏳ Loading & Error States
- **Skeleton loader** — animated placeholder cards while data loads
- **Error state** — friendly message with a Retry button if API fails
- **Empty state** — shown when search/filter returns no results

### 📄 Pagination
- 8 products per page
- Previous / Next + page number buttons
- Resets automatically when search or category changes

### 🌙 Dark / Light Theme
- Toggle from the navbar
- Choice saved in `localStorage` — persists on page refresh

### 📱 Fully Responsive
- **Mobile** (< 480px) — single column, compact layout
- **Tablet** (480px–768px) — 2 column grid
- **Desktop** (> 768px) — 4 column grid, full modal layout

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| React 19 + Vite | Frontend framework & build tool |
| Context API | Global state (products, theme, filters) |
| Custom Hook (`useDebounce`) | Debounced search input |
| Lucide React | Icons |
| Vanilla CSS | Styling (no UI library) |
| Fake Store API | Product data source |

---

## 📁 Folder Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Top nav with theme toggle
│   ├── SearchBar.jsx       # Debounced search input
│   ├── CategoryFilter.jsx  # Filter tabs
│   ├── ProductCard.jsx     # Individual product card
│   ├── ProductModal.jsx    # Product detail popup
│   ├── SkeletonCard.jsx    # Loading placeholder
│   ├── StarRating.jsx      # Star display component
│   └── Pagination.jsx      # Page navigation
├── context/
│   ├── ThemeContext.jsx    # Dark/light mode state
│   └── ProductContext.jsx  # Products, search, filter, pagination state
├── hooks/
│   └── useDebounce.js      # Debounce custom hook
├── pages/
│   └── Home.jsx            # Main page layout
├── services/
│   └── api.js              # Fake Store API call
├── utils/
│   └── helpers.js          # Star rating & text truncate helpers
└── App.jsx
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- npm

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/your-username/cemzo-store.git

# 2. Go into the folder
cd cemzo-store

# 3. Install dependencies
npm install

# 4. Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

---

## ☁️ Deploy to Vercel

1. Push the project to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your GitHub repo
4. Framework preset: **Vite**
5. Click **Deploy** — done!

---

## ✅ Assignment Checklist

| Requirement | Status |
|-------------|--------|
| Product listing (image, name, price, category, rating) | ✅ |
| Search by product name | ✅ |
| Category filter | ✅ |
| Product detail modal | ✅ |
| Loading skeleton | ✅ |
| Error handling | ✅ |
| Responsive design | ✅ |
| Functional components + React Hooks | ✅ |
| Reusable components | ✅ |
| Clean folder structure | ✅ |
| **Bonus:** Debounced search | ✅ |
| **Bonus:** Pagination | ✅ |
| **Bonus:** Context API | ✅ |
| **Bonus:** Dark/Light theme | ✅ |

---

## 👩‍💻 Developer

**Rabeya Khatun (Hridi)**  
Frontend & MERN Stack Developer  
📧 rabeya.hridi04@gmail.com  
🔗 [LinkedIn](https://linkedin.com/in/rabeya-hridi)  
🐙 [GitHub](https://github.com/rabeya121)  
🌐 [Portfolio](https://rabeya-portfolio.vercel.app)


## Deploy (Vercel)
1. Push to GitHub
2. Import on vercel.com → Framework: Vite → Deploy

## Bonus Features
| Feature | Done |
|---------|------|
| Debounced Search | ✅ |
| Pagination | ✅ |
| Context API | ✅ |
| Dark/Light Theme | ✅ |
