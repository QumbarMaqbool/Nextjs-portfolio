import Link from "next/link";

export const metadata = {
  title: "CI/CD Test Integration Services | Remote QA Engineer",
  description:
    "Remote CI/CD test integration services for automated test execution with Jenkins, GitHub Actions, and Bitbucket Pipelines.",
  openGraph: {
    title: "CI/CD Test Integration Services | Remote QA Engineer",
    description:
      "Integrate automated tests into CI/CD pipelines so QA runs automatically on every build and deployment.",
    url: "https://qumbar.vercel.app/services/ci-cd-testing",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "CI/CD Test Integration Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CI/CD Test Integration Services | Remote QA Engineer",
    description:
      "Remote QA engineer services for CI/CD test automation in Jenkins, GitHub Actions, and Bitbucket Pipelines.",
    images: ["/og-image.svg"],
    creator: "@qumbarmaqbool",
  },
  alternates: {
    canonical: "https://qumbar.vercel.app/services/ci-cd-testing",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "CI/CD Test Integration Services",
  provider: {
    "@type": "Person",
    name: "Qumbar Maqbool",
    url: "https://qumbar.vercel.app",
  },
  description:
    "Remote CI/CD test integration services for automated quality checks inside build and deployment pipelines.",
  serviceType: "CI/CD Test Integration, Pipeline Automation, Build Validation",
  areaServed: ["Worldwide"],
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: "https://qumbar.vercel.app/hire",
  },
};

export default function CiCdTestingPage() {
  return (
    <main className="py-14 px-6 text-white max-w-5xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <section className="space-y-8">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-pink-500">
            CI/CD & Automation
          </p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
            Remote CI/CD Test Integration Services
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Integrate automated tests into Jenkins, GitHub Actions, or Bitbucket
            Pipelines so every build and deployment includes quality checks.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-7">
            <h2 className="text-2xl font-semibold text-white">
              Pipeline testing
            </h2>
            <ul className="mt-4 space-y-3 text-gray-300 list-disc list-inside">
              <li>
                CI-ready test execution on merge, build, and release workflows
              </li>
              <li>Automated regression and smoke checks</li>
              <li>Test status reporting and failure notifications</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-7">
            <h2 className="text-2xl font-semibold text-white">
              Reliable results
            </h2>
            <p className="mt-4 text-gray-300">
              I ensure tests run consistently in CI environments by using stable
              automation architecture, environment-aware configuration, and
              parallel execution where needed.
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-7">
          <h2 className="text-2xl font-semibold text-white">What you get</h2>
          <ul className="mt-4 space-y-3 text-gray-300 list-disc list-inside">
            <li>
              CI/CD automation with Jenkins, GitHub Actions, or Bitbucket
              Pipelines
            </li>
            <li>Actionable test failure logs and fast feedback loops</li>
            <li>Release confidence through automated quality gates</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/hire"
            className="rounded-full bg-pink-600 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-pink-500"
          >
            Hire for CI/CD Testing
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
