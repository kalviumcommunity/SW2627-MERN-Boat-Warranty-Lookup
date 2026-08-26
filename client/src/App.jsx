import { useState } from "react";

function App() {
  const [serialNumber, setSerialNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [product, setProduct] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serial = serialNumber.trim();

    setError("");
    setProduct(null);

    if (!serial) {
      setError("Please enter a serial number.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        `http://localhost:5000/api/products/${encodeURIComponent(serial)}`
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to find warranty information.");
      }

      setProduct(data.product);
    } catch (err) {
      setError(
        err.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="page">
      <section className="card">
        <p className="tag">BOAT WARRANTY</p>

        <h1>Warranty Lookup</h1>

        <p className="subtitle">
          Enter your product serial number to check warranty information and
          repair history.
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="serial">Serial Number</label>

          <input
            id="serial"
            type="text"
            placeholder="e.g. BOAT-10001"
            value={serialNumber}
            onChange={(e) => setSerialNumber(e.target.value)}
            disabled={loading}
          />

          <button type="submit" disabled={loading}>
            {loading ? "Checking..." : "Check Warranty"}
          </button>
        </form>

        {error && (
          <div className="error">
            {error}
          </div>
        )}

        {product && (
          <section className="result">
            <div className="result-header">
              <div>
                <p className="result-label">WARRANTY RESULT</p>
                <h2>{product.productName}</h2>
              </div>

              <span
                className={`status ${
                  product.warrantyStatus?.toLowerCase() === "active"
                    ? "active"
                    : "inactive"
                }`}
              >
                {product.warrantyStatus}
              </span>
            </div>

            <div className="details">
              <div className="detail">
                <span>Serial Number</span>
                <strong>{product.serialNumber}</strong>
              </div>

              <div className="detail">
                <span>Warranty Expiry</span>
                <strong>{product.warrantyExpiry}</strong>
              </div>
            </div>
          </section>
        )}

        <div className="info">
          <strong>What you can check</strong>

          <ul>
            <li>Warranty expiry</li>
            <li>Warranty status</li>
            <li>Repair history</li>
          </ul>

          <p className="coming-soon">
            Repair history will be available in a future update.
          </p>
        </div>
      </section>
    </main>
  );
}

export default App;