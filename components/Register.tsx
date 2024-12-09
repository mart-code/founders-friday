import Image from "next/image";
import Button from "./Button";
import { BsArrowRight } from "react-icons/bs";
const Register = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-2 px-20 mx-auto w-full min-h-[500px] text-center">
      <h1 className="font-bold text-5xl ">
        Register And Be Part of Our Community
      </h1>
      <p className="text-[--secondary]">
        Join our community of over 1000+ founders, developers, and tech junkies
        in general.  Be inspired by people who live to inspire!
      </p>
      <div className="flex w-full justify-between gap-10 mt-[100px]">
        <div className="p-4 border-2 rounded-full border-[--seed]">
          <Image
            src={"/Ellipse 309.png"}
            width={500}
            height={500}
            alt="review image"
            className="object-cover w-[100px]"
          />
        </div>
        <div className="p-4 border-2 rounded-full border-[--seed] -translate-y-20">
          <Image
            src={"/Ellipse 309.png"}
            width={500}
            height={500}
            alt="review image"
            className="object-cover w-[100px]"
          />
        </div>
        <div className="p-4 border-2 rounded-full border-[--seed] -translate-y-10">
          <Image
            src={"/Ellipse 309.png"}
            width={500}
            height={500}
            alt="review image"
            className="object-cover w-[100px]"
          />
        </div>
        <div className="p-4 border-2 rounded-full border-[--seed] -translate-y-10">
          <Image
            src={"/Ellipse 309.png"}
            width={500}
            height={500}
            alt="review image"
            className="object-cover w-[100px]"
          />
        </div>
        <div className="p-4 border-2 rounded-full border-[--seed] -translate-y-10">
          <Image
            src={"/Ellipse 309.png"}
            width={500}
            height={500}
            alt="review image"
            className="object-cover w-[100px]"
          />
        </div>
        <div className="p-4 border-2 rounded-full border-[--seed] -translate-y-20">
          <Image
            src={"/Ellipse 309.png"}
            width={500}
            height={500}
            alt="review image"
            className="object-cover w-[100px]"
          />
        </div>
        <div className="p-4 border-2 rounded-full border-[--seed]">
          <Image
            src={"/Ellipse 309.png"}
            width={500}
            height={500}
            alt="review image"
            className="object-cover w-[100px]"
          />
        </div>
      </div>
      <Button text='Register Now' icon={<BsArrowRight/>}/>
    </div>
  );
};

export default Register;
