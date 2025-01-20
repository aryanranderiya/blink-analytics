import BrainModel from "@/components/BrainModel";
import ParticlesBg from "@/components/ParticlesBg";
import DotPattern from "@/components/ui/dot-pattern";
import { World } from "@/components/ui/globe";
import { positionData } from "@/data/positionData";
import { cn } from "@/lib/utils";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Button, Link } from "@nextui-org/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ArrowRight, Mouse } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { isMobile } from "react-device-detect";
import Slider from "react-infinite-logo-slider";

function HeroSection() {
  const [isLoaded, setisLoaded] = useState(false);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const paragraphRef1 = useRef(null);
  // const paragraphRef2 = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setisLoaded(true);
    }, 1300);
  }, []);

  const globeConfig = {
    pointSize: 10,
    globeColor: "#3c096c",
    showAtmosphere: true,
    atmosphereColor: "#7b2cbf",
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
        color: "#E0AAFF",
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "smooth",
      })
    );

    animations.push(
      gsap.to(ref1.current, {
        x: "-50vw",
        color: "#E0AAFF",
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
        color: "#E0AAFF",
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
        color: "#E0AAFF",
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
        { opacity: 0, x: 200 },
        {
          opacity: 1,
          y: 0,
          x: 0,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top -6%",
            end: "top -15%",
            scrub: 0.3,
          },
        }
      )
    );

    // animations.push(
    //   gsap.fromTo(
    //     paragraphRef2.current,
    //     { opacity: 0, x: -100 },
    //     {
    //       opacity: 1,
    //       y: 0,
    //       x: 0,
    //       scrollTrigger: {
    //         trigger: heroRef.current,
    //         start: "top -6%",
    //         end: "top -15%",
    //         scrub: 0.3,
    //       },
    //     }
    //   )
    // );

    // Refresh ScrollTrigger after all animations
    ScrollTrigger.refresh();

    // Cleanup animations and ScrollTrigger instances
    return () => {
      animations.forEach((anim) => anim.kill());
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);

  if(isMobile){
    console.log(World)
  }

  return (
    <section
      ref={heroRef}
      className="w-full h-screen bg-gradient-to-b from-[#10002b] to-[#000000] sticky top-0 z-[1] hero-section overflow-hidden"
    >
      <div className="Globe w-[130vw] h-[130vw] top-[45%] -translate-x-[10%] sm:w-[150vw] absolute sm:top-[35%] sm:h-[150vh] transform sm:-translate-x-[16%] sm:overflow-hidden">
        {isLoaded && <World globeConfig={globeConfig} data={positionData} />}
      </div>

      <div className="absolute bottom-[30px] flex w-full justify-center">
        <Mouse size="50px" className="mouse text-white" />
      </div>
      <div className="flex h-screen items-center flex-col sm:justify-center sm:pt-0 pt-[30%] z-[10] pb-auto">
        <h1
          ref={ref1}
          className="text-white font-[800] sm:text-[5vw] text-[5vh] text-center leading-[40px] sm:leading-[100px] tracking-wide z-[10] left-[20%] select-none"
        >
          Transforming Data into{" "}
          <span className="instrumentserif-italic capitalize text-[#E0AAFF]">
            Intelligence,
          </span>
        </h1>
        <h1
          ref={ref2}
          className="text-white font-[800] sm:text-[5vw] text-[5vh] text-center leading-[40px] sm:leading-[100px] tracking-wide z-[10] left-[35%] select-none"
        >
          Models into{" "}
          <span className="instrumentserif-italic capitalize text-[#E0AAFF]">
            Impact,
          </span>
        </h1>
        <h1
          ref={ref3}
          className="text-white font-[800] sm:text-[5vw] text-[5vh] text-center leading-[40px] sm:leading-[100px] z-[10] tracking-wide left-[30%] select-none"
        >
          and <span className="text-white">AI</span> into your{" "}
          <span className="instrumentserif-italic capitalize text-[#E0AAFF]">
            Advantage
          </span>
        </h1>
      </div>

      <p
        ref={paragraphRef1}
        className="text-white absolute text-[3vh] text-center sm:text-[1.5vw] sm:top-[48%] top-[60%] sm:left-[20%] left-[15%] z-10"
      >
        Welcome to Blink Analytics!
      </p>
      {/* <p
        ref={paragraphRef2}
        className="text-white absolute text-[1vw] top-[64%] right-[5%] z-10 w-[24vw] text-left"
      >
        Our mission is to empower businesses with intelligent, scalable, and
        transformative analytics.
      </p> */}
    </section>
  );
}

function ServicesSection() {
  const serviceRef = useRef(null);
  const cardsDivRef = useRef(null);
  const firstRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".services-title",
      { y: 100, opacity: 0 },
      {
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
      }
    );

    gsap.fromTo(
      ".cards-div",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: serviceRef.current,
          scroller: "body",
          start: "top 60%",
          end: "top 10%",
          scrub: 0.5,
        },
      }
    );

    gsap.fromTo(
      ".marquee-container",
      { y: 100, opacity: 0 },
      {
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
      }
    );
    gsap.fromTo(
      ".first-info .left",
      { x: -150, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "smooth",
        scrollTrigger: {
          trigger: firstRef.current,
          scroller: "body",
          start: "top 30%",
          end: "top 10%",
          scrub: 0.5,
        },
      }
    );
    gsap.fromTo(
      ".first-info .right",
      { x: 150, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "smooth",
        scrollTrigger: {
          trigger: firstRef.current,
          scroller: "body",
          start: "top 30%",
          end: "top 10%",
          scrub: 0.5,
        },
      }
    );
    gsap.fromTo(
      ".first-heading",
      { y: 100, opacity: 0 },
      {
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
      }
    );

    const mm = gsap.matchMedia();

    mm.add(
      {
        // Desktop view
        isDesktop: "(min-width: 1024px)",
        // Tablet view
        isTablet: "(min-width: 768px) and (max-width: 1023px)",
      },
      (context) => {
        const { isDesktop, isTablet } = context.conditions as {
          isDesktop: boolean;
          isTablet: boolean;
        };

        const animation = gsap.to(".cards-div", {
          xPercent: isDesktop ? -168 : isTablet ? -400 : -610,
          ease: "none",
          scrollTrigger: {
            trigger: ".services-div",
            start: "top top",
            end: "top -100%",
            pin: true,
            scrub: 2,
          },
        });

        // Cleanup for this context
        return () => animation.kill();
      }
    );

    return () => mm.revert();
  }, []);
  const sections = [
    { bgColor: "bg-black", text: "RLHF AND SFT", videoSrc: "/RAG.mp4" },
    {
      bgColor: "bg-black",
      text: "RAG IMPLEMENTATION",
      videoSrc: "/RAG-updated.mp4",
    },
    {
      bgColor: "bg-black",
      text: "GENERATIVE AI SERVICES",
      videoSrc: "/RAG-updated.mp4",
    },
    {
      bgColor: "bg-black",
      text: "CHATBOT MAKING",
      videoSrc: "/RAG-updated.mp4",
    },
    {
      bgColor: "bg-black",
      text: "AI AGENTS IMPLEMENTATION",
      videoSrc: "/RAG-updated.mp4",
    },
    {
      bgColor: "bg-black",
      text: "ENTERPRISE BASED SECURE MODELS",
      videoSrc: "/RAG-updated.mp4",
    },
    {
      bgColor: "bg-black",
      text: "DATA ANALYTICS SERVICES",
      videoSrc: "/RAG-updated.mp4",
    },
  ];
  return (
    <>
      <section
        ref={firstRef}
        className="bg-[#ede8f5] pt-10 h-[100vh] z-[1] sticky top-0 flex flex-col items-center justify-start rounded-t-3xl "
      >
        <ParticlesBg parentRef={firstRef} />
        <h1 className="text-[#112241] font-[800] sm:text-[4vw] text-3xl text-center select-none first-heading instrumentserif-italic">
          What we do
        </h1>
        <div className="first-section-text sm:p-10 p-4 flex flex-col items-center justify-center w-full gap-10 h-full relative flex-wrap">
          <div className="first-info flex w-full h-full justify-evenly items-center sm:items-stretch overflow-hidden sm:flex-row flex-col">
            <div className="left flex flex-col gap-5">
              <div className="video bg-[#371367] sm:w-[40vw] w-[80vw] sm:h-full  sm:max-h-[75vh] h-[40vh] rounded-3xl p-5 sm:p-10 flex flex-col justify-between">
                <div className="brainmodel absolute right-[15px] bottom-[50px] sm:w-[15vw] w-[28vw]">
                <video
                  loop
                  muted
                  autoPlay
                  playsInline
                >
                  <source src={'/brain-final2.mp4'} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                </div>
                <div>
                  <Link
                    href="/generative-ai"
                    className="bebasneue  text-[4vh] sm:text-[4vw] text-transparent bg-clip-text bg-gradient-to-tr from-[#c77dff] to-[#e0aaff] cursor-pointer hover:underline decoration-[#7b2cbf]"
                  >
                    Generative AI
                  </Link>
                  <p className="text-white text-xs sm:text-[20px] sm:leading-[30px] ">
                    Unleash your creativity and redefine possibilities with our
                    generative AI solutions. Whether it's content creation,
                    marketing automation, or system integration, we help you
                    harness AI to innovate and excel.
                  </p>
                </div>
                <ul className="flex flex-col gap-2 list-none mt-2 text-[10px] sm:text-[20px] sm:leading-[30px]">
                  <li className="bg-white rounded-r-3xl max-w-max px-[10px] sm:px-5 py-2 font-bold hover:pr-10 transition-smooth duration-200 hover:bg-[#e0aaff] select-none">
                    Automated Content Generation
                  </li>
                  <li className="bg-white rounded-r-3xl max-w-max px-[10px] sm:px-5 py-2 font-bold hover:pr-10 transition-smooth duration-200 hover:bg-[#e0aaff] select-none">
                    Personalized Experiences
                  </li>
                  <li className="bg-white rounded-r-3xl max-w-max px-[10px] sm:px-5 py-2 font-bold hover:pr-10 transition-smooth duration-200 hover:bg-[#e0aaff] select-none">
                    Efficient Workflows
                  </li>
                  <li className="bg-white rounded-r-3xl max-w-max px-[10px] sm:px-5 py-2 font-bold hover:pr-10 transition-smooth duration-200 hover:bg-[#e0aaff] select-none">
                    Innovative Problem Solving
                  </li>
                </ul>
              </div>
            </div>
            <div className="right flex flex-col gap-5 ">
              <div className="video sm:w-[40vw] w-[80vw] sm:h-full sm:max-h-[75vh] h-[40vh] bg-[#371367] rounded-3xl flex flex-col p-5 sm:p-10 relative justify-between">
                <div className="brainmodel absolute sm:right-[-15%] right-[-20%] bottom-5 sm:w-[35vw] w-[70vw]">
                  <DotLottieReact
                    src="https://lottie.host/b0a2acd5-a7aa-49bc-89ce-5c66c54ca586/VfQO43rteM.json"
                    loop
                    autoplay
                  />
                </div>
                <div>
                  <Link
                    href="/data-analytics"
                    className="bebasneue text-[4vh] sm:text-[4vw] text-transparent bg-clip-text bg-gradient-to-tr from-[#c77dff] to-[#e0aaff] cursor-pointer hover:underline decoration-[#7b2cbf]"
                  >
                    Data Analytics
                  </Link>
                  <p className="text-white text-xs sm:text-[20px] sm:leading-[30px]">
                    Empower your business with data-driven strategies. Our
                    analytics services unlock the potential of your data,
                    enabling smarter decisions, predictive capabilities, and
                    optimized performance across all domains.
                  </p>
                </div>
                <ul className="flex flex-col gap-2 list-none mt-2 text-[10px] sm:text-[20px] sm:leading-[30px]">
                  <li className="bg-white rounded-r-3xl max-w-max px-[10px] sm:px-5 py-2 font-bold hover:pr-10 transition-smooth duration-200 hover:bg-[#e0aaff] select-none">
                    Informed Decision-Making
                  </li>
                  <li className="bg-white rounded-r-3xl max-w-max px-[10px] sm:px-5 py-2 font-bold hover:pr-10 transition-smooth duration-200 hover:bg-[#e0aaff] select-none">
                    Trend Identification
                  </li>
                  <li className="bg-white rounded-r-3xl max-w-max px-[10px] sm:px-5 py-2 font-bold hover:pr-10 transition-smooth duration-200 hover:bg-[#e0aaff] select-none">
                    Predictive Analytics
                  </li>
                  <li className="bg-white rounded-r-3xl max-w-max px-[10px] sm:px-5 py-2 font-bold hover:pr-10 transition-smooth duration-200 hover:bg-[#e0aaff] select-none">
                    Business Intelligence
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        ref={serviceRef}
        className="bg-gradient-to-tr from-pink-500 to-[#5a189a] via-[#5a189a] from w-full h-[200vh] overflow-hidden z-[1] rounded-t-3xl relative services-div "
      >
        <DotPattern
          className={cn(
            "[mask-image:linear-gradient(to_left,white,#ffffff80,transparent)] absolute inset-0"
          )}
        />
        <div className="services-title flex items-center justify-center w-full  cursor-pointer absolute top-20 left-1/2 transform -translate-x-1/2 overflow-hidden mb-[50px]">
          <h1 className="font-[800] bebasneue tracking-[3px] sm:text-[4vw] text-5xl uppercase text-white text-center">
            Our Services
          </h1>
        </div>
        <div
          ref={cardsDivRef}
          className="cards-div flex flex-col sm:p-10 p-5 sm:mt-[150px] mt-[80px] items-start justify-center pt-[20vh] sm: h-fit max-w-screen"
        >
          <div className="flex gap-10 cards-div-container overflow-hidden">
            {sections.map((section, index) => (
              <section
                key={index}
                className={`sm:min-h-[50vh] sm:w-[35vw] h-full w-[90vw] ${section.bgColor} rounded-xl flex flex-col cursor-pointer p-5`}
              >
                <div className="grow">
                  {section.videoSrc ? (
                    <video
                      width="600"
                      height="auto"
                      loop
                      muted
                      autoPlay
                      playsInline
                    >
                      <source src={section.videoSrc} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : null}
                </div>
                <div
                  className={`pt-3 bebas sm:text-large text-md font-medium ${
                    section.bgColor === "bg-black" ? "text-white" : "text-black"
                  }`}
                >
                  {section.text}
                </div>
              </section>
            ))}
          </div>
        </div>
        <div className="flex items-center w-full justify-center mt-10">
          <Link href="/services">
            <Button
              radius="full"
              variant="faded"
              size="lg"
              className="pr-[2px]"
              endContent={
                <div className="rounded-full bg-gradient-to-tr from-pink-500 to-purple-500 min-h-[40px] min-w-[40px] flex justify-center items-center ">
                  <ArrowRight color="white" />
                </div>
              }
            >
              Explore more!
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}

const slides = [
  {
    src: "https://cdn.brandfetch.io/hf.co/w/512/h/474/logo?c=1idPZb5Qfl3f_wFk7o2",
    alt: "Hugging Face",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    alt: "Python",
  },
  {
    src: "https://cdn.brandfetch.io/snowflake.com/w/512/h/487/symbol?c=1idPZb5Qfl3f_wFk7o2",
    alt: "Snowflake",
  },
  {
    src: "https://cdn.brandfetch.io/mysql.com/w/512/h/348/logo?c=1idPZb5Qfl3f_wFk7o2",
    alt: "MySQL",
  },
  {
    src: "https://cdn.brandfetch.io/openai.com/w/506/h/512/theme/light/symbol?c=1idPZb5Qfl3f_wFk7o2",
    alt: "OpenAI",
  },
  {
    src: "https://cdn.brandfetch.io/langchain.com/w/400/h/400?c=1idPZb5Qfl3f_wFk7o2",
    alt: "LangChain",
  },
  {
    src: "../src/assets/slider/spark.png",
    alt: "Apache Spark",
  },
  {
    src: "../src/assets/slider/bigquery.png",
    alt: "BigQuery",
  },
];

function ContactSection() {
  const contactsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".top",
      { y: 150, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "smooth",
        scrollTrigger: {
          trigger: contactsRef.current,
          scroller: "body",
          start: "top 50%",
          end: "top 30%",
          scrub: 0.5,
        },
      }
    );
    gsap.fromTo(
      ".bottom p",
      { y: 150, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "smooth",
        scrollTrigger: {
          trigger: contactsRef.current,
          scroller: "body",
          start: "top 40%",
          end: "top 20%",
          scrub: 0.5,
        },
      }
    );
  }, []);

  return (
    <section
      ref={contactsRef}
      className="bg-[#3c096c] w-full h-screen z-[1] sticky top-0 rounded-t-3xl flex flex-col sm:p-10  items-center overflow-hidden sm:bg-custom-grid bg-[length:150px_150px]"
    >
      <div className="absolute top-10 sm:left-[-30%] left-[-50%]">
        <img src="/gradient-vtex.png" alt="gradient" />
      </div>
      <div className="container flex flex-col items-center justify-center sm:p-10 p-[4vh] w-full h-full sm:gap-10 gap-5">
        <div className="top flex flex-col items-center justify-center gap-10">
          <h1 className="bebasneue font-[800] tracking-wide leading-none sm:text-7xl text-4xl text-white text-center spacing-[5px] gap-4">
            Leverage&nbsp;
            <span className="bebasneue font-[800] tracking-wide leading-none sm:text-7xl text-4xl text-transparent bg-clip-text bg-gradient-to-tr from-pink-500 to-purple-500 text-center spacing-[5px]">
              AI and Data{" "}
            </span>
            <br /> to propel your Business
          </h1>
          <Link href="/contact">
            <Button
              radius="full"
              variant="faded"
              className="pr-[2px]"
              size="lg"
              endContent={
                <div className="rounded-full bg-gradient-to-tr from-pink-500 to-purple-500 min-h-[40px] min-w-[40px] flex justify-center items-center ">
                  <ArrowRight color="white" />
                </div>
              }
            >
              Get Access
            </Button>
          </Link>
        </div>
        <div className="bottom flex flex-col items-center justify-center gap-10 ">
          <p className="sm:text-xl text-sm font-bold text-[#999999] tracking-wide max-w-[80vw] sm:max-w-[60vw] text-center mb-5">
            Powering innovation with the best in AI technology—our expertise is
            built on cutting-edge tools that redefine analytics and
            decision-making. These trusted solutions enable us to deliver
            precision, performance, and unparalleled insights for your business.
          </p>
          <Slider
            width={window.innerWidth > 640 ? "220px" : "100px"}
            duration={30}
            pauseOnHover={false}
            blurBorders={false}
            blurBorderColor={"#fff"}
          >
            {slides.map((slide, index) => (
              <Slider.Slide key={index}>
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="h-[50px] w-[50px] sm:h-[100px] sm:w-[100px] object-contain grayscale hover:grayscale-0 transition-all"
                />
              </Slider.Slide>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

function LastSection() {
  return (
    <section className="bg-[#10002b] w-full sm:h-[50vh] h-[35vh] z-[1] sticky top-0  rounded-t-3xl flex flex-col sm:p-10 p-10 items-center sm:justify-center  justify-evenly sm:gap-4 gap-2">
      <div className="font-bold sm:text-5xl text-2xl text-white max-w-screen-sm sm:max-w-screen-2xl text-center inline">
        Transform Your Business with{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-tr from-pink-500 to-purple-500">
          Cutting-Edge
        </span>
        &nbsp;AI Solutions
      </div>
      <div className="font-medium sm:text-xl text-xs text-white text-center max-w-[60vw]">
        Partner with us to leverage advanced AI technologies to drive innovation
        and growth. Reach out today to see how we can help you achieve your
        business goals.
      </div>
      <Link href="/contact">
        <Button
          radius="full"
          variant="faded"
          size={window.innerWidth > 640 ? "lg" : "sm"}
          endContent={
            <div className="rounded-full bg-gradient-to-tr from-pink-500 to-purple-500 h-[25px] w-[25px] sm:min-h-[40px] sm:min-w-[40px] flex justify-center items-center ">
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
    <div className="flex flex-col relative ">
      <HeroSection />
      <ServicesSection />
      <ContactSection />
      {/* <RandomSection /> */}
      <LastSection />
    </div>
  );
}
