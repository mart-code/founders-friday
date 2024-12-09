import Image from "next/image";
import Button from "./Button";
import { FaArrowRight } from "react-icons/fa";
const StateVisit = () => {
  return (
    <div className="flex justify-between items-center bg-stateBg w-full 2xl:min-h-[808px] xl:min-h-[600px] bg-center px-20 bg-cover bg-no-repeat mt-[180px]">
      <div className="flex flex-col items-start flex-1">
        <h2 className="font-bold xl:text-4xl lg:text-3xl md:text-2xl sm:text-1xl text-[--baseWhite]">
          Founders Friday is coming to
        </h2>
        <h1 className="font-bold text-[--primary] text-9xl">Kaduna</h1>
        <p className="text-lg font-normal text-[--baseWhite]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
          rutrum felis. Nulla nibh lorem, facilisis vel est at, vehicula
          dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo
          suscipit id. Maecenas ut ante quis quam lobortis consequat eu id
          turpis. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. 
        </p>
        <Button text="Register" icon={<FaArrowRight />} />
      </div>
      <Image
        src={"/ff-logo.png"}
        width={200}
        height={200}
        alt="Founders Friday Logo"
        className="w-[500px] h-auto"
      />
    </div>
  );
};

export default StateVisit;
