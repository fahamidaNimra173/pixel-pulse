import Banner from "@/components/Banner";
import LogoMarquee from "@/components/Maeque";
import StatsSection from "@/components/DigitalMarketingEffect";

import Solutions from "@/components/Solutions";
import FAQ from "@/components/FAQ";
import TestimonialSlider from "@/components/Testimonial";
import SuccessStories from "@/components/SuccessStories";
import Footer from "@/components/shared/Footer";
import Ellipse from "@/components/shared/Ellipse";

export default function Home() {
  return (
    <div className="relative overflow-hidden ">
      <div className="relative z-10">
        <Banner></Banner>
        <LogoMarquee></LogoMarquee>
        <StatsSection />
        <Solutions></Solutions>
        <FAQ></FAQ>
        <TestimonialSlider></TestimonialSlider>
        <SuccessStories></SuccessStories>
        <Footer></Footer>
      </div>
      <div className="absolute -z-10 top-20 left-130">
        <Ellipse />
      </div>
      <div className="absolute -z-10 top-110 -left-50">
        <Ellipse />
      </div>
      <div className="absolute -z-10 top-190 -right-10">
        <Ellipse />
      </div>
      <div className="absolute -z-10 top-340 -left-10">
        <Ellipse />
      </div>
      <div className="absolute -z-10 top-600 -left-10">
        <Ellipse />
      </div>


    </div>
  );
}
