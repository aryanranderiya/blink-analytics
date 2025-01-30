import Section from "@/components/AnalyticsGenerativeSection";
import InterestedSection from "@/components/InterestedSection";
import ScrollProgress from "@/components/ui/scroll-progress";
import { useRef } from "react";

export const dataAnalyticsServices = [
  {
    title: "Data-Driven Product Development",
    text: "Unlock the power of your data to create smarter products. We analyze user behaviors and trends, providing actionable insights to design and optimize products that resonate with your audience.",
    gif: "/data-analytics/1-low.mp4",
    highResGif: "/data-analytics/1.mp4",
  },
  {
    title: "Data Annotation and Labeling",
    text: "Ensure high-quality training data for your AI models with precise annotation and labeling services. We categorize, tag, and structure your data for maximum efficiency and accuracy in machine learning.",
    // gif: "/data-analytics/2-low.mp4",
    // highResGif: "/data-analytics/2.mp4",
    gif: "/data-analytics/Data Annotation and Labelling_1-low.mp4",
    highResGif: "/data-analytics/Data Annotation and Labelling_1.mp4",
  },
  {
    title: "Business Intelligence and Reporting",
    text: "Turn raw data into meaningful insights. Our BI solutions offer intuitive dashboards and detailed reports, empowering you to make informed business decisions with confidence.",
    gif: "/data-analytics/3-low.mp4",
    highResGif: "/data-analytics/3.mp4",
  },
  {
    title: "Predictive Analysis",
    text: "Stay ahead of the curve by anticipating future trends. Using advanced modeling techniques, we help you predict outcomes and prepare proactive strategies for success.",
    gif: "/data-analytics/4-low.mp4",
    highResGif: "/data-analytics/4.mp4",
  },
  {
    title: "Time Series Forecasting",
    text: "Forecast trends and plan effectively with time series analysis. Our solutions help you predict sales, inventory needs, and other time-sensitive metrics to optimize operations.",
    gif: "/data-analytics/5-low.mp4",
    highResGif: "/data-analytics/5.mp4",
  },
  {
    title: "Anomaly Detection",
    text: "Identify irregularities before they impact your business. Our anomaly detection systems provide real-time insights to detect fraud, system failures, and other critical issues.",
    gif: "/data-analytics/6-low.mp4",
    highResGif: "/data-analytics/6.mp4",
  },
  {
    title: "Deep Learning Solutions",
    text: "Leverage the latest in AI technology with our deep learning expertise. From complex neural networks to cutting-edge applications, we help you solve advanced challenges efficiently.",
    // gif: "/data-analytics/7-low.mp4",
    // highResGif: "/data-analytics/7.mp4",
    gif: "/data-analytics/Deep Learning_1-low.mp4",
    highResGif: "/data-analytics/Deep Learning_1.mp4",
  },
  {
    title: "Computer Vision",
    text: "Transform visual data into actionable insights. Our computer vision solutions automate processes like image recognition, object detection, and video analysis for enhanced decision-making.",
    // gif: "/data-analytics/8-low.mp4",
    // highResGif: "/data-analytics/8.mp4",
    gif: "/data-analytics/Computer Vision_1-low.mp4",
    highResGif: "/data-analytics/Computer Vision_1.mp4",
  },
  {
    title: "Text and Sentiment Analysis",
    text: "Understand the voice of your customers with text and sentiment analysis. We help you uncover trends, gauge sentiment, and refine strategies based on real customer feedback.",
    // gif: "/data-analytics/9-low.mp4",
    // gif: "/data-analytics/Computer Vision_1.mp4",
    gif: "/data-analytics/Sentiment Analysis_1-low.mp4",
    highResGif: "/data-analytics/Sentiment Analysis_1.mp4",
  },
];

export default function DataAnalytics() {
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  return (
    <>
      <ScrollProgress />

      <Section
        title="Turn Data Into Actionable Insights"
        services={dataAnalyticsServices}
        videoRefs={videoRefs}
        subtitle="Empower your business with data-driven strategies. Our analytics services unlock the potential of your data, enabling smarter decisions, predictive capabilities, and optimized performance across all domains."
      />
      <InterestedSection />
    </>
  );
}
