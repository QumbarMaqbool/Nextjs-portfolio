// @flow strict

import { blogsData } from "@/utils/data/blogs";
import BlogCard from "../components/homepage/blog/blog-card";

export const metadata = {
  title: "All Blog Posts | QA Automation, Playwright & MERN | Qumbar Maqbool",
  description:
    "Read blog posts on QA automation, Playwright testing, API automation, CI/CD, and MERN development from Qumbar Maqbool.",
  openGraph: {
    title: "All Blog Posts | QA Automation, Playwright & MERN | Qumbar Maqbool",
    description:
      "Explore QA automation, Playwright, API testing, CI/CD, and MERN development articles from a remote QA automation engineer.",
    url: "https://qumbar.vercel.app/blog",
    siteName: "Qumbar Maqbool Portfolio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "All Blog Posts | Qumbar Maqbool",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "All Blog Posts | QA Automation, Playwright & MERN | Qumbar Maqbool",
    description:
      "Explore QA automation, Playwright, API testing, CI/CD, and MERN development articles from a remote QA automation engineer.",
    images: ["/og-image.svg"],
    creator: "@qumbarmaqbool",
  },
  alternates: {
    canonical: "https://qumbar.vercel.app/blog",
  },
};

function page() {
  return (
    <div className="py-8">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md">
            All Blogs
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
        {blogsData.map(
          (blog, i) => blog?.cover_image && <BlogCard blog={blog} key={i} />,
        )}
      </div>
    </div>
  );
}

export default page;
