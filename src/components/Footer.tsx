export default function Footer() {
  return (
    <footer className="sm:min-h-[25vh] h-fit flex justify-evenly flex-col z-[0]">
      <div className="text-[11vw] font-bold leading-none text-center overflow-y-hidden">
        <span className="instrumentserif-italic text-[12vw] ">BLINK </span>
        ANALYTICS
      </div>
      <div className="justify-between flex w-full px-3 pb-[5px] sm:text-[16px] text-[8px] sm:gap-2 gap-0 flex-wrap items-center">
        <div className="text-nowrap">+91 1234567890</div>
        <div>
          <a href="mailto:support@blinkanalytics.in" className="text-nowrap">
            support@blinkanalytics.in
          </a>
        </div>
        <div className="text-nowrap text-center w-fit">
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
    </footer>
  );
}
