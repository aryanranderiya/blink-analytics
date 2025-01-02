import { Button } from "@nextui-org/react";
import { ArrowRight } from "lucide-react";
import { Link } from "@nextui-org/react";
import BrainModel from "@/components/BrainModel";
import { useEffect } from "react";
import gsap from "gsap";

export default function Services() {
  useEffect(() => {
    const contentDivs = document.querySelectorAll(".content .data");
    gsap.fromTo(
      contentDivs,
      { x: (index) => (index % 2 === 0 ? "-100%" : "100%"), opacity: 0 }, // Starting position based on index
      {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.3, // Staggering effect
        ease: "smooth",
      }
    );
  }, []);

  return (
    <>
      <div className="h-fit bg-[#3c096c] z-[1] sticky flex flex-col snap-y snap-mandatory overflow-hidden">
        <div className="model absolute top-[10%] right-[-15%] w-[60vw] h-[60vh]">
          <BrainModel scale={4} />
        </div>
        <div className="p-10 bg-[#240046] rounded-b-3xl pt-[150px] pb-[70px]">
          <h1 className="font-bold text-7xl text-white">
            Generative AI Services
          </h1>
          <div className="text-white text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum,
            harum.
          </div>
        </div>
        <div className="content flex flex-col gap-10 py-10">
          {[
            {
              title: "Generative AI Consulting",
              text: "Navigate the possibilities of generative AI with expert guidance. We assess your business needs and identify the best generative AI strategies to unlock innovation and drive growth.",
              icon: "../src/assets/icons/consulting.png",
            },
            {
              title: "Generative AI Solutions Development",
              text: "Create tailored generative AI solutions for your business. From text generation to image creation, we design and implement applications that enhance creativity and productivity.",
              icon: "../src/assets/icons/development.png",
            },
            {
              title: "Generative AI Integration",
              text: "Seamlessly incorporate generative AI into your existing systems. We ensure smooth implementation, enabling your business to harness AI-driven innovation effortlessly.",
              icon: "../src/assets/icons/integration.png",
            },
            {
              title: "AI Marketing Agent Development",
              text: "Transform your marketing efforts with AI-driven agents. Our solutions create personalized campaigns, generate content, and analyze trends to maximize your marketing ROI.",
              icon: "../src/assets/icons/agent.png",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`data flex items-center justify-between gap-5 bg-white max-w-[70vw] p-10 ${
                index % 2 === 0
                  ? "self-start rounded-r-[150px]"
                  : "self-end rounded-l-[150px] flex-row-reverse text-right"
              }`}
            >
              <div className="flex flex-col">
                <h1 className="text-[2.5vw] text-[#5a189a] font-bold tracking-wide">
                  {item.title}
                </h1>
                <p className="text-[20px]">{item.text}</p>
              </div>
              <div className="icon">
                <img src={item.icon} alt="" width={200} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-[30vh] sticky bg-[#7b2cbf] z-[1] rounded-b-3xl p-10 flex justify-center items-center flex-col gap-3">
        <div className="text-4xl text-white">
          Interested in working with us?
        </div>
        <Link href="/contact">
          <Button
            radius="full"
            variant="faded"
            size="lg"
            endContent={
              <div className="rounded-full bg-[#7b2cbf] min-h-[40px] min-w-[40px] flex justify-center items-center ">
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
