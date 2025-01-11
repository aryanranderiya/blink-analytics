import RetroGrid from "@/components/ui/retro-grid";
import { Button } from "@nextui-org/react";
import { ArrowRight } from "lucide-react";

export default function Careers() {
  return (
    <div className="min-h-screen bg-black z-[1] sticky flex flex-col justify-center snap-y snap-mandatory overflow-hidden">
      {/* <BackgroundBeams /> */}
      <RetroGrid cellSize={25} lightLineColor="#E0AAFF" />
      <div className="px-10 rounded-b-[50px] sm:pt-[60px] pt-[80px] flex flex-col items-center justify-center gap-5">
        <h1 className="font-bold sm:text-5xl text-4xl text-center bg-clip-text text-transparent bg-gradient-to-t from-pink-600 to-purple-500">
          Shape the Future with us
        </h1>
        <div className="text-white sm:text-2xl text-md text-center sm:max-w-[50vw] leading-none sm:font-bold tracking-wide">
          Join our innovative and passionate team to create impactful solutions
          and unlock your potential.
        </div>
      </div>
      <div className="content flex flex-col items-center justify-center w-full px-[100px] pt-[30px] z-[10] gap-5">
        <h1 className="text-xl text-white text-sans-serif font-cat">
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
              className="box border-2 border-[#c77dff] flex items-center justify-center p-5 relative cursor-pointer overflow-hidden w-[250px] sm:h-[70px] h-[60px] group hover:bg-[#c77dff] transition-colors"
            >
              <h1 className="text-top absolute text-white sm:text-xl text-lg font-bold w-full text-center transition-all group-hover:opacity-0 group-hover:translate-y-[-100%]">
                {text}
              </h1>
              <h1 className="text-bottom absolute sm:text-xl text-lg font-serif text-[#240046] w-full text-center opacity-0 transition-all group-hover:opacity-100">
                {text}
              </h1>
            </div>
          ))}
        </div>
      </div>
      <div className="button flex flex-col items-center justify-center py-[50px] gap-5">
        <p className="text-white sm:text-2xl text-lg text-center sm:max-w-[50vw] p-4">
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
  );
}
