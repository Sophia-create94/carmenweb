"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "@/styles/Navbar.css";

const pages = [
  { name: "Startseite", path: "/" },
  { name: "Vor Ihrem Besuch", path: "/vor-ihrem-besuch" },
  { name: "Team", path: "/team" },
  { name: "Leistungen", path: "/leistungen" },
  { name: "Links", path: "/links" },
  { name: "Notfälle", path: "/notfalle" },
  { name: "Kontakt", path: "/contact" },
];

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="nav-bar">
      <button
        className={`nav-toggle ${isMobileOpen ? "toggle-open" : "toggle-closed"}`}
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        aria-label="Menü"
      >
        {isMobileOpen ? "✕" : "☰"}
      </button>
      <ul
        className={`nav-links ${
          isMobileOpen ? "nav-mobile-open" : "nav-mobile-closed"
        }`}
      >
        {pages.map((page) => (
          <li key={page.path}>
            <Link
              href={page.path}
              onClick={() => setIsMobileOpen(false)}
              className={pathname === page.path ? "selected" : ""}
            >
              {page.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
