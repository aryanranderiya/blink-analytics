import { Button } from "@nextui-org/react";
import { ArrowRight, CircleArrowDown, ArrowUpRight } from "lucide-react";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useRef, useState } from "react";
import { World, GlobeConfig } from "@/components/ui/globe";
import { positionData } from "@/data/positionData";

function HeroSection() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const paragraphRef1 = useRef(null);
  const paragraphRef2 = useRef(null);
  const heroRef = useRef(null);
  
  const globeConfig: GlobeConfig = {
    pointSize: 10,
    globeColor: "#3D52A0",
    showAtmosphere: true,
    atmosphereColor: "#7091e6",
    atmosphereAltitude: 0.3,
    emissive: "#000000",
    emissiveIntensity: 0,
    shininess: 0,
    polygonColor: "#00ff00",
    ambientLight: "#ffffff",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 800,
    arcLength: 0.8,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: false,
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // gsap.fromTo('.lottie', {y: '-100%', opacity: 0}, {y: 0, delay: 2, opacity: 100})

    gsap.to('.arrow-down', {
      y: 30,
      repeat: -1,
      delay: 15,
      duration: 1,
      ease: "smooth"
    })

    gsap.to(ref1.current, {
      transform: "translateX(-100%)",
      scrollTrigger: {
        trigger: heroRef.current,
        scroller: "body",
        start: "top 0%",
        end: "top -100%",
        scrub: 0.3,
      },
    });
    gsap.to(ref2.current, {
      transform: "translateX(150%)",
      scrollTrigger: {
        trigger: heroRef.current,
        scroller: "body",
        start: "top 0%",
        scrub: 0.3,
      },
    });
    gsap.to(ref3.current, {
      transform: "translateX(-100%)",
      scrollTrigger: {
        trigger: heroRef.current,
        scroller: "body",
        start: "top 0%",
        end: "top -100%",
        scrub: 0.3,
      },
    });

    gsap.fromTo(
      paragraphRef1.current,
      { opacity: 0 },
      {
        opacity: 5,
        y: 0,
        x: 50,
        scrollTrigger: {
          trigger: heroRef.current,
          scroller: "body",
          start: "top -6%",
          scrub: 0.3,
        },
      }
    );

    gsap.fromTo(
      paragraphRef2.current,
      { opacity: 0 },
      {
        opacity: 5,
        y: 0,
        x: -50,
        scrollTrigger: {
          trigger: heroRef.current,
          scroller: "body",
          start: "top -6%",
          scrub: 0.3,
        },
      }
    );
  }, []);

  return (
      <section
        ref={heroRef}
        className="w-full h-screen bg-gradient-to-b from-[#0B0F30] to-[#000000] sticky top-0 z-[1] hero-section overflow-hidden"
      >
        <div className="Globe w-[150vw] absolute top-[35%] h-[150vh] transform -translate-x-[16%] overflow-hidden">
          <World globeConfig={globeConfig} data={positionData} />
        </div>

      <CircleArrowDown color="white" size="50px" className="arrow-down absolute bottom-[5%] left-[48%]"></CircleArrowDown>
        <h1
          ref={ref1}
          className="bebasneue text-white font-[800] uppercase text-[4.5vw] tracking-wide z-[10] blink absolute left-[20%] top-[34%] select-none"
        >
          Transforming Data into Intelligence,
        </h1>
        <h1
          ref={ref2}
          className="bebasneue text-white font-[800] uppercase text-[4.5vw]  tracking-wide  z-[10] analytics absolute left-[40%] top-[46%] select-none"
        >
          Models into Impact,
        </h1>
        <h1
          ref={ref3}
          className="bebasneue text-white font-[800] uppercase text-[4.5vw]  z-[10] tracking-wide  analytics absolute left-[34%] top-[57%] select-none"
        >
          and AI into your Advantage
        </h1>
        <p
          ref={paragraphRef1}
          className="michroma text-white absolute text-[2vw] top-[49%] left-[35%] z-10"
        >
          Welcome!
        </p>
        <p
          ref={paragraphRef2}
          className="michroma text-white absolute text-[1vw] top-[59%] left-[65%] z-10 w-[24vw]"
        >
          Our mission is to empower businesses with intelligent, scalable, and
          transformative analytics.
        </p>
      </section>
      
      
    
  );
}

function ServicesSection() {
  const serviceRef = useRef(null);
  const cardsDivRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".cards-div section",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2, // Delay between each animation
        ease: "smooth",
        scrollTrigger: {
          trigger: serviceRef.current,
          scroller: "body",
          start: "top 50%",
          end: "top 20%",
          scrub: 0.5,
        },
      }
    );
  }, []);
  

  function ServiceCard({name}) {
    return (
      <section
        className="h-[35vh] w-[25vw] bg-[#EDE8F5] rounded-xl flex flex-col relative cursor-pointer"
      >
        <div className="grow"></div>
        <div className="p-3 bebas text-large font-medium">{name}</div>
      </section>
    );
  }

  return (
    <section ref={serviceRef} className="bg-[#3D52A0] w-full h-screen z-[1] sticky top-0 rounded-t-3xl flex flex-col p-10 gap-5 items-center ">
      <div className="font-[800] bebasneue tracking-[2px] text-4xl uppercase text-center text-white cursor-pointer">
        Our Services
      </div>

      <div ref={cardsDivRef} className="flex grow p-2 flex-wrap gap-5 justify-center cards-div">
      <ServiceCard name={"RLHF and SFT"}/>
        <ServiceCard name={"RAG implementation"} />
        <ServiceCard name={"Generative AI services"} />
        <ServiceCard name={"Chatbot making"}/>
        <ServiceCard name={"AI agents implementation"}  />
        <ServiceCard name={"Enterprise based secure models"}  />
      </div>

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
