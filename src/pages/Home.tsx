import { Button } from "@nextui-org/react";
import { ArrowRight } from "lucide-react";
import ParticlesBg from "../components/ParticlesBg"
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useRef } from "react";

function HeroSection() {
  const heroRef = useRef(null);
  const blinkRef = useRef(null);
  const analyticsRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(blinkRef.current, {
      transform: "translateX(-100%)",
      scrollTrigger: {
        trigger: heroRef.current,
        scroller: "body",
        start: "top 0%",
        end: "top -100%",
        scrub: 0.3,
        markers: true
      }
    });
    gsap.to(analyticsRef.current, {
      transform: "translateX(150%)",
      scrollTrigger: {
        trigger: heroRef.current,
        scroller: "body",
        start: "top 0%",
        scrub: 0.3,
        markers: true
      }
    })
  }, []);

  return (
    <>
    <section ref={heroRef} className="w-full h-screen from-[#3D52A0] to-[#EDE8F5] bg-gradient-to-b sticky top-0 z-[1] relative">
      <ParticlesBg></ParticlesBg>
      <h1 ref={blinkRef} className="font-grot font-[800] uppercase text-[10vw]  w-[60vw] z-[10] blink absolute left-[15%] top-[25%]">Blink</h1>
      <h1 ref={analyticsRef} className="font-grot font-[800] uppercase text-[10vw] w-[60vw] z-[10] analytics absolute left-[25%] top-[45%]">Analytics</h1>
    </section>
    </>
  );
}

function ServicesSection() {
  function ServiceCard() {
    return (
      <section className="h-[250px] w-[25vw] bg-[#EDE8F5] rounded-xl flex flex-col">
        <div className="grow"></div>
        <div className="p-3 text-xl font-medium">Service Title</div>
      </section>
    );
  }

  return (
    <section className="bg-[#3D52A0] w-full h-screen z-[1] sticky top-0 rounded-t-3xl flex flex-col p-10 gap-5 items-center ">
      <div className="font-bold text-4xl uppercase text-center text-white">
        Our Services
      </div>

      <div className="flex grow p-2 flex-wrap gap-5 justify-center">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>

      <Button className="bg-[#EDE8F5]" radius="sm">
        Know More
      </Button>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="bg-[#7091E6] w-full h-screen z-[1] sticky top-0 rounded-3xl flex flex-col p-10 items-center "></section>
  );
}

export function FirstSection() {
  return (
    <section className="bg-[#EDE8F5] h-screen z-[1] sticky top-0 flex flex-col p-10 items-center rounded-t-3xl  bg-grid-black/[0.1] ">
      {/* <div className="font-bold text-3xl uppercase text-center"> */}
      {/* Leverage AI and Data <br /> to propel your business */}
      {/* </div> */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#EDE8F5] [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)] rounded-t-3xl"></div>

      {/* <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
          <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
            Backgrounds
          </p>
        </div> */}
    </section>
  );
}

function LastSection() {
  return (
    <section className="bg-[#3D52A0] w-full h-[50vh] z-[1] sticky top-0 rounded-3xl rounded-b-3xl flex flex-col p-10 items-center justify-center gap-4">
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
    </section>
  );
}

export default function Home() {
  
  return (
    <div className="flex flex-col">
      <HeroSection />
      <FirstSection />
      <ServicesSection />
      <ContactSection />
      <LastSection />
    </div>
  );
}
