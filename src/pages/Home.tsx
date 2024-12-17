import { Button, user } from "@nextui-org/react";
import { ArrowRight } from "lucide-react";
// import ParticlesBg from "../components/ParticlesBg"
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useRef } from "react";
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
    pointSize: 5,
    globeColor: "#052056",
    showAtmosphere: false,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgb(0, 255, 0)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: false,
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // gsap.fromTo('.lottie', {y: '-100%', opacity: 0}, {y: 0, delay: 2, opacity: 100})


    gsap.to(ref1.current, {
      transform: "translateX(-100%)",
      scrollTrigger: {
        trigger: heroRef.current,
        scroller: "body",
        start: "top 0%",
        end: "top -100%",
        scrub: 0.3,
      }
    });
    gsap.to(ref2.current, {
      transform: "translateX(150%)",
      scrollTrigger: {
        trigger: heroRef.current,
        scroller: "body",
        start: "top 0%",
        scrub: 0.3,
      }
    });
    gsap.to(ref3.current, {
      transform: "translateX(-100%)",
      scrollTrigger: {
        trigger: heroRef.current,
        scroller: "body",
        start: "top 0%",
        end: "top -100%",
        scrub: 0.3,
      }
    });

    gsap.fromTo(paragraphRef1.current,{opacity: 0}, {
      opacity: 5,
      y: 0,
      x: 50,
      scrollTrigger: {
        trigger: heroRef.current,
        scroller: "body",
        start: "top 0%",
        scrub: 0.3,
      },
    });

    gsap.fromTo(paragraphRef2.current, {opacity: 0}, {
      opacity: 5,
      y: 0,
      x: -50,
      scrollTrigger: {
        trigger: heroRef.current,
        scroller: "body",
        start: "top 0%",
        scrub: 0.3,
      },
    });


  }, []);

  return (
    <>
    <section ref={heroRef} className="w-full h-screen bg-black sticky top-0 z-[1] relative hero-section overflow-hidden">
      <div className="Globe w-[150vw] absolute top-[35%] h-[150vh] transform -translate-x-[16%] overflow-hidden"><World globeConfig={globeConfig} data={positionData}></World></div>
      
      {/* <div className="absolute inset-0 bg-black/50 z-[5] pointer-events-none">
        <div className="absolute inset-0 top-[63%] bg-gradient-to-r from-transparent to-black/50 backdrop-blur-lg"></div>
      </div> */}
      <h1 ref={ref1} className="bebasneue text-white font-[800] uppercase text-[5vw] tracking-wide z-[10] blink absolute left-[15%] top-[35%] select-none">Transforming Data into <span className="bebasneue text-green-500 font-[800] uppercase">Intelligence</span> </h1>
      <h1 ref={ref2} className="bebasneue text-white font-[800] uppercase text-[5vw]  tracking-wide  z-[10] analytics absolute left-[35%] top-[45%] select-none"><span className="bebasneue text-blue-500 font-[800] uppercase">Models</span> into Impact,</h1>
      <h1 ref={ref3} className="bebasneue text-white font-[800] uppercase text-[5vw]  z-[10] tracking-wide  analytics absolute left-[25%] top-[55%] select-none">and <span className="bebasneue text-yellow-400 font-[800] uppercase">AI</span> into Your Advantage</h1>
      <p ref={paragraphRef1} className="bebasneue text-white absolute text-[2vw] top-[50%] left-[35%] z-10">Welcome!</p>
      <p ref={paragraphRef2} className="bebasneue text-white absolute text-[1vw] top-[58%] left-[65%] z-10 w-[15vw]">Our mission is to empower businesses with intelligent, scalable, and transformative analytics.</p>
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
