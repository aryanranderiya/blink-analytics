import { Button, Chip, Input, Textarea } from "@nextui-org/react";

export default function Contact() {

  return (
    <div className="min-h-screen bg-[#e3edfd] z-[1] flex relative">
      {/* Header Section */}
      <img
        src="../src/assets/bg-vtex.png"
        alt="cubes-abstract"
        className="abstract-img absolute bottom-0 left-[35%] z-[1] animate-bob"
        width={600}
      />
      <div className="p-10 pt-20 flex flex-col gap-5">
        <h1 className="font-[800] text-6xl text-[#240046]">
          Ready to Elevate your Business?
        </h1>
        <h1 className="font-bold text-5xl text-[#240046]">
          Let's turn&nbsp;
          <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#9d4edd] to-[#3c096c]">
            Ideas
          </span>
          &nbsp;into&nbsp;
          <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#9d4edd] to-[#3c096c]">
            Impact.
          </span>
        </h1>
        <h2 className="font-medium text-4xl text-[#240046] max-w-[70vw]">
          We’re just one click away from driving innovation, transforming your
          data, and achieving remarkable results.
        </h2>

        <div className="flex gap-2 mt-4">
          <Chip size="lg" variant="bordered" color="primary">
            <div className="text-[#240046]">+91 1234567890</div>
          </Chip>

          <Chip size="lg" variant="bordered" color="primary">
            <div className="text-[#240046]">
              <a href="mailto:support@blinkanalytics.in">
                support@blinkanalytics.in
              </a>
            </div>
          </Chip>
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-gradient-to-tr from-[#7b2cbf] to-[#3c096c] flex-grow rounded-l-3xl p-10 z-[2] w-[40vw]">
        <div className="text-white text-xl font-bold tracking-wide">
          Send us a message directly!
        </div>
        <div className="w-full flex gap-3 flex-col mt-5">
          <div className="flex items-center gap-3 w-full">
            <Input label="Enter Name" variant="faded" />
            <Input label="Enter Email" variant="faded" />
          </div>
          <Textarea
            size="lg"
            label="Enter Message"
            minRows={4}
            variant="faded"
          />

          <Button size="lg" radius="full">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
