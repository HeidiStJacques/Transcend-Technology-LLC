import React from "react";
import { Helmet } from "react-helmet-async";

export default function Products() {
  return (
    <main className="bg-[#f5f2eb] text-gray-800">
      <Helmet>
        <title>Products | Transcend Technology</title>
        <meta
          name="description"
          content="Explore Transcend Technology products, including SocialBright, a secure case management platform for healthcare and social service organizations."
        />
        <link
          rel="canonical"
          href="https://transcendtechnology.com/products"
        />
      </Helmet>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Page Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-5 sm:mb-6">
          Our Products
        </h1>

        {/* Intro */}
        <p className="text-base sm:text-lg leading-relaxed mb-8 sm:mb-10">
          Transcend Technology builds software products designed for
          organizations that require security, reliability, and clarity.
          Each product is developed with real operational needs in mind — not
          generic use cases.
        </p>

        {/* SocialBright */}
        <div className="border-t pt-8 sm:pt-10 mb-10 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
            SocialBright
          </h2>

          <p className="leading-relaxed mb-4">
            <strong>SocialBright</strong> is a HIPAA-aligned case management
            platform built for healthcare and social service organizations. It
            helps teams manage client data, documentation, tasks, and compliance
            requirements in one secure system.
          </p>

          <p className="leading-relaxed mb-5 sm:mb-6">
            The platform is designed to support real-world workflows, reduce
            administrative burden, and maintain data integrity across teams and
            organizations.
          </p>

          <ul className="list-disc pl-5 sm:pl-6 space-y-2 mb-5 sm:mb-6">
            <li>Client and case management</li>
            <li>Secure document storage and tracking</li>
            <li>Care planning and service coordination</li>
            <li>Task management and scheduling</li>
            <li>Compliance-focused data handling</li>
          </ul>

          <p className="leading-relaxed">
            SocialBright is built to scale with organizations as they grow,
            without sacrificing usability or security.
          </p>
        </div>

        {/* Custom Solutions */}
        <div className="border-t pt-8 sm:pt-10 mb-10 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
            Custom Software Solutions
          </h2>

          <p className="leading-relaxed mb-4">
            In addition to our core platform, Transcend Technology designs custom
            software solutions for organizations with specialized requirements.
          </p>

          <p className="leading-relaxed mb-5 sm:mb-6">
            These solutions are tailored to the organization’s workflows,
            compliance obligations, and long-term goals — with a focus on
            maintainability and security.
          </p>

          <ul className="list-disc pl-5 sm:pl-6 space-y-2">
            <li>Internal tools and dashboards</li>
            <li>Workflow automation</li>
            <li>Secure data systems</li>
            <li>Integration with existing platforms</li>
          </ul>
        </div>

        {/* Philosophy */}
        <div className="border-t pt-8 sm:pt-10">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
            Built With Purpose
          </h2>

          <p className="leading-relaxed">
            Every product we build follows the same principles: security by
            design, clear user experiences, and systems that support people
            doing important work — without unnecessary complexity.
          </p>
        </div>
      </section>
    </main>
  );
}
