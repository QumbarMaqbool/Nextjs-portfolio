import Link from "next/link";

export const metadata = {
  title: "Playwright Test Automation Services | Remote QA Engineer",
  description:
    "Remote Playwright test automation services with Java and Cucumber BDD for cross-browser regression, UI automation, and CI-ready test suites.",
  openGraph: {
    title: "Playwright Test Automation Services | Remote QA Engineer",
    description:
      "Remote Playwright automation services for cross-browser UI testing, regression test suites, and CI/CD integration.",
    url: "https://qumbar.vercel.app/services/playwright-test-automation",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Playwright Test Automation Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Playwright Test Automation Services | Remote QA Engineer",
    description:
      "Hire a remote QA engineer for Playwright test automation, cross-browser regression, and CI/CD-ready automation frameworks.",
    images: ["/og-image.svg"],
    creator: "@qumbarmaqbool",
  },
  alternates: {
    canonical: "https://qumbar.vercel.app/services/playwright-test-automation",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Playwright Test Automation Services",
  provider: {
    "@type": "Person",
    name: "Qumbar Maqbool",
    url: "https://qumbar.vercel.app",
  },
  description:
    "Remote Playwright test automation services for cross-browser UI and regression testing.",
  serviceType: "Playwright Test Automation, UI Testing, Regression Automation",
  areaServed: ["Worldwide"],
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: "https://qumbar.vercel.app/hire",
  },
};

export default function PlaywrightAutomationPage() {
  return (
    <main className="py-14 px-6 text-white max-w-5xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <section className="space-y-8">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-pink-500">
            Playwright Services
          </p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
            Remote Playwright Test Automation Services
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Build cross-browser Playwright automation that runs reliably in
            CI/CD and delivers measurable QA value for web applications.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-7">
            <h2 className="text-2xl font-semibold text-white">
              What I automate
            </h2>
            <ul className="mt-4 space-y-3 text-gray-300 list-disc list-inside">
              <li>
                End-to-end browser workflows, login scenarios, and purchase
                journeys
              </li>
              <li>Cross-browser testing on Chromium, Firefox, and WebKit</li>
              <li>Regression suites for release-ready app quality</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-7">
            <h2 className="text-2xl font-semibold text-white">
              Why Playwright
            </h2>
            <p className="mt-4 text-gray-300">
              Playwright is ideal for modern web apps because it supports
              parallel execution, browser automation, stable selectors, and
              robust reporting for fast feedback.
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-7">
          <h2 className="text-2xl font-semibold text-white">How I deliver</h2>
          <ul className="mt-4 space-y-3 text-gray-300 list-disc list-inside">
            <li>
              Reusable page object models and shared automation components
            </li>
            <li>
              Readable BDD scenarios using Cucumber for non-technical reporting
            </li>
            <li>CI/CD integration for automated test runs on every merge</li>
            <li>Clear dashboards and traceable regression results</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/hire"
            className="rounded-full bg-pink-600 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-pink-500"
          >
            Hire for Playwright Automation
          </Link>
          <Link
            href="/services"
            className="rounded-full border border-slate-700 px-6 py-3 text-center text-sm font-semibold text-white transition hover:border-pink-500 hover:text-pink-400"
          >
            See Other Services
          </Link>
        </div>
      </section>
    </main>
  );
}
