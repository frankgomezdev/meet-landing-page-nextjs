import Image from "next/image";
import Button from "../Button";

export default function Hero() {
  return (
    <div className="flex flex-col items-center self-stretch max-w-[385px] pt-16 px-8 pb-8 gap-2 bg-white">
      <div className="flex h-[160px] justify-center items-center self-stretch over mb-12">
        <img className="w-[140%] max-w-none" src="/assets/tablet/image-hero.png" alt="hero" />
      </div>
      <div className="flex flex-col items-center self-stretch gap-6">
        <h1 className="text-[40px] text-[#28283D] text-center font-black leading-[44px]">Group Chat for &nbsp; Everyone</h1>
        <p className="text-base text-[#87879D] text-center font-medium">Meet makes it easy to connect with others face-to-face virtually and collaborate across any device.</p>
        <Button backgroundColor="bg-[#4D96A9]">
          <span className="text-white font-black">Download</span>
          <span className="text-[#8FE3F9] font-black">v1.3</span>
        </Button>
        <Button backgroundColor="bg-[#855FB1]">
          <span className="text-white font-black">What is it?</span>
        </Button>
      </div>
    </div>
  )
}
