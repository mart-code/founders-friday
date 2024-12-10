import Image from "next/image";
import Button from "./Button";
import { BsArrowRight } from "react-icons/bs";
const Register = () => {
  return (
    <div className="flex flex-col relative items-center justify-between gap-2 lg:px-20 px-5 mx-auto w-full min-h-[500px] text-center mt-[180px]">
      <div className="bg-registerBg absolute w-full bg-contain bg-no-repeat lg:top-[40%] md:top-[50%] hidden md:block h-full -z-10"></div>
      <h1 className="font-bold text-5xl ">
        Register And Be Part of Our Community
      </h1>
      <p className="text-[--secondary]">
        Join our community of over 1000+ founders, developers, and tech junkies
        in general. Be inspired by people who live to inspire!
      </p>
      <div className="flex w-full justify-between lg:gap-10 gap-4 mt-[100px]">
        <div className="lg:p-4 border-2 rounded-full border-primary-0">
          <Image
            src={"/Ellipse 309.png"}
            width={500}
            height={500}
            alt="review image"
            className="object-cover w-[100px]"
          />
        </div>
        <div className="lg:p-4 border-2 rounded-full border-[#2f6c62] -translate-y-20">
          <Image
            src={"/Ellipse 309.png"}
            width={500}
            height={500}
            alt="review image"
            className="object-cover w-[100px]"
          />
        </div>
        <div className="lg:p-4 border-2 rounded-full border-[#ff3b30] ">
          <Image
            src={"/Ellipse 309.png"}
            width={500}
            height={500}
            alt="review image"
            className="object-cover w-[100px]"
          />
        </div>
        <div className="lg:p-4 border-2 rounded-full border-[#007aff] ">
          <Image
            src={"/Ellipse 309.png"}
            width={500}
            height={500}
            alt="review image"
            className="object-cover w-[100px]"
          />
        </div>
        <div className="lg:p-4 border-2 rounded-full border-[#ff3b30] ">
          <Image
            src={"/Ellipse 309.png"}
            width={500}
            height={500}
            alt="review image"
            className="object-cover w-[100px]"
          />
        </div>
        <div className="lg:p-4 border-2 rounded-full border-teal-500 -translate-y-20">
          <Image
            src={"/Ellipse 309.png"}
            width={500}
            height={500}
            alt="review image"
            className="object-cover w-[100px]"
          />
        </div>
        <div className="lg:p-4 border-2 rounded-full border-[ff9500]">
          <Image
            src={"/Ellipse 309.png"}
            width={500}
            height={500}
            alt="review image"
            className="object-cover w-[100px]"
          />
        </div>
      </div>
      <Button
        type="button"
        title="Register Now"
        icon={<BsArrowRight />}
        variant="btn-purple-outline"
      />
    </div>
  );
};

export default Register;
