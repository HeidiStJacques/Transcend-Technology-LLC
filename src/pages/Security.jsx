import React from "react";
import { Helmet } from "react-helmet-async";

export default function Security() {
  return (
    <>
      <Helmet>
        <title>Security | Transcend Technology</title>

        <meta
          name="description"
          content="Learn how Transcend Technology approaches security, data protection, access control, and compliance-focused software design."
        />

        <link
          rel="canonical"
          href="https://transcendtechnology.com/security"
        />
      </Helmet>

      <main className="hero-pattern text-surface">

        {/* PAGE HERO */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 pt-20 sm:pt-24 pb-12 sm:pb-16">
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-rose mb-5">
            Security
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-medium leading-[1.05] mb-6">
            Built with security in mind.
          </h1>

          <p className="text-lg sm:text-xl text-surface/80 leading-relaxed max-w-3xl">
            Security is considered throughout the way we design and build
            software — from architecture and authentication to data handling,
            access controls, and long-term system maintenance.
          </p>
        </section>

        {/* SECURITY BY DESIGN */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 pb-6">
          <div className="bg-surface text-accent rounded-lg p-7 sm:p-10">
            <p className="text-xs uppercase tracking-[0.25em] text-olive mb-4">
              Security by Design
            </p>

            <h2 className="text-3xl sm:text-4xl font-medium mb-5">
              Security starts with the foundation.
            </h2>

            <p className="text-accent/75 leading-relaxed max-w-4xl mb-8">
              We approach security as part of the system architecture rather
              than a feature added at the end of development. Applications are
              designed with clear boundaries around users, permissions, data,
              and access from the beginning.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="border-t border-accent/15 pt-4">
                <h3 className="text-lg font-medium mb-2">
                  Access Control
                </h3>

                <p className="text-sm text-accent/70 leading-relaxed">
                  Permissions and roles are designed around the access users
                  actually need.
                </p>
              </div>

              <div className="border-t border-accent/15 pt-4">
                <h3 className="text-lg font-medium mb-2">
                  Data Separation
                </h3>

                <p className="text-sm text-accent/70 leading-relaxed">
                  Systems can be structured to maintain clear boundaries
                  between organizations and their data.
                </p>
              </div>

              <div className="border-t border-accent/15 pt-4">
                <h3 className="text-lg font-medium mb-2">
                  Authentication
                </h3>

                <p className="text-sm text-accent/70 leading-relaxed">
                  Authentication and session controls help protect access to
                  application functionality and information.
                </p>
              </div>

              <div className="border-t border-accent/15 pt-4">
                <h3 className="text-lg font-medium mb-2">
                  Accountability
                </h3>

                <p className="text-sm text-accent/70 leading-relaxed">
                  Audit-friendly design helps provide visibility into important
                  activity within sensitive systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* DATA + COMPLIANCE */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 py-6">
          <div className="grid md:grid-cols-2 gap-6">

            {/* DATA PROTECTION */}
            <div className="bg-surface text-accent rounded-lg p-7 sm:p-8">
              <p className="text-xs uppercase tracking-[0.25em] text-olive mb-4">
                Data Protection
              </p>

              <h2 className="text-2xl sm:text-3xl font-medium mb-5">
                Protecting sensitive information.
              </h2>

              <p className="text-accent/75 leading-relaxed mb-6">
                Applications that handle sensitive information require
                deliberate decisions about how data is transmitted, stored,
                accessed, and exposed throughout the system.
              </p>

              <ul className="space-y-3 text-accent/75">
                <li>Encryption practices for sensitive data</li>
                <li>Protected network communications</li>
                <li>Role-based access controls</li>
                <li>Controlled visibility of information</li>
                <li>Secure authentication practices</li>
              </ul>
            </div>

            {/* COMPLIANCE */}
            <div className="bg-surface text-accent rounded-lg p-7 sm:p-8">
              <p className="text-xs uppercase tracking-[0.25em] text-olive mb-4">
                Compliance-Focused Design
              </p>

              <h2 className="text-2xl sm:text-3xl font-medium mb-5">
                Supporting regulated environments.
              </h2>

              <p className="text-accent/75 leading-relaxed mb-6">
                Some Transcend products are designed for environments where
                privacy, accountability, and regulatory requirements are part
                of everyday operations.
              </p>

              <ul className="space-y-3 text-accent/75">
                <li>HIPAA-aligned application design where applicable</li>
                <li>Audit logging and accountability</li>
                <li>Role and permission management</li>
                <li>Controlled access to sensitive records</li>
                <li>Support for organizational security policies</li>
              </ul>
            </div>

          </div>
        </section>

        {/* OPERATIONAL SECURITY */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 py-6">
          <div className="bg-surface text-accent rounded-lg p-7 sm:p-10">
            <p className="text-xs uppercase tracking-[0.25em] text-olive mb-4">
              Operational Security
            </p>

            <h2 className="text-3xl sm:text-4xl font-medium mb-5">
              Security continues after launch.
            </h2>

            <p className="text-accent/75 leading-relaxed max-w-4xl">
              Secure software requires ongoing attention. System maintenance,
              dependency updates, monitoring, logging, infrastructure
              configuration, and review all contribute to reducing risk as
              applications evolve.
            </p>
          </div>
        </section>

        {/* RESPONSIBILITY */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 pt-8 pb-20 sm:pb-24">
          <div className="border-t border-surface/20 pt-10">

            <p className="text-xs uppercase tracking-[0.25em] text-rose mb-4">
              Responsibility
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-5">
              Trust requires accountability.
            </h2>

            <p className="text-surface/80 leading-relaxed max-w-3xl">
              Security is an ongoing process rather than a finished feature.
              As our products and technology evolve, we continue to review how
              systems are designed, operated, and protected.
            </p>

          </div>
        </section>

      </main>
    </>
  );
}
