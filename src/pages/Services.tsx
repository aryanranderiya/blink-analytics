import InterestedSection from "@/components/InterestedSection";
import DotPattern from "@/components/ui/dot-pattern";
import { Button, Link } from "@nextui-org/react";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ScrollProgress from "@/components/ui/scroll-progress";
import { cn } from "@/lib/utils";
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
      { threshold: window.innerWidth > 640 ? 0.3 : 0.9}
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
          className={`sm:text-5xl text-4xl bebasneue text-[400] text-[#9d4edd] w-full ${
            reverse ? "sm:text-right" : "sm:text-left"
          } `}
        >
          {title}
        </div>
        <div className={`sm:text-lg text-[10px] ${reverse ? "sm:text-right" : "sm:text-left"}`}>
          {description}
        </div>
        <Link href="/contact">
          <Button
            className="w-fit bg-gradient-to-r from-pink-700 to-[#7B2CBF] text-white"
            radius="full"
            size="lg"
            endContent={<ArrowUpRight />}
          >
            Call to Action
          </Button>
        </Link>
      </div>
      <div className="sm:min-w-[40vw] sm:max-w-[40vw] rounded-3xl">
      <video
        width={window.innerWidth > 640 ? '600' : '800'}
        height="auto"
        loop
        muted
        autoPlay
        playsInline
      >
        <source src={image} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>
    </div>
    </>
  );
}
export default function Services() {
  const services = [
    {
      title: "RLHF and SFT",
      description:
        "At Blink Analytics, we specialize in integrating Reinforcement Learning with Human Feedback (RLHF) and Supervised Fine-Tuning (SFT) to enhance AI model performance. RLHF is a cutting-edge technique that allows models to learn from human feedback, improving the system’s ability to understand complex, context-driven tasks. SFT focuses on fine-tuning pre-trained models with domain-specific datasets, enabling them to deliver more accurate and reliable results. These techniques are essential for creating personalized AI systems that align with business needs, ensuring smarter decision-making and seamless user experiences. Whether you are looking to refine your model’s performance or build sophisticated AI solutions, Blink Analytics can help you achieve exceptional outcomes.",
      image: "/RLHF.mp4",
      reverse: false,
    },
    {
      title: "RAG Implementation",
      description:
        "Retrieval-Augmented Generation (RAG) is a powerful technique that Blink Analytics implements to enhance the quality and relevance of AI-generated content. By combining the capabilities of pre-trained models with a dynamic retrieval system, RAG allows AI to access real-time knowledge bases and databases during inference, ensuring that the generated content is contextually accurate and up-to-date. This is particularly valuable for applications where timely and relevant information is crucial, such as in customer support, content generation, and decision-making systems. At Blink Analytics, we offer RAG implementation services that help businesses achieve better, more reliable AI outputs while reducing the risks of outdated or irrelevant information.",
      image: "/RAG-updated.mp4",
      reverse: true,
    },
    {
      title: "Generative AI Services",
      description:
        "Blink Analytics offers cutting-edge Generative AI services, which enable businesses to create highly personalized and innovative content at scale. Generative AI leverages powerful machine learning algorithms to understand and mimic the structure of existing data, whether it’s text, images, or audio. This allows for the creation of new, realistic content that fits the specific needs of your business. From generating dynamic marketing copy to designing unique visuals or audio clips, our generative models ensure that you get high-quality, tailored outputs that drive creativity, enhance productivity, and reduce manual work. Let Blink Analytics help you unlock the potential of generative AI for your business needs today! Contact Us now!",
      image: "/RAG.mp4",
      reverse: false,
    },
    {
      title: "Chatbot Making",
      description:
        "At Blink Analytics, we understand the power of intelligent chatbots in transforming customer experiences. Our chatbot-making service focuses on developing advanced, conversational AI systems that can handle complex customer interactions seamlessly. By leveraging natural language processing (NLP) and machine learning, we create chatbots that understand user intent, context, and can provide accurate, real-time responses. Whether it’s for customer support, lead generation, or automating routine tasks, our chatbots are designed to enhance engagement, reduce operational costs, and improve customer satisfaction. Blink Analytics ensures that every chatbot we develop is tailored to your unique business goals and delivers an exceptional user experience every time.",
      image: "/RAG.mp4",
      reverse: true,
    },
    {
      title: "AI Agents Implementation",
      description:
        "AI agents are autonomous, intelligent systems that can perform specific tasks and make decisions on behalf of your business. At Blink Analytics, we specialize in implementing AI agents that can learn from user interactions, improve over time, and execute complex tasks with minimal human intervention. Whether it's for optimizing business processes, enhancing decision-making, or automating customer service, our AI agents are designed to integrate seamlessly with your existing systems. With continuous learning and adaptability, our AI agents help businesses boost productivity, reduce manual effort, and streamline operations. Let Blink Analytics help you create a more efficient, automated, and intelligent environment with AI agents tailored to your needs.",
      image: "/RAG.mp4",
      reverse: false,
    },
    {
      title: "Enterprise-Based Secure Models",
      description:
        "At Blink Analytics, we understand the unique challenges large enterprises face when it comes to implementing AI systems. Our enterprise-based secure models are specifically designed to ensure the highest level of security, privacy, and compliance. We implement robust encryption, secure data storage, and adherence to industry regulations to protect sensitive business information while still leveraging the power of AI. Whether you're looking to deploy AI across multiple departments or need a highly secure solution for confidential projects, Blink Analytics offers enterprise-grade models that prioritize both performance and security. Let us help you harness the full potential of AI while safeguarding your data and ensuring compliance with industry standards.",
      image: "/RAG.mp4",
      reverse: true,
    },
  ];
  return (
    <>
      <div className="h-fit bg-black z-[1] sticky flex flex-col snap-y snap-mandatory overflow-hidden pb-[150px]">
      <div className="p-10 bg-gradient-to-r from-[#240046] to-[#7B2CBF] rounded-b-3xl sm:pt-[150px] pt-[90px] sm:pb-[70px] pb-[30px] z-[10]">
        <h1 className="font-bold sm:text-7xl text-3xl text-white">Custom AI Solutions for Every Need</h1>
        <div className="sm:text-lg text-sm text-foreground-400 max-w-[80vw]">Explore our range of AI-driven services designed to transform your business operations. From fine-tuning models to implementing secure enterprise solutions, we deliver cutting-edge technologies tailored to your goals.</div>
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
            image={service.image}
            reverse={service.reverse}
          />
        ))}
      </div>
      <InterestedSection />
    </>
  );
}
