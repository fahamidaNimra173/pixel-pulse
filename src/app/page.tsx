import Banner from "@/components/Banner";
import LogoMarquee from "@/components/Maeque";
import StatsSection from "@/components/DigitalMarketingEffect";
import Image from "next/image";
import Solutions from "@/components/Solutions";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <LogoMarquee></LogoMarquee>
      <StatsSection/>
      <Solutions></Solutions>
      <FAQ></FAQ>
    </div>
  );
}
