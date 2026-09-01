import { useState } from "react";
import { Link } from "react-router-dom";

function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const products = [
    {
      id: 1,
      name: "boAt Wireless Earbuds",
      category: "Earbuds",
      price: 1299,
      image: "/products/earbuds.jpg",
      description: "Immersive sound with powerful bass and comfortable fit.",
    },
    {
      id: 2,
      name: "boAt Gaming Headset",
      category: "Gaming",
      price: 1999,
      image: "/products/gaming.jpg",
      description: "Powerful gaming audio for an immersive experience.",
    },
    {
      id: 3,
      name: "boAt Wireless Headphones",
      category: "Headphones",
      price: 1799,
      image: "/products/headphones.jpg",
      description: "Enjoy rich sound with comfortable wireless headphones.",
    },
    {
      id: 4,
      name: "boAt Wireless Neckband",
      category: "Neckbands",
      price: 999,
      image: "/products/neckband.jpg",
      description: "Lightweight wireless audio for everyday use.",
    },
    {
      id: 5,
      name: "boAt Smartwatch",
      category: "Smart Watches",
      price: 1499,
      image: "/products/smartwatch.jpg",
      description: "Track your fitness, notifications and daily activities.",
    },
    {
      id: 6,
      name: "boAt Bluetooth Speaker",
      category: "Speakers",
      price: 1599,
      image: "/products/speaker.jpg",
      description: "Powerful portable sound for your home and outdoors.",
    },
  ];

  const categories = [
    "All",
    "Earbuds",
    "Gaming",
    "Headphones",
    "Neckbands",
    "Smart Watches",
    "Speakers",
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="products-page">

      {/* HEADER */}
      <section className="products-header">
        <p className="section-label">BOAT PRODUCTS</p>

        <h1>Explore our products.</h1>

        <p>
          Discover audio, gaming, wearables and smart devices
          designed for your everyday life.
        </p>
      </section>

      {/* SEARCH AND FILTER */}
      <section className="product-controls">

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="category-buttons">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              className={
                category === item ? "active-category" : ""
              }
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

      </section>

      {/* PRODUCT LIST */}
      <section className="products-grid">

        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <article
              className="product-card"
              key={product.id}
            >

              {/* IMAGE */}
              <div className="product-image-container">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
              </div>

              {/* DETAILS */}
              <div className="product-details">

                <p className="product-category">
                  {product.category}
                </p>

                <h2>{product.name}</h2>

                <p className="product-description">
                  {product.description}
                </p>

                <div className="product-price">
                  ₹{product.price}
                </div>

                <Link
                  to={`/products/${product.id}`}
                  className="product-button"
                >
                  View Product →
                </Link>

              </div>

            </article>
          ))
        ) : (
          <div className="no-products">
            <h2>No products found</h2>

            <p>
              Try searching for another product or
              select a different category.
            </p>
          </div>
        )}

      </section>

    </main>
  );
}

export default Products;