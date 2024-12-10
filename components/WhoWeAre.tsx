import Image from "next/image";
import Button from "./Button";
import { FaSackDollar, FaArrowRight } from "react-icons/fa6";
const WhoWeAre = () => {
  return (
    <div className="px-20 mx-auto flex flex-wrap lg:flex-nowrap justify-between items-stretch gap-8 2xl:min-h-[400px] xl:min-h-[300px] relative">
      <Image
        src={"/IMG_2857 1.png"}
        width={500}
        height={500}
        alt="founders"
        className="w-auto h-auto"
      />
      <div className="flex justify-center items-stretch ">
        <Image
          src={"/Line 1.svg"}
          width={2}
          height={50}
          alt="line"
          className="w-10 h-auto"
        />
        <div className="flex flex-col items-start justify-between bg-[--baseWhite] z-10">
          <h1 className="font-semibold text-4xl">Who we are?</h1>
          <p className="text-base text-[--secondary] ">
            Born from the vibrant startup ecosystem of Abuja, we recognized the
            need for a consistent, high-quality networking platform where
            founders, innovators, and tech enthusiasts could connect, share
            ideas, and foster collaboration.
          </p>
          <div className="flex gap-2 justify-between items-center">
            <Button
              type="button"
              title="Register"
              icon={<FaArrowRight />}
              variant="btn-purple"
            />
            <Button
              type="button"
              title="Donate"
              icon={<FaSackDollar />}
              variant="btn-purple-outline"
            />
          </div>
          <p className="font-semibold text-base">
            Founder's Friday is more than just a meetup — it's a movement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
