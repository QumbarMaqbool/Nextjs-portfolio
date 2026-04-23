import ContactSection from "@/components/contact-section";
export const metadata = {
  title: "Hire Qumbar Maqbool – Freelance SDET & QA Automation Engineer",
  description:
    "Hire Qumbar Maqbool for freelance QA automation, test framework development, API testing, CI/CD integration, or MERN stack development. Based in Lahore, Pakistan. Available worldwide.",
};

export default function HirePage() {
  return (
    <main>
      <h1>Hire a Senior SDET & QA Automation Engineer</h1>
      <p>
        I'm Qumbar Maqbool, a freelance SDET and QA Automation Engineer with 4+ years of
        experience building robust test automation frameworks using Java, Playwright, and
        Cucumber BDD. I help companies reduce manual QA effort, increase release confidence,
        and ship faster through automation.
      </p>
      <h2>Services I Offer</h2>
      <ul>
        <li>End-to-end test automation framework development (Java + Playwright + Cucumber BDD)</li>
        <li>REST API test automation and contract testing</li>
        <li>CI/CD pipeline integration (Jenkins, GitHub Actions, Bitbucket)</li>
        <li>Backend & database testing (PostgreSQL, MongoDB)</li>
        <li>QA strategy consulting and test architecture review</li>
        <li>Full-stack MERN development (React, Node.js, MongoDB, Express)</li>
        <li>Next.js web application development</li>
        <li>Performance testing and core web vitals optimization</li>
      </ul>
      <ContactSection />
    </main>
  );
}