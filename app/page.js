import { personalData } from "@/utils/data/personal-data";
import { blogsData } from "@/utils/data/blogs";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

export const metadata = {
  title: "Remote QA Automation Engineer | Qumbar Maqbool",
  description:
    "Hire a remote Senior QA Automation Engineer for worldwide test automation, Playwright QA, API testing, CI/CD pipeline integration, and MERN application development.",
  openGraph: {
    title: "Remote QA Automation Engineer | Qumbar Maqbool",
    description:
      "Hire a remote Senior QA Automation Engineer and MERN developer for worldwide Playwright testing, API testing, CI/CD integration, and software quality engineering.",
    url: "https://qumbar.vercel.app",
    siteName: "Qumbar Maqbool Portfolio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Remote QA Automation Engineer Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Remote QA Automation Engineer | Qumbar Maqbool",
    description:
      "Senior QA Automation Engineer available for worldwide remote engagements in Playwright, Cucumber BDD, CI/CD testing, REST API automation, and MERN development.",
    images: ["/og-image.svg"],
    creator: "@qumbarmaqbool",
  },
  alternates: {
    canonical: "https://qumbar.vercel.app",
  },
};

function getData() {
  // Shuffle blogs array and return
  return [...blogsData].sort(() => Math.random() - 0.5);
}

export default function Home() {
  const blogs = getData();

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Qumbar Maqbool",
    url: "https://qumbar.vercel.app",
    image: "https://qumbar.vercel.app/profile.png",
    jobTitle: "Senior SDET | QA Automation & Full Stack Developer",
    description:
      "Senior Software Development Engineer in Test (SDET) with 4+ years of experience in Java, Playwright, Cucumber BDD, CI/CD, and MERN stack development.",
    email: "qumbarmaqbool@gmail.com",
    telephone: "+92-301-4283432",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lahore",
      addressRegion: "Punjab",
      addressCountry: "PK",
    },
    sameAs: [
      "https://linkedin.com/in/qumbar-maqbool",
      "https://github.com/QumbarMaqbool",
    ],
    knowsAbout: [
      "Test Automation",
      "QA Engineering",
      "Java",
      "Playwright",
      "Cucumber BDD",
      "JUnit 5",
      "Selenium",
      "API Testing",
      "CI/CD Pipelines",
      "Jenkins",
      "PostgreSQL",
      "React.js",
      "Next.js",
      "Node.js",
      "MongoDB",
      "TypeScript",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Senior SDET",
      occupationLocation: { "@type": "City", name: "Lahore, Pakistan" },
      skills: "Java, Playwright, Cucumber BDD, CI/CD, MERN Stack",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Qumbar Maqbool Portfolio",
    url: "https://qumbar.vercel.app",
    description:
      "Portfolio of Qumbar Maqbool – Senior SDET and QA Automation Engineer",
    author: { "@type": "Person", name: "Qumbar Maqbool" },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "QA Automation & Test Engineering Services",
    provider: { "@type": "Person", name: "Qumbar Maqbool" },
    description:
      "Freelance QA automation services including end-to-end test framework development, API testing, CI/CD pipeline integration, and full-stack MERN development.",
    serviceType: "QA Automation, Test Engineering, MERN Development",
    areaServed: "Worldwide",
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: "https://qumbar.vercel.app/#contact",
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      description:
        "Available for freelance and contract QA automation projects",
    },
  };

  return (
    <div suppressHydrationWarning>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Page Content */}
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Blog blogs={blogs} />
      <Education />
      <ContactSection />
    </div>
  );
}
