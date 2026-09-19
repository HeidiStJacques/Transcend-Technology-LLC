import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="hero-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-12">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          {/* BRAND */}
          <div className="text-center md:text-left">
            <div
              className="text-2xl text-surface"
              style={{ fontFamily: "Zodiak, serif" }}
            >
              Transcend Technology
            </div>

            <p className="mt-2 text-sm text-surface/70">
              Thoughtful technology built for real-world needs.
            </p>
          </div>

          {/* LINKS */}
          <div className="flex flex-wrap justify-center md:justify-end gap-x-7 gap-y-3 text-sm font-medium">
            <Link
              to="/privacy"
              className="text-surface/80 hover:text-rose transition-colors"
            >
              Privacy
            </Link>

            <Link
              to="/security"
              className="text-surface/80 hover:text-rose transition-colors"
            >
              Security
            </Link>

            <Link
              to="/contact"
              className="text-surface/80 hover:text-rose transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-8 pt-6 border-t border-surface/15 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">

          <div className="text-xs text-surface/60">
            © {new Date().getFullYear()} Transcend Technology. All rights reserved.
          </div>

          <div className="text-xs text-surface/50">
            New Hampshire
          </div>

        </div>
      </div>
    </footer>
  );
}
