import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroHeader } from "@/components/hero9-header";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { ChevronRight } from "lucide-react";
import { ShinyButton } from "./magicui/shiny-button";
import { BoxReveal } from "./magicui/box-reveal";

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-x-hidden">
        <section>
          <div className="py-24 md:pb-32 lg:pb-36 lg:pt-72">
            <div className="relative mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
              <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
                {/* <BoxReveal boxColor={"#fafafa"} duration={0.5}> */}
                <h1 className="mt-8 max-w-2xl text-balance text-5xl md:text-6xl lg:mt-16 xl:text-7xl font-bold text-white relative z-10">
                  <span className="relative before:content-[''] before:absolute before:inset-0 before:backdrop-blur-sm before:rounded-xl before:-z-10 before:opacity-60">
                    Blurring the lines between reality and imagination
                  </span>
                </h1>

                {/* </BoxReveal> */}
                <BoxReveal boxColor={"#fafafa"} duration={0.7}>
                  <p className="mt-8 max-w-2xl text-balance text-lg font-semibold text-white relative z-10">
                    <span className="relative before:content-[''] before:absolute before:inset-0 before:backdrop-blur-sm before:rounded-lg before:-z-10 before:opacity-50">
                      Experience AR & VR like never before!
                    </span>
                  </p>
                </BoxReveal>
                <BoxReveal boxColor={"#fafafa"} duration={0.3}>
                  <div className="mt-8 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                    <Button
                      // asChild
                      // size="lg"
                      // className="text-base"
                      style={{ backgroundColor: "#c0c5c8", color: "black" }}
                    >
                      <a
                        href="mailto:zenelephantxr@gmail.com?subject=SendMail&body=Description"
                        className="inline-flex items-center"
                      >
                        <span className="text-nowrap">Let's Talk</span>
                        <ChevronRight className="ml-1" />
                      </a>
                    </Button>
                  </div>
                </BoxReveal>
              </div>
            </div>
            <div className="aspect-2/3 absolute inset-1 -z-10 overflow-hidden rounded-3xl border border-black/10 lg:aspect-video lg:rounded-[3rem] dark:border-white/5">
              <video
                autoPlay
                muted
                loop
                className="size-full -scale-x-100 object-cover  dark:opacity-35 dark:invert-0 dark:lg:opacity-75"
                src="https://videos.pexels.com/video-files/6615311/6615311-uhd_2560_1440_25fps.mp4"
              ></video>
            </div>
          </div>
        </section>
        <section className="bg-background pb-2">
          <div className="group relative m-auto max-w-7xl px-6">
            <div className="flex flex-col items-center md:flex-row">
              <div className="md:max-w-44 md:border-r md:pr-6">
                <p className="text-end text-sm">Powering the best teams</p>
              </div>
              <div className="relative py-6 md:w-[calc(100%-11rem)]">
                <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
                  <div className="flex">
                    <img
                      className="mx-auto h-5 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/nvidia.svg"
                      alt="Nvidia Logo"
                      height="20"
                      width="auto"
                    />
                  </div>

                  <div className="flex">
                    <img
                      className="mx-auto h-4 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/column.svg"
                      alt="Column Logo"
                      height="16"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      className="mx-auto h-4 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/github.svg"
                      alt="GitHub Logo"
                      height="16"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      className="mx-auto h-5 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/nike.svg"
                      alt="Nike Logo"
                      height="20"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      className="mx-auto h-5 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                      alt="Lemon Squeezy Logo"
                      height="20"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      className="mx-auto h-4 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/laravel.svg"
                      alt="Laravel Logo"
                      height="16"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      className="mx-auto h-7 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/lilly.svg"
                      alt="Lilly Logo"
                      height="28"
                      width="auto"
                    />
                  </div>

                  <div className="flex">
                    <img
                      className="mx-auto h-6 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/openai.svg"
                      alt="OpenAI Logo"
                      height="24"
                      width="auto"
                    />
                  </div>
                </InfiniteSlider>

                <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                <ProgressiveBlur
                  className="pointer-events-none absolute left-0 top-0 h-full w-20"
                  direction="left"
                  blurIntensity={1}
                />
                <ProgressiveBlur
                  className="pointer-events-none absolute right-0 top-0 h-full w-20"
                  direction="right"
                  blurIntensity={1}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
