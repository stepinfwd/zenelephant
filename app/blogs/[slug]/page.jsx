// import MarkdownIt from "markdown-it";
// import hljs from "highlight.js";
import { getAllBlogs } from "@/lib/posts";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { AuthorBio } from "@/components/blog/AuthorBio";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { SocialShare } from "@/components/blog/SocialShare";

// Simple markdown renderer function
function renderMarkdown(content) {
  return content
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
    .replace(/\*(.*)\*/gim, '<em>$1</em>')
    .replace(/!\[([^\]]*)\]\(([^)]*)\)/gim, '<img alt="$1" src="$2" />')
    .replace(/\[([^\]]*)\]\(([^)]*)\)/gim, '<a href="$2">$1</a>')
    .replace(/^- (.*$)/gim, '<li>$1</li>')
    .replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>')
    .replace(/\n\n/gim, '</p><p>')
    .replace(/^(?!<[h|u|l])/gim, '<p>')
    .replace(/(?![h|u|l]>)$/gim, '</p>');
}

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

  // Render markdown to HTML with error handling
  let htmlContent;
  try {
    htmlContent = renderMarkdown(post.content);
  } catch (error) {
    console.error('Error rendering markdown:', error);
    htmlContent = `<p>Error rendering content: ${error.message}</p>`;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative">
        {post.coverImage && (
          <div className="relative h-64 md:h-96 lg:h-[500px] overflow-hidden">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        )}
        
        {/* Article Header */}
        <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {post.title}
            </h1>
            
            {post.excerpt && (
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                {post.excerpt}
              </p>
            )}

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-500 dark:text-gray-400 mb-6">
              {post.author && (
                <div className="flex items-center gap-2">
                  <span className="font-medium">By {post.author}</span>
                </div>
              )}
              {post.date && (
                <div className="flex items-center gap-2">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
              )}
              {post.readingTime && (
                <div className="flex items-center gap-2">
                  <span>{post.readingTime} min read</span>
                </div>
              )}
            </div>

            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <SocialShare 
              url={`${process.env.NEXT_PUBLIC_SITE_URL || 'https://zenelephant.com'}/blogs/${post.slug}`}
              title={post.title}
              className="justify-center"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Table of Contents - Desktop Only */}
          <div className="hidden lg:block lg:col-span-1">
            <TableOfContents content={post.content} />
          </div>

          {/* Article Content */}
          <div className="lg:col-span-3">
            <article className="prose prose-lg dark:prose-invert max-w-none">
              <div
                className="post-content"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />
            </article>

            {/* Author Bio */}
            <div className="mt-12">
              <AuthorBio 
                author={post.author || "Zen Elephant Team"}
                bio="Passionate about creating immersive XR experiences and pushing the boundaries of technology. Our team combines creativity with cutting-edge technology to deliver exceptional results."
              />
            </div>

            {/* References */}
            {post.references && (
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">References</h2>
                <ul className="space-y-3">
                  {post.references.map((ref, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="inline-block w-6 h-6 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium text-center leading-6 mr-3 mt-0.5">
                        {idx + 1}
                      </span>
                      <a
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline transition-colors"
                      >
                        {ref.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Related Posts */}
            <RelatedPosts 
              currentSlug={post.slug}
              tags={post.tags}
            />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="max-w-4xl mx-auto px-4 py-8 border-t border-gray-200 dark:border-gray-700">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors font-medium"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to all posts
          </Link>

          <div className="text-sm text-gray-500 dark:text-gray-400">
            Published on {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
