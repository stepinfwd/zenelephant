import { BentoGridDemo } from "@/components/blog";
import CallToAction from "@/components/call-to-action";
import Features from "@/components/features-2";
import GridBackgroundDemo from "@/components/flicker-grid";
// import { FlickeringGridDemo } from "@/components/flicker-grid";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import TeamSection from "@/components/team";
import Image from "next/image";

export default function Home() {
  return (
    <div className=''>
      <HeroSection />
      <div className="relative">
        <HeroVideoDialog
          className="block dark:hidden"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
          thumbnailSrc="https://images.unsplash.com/photo-1710419364928-c4049049211f?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          thumbnailAlt="Hero Video"
        />
        <HeroVideoDialog
          className="hidden dark:block"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
          thumbnailSrc="https://images.unsplash.com/photo-1710419364928-c4049049211f?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          thumbnailAlt="Hero Video"
        />
      </div>
      <Features />
      <TeamSection />



      <BentoGridDemo />
      <GridBackgroundDemo />


      <FooterSection />

    </div>
  );
}


// - Industrial Training with VR/AR
// - Medical Training Using VR/AR
// - Military training & Law Enforcement VR Simulations
// - Real Estate & Architectural Visualization with VR/AR
// - Custom VR/AR Solutions & Interactive Storytelling