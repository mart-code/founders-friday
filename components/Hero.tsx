import Button from "./Button";
import Image from "next/image";
import { BsPlayCircleFill } from "react-icons/bs";

import { BsBoxArrowUpRight } from "react-icons/bs";
import { MdDoubleArrow } from "react-icons/md";

const Hero = () => {
  return (
    <div className="relative lg:px-20 px-5 mx-auto hero gap-8 flex lg:flex-nowrap flex-wrap justify-between items-stretch mt-[155px] h-auto pb-[135px]">
      <div className="bg-hero bg-cover bg-right-top absolute -z-10 -top-40 bottom-0 right-0 w-full hidden lg:block"></div>
      <div className="flex lg:basis-2/3 basis-full text-center lg:text-left text-lg flex-col lg:items-start items-center">
        <span className="font-semibold text-lg">
          Join our premier monthly meetup for startup founders and tech
          visionaries
        </span>
        <h1 className="text-[--primary800] font-bold text-5xl">
          Connect, Collaborate, Innovate!
        </h1>
        <p className="my-10 text-[24px] text-black">
          Every last Friday of the month, we bring together the brightest minds
          in our local tech ecosystem. Whether you're a seasoned entrepreneur or
          just starting your journey, Founder's Friday is your launchpad for new
          ideas, valuable connections, and game-changing opportunities.
        </p>
        <Button
          type="button"
          title="Register for Our Next Event"
          icon={
            <Image src="/right-arrow.png" width={50} height={50} alt="arrow" />
          }
          variant="btn-purple-outline"
        />
        <p className="font-semibold text-[--seed] text-base pt-4 ">
          Join Us for our next meetup on the 26th of July 2024
        </p>
        <div className="flex  justify-between items-center gap-8 mt-[88px]">
          <Image
            src={"/Ellipse 1.png"}
            width={100}
            height={100}
            alt="logo"
            className="size-12 lg:size-18 xl:size-20"
          />
          <Image
            src={"/Ellipse 2.png"}
            width={100}
            height={100}
            alt="logo"
            className="size-12 lg:size-18 xl:size-20"
          />
          <Image
            src={"/Ellipse 3.png"}
            width={100}
            height={100}
            alt="logo"
            className="size-12 lg:size-18 xl:size-20"
          />
          <Image
            src={"/Ellipse 4.png"}
            width={100}
            height={100}
            alt="logo"
            className="size-12 lg:size-18 xl:size-20"
          />
          <Image
            src={"/Ellipse 5.png"}
            width={100}
            height={100}
            alt="logo"
            className="size-12 lg:size-18 xl:size-20"
          />
        </div>
        <p className="flex flex-nowrap text-black justify-center items-center font-bold text-sm mt-8">
          Become a collaborator today
          <span>
            <BsBoxArrowUpRight className="font-bold" />
          </span>
        </p>
      </div>

      <div className="flex lg:basis-1/3 basis-full flex-col items-center lg:items-stretch">
        <div className="relative w-fit border-2 border-primary-400 rounded-xl -rotate-6 -translate-x-6">
          <Image
            src={"/IMG_2645 1.png"}
            alt={"fff"}
            width={500}
            height={500}
            className="w-[300px] h-[300px] bg-primary-400 rounded-xl"
          />
          <BsPlayCircleFill className="absolute top-1/2 left-1/2 text-[--baseWhite] size-10 bg-[--seed] rounded-full" />

          {/* Label */}
          <div
            className={
              "absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 bg-primary-400 py-1 text-[--baseWhite] font-semibold text-sm shadow-md rounded-md text-nowrap w-full text-center object-center font-cursive "
            }
          >
            Founder Friday
          </div>
        </div>
        <div className="relative w-fit border-2 border-primary-700 rounded-xl rotate-12 -translate-y-40 translate-x-40">
          <Image
            src={"/image 1.png"}
            alt={"fff"}
            width={500}
            height={500}
            className="w-[300px] h-[300px] bg-primary-700 rounded-xl"
          />

          {/* Label */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 bg-primary-700 py-1 text-[--baseWhite] font-semibold text-sm shadow-md rounded-md text-nowrap w-full text-center object-center font-cursive">
            Founder Friday
          </div>
        </div>
        <div className="relative w-fit border-[1px] border-black rounded-xl rotate-12 -translate-x-40 -translate-y-40 ">
          <Image
            src={"/IMG_2501 3.png"}
            alt={"fff"}
            width={500}
            height={500}
            className="w-[250px] h-[250px] bg-secondary-100 rounded-xl"
          />

          {/* Label */}
          <div
            className={
              "absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 bg-secondary-100 py-1 text-black font-semibold text-sm shadow-md rounded-md text-nowrap w-full text-center object-center "
            }
          >
            Founder Friday
          </div>
        </div>
        <div className="relative w-fit border-[1px] border-black rounded-xl -rotate-12 -translate-y-20">
          <Image
            src={"/Frame 17.png"}
            alt={"fff"}
            width={500}
            height={500}
            className="w-[100px] h-[100px] bg-secondary-100 rounded-xl"
          />

          {/* Label */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 bg-secondary-100 py-1 text-black font-semibold text-sm shadow-md rounded-md text-nowrap w-full text-center object-center font-cursive">
            Founder Friday
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
