import { GlobeConfig, World } from "@/components/ui/globe";
import { positionData } from "@/data/positionData";
import { Button } from "@nextui-org/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ArrowRight, Mouse } from "lucide-react";
import { useEffect, useRef } from "react";

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
    polygonColor: "#ffffff",
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
    gsap.fromTo(
      ".lottie",
      { y: "-100%", opacity: 0 },
      { y: 0, delay: 2, opacity: 100 }
    );

    // gsap.to(".arrow-down", {
    //   y: 30,
    //   repeat: -1,
    //   delay: 10,
    //   duration: 1,
    //   ease: "smooth",
    // });
    gsap.to(ref1.current, {
      x: "-50vw",
      color: "#7091e6",
      scrollTrigger: {
        trigger: heroRef.current,
        scroller: "body",
        start: "top 0%",
        end: "top -100%",
        scrub: 0.3,
      },
    });
    gsap.to(ref2.current, {
      x: "50vw",
      color: "#7091e6",
      scrollTrigger: {
        trigger: heroRef.current,
        scroller: "body",
        start: "top 0%",
        scrub: 0.1,
      },
    });
    gsap.to(ref3.current, {
      x: "-30vw",
      color: "#7091e6",
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
      { opacity: 0, x: 0 },
      {
        opacity: 5,
        y: 0,
        x: 200,
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

      <div className="absolute bottom-[50px] flex w-full justify-center">
        <Mouse color="white" size="50px" className="" />
      </div>
      <div className="flex h-screen items-center flex-col justify-center">
        <h1
          ref={ref1}
          className={` text-white font-[800] text-[5vw] tracking-wide z-[10] left-[20%] select-none`}
        >
          Transforming Data into{" "}
          <span className="instrumentserif-italic capitalize text-white">
            Intelligence,
          </span>
        </h1>
        <h1
          ref={ref2}
          className="text-white font-[800] text-[5vw] tracking-wide z-[10] left-[35%] select-none"
        >
          Models into
          <span className="instrumentserif-italic capitalize text-white">
            {" "}
            Impact,
          </span>
        </h1>
        <h1
          ref={ref3}
          className="text-white font-[800] text-[5vw] z-[10] tracking-wide left-[30%]  select-none"
        >
          and <span className="text-white">AI</span> into your
          <span className="instrumentserif-italic capitalize text-white">
            {" "}
            Advantage
          </span>
        </h1>
      </div>

      <p
        ref={paragraphRef1}
        className="text-white absolute text-[1.5vw] top-[49%] left-[10%] z-10"
      >
        Welcome to Blink Analytics
      </p>
      <p
        ref={paragraphRef2}
        className="text-white absolute text-[1vw] top-[62%] right-[5%] z-10 w-[24vw] text-right"
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
        stagger: 0.3,
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

  function ServiceCard({ name }: { name: string }) {
    return (
      <section className="h-[30vh] w-[80vw] sm:h-[25vh] sm:w-[70vw] md:h-[20vh] md:w-[50vw] lg:h-[20vh] lg:w-[45vw] xl:h-[20vh] xl:w-[40vw] bg-[#3d52a0] rounded-xl flex flex-col relative cursor-pointer overflow-hidden group">
        <div className="absolute left-0 w-full">
          <img
            src="https://placehold.co/600x400"
            className="object-contain min-w-full group-hover:scale-125 transition-transform duration-400"
          />
        </div>

        <div className="grow" />

        <div className="p-3 text-white z-[1]">
          <div className="text-xl font-medium">{name}</div>

          <div className="text-normal instrumentserif-italic text-foreground-300">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat,
            ratione laboriosam. Sequi obcaecati reiciendis porro ad assumenda
            iste adipisci possimus?
          </div>
        </div>

        <div className="bg-gradient-to-t absolute top-0 h-full from-[#00000070] left-0 w-full to-transparent  rounded-xl" />
      </section>
    );
  }

  return (
    <section
      ref={serviceRef}
      className="bg-[#EDE8F5] w-full h-screen z-[1] sticky top-0 rounded-t-3xl flex justify-start flex-col p-10 gap-14 items-center bg-grid-black/[0.1]"
    >
      <div className="space-y-4">
        <div className="font-bold tracking-[2px] text-4xl text-center text-[#112241] cursor-pointer">
          What can we offer?
        </div>

        <div
          ref={cardsDivRef}
          className="flex p-2 flex-wrap gap-5 justify-center h-fit"
        >
          <ServiceCard name={"RLHF and SFT"} />
          <ServiceCard name={"RAG implementation"} />
          <ServiceCard name={"Generative AI services"} />
          <ServiceCard name={"Chatbot making"} />
          <ServiceCard name={"AI agents implementation"} />
          <ServiceCard name={"Enterprise based secure models"} />
        </div>
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
      >
        Hire us now
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
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#EDE8F5] [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)] rounded-t-3xl"></div>
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
      {/* <FirstSection /> */}
      <ServicesSection />
      <ContactSection />
      <LastSection />
    </div>
  );
}
