"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const pathname = useLocation();

  const resetAnimations = useCallback(() => {
    setIsLoaded(false);
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    if (cardsRef.current) {
      gsap.set(cardsRef.current.children, { x: "100%", opacity: 0 });
    }
    if (statsRef.current) {
      gsap.set(statsRef.current.children, { y: "50px", opacity: 0 });
    }
  }, []);

  useEffect(() => {
    resetAnimations();
    const animationDelay = isInitialLoad ? 1000 : 0;

    const timer = setTimeout(() => {
      setIsLoaded(true);
      setIsInitialLoad(false);
    }, animationDelay);

    return () => {
      clearTimeout(timer);
      resetAnimations();
    };
  }, [pathname, resetAnimations, isInitialLoad]);

  useEffect(() => {
    if (isLoaded && cardsRef.current && statsRef.current) {
      // Animate cards from right to left
      gsap.to(cardsRef.current.children, {
        x: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
        },
      });

      // Animate stats from bottom to top
      gsap.to(statsRef.current.children, {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isLoaded]);

  const headingWords = [
    "We",
    "deliver",
    {
      text: "Intelligent",
      className:
        "text-transparent bg-clip-text bg-gradient-to-tr from-pink-500 to-purple-500",
    },
    ",",
    {
      text: "Secure",
      className:
        "text-transparent bg-clip-text bg-gradient-to-tr from-pink-500 to-purple-500",
    },
    ",",
    "and",
    {
      text: "Custom",
      className:
        "text-transparent bg-clip-text bg-gradient-to-tr from-pink-500 to-purple-500",
    },
    "AI",
    "solutions",
    "that",
    "empower",
    "businesses",
    "to",
    "innovate,",
    "thrive,",
    "and",
    "achieve",
    "their",
    "full",
    "potential.",
  ];

  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="main bg-black min-h-screen z-[1] flex flex-col md:flex-row items-center justify-between overflow-hidden relative">
      <DotPattern
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent)] absolute inset-0"
        )}
      />
      <div className="left sm:p-10 p-5 flex-[3] flex flex-col self-start !pt-[100px]">
        <h1 className="sm:text-2xl text-3xl text-[#9d4edd] font-semibold border-l-5 border-l-[#9d4edd] pl-2">
          About Us
        </h1>
        <h1 className="text-4xl md:text-6xl font-bold tracking-wide leading-tight text-white z-[10] mt-4">
          <div className="flex flex-wrap">
            {headingWords.map((word, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={headingVariants}
                initial="hidden"
                animate="visible"
                className={cn(
                  "mr-2 mb-2 inline-block",
                  typeof word === "string" ? "" : word.className
                )}
              >
                {typeof word === "string" ? word : word.text}
              </motion.span>
            ))}
          </div>
        </h1>
        <div
          ref={statsRef}
          className="info-grid grid grid-cols-2 sm:gap-5 gap-2 mt-10"
        >
          {[
            {
              number: "2020",
              info: "Established in Year",
            },
            {
              number: "100+",
              info: "Happy Clients Served",
            },
            {
              number: "70%",
              info: "Retention Rate of Customers",
            },
            {
              number: "30%",
              info: "Reduced Manual Work using AI",
            },
            {
              number: "25%",
              info: "Increased Efficiency in Client's Businesses",
            },
          ].map((item, index) => (
            <div
              className={`info sm:p-5 p-2 rounded-md flex flex-col items-start gap-[10px] sm:w-full w-fit ${
                index == 4 ? "col-span-2" : ""
              }`}
              key={index}
            >
              <span className="w-[50px] h-[4px] bg-purple-500" />
              <h2 className="number text-white text-3xl font-bold leading-none">
                {item.number}
              </h2>
              <p className="desc text-white text-xl md:text-2xl leading-tight">
                {item.info}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="right bg-transparent min-h-screen p-10 md:rounded-l-[50px] z-[10] flex-[2] flex flex-col gap-5">
        <div ref={cardsRef} className="content flex flex-col gap-5">
          {[
            {
              title: "Our Mission",
              desc: "Our mission is to empower businesses with cutting-edge, custom-tailored AI solutions that drive innovation, enhance efficiency, and deliver measurable results. We strive to make advanced AI accessible, secure, and adaptable to meet the unique needs of every client.",
              icon: "https://lottie.host/31a0f588-04d7-4188-8849-5ea3138cfa65/qkYteFyBEh.lottie",
            },
            {
              title: "Our Vision",
              desc: "We envision a future where businesses of all sizes harness the transformative power of AI to unlock their full potential. By blending intelligence, security, and customization, we aim to be the leading force behind AI-driven success stories worldwide.",
              icon: "https://lottie.host/44a4cd76-9b6e-4dbf-ae1b-a38fbef24524/IwfLgMm2HL.lottie",
            },
            {
              title: "Our Values",
              desc: "We are guided by innovation, integrity, and customer-centricity. Our commitment to delivering secure, high-quality AI solutions is rooted in a passion for excellence, a drive to build lasting partnerships, and a responsibility to create impactful technologies for a better future.",
              icon: "https://lottie.host/4f341394-475a-4aee-8bfe-1664cb23ba17/elKHeqpwIp.lottie",
            },
          ].map((item, index) => (
            <div
              className={`flex flex-col text-justify group cursor-pointer gap-5 border-2 rounded-l-[40px] relative border-purple-500 p-5 hover:border-[#c77dff] transition-colors hover:bg-[#36096c]`}
              key={index}
            >
              <div className="flex items-center gap-5 ">
                <div className="circle bg-purple-500 rounded-full w-[70px] h-[70px] flex items-center justify-center">
                  <DotLottieReact
                    src={item.icon}
                    loop
                    autoplay
                    style={{ width: "50px", height: "50px" }}
                  />
                </div>
                <h2 className="text-3xl md:text-5xl text-white font-bold tracking-wide">
                  {item.title}
                </h2>
              </div>
              <p className="text-white text-base md:text-lg">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
