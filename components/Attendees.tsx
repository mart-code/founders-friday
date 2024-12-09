import Image from "next/image";

const Attendees = () => {
  return (
    <div className="px-20 mt-[180px] flex flex-col items-center justify-evenly mx-auto min-h-[565px] w-full">
      <h1 className="font-bold 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl">
        What Do Our Attendees Have To Say?
      </h1>
      <p className="font-normal 2xl:text-2xl xl:text-xl lg:text-lg text-[--secondary]">
        Well See For Yourself!
      </p>
      <div className="flex justify-center gap-4 items-center">
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="p-4 border-2 rounded-full border-[--seed]">
            <Image
              src={"/Ellipse 309.png"}
              width={500}
              height={500}
              alt="review image"
              className="object-cover w-[200px]"
            />
          </div>
          <h2 className="font-semibold 2xl:text-3xl xl:text-2xl lg:text-xl ">
            Mr Belba Ngoy
          </h2>
          <p className="text-center">
            Always a remarkable experience for my team and myself
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="p-4 border-2 rounded-full border-[--seed]">
            <Image
              src={"/Ellipse 309.png"}
              width={500}
              height={500}
              alt="review image"
              className="object-cover w-[200px]"
            />
          </div>
          <h2 className="font-semibold 2xl:text-3xl xl:text-2xl lg:text-xl ">
            Mr Belba Ngoy
          </h2>
          <p className="text-center">
            Always a remarkable experience for my team and myself
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="p-4 border-2 rounded-full border-[--seed]">
            <Image
              src={"/Ellipse 309.png"}
              width={500}
              height={500}
              alt="review image"
              className="object-cover w-[200px]"
            />
          </div>
          <h2 className="font-semibold 2xl:text-3xl xl:text-2xl lg:text-xl ">
            Mr Belba Ngoy
          </h2>
          <p className="text-center">
            Always a remarkable experience for my team and myself
          </p>
        </div>
      </div>
    </div>
  );
};

export default Attendees;
