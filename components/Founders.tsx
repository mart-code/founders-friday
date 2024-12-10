import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import Button from "./Button";
const Founders = () => {
  return (
    <div className="mt-[180px] px-20 mx-auto flex justify-between gap-8 items-start basis-1/2 lg:flex-nowrap flex-wrap">
      <div className="flex flex-col items-start justify-center flex-1">
        <p className="font-bold lg:text-3xl text-[--primary800] max-w-[500px]">
          Founders Friday
        </p>
        <h2 className="font-bold lg:text-6xl">
          What Happens At Founders Friday
        </h2>
        <p className="lg:text-2xl font-normal text-[--secondary] leading-7 my-[45px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
          rutrum felis. Nulla nibh lorem, facilisis vel est at, vehicula
          dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo
          suscipit id. Maecenas ut ante quis quam lobortis consequat eu id
          turpis. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. 
        </p>
        <Button
          type="button"
          title="Learn More"
          icon={<BsArrowRight />}
          variant="btn-purple"
        />
      </div>
      <div className="relative min-w-[500px] min-h-[500px] basis-1/2">
        <Image
          src={"/IMG_2501 3.png"}
          width={500}
          height={500}
          alt="FOunders image"
          className="absolute top-0 right-0 w-[380px] h-[470px]"
        />
        <Image
          src={"/IMG_2519 2.png"}
          width={500}
          height={500}
          alt="FOunders image"
          className="absolute top-[40%] right-[30%] w-[380px] h-[470px]"
        />
      </div>
    </div>
  );
};

export default Founders;
