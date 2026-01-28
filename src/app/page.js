import Image from "next/image";
import HeroSection from "@/components/Home/HeroSection";
import NextSection from "@/components/Home/NextSection";
import GlobalLandscape from "@/components/Home/GlobalLandscape";
import Section from "@/components/Home/Section";
import ImageGallery from "@/components/Home/ImageGallery";
import ProductSection from "@/components/Home/ProductSection";
import OurBusinesses from "@/components/Home/OurBusinesses";
import ArticlesSection from "@/components/Home/ArticlesSection";
import HealthCalculators from "@/components/Home/HealthCalculators";
import Map from "@/components/Global/Map";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <NextSection />
        <GlobalLandscape />
        <Section />
        <HealthCalculators />
        <OurBusinesses />
        <ArticlesSection />
        <ProductSection />
        <ImageGallery />
        <Map />
      </main>
    </>
  );
}
