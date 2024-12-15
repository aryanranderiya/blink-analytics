import { Button } from "@nextui-org/react";
import { ArrowRight } from "lucide-react";

function HeroSection() {
  return (
    <div className="w-full h-screen from-[#7091E6] to-[#ADBBDA] bg-gradient-to-b flex items-center justify-center flex-col gap-2 sticky top-0 z-[1]">
      <h1 className="font-bold text-9xl text-left uppercase w-[60vw]">Blink</h1>
      <h1 className="font-bold text-9xl uppercase text-right w-[60vw]">
        Analytics
      </h1>
      <div className="text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
        architecto.
      </div>
    </div>
  );
}

function ServicesSection() {
  return (
    <div className="bg-[#3D52A0] w-full h-screen z-[1] sticky top-0 rounded-t-3xl flex flex-col p-10 items-center ">
      <div className="font-bold text-4xl uppercase text-center text-white">
        Our Services
      </div>

      <div className="flex grow"></div>

      <Button className="bg-[#EDE8F5]" radius="sm">
        Know More
      </Button>
    </div>
  );
}

function ContactSection() {
  return (
    <div className="bg-[#7091E6] w-full h-screen z-[1] sticky top-0 rounded-3xl flex flex-col p-10 items-center "></div>
  );
}

function LastSection() {
  return (
    <div className="bg-[#3D52A0] w-full h-[50vh] z-[1] sticky top-0 rounded-3xl flex flex-col p-10 items-center justify-center gap-4">
      <div className="font-bold text-5xl text-white w-[60%] text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </div>
      <div className="font-medium text-xl text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </div>

      <Button
        radius="full"
        variant="faded"
        size="lg"
        endContent={
          <div className="rounded-full bg-[#7091E6] min-h-[40px] min-w-[40px] flex justify-center items-center ">
            <ArrowRight color="white" />
          </div>
        }
        className="pr-1"
      >
        Hire us now
      </Button>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />

      <div className="bg-[#EDE8F5] h-screen z-[1] sticky top-0 flex flex-col p-10 items-center rounded-t-3xl  bg-grid-black/[0.1] ">
        {/* <div className="font-bold text-3xl uppercase text-center"> */}
        {/* Leverage AI and Data <br /> to propel your business */}
        {/* </div> */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#EDE8F5] [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)] rounded-t-3xl"></div>

        {/* <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
          <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
            Backgrounds
          </p>
        </div> */}
      </div>

      <ServicesSection />
      <ContactSection />
      <LastSection />
    </div>
  );
}
