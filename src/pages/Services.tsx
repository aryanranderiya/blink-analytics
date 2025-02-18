import InterestedSection from "@/components/InterestedSection";
import DotPattern from "@/components/ui/dot-pattern";
import { Button } from "@nextui-org/react";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ScrollProgress from "@/components/ui/scroll-progress";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

function ServiceCard({
  title,
  description,
  image,
  reverse,
}: {
  title: string;
  description: string;
  image: string;
  reverse: boolean;
}) {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: window.innerWidth > 640 ? 0.3 : 0.9 }
    );
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);
  return (
    <>
      <ScrollProgress />
      <div
        ref={cardRef}
        className={`h-[55vh] w-screen sm:flex sm:flex-row flex-col-reverse justify-between z-[10] gap-5 transition-all p-10 ${
          reverse ? "sm:flex-row-reverse" : ""
        } ${isVisible ? "opacity-100" : "opacity-0 translate-y-10"}`}
      >
        <div
          className={`w-full flex flex-col text-white h-full justify-center  ${
            reverse ? "sm:items-end" : "sm:items-start"
          } gap-4 `}
        >
          <div
            className={`sm:text-5xl text-4xl bebasneue text-[400] text-[#9d4edd] w-full 2K:text-[3vw] ${
              reverse ? "sm:text-right" : "sm:text-left"
            } `}
          >
            {title}
          </div>
          <div
            className={`sm:text-[1.1vw] text-[10px]  ${
              reverse ? "sm:text-right" : "sm:text-left"
            }`}
          >
            {description}
          </div>
          <Button
            as={Link}
            to="/contact"
            type="button"
            className="w-fit max-h-[50px] bg-gradient-to-r from-pink-700 to-[#7B2CBF] text-white"
            radius="full"
            size='lg'
            endContent={<ArrowUpRight />}
          >
            Connect with Us
          </Button>
        </div>
        <div className="sm:min-w-[40vw] sm:max-w-[40vw]  flex justify-center align-center">
          <video
            
            width={window.innerWidth > 640 ? (window.innerWidth > 2000 ? "800" : "600") : "800"}
            height="auto"
            loop
            muted
            autoPlay
            playsInline
            className="sm:rounded-[50px] rounded-[10px] 2K:rounded-[150px]"
          >
            <source src={image} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
}

export const services = [
  {
    title: "Generative AI Services",
    description:
      "Blink Analytics delivers advanced Generative AI services, empowering businesses to create personalized content at scale. Our AI generates high-quality text, images, and audio, enhancing creativity, productivity, and efficiency. From marketing copy to unique visuals, we help streamline content creation. Unlock the power of Generative AI with Blink Analytics today!",
    image: "/RAG.mp4",
    reverse: false,
    bgColor: "bg-black",
    text: "GENERATIVE AI SERVICES",
    videoSrc: "/services/genai.mp4",
  },
  {
    title: "RLHF and SFT",
    description:
      "Blink Analytics enhances AI performance with Reinforcement Learning with Human Feedback (RLHF) and Supervised Fine-Tuning (SFT). RLHF refines models using human input, improving context understanding. SFT fine-tunes pre-trained models with domain-specific data for accuracy. These techniques ensure smarter AI solutions, better decision-making, and seamless user experiences tailored to business needs.",
    image: "/RLHF.mp4",
    reverse: true,
    bgColor: "bg-black",
    text: "RLHF AND SFT",
    videoSrc: "/RLHF.mp4",
  },
  {
    title: "RAG Implementation",
    description:
      "Blink Analytics utilizes Retrieval-Augmented Generation (RAG) to enhance AI content quality and relevance. RAG integrates pre-trained models with real-time data retrieval, ensuring accurate, up-to-date outputs. Ideal for customer support, content creation, and decision-making, our RAG solutions help businesses achieve reliable AI results while minimizing outdated or irrelevant information risks.",
    image: "/RAG-updated.mp4",
    reverse: false,
    bgColor: "bg-black",
    text: "RAG IMPLEMENTATION",
    videoSrc: "/services/rag.mp4",
  },
  
  {
    title: "Chatbot Making",
    description:
      "Blink Analytics builds intelligent chatbots to transform customer experiences. Using NLP and machine learning, our chatbots understand intent, context, and provide real-time responses. Ideal for support, lead generation, and automation, they enhance engagement, reduce costs, and improve satisfaction. Each chatbot is tailored to business goals for an exceptional user experience.",
    image: "/RAG.mp4",
    reverse: true,
    bgColor: "bg-black",
    text: "CHATBOT MAKING",
    videoSrc: "/services/chatbots.mp4",
  },
  {
    title: "AI Agents Implementation",
    description:
      "Blink Analytics develops AI agents that autonomously perform tasks and make decisions. These intelligent systems learn from interactions, improve over time, and integrate seamlessly into business processes. Ideal for automation, decision-making, and customer service, our AI agents enhance productivity, reduce manual effort, and streamline operations for a smarter, efficient future.",
    image: "/RAG.mp4",
    reverse: false,
    bgColor: "bg-black",
    text: "AI AGENTS IMPLEMENTATION",
    videoSrc: "/services/ai_agents.mp4",
  },
  {
    title: "Enterprise-Based Secure Models",
    description:
      "Blink Analytics provides secure, enterprise-grade AI models tailored for large businesses. We ensure top-tier security, privacy, and compliance through encryption, secure storage, and regulatory adherence. Whether deploying AI across departments or handling confidential projects, our solutions protect sensitive data while delivering powerful, scalable AI performance for your enterprise needs.",
    image: "/RAG.mp4",
    reverse: true,
    bgColor: "bg-black",
    text: "ENTERPRISE BASED SECURE MODELS",
    videoSrc: "/services/enterprise_based2.mp4",
  },
  {
    title: "Data Analytics Services",
    description:
      "Blink Analytics offers comprehensive Data Analytics services to unlock valuable insights. We specialize in data processing, visualization, and predictive analytics, enabling data-driven decisions. Using AI-driven techniques, we analyze complex datasets to deliver actionable intelligence. From real-time analytics to trend forecasting, our solutions help businesses optimize strategies and drive success.",
    image: "/services/data_analytics1.mp4",
    reverse: false,
    bgColor: "bg-black",
    text: "DATA ANALYTICS SERVICES",
    videoSrc: "/services/data_analytics1.mp4",
  },
];

export default function Services() {
  return (
    <>
      <div className="h-fit bg-black z-[1] sticky flex flex-col snap-y snap-mandatory overflow-hidden pb-[150px]">
        <div className="p-10 bg-gradient-to-r from-[#240046] to-[#7B2CBF] rounded-b-3xl sm:pt-[150px] pt-[90px] sm:pb-[70px] pb-[30px] z-[10]">
          <h1 className="font-bold sm:text-7xl text-3xl text-white">
            Custom AI Solutions for Every Need
          </h1>
          <div className="sm:text-lg text-sm text-foreground-400 max-w-[80vw] 2K:text-[1.5vw] 2K:leading-[50px]">
            Explore our range of AI-driven services designed to transform your
            business operations. From fine-tuning models to implementing secure
            enterprise solutions, we deliver cutting-edge technologies tailored
            to your goals.
          </div>
        </div>
        <DotPattern
          className={cn(
            "[mask-image:linear-gradient(to_right,white,#ffffff60,transparent)] absolute inset-0"
          )}
        />
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            image={service.videoSrc}
            reverse={service.reverse}
          />
        ))}
      </div>
      <InterestedSection />
    </>
  );
}
