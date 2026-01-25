import React from "react";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>
          Transcend Technology | Secure Software for Regulated Environments
        </title>
        <meta
          name="description"
          content="Transcend Technology builds secure, long-term software platforms for regulated and mission-critical environments, including healthcare and social services."
        />
        <link rel="canonical" href="https://transcendtechnology.com/" />
      </Helmet>

      {/* HERO */}
      <section className="relative h-[60vh] min-h-[420px] sm:h-[70vh] sm:min-h-[520px] w-full">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero-architecture.jpg')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-surface/75" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-semibold text-accent mb-4 sm:mb-6"
              style={{ fontFamily: "Raleway, system-ui, sans-serif" }}
            >
              Technology built for trust.
            </h1>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Transcend Technology is a holding company focused on building and
              supporting secure, long-term software platforms for regulated and
              mission-critical environments.
            </p>
          </div>
        </div>
      </section>

      {/* PLATFORMS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 pb-20 sm:pb-28">
        <h2
          className="text-xl sm:text-2xl font-semibold text-accent mt-10 sm:mt-12 mb-4 sm:mb-6"
          style={{ fontFamily: "Raleway, system-ui, sans-serif" }}
        >
          Our platforms
        </h2>

        <div className="bg-white/60 border border-gray-200 p-5 sm:p-6 rounded-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            SocialBright
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            A secure case management and care coordination platform designed for
            regulated service providers.
          </p>
        </div>
      </section>
    </>
  );
}
