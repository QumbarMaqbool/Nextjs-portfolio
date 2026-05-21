import { blogsData } from "@/utils/data/blogs";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import "highlight.js/styles/atom-one-dark.css";
import { timeConverter } from "@/utils/time-converter";
import { BsHeartFill } from "react-icons/bs";
import { FaCommentAlt } from "react-icons/fa";

export async function generateStaticParams() {
  return blogsData.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = blogsData.find((b) => b.slug === slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  const pageUrl = `https://qumbar.vercel.app/blog/${slug}`;

  return {
    title: blog.title,
    description: blog.description,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: pageUrl,
      type: "article",
      images: [blog.cover_image],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: [blog.cover_image],
      creator: "@qumbarmaqbool",
    },
  };
}

export default async function BlogDetails({ params }) {
  const { slug } = await params;
  const blog = blogsData.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-4xl font-bold">Blog post not found</h1>
      </div>
    );
  }

  const pageUrl = `https://qumbar.vercel.app/blog/${slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    headline: blog.title,
    description: blog.description,
    image: [blog.cover_image],
    author: {
      "@type": "Person",
      name: "Qumbar Maqbool",
      url: "https://qumbar.vercel.app",
    },
    publisher: {
      "@type": "Organization",
      name: "Qumbar Maqbool",
      logo: {
        "@type": "ImageObject",
        url: "https://qumbar.vercel.app/og-image.svg",
      },
    },
    datePublished: blog.published_at,
    dateModified: blog?.updated_at || blog.published_at,
    keywords: blog.tags.join(", "),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://qumbar.vercel.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://qumbar.vercel.app/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: blog.title,
        item: pageUrl,
      },
    ],
  };

  return (
    <div className="py-10 lg:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 lg:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-[#16f2b3] text-sm md:text-base">
            <p>{timeConverter(blog.published_at)}</p>
            <span className="hidden md:inline">•</span>
            <p>{blog.reading_time_minutes} min read</p>
            <div className="flex items-center gap-4 ml-auto">
              <p className="flex items-center gap-1">
                <BsHeartFill />
                <span>{blog.public_reactions_count}</span>
              </p>
              <p className="flex items-center gap-1">
                <FaCommentAlt />
                <span>{blog.comments_count}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Cover Image */}
        <div className="relative h-64 md:h-[400px] lg:h-[500px] w-full mb-10 lg:mb-16 rounded-xl overflow-hidden border border-[#1d293a]">
          <Image
            src={blog.cover_image}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-[#16f2b3] prose-code:text-pink-400 prose-pre:bg-[#0d1224] prose-pre:border prose-pre:border-[#1d293a] prose-strong:text-white">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
          >
            {blog.content}
          </ReactMarkdown>
        </div>

        {/* Footer / Tags */}
        <div className="mt-16 pt-8 border-t border-[#1d293a]">
          <div className="flex flex-wrap gap-3">
            {blog.tags.map((tag, i) => (
              <span
                key={i}
                className="bg-[#1a1443] text-[#16f2b3] px-4 py-1.5 rounded-full text-sm font-medium border border-[#353a52]"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
