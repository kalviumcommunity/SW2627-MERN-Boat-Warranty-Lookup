import { useState } from "react";
import { Link } from "react-router-dom";

import WarrantyForm from "../components/WarrantyForm";
import WarrantyResult from "../components/WarrantyResult";

function Home() {
  const [warrantyResult, setWarrantyResult] = useState(null);

  const products = [
    {
      icon: "🎧",
      name: "Wireless Earbuds",
      description: "Immersive sound for every moment.",
    },
    {
      icon: "🔊",
      name: "Speakers",
      description: "Powerful sound wherever you go.",
    },
    {
      icon: "⌚",
      name: "Smart Watches",
      description: "Stay connected and track your day.",
    },
    {
      icon: "🎮",
      name: "Gaming",
      description: "Level up your entertainment.",
    },
  ];

  const problems = [
  {
    icon: "🔧",
    title: "Device not working",
    description: "Get help when your device isn't functioning properly.",
  },
  {
    icon: "🔊",
    title: "Sound problem",
    description: "Troubleshoot low, distorted or missing sound.",
  },
  {
    icon: "💥",
    title: "Physical damage",
    description: "Find support for breakage and physical damage.",
  },
  {
    icon: "🔋",
    title: "Battery problem",
    description: "Solutions for charging and battery issues.",
  },
  {
    icon: "⚡",
    title: "Charging problem",
    description: "Get help with charging, cables and power issues.",
  },
  {
    icon: "📱",
    title: "Bluetooth connection",
    description: "Fix pairing and Bluetooth connectivity problems.",
  },
  {
    icon: "🎧",
    title: "Earbuds not pairing",
    description: "Troubleshoot earbuds that won't connect to your device.",
  },
  {
    icon: "📶",
    title: "Connectivity issue",
    description: "Find solutions for connection and device communication issues.",
  },
];

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-tag">THE SOUND OF THE FUTURE</p>

          <h1>
            Sound.
            <br />
            <span>Style.</span>
            <br />
            Everything.
          </h1>

          <p className="hero-description">
            Discover powerful audio, smart devices and technology designed
            around your everyday life.
          </p>

          <div className="hero-buttons">
            <a href="#products" className="primary-button">
              Explore Products
            </a>

            <a href="#device" className="secondary-button">
              Check Warranty →
            </a>
          </div>
        </div>

        <div className="hero-device">
          <div className="floating-circle"></div>

          <div className="hero-product">
            <div className="product-glow"></div>
            <span>boAt</span>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="products-section" id="products">
        <div className="section-heading">
          <div>
            <p className="section-label">EXPLORE</p>
            <h2>Made for your world.</h2>
          </div>

          <p>
            From immersive audio to smart wearables, discover devices built
            for your lifestyle.
          </p>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <div className="product-card" key={product.name}>
              <div className="product-icon">{product.icon}</div>

              <h3>{product.name}</h3>

              <p>{product.description}</p>

              <Link to="/products">Explore →</Link>
            </div>
          ))}
        </div>
      </section>

      {/* WARRANTY */}
      <section className="device-section" id="device">
        <div className="device-container">
          <div className="device-info">
            <p className="section-label">YOUR DEVICE</p>

            <h2>
              Know your device.
              <br />
              <span>Know your warranty.</span>
            </h2>

            <p>
              Enter your serial number and instantly check your product
              warranty, purchase information and warranty expiry.
            </p>

            <div className="device-features">
              <div>
                <span>✓</span>
                Serial number validation
              </div>

              <div>
                <span>✓</span>
                Warranty status
              </div>

              <div>
                <span>✓</span>
                Product information
              </div>

              <div>
                <span>✓</span>
                Warranty documents
              </div>
            </div>
          </div>

          <div className="warranty-card">
            <WarrantyForm onResult={setWarrantyResult} />
            <WarrantyResult result={warrantyResult} />
          </div>
        </div>
      </section>

      {/* COMPLAINT */}
      <section className="complaint-section" id="complaint">
        <div className="complaint-content">
          <p className="section-label">SUPPORT</p>

          <h2>
            Track your
            <br />
            <span>complaint.</span>
          </h2>

          <p>
            Already raised a complaint? Enter your complaint ID to check its
            current status and get updates.
          </p>

          <div className="complaint-form">
            <input type="text" placeholder="Enter complaint ID" />

            <button type="button">Track Complaint</button>
          </div>
        </div>

        <div className="complaint-status">
          <div className="status-line">
            <span className="status-dot active-dot"></span>

            <div>
              <strong>Complaint received</strong>
              <p>Your complaint has been successfully registered.</p>
            </div>
          </div>

          <div className="status-line">
            <span className="status-dot"></span>

            <div>
              <strong>Under review</strong>
              <p>Our support team is checking your issue.</p>
            </div>
          </div>

          <div className="status-line">
            <span className="status-dot"></span>

            <div>
              <strong>Solution</strong>
              <p>We'll provide the next step for your device.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HELP */}
      <section className="help-section" id="help">
        <div className="section-heading center">
          <p className="section-label">HELP TOPICS</p>

          <h2>Something not right?</h2>

          <p>Find quick solutions to common device problems.</p>
        </div>

        <div className="problem-grid">
          {problems.map((problem) => (
            <div className="problem-card" key={problem.title}>
              <div className="problem-icon">{problem.icon}</div>

              <h3>{problem.title}</h3>

              <p>{problem.description}</p>

              <Link to={problem.link}>Find solution →</Link>
            </div>
          ))}
        </div>
      </section>

      {/* CONNECT */}
      <section className="connect-section" id="connect">
        <div>
          <p className="section-label">CONNECT WITH US</p>

          <h2>
            We're here
            <br />
            <span>to help.</span>
          </h2>

          <p>
            Have a question about your device, warranty or service?
            Connect with our support team.
          </p>

          <Link to="/contact" className="primary-button">
            Contact Support
          </Link>
        </div>

        <div className="connect-card">
          <span>24/7</span>

          <h3>Customer Support</h3>

          <p>
            Get help with your products, warranty and service requests.
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;