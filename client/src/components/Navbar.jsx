import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="logo-icon">⌁</span>
        <span>boAt</span>
      </div>

      <div className="navbar-links">
        <Link to="/products">Products</Link>
        <Link to="/your-device">Your Device</Link>
        <Link to="/help">Help Topics</Link>
      </div>

      <Link to="/contact" className="nav-button">
        Connect with us
      </Link>
    </nav>
  );
}

export default Navbar;