import WarrantyForm from "../components/WarrantyForm";

function YourDevice() {
  return (
    <main className="simple-page">
      <div className="page-content">
        <p className="tag">YOUR DEVICE</p>

        <h1>Check Your Device</h1>

        <p>
          Enter your product serial number to check your warranty information.
        </p>

        <WarrantyForm />
      </div>
    </main>
  );
}

export default YourDevice;