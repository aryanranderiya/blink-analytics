import { Button } from "@nextui-org/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function InterestedSection() {
  return (
    <div className="h-[30vh] sticky bg-[#5a189a] z-[1] rounded-b-3xl p-10 flex justify-center items-center flex-col gap-3">
      <div className="text-4xl text-white">Interested in working with us?</div>
      <Link to="/contact">
        <Button
          radius="full"
          variant="faded"
          className="pr-[2px]"
          size="lg"
          endContent={
            <div className="rounded-full bg-gradient-to-tr from-pink-500 to-purple-500 min-h-[40px] min-w-[40px] flex justify-center items-center ">
              <ArrowRight color="white" />
            </div>
          }
        >
          Get in Touch
        </Button>
      </Link>
    </div>
  );
}
