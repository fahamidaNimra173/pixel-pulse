import Banner from "@/components/Banner";
import LogoMarquee from "@/components/Maeque";
import StatsSection from "@/components/DigitalMarketingEffect";
import Image from "next/image";
import Solutions from "@/components/Solutions";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <LogoMarquee></LogoMarquee>
      <StatsSection/>
      <Solutions></Solutions>
    </div>
  );
}
