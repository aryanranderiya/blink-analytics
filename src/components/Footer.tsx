export default function Footer() {
  return (
    <footer className="h-[30vh] flex justify-end flex-col z-[0]">
      <div className="justify-between flex w-full px-3">
        <div>+91 1234567890</div>
        <div>blinkanalytics@gmail.com</div>
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
      <div className="text-[11vw] font-bold leading-none text-center">
        <span className="instrumentserif-italic text-[12vw] ">BLINK </span>
        ANALYTICS
      </div>
    </footer>
  );
}
