export default function sitemap() {
  return [
    { url: "https://qumbar.vercel.app", lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: "https://qumbar.vercel.app/#about", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://qumbar.vercel.app/#experience", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://qumbar.vercel.app/#projects", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://qumbar.vercel.app/#skills", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://qumbar.vercel.app/#contact", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
  ];
}