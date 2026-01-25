import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/products", label: "Products" },
    { to: "/security", label: "Security" },
    { to: "/contact", label: "Contact" },
    { to: "/careers", label: "Careers" },
  ];

  return (
    <header className="bg-surface border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex items-center">
        
        {/* BRAND */}
        <Link
          to="/"
          className="text-base sm:text-lg font-semibold tracking-wide text-accent"
          style={{ fontFamily: "Raleway, system-ui, sans-serif" }}
        >
          Transcend Technology
        </Link>

        {/* DESKTOP LINKS */}
        <div className="ml-auto hidden md:flex gap-8 text-sm font-medium">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                isActive
                  ? "text-accent"
                  : "text-accent hover:opacity-80 transition-opacity"
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="ml-auto md:hidden text-accent text-xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-surface">
          <div className="flex flex-col px-4 py-4 space-y-4 text-sm font-medium">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-accent"
                    : "text-accent hover:opacity-80 transition-opacity"
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
