function WarrantyResult({ result }) {
  if (!result) {
    return null;
  }

  if (!result.success) {
    return (
      <div className="warranty-result error">
        <h3>Warranty information not found</h3>
        <p>{result.message}</p>
      </div>
    );
  }

  const product = result.data;

  return (
    <div className="warranty-result">
      <div className="result-header">
        <div>
          <p className="section-label">YOUR DEVICE</p>
          <h3>{product.productName}</h3>
        </div>

        <span
          className={
            product.warrantyStatus === "Active"
              ? "status active"
              : "status expired"
          }
        >
          {product.warrantyStatus}
        </span>
      </div>

      <div className="result-grid">
        <div>
          <span>Serial Number</span>
          <strong>{product.serialNumber}</strong>
        </div>

        <div>
          <span>Model</span>
          <strong>{product.model}</strong>
        </div>

        <div>
          <span>Purchase Date</span>
          <strong>
            {new Date(product.purchaseDate).toLocaleDateString()}
          </strong>
        </div>

        <div>
          <span>Warranty Expiry</span>
          <strong>
            {new Date(product.warrantyExpiry).toLocaleDateString()}
          </strong>
        </div>
      </div>

      {product.warrantyPdf && (
        <a
          href={product.warrantyPdf}
          target="_blank"
          rel="noreferrer"
          className="pdf-button"
        >
          View Warranty PDF
        </a>
      )}
    </div>
  );
}

export default WarrantyResult;