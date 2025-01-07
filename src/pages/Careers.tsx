import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@nextui-org/react";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
import gsap from "gsap";
import RetroGrid from "@/components/ui/retro-grid";

export default function Careers() {
  useEffect(() => {
    const boxes = document.querySelectorAll(".box");

    boxes.forEach((box) => {
      const textTop = box.querySelector(".text-top");
      const textBottom = box.querySelector(".text-bottom");

      //   box.addEventListener("mouseenter", () => {
      //     gsap.to(textTop, { y: "-100%", opacity: 0, duration: 0.2 });
      //     gsap.to(textBottom, { y: "0%", opacity: 1, duration: 0.2 });
      //   });

      //   box.addEventListener("mouseleave", () => {
      //     gsap.to(textTop, { y: "0%", opacity: 1, duration: 0.2 });
      //     gsap.to(textBottom, { y: "100%", opacity: 0, duration: 0.2 });
      //   });
    });
  }, []);

  return (
    <>
      <div className="h-screen bg-black z-[1] sticky flex flex-col justify-center snap-y snap-mandatory overflow-hidden">
        {/* <BackgroundBeams /> */}
        <RetroGrid cellSize={25} lightLineColor="#E0AAFF" />
        <div className="px-10 rounded-b-[50px] pt-[30px] pb-[30px] flex flex-col items-center justify-center gap-5">
          <h1 className="font-bold text-[2vw] bg-clip-text text-transparent bg-gradient-to-t from-pink-600 to-purple-500">
            Shape the Future with us
          </h1>
          <div className="text-white text-[3vw] text-center max-w-[50vw] leading-none font-bold tracking-wide">
            Join our innovative and passionate team to create impactful
            solutions and unlock your potential.
          </div>
        </div>
        <div className="content flex flex-col items-center justify-center w-full px-[100px] pt-[30px] z-[10] gap-5">
          <h1 className="text-[2vw] text-white text-sans-serif font-cat">
            Why work with us?
          </h1>
          <div className="boxes flex flex-wrap gap-5 items-center justify-center">
            {[
              "Growth Opportunities",
              "Flexible Work Culture",
              "Employee Benefits",
              "Networking Benefits",
            ].map((text, index) => (
              <div
                key={index}
                className="box border-2 border-purple-500 flex items-center justify-center p-5 relative cursor-pointer overflow-hidden w-[250px] h-[70px] group"
              >
                <h1 className="text-top absolute text-white text-2xl font-bold w-full text-center transition-all group-hover:opacity-0 group-hover:translate-y-[-100%]">
                  {text}
                </h1>
                <h1 className="text-bottom absolute text-2xl font-serif text-purple-300 w-full text-center opacity-0 transition-all group-hover:opacity-100">
                  {text}
                </h1>
              </div>
            ))}
          </div>
        </div>
        <div className="button flex flex-col items-center justify-center pt-[50px] gap-5">
          <p className="text-white text-2xl text-center max-w-[40vw]">
            We’re always looking for talented individuals to join our team!
            Explore our open positions and apply using the form below.
          </p>
          <Button
            radius="full"
            variant="faded"
            size="lg"
            endContent={
              <div className="rounded-full bg-black min-h-[40px] min-w-[40px] flex justify-center items-center ">
                <ArrowRight color="white" />
              </div>
            }
            className="pr-1 bg-gradient-to-tr text-white from-pink-500 to-purple-500 border-none"
          >
            View Open Positions
          </Button>
        </div>
      </div>
    </>
  );
}
