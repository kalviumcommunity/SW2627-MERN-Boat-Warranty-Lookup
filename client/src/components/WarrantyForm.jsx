import { useState } from "react";

function WarrantyForm({ onResult }) {
  const [serialNumber, setSerialNumber] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;

    // Allow only letters and numbers
    if (!/^[a-zA-Z0-9]*$/.test(value)) {
      setError("Serial number can contain only letters and numbers.");
      return;
    }

    // Do not allow more than 11 characters
    if (value.length > 11) {
      return;
    }

    setSerialNumber(value);
    setError("");

    // Clear old result when user changes the serial number
    if (onResult) {
      onResult(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serial = serialNumber.trim();

    // 1. Empty validation
    if (!serial) {
      setError("Please enter your serial number.");
      onResult(null);
      return;
    }

    // 2. Alphanumeric validation
    if (!/^[a-zA-Z0-9]+$/.test(serial)) {
      setError("Serial number can contain only letters and numbers.");
      onResult(null);
      return;
    }

    // 3. Exactly 11 characters
    if (serial.length !== 11) {
      setError("Serial number must be exactly 11 characters long.");
      onResult(null);
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        `http://localhost:5000/api/products/${encodeURIComponent(serial)}`
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Product warranty information not found."
        );
      }

      onResult(data.product);
    } catch (error) {
      onResult(null);
      setError(
        error.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="warranty-form">
      <p className="section-label">WARRANTY LOOKUP</p>

      <h2>Check your warranty</h2>

      <p>
        Enter your 11-character serial number to check your product warranty
        information.
      </p>

      <form onSubmit={handleSubmit}>
        <input
          id="serial"
          type="text"
          placeholder="Enter 11-character serial number"
          value={serialNumber}
          onChange={handleChange}
          maxLength={11}
          autoComplete="off"
          disabled={loading}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Checking..." : "Check Warranty"}
        </button>
      </form>

      <div className="serial-info">
        {serialNumber.length}/11 characters
      </div>

      {error && (
        <p className="error-message" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export default WarrantyForm;