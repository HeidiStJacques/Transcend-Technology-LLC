import React from "react";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact | Transcend Technology</title>

        <meta
          name="description"
          content="Contact Transcend Technology about our products, custom software development, websites, or other technology projects."
        />

        <link
          rel="canonical"
          href="https://transcendtechnology.com/contact"
        />
      </Helmet>

      <main className="hero-pattern text-surface">

        {/* PAGE HERO */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 pt-20 sm:pt-24 pb-12 sm:pb-16">
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-rose mb-5">
            Contact
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-medium leading-[1.05] mb-6 max-w-4xl">
            Have something in mind?
          </h1>

          <p className="text-lg sm:text-xl text-surface/80 leading-relaxed max-w-3xl">
            Whether you have a question about one of our products, need a
            website, or have an idea for something entirely new, we'd love to
            hear what you're working on.
          </p>
        </section>

        {/* CONTACT AREA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 pb-20 sm:pb-24">
          <div className="grid md:grid-cols-5 gap-6">

            {/* GET IN TOUCH */}
            <div className="md:col-span-3 bg-surface text-accent rounded-lg p-7 sm:p-10">
              <p className="text-xs uppercase tracking-[0.25em] text-olive mb-4">
                Get in Touch
              </p>

              <h2 className="text-3xl sm:text-4xl font-medium mb-5">
                Let's talk about your idea.
              </h2>

              <p className="text-accent/75 leading-relaxed mb-8 max-w-2xl">
                Tell us a little about what you're building, the problem you're
                trying to solve, or the technology support you're looking for.
                Email is currently the best way to start a conversation.
              </p>

              <div className="border-t border-accent/15 pt-6">
                <p className="text-xs uppercase tracking-[0.2em] text-olive mb-2">
                  Email
                </p>

                <a
                  href="mailto:heidi@transcendtechnology.com"
                  className="text-lg sm:text-xl font-medium text-accent hover:text-rose transition-colors break-all sm:break-normal"
                >
                  heidi@transcendtechnology.com
                </a>
              </div>
            </div>

            {/* WHAT WE CAN HELP WITH */}
            <div className="md:col-span-2 bg-surface text-accent rounded-lg p-7 sm:p-8">
              <p className="text-xs uppercase tracking-[0.25em] text-olive mb-4">
                What We Do
              </p>

              <h2 className="text-2xl sm:text-3xl font-medium mb-6">
                Ways we can help.
              </h2>

              <div className="space-y-5">
                <div className="border-t border-accent/15 pt-4">
                  <h3 className="font-medium mb-1">
                    Software Products
                  </h3>

                  <p className="text-sm text-accent/70 leading-relaxed">
                    Questions about SocialBright, DipVault, Payday Clarity, or
                    other Transcend products.
                  </p>
                </div>

                <div className="border-t border-accent/15 pt-4">
                  <h3 className="font-medium mb-1">
                    Custom Software
                  </h3>

                  <p className="text-sm text-accent/70 leading-relaxed">
                    Purpose-built applications, internal tools, workflows, and
                    digital solutions.
                  </p>
                </div>

                <div className="border-t border-accent/15 pt-4">
                  <h3 className="font-medium mb-1">
                    Web Development
                  </h3>

                  <p className="text-sm text-accent/70 leading-relaxed">
                    Thoughtful, custom websites built around your business,
                    brand, and audience.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* BOTTOM MESSAGE */}
          <div className="border-t border-surface/20 mt-12 sm:mt-16 pt-10">
            <p className="text-xs uppercase tracking-[0.25em] text-rose mb-4">
              Start a Conversation
            </p>

            <p className="text-xl sm:text-2xl md:text-3xl leading-relaxed max-w-4xl">
              You don't need to have everything figured out before reaching
              out. Sometimes the best place to start is simply with the problem
              you're trying to solve.
            </p>
          </div>

        </section>
      </main>
    </>
  );
}
