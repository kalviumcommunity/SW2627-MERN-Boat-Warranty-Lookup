import { useState } from "react";

function App() {
  const [serialNumber, setSerialNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!serialNumber.trim()) {
      alert("Please enter a serial number.");
      return;
    }

    alert(`Checking warranty for: ${serialNumber}`);
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
          />

          <button type="submit">Check Warranty</button>
        </form>

        <div className="info">
          <strong>What you can check</strong>
          <ul>
            <li>Warranty expiry</li>
            <li>Warranty status</li>
            <li>Repair history</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default App;