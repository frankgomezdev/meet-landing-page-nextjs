import Button from "../Button";

export default function Footer() {
  return (
    <div className="relative">
      {/* Top striped section */}
      <div className="h-[100px] bg-white">
        <img src="/assets/number2.png" alt="number2" className="absolute left-1/2 -translate-x-1/2 -top-1 z-10"/>
      </div>

      {/* Main footer with teal overlay */}
      <div className="relative flex flex-col items-center bg-[url('/assets/mobile/image-footer.jpg')] bg-cover bg-center bg-no-repeat">
        {/* Overlay - now relative to this container */}
        <div className="absolute inset-0 bg-[#4D96A9]/85"></div>
        <div className="relative z-10 w-full">
          <div className="flex flex-col items-center py-16 px-8 gap-6 text-center">
            <h3 className="text-[32px] font-black leading-[35.2px] text-white">Experience more together</h3>
            <p className="text-base font-medium text-white">
              Stay connected with reliable HD meetings and unlimited one-on-one
              and group video sessions.
            </p>
            <Button backgroundColor="bg-[#855FB1]">
              <span className="text-white font-black">Download</span>
              <span className="text-[#D9B8FF] font-black">v1.3</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}