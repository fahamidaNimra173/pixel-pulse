import Image from "next/image";
import Button from "../ui/Button";

export default function Navbar(){
    return(
        <section className="px-[75px] bg-white pb-1 fixed w-full z-100 top-0 pt-[43px] ">
            <div className="flex items-end justify-between">
                <div>
                    <Image
                    width={150}
                    height={22}
                    alt="logo"
                    src='/PixelPulse..png'
                    />
                </div>
                <div className="flex items-center justify-center gap-[30px]">
                    <p className="px-[14px]  text-[16px] text-[#101010cc] font-normal ">Home</p>
                    <p className="px-[14px]  text-[16px] text-[#101010cc] font-normal ">All Page</p>
                    <p className="px-[14px]  text-[16px] text-[#101010cc] font-normal ">Service</p>
                    <p className="px-[14px]  text-[16px] text-[#101010cc] font-normal ">Blog</p>
                    <p className="px-[14px]  text-[16px] text-[#101010cc] font-normal ">Contact Us</p>
                </div>
                <div>
                    <Button className="text-[16px]">
                        Buy Template
                    </Button>
                </div>

            </div>
        </section>

    );
}