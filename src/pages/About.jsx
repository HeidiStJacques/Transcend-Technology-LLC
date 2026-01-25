import React from "react";
import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <main className="bg-[#f5f2eb] text-gray-800">
      <Helmet>
        <title>About | Transcend Technology</title>
        <meta
          name="description"
          content="Learn about Transcend Technology, a software company building secure, compliance-focused platforms for healthcare and social service organizations."
        />
        <link
          rel="canonical"
          href="https://transcendtechnology.com/about"
        />
      </Helmet>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Page Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-5 sm:mb-6">
          About Transcend Technology
        </h1>

        {/* Intro */}
        <p className="text-base sm:text-lg leading-relaxed mb-5 sm:mb-6">
          <strong>Transcend Technology</strong> builds secure, practical software
          for organizations that manage complex and sensitive data. Our focus is
          on systems that need to be reliable, compliant, and easy to use —
          especially in healthcare and social services.
        </p>

        <p className="leading-relaxed mb-8 sm:mb-10">
          We design software for real workflows, not demos. That means
          prioritizing data integrity, clarity, and long-term scalability over
          unnecessary features or trend-driven design.
        </p>

        {/* What We Build */}
        <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
          What We Build
        </h2>
        <ul className="list-disc pl-5 sm:pl-6 mb-8 sm:mb-10 space-y-2">
          <li>Secure, compliance-focused platforms</li>
          <li>Clean, intuitive user interfaces</li>
          <li>Scalable architectures designed for growth</li>
          <li>Tools that support real operational needs</li>
        </ul>

        <p className="leading-relaxed mb-10 sm:mb-12">
          Our flagship platform, <strong>SocialBright</strong>, is a
          HIPAA-aligned case management system built for agencies that need
          dependable tools without unnecessary complexity.
        </p>

        {/* Our Approach */}
        <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
          Our Approach
        </h2>
        <ul className="list-disc pl-5 sm:pl-6 mb-10 sm:mb-12 space-y-2">
          <li>Security and compliance are built in from day one</li>
          <li>Design decisions are driven by usability, not aesthetics alone</li>
          <li>Systems are built to evolve, not be rebuilt</li>
          <li>Simplicity is intentional, not accidental</li>
        </ul>

        {/* Founder Section */}
        <div className="flex flex-col md:flex-row items-start gap-6 sm:gap-8 border-t pt-10 sm:pt-12">
          <img
            src="/images/heidi-founder.png"
            alt="Heidi, Founder of Transcend Technology"
            className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-xl shadow-sm mx-auto md:mx-0"
          />

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              Founder
            </h2>
            <p className="font-medium mb-2">
              Heidi — Founder &amp; Software Engineer
            </p>
            <p className="leading-relaxed">
              Founder of Transcend Technology and creator of SocialBright. Heidi
              designs secure, scalable software systems for healthcare and social
              service organizations, with a strong focus on compliance, data
              integrity, and real-world usability.
            </p>
            <p className="leading-relaxed mt-4">
              Her work combines technical engineering with operational insight,
              ensuring platforms are built to support both organizations and the
              people they serve.
            </p>
          </div>
        </div>

        {/* Looking Ahead */}
        <div className="mt-10 sm:mt-12">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
            Looking Ahead
          </h2>
          <p className="leading-relaxed">
            Transcend Technology continues to expand its platforms and tooling
            with a clear focus: building dependable software that organizations
            can trust as they grow.
          </p>
        </div>
      </section>
    </main>
  );
}
