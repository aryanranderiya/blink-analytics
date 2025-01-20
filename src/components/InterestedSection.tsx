import { Button } from "@nextui-org/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function InterestedSection() {
  return (
    <div className="sm:h-[30vh] h-[20vh] sticky bg-[#5a189a] z-[1] rounded-b-3xl p-10 flex justify-center items-center flex-col gap-3">
      <div className="sm:text-4xl text-2xl text-center text-white">Interested in working with us?</div>
      <Link to="/contact">
        <Button
          radius="full"
          variant="faded"
          className="pr-[2px]"
          size={window.innerWidth > 640 ? 'lg' : 'sm'}
          endContent={
            <div className="rounded-full bg-gradient-to-tr from-pink-500 to-purple-500 h-[25px] w-[25px] sm:min-h-[40px] sm:min-w-[40px] flex justify-center items-center ">
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
