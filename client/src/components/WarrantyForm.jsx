import { useState } from "react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function WarrantyForm({ onResult }) {
  const [serialNumber, setSerialNumber] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmedSerialNumber = serialNumber.trim();

    if (!trimmedSerialNumber) {
      alert("Please enter your serial number.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `${API_BASE_URL}/api/v1/products/${encodeURIComponent(
          trimmedSerialNumber
        )}`
      );

      const data = await response.json();

      if (!response.ok) {
        onResult({
          success: false,
          message: data.message || "Product not found",
        });
        return;
      }

      onResult(data);
    } catch (error) {
      console.error("Warranty lookup error:", error);

      onResult({
        success: false,
        message: "Unable to connect to the server.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="warranty-form">
      <p className="section-label">WARRANTY CHECK</p>

      <h2>Check your device warranty</h2>

      <p>
        Enter your device serial number to check warranty status and product
        details.
      </p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter serial number"
          value={serialNumber}
          onChange={(e) => setSerialNumber(e.target.value)}
          disabled={loading}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Checking..." : "Check Warranty"}
        </button>
      </form>
    </div>
  );
}

export default WarrantyForm;