import React, { useState } from "react";
import { plantCategories } from "../data/plants";
import ProductCard from "./ProductCard";
import { Flower2, Filter } from "lucide-react";

export default function ProductList() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...plantCategories.map((c) => c.name)];

  const displayedCategories =
    selectedCategory === "All"
      ? plantCategories
      : plantCategories.filter((c) => c.name === selectedCategory);

  return (
    <div className="product-list-page">
      <div className="product-list-header">
        <div className="header-pill">
          <Flower2 size={16} /> Premium Botanical Collection
        </div>
        <h1 className="catalog-title">Explore Paradise Plants</h1>
        <p className="catalog-subtitle">
          Hand-picked, healthy plants delivered directly from our greenhouses to your doorstep.
        </p>

        {/* Category Filter Pills */}
        <div className="category-filter-bar">
          <div className="filter-label">
            <Filter size={16} /> Filter by Category:
          </div>
          <div className="filter-buttons">
            {categories.map((catName) => (
              <button
                key={catName}
                onClick={() => setSelectedCategory(catName)}
                className={`filter-btn ${
                  selectedCategory === catName ? "active-filter" : ""
                }`}
              >
                {catName}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="categories-container">
        {displayedCategories.map((category) => (
          <section key={category.name} className="category-section">
            <div className="category-header">
              <h2 className="category-title">{category.name}</h2>
              <p className="category-desc">{category.description}</p>
              <div className="category-divider"></div>
            </div>

            <div className="product-grid">
              {category.plants.map((plant) => (
                <ProductCard key={plant.id} plant={plant} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
