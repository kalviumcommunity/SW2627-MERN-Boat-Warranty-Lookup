function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="logo-icon">⌁</span>
        <span>boAt</span>
      </div>

      <div className="navbar-links">
        <a href="#products">Products</a>
        <a href="#device">Your Device</a>
        <a href="#help">Help Topics</a>
      </div>

      <a href="#connect" className="nav-button">
        Connect with us
      </a>
    </nav>
  );
}

export default Navbar;