import { Button, Chip, Input, Textarea } from "@nextui-org/react";
import { Loader } from "lucide-react";
import React from "react";

export default function Contact() {
  const [result, setResult] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();

    const API_KEY = import.meta.env.WEB3FORMS_API_KEY;

    if (!API_KEY) {
      setLoading(false);
      return;
    }

    setResult("Sending...");

    const formElement = event.currentTarget as HTMLFormElement; // Explicit cast
    const formData = new FormData(formElement);

    formData.append("access_key", API_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      formElement?.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
    setLoading(false);
  };

  return (
    <div className="sm:min-h-screen min-h-[75vh] bg-[#e3edfd] z-[1] flex relative sm:flex-row flex-col overflow-hidden">
      {/* Header Section */}
      <img
        src="/bg-vtex.png"
        alt="cubes-abstract"
        className="abstract-img absolute sm:top-[60%] top-[20%] left-[20%] sm:left-[35%] z-[0] animate-bob sm:opacity-100 opacity-40"
        width={600}
      />

      <div className="sm:p-10 p-4 sm:pt-24 pt-20 flex flex-col sm:gap-5 gap-2 z-[1] sm:pb-10 pb-14">
        <h1 className="font-[800] sm:text-6xl text-4xl text-[#240046]">
          Ready to Elevate your Business?
        </h1>
        <h1 className="font-bold sm:text-5xl text-2xl text-[#240046] leading-tight">
          Let's turn&nbsp;
          <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#9d4edd] to-[#3c096c] inline">
            Ideas
          </span>
          &nbsp;into&nbsp;
          <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#9d4edd] to-[#3c096c] inline">
            Impact.
          </span>
        </h1>

        <h2 className="font-medium sm:text-4xl text-lg text-[#240046] sm:max-w-[70vw] max-w-full">
          We’re just one click away from driving innovation, transforming your
          data, and achieving remarkable results.
        </h2>

        <div className="sm:flex-row flex-col gap-2 mt-4">
          <Chip
            size={window.innerWidth > 640 ? "lg" : "md"}
            variant="bordered"
            color="primary"
          >
            <div className="text-[#240046]">
              +1 (682) 408-3798 | Fort Worth, TX
            </div>
          </Chip>
          <Chip
            size={window.innerWidth > 640 ? "lg" : "md"}
            variant="bordered"
            color="primary"
            className="  sm:ml-[10px] mt-[10px]"
          >
            <div className="text-[#240046]">
              +91 (992) 452-7163 | Ahmedabad, India
            </div>
          </Chip>
          <Chip
            size={window.innerWidth > 640 ? "lg" : "md"}
            variant="bordered"
            color="primary"
            className="  sm:ml-[10px] mt-[10px]"
          >
            <div className="text-[#240046]">
              <a href="mailto:support@blinkanalytics.in">
                support@blinkanalytics.in
              </a>
            </div>
          </Chip>
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-gradient-to-tr from-[#7b2cbf] to-[#3c096c] flex-grow sm:rounded-l-3xl rounded-t-3xl sm:p-10 p-5 z-[2] sm:w-[40vw] w-full">
        <div className="text-white text-xl font-bold tracking-wide">
          Send us a message directly!
        </div>
        <form
          onSubmit={onSubmit}
          className="w-full flex gap-3 flex-col mt-5 sm:pb-0 pb-12"
        >
          <div className="flex items-center gap-3 w-full">
            <input
              type="hidden"
              name="access_key"
              value="YOUR_ACCESS_KEY_HERE"
            />
            <Input label="Enter Name" name="name" variant="faded" required />
            <Input label="Enter Email" name="email" variant="faded" required />
          </div>
          <Textarea
            size="lg"
            label="Enter Message"
            name="message"
            minRows={4}
            variant="faded"
            required
          />

          <Button size="lg" radius="full" type="submit">
            {loading ? <Loader className="animate-spin" /> : "Submit"}
          </Button>
        </form>
        <span className="text-white mt-3">{result}</span>
      </div>
    </div>
  );
}
