import Button from "./Button";
import Image from "next/image";

const PreFooter = () => {
  return (
    <div className="border-t border-[--secondary] ">
      <div className="flex justify-start items-center px-20">
        <Image
          src={"/ff-logo.png"}
          width={100}
          height={100}
          alt="logo"
          className="size-14"
        />
        <p className="font-semibold lg:text-xl">
          Founders <br /> Friday
        </p>
      </div>
      <div className="flex flex-col items-center justify-between gap-8 py-[100px]">
        <h1 className="font-bold lg:text-5xl text-center">
          Want To Be A Part Of Abuja’s Biggest Tech Community?
        </h1>
        <Button
          type="button"
          title="Register for Our Next Event"
          icon={
            <Image src="/right-arrow.png" width={50} height={50} alt="arrow" />
          }
          variant="btn-purple-outline"
        />
      </div>
    </div>
  );
};

export default PreFooter;
