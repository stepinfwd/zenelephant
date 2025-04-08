// import { useState, useEffect } from "react";
import MarkdownIt from "markdown-it";
import hljs from "highlight.js";
import { getAllBlogs } from "@/lib/posts";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

// Configure markdown-it with plugins
const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang }).value;
      } catch (__) {}
    }
    return ""; // use external default escaping
  },
});

// Generate static paths
export async function generateStaticParams() {
  const posts = getAllBlogs();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Fetch post data
async function fetchPost(slug) {
  const posts = getAllBlogs();
  return posts.find((post) => post.slug === slug);
}

// Metadata for the page
export async function generateMetadata({ params }) {
  const post = await fetchPost(params?.slug);

  console.log("post----", post);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested post could not be found.",
    };
  }

  return {
    title: `${post.title} | My Blog`,
    description: post.excerpt || `Read ${post.title} on My Blog`,
    openGraph: {
      title: post.title,
      description: post.excerpt || `Read ${post.title} on My Blog`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author || "Blog Author"],
    },
  };
}

export default async function Post({ params }) {
  const post = await fetchPost(params?.slug);

  if (!post) {
    notFound();
  }

  // Render markdown to HTML
  const htmlContent = md.render(post.content);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {post.coverImage && (
        <div className="mb-8 relative h-64 md:h-96 overflow-hidden rounded-lg">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <article className="prose lg:prose-xl dark:prose-invert mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">{post.title}</h1>

          <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
            {post.author && <span className="mr-4">By {post.author}</span>}
            {/* <time dateTime={post.date}>{formatDate(post.date)}</time> */}

            {post.readingTime && (
              <span className="ml-4">{post.readingTime} min read</span>
            )}
          </div>

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/tags/${tag}`}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
                >
                  {tag}
                </Link>
              ))}
            </div>
          )}
        </header>

        {post.excerpt && (
          <div className="text-lg mb-8 font-medium text-gray-700 dark:text-gray-300 border-l-4 border-blue-500 pl-4 italic">
            {post.excerpt}
          </div>
        )}

        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />

        {post.references && (
          <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold mb-4">References</h2>
            <ul>
              {post.references.map((ref, idx) => (
                <li key={idx} className="mb-2">
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {ref.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </article>

      <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
        <div className="flex justify-between">
          <Link
            href="/blog"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            ← Back to all posts
          </Link>

          {post.nextPost && (
            <Link
              href={`/blog/${post.nextPost.slug}`}
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              {post.nextPost.title} →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
