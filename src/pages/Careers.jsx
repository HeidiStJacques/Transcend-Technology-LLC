import React from "react";
import { Helmet } from "react-helmet-async";

export default function Careers() {
  return (
    <main className="bg-[#f5f2eb] text-gray-800">
      <Helmet>
        <title>Careers | Transcend Technology</title>
        <meta
          name="description"
          content="Learn about careers at Transcend Technology and future opportunities to work on secure, compliance-focused software."
        />
        <link
          rel="canonical"
          href="https://transcendtechnology.com/careers"
        />
      </Helmet>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Page Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-5 sm:mb-6">
          Careers
        </h1>

        {/* Intro */}
        <p className="text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 max-w-3xl">
          Transcend Technology is building secure, practical software for
          organizations that manage sensitive and complex data. As we grow,
          we’re looking for people who value clarity, responsibility, and
          thoughtful engineering.
        </p>

        {/* How We Work */}
        <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
          How We Work
        </h2>

        <p className="leading-relaxed mb-5 sm:mb-6">
          We’re a small, focused team that prioritizes quality over speed and
          usability over trends. Our work is deliberate, collaborative, and
          grounded in real-world needs — especially in healthcare and social
          services.
        </p>

        <ul className="list-disc pl-5 sm:pl-6 space-y-2 mb-10 sm:mb-12">
          <li>Security and compliance are foundational, not optional</li>
          <li>Clear communication matters</li>
          <li>Work is driven by purpose, not hype</li>
          <li>Systems are built to last</li>
        </ul>

        {/* Open Roles */}
        <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
          Open Positions
        </h2>

        <p className="leading-relaxed mb-8 sm:mb-10">
          We are not actively hiring at this time. However, we’re always open to
          connecting with thoughtful, skilled professionals who align with our
          mission and values.
        </p>

        {/* Future Opportunities */}
        <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
          Future Opportunities
        </h2>

        <p className="leading-relaxed mb-4 sm:mb-6">
          As Transcend Technology grows, future roles may include:
        </p>

        <ul className="list-disc pl-5 sm:pl-6 space-y-2 mb-10 sm:mb-12">
          <li>Software Engineering</li>
          <li>Security and Compliance</li>
          <li>Product and UX Design</li>
          <li>Customer Success and Support</li>
        </ul>

        {/* Contact */}
        <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
          Get in Touch
        </h2>

        <p className="leading-relaxed mb-3 sm:mb-4">
          If you’re interested in future opportunities or want to introduce
          yourself, feel free to reach out.
        </p>

        <p>
          <a
            href="mailto:careers@transcendtechnology.com"
            className="text-[#2f3f52] hover:underline break-all sm:break-normal"
          >
            careers@transcendtechnology.com
          </a>
        </p>
      </section>
    </main>
  );
}
