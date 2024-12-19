import { World } from "@/components/ui/globe";
import { positionData } from "@/data/positionData";
import Marquee from "react-fast-marquee";
import { Button } from "@nextui-org/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ArrowRight, Mouse } from "lucide-react";
import { useEffect, useRef } from "react";
import { Link } from "@nextui-org/react";

function HeroSection() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const paragraphRef1 = useRef(null);
  const paragraphRef2 = useRef(null);
  const heroRef = useRef(null);

  const globeConfig = {
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
    // Scroll to top on page reload
    window.scrollTo(0, 0);

    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Animations
    const animations: gsap.core.Tween[] = [];

    animations.push(
      gsap.fromTo(
        ".lottie",
        { y: "-100%", opacity: 0 },
        { y: 0, delay: 2, opacity: 1 }
      )
    );

    animations.push(
      gsap.to(".mouse", {
        color: "#7091e6",
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "smooth",
      })
    );

    animations.push(
      gsap.to(ref1.current, {
        x: "-50vw",
        color: "#7091e6",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 0%",
          end: "top -100%",
          scrub: 0.3,
        },
      })
    );

    animations.push(
      gsap.to(ref2.current, {
        x: "50vw",
        color: "#7091e6",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 0%",
          scrub: 0.1,
        },
      })
    );

    animations.push(
      gsap.to(ref3.current, {
        x: "-30vw",
        color: "#7091e6",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 0%",
          end: "top -100%",
          scrub: 0.3,
        },
      })
    );

    animations.push(
      gsap.fromTo(
        paragraphRef1.current,
        { opacity: 0, x: 0 },
        {
          opacity: 1,
          y: 0,
          x: 200,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top -6%",
            scrub: 0.3,
          },
        }
      )
    );

    animations.push(
      gsap.fromTo(
        paragraphRef2.current,
        { opacity: 0 },
        {
          opacity: 1,
          y: 0,
          x: -50,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top -6%",
            scrub: 0.3,
          },
        }
      )
    );

    // Refresh ScrollTrigger after all animations
    ScrollTrigger.refresh();

    // Cleanup animations and ScrollTrigger instances
    return () => {
      animations.forEach((anim) => anim.kill());
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="w-full h-screen bg-gradient-to-b from-[#0B0F30] to-[#000000] sticky top-0 z-[1] hero-section overflow-hidden"
    >
      <div className="Globe w-[150vw] absolute top-[35%] h-[150vh] transform -translate-x-[16%] overflow-hidden">
        <World globeConfig={globeConfig} data={positionData} />
      </div>

      <div className="absolute bottom-[30px] flex w-full justify-center">
        <Mouse size="50px" className="mouse text-white" />
      </div>
      <div className="flex h-screen items-center flex-col justify-center">
        <h1
          ref={ref1}
          className="text-white font-[800] text-[5vw] tracking-wide z-[10] left-[20%] select-none"
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
          Models into{" "}
          <span className="instrumentserif-italic capitalize text-white">
            Impact,
          </span>
        </h1>
        <h1
          ref={ref3}
          className="text-white font-[800] text-[5vw] z-[10] tracking-wide left-[30%] select-none"
        >
          and <span className="text-white">AI</span> into your{" "}
          <span className="instrumentserif-italic capitalize text-white">
            Advantage
          </span>
        </h1>
      </div>

      <p
        ref={paragraphRef1}
        className="text-white absolute text-[1.5vw] top-[48%] left-[10%] z-10"
      >
        Welcome to Blink Analytics!
      </p>
      <p
        ref={paragraphRef2}
        className="text-white absolute text-[1vw] top-[64%] right-[5%] z-10 w-[24vw] text-right"
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
  const firstRef = useRef(null);

  useEffect(() => {
    gsap.fromTo('.services-title', {y: 100, opacity: 0}, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      scrollTrigger: {
        trigger: serviceRef.current,
        scroller: "body",
        start: "top 70%",
        end: "top 20%",
        scrub: 0.5,
      },
    })
    
    gsap.fromTo('.marquee-container', {y: 100, opacity: 0}, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "smooth",
      scrollTrigger: {
        trigger: firstRef.current,
        scroller: "body",
        start: "top 20%",
        end: "top 0%",
        scrub: 0.5,
      },
    })
    gsap.fromTo('.first-info', {y: 100, opacity: 0}, {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: "smooth",
      scrollTrigger: {
        trigger: firstRef.current,
        scroller: "body",
        start: "top 40%",
        end: "top 20%",
        scrub: 0.5,
      },
    })
    gsap.fromTo('.first-heading', {y: 100, opacity: 0}, {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: "smooth",
      scrollTrigger: {
        trigger: firstRef.current,
        scroller: "body",
        start: "top 60%",
        end: "top 20%",
        scrub: 0.5,
      },
    })

    const animation = gsap.to('.cards-div', {
      xPercent: -130,
      ease: "none",
      scrollTrigger: {
        trigger: '.services-div',
        start: 'top top',
        end: "top -100%",
        pin: true,
        scrub: 1,
        
      }
    })
    return () => {
      // Cleanup GSAP instance
      animation.kill();
    };

  }, []);
  


  return (
    <>
    <section ref={firstRef} className="bg-[#EDE8F5] pt-10 h-screen z-[1] flex flex-col items-center justify-between rounded-t-3xl  bg-grid-black/[0.1] ">
      <div className="first-section-text pl-10 pr-10 flex flex-col items-center justify-center w-full gap-10">
        <h1
          className="text-[#112241] font-[800] text-[3vw] text-center select-none first-heading"
        >
          What we do <br/> at
          <span className="instrumentserif-italic capitalize text-[#112241] ">
            {" "}
            Blink Analytics
          </span>
        </h1>
        <div className="first-info flex items-center justify-between w-full">
          <p className="text-[#3d52a0] max-w-[800px] text-[2vw]">
            At <span className="instrumentserif-italic">Blink Analytics</span>, we empower businesses with innovative and secure AI solutions. 
            Our mission is to make AI accessible and impactful, helping organizations thrive in a 
            fast-changing digital world. We work closely with clients to turn their vision into reality, 
            creating smarter systems and driving business growth. Join us in shaping a future fueled 
            by the power of AI.
          </p>
          <div className="video">Some kind of Video or Image</div>
        </div>
      </div>
      <div className="marquee-container">
        <Marquee className='marquee mb-10 border-t-[#112241] border-t-4 border-b-[#112241] border-b-4 bg-[#7091e6] bg-opacity-[60%] cursor-pointer'  speed={200} pauseOnHover>
          <h1 className='text-[3vw]'>
            <span className="text-[#112241] michroma font-[700]">&nbsp;Tailored AI Services </span>
            <span  className="text-[#EDE8F5]">✦ </span>
            <span className="text-[#112241] michroma font-[700]">Enterprise Grade AI models </span>
            <span  className="text-[#EDE8F5]">✦ </span>
            <span className="text-[#112241] michroma font-[700]">Secure AI Models </span>
            <span  className="text-[#EDE8F5]">✦ </span>
            <span className="text-[#112241] michroma font-[700]">Future Ready AI </span>
            <span  className="text-[#EDE8F5]">✦ </span>
            <span className="text-[#112241] michroma font-[700]">Contact Us! </span>
            <span  className="text-[#EDE8F5]">✦ </span>
          </h1>
        </Marquee>
      </div>
    </section>
    <section ref={serviceRef} className="bg-[#EDE8F5] w-full h-[200vh] overflow-hidden z-[1] bg-grid-black/[0.1] relative services-div">
      <div className="services-title flex items-center justify-center w-full cursor-pointer absolute top-20 left-1/2 transform -translate-x-1/2 overflow-hidden">
        <h1 className="font-[800] bebasneue tracking-[2px] text-4xl uppercase text-[#112241] text-center">Our Services</h1>
      </div>
      <div ref={cardsDivRef} className="cards-div flex flex-col gap-10 p-10 items-start justify-center mt-[10%]">
        
        <div className="flex gap-10 cards-div-container overflow-hidden">
          <section
            className="h-[50vh] w-[35vw] bg-[#3d52a0] rounded-xl flex flex-col  cursor-pointer p-5"
          >
            <div className="grow"></div>
            <div className="pt-3 bebas text-large text-white font-medium">RLHF AND SFT</div>
          </section>
          <section
            className="h-[50vh] w-[35vw] bg-[#3d52a0] rounded-xl flex flex-col relative cursor-pointer p-5"
          >
            <div className="grow"></div>
            <div className="pt-3 bebas text-large text-white font-medium">RAG IMPLEMENTATION</div>
          </section>
          <section
            className="h-[50vh] w-[35vw] bg-[#3d52a0] rounded-xl flex flex-col relative cursor-pointer p-5"
          >
            <div className="grow "></div>
            <div className="pt-3 bebas text-large text-white font-medium">GENERATIVE AI SERVICES</div>
          </section>
          <section
            className="h-[50vh] w-[35vw] bg-[#3d52a0] rounded-xl flex flex-col relative cursor-pointer p-5"
          >
            <div className="grow"></div>
            <div className="pt-3 bebas text-large text-white font-medium">CHATBOT MAKING</div>
          </section>
          <section
            className="h-[50vh] w-[35vw] bg-[#3d52a0] rounded-xl flex flex-col relative cursor-pointer p-5"
          >
            <div className="grow"></div>
            <div className="pt-3 bebas text-large text-white font-medium">AI AGENTS IMPLEMENTATION</div>
          </section>
          <section
            className="h-[50vh] w-[35vw] bg-[#3d52a0] rounded-xl flex flex-col relative cursor-pointer p-5"
          >
            <div className="grow "></div>
            <div className="pt-3 bebas text-large text-white font-medium">ENTERPRISE BASED SECURE MODELS</div>
          </section>
        </div>
      </div>
      <div className="flex items-center w-full justify-center absolute top-[85vh] left-45">
          <Link href="/services">
          <Button
            radius="full"
            variant="faded"
            size="lg"
            endContent={
              <div className="rounded-full bg-[#7091E6] min-h-[40px] min-w-[40px] flex justify-center items-center ">
                <ArrowRight color="white"/>
              </div>
            }
          >
            Hire us now
          </Button>
          </Link>
        </div>
    </section>
    </>
  );
}

function ContactSection() {
  return (
    <section className="bg-[#7091E6] w-full h-screen z-[1] sticky top-0 rounded-3xl flex flex-col p-10 items-center "></section>
  );
}


function LastSection() {
  return (
    <section className="bg-[#3D52A0] w-full h-[50vh] z-[1] sticky top-0  rounded-t-3xl flex flex-col p-10 items-center justify-center gap-4">
      <div className="font-bold text-5xl text-white w-[60%] text-center">
        Transform Your Business with <br />Cutting-Edge AI Solutions
      </div>
      <div className="font-medium text-xl text-white text-center">
        Partner with us to leverage advanced AI technologies to drive innovation and growth. 
        <br />Reach out today to see how we can help you achieve your business goals.
      </div>
      <Link href="/contact">
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
      </Link>
    </section>
  );
}
export default function Home() {
  return (
    <div className="flex flex-col relative">
      <HeroSection />
      <ServicesSection />
      <ContactSection />
      <LastSection />
    </div>
  );
}
