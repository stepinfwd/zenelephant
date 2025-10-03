import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Image from "next/image";
import { HeroHeader } from "@/components/hero9-header";
import FooterSection from "@/components/footer";

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
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className="object-cover transition-transform duration-500 group-hover:scale-105"
      priority
    />
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
      "Extended Reality (XR) – an umbrella term for AR, VR, and MR – is on the cusp of a major leap forward thanks to artificial intelligence. After years of parallel development, XR and AI are converging to unlock spatial computing experiences.",
    header: <Image1 />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    slug: "from-cloud-to-device-quantized-ai-future-xr",
  },
  {
    title: "Mastering Time Management in Every Stage of XR Development",
    description:
      "Every successful XR project begins with a clear understanding of the client's goals. By engaging in detailed discussions, we capture the project's vision, use case, and target audience.",
    header: <Image2 />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    slug: "mastering-time-management-xr-development",
  },
  {
    title: "BTS: Behind-the-Scenes: Shooting the Grid-Tsugi's Trailer",
    description: "Creating a game trailer is not just about showcasing stunning gameplay—it's about crafting an experience that immerses the viewer.",
    header: <Image3 />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    slug: "behind-scenes-grid-tsugi-trailer",
  },
  {
    title: "Making VR Game Performant for Meta Quest Platform!",
    description:
      "The Meta Quest 2 reigns supreme in the VR world, but its computational limitations can be tricky to navigate. This series delves into the technical aspects of optimizing VR games for the Quest 2.",
    header: <Image4 />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    slug: "vr-game-performance-meta-quest",
  },
];

export default function BlogsPage() {
  return (
    <div>
      <HeroHeader />
      <div className="max-w-5xl mx-auto py-16 md:py-32">
        <div className="@container mx-auto px-6">
          <h1 className="text-balance text-4xl font-bold lg:text-5xl">
            All Blogs
          </h1>
          <p className="mt-4 max-w-2xl text-balance text-lg pb-10">
            Explore all our insights, stories, and the latest trends in tech, design, and innovation
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
      <FooterSection />
    </div>
  );
}
