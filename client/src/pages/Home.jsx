import { useState } from "react";
import WarrantyForm from "../components/WarrantyForm";
import WarrantyResult from "../components/WarrantyResult";

function Home() {
  const [loading, setLoading] = useState(false);
  const [warranty, setWarranty] = useState(null);

  const handleCheckWarranty = (serialNumber) => {
    setLoading(true);
    setWarranty(null);

    setTimeout(() => {
      setWarranty({
        found: true,
        product: "boAt Rockerz 450",
        serialNumber: serialNumber,
        purchaseDate: "12 August 2025",
        warrantyUntil: "12 August 2027",
        active: true,
      });

      setLoading(false);
    }, 1000);
  };

  return (
    <main className="home" id="home">
      <section className="hero">
        <h1>Check Your Warranty</h1>

        <p>
          Enter your boAt product serial number to check
          your warranty details.
        </p>

        <WarrantyForm
          onCheckWarranty={handleCheckWarranty}
          loading={loading}
        />

        {loading && (
          <p className="loading-message">
            Checking warranty...
          </p>
        )}

        <WarrantyResult warranty={warranty} />
      </section>
    </main>
  );
}

export default Home;