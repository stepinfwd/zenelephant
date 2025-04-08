import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Image from "next/image";

export function BentoGridDemo() {
  return (
    <div className="max-w-5xl mx-auto py-16 md:py-32" id="blog">
      <div className="@container mx-auto px-6">
        <h1 className="text-balance text-4xl font-semibold lg:text-5xl">
          Explore Our Blog
        </h1>
        <p className="mt-4 max-w-2xl text-balance text-lg pb-10">
          Insights, stories, and the latest trends—dive into our curated
          articles on all things tech, design, and innovation
        </p>

        <BentoGrid className="max-w-5xl mx-auto">
          {items.map((item, i) => (
            <a href={`/blogs/${item.slug}`} key={item.slug}>
              <BentoGridItem
                title={item.title}
                description={item.description}
                header={item.header}
                icon={item.icon}
                className={i === 3 || i === 6 ? "md:col-span-2" : ""}
              />
            </a>
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const ImageWithOverlay = ({
  src,
  alt,
  overlayColor = "rgba(0,0,0,0.4)",
}: {
  src: string;
  alt: string;
  overlayColor?: string;
}) => (
  <div className="relative flex flex-1 w-full h-full min-h-[12rem] rounded-xl overflow-hidden group">
    {/* Main image */}
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className="object-cover transition-transform duration-500 group-hover:scale-105"
      priority
    />

    {/* Overlay */}
    <div
      className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"
      style={{ backgroundColor: overlayColor }}
    ></div>
  </div>
);

const Image1 = () => (
  <ImageWithOverlay
    src="/assets/blog1.jpg"
    alt="From Cloud to Device"
    overlayColor="rgba(0,0,0,0.3)"
  />
);

const Image2 = () => (
  <ImageWithOverlay
    src="/assets/blog3.png"
    alt="Time Management"
    overlayColor="rgba(0,20,40,0.4)"
  />
);

const Image3 = () => (
  <ImageWithOverlay
    src="/assets/blog3.jpg"
    alt="Behind the Scenes"
    overlayColor="rgba(0,0,0,0.35)"
  />
);

const Image4 = () => (
  <ImageWithOverlay
    src="/assets/blog2.png"
    alt="VR Game Performance"
    overlayColor="rgba(10,10,30,0.45)"
  />
);

const items = [
  {
    title: "From Cloud to Device: Quantized AI and the Future of XR",
    description:
      "Extended Reality (XR) – an umbrella term for AR, VR, and MR – is on the cusp of a major leap forward thanks to artificial intelligence",
    header: <Image1 />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    slug: "blog1",
  },
  {
    title: "Mastering Time Management in Every Stage",
    description:
      "Every successful XR project begins with a clear understanding of the client's goals. By engaging in detailed discussions, we capture the project's vision, use case, and target audience.",
    header: <Image2 />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    slug: "blog2",
  },
  {
    title: "BTS: Behind-the-Scenes: Shooting the Grid-Tsugi's  Trailer",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Image3 />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    slug: "blog3",
  },
  {
    title: "Making VR game performant for Meta Quest Platform!",
    description:
      "The Meta Quest 2 reigns supreme in the VR world, but its computational limitations can be tricky to navigate. ",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    slug: "blog4",
  },
];
