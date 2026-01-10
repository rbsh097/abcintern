import Image from "next/image";
import HeroSection from "@/components/Home/HeroSection";
import NextSection from "@/components/Home/NextSection";
import Section from "@/components/Home/Section";
import ImageGallery from "@/components/Home/ImageGallery";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <NextSection />
        <Section />
        <ImageGallery />
      </main>
    </>
  );
}
