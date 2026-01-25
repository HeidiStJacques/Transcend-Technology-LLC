import React from "react";
import { Helmet } from "react-helmet-async";

export default function Security() {
  return (
    <main className="bg-[#f5f2eb] text-gray-800">
      <Helmet>
        <title>Security | Transcend Technology</title>
        <meta
          name="description"
          content="Learn how Transcend Technology approaches security, data protection, and compliance-focused software design."
        />
        <link
          rel="canonical"
          href="https://transcendtechnology.com/security"
        />
      </Helmet>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Page Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-5 sm:mb-6">
          Security & Data Protection
        </h1>

        {/* Intro */}
        <p className="text-base sm:text-lg leading-relaxed mb-8 sm:mb-10">
          Security is a foundational part of how Transcend Technology designs and
          builds software. Our systems are created to protect sensitive data,
          support compliance requirements, and reduce risk — without sacrificing
          usability.
        </p>

        {/* Core Principles */}
        <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
          Security by Design
        </h2>
        <p className="leading-relaxed mb-5 sm:mb-6">
          We take a security-by-design approach, meaning protections are built
          into the architecture from the start rather than added later. This
          approach supports long-term stability and reduces the likelihood of
          data exposure.
        </p>

        <ul className="list-disc pl-5 sm:pl-6 space-y-2 mb-10 sm:mb-12">
          <li>Secure system architecture and access controls</li>
          <li>Principle of least privilege</li>
          <li>Data isolation and tenant separation</li>
          <li>Continuous attention to system integrity</li>
        </ul>

        {/* Data Protection */}
        <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
          Data Protection
        </h2>
        <p className="leading-relaxed mb-5 sm:mb-6">
          We design our platforms to safeguard sensitive information at every
          stage — from data entry to storage and access. Strong encryption
          practices and controlled access help ensure data remains protected.
        </p>

        <ul className="list-disc pl-5 sm:pl-6 space-y-2 mb-10 sm:mb-12">
          <li>Encryption for data in transit and at rest</li>
          <li>Role-based access controls</li>
          <li>Secure authentication mechanisms</li>
          <li>Audit-friendly system design</li>
        </ul>

        {/* Compliance */}
        <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
          Compliance-Focused Platforms
        </h2>
        <p className="leading-relaxed mb-5 sm:mb-6">
          Our products are designed to support compliance with regulations such
          as HIPAA. While compliance is a shared responsibility, we provide the
          technical foundations needed to help organizations meet their
          obligations.
        </p>

        <ul className="list-disc pl-5 sm:pl-6 space-y-2 mb-10 sm:mb-12">
          <li>Secure handling of protected health information (PHI)</li>
          <li>Audit logs and accountability</li>
          <li>Controlled data access and visibility</li>
          <li>Infrastructure aligned with compliance needs</li>
        </ul>

        {/* Operational Security */}
        <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
          Operational Security
        </h2>
        <p className="leading-relaxed mb-10 sm:mb-12">
          Beyond code, we consider how systems are operated and maintained.
          Security includes monitoring, updates, and responsible management of
          infrastructure to reduce risk over time.
        </p>

        {/* Transparency */}
        <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
          Transparency & Responsibility
        </h2>
        <p className="leading-relaxed">
          We believe trust is built through transparency and accountability. Our
          security practices are continuously evaluated and improved as systems
          evolve and new risks emerge.
        </p>
      </section>
    </main>
  );
}
