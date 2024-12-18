import { Button } from "@nextui-org/react";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ServiceCard({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div className="flex flex-col items-center justify-start gap-4 min-w-[35vw] max-w-[35vw]">
      <img
        src={image}
        alt="Service"
        className="w-full h-[250px] object-cover rounded-3xl"
      />
      <h2 className="text-4xl font-bold text-[#112241] text-center">{title}</h2>
      <p className="text-lg text-[#112241] text-center">{description}</p>
    </div>
  );
}

export default function Services() {
  useEffect(() => {
    const animation = gsap.to(".serviceCardDiv", {
      xPercent: -140, // Adjust based on number of services
      ease: "none",
      scrollTrigger: {
        trigger: ".serviceCardContainer",
        start: "top top",
        end: "top -50%", // Adjust scroll distance
        scrub: 1,
        pin: true,
      },
    });

    return () => {
      // Cleanup GSAP instance
      animation.kill();
    };
  }, []);

  const services = [
    {
      title: "RLHF and SFT",
      description:
        "At Blink Analytics, we specialize in integrating Reinforcement Learning with Human Feedback (RLHF) and Supervised Fine-Tuning (SFT) to enhance AI model performance. RLHF is a cutting-edge technique that allows models to learn from human feedback, improving the system’s ability to understand complex, context-driven tasks. SFT focuses on fine-tuning pre-trained models with domain-specific datasets, enabling them to deliver more accurate and reliable results.",
      image: "https://placehold.co/600x400",
    },
    {
      title: "RAG Implementation",
      description:
        "Retrieval-Augmented Generation (RAG) is a powerful technique that Blink Analytics implements to enhance the quality and relevance of AI-generated content. By combining the capabilities of pre-trained models with a dynamic retrieval system, RAG allows AI to access real-time knowledge bases and databases during inference, ensuring that the generated content is contextually accurate and up-to-date. At Blink Analytics, we offer RAG implementation services that help businesses achieve better, more reliable AI outputs while reducing the risks of outdated or irrelevant information.",
      image: "https://placehold.co/600x400",
    },
    {
      title: "Generative AI Services",
      description:
        "Blink Analytics offers cutting-edge Generative AI services, which enable businesses to create highly personalized and innovative content at scale. Generative AI leverages powerful machine learning algorithms to understand and mimic the structure of existing data, whether it’s text, images, or audio. This allows for the creation of new, realistic content that fits the specific needs of your business. From generating dynamic marketing copy to designing unique visuals or audio clips, our generative models ensure that you get high-quality, tailored outputs that drive creativity, enhance productivity, and reduce manual work.",
      image: "https://placehold.co/600x400",
    },
    {
      title: "Chatbot Making",
      description:
        "At Blink Analytics, we understand the power of intelligent chatbots in transforming customer experiences. Our chatbot-making service focuses on developing advanced, conversational AI systems that can handle complex customer interactions seamlessly. By leveraging natural language processing (NLP) and machine learning, we create chatbots that understand user intent, context, and can provide accurate, real-time responses. Blink Analytics ensures that every chatbot we develop is tailored to your unique business goals and delivers an exceptional user experience every time.",
      image: "https://placehold.co/600x400",
    },
    {
      title: "AI Agents Implementation",
      description:
        "AI agents are autonomous, intelligent systems that can perform specific tasks and make decisions on behalf of your business. At Blink Analytics, we specialize in implementing AI agents that can learn from user interactions, improve over time, and execute complex tasks with minimal human intervention. Whether it's for optimizing business processes, enhancing decision-making, or automating customer service, our AI agents are designed to integrate seamlessly with your existing systems. With continuous learning and adaptability, our AI agents help businesses boost productivity, reduce manual effort, and streamline operations.",
      image: "https://placehold.co/600x400",
    },
    {
      title: "Enterprise-Based Secure Models",
      description:
        "At Blink Analytics, we understand the unique challenges large enterprises face when it comes to implementing AI systems. Our enterprise-based secure models are specifically designed to ensure the highest level of security, privacy, and compliance. We implement robust encryption, secure data storage, and adherence to industry regulations to protect sensitive business information while still leveraging the power of AI. Whether you're looking to deploy AI across multiple departments or need a highly secure solution for confidential projects, Blink Analytics offers enterprise-grade models that prioritize both performance and security.",
      image: "https://placehold.co/600x400",
    },
  ];

  return (
    <div className="bg-[#7091e6]">
      <div className="h-fit bg-[#3d52a0] z-[1] sticky flex flex-col snap-y ">
        <div className="p-10 bg-[#112241] rounded-b-3xl pt-[150px] pb-[70px]">
          <h1 className="font-bold text-7xl text-white">Our Services</h1>
          <div className="text-white text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum,
            harum.
          </div>
        </div>
        
      </div>
      <div className="h-[30vh] sticky bg-[#3d52a0] z-[1] rounded-b-3xl p-10 flex justify-center items-center flex-col gap-3">
        <div className="text-4xl text-white">Interested in working with us?</div>
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
      </div>
      <div className="serviceCardContainer relative  overflow-hidden h-[100vh] bg-[#7091e6] p-10">
          <div className="serviceCardDiv flex gap-10">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
              />
            ))}
          </div>
        </div>
    </div>
  );
}
