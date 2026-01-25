import React from "react";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <main className="bg-[#f5f2eb] text-gray-800">
      <Helmet>
        <title>Contact | Transcend Technology</title>
        <meta
          name="description"
          content="Contact Transcend Technology to learn more about our secure software products or discuss your organization’s needs."
        />
        <link
          rel="canonical"
          href="https://transcendtechnology.com/contact"
        />
      </Helmet>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Page Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
          Contact
        </h1>

        {/* Intro */}
        <p className="text-base sm:text-lg leading-relaxed mb-10 max-w-3xl">
          If you have questions about our products, need more information, or
          want to explore whether Transcend Technology is a good fit for your
          organization, feel free to reach out.
        </p>

        {/* Contact Info */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8 max-w-2xl">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            Get in Touch
          </h2>

          <p className="leading-relaxed mb-6">
            We work with organizations that value security, clarity, and
            dependable systems. Email is the best way to reach us, and we’ll
            respond as soon as possible.
          </p>

          <div>
            <p className="font-medium mb-1">Email</p>
            <a
              href="mailto:contact@transcendtechnology.com"
              className="text-[#2f3f52] hover:underline break-all sm:break-normal"
            >
              contact@transcendtechnology.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
