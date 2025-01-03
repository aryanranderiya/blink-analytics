import { Button } from "@nextui-org/react";
import { ArrowRight } from "lucide-react";
import { Link } from "@nextui-org/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Services() {
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  useEffect(() => {
    const contentDivs = document.querySelectorAll(".content .data");
    gsap.fromTo(
      contentDivs,
      { x: (index) => (index % 2 === 0 ? "-100%" : "100%"), opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
      }
    );

    // Handle video autoplay when in viewport
    const handleVideoPlay = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const video = entry.target as HTMLVideoElement;
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleVideoPlay, {
      threshold: 0.5, // Video starts/stops at 50% visibility
    });

    videoRefs.current.forEach((video) => {
      if (video) {
        observer.observe(video);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="h-fit bg-black z-[1] sticky flex flex-col snap-y snap-mandatory overflow-hidden relative">
        <div className="p-10 bg-[#240046] rounded-b-3xl pt-[150px] pb-[70px]">
          <h1 className="font-bold text-7xl text-white">Generative AI Services</h1>
          <div className="text-white text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, harum.
          </div>
        </div>
        <div className="content flex flex-col gap-10 py-10">
          {[
            {
              title: "Generative AI Consulting",
              text: "Navigate the possibilities of generative AI with expert guidance. We assess your business needs and identify the best generative AI strategies to unlock innovation and drive growth.",
              gif: "../src/assets/icons/bulb.mp4",
            },
            {
              title: "Generative AI Solutions Development",
              text: "Create tailored generative AI solutions for your business. From text generation to image creation, we design and implement applications that enhance creativity and productivity.",
              gif: "../src/assets/icons/laptop.mp4",
            },
            {
              title: "Generative AI Integration",
              text: "Seamlessly incorporate generative AI into your existing systems. We ensure smooth implementation, enabling your business to harness AI-driven innovation effortlessly.",
              gif: "../src/assets/icons/gears.mp4",
            },
            {
              title: "AI Marketing Agent Development",
              text: "Transform your marketing efforts with AI-driven agents. Our solutions create personalized campaigns, generate content, and analyze trends to maximize your marketing ROI.",
              gif: "../src/assets/icons/agent.mp4",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`data genai-data flex items-center justify-evenly gap-5 p-10 ${
                index % 2 === 0 ? "" : "flex-row-reverse"
              } cursor-pointer`}
            >
              <div className="icon">
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
              </div>
              <div className="flex flex-col gap-5">
                <span className="bg-purple-500 w-[50px] h-[4px]"></span>
                <h1 className="text-[2.5vw] text-purple-500 font-bold tracking-wide">
                  {item.title}
                </h1>
                <p className="text-[20px] max-w-[45vw] text-white">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-[30vh] sticky bg-[#7b2cbf] z-[1] rounded-b-3xl p-10 flex justify-center items-center flex-col gap-3">
        <div className="text-4xl text-white">Interested in working with us?</div>
        <Link href="/contact">
          <Button
            radius="full"
            variant="faded"
            size="lg"
            endContent={
              <div className="rounded-full bg-[#7b2cbf] min-h-[40px] min-w-[40px] flex justify-center items-center">
                <ArrowRight color="white" />
              </div>
            }
          >
            Get in Touch
          </Button>
        </Link>
      </div>
    </>
  );
}
