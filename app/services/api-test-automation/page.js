import Link from "next/link";

export const metadata = {
  title: "API Test Automation Services | Remote QA Engineer",
  description:
    "Remote API test automation services for REST and backend validation, contract testing, and CI integration.",
  openGraph: {
    title: "API Test Automation Services | Remote QA Engineer",
    description:
      "Hire a remote QA engineer for API test automation, backend validation, and CI-ready service testing.",
    url: "https://qumbar.vercel.app/services/api-test-automation",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "API Test Automation Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "API Test Automation Services | Remote QA Engineer",
    description:
      "Remote API test automation for REST services, contract checking, and backend validation.",
    images: ["/og-image.svg"],
    creator: "@qumbarmaqbool",
  },
  alternates: {
    canonical: "https://qumbar.vercel.app/services/api-test-automation",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "API Test Automation Services",
  provider: {
    "@type": "Person",
    name: "Qumbar Maqbool",
    url: "https://qumbar.vercel.app",
  },
  description:
    "Remote API test automation for REST endpoints, contract validation, and backend service assurance.",
  serviceType: "API Test Automation, Backend Validation, Contract Testing",
  areaServed: ["Worldwide"],
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: "https://qumbar.vercel.app/hire",
  },
};

export default function ApiTestAutomationPage() {
  return (
    <main className="py-14 px-6 text-white max-w-5xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <section className="space-y-8">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-pink-500">
            API Testing
          </p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
            Remote API Test Automation Services
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Validate REST APIs, backend workflows, and service dependencies with
            automation that runs reliably in CI and production pipelines.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-7">
            <h2 className="text-2xl font-semibold text-white">What I cover</h2>
            <ul className="mt-4 space-y-3 text-gray-300 list-disc list-inside">
              <li>REST API automation with request/response validation</li>
              <li>Contract testing and schema validation</li>
              <li>End-to-end backend workflow verification</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-7">
            <h2 className="text-2xl font-semibold text-white">
              Trusted approach
            </h2>
            <p className="mt-4 text-gray-300">
              I build test automation that checks functional behavior, data
              integrity, authentication, and performance across backend
              services.
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-7">
          <h2 className="text-2xl font-semibold text-white">Deliverables</h2>
          <ul className="mt-4 space-y-3 text-gray-300 list-disc list-inside">
            <li>
              API automation scripts with reusable helpers and environment
              support
            </li>
            <li>Integration of API tests into CI/CD workflows</li>
            <li>
              Dashboard-ready test reports and issue signals for development
              teams
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/hire"
            className="rounded-full bg-pink-600 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-pink-500"
          >
            Hire for API Testing
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
