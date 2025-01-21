import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex flex-col justify-end items-center self-stretch py-12 px-20 pb-0 gap-2 bg-white">
        <div className="flex w-[118px] h-[28px] justify-center items-center gap-[11px]">
            <img src="/assets/logo.svg" alt="logo" />
        </div>
    </div>
  )
}

