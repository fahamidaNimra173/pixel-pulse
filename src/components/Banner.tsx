import Image from "next/image";
import Button from "./ui/Button";
import { MdOutlineSlowMotionVideo } from "react-icons/md";

export default function Banner() {
  return (
    <section className="lg:px-[75px] px-6 md:mb-[64px] mt-30 lg:mt-[153px] flex lg:flex-row flex-col items-center lg:justify-between lg:gap-[105px] ">
      <div className="relative z-10">
        <h1 className="font-extrabold  text-3xl md:text-[50px] leading-13 lg:leading-15 w-full text-center lg:w-[646px] text-[#101010]">
          Driving Your{" "}
          <span className="text-[#FA7C45] font-bold">
            Business Forward with Cutting-Edge Digital{" "}
            <span className=" lg:text-[#FA7C45] text-black font-bold">
              Marketing Solutions
            </span>
          </span>
        </h1>
        <p className="lg:w-[571px] mt-3 text-lg lg:text-[20px] font-semibold text-[#2c2c2c]">
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system,
        </p>

        <div className="flex items-center justify-center lg:justify-start gap-[21px] mt-[50px]">
          <Button className="cursor-pointer">Get Started</Button>
          <button className="flex cursor-pointer hover:bg-[#FA7C45] hover:text-white hover:border-[#FA7C45] items-center gap-2.5 px-5 py-2.5 rounded-[100px] bg-transparent border border-black text-black">
            <MdOutlineSlowMotionVideo /> Play Video
          </button>
        </div>
      </div>

    
      <div className="relative w-[544px] lg:mt-0 -mt-15 h-[522px]">
        <Image
          src="/banner.png"
          alt="Banner image"
          fill
          className="md:object-cover  object-contain "
          
        />
      </div>
    </section>
  );
}
