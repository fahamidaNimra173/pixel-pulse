import Banner from "@/components/Banner";
import LogoMarquee from "@/components/Maeque";
import StatsSection from "@/components/DigitalMarketingEffect";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <LogoMarquee></LogoMarquee>
      <StatsSection/>
    </div>
  );
}
