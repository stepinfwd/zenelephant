import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { newsItems } from "@/components/news";
import { HeroHeader } from "@/components/hero9-header";
import FooterSection from "@/components/footer";

export default function NewsPage() {
  return (
    <div>
      <HeroHeader />
      <div className="max-w-5xl mx-auto py-16 md:py-32">
        <div className="@container mx-auto px-6">
          <h1 className="text-balance text-4xl font-bold lg:text-5xl">
            All News
          </h1>
          <p className="mt-4 max-w-2xl text-balance text-lg pb-10">
            Stay updated with all the latest developments, releases, and achievements from our game studios
          </p>

          <BentoGrid className="max-w-5xl mx-auto">
            {newsItems.map((item, i) => (
              <a
                key={i}
                href={item.link || "#"}
                target={item.link ? "_blank" : undefined}
                rel={item.link ? "noopener noreferrer" : undefined}
              >
                <BentoGridItem
                  title={item.title}
                  description={item.description}
                  header={item.header}
                  icon={item.icon}
                  className=""
                />
              </a>
            ))}
          </BentoGrid>
        </div>
      </div>
      <FooterSection />
    </div>
  );
}
