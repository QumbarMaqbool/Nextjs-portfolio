export const metadata = {
  title: "Hire Qumbar Maqbool – Freelance SDET & QA Automation Engineer",
  description:
    "Hire Qumbar Maqbool for freelance QA automation, test framework development, API testing, CI/CD integration, or MERN stack development. Based in Lahore, Pakistan. Available worldwide.",
};

export default function HirePage() {
  return (
    <main className="text-white py-20 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">
        Hire a Senior SDET & QA Automation Engineer
      </h1>
      <p className="text-gray-300 mb-8 text-lg">
        I'm Qumbar Maqbool, a freelance SDET and QA Automation Engineer with 4+ years of
        experience building robust test automation frameworks using Java, Playwright, and
        Cucumber BDD. I help companies reduce manual QA effort, increase release confidence,
        and ship faster through automation.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Services I Offer</h2>
      <ul className="text-gray-300 space-y-2 mb-10 list-disc list-inside">
        <li>End-to-end test automation framework development (Java + Playwright + Cucumber BDD)</li>
        <li>REST API test automation and contract testing</li>
        <li>CI/CD pipeline integration (Jenkins, GitHub Actions, Bitbucket)</li>
        <li>Backend & database testing (PostgreSQL, MongoDB)</li>
        <li>QA strategy consulting and test architecture review</li>
        <li>Full-stack MERN development (React, Node.js, MongoDB, Express)</li>
        <li>Next.js web application development</li>
        <li>Performance testing and core web vitals optimization</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
      <p className="text-gray-300 mb-4">
        Available for remote freelance and contract work worldwide.
      </p>
      <a>
        href="mailto:qumbarmaqbool@gmail.com"
        className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-8 rounded-lg transition"
        Email Me
      </a>
    </main>
  );
}