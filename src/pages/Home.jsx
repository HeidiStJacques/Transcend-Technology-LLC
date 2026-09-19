import React from "react";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>
          Transcend Technology | Secure Software for Regulated Environments
        </title>

        <meta
          name="description"
          content="Transcend Technology builds secure, long-term software platforms for regulated and mission-critical environments, including healthcare and social services."
        />

        <link rel="canonical" href="https://transcendtechnology.com/" />
      </Helmet>

      {/* HERO */}
      <section className="relative w-full hero-pattern">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-24 sm:py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-medium text-surface mb-5 sm:mb-6 leading-[1.05]">
              Technology built for trust.
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-surface/90 leading-relaxed max-w-2xl">
              Transcend Technology is a holding company focused on building and
              supporting secure, long-term software platforms for regulated and
              mission-critical environments.
            </p>
          </div>
        </div>
      </section>

      {/* PLATFORMS */}
      <section className="hero-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-20">

          {/* SECTION HEADING */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-surface mb-3">
            Our projects
          </h2>

          <p className="text-base sm:text-lg text-surface/75 max-w-2xl mb-8 sm:mb-10">
            From purpose-built software to custom websites, we create thoughtful technology around the people who use it.
          </p>

{/* FEATURED PROJECT — SOCIALBRIGHT */}
<div className="bg-surface border border-surface/20 p-7 sm:p-9 rounded-lg">
  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-olive mb-3">
    Case Management Platform
  </p>

  <h3 className="text-2xl sm:text-3xl font-medium text-accent mb-3">
    SocialBright
  </h3>

  <p className="text-accent/75 text-sm sm:text-base leading-relaxed max-w-3xl">
    A secure case management and care coordination platform designed for
    regulated service providers.
  </p>
</div>

{/* PROJECT GRID */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

  {/* DIPVAULT */}
  <div className="bg-surface border border-surface/20 p-7 sm:p-8 rounded-lg">
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-olive mb-3">
      Mobile Application
    </p>

    <h3 className="text-2xl sm:text-3xl font-medium text-accent mb-3">
      DipVault
    </h3>

    <p className="text-accent/75 text-sm sm:text-base leading-relaxed">
      A mobile platform for organizing nail collections, formulas, looks,
      tools, favorites, and more. Designed for nail professionals,
      enthusiasts, and students.
    </p>
  </div>

  {/* PAYDAY CLARITY */}
  <div className="bg-surface border border-surface/20 p-7 sm:p-8 rounded-lg">
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-olive mb-3">
      Financial Wellness Platform
    </p>

    <h3 className="text-2xl sm:text-3xl font-medium text-accent mb-3">
      Payday Clarity
    </h3>

    <p className="text-accent/75 text-sm sm:text-base leading-relaxed">
      A practical budgeting and financial wellness platform designed to
      make managing money easier to understand and maintain.
    </p>
  </div>

  {/* KUBAT REALTY */}
  <div className="bg-surface border border-surface/20 p-7 sm:p-8 rounded-lg">
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-olive mb-3">
      Web Development
    </p>

    <h3 className="text-2xl sm:text-3xl font-medium text-accent mb-3">
      Kubat Realty
    </h3>

    <p className="text-accent/75 text-sm sm:text-base leading-relaxed">
      A custom real estate website designed to give a New Hampshire brokerage
      a modern, professional online presence.
    </p>
  </div>

  {/* TUCKER'S DOGHOUSE */}
  <div className="bg-surface border border-surface/20 p-7 sm:p-8 rounded-lg">
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-olive mb-3">
      Web Development
    </p>

    <h3 className="text-2xl sm:text-3xl font-medium text-accent mb-3">
      Tucker's Doghouse
    </h3>

    <p className="text-accent/75 text-sm sm:text-base leading-relaxed">
      A custom website for a New England mobile food business, combining
      playful branding with an easy-to-navigate experience for exploring the
      menu, finding upcoming events, and getting in touch.
    </p>
  </div>

</div>
        </div>
      </section>
    </>
  );
}
