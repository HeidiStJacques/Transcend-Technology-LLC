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
    <header className="bg-surface border-b border-accent/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center">

        {/* BRAND */}
        <Link
          to="/"
          className="text-2xl sm:text-[1.7rem] text-accent hover:opacity-100"
          style={{ fontFamily: "Zodiak, serif" }}
        >
          Transcend Technology
        </Link>

        {/* DESKTOP LINKS */}
        <div className="ml-auto hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `relative py-2 transition-colors duration-200 ${
                  isActive
                    ? "text-rose"
                    : "text-accent hover:text-rose"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {label}

                  {isActive && (
                    <span className="absolute left-0 right-0 -bottom-1 h-[2px] bg-rose rounded-full" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className="ml-auto md:hidden text-accent text-2xl hover:text-rose transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? "×" : "☰"}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden border-t border-accent/10 bg-surface">
          <div className="flex flex-col px-6 py-5 space-y-1">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-3 text-sm font-medium border-b border-accent/10 last:border-0 transition-colors ${
                    isActive
                      ? "text-rose"
                      : "text-accent hover:text-rose"
                  }`
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
