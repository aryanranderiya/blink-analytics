export default function Footer() {
  return (
    <footer className="h-[30vh] flex justify-end flex-col z-[0]">
      <div className="text-[11vw] font-bold leading-none text-center overflow-y-hidden">
        <span className="instrumentserif-italic text-[12vw] ">BLINK </span>
        ANALYTICS
      </div>
      <div className="justify-between flex w-full px-3 pb-[5px]">
        <div>+91 1234567890</div>
        <div><a href="mailto:support@blinkanalytics.in">support@blinkanalytics.in</a></div>
        <div>
          Designed & Developed by{" "}
          <a href="https://aryanranderiya.com" target="_blank" className="underline">
            Aryan
          </a>{" "}
          &{" "}
          <a href="https://linkedin.com/in/meetdholakia2074" target="_blank" className="underline">
            Meet
          </a>
        </div>
      </div>
      
    </footer>
  );
}
