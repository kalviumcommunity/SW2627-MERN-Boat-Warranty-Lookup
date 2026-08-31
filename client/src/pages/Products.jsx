import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "boAt Airdopes 181 Pro",
    category: "True Wireless Earbuds",
    price: 1399,
    originalPrice: 4990,
    image:
      "https://www.boat-lifestyle.com/cdn/shop/files/airdopes-181-pro.jpg",
    features: ["100 Hours Playback", "ENx™ Tech", "ASAP™ Charge"],
  },
  {
    id: 2,
    name: "boAt Rockerz 110",
    category: "Neckband",
    price: 999,
    originalPrice: 2490,
    image:
      "https://www.boat-lifestyle.com/cdn/shop/files/rockerz-110.jpg",
    features: ["40 Hours Playback", "ENx™ Technology", "ASAP™ Charge"],
  },
  {
    id: 3,
    name: "boAt Rockerz 255 Pro+",
    category: "Neckband",
    price: 1199,
    originalPrice: 3990,
    image:
      "https://www.boat-lifestyle.com/cdn/shop/files/rockerz-255-pro-plus.jpg",
    features: ["60 Hours Playback", "10mm Drivers", "ASAP Charge"],
  },
  {
    id: 4,
    name: "boAt Nirvana Ion",
    category: "True Wireless Earbuds",
    price: 1799,
    originalPrice: 7990,
    image:
      "https://www.boat-lifestyle.com/cdn/shop/files/nirvana-ion.jpg",
    features: ["120 Hours Playback", "ENx™ Technology", "BEAST™ Mode"],
  },
  {
    id: 5,
    name: "boAt Bassheads 210",
    category: "Wired Earphones",
    price: 349,
    originalPrice: 599,
    image:
      "https://www.boat-lifestyle.com/cdn/shop/files/bassheads-210.jpg",
    features: ["10mm Drivers", "In-line Mic", "3.5mm Jack"],
  },
  {
    id: 6,
    name: "boAt Rockerz 412",
    category: "Wireless Headphones",
    price: 1599,
    originalPrice: 2999,
    image:
      "https://www.boat-lifestyle.com/cdn/shop/files/rockerz-412.jpg",
    features: ["60 Hours Playback", "40mm Drivers", "BEAST™ Mode"],
  },
];

function Products() {
  return (
    <main className="products-page">
      <div className="products-header">
        <p className="section-label">BOAT PRODUCTS</p>

        <h1>Explore our products</h1>

        <p>
          Discover audio products and smart devices from boAt.
        </p>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <article className="product-card" key={product.id}>
            <div className="product-image">
              <img
                src={product.image}
                alt={product.name}
              />
            </div>

            <div className="product-details">
              <p className="product-category">
                {product.category}
              </p>

              <h2>{product.name}</h2>

              <div className="product-price">
                <strong>₹{product.price}</strong>

                <span>
                  ₹{product.originalPrice}
                </span>
              </div>

              <div className="product-features">
                {product.features.map((feature) => (
                  <span key={feature}>
                    {feature}
                  </span>
                ))}
              </div>

              <Link
                to={`/products/${product.id}`}
                className="product-button"
              >
                View Product →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

export default Products;