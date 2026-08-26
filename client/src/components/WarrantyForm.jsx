import { useState } from "react";

function WarrantyForm({ onCheckWarranty, loading }) {
  const [serialNumber, setSerialNumber] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!serialNumber.trim()) {
      setError("Please enter a serial number.");
      return;
    }

    setError("");
    onCheckWarranty(serialNumber.trim());
  };

  return (
    <form className="warranty-form" onSubmit={handleSubmit}>
      <label htmlFor="serialNumber">
        Product Serial Number
      </label>

      <input
        id="serialNumber"
        type="text"
        placeholder="Enter your serial number"
        value={serialNumber}
        onChange={(e) => setSerialNumber(e.target.value)}
      />

      {error && <p className="error-message">{error}</p>}

      <button type="submit" disabled={loading}>
        {loading ? "Checking..." : "Check Warranty"}
      </button>
    </form>
  );
}

export default WarrantyForm;