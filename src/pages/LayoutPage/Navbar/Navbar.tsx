import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [pageSelected, setPageSelected] = useState(window.location.pathname);

  const location = useLocation();

  useEffect(() => {
    setPageSelected(location.pathname);
  }, [location]);

  const pages = [
    { name: 'Startseite', path: '/' },
    { name: 'Vor Ihrem Besuch', path: '/vor-ihrem-besuch' },
    { name: 'Team', path: '/team' },
    { name: 'Leistungen', path: '/leistungen' },
    { name: 'Links', path: '/links' },
    { name: 'Notfälle', path: '/notfalle' },
    { name: 'Kontakt', path: '/contact' },
  ];

  return (
    <>
      <nav className="nav-bar">
        <button 
          className={`nav-toggle ${isMobileOpen ? "toggle-open" : "toggle-closed"}`} 
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Menú"
        >
          {isMobileOpen ? "✕" : "☰"}
        </button>
        <ul className={`nav-links ${isMobileOpen ? "nav-mobile-open" : "nav-mobile-closed"}`}>
          {pages.map((page, index) => (
            <li key={index}>
              <Link 
                to={page.path} 
                onClick={() => {
                  
                  setIsMobileOpen(false);
                }}
                className={pageSelected === page.path ? "selected" : ""}
              >
                {page.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
