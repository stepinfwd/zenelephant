import Link from "next/link";
import Image from "next/image";
import { getAllBlogs } from "@/lib/posts";

interface RelatedPostsProps {
  currentSlug: string;
  tags?: string[];
  limit?: number;
}

export function RelatedPosts({ currentSlug, tags = [], limit = 3 }: RelatedPostsProps) {
  const allPosts = getAllBlogs();
  const currentPost = allPosts.find(post => post.slug === currentSlug);
  
  // Filter out current post and find related posts by tags
  const relatedPosts = allPosts
    .filter(post => post.slug !== currentSlug)
    .filter(post => {
      if (!post.tags || !tags.length) return true;
      return post.tags.some(tag => tags.includes(tag));
    })
    .slice(0, limit);

  if (relatedPosts.length === 0) return null;

  return (
    <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        Related Articles
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {relatedPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blogs/${post.slug}`}
            className="group block bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {post.coverImage && (
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {post.title}
              </h3>
              {post.excerpt && (
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
              )}
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>{post.author}</span>
                {post.readingTime && (
                  <span>{post.readingTime} min read</span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
