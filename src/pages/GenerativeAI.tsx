import Section from "@/components/AnalyticsGenerativeSection";
import InterestedSection from "@/components/InterestedSection";
import { useRef } from "react";

export default function Services() {
  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const services = [
    {
      title: "Generative AI Consulting",
      text: "Navigate the possibilities of generative AI with expert guidance. We assess your business needs and identify the best generative AI strategies to unlock innovation and drive growth.",
      gif: "/generative-ai/bulb-low.mp4",
      highResGif: "/generative-ai/bulb.mp4",
    },
    {
      title: "Generative AI Solutions Development",
      text: "Create tailored generative AI solutions for your business. From text generation to image creation, we design and implement applications that enhance creativity and productivity.",
      gif: "/generative-ai/laptop-low.mp4",
      highResGif: "/generative-ai/laptop.mp4",
    },
    {
      title: "Generative AI Integration",
      text: "Seamlessly incorporate generative AI into your existing systems. We ensure smooth implementation, enabling your business to harness AI-driven innovation effortlessly.",
      gif: "/generative-ai/gears-low.mp4",
      highResGif: "/generative-ai/gears.mp4",
    },
    {
      title: "AI Marketing Agent Development",
      text: "Transform your marketing efforts with AI-driven agents. Our solutions create personalized campaigns, generate content, and analyze trends to maximize your marketing ROI.",
      gif: "/generative-ai/agent-low.mp4",
      highResGif: "/generative-ai/agent.mp4",
    },
  ];

  return (
    <>
      <Section
        title="Generative AI Services"
        services={services}
        videoRefs={videoRefs}
      />
      <InterestedSection />
    </>
  );
}
