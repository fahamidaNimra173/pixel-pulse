import Image from "next/image";
import Button from "./ui/Button";
import { MdOutlineSlowMotionVideo } from "react-icons/md";

export default function Banner() {
  return (
    <section className="px-[75px] mb-[64px] mt-[153px] flex items-center justify-between gap-[105px] ">
      <div>
        <h1 className="font-extrabold text-[50px] leading-15 w-[646px] text-[#101010]">
          Driving Your{" "}
          <span className="text-[#FA7C45] font-bold">
            Business Forward with Cutting-Edge Digital{" "}
            <span className="text-[#FA7C45] font-bold">
              Marketing Solutions
            </span>
          </span>
        </h1>
        <p className="w-[571px] mt-3 text-[20px] font-semibold text-[#2c2c2c]">
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system,
        </p>

        <div className="flex items-center gap-[21px] mt-[50px]">
          <Button>Get Started</Button>
          <button className="flex cursor-pointer hover:bg-[#FA7C45] hover:text-white hover:border-[#FA7C45] items-center gap-2.5 px-5 py-2.5 rounded-[100px] bg-transparent border border-black text-black">
            <MdOutlineSlowMotionVideo /> Play Video
          </button>
        </div>
      </div>

    
      <div className="relative w-[544px] h-[522px]">
        <Image
          src="/banner.png"
          alt="Banner image"
          fill
          className="object-cover "
          
        />
      </div>
    </section>
  );
}
