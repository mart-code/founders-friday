"use client";

import Image from "next/image";
import Button from "./Button";
import SlidingText from "./SlidingText";
import { BsArrowRight } from "react-icons/bs";

const StateVisit = () => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap justify-between items-center bg-stateBg w-full 2xl:min-h-[808px] xl:min-h-[600px] bg-center px-20 bg-cover bg-no-repeat mt-[189px] py-40">
      <div className="flex flex-col items-start basis-full lg:basis-1/2">
        <h2 className="font-bold xl:text-4xl lg:text-3xl md:text-2xl sm:text-1xl text-[--baseWhite]">
          Founders Friday is coming to
        </h2>
        <SlidingText />
        <p className="text-lg font-normal text-[--baseWhite]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
          rutrum felis. Nulla nibh lorem, facilisis vel est at, vehicula
          dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo
          suscipit id. Maecenas ut ante quis quam lobortis consequat eu id
          turpis. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. 
        </p>
        <Button
          type="button"
          title="Register"
          icon={<BsArrowRight />}
          variant="btn-purple-outline"
        />
      </div>
      <Image
        src={"/ff-logo.png"}
        width={200}
        height={200}
        alt="Founders Friday Logo"
        className="w-[500px] h-auto basis-full lg:basis-1/2"
      />
    </div>
  );
};

export default StateVisit;
