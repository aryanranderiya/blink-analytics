import { Button, Chip, Input, Textarea } from "@nextui-org/react";

export default function Contact() {
  return (
    <div className="h-screen bg-[#7091e6] z-[1] sticky flex flex-col justify-center">
      {/* <div className="bebasneue text-white text-9xl">
        BUILDING THE NEXT BEST THING?
      </div> */}

      <div className="p-10 pt-[180px]">
        <h1 className="font-bold text-9xl text-white">Let's Talk!</h1>
        <h2 className="font-medium text-4xl text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
          voluptatem?
        </h2>

        <div className="flex gap-2 mt-4">
          <Chip size="lg" variant="flat">
            <div className="text-white">+91 1234567890</div>
          </Chip>

          <Chip size="lg" variant="flat">
            <div className="text-white">email@gmail.com</div>
          </Chip>
        </div>
      </div>

      <div className="bg-[#3d52a0]  grow rounded-3xl p-10">
        <div className="w-full flex gap-3 flex-col mt-5">
          <div className="flex items-center gap-3 w-full">
            <Input label="Enter Name" size="lg" />
            <Input label="Enter Email" size="lg" />
          </div>
          <Textarea size="lg" label="Enter Message" minRows={100} />

          <Button size="lg" radius="full">
            Submit
          </Button>
          <div className="text-white">
            some disclaimer Lorem ipsum dolor sit amet consectetur adipisicing.
          </div>
        </div>
      </div>
    </div>
  );
}
