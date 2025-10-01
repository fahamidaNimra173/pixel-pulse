import Image from "next/image";
import Button from "./ui/Button";

export default function Banner() {
    return (

        <section className="px-[75px] mt-[63px]">
            <div>
                <h1 className="font-extrabold text-[50px] leading-[1.2px] w-[646px] h-[180px] text-[#101010]">
                    Driving Your <span className="text-[#FA7C45] font-bold">Business Forward with Cutting-Edge
                        Digital <span className="text-[#FA7C45] font-bold">Marketing Solutions</span>
                    </span>
                </h1>
                <p className="w-[571px] text-[20px] font-semibold text-[#2c2c2c]">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system,</p>

                <div>
                    <Button>Get Started</Button>
                    <button>Play Video</button>
                </div>
            </div>
            <Image
            src='/public/banner.png'
            alt="Banner image"
            width={544}
            height={522}
            
            />
        </section>

    );
}