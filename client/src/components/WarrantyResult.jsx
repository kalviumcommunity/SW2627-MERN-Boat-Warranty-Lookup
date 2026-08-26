function WarrantyResult({ warranty }) {
  if (!warranty) {
    return null;
  }

  if (!warranty.found) {
    return (
      <div className="result-card not-found">
        <h2>Product Not Found</h2>
        <p>
          We could not find a product with this serial number.
        </p>
      </div>
    );
  }

  return (
    <div className="result-card">
      <h2>Warranty Details</h2>

      <div className="result-details">
        <p>
          <strong>Product:</strong> {warranty.product}
        </p>

        <p>
          <strong>Serial Number:</strong> {warranty.serialNumber}
        </p>

        <p>
          <strong>Purchase Date:</strong> {warranty.purchaseDate}
        </p>

        <p>
          <strong>Warranty Until:</strong> {warranty.warrantyUntil}
        </p>
      </div>

      <div
        className={`warranty-status ${
          warranty.active ? "active" : "expired"
        }`}
      >
        {warranty.active
          ? "✓ Warranty Active"
          : "✕ Warranty Expired"}
      </div>
    </div>
  );
}

export default WarrantyResult;