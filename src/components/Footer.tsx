export default function Footer() {
  return (
    <footer className="sm:min-h-[25vh] h-fit flex justify-evenly flex-col z-[0]">
      <div className="text-[11vw] font-bold leading-[80%] mt-[20px] text-center overflow-y-hidden">
        <span className="instrumentserif-italic text-[12vw] ">BLINK </span>
        ANALYTICS
      </div>
      <div className="flex-col px-3 pb-[5px] sm:text-[16px] text-[8px] sm:gap-2 gap-0 flex-wrap items-center justify-center">
        <div className="flex w-full justify-between">
          <div className="text-nowrap">+1 (682) 408-3798 | Fort Worth, TX</div>
          <div>
            <a href="mailto:support@blinkanalytics.in" className="text-nowrap">
              support@blinkanalytics.in
            </a>
          </div>
          <div className="text-nowrap">+91 (992) 452-7163 | Ahmedabad, India</div>
        </div>
        <div className="flex justify-between sm:text-[14px] text-[6px]">
        <div className="sm:text-[12px] text-[12px]">&copy; BLINK ANALYTICS, {new Date().getFullYear()} </div>
        <div className="text-nowrap sm:text-[12px] text-[12px]">
          Designed & Developed by{" "}
          <a
            href="https://aryanranderiya.com"
            target="_blank"
            className="underline"
          >
            Aryan
          </a>{" "}
          &{" "}
          <a
            href="https://linkedin.com/in/meetdholakia2074"
            target="_blank"
            className="underline"
          >
            Meet
          </a>
        </div>
        </div>
        
      </div>
    </footer>
  );
}
