import { useNavigate, useLocation } from 'react-router-dom';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import './Navbar.css';

function Navbar({ theme, toggleTheme }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Home", path: "/" },
    { label: "Universities", path: "/kuk" },
    { label: "About", path: "/about" }
  ];

  const handleNav = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={() => handleNav('/')}>
        <span className="exam">Exam</span>
        <span className="edge">Edge</span>
      </div>

      {/* Desktop Links */}
      <div className="navbar-links">
        {links.map((l) => (
          <span
            key={l.path}
            className={`navbar-link ${location.pathname === l.path ? 'active' : ''}`}
            onClick={() => handleNav(l.path)}
          >
            {l.label}
          </span>
        ))}
      </div>

      <div className="navbar-right">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
        >
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>

        {/* Mobile Hamburger */}
        <button
          className="navbar-hamburger"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="navbar-mobile-menu">
          {links.map((l) => (
            <span
              key={l.path}
              className={`navbar-mobile-link ${location.pathname === l.path ? 'active' : ''}`}
              onClick={() => handleNav(l.path)}
            >
              {l.label}
            </span>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;