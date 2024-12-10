import { BsPlus } from "react-icons/bs";

const WhatWeOffer = () => {
  return (
    <div className="px-20 mx-auto min-h-[500px] w-full mt-[180px]">
      <h1 className="text-center text-5xl font-bold mb-[90px]">
        What We Offer
      </h1>
      <div className="flex justify-between lg:flex-nowrap flex-wrap items-center border-b border-[--secondary] py-4">
        <div className="flex gap-2 flex-nowrap basis-[40%]  justify-start items-center">
          <div className="size-4 rounded-full bg-[--primary]"></div>
          <h1 className="font-bold text-3xl text-nowrap text-left">
            Monthly Meetups
          </h1>
        </div>
        <div className="flex justify-center items-center lg:basis-[60%] basis-[100%] text-[--secondary]">
          <p className="text-[--secondary] basis-[90%] ">
            Our cornerstone event, held on the last Friday of every month,
            featuring keynote speakers, panel discussions, and ample networking
            opportunities.
          </p>
          <BsPlus className="size-16 font-bold basis-[10%]" />
        </div>
      </div>
      <div className="flex justify-between lg:flex-nowrap flex-wrap items-center border-b border-[--secondary] py-4">
        <div className="flex gap-2 flex-nowrap basis-[40%]  justify-start items-center">
          <div className="size-4 rounded-full bg-[--primary]"></div>
          <h1 className="font-bold text-3xl text-nowrap text-left">
            Diverse Network
          </h1>
        </div>
        <div className="flex justify-center items-center lg:basis-[60%] basis-[100%] text-[--secondary]">
          <p className="text-[--secondary] basis-[90%] ">
            Connect with a wide range of professionals, from early-stage
            founders to seasoned entrepreneurs, investors, and industry experts.
          </p>
          <BsPlus className="size-16 font-bold basis-[10%]" />
        </div>
      </div>
      <div className="flex justify-between lg:flex-nowrap flex-wrap items-center border-b border-[--secondary] py-4">
        <div className="flex gap-2 flex-nowrap basis-[40%]  justify-start items-center">
          <div className="size-4 rounded-full bg-[--primary]"></div>
          <h1 className="font-bold text-3xl text-nowrap text-left">
            Knowledge Sharing
          </h1>
        </div>
        <div className="flex justify-center items-center lg:basis-[60%] basis-[100%] text-[--secondary]">
          <p className="text-[--secondary] basis-[90%] ">
            Connect with a wide range of professionals, from early-stage
            founders to seasoned entrepreneurs, investors, and industry experts.
          </p>
          <BsPlus className="size-16 font-bold basis-[10%]" />
        </div>
      </div>
      <div className="flex justify-between lg:flex-nowrap flex-wrap items-center border-b border-[--secondary] py-4">
        <div className="flex gap-2 flex-nowrap basis-[40%]  justify-start items-center">
          <div className="size-4 rounded-full bg-[--primary]"></div>
          <h1 className="font-bold text-3xl text-nowrap text-left">
            Collaboration <br /> Opportunities
          </h1>
        </div>
        <div className="flex justify-center items-center lg:basis-[60%] basis-[100%] text-[--secondary]">
          <p className="text-[--secondary] basis-[90%] ">
            Find potential co-founders, mentors, or partners for your next big
            venture.
          </p>
          <BsPlus className="size-16 font-bold basis-[10%]" />
        </div>
      </div>
      <div className="flex justify-between lg:flex-nowrap flex-wrap items-center border-b border-[--secondary] py-4">
        <div className="flex gap-2 flex-nowrap basis-[40%]  justify-start items-center">
          <div className="size-4 rounded-full bg-[--primary]"></div>
          <h1 className="font-bold text-3xl text-nowrap text-left">
            Community Support
          </h1>
        </div>
        <div className="flex justify-center items-center lg:basis-[60%] basis-[100%] text-[--secondary]">
          <p className="text-[--secondary] basis-[90%] ">
            Be part of a supportive ecosystem that celebrates successes and
            provides guidance through challenges.
          </p>
          <BsPlus className="size-16 font-bold basis-[10%]" />
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
