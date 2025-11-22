import { BentoGridDemo } from "@/components/blog";
import Products from "@/components/products";
import GridBackgroundDemo from "@/components/flicker-grid";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import TeamSection from "@/components/team";
import Projects from "@/components/Projects";
import { NewsSection } from "@/components/news";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <div className="relative">
        <HeroVideoDialog
          className="block dark:hidden"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/mGSg0wHs4-g"
          thumbnailSrc="https://img.youtube.com/vi/mGSg0wHs4-g/maxresdefault.jpg"
          thumbnailAlt="Hero Video"
        />
        <HeroVideoDialog
          className="hidden dark:block"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/mGSg0wHs4-g"
          thumbnailSrc="https://img.youtube.com/vi/mGSg0wHs4-g/maxresdefault.jpg"
          thumbnailAlt="Hero Video"
        />
      </div>
      <Products />
      <Projects />
      <NewsSection />
      <TeamSection />
      <BentoGridDemo />
      <GridBackgroundDemo />
      <FooterSection />
    </div>
  );
}
