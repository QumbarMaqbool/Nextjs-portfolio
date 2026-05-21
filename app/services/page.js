import Link from "next/link";

export const metadata = {
  title: "QA Automation & Test Engineering Services | Remote SDET",
  description:
    "Hire a remote Senior QA Automation Engineer for worldwide Playwright test automation, API testing, CI/CD integration, and MERN application development.",
  openGraph: {
    title: "QA Automation & Test Engineering Services | Remote SDET",
    description:
      "Remote QA automation and test engineering services by Qumbar Maqbool. Specialized in Playwright, Cucumber BDD, Java automation, CI/CD pipelines, and MERN development.",
    url: "https://qumbar.vercel.app/services",
    siteName: "Qumbar Maqbool Portfolio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "QA Automation & Test Engineering Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QA Automation & Test Engineering Services | Remote SDET",
    description:
      "Remote QA automation, API testing, CI/CD integration, and MERN development services available worldwide.",
    images: ["/og-image.svg"],
    creator: "@qumbarmaqbool",
  },
  alternates: {
    canonical: "https://qumbar.vercel.app/services",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "QA Automation & Test Engineering Services",
  provider: {
    "@type": "Person",
    name: "Qumbar Maqbool",
    url: "https://qumbar.vercel.app",
  },
  description:
    "Professional QA automation services for global businesses, including Playwright test frameworks, API testing, CI/CD pipeline integration, and MERN application development.",
  serviceType:
    "Remote QA Automation, Test Framework Development, API Testing, CI/CD Test Integration, MERN Development",
  areaServed: ["Worldwide"],
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: "https://qumbar.vercel.app/hire",
  },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    description:
      "Available for freelance, contract, and remote QA automation engagements worldwide.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What QA automation services do you offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I provide remote test automation framework development with Java and Playwright, Cucumber BDD, REST API testing, CI/CD pipeline integration, and MERN development support for QA-aware applications.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work with international clients?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. I work with worldwide clients and remote teams across time zones, delivering QA automation, software testing, and MERN development services for businesses seeking reliable test engineering support.",
      },
    },
    {
      "@type": "Question",
      name: "How do you integrate automation into CI/CD?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I integrate automated test suites into CI/CD pipelines using Jenkins, GitHub Actions, Bitbucket Pipelines, and other tools to ensure test execution on every build and deployment.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://qumbar.vercel.app",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://qumbar.vercel.app/services",
    },
  ],
};

export default function ServicesPage() {
  return (
    <main className="py-10 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-pink-500">
            Services
          </p>
          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
            Remote QA Automation and Test Engineering Services
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-300">
            Trusted remote QA automation and MERN development services for
            startups and enterprises. Build reliable test coverage, accelerate
            releases, and ship high-quality applications worldwide.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-slate-800 bg-slate-950/80 p-7 shadow-xl shadow-slate-950/10">
            <h2 className="text-2xl font-semibold text-white">
              Playwright Test Automation
            </h2>
            <p className="mt-3 text-gray-300">
              End-to-end web test automation using Playwright with Java,
              TypeScript, or JavaScript. I build stable suites for UI,
              cross-browser, and regression testing with reusable architecture
              and clear reporting.
            </p>
            <ul className="mt-5 space-y-3 text-gray-300 list-disc list-inside">
              <li>
                Cross-browser automation for Chromium, Firefox, and Safari
              </li>
              <li>Page object model and reusable test architecture</li>
              <li>
                Cucumber BDD support for readable stakeholder-facing scenarios
              </li>
            </ul>
          </article>

          <article className="rounded-3xl border border-slate-800 bg-slate-950/80 p-7 shadow-xl shadow-slate-950/10">
            <h2 className="text-2xl font-semibold text-white">
              API & Backend Testing
            </h2>
            <p className="mt-3 text-gray-300">
              Reliable REST API and backend test automation with service-level
              validation, contract testing, and database verification for secure
              production-ready systems.
            </p>
            <ul className="mt-5 space-y-3 text-gray-300 list-disc list-inside">
              <li>
                REST API automation, contract validation, and response schema
                checks
              </li>
              <li>
                Database testing with PostgreSQL, MongoDB, and backend
                verification
              </li>
              <li>
                Integration tests for service workflows and third-party
                dependencies
              </li>
            </ul>
          </article>

          <article className="rounded-3xl border border-slate-800 bg-slate-950/80 p-7 shadow-xl shadow-slate-950/10">
            <h2 className="text-2xl font-semibold text-white">
              CI/CD Test Integration
            </h2>
            <p className="mt-3 text-gray-300">
              Seamless integration of automated tests into CI/CD pipelines using
              Jenkins, GitHub Actions, Bitbucket Pipelines, and cloud deployment
              workflows.
            </p>
            <ul className="mt-5 space-y-3 text-gray-300 list-disc list-inside">
              <li>Automated test execution on build, merge, and deployment</li>
              <li>Fast feedback loops for QA and development teams</li>
              <li>
                Deployment-ready pipelines for reliable release automation
              </li>
            </ul>
          </article>

          <article className="rounded-3xl border border-slate-800 bg-slate-950/80 p-7 shadow-xl shadow-slate-950/10">
            <h2 className="text-2xl font-semibold text-white">
              MERN & Full-Stack Development
            </h2>
            <p className="mt-3 text-gray-300">
              Full-stack application development and QA-aware software delivery
              using React, Next.js, Node.js, Express, and MongoDB for modern web
              applications.
            </p>
            <ul className="mt-5 space-y-3 text-gray-300 list-disc list-inside">
              <li>
                Production-grade single-page apps and server-rendered Next.js
                sites
              </li>
              <li>RESTful APIs, authentication, and secure backend services</li>
              <li>
                Performance optimization and accessibility-aware development
              </li>
            </ul>
          </article>
        </div>

        <div className="mt-12 rounded-3xl border border-slate-800 bg-slate-950/80 p-8 shadow-xl shadow-slate-950/10">
          <h2 className="text-2xl font-semibold text-white">
            Explore specialized services
          </h2>
          <p className="mt-3 text-gray-300">
            Each service has a dedicated landing page for better clarity and
            keyword coverage.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Link
              href="/services/playwright-test-automation"
              className="rounded-3xl border border-slate-700 bg-slate-950/80 p-6 text-left transition hover:border-pink-500"
            >
              <h3 className="text-lg font-semibold text-white">
                Playwright Test Automation
              </h3>
              <p className="mt-2 text-gray-300">
                Dedicated remote Playwright automation services for
                cross-browser UI testing.
              </p>
            </Link>
            <Link
              href="/services/api-test-automation"
              className="rounded-3xl border border-slate-700 bg-slate-950/80 p-6 text-left transition hover:border-pink-500"
            >
              <h3 className="text-lg font-semibold text-white">
                API Test Automation
              </h3>
              <p className="mt-2 text-gray-300">
                API testing and contract validation for RESTful services.
              </p>
            </Link>
            <Link
              href="/services/ci-cd-testing"
              className="rounded-3xl border border-slate-700 bg-slate-950/80 p-6 text-left transition hover:border-pink-500"
            >
              <h3 className="text-lg font-semibold text-white">
                CI/CD Test Integration
              </h3>
              <p className="mt-2 text-gray-300">
                Automated test execution inside Jenkins, GitHub Actions, and
                Bitbucket Pipelines.
              </p>
            </Link>
            <Link
              href="/services/mern-development"
              className="rounded-3xl border border-slate-700 bg-slate-950/80 p-6 text-left transition hover:border-pink-500"
            >
              <h3 className="text-lg font-semibold text-white">
                MERN Development
              </h3>
              <p className="mt-2 text-gray-300">
                QA-aware MERN app development with React, Next.js, Node.js, and
                MongoDB.
              </p>
            </Link>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-950/80 p-8 shadow-xl shadow-slate-950/10">
          <h2 className="text-2xl font-semibold text-white">
            Ready for worldwide remote work
          </h2>
          <p className="mt-3 text-gray-300">
            I partner with international clients to deliver automation and
            development services remotely. My goal is to reduce manual testing
            effort, improve release confidence, and help teams ship faster with
            reliable automation.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/hire"
              className="rounded-full bg-pink-600 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-pink-500 sm:w-auto"
            >
              Hire Remote QA Engineer
            </Link>
            <Link
              href="/#contact"
              className="rounded-full border border-slate-700 px-6 py-3 text-center text-sm font-semibold text-white transition hover:border-pink-500 hover:text-pink-400 sm:w-auto"
            >
              Contact for Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
