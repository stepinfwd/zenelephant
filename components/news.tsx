import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconNews,
  IconTrophy,
  IconRocket,
  IconSparkles,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export function NewsSection() {
  const displayedItems = newsItems.slice(0, 6);

  return (
    <div className="max-w-5xl mx-auto py-16 md:py-32" id="news">
      <div className="@container mx-auto px-6">
        <h1 className="text-balance text-4xl font-bold lg:text-5xl">
          Latest News
        </h1>
        <p className="mt-4 max-w-2xl text-balance text-lg pb-10">
          Stay updated with the latest developments, releases, and achievements from our game studios
        </p>

        <BentoGrid className="max-w-5xl mx-auto">
          {displayedItems.map((item, i) => (
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

        <div className="flex justify-center mt-8">
          <Link
            href="/news"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200"
          >
            View More News
          </Link>
        </div>
      </div>
    </div>
  );
}

const NewsImageWithOverlay = ({
  src,
  alt,
  overlayColor = "rgba(0,0,0,0.7)",
}: {
  src: string;
  alt: string;
  overlayColor?: string;
}) => (
  <div className="relative flex flex-1 w-full h-full min-h-[12rem] rounded-xl overflow-hidden group">
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className="object-cover transition-transform duration-500 group-hover:scale-105"
      priority
    />
    <div
      className="absolute inset-0 bg-black/70 transition-all duration-300"
      style={{ backgroundColor: overlayColor }}
    ></div>
  </div>
);

const NewsImage1 = () => (
  <NewsImageWithOverlay
    src="/assets/gridtsugi.jpeg"
    alt="Grid Tsugi Update"
    overlayColor="rgba(0,0,0,0.7)"
  />
);

const NewsImage2 = () => (
  <NewsImageWithOverlay
    src="/assets/gridtsugi.jpeg"
    alt="VR Game News"
    overlayColor="rgba(0,0,0,0.7)"
  />
);

export const newsItems = [
  {
    title: "Grid Tsugi: Laberinto de Puentes Entretejidos Análisis Meta Quest",
    description:
      "Check out the latest review of Grid Tsugi from Zona The Gamers, featuring an in-depth analysis of our puzzle game on Meta Quest.",
    header: <NewsImage1 />,
    icon: <IconNews className="h-4 w-4 text-neutral-500" />,
    link: "https://zonathegamers.com/grid-tsugi-laberinto-de-puentes-entretejidos-analisis-meta-quest/",
  },
  {
    title: "GridTsugi: Maze of Woven Bridges Review: An Immersive Puzzle Experience Weaving Logic and Space",
    description:
      "VR News Today explores how Grid Tsugi combines immersive puzzle mechanics with spatial logic in this comprehensive review.",
    header: <NewsImage2 />,
    icon: <IconNews className="h-4 w-4 text-neutral-500" />,
    link: "https://vrnewstoday.com/en/Gridtsugi-Maze-of-Woven-Bridges-Review%3A-An-Immersive-Puzzle-Interwoven-with-Logic-and-Space/",
  },
];
