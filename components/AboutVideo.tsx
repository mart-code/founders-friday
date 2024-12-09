import Image from "next/image";
import Button from "./Button";
import { FaArrowRight } from "react-icons/fa";
const AboutVideo = () => {
  return (
    <div className="justify-between items-stretch gap-8 2xl:min-h-[400px] xl:min-h-[300px] relative px-20 mx-auto flex mt-[180px]">
      <Image
        src={"/IMG_2721 1.png"}
        width={500}
        height={500}
        alt="Video Friday"
        className="w-auto h-auto"
      />
      <div className="flex flex-col justify-center items-start gap-4">
        <h2 className="font-semibold 2xl:text-2xl xl:text-xl lg:text-lg md:text-base">
          At Founder’s Friday, Every Friday Is a Learning Experience!
        </h2>
        <p className="font-semibold 2xl:text-xl xl:text-lg lg:text-base md:text-sm ">
          Join us in our mission to transform ideas into impact and shape the
          future of Nigeria’s startup landscape.
        </p>
        <Button text="Register" dark={true} icon={<FaArrowRight />} />
      </div>
    </div>
  );
};

export default AboutVideo;
