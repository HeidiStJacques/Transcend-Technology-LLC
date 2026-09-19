import React from "react";
import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About | Transcend Technology</title>
        <meta
          name="description"
          content="Learn about Transcend Technology, a software company building thoughtful technology, secure platforms, and custom digital solutions."
        />
        <link
          rel="canonical"
          href="https://transcendtechnology.com/about"
        />
      </Helmet>

      <main className="hero-pattern text-surface">

        {/* PAGE INTRO */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 pt-16 sm:pt-24 pb-10 sm:pb-14">
          <p className="text-rose uppercase tracking-[0.22em] text-xs sm:text-sm font-semibold mb-4">
            About Transcend Technology
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium leading-tight mb-6">
            Technology built around people.
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-surface/85 leading-relaxed max-w-3xl">
            Transcend Technology builds thoughtful digital products and custom
            technology solutions designed around real problems, real workflows,
            and the people who use them.
          </p>
        </section>

        {/* WHO WE ARE */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 pb-8">
          <div className="bg-surface text-accent rounded-lg p-7 sm:p-10">
            <p className="text-olive uppercase tracking-[0.2em] text-xs font-semibold mb-3">
              Who We Are
            </p>

            <h2 className="text-2xl sm:text-3xl font-medium mb-5">
              Practical technology with a purpose.
            </h2>

            <p className="text-accent/75 leading-relaxed mb-4 max-w-4xl">
              Transcend Technology develops software and digital experiences
              with an emphasis on usability, reliability, and thoughtful
              design. Our work ranges from secure software platforms to mobile
              applications and custom websites.
            </p>

            <p className="text-accent/75 leading-relaxed max-w-4xl">
              Instead of building technology simply because it can be built,
              we start with the problem it needs to solve. The result is
              technology designed to be useful, understandable, and capable
              of growing with the people and organizations that rely on it.
            </p>
          </div>
        </section>

        {/* WHAT WE BUILD */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-surface text-accent rounded-lg p-7 sm:p-8">
              <p className="text-olive uppercase tracking-[0.2em] text-xs font-semibold mb-3">
                What We Build
              </p>

              <h2 className="text-2xl sm:text-3xl font-medium mb-5">
                From platforms to digital experiences.
              </h2>

              <ul className="space-y-3 text-accent/75">
                <li>Secure software platforms</li>
                <li>Mobile applications</li>
                <li>Custom business websites</li>
                <li>Workflow and organizational tools</li>
                <li>Purpose-built digital products</li>
              </ul>
            </div>

            <div className="bg-surface text-accent rounded-lg p-7 sm:p-8">
              <p className="text-olive uppercase tracking-[0.2em] text-xs font-semibold mb-3">
                Our Approach
              </p>

              <h2 className="text-2xl sm:text-3xl font-medium mb-5">
                Thoughtful by design.
              </h2>

              <ul className="space-y-3 text-accent/75">
                <li>Start with the real-world problem</li>
                <li>Keep the experience clear and intuitive</li>
                <li>Build security into the foundation</li>
                <li>Design systems that can evolve</li>
                <li>Choose function and clarity over unnecessary complexity</li>
              </ul>
            </div>

          </div>
        </section>

        {/* FOUNDER */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
          <div className="bg-surface text-accent rounded-lg p-7 sm:p-10">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start">

              <img
                src="/images/heidi-founder.png"
                alt="Heidi, Founder of Transcend Technology"
                className="w-40 h-40 sm:w-48 sm:h-48 object-cover rounded-lg"
              />

              <div>
                <p className="text-olive uppercase tracking-[0.2em] text-xs font-semibold mb-3">
                  Founder
                </p>

                <h2 className="text-2xl sm:text-3xl font-medium mb-2">
                  Heidi
                </h2>

                <p className="text-rose font-medium mb-5">
                  Founder &amp; Software Developer
                </p>

                <p className="text-accent/75 leading-relaxed mb-4">
                  Transcend Technology grew from a simple idea: technology
                  should make complicated things easier, not create more work.
                  That idea continues to shape the way every Transcend project
                  is approached.
                </p>

                <p className="text-accent/75 leading-relaxed">
                  With experience in human services and technology, Heidi
                  brings an understanding of both the technical side of
                  building software and the day-to-day realities of the people
                  who actually use it. That perspective has influenced projects
                  ranging from case management software to consumer
                  applications and custom websites.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* LOOKING AHEAD */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 pt-8 pb-20 sm:pb-24">
          <div className="border-t border-surface/20 pt-10">
            <p className="text-rose uppercase tracking-[0.2em] text-xs font-semibold mb-3">
              Looking Ahead
            </p>

            <h2 className="text-3xl sm:text-4xl font-medium mb-5">
              Building what comes next.
            </h2>

            <p className="text-surface/80 leading-relaxed max-w-3xl">
              Transcend Technology continues to develop new products, expand
              existing platforms, and work on technology that solves practical
              problems. Different projects may serve very different people,
              but the goal remains the same: create technology that is useful,
              thoughtful, and built to last.
            </p>
          </div>
        </section>

      </main>
    </>
  );
}
