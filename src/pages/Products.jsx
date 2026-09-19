import React from "react";
import { Helmet } from "react-helmet-async";

export default function Products() {
  return (
    <>
      <Helmet>
        <title>Products | Transcend Technology</title>
        <meta
          name="description"
          content="Explore software products developed by Transcend Technology, including SocialBright, DipVault, and Payday Clarity."
        />
        <link
          rel="canonical"
          href="https://transcendtechnology.com/products"
        />
      </Helmet>

      <main className="hero-pattern text-surface">

        {/* PAGE HERO */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 pt-20 sm:pt-24 pb-12 sm:pb-16">
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-rose mb-5">
            Products
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-medium leading-[1.05] mb-6">
            Technology with a purpose.
          </h1>

          <p className="text-lg sm:text-xl text-surface/80 leading-relaxed max-w-3xl">
            We build practical digital products around real needs — from
            professional case management systems to tools that make everyday
            organization simpler.
          </p>
        </section>

        {/* PRODUCT CARDS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 pb-20 sm:pb-24">

          {/* SOCIALBRIGHT FEATURED */}
          <div className="bg-surface text-accent rounded-lg p-7 sm:p-10 mb-6 sm:mb-8">
            <p className="text-xs uppercase tracking-[0.25em] text-olive mb-4">
              Case Management Platform
            </p>

            <h2 className="text-3xl sm:text-4xl font-medium mb-4">
              SocialBright
            </h2>

            <p className="text-accent/75 text-base sm:text-lg leading-relaxed max-w-4xl mb-7">
              A HIPAA-aligned case management and care coordination platform
              built for healthcare and social service organizations. SocialBright
              brings client information, documentation, care planning,
              scheduling, and operational workflows together in one secure
              system.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm sm:text-base">
              <div className="border-t border-accent/15 pt-3">
                Client &amp; case management
              </div>

              <div className="border-t border-accent/15 pt-3">
                Care planning
              </div>

              <div className="border-t border-accent/15 pt-3">
                Secure documents
              </div>

              <div className="border-t border-accent/15 pt-3">
                Scheduling &amp; tasks
              </div>

              <div className="border-t border-accent/15 pt-3">
                Compliance tools
              </div>

              <div className="border-t border-accent/15 pt-3">
                Role-based access
              </div>
            </div>
          </div>

          {/* OTHER PRODUCTS */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">

            {/* DIPVAULT */}
            <div className="bg-surface text-accent rounded-lg p-7 sm:p-8">
              <p className="text-xs uppercase tracking-[0.25em] text-olive mb-4">
                Mobile Application
              </p>

              <h2 className="text-2xl sm:text-3xl font-medium mb-4">
                DipVault
              </h2>

              <p className="text-accent/75 leading-relaxed">
                A mobile organization platform for nail professionals,
                enthusiasts, and students. DipVault gives users one place to
                organize dip powders, polishes, gels, acrylics, formulas,
                finished looks, tools, favorites, and collections.
              </p>
            </div>

            {/* PAYDAY CLARITY */}
            <div className="bg-surface text-accent rounded-lg p-7 sm:p-8">
              <p className="text-xs uppercase tracking-[0.25em] text-olive mb-4">
                Personal Finance
              </p>

              <h2 className="text-2xl sm:text-3xl font-medium mb-4">
                Payday Clarity
              </h2>

              <p className="text-accent/75 leading-relaxed">
                A practical budgeting and financial organization platform
                designed to make managing money easier to understand and
                maintain, with a focus on clear visual organization and
                low-friction financial planning.
              </p>
            </div>

          </div>

          {/* CUSTOM DEVELOPMENT */}
          <div className="mt-16 sm:mt-20 border-t border-surface/20 pt-12 sm:pt-16">
            <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-rose mb-4">
              Custom Development
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-5">
              Built around the problem.
            </h2>

            <p className="text-surface/75 text-base sm:text-lg leading-relaxed max-w-3xl">
              Transcend Technology also develops custom websites, internal
              tools, and digital solutions for organizations with specific
              operational needs. Each project starts with understanding the
              people, workflow, and problem before deciding what technology
              should be built.
            </p>
          </div>

        </section>
      </main>
    </>
  );
}
