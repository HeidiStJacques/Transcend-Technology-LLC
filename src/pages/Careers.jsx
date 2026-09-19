import React from "react";
import { Helmet } from "react-helmet-async";

export default function Careers() {
  return (
    <>
      <Helmet>
        <title>Careers | Transcend Technology</title>

        <meta
          name="description"
          content="Learn about careers and future opportunities at Transcend Technology."
        />

        <link
          rel="canonical"
          href="https://transcendtechnology.com/careers"
        />
      </Helmet>

      <main className="hero-pattern text-surface">

        {/* PAGE HERO */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 pt-20 sm:pt-24 pb-12 sm:pb-16">
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-rose mb-5">
            Careers
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-medium leading-[1.05] mb-6 max-w-5xl">
            Build thoughtful technology with us.
          </h1>

          <p className="text-lg sm:text-xl text-surface/80 leading-relaxed max-w-3xl">
            Transcend Technology is building digital products and experiences
            around real problems, real workflows, and the people who use them.
            As we grow, so will the opportunities to build them with us.
          </p>
        </section>

        {/* HOW WE WORK */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 pb-6">
          <div className="bg-surface text-accent rounded-lg p-7 sm:p-10">
            <p className="text-xs uppercase tracking-[0.25em] text-olive mb-4">
              How We Work
            </p>

            <h2 className="text-3xl sm:text-4xl font-medium mb-5">
              Thoughtful work over unnecessary complexity.
            </h2>

            <p className="text-accent/75 leading-relaxed max-w-4xl mb-8">
              Our approach starts with understanding the problem before deciding
              how technology should solve it. We value clear communication,
              practical thinking, responsible development, and products that
              are genuinely useful to the people who rely on them.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

              <div className="border-t border-accent/15 pt-4">
                <h3 className="text-lg font-medium mb-2">
                  Purpose
                </h3>

                <p className="text-sm text-accent/70 leading-relaxed">
                  Build things because they solve a real problem, not simply
                  because they can be built.
                </p>
              </div>

              <div className="border-t border-accent/15 pt-4">
                <h3 className="text-lg font-medium mb-2">
                  Clarity
                </h3>

                <p className="text-sm text-accent/70 leading-relaxed">
                  Good communication and understandable technology matter.
                </p>
              </div>

              <div className="border-t border-accent/15 pt-4">
                <h3 className="text-lg font-medium mb-2">
                  Responsibility
                </h3>

                <p className="text-sm text-accent/70 leading-relaxed">
                  Security, privacy, reliability, and the impact of our work
                  deserve careful attention.
                </p>
              </div>

              <div className="border-t border-accent/15 pt-4">
                <h3 className="text-lg font-medium mb-2">
                  Curiosity
                </h3>

                <p className="text-sm text-accent/70 leading-relaxed">
                  Learning, experimenting, and finding better ways to solve
                  problems are part of the work.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* OPEN POSITIONS + FUTURE */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 py-6">
          <div className="grid md:grid-cols-2 gap-6">

            {/* OPEN POSITIONS */}
            <div className="bg-surface text-accent rounded-lg p-7 sm:p-8">
              <p className="text-xs uppercase tracking-[0.25em] text-olive mb-4">
                Open Positions
              </p>

              <h2 className="text-2xl sm:text-3xl font-medium mb-5">
                We're not hiring right now.
              </h2>

              <p className="text-accent/75 leading-relaxed">
                There are currently no open positions at Transcend Technology.
                As the company and our products grow, we'll post opportunities
                here.
              </p>
            </div>

            {/* FUTURE OPPORTUNITIES */}
            <div className="bg-surface text-accent rounded-lg p-7 sm:p-8">
              <p className="text-xs uppercase tracking-[0.25em] text-olive mb-4">
                Looking Ahead
              </p>

              <h2 className="text-2xl sm:text-3xl font-medium mb-5">
                Future opportunities.
              </h2>

              <p className="text-accent/75 leading-relaxed mb-6">
                As Transcend grows, areas where we may eventually expand
                include:
              </p>

              <div className="space-y-3 text-accent/75">
                <p>Software Engineering</p>
                <p>Security &amp; Compliance</p>
                <p>Product &amp; UX Design</p>
                <p>Customer Success &amp; Support</p>
                <p>Web &amp; Digital Development</p>
              </div>
            </div>

          </div>
        </section>

        {/* CONNECT */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 pt-8 pb-20 sm:pb-24">
          <div className="border-t border-surface/20 pt-10">

            <p className="text-xs uppercase tracking-[0.25em] text-rose mb-4">
              Stay Connected
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-5">
              Interested in what we're building?
            </h2>

            <p className="text-surface/80 leading-relaxed max-w-3xl mb-6">
              Even when we're not actively hiring, we're always interested in
              connecting with thoughtful people who care about building useful,
              responsible technology.
            </p>

            <a
              href="mailto:heidi@transcendtechnology.com"
              className="inline-block text-lg sm:text-xl text-surface hover:text-rose transition-colors break-all sm:break-normal"
            >
              heidi@transcendtechnology.com
            </a>

          </div>
        </section>

      </main>
    </>
  );
}
