import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import DotPattern from "./ui/dot-pattern";
import { cn } from "@/lib/utils";

interface ServiceType {
  text: string;
  gif: string;
  title: string;
  isGif?: boolean;
}

interface SectionType {
  title: string;
  services: ServiceType[];
  subtitle?: string;
  videoRefs: any;
}

export default function Section({
  title,
  services,
  videoRefs,
  subtitle = " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, harum.",
}: SectionType) {
  useEffect(() => {
    const contentDivs = document.querySelectorAll(".content .data");

    gsap.registerPlugin(ScrollTrigger);

    contentDivs.forEach((div, index) => {
      gsap.fromTo(
        div,
        {
          x: index % 2 === 0 ? "-100%" : "100%",
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.3,
          scrollTrigger: {
            trigger: div,
            start: "center bottom",
            end: "bottom center",
            scrub: index === 0 ? false : true,
          },
          ease: "power3.out",
        }
      );
    });

    // Handle video autoplay when in viewport
    const handleVideoPlay = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const video = entry.target as HTMLVideoElement;
        if (entry.isIntersecting) video.play();
        else video.pause();
      });
    };

    const observer = new IntersectionObserver(handleVideoPlay, {
      threshold: 0.5,
    });

    videoRefs.current.forEach((video: Element) => {
      if (video) observer.observe(video);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="h-fit bg-black z-[1] sticky flex flex-col snap-y snap-mandatory overflow-hidden">
      <div className="p-10 bg-gradient-to-r from-[#240046] to-[#7B2CBF] rounded-b-3xl sm:pt-[150px] pt-[90px] sm:pb-[70px] pb-[30px]">
        <h1 className="font-bold sm:text-7xl text-5xl text-white">{title}</h1>
        <div className="text-lg text-foreground-400">{subtitle}</div>
      </div>
      <div className="content flex flex-col gap-10 py-10 relative">
        <DotPattern
          className={cn(
            "[mask-image:linear-gradient(to_right,white,#ffffff60,transparent)] absolute inset-0"
          )}
        />

        {services.map((item, index) => (
          <div
            key={index}
            className={`data opacity-0 flex flex-col sm:flex-row items-center justify-evenly gap-5 p-10 ${
              index % 2 === 0 ? "" : "flex-row-reverse"
            }`}
          >
            <div className="icon">
              {item.isGif ? (
                <img
                  width="600"
                  height="auto"
                  ref={(el) => {
                    if (el) videoRefs.current[index] = el;
                  }}
                  src={item.gif}
                />
              ) : (
                <video
                  ref={(el) => {
                    if (el) videoRefs.current[index] = el;
                  }}
                  width="600"
                  height="auto"
                  loop
                  muted
                  playsInline
                  className="rounded-md shadow-lg"
                >
                  <source src={item.gif} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
            <div className="flex flex-col gap-5">
              <span className="bg-purple-500 w-[50px] h-[4px]" />
              <h1 className="text-2xl text-purple-500 font-bold tracking-wide">
                {item.title}
              </h1>
              <p className="text-lg sm:max-w-[45vw] text-white">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
