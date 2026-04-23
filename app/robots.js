export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://qumbar.vercel.app/sitemap.xml",
    host: "https://qumbar.vercel.app",
  };
}