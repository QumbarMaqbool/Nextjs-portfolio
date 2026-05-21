import Link from "next/link";

export const metadata = {
  title: "MERN Development Services | QA-Aware Full-Stack Engineer",
  description:
    "Remote MERN development services with QA-aware architecture for React, Next.js, Node.js, Express, and MongoDB.",
  openGraph: {
    title: "MERN Development Services | QA-Aware Full-Stack Engineer",
    description:
      "Hire a remote MERN developer who builds QA-aware web apps and integrates test automation into the delivery process.",
    url: "https://qumbar.vercel.app/services/mern-development",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "MERN Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MERN Development Services | QA-Aware Full-Stack Engineer",
    description:
      "Remote MERN app development with QA-focused practices, React/Next.js frontend, Node.js backend, and MongoDB database services.",
    images: ["/og-image.svg"],
    creator: "@qumbarmaqbool",
  },
  alternates: {
    canonical: "https://qumbar.vercel.app/services/mern-development",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "MERN Development Services",
  provider: {
    "@type": "Person",
    name: "Qumbar Maqbool",
    url: "https://qumbar.vercel.app",
  },
  description:
    "Remote MERN development services with QA-aware architecture and full-stack delivery.",
  serviceType: "MERN Development, React.js, Next.js, Node.js, Express, MongoDB",
  areaServed: ["Worldwide"],
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: "https://qumbar.vercel.app/hire",
  },
};

export default function MernDevelopmentPage() {
  return (
    <main className="py-14 px-6 text-white max-w-5xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <section className="space-y-8">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-pink-500">
            MERN Development
          </p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
            Remote MERN Development Services
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Build QA-aware web applications with React, Next.js, Node.js,
            Express, and MongoDB for modern remote teams.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-7">
            <h2 className="text-2xl font-semibold text-white">
              Front-end & UX
            </h2>
            <ul className="mt-4 space-y-3 text-gray-300 list-disc list-inside">
              <li>Responsive React and Next.js UI development</li>
              <li>Accessible, performant, and SEO-friendly interfaces</li>
              <li>Integration with CI-driven build and test workflows</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-7">
            <h2 className="text-2xl font-semibold text-white">
              Back-end services
            </h2>
            <p className="mt-4 text-gray-300">
              Secure Node.js and Express APIs with MongoDB data storage,
              authentication, and scalable architecture for production apps.
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-7">
          <h2 className="text-2xl font-semibold text-white">
            QA-aware delivery
          </h2>
          <ul className="mt-4 space-y-3 text-gray-300 list-disc list-inside">
            <li>Test-driven and QA-informed feature development</li>
            <li>Automation hooks for UI, API, and integration coverage</li>
            <li>Deployment-ready apps with performance and security in mind</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/hire"
            className="rounded-full bg-pink-600 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-pink-500"
          >
            Hire for MERN Development
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
