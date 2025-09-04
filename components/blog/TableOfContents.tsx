"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
  className?: string;
}

export function TableOfContents({ content, className }: TableOfContentsProps) {
  const [toc, setToc] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Extract headings from content
    const headingRegex = /^(#{1,6})\s+(.+)$/gm;
    const headings: TOCItem[] = [];
    let match;

    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[1].length;
      const text = match[2].trim();
      const id = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");

      headings.push({ id, text, level });
    }

    setToc(headings);
  }, [content]);

  useEffect(() => {
    const handleScroll = () => {
      const headings = toc.map((item) => document.getElementById(item.id));
      const visibleHeadings = headings.filter((heading): heading is HTMLElement => {
        if (!heading) return false;
        const rect = heading.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (visibleHeadings.length > 0) {
        setActiveId(visibleHeadings[0].id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [toc]);

  if (toc.length === 0) return null;

  return (
    <div className={cn("sticky top-24", className)}>
      <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-4">
        Table of Contents
      </h3>
      <nav className="space-y-2">
        {toc.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={cn(
              "block text-sm transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400",
              item.level === 1 && "font-medium",
              item.level === 2 && "ml-4",
              item.level === 3 && "ml-8",
              item.level === 4 && "ml-12",
              item.level === 5 && "ml-16",
              item.level === 6 && "ml-20",
              activeId === item.id
                ? "text-blue-600 dark:text-blue-400 font-medium"
                : "text-gray-600 dark:text-gray-400"
            )}
          >
            {item.text}
          </a>
        ))}
      </nav>
    </div>
  );
}
