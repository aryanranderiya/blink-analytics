import { Button } from "@nextui-org/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "@nextui-org/react";
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
      { threshold: 0.3 }
    );
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);
  return (
    <div
      ref={cardRef}
      className={`h-[55vh] w-screen flex justify-between gap-5 transition-all p-10 ${
        reverse ? "flex-row-reverse" : ""
      } ${isVisible ? "opacity-100" : "opacity-0 translate-y-10"}`}
    >
      <div
        className={`w-full flex flex-col text-white h-full justify-center  ${
          reverse ? "items-end" : "items-start"
        } gap-4 `}
      >
        <div
          className={`text-3xl bebasneue text-[400] text-[#112241] w-full ${reverse ? "text-right" : "text-left"} `}
        >
          {title}
        </div>
        <div className={`text-lg  ${reverse ? "text-right" : "text-left"}`}>
          {description}
        </div>
        <Link href="/contact">
        <Button
          className="w-fit"
          radius="full"
          size="lg"
          endContent={<ArrowUpRight />}
        >
          Call to Action
        </Button>
        </Link>
      </div>
      <div className="min-w-[40vw] max-w-[40vw] rounded-3xl">
        <img
          src={image}
          alt="Service"
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>
    </div>
  );
}
export default function Services() {
  const services = [
    {
      title: "RLHF and SFT",
      description:
        "At Blink Analytics, we specialize in integrating Reinforcement Learning with Human Feedback (RLHF) and Supervised Fine-Tuning (SFT) to enhance AI model performance. RLHF is a cutting-edge technique that allows models to learn from human feedback, improving the system’s ability to understand complex, context-driven tasks. SFT focuses on fine-tuning pre-trained models with domain-specific datasets, enabling them to deliver more accurate and reliable results. These techniques are essential for creating personalized AI systems that align with business needs, ensuring smarter decision-making and seamless user experiences. Whether you are looking to refine your model’s performance or build sophisticated AI solutions, Blink Analytics can help you achieve exceptional outcomes.",
      image: "https://placehold.co/600x400",
      reverse: false,
    },
    {
      title: "RAG Implementation",
      description:
        "Retrieval-Augmented Generation (RAG) is a powerful technique that Blink Analytics implements to enhance the quality and relevance of AI-generated content. By combining the capabilities of pre-trained models with a dynamic retrieval system, RAG allows AI to access real-time knowledge bases and databases during inference, ensuring that the generated content is contextually accurate and up-to-date. This is particularly valuable for applications where timely and relevant information is crucial, such as in customer support, content generation, and decision-making systems. At Blink Analytics, we offer RAG implementation services that help businesses achieve better, more reliable AI outputs while reducing the risks of outdated or irrelevant information.",
      image: "https://placehold.co/600x400",
      reverse: true,
    },
    {
      title: "Generative AI Services",
      description:
        "Blink Analytics offers cutting-edge Generative AI services, which enable businesses to create highly personalized and innovative content at scale. Generative AI leverages powerful machine learning algorithms to understand and mimic the structure of existing data, whether it’s text, images, or audio. This allows for the creation of new, realistic content that fits the specific needs of your business. From generating dynamic marketing copy to designing unique visuals or audio clips, our generative models ensure that you get high-quality, tailored outputs that drive creativity, enhance productivity, and reduce manual work. Let Blink Analytics help you unlock the potential of generative AI for your business needs today! Contact Us now!",
      image: "https://placehold.co/600x400",
      reverse: false,
    },
    {
      title: "Chatbot Making",
      description:
        "At Blink Analytics, we understand the power of intelligent chatbots in transforming customer experiences. Our chatbot-making service focuses on developing advanced, conversational AI systems that can handle complex customer interactions seamlessly. By leveraging natural language processing (NLP) and machine learning, we create chatbots that understand user intent, context, and can provide accurate, real-time responses. Whether it’s for customer support, lead generation, or automating routine tasks, our chatbots are designed to enhance engagement, reduce operational costs, and improve customer satisfaction. Blink Analytics ensures that every chatbot we develop is tailored to your unique business goals and delivers an exceptional user experience every time.",
      image: "https://placehold.co/600x400",
      reverse: true,
    },
    {
      title: "AI Agents Implementation",
      description:
        "AI agents are autonomous, intelligent systems that can perform specific tasks and make decisions on behalf of your business. At Blink Analytics, we specialize in implementing AI agents that can learn from user interactions, improve over time, and execute complex tasks with minimal human intervention. Whether it's for optimizing business processes, enhancing decision-making, or automating customer service, our AI agents are designed to integrate seamlessly with your existing systems. With continuous learning and adaptability, our AI agents help businesses boost productivity, reduce manual effort, and streamline operations. Let Blink Analytics help you create a more efficient, automated, and intelligent environment with AI agents tailored to your needs.",
      image: "https://placehold.co/600x400",
      reverse: false,
    },
    {
      title: "Enterprise-Based Secure Models",
      description:
        "At Blink Analytics, we understand the unique challenges large enterprises face when it comes to implementing AI systems. Our enterprise-based secure models are specifically designed to ensure the highest level of security, privacy, and compliance. We implement robust encryption, secure data storage, and adherence to industry regulations to protect sensitive business information while still leveraging the power of AI. Whether you're looking to deploy AI across multiple departments or need a highly secure solution for confidential projects, Blink Analytics offers enterprise-grade models that prioritize both performance and security. Let us help you harness the full potential of AI while safeguarding your data and ensuring compliance with industry standards.",
      image: "https://placehold.co/600x400",
      reverse: true,
    },
  ];
  return (
    <>
      <div className="h-fit bg-[#7091e6] z-[1] sticky flex flex-col snap-y snap-mandatory overflow-hidden">
        <div className="p-10 bg-[#3D52A0] rounded-b-3xl pt-[150px] pb-[70px]">
          <h1 className="font-bold text-7xl text-white">Our Services</h1>
          <div className="text-white text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum,
            harum.
          </div>
        </div>
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
      <div className="h-[30vh] sticky bg-[#3d52a0] z-[1] rounded-b-3xl p-10 flex justify-center items-center flex-col gap-3">
        <div className="text-4xl text-white">
          Interested in working with us?
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
        >
          Get in Touch
        </Button>
        </Link>
      </div>
    </>
  );
}