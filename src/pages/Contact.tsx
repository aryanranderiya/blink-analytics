import { Button, Chip, Input, Textarea } from "@nextui-org/react";
import gsap from "gsap";
import { useEffect } from "react";

export default function Contact() {
  useEffect(()=>{
    gsap.fromTo('.abstract-img', {y: 100, opacity: 0}, {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "smooth"
    })
  },[])
  return (
    <div className="min-h-screen bg-[#e3edfd] z-[1] flex relative">
      {/* Header Section */}
      <img src="../src/assets/bg-vtex.png" alt="cubes-abstract" className="abstract-img absolute bottom-0 left-[40%] z-[1]" width={600}/>
      <div className="p-10 pt-20 flex flex-col gap-5">
        <h1 className="font-[800] text-6xl text-[#240046]">Ready to Elevate your Business?</h1>
        <h1 className="font-bold text-5xl text-[#240046]">Let's turn&nbsp;<span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#9d4edd] to-[#3c096c]">Ideas</span>&nbsp;into&nbsp;<span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#9d4edd] to-[#3c096c]">Impact.</span></h1>
        <h2 className="font-medium text-4xl text-[#240046] max-w-[70vw]">
          We’re just one click away from driving innovation, transforming your data, and achieving remarkable results.
        </h2>

        <div className="flex gap-2 mt-4">
          <Chip size="lg" variant="bordered" color="primary">
            <div className="text-[#240046]">+91 1234567890</div>
          </Chip>

          <Chip size="lg" variant="bordered" color="primary">
            <div className="text-[#240046]"><a href="mailto:support@blinkanalytics.in">support@blinkanalytics.in</a></div>
          </Chip>
        </div>
      </div>


      {/* Form Section */}
      <div className="bg-gradient-to-tr from-[#7b2cbf] to-[#3c096c] flex-grow rounded-l-3xl p-10 z-[2]">
        <div className="text-white text-[20px] font-bold tracking-wide">
          Send us a message directly!
        </div>
        <div className="w-full flex gap-3 flex-col mt-5">
          <div className="flex items-center gap-3 w-full">
            <Input label="Enter Name" size="lg" />
            <Input label="Enter Email" size="lg" />
          </div>
          <Textarea size="lg" label="Enter Message" minRows={4} />

          <Button size="lg" radius="full">
            Submit
          </Button>
          
        </div>
      </div>
    </div>
  );
}
