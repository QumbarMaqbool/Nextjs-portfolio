export const metadata = {
  title: "Hire Remote QA Automation Engineer | Qumbar Maqbool",
  description:
    "Hire a remote Senior QA Automation Engineer for worldwide Playwright automation, API testing, CI/CD integration, and MERN development.",
  openGraph: {
    title: "Hire Remote QA Automation Engineer | Qumbar Maqbool",
    description:
      "Remote QA automation hiring page for expert Playwright, API testing, CI/CD integration, and MERN development services available globally.",
    url: "https://qumbar.vercel.app/hire",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Hire Remote QA Automation Engineer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire Remote QA Automation Engineer | Qumbar Maqbool",
    description:
      "Looking for a remote QA automation engineer for Playwright, Cucumber BDD, API testing, CI/CD, and MERN application QA? Contact Qumbar today.",
    images: ["/og-image.svg"],
    creator: "@qumbarmaqbool",
  },
  alternates: {
    canonical: "https://qumbar.vercel.app/hire",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Hire Remote QA Automation Engineer",
  provider: {
    "@type": "Person",
    name: "Qumbar Maqbool",
    url: "https://qumbar.vercel.app",
  },
  description:
    "Freelance QA automation and test engineering services for remote international clients.",
  serviceType:
    "Remote QA Automation, Playwright Test Automation, API Testing, CI/CD Pipeline Integration, MERN Development",
  areaServed: ["Worldwide"],
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: "https://qumbar.vercel.app/hire",
  },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    description:
      "Remote freelance QA automation and test engineering available for worldwide clients.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does a remote QA automation engagement include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It includes test automation strategy, framework development, Playwright and API automation, CI/CD pipeline integration, and quality engineering support throughout development and release cycles.",
      },
    },
    {
      "@type": "Question",
      name: "Which automation tools do you work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I work with Java, Playwright, Cucumber BDD, JUnit, REST API automation, Jenkins, GitHub Actions, Bitbucket Pipelines, PostgreSQL, MongoDB, React, Next.js, and Node.js.",
      },
    },
    {
      "@type": "Question",
      name: "Can you support international teams?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. I support international clients with remote test engineering and QA automation services across time zones.",
      },
    },
  ],
};

export default function HirePage() {
  return (
    <main className="text-white py-20 px-6 max-w-4xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <h1 className="text-4xl font-bold mb-6">
        Hire a Remote QA Automation Engineer
      </h1>
      <p className="text-gray-300 mb-8 text-lg">
        I&apos;m Qumbar Maqbool, a freelance SDET and QA Automation Engineer
        with 4+ years of experience building robust test automation frameworks
        using Java, Playwright, and Cucumber BDD. I help companies reduce manual
        QA effort, increase release confidence, and ship faster through
        automation.
      </p>

      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">What I deliver</h2>
          <ul className="text-gray-300 space-y-2 list-disc list-inside">
            <li>
              Remote end-to-end test automation frameworks with Playwright and
              Cucumber BDD
            </li>
            <li>
              REST API automation, contract testing, and backend validation
            </li>
            <li>
              CI/CD integration for test execution in Jenkins, GitHub Actions,
              or Bitbucket Pipelines
            </li>
            <li>
              QA strategy, test architecture review, and automation consulting
            </li>
            <li>
              Full-stack MERN development and QA-aware web application delivery
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Why choose me</h2>
          <p className="text-gray-300">
            I combine strong QA automation experience with full-stack
            development skills. That means I can build and validate modern web
            applications while ensuring test coverage, deployment readiness, and
            smooth collaboration with engineering teams.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Services I offer</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5">
              <h3 className="font-semibold text-white">
                Automation Engineering
              </h3>
              <p className="text-gray-300 mt-2">
                Automated testing with Playwright, Java, and BDD for reliable
                regression suites.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5">
              <h3 className="font-semibold text-white">
                API & Backend Testing
              </h3>
              <p className="text-gray-300 mt-2">
                REST API validation, database verification, and backend
                integration test coverage.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5">
              <h3 className="font-semibold text-white">CI/CD Integration</h3>
              <p className="text-gray-300 mt-2">
                Automated test execution inside CI/CD pipelines for faster and
                safer deployments.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5">
              <h3 className="font-semibold text-white">MERN Development</h3>
              <p className="text-gray-300 mt-2">
                React, Next.js, Node.js, Express, and MongoDB development with
                QA-focused delivery.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
          <p className="text-gray-300 mb-4">
            Available for remote freelance and contract work worldwide.
          </p>
          <a
            href="mailto:qumbarmaqbool@gmail.com"
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-8 rounded-lg transition"
          >
            Email Me
          </a>
        </div>
      </section>
    </main>
  );
}
