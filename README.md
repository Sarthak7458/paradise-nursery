# Paradise Nursery — React Shopping Application

Welcome to **Paradise Nursery**, a full-featured, modern, and visually polished plant e-commerce application built using React, Redux Toolkit, and React Router.

Paradise Nursery allows plant enthusiasts to explore curated plant collections, learn about plant care, add items to a dynamic shopping cart, manage quantities, and calculate order totals in real time.

---

## 🌿 Project Description

Paradise Nursery is designed to bring nature into people's homes and workspaces. The website offers a seamless online shopping experience for indoor plants, outdoor garden greenery, and rare succulents. Built with modern React architecture, state management is handled through Redux Toolkit to provide live, reactive updates across all components.

---

## 🌟 Key Features

- **Hero Landing Page**: Beautiful background imagery, brand overview, and active call-to-action button leading to the catalog.
- **Categorized Plant Catalog**: Browse plants organized into 3 distinct categories (*Indoor Plants*, *Outdoor Plants*, *Succulents*).
- **Rich Product Details**: Each plant card displays thumbnail photography, plant name, description, unit price formatted in INR (`₹`), and an interactive Add to Cart button.
- **Dynamic Redux Shopping Cart**:
  - Live cart item counter badge in the navigation bar.
  - Adding a product disables the "Add to Cart" button for that product and updates its label to "Added to Cart".
  - Duplicate additions automatically increment quantity rather than creating duplicate entries.
  - Quantity controls (`+` / `-`) on the Cart page for increasing or decreasing item amounts.
  - Complete item removal using the Delete button.
  - Dynamic total item count and total cost calculations updated in real-time.
- **Interactive Checkout**: Checkout button displaying a "Coming Soon" notification modal dialog and browser alert.
- **Responsive Layout**: Designed for optimal viewing across desktop, tablet, and mobile browsers.

---

## 🛠️ Technologies Used

- **React**: Component-based UI library
- **Vite**: Ultra-fast frontend build tool and dev server
- **JavaScript (ES6+)**: Logic and data processing (No TypeScript used)
- **Redux Toolkit**: Predictable global cart state management (`createSlice`, `configureStore`)
- **React Redux**: Hooks integration (`useDispatch`, `useSelector`)
- **React Router (v6)**: Client-side SPA routing (`BrowserRouter`, `Routes`, `Route`, `Link`, `NavLink`, `useNavigate`)
- **Lucide React**: Crisp UI icon set
- **CSS3**: Custom design tokens, glassmorphism headers, flexbox/grid layouts, responsive media queries

---

## 📱 Application Pages & Routes

1. **`/` — Home / Landing Page**: Company introduction, value propositions, and "Get Started" navigation.
2. **`/plants` — Product Listing**: 24 unique plants across 3 categories with live Add to Cart controls.
3. **`/about` — About Us**: Paradise Nursery company story, mission statement, plant quality guarantee, and customer care policy.
4. **`/cart` — Shopping Cart**: Comprehensive cart management showing item breakdowns, sub-totals, quantity adjustments, item deletion, total price calculations, and checkout.

---

## 📦 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx        # Navigation header with live Redux cart badge
│   ├── ProductCard.jsx   # Individual plant card component
│   ├── AboutUs.jsx       # Company story, mission, and quality statement
│   ├── ProductList.jsx   # Catalog listing categorized plants
│   └── CartItem.jsx      # Cart item with quantity and delete controls
├── data/
│   └── plants.js         # 24 plants dataset across 3 categories
├── redux/
│   ├── CartSlice.jsx     # Redux Toolkit slice (addItem, removeItem, updateQuantity)
│   └── store.js          # Redux store configuration
├── pages/
│   ├── Home.jsx          # Landing hero page
│   └── Cart.jsx          # Shopping cart page with dynamic totals
├── AboutUs.jsx           # Top-level re-export for assessment compatibility
├── ProductList.jsx       # Top-level re-export for assessment compatibility
├── CartItem.jsx          # Top-level re-export for assessment compatibility
├── CartSlice.jsx         # Top-level re-export for assessment compatibility
├── App.jsx               # Main App routing component
├── App.css               # Primary stylesheet
├── index.css             # Base resets and typography
└── main.jsx              # Application root with Provider and BrowserRouter
```

---

## ⚙️ How to Run the Application

### Prerequisites
Make sure you have **Node.js** (v16 or higher) and **npm** installed on your system.

### Steps

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open your browser at the provided local URL (typically `http://localhost:5173`).

3. **Build for Production**:
   ```bash
   npm run build
   ```

---

## 🔄 Redux State Management

Cart state is managed via Redux Toolkit in `src/redux/CartSlice.jsx`.

The slice exposes three primary reducer actions:
- **`addItem(product)`**: Adds a plant to `state.items`. If the plant is already present, its `quantity` property is incremented by 1.
- **`removeItem(id)`**: Removes the plant matching `id` from `state.items`.
- **`updateQuantity({ id, quantity })`**: Modifies the quantity of the item matching `id`. If `quantity` drops to `0`, the item is removed from the cart.
