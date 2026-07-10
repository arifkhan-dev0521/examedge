import './Navbar.css';

function Navbar({ theme, toggleTheme }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="exam">Exam</span>
        <span className="edge">Edge</span>
      </div>
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </nav>
  );
}

export default Navbar;


// git add . 
// git commit -m "Added university part just below  the hero section" 
// git push