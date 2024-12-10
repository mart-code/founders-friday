import Image from "next/image";
import Button from "./Button";

import { BsPlayCircleFill, BsArrowRight } from "react-icons/bs";
const AboutVideo = () => {
  return (
    <div className="justify-between items-stretch gap-8 2xl:min-h-[400px] xl:min-h-[300px] relative lg:px-20 px-5 mx-auto md:flex-nowrap flex-wrap flex mt-[180px]">
      <div className="relative">
        <Image
          src={"/IMG_2721 1.png"}
          width={500}
          height={500}
          alt="Video Friday"
          className="w-auto h-auto"
        />
        <BsPlayCircleFill className="absolute top-1/2 left-1/2 text-[--baseWhite] size-10 bg-[--seed] rounded-full" />
      </div>

      <div className="flex flex-col justify-center items-start gap-4">
        <h2 className="font-semibold 2xl:text-2xl xl:text-xl lg:text-lg md:text-base">
          At Founder’s Friday, Every Friday Is a Learning Experience!
        </h2>
        <p className="font-semibold 2xl:text-xl xl:text-lg lg:text-base md:text-sm ">
          Join us in our mission to transform ideas into impact and shape the
          future of Nigeria’s startup landscape.
        </p>
        <Button
          type="button"
          title="Register"
          icon={<BsArrowRight />}
          variant="btn-purple"
        />
      </div>
    </div>
  );
};

export default AboutVideo;
