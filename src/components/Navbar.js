import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="exam">Exam</span>
        <span className="edge">Edge</span>
      </div>
      <div className="navbar-badge">BCA · KUK</div>
    </nav>
  );
}

export default Navbar;