import Image from "next/image";
import HeroSection from "@/components/Home/HeroSection";
import NextSection from "@/components/Home/NextSection";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <NextSection />
      </main>
    </>
  );
}
