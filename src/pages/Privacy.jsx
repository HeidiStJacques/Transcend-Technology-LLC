import React from "react";
import { Helmet } from "react-helmet-async";

export default function Privacy() {
  return (
    <main className="bg-[#f5f2eb] text-gray-800">
      <Helmet>
        <title>Privacy Policy | Transcend Technology</title>
        <meta
          name="description"
          content="Read Transcend Technology’s privacy policy and learn how we collect, use, and protect personal information."
        />
        <link
          rel="canonical"
          href="https://transcendtechnology.com/privacy"
        />
      </Helmet>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Page Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-5 sm:mb-6">
          Privacy Policy
        </h1>

        <p className="text-sm text-gray-600 mb-8 sm:mb-10">
          Last updated: January 2026
        </p>

        {/* Intro */}
        <p className="leading-relaxed mb-6 sm:mb-8">
          Transcend Technology respects your privacy and is committed to
          protecting personal information. This Privacy Policy explains how we
          collect, use, and safeguard information when you visit our website or
          communicate with us.
        </p>

        {/* Information We Collect */}
        <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
          Information We Collect
        </h2>
        <p className="leading-relaxed mb-4">
          We may collect limited personal information when you voluntarily
          provide it, such as when you contact us through our website.
        </p>

        <ul className="list-disc pl-5 sm:pl-6 space-y-2 mb-6 sm:mb-8">
          <li>Name</li>
          <li>Email address</li>
          <li>Message content or inquiries</li>
        </ul>

        <p className="leading-relaxed mb-8 sm:mb-10">
          We do not collect sensitive personal data through this website unless
          explicitly required and clearly communicated.
        </p>

        {/* How Information Is Used */}
        <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
          How We Use Information
        </h2>
        <p className="leading-relaxed mb-4">
          Information collected is used solely to:
        </p>

        <ul className="list-disc pl-5 sm:pl-6 space-y-2 mb-8 sm:mb-10">
          <li>Respond to inquiries or requests</li>
          <li>Communicate about our products or services</li>
          <li>Improve website functionality and user experience</li>
        </ul>

        {/* Data Protection */}
        <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
          Data Protection
        </h2>
        <p className="leading-relaxed mb-8 sm:mb-10">
          We take reasonable administrative and technical measures to protect
          personal information from unauthorized access, disclosure, or misuse.
          However, no method of transmission over the internet is completely
          secure, and we cannot guarantee absolute security.
        </p>

        {/* Third-Party Services */}
        <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
          Third-Party Services
        </h2>
        <p className="leading-relaxed mb-8 sm:mb-10">
          This website may use trusted third-party services for hosting or
          analytics. These providers are only given access to information
          necessary to perform their services and are expected to protect it in
          accordance with applicable laws.
        </p>

        {/* HIPAA Notice */}
        <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
          Healthcare &amp; Compliance Notice
        </h2>
        <p className="leading-relaxed mb-8 sm:mb-10">
          While Transcend Technology develops compliance-focused software,
          information submitted through this public website is not intended for
          the transmission of protected health information (PHI). Do not submit
          sensitive or medical information through public contact forms.
        </p>

        {/* Your Choices */}
        <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
          Your Choices
        </h2>
        <p className="leading-relaxed mb-8 sm:mb-10">
          You may request access to, correction of, or deletion of your personal
          information by contacting us directly.
        </p>

        {/* Contact */}
        <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
          Contact Us
        </h2>
        <p className="leading-relaxed">
          If you have questions about this Privacy Policy or how your
          information is handled, you may contact us at:
        </p>

        <p className="mt-2">
          <a
            href="mailto:contact@transcendtechnology.com"
            className="text-[#2f3f52] hover:underline break-all sm:break-normal"
          >
            contact@transcendtechnology.com
          </a>
        </p>
      </section>
    </main>
  );
}
