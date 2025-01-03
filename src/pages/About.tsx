import { BackgroundBeams } from "@/components/ui/background-beams";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
export default function About() {
    return (
      <>
        <div className="main bg-black h-fit z-[1] flex items-center justify-between overflow-hidden relative">
          <BackgroundBeams />
          <div className="left p-10 flex-[3] flex flex-col self-start pt-[100px]">
            <h1 className="text-[3.5vw] font-bold tracking-wide text-white">
              We deliver&nbsp;
              <span className="text-transparent bg-clip-text bg-gradient-to-tr from-pink-500 to-purple-500">
                Intelligent
              </span>
              ,&nbsp;
              <span className="text-transparent bg-clip-text bg-gradient-to-tr from-pink-500 to-purple-500">
                Secure
              </span>
              , and&nbsp;
              <span className="text-transparent bg-clip-text bg-gradient-to-tr from-pink-500 to-purple-500">
                Custom
              </span>
              &nbsp; AI solutions that empower businesses to innovate, thrive, and
              achieve their full potential.
            </h1>
            <div className="info-grid grid grid-cols-2 gap-5 mt-10">
                {[
                    {
                        number: "2020",
                        info: "Established in Year"
                    },
                    {
                        number: "100+",
                        info: "Happy Clients Served"
                    },
                    {
                        number: "70%",
                        info: "Retention Rate of Customers"
                    },
                    {
                        number: "25%",
                        info: "Increased Efficiency in Client's Businesses"
                    },
                    {
                        number: "30%",
                        info: "Reduced Manual Work using AI"
                    },
                ].map((item, index) => (
                    <div className="info p-5 rounded-md flex flex-col items-start gap-[10px]" key={index}>
                        <span className="w-[50px] h-[4px] bg-purple-500"></span>
                        <h1 className="number text-white text-3xl font-bold">{item.number}</h1>
                        <h1 className="desc text-white text-2xl">{item.info}</h1>
                    </div>
                ))}
            </div>
          </div>
          <div className="right bg-transparent min-h-screen p-10 rounded-l-[50px] z-[10] flex-[2] flex flex-col gap-5">
            <h1 className="text-[3vw] text-white font-[800] tracking-wide pl-[10px]">
              About Blink Analytics
            </h1>
            <div className="content flex flex-col gap-5">
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
                  className={`flex flex-col text-justify group cursor-pointer gap-5 border-2 rounded-l-3xl relative border-purple-500 p-5 hover:border-pink-500 hover:transition-2`}
                  key={index}
                >
                  <div className="flex items-center gap-5 ">
                    <div className="circle bg-purple-500 rounded-full w-[100px] h-[100px] flex items-center justify-center">
                      <DotLottieReact
                        src={item.icon}
                        loop
                        autoplay
                        style={{ width: "80px", height: "80px" }}
                      />
                    </div>
                    <h1 className="text-[3vw] text-white font-bold tracking-wide">{item.title}</h1>
                  </div>
                  <p className="text-white text-[24px]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
  