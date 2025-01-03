import BrainModel from "@/components/BrainModel";
import ParticlesBg from "@/components/ParticlesBg";
import { World } from "@/components/ui/globe";
import { positionData } from "@/data/positionData";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Button, Link } from "@nextui-org/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ArrowRight, Mouse } from "lucide-react";
import { useEffect, useRef } from "react";
import Slider from "react-infinite-logo-slider";

function HeroSection() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const paragraphRef1 = useRef(null);
  // const paragraphRef2 = useRef(null);
  const heroRef = useRef(null);

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

  return (
    <section
      ref={heroRef}
      className="w-full h-screen bg-gradient-to-b from-[#10002b] to-[#000000] sticky top-0 z-[1] hero-section overflow-hidden"
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
          <span className="instrumentserif-italic capitalize text-[#E0AAFF]">
            Intelligence,
          </span>
        </h1>
        <h1
          ref={ref2}
          className="text-white font-[800] text-[5vw] tracking-wide z-[10] left-[35%] select-none"
        >
          Models into{" "}
          <span className="instrumentserif-italic capitalize text-[#E0AAFF]">
            Impact,
          </span>
        </h1>
        <h1
          ref={ref3}
          className="text-white font-[800] text-[5vw] z-[10] tracking-wide left-[30%] select-none"
        >
          and <span className="text-white">AI</span> into your{" "}
          <span className="instrumentserif-italic capitalize text-[#E0AAFF]">
            Advantage
          </span>
        </h1>
      </div>

      <p
        ref={paragraphRef1}
        className="text-white absolute text-[1.5vw] top-[48%] left-[20%] z-10"
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

    const animation = gsap.to(".cards-div", {
      xPercent: -168,
      ease: "none",
      scrollTrigger: {
        trigger: ".services-div",
        start: "top top",
        end: "top -100%",
        pin: true,
        scrub: 1,
      },
    });
    return () => {
      // Cleanup GSAP instance
      animation.kill();
    };
  }, []);

  return (
    <>
      <section
        ref={firstRef}
        className="bg-[#ede8f5] pt-10 h-[100vh] z-[1] sticky top-0 flex flex-col items-center justify-start rounded-t-3xl "
      >
        <ParticlesBg parentRef={firstRef} />
        <h1 className="text-[#112241] font-[800] text-[4vw] text-center select-none first-heading instrumentserif-italic">
          What we do
      </h1>
      <div className="first-section-text p-10 flex flex-col items-center justify-center w-full gap-10 h-full relative">
        <div className="first-info flex w-full h-full justify-evenly overflow-hidden">
          <div className="left flex flex-col gap-5 ">
            <div className="video bg-[#3c096c] w-[40vw] h-full rounded-3xl p-10 flex flex-col justify-between">
              <div className="brainmodel absolute right-0 bottom-[-5%] w-[20vw] h-[20vw]"><BrainModel scale={4}/></div>
              <div>
                <Link href="/generative-ai" className="bebasneue text-[4vw] text-transparent bg-clip-text bg-gradient-to-tr from-[#c77dff] to-[#e0aaff] cursor-pointer hover:underline decoration-[#7b2cbf]">Generative AI</Link>
                <p className="text-white ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum repellendus delectus et autem vel impedit error dicta eligendi dolorum quia.</p>
              </div>
              <ul className="flex flex-col gap-5 list-none">
                <li className="bg-white rounded-r-3xl max-w-max px-5 py-2 font-bold hover:pr-10 transition-smooth duration-200 hover:bg-[#e0aaff] select-none">Automated Content Generation</li>
                <li className="bg-white rounded-r-3xl max-w-max px-5 py-2 font-bold hover:pr-10 transition-smooth duration-200 hover:bg-[#e0aaff] select-none">Personalized Experiences</li>
                <li className="bg-white rounded-r-3xl max-w-max px-5 py-2 font-bold hover:pr-10 transition-smooth duration-200 hover:bg-[#e0aaff] select-none">Efficient Workflows</li>
                <li className="bg-white rounded-r-3xl max-w-max px-5 py-2 font-bold hover:pr-10 transition-smooth duration-200 hover:bg-[#e0aaff] select-none">Innovative Problem Solving</li>
              </ul>
            </div>
            
          </div>
          <div className="right flex flex-col gap-5 ">
            <div className="video w-[40vw] h-full bg-[#3c096c] rounded-3xl flex flex-col p-10 relative justify-between">
              <div className="brainmodel absolute right-[-15%] bottom-5 w-[35vw]">
              <DotLottieReact
                src="https://lottie.host/b0a2acd5-a7aa-49bc-89ce-5c66c54ca586/VfQO43rteM.json"
                loop
                autoplay
              />
              </div>
              <div>
                <Link href="/data-analytics" className="bebasneue text-[4vw] text-transparent bg-clip-text bg-gradient-to-tr from-[#c77dff] to-[#e0aaff] cursor-pointer hover:underline decoration-[#7b2cbf]">Data Analytics</Link>
                <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio suscipit nesciunt in blanditiis nulla quod ipsum officia similique tempora vero?</p>
              </div>
              <ul className="flex flex-col gap-5 list-none">
                <li className="bg-white rounded-r-3xl max-w-max px-5 py-2 font-bold hover:pr-10 transition-smooth duration-200 hover:bg-[#e0aaff] select-none">Informed Decision-Making</li>
                <li className="bg-white rounded-r-3xl max-w-max px-5 py-2 font-bold hover:pr-10 transition-smooth duration-200 hover:bg-[#e0aaff] select-none">Trend Identification</li>
                <li className="bg-white rounded-r-3xl max-w-max px-5 py-2 font-bold hover:pr-10 transition-smooth duration-200 hover:bg-[#e0aaff] select-none">Predictive Analytics</li>
                <li className="bg-white rounded-r-3xl max-w-max px-5 py-2 font-bold hover:pr-10 transition-smooth duration-200 hover:bg-[#e0aaff] select-none">Business Intelligence</li>
              </ul>
              </div>
          </div>
        </div>
      </div>
    </section>
    <section ref={serviceRef} className="bg-[#5a189a] w-full h-[200vh] overflow-hidden z-[1] rounded-t-3xl relative services-div ">
      {/* <DotBackground /> */}
      <div className="services-title flex items-center justify-center w-full cursor-pointer absolute top-20 left-1/2 transform -translate-x-1/2 overflow-hidden">
        <h1 className="font-[800] bebasneue tracking-[3px]  text-[4vw] uppercase text-white text-center">Our Services</h1>
      </div>
      <div ref={cardsDivRef} className="cards-div flex flex-col gap-10 p-10 items-start justify-center mt-[10%]">
        
        <div className="flex gap-10 cards-div-container overflow-hidden">
          <section
            className="h-[50vh] w-[35vw] bg-[#ede8f5] rounded-xl flex flex-col  cursor-pointer p-5"
          >
            <div className="grow"></div>
            <div className="pt-3 bebas text-large text-black font-medium">RLHF AND SFT</div>
          </section>
          <section
            className="h-[50vh] w-[35vw] bg-[#ede8f5] rounded-xl flex flex-col relative cursor-pointer p-5"
          >
            <div className="grow"></div>
            <div className="pt-3 bebas text-large text-black font-medium">RAG IMPLEMENTATION</div>
          </section>
          <section
            className="h-[50vh] w-[35vw] bg-[#ede8f5] rounded-xl flex flex-col relative cursor-pointer p-5"
          >
            <div className="grow "></div>
            <div className="pt-3 bebas text-large text-black font-medium">GENERATIVE AI SERVICES</div>
          </section>
          <section
            className="h-[50vh] w-[35vw] bg-[#ede8f5] rounded-xl flex flex-col relative cursor-pointer p-5"
          >
            <div className="grow"></div>
            <div className="pt-3 bebas text-large text-black font-medium">CHATBOT MAKING</div>
          </section>
          <section
            className="h-[50vh] w-[35vw] bg-[#ede8f5] rounded-xl flex flex-col relative cursor-pointer p-5"
          >
            <div className="grow"></div>
            <div className="pt-3 bebas text-large text-black font-medium">AI AGENTS IMPLEMENTATION</div>
          </section>
          <section
            className="h-[50vh] w-[35vw] bg-[#ede8f5] rounded-xl flex flex-col relative cursor-pointer p-5"
          >
            <div className="grow "></div>
            <div className="pt-3 bebas text-large text-black font-medium">ENTERPRISE BASED SECURE MODELS</div>
          </section>
          <section
            className="h-[50vh] w-[35vw] bg-[#ede8f5] rounded-xl flex flex-col relative cursor-pointer p-5"
          >
            <div className="grow "></div>
            <div className="pt-3 bebas text-large text-black font-medium">DATA ANALYTICS SERVICES</div>
          </section>
        </div>
      </div>
      <div className="flex items-center w-full justify-center absolute top-[85vh] left-45">
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
              Hire us now
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
      className="bg-[#3c096c] w-full h-screen z-[1] sticky top-0 rounded-t-3xl flex flex-col p-10 items-center  overflow-hidden bg-custom-grid bg-[length:150px_150px]"
    >
      <div className="absolute top-10 left-[-30%]">
        <img src="/gradient-vtex.png" alt="gradient" />
      </div>
      <div className="container flex flex-col items-center justify-around p-10 w-full h-full">
        <div className="top flex flex-col items-center justify-center gap-5">
          <h1 className="bebasneue font-[800] tracking-wide leading-none text-[4vw] text-white text-center spacing-[5px]">
            Leverage&nbsp;
            <span className="bebasneue font-[800] tracking-wide leading-none text-[4vw] text-transparent bg-clip-text bg-gradient-to-tr from-pink-500 to-purple-500 text-center spacing-[5px]">
              AI and Data{" "}
            </span>
            <br /> to propel your Business
          </h1>
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
        </div>
        <div className="bottom flex flex-col items-center justify-center gap-10 ">
          <p className="text-[24px] font-bold text-[#999999] tracking-wide max-w-[60vw] text-center mb-5">
            Powering innovation with the best in AI technology—our expertise is
            built on cutting-edge tools that redefine analytics and
            decision-making. These trusted solutions enable us to deliver
            precision, performance, and unparalleled insights for your business.
          </p>
          <Slider
            width="220px"
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
                  className="min-h-[100px] max-h-[100px] min-w-[300px] max-w-[300px] object-contain grayscale hover:grayscale-0 transition-all"
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
    <section className="bg-[#10002b] w-full h-[50vh] z-[1] sticky top-0  rounded-t-3xl flex flex-col p-10 items-center justify-center gap-4">
      <div className="font-bold text-5xl text-white w-[60%] text-center">
        Transform Your Business with <br />{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-tr from-pink-500 to-purple-500">
          Cutting-Edge
        </span>
        &nbsp;AI Solutions
      </div>
      <div className="font-medium text-xl text-white text-center">
        Partner with us to leverage advanced AI technologies to drive innovation
        and growth.
        <br />
        Reach out today to see how we can help you achieve your business goals.
      </div>
      <Link href="/contact">
        <Button
          radius="full"
          variant="faded"
          size="lg"
          endContent={
            <div className="rounded-full bg-gradient-to-tr from-pink-500 to-purple-500 min-h-[40px] min-w-[40px] flex justify-center items-center ">
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
