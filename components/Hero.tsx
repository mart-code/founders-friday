import Button from "./Button";
import Image from "next/image";
import {
  MdKeyboardDoubleArrowRight,
  MdOutlineDoubleArrow,
} from "react-icons/md";
const Hero = () => {
  return (
    <div className="px-20 mx-auto hero flex justify-between items-stretch mt-[155px] h-auto bg-hero bg-no-repeat bg-right-top pb-[135px]">
      {/* <div className="bg-hero absolute bg-cover top-[-20px] right-[300px] h-full w-1/2 bg-no-repeat -z-10"></div> */}
      <div className="flex flex-col items-start">
        <span className="font-semibold text-lg">
          Join our premier monthly meetup for startup founders and tech
          visionaries
        </span>
        <h1 className="text-[--primary800] font-bold text-5xl">
          Connect, Collaborate, Innovate!
        </h1>
        <p className="my-10 text-[24px]">
          Every last Friday of the month, we bring together the brightest minds
          in our local tech ecosystem. Whether you're a seasoned entrepreneur or
          just starting your journey, Founder's Friday is your launchpad for new
          ideas, valuable connections, and game-changing opportunities.
        </p>
        <Button
          text="Register For Our Next Event"
          icon={<MdOutlineDoubleArrow className="bg-transparent border-1 " />}
        />
        <p className="font-semibold text-[--seed] text-base pt-4 ">
          Join Us for our next meetup on the 26th of July 2024
        </p>
      </div>
      <div className="">
        <div className="flex flex-col items-stretch p-4">
          <div className="relative w-fit mx-auto border-2 border-[--seed] rounded-xl">
       
         
              <Image
                src={"/IMG_2645 1.png"}
                alt={"fff"}
                width={500}
                height={500}
                className="w-[800px] h-[300px] bg-[--seed] rounded-xl"
              />
       
            {/* Label */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 bg-[--seed] py-1 text-[--baseWhite] font-semibold text-sm shadow-md rounded-md text-nowrap w-full text-center object-center">
              Founder Friday
            </div>
          </div>
          <div className="relative w-fit mx-auto border-2 border-[--seed] rounded-xl">
       
         
              <Image
                src={"/IMG_2645 1.png"}
                alt={"fff"}
                width={500}
                height={500}
                className="w-[800px] h-[300px] bg-[--seed] rounded-xl"
              />
       
            {/* Label */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 bg-[--seed] py-1 text-[--baseWhite] font-semibold text-sm shadow-md rounded-md text-nowrap w-full text-center object-center">
              Founder Friday
            </div>
          </div>
          <div className="relative w-fit mx-auto border-2 border-[--seed] rounded-xl">
       
         
              <Image
                src={"/IMG_2645 1.png"}
                alt={"fff"}
                width={500}
                height={500}
                className="w-[800px] h-[300px] bg-[--seed] rounded-xl"
              />
       
            {/* Label */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 bg-[--seed] py-1 text-[--baseWhite] font-semibold text-sm shadow-md rounded-md text-nowrap w-full text-center object-center">
              Founder Friday
            </div>
          </div>
          <div className="relative w-fit mx-auto border-2 border-[--seed] rounded-xl">
       
         
              <Image
                src={"/IMG_2645 1.png"}
                alt={"fff"}
                width={500}
                height={500}
                className="w-[800px] h-[300px] bg-[--seed] rounded-xl"
              />
       
            {/* Label */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 bg-[--seed] py-1 text-[--baseWhite] font-semibold text-sm shadow-md rounded-md text-nowrap w-full text-center object-center">
              Founder Friday
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
