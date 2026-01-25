import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-gray-200 mt-16 sm:mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-10">
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 sm:gap-6">
          
          {/* BRAND */}
          <div
            className="text-sm font-semibold tracking-wide text-accent text-center md:text-left"
            style={{ fontFamily: "Raleway, system-ui, sans-serif" }}
          >
            Transcend Technology
          </div>

          {/* LINKS */}
          <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2 text-sm">
            <Link
              to="/privacy"
              className="text-accent hover:opacity-80 transition-opacity"
            >
              Privacy
            </Link>
            <Link
              to="/security"
              className="text-accent hover:opacity-80 transition-opacity"
            >
              Security
            </Link>
            <Link
              to="/contact"
              className="text-accent hover:opacity-80 transition-opacity"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* LEGAL */}
        <div className="mt-4 sm:mt-6 text-xs text-gray-500 text-center md:text-left">
          © {new Date().getFullYear()} Transcend Technology. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
