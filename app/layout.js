import { Inter } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import ClientWrapper from "./components/ClientWrapper";
import Footer from "./components/footer";
import "./css/card.scss";
import "./css/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://qumbar.vercel.app"),
  title: {
    default: "Qumbar Maqbool | Senior SDET & QA Automation Engineer – Lahore, Pakistan",
    template: "%s | Qumbar Maqbool",
  },
  description:
    "Qumbar Maqbool is a Senior SDET and QA Automation Engineer based in Lahore, Pakistan with 4+ years of experience in Java, Playwright, Cucumber BDD, CI/CD pipelines, and MERN stack development. Available for freelance and full-time opportunities.",
  keywords: [
    // Core identity
    "Qumbar Maqbool", "SDET", "Senior SDET", "QA Automation Engineer",
    "Software Development Engineer in Test", "Quality Assurance Engineer",
    // Tech stack
    "Java Playwright automation", "Cucumber BDD", "JUnit 5", "Selenium alternative",
    "REST API testing", "PostgreSQL testing", "Jenkins CI/CD", "Bitbucket pipelines",
    // Freelance signals
    "freelance QA engineer", "freelance test automation", "hire SDET freelancer",
    "QA automation freelancer Pakistan", "hire automation engineer",
    // Services
    "test automation services", "QA consulting", "automation framework development",
    "end-to-end testing services", "regression testing automation",
    "CI CD integration testing", "API automation testing service",
    // Full stack
    "MERN stack developer", "React developer", "Next.js developer",
    "Node.js developer", "full stack developer Lahore",
    // Location
    "software developer Lahore Pakistan", "SDET Pakistan",
    "QA engineer Pakistan", "tech freelancer Pakistan",
  ],
  authors: [{ name: "Qumbar Maqbool", url: "https://qumbar.vercel.app" }],
  creator: "Qumbar Maqbool",
  publisher: "Qumbar Maqbool",
  category: "Technology",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  verification: {
    google: "bE0kz6lzdcA7qnD6Lx7DQa5nZZQoHnYiUUi4qqccx1U",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://qumbar.vercel.app",
    siteName: "Qumbar Maqbool Portfolio",
    title: "Qumbar Maqbool | Senior SDET & QA Automation Engineer",
    description:
      "Hire Qumbar Maqbool – Senior SDET with 4+ years experience in test automation (Java, Playwright, Cucumber BDD), CI/CD, REST API testing, and MERN stack development.",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Qumbar Maqbool – Senior SDET Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Qumbar Maqbool | Senior SDET & QA Automation Engineer",
    description:
      "4+ years in test automation, Playwright, Java, Cucumber BDD, CI/CD. MERN stack developer. Based in Lahore. Open to freelance & full-time roles.",
    images: ["/og-image.svg"],
    creator: "@qumbarmaqbool",
  },
  alternates: {
    canonical: "https://qumbar.vercel.app",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientWrapper>{children}</ClientWrapper>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}