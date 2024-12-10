"use client";
import Image from "next/image";
import Link from "next/link";
import { NavLinks } from "@/utils/constants";
import Button from "./Button";
import { BsArrowRight } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <header className="bg-[--baseWhite] h-[100px] w-full border-b-[0.5px] border-[--secondary] lg:px-20 px-5 py-3">
      <nav className="flex justify-between items-center object-center  h-full">
        <Link href={"/"} className="logo flex gap-1 items-center z-20">
          <Image
            src="/ff-logo.png"
            alt="logo"
            width={80}
            height={80}
            className="xl:size-20 size-10 "
          />
          <span className="font-bold xl:text-2xl lg:text-xl text-lg text-nowrap">
            Founder's Friday
          </span>
        </Link>
        <div className="navLinks hidden lg:flex justify-end gap-10 items-center xl:text-[24px] lg:text-lg md:text-md text-base font-medium ">
          <ul className="flex gap-4">
            {NavLinks.map((link: any) => (
              <Link
                href={link.link}
                key={link.key}
                className="text-[--foreground] text-nowrap cursor-pointer transition-all hover:text-[--primary]"
              >
                {link.name}
              </Link>
            ))}
          </ul>
          <Button
            type="button"
            title="Register"
            icon={<BsArrowRight />}
            variant="btn-purple-outline"
            full
          />
          {/* <Button text="Register" icon={<BsArrowRight />} color="primary600" /> */}
        </div>
        {/* Hamburger */}
        <div onClick={handleClick} className="lg:hidden z-20">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile nav */}
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-base-White text-base-Black flex flex-col justify-evenly z-10 items-center"
          }
        >
          {NavLinks.map((link: any) => (
            <Link
              href={link.link}
              key={link.key}
              className="text-[--foreground] text-nowrap cursor-pointer transition-all hover:text-[--primary]"
            >
              {link.name}
            </Link>
          ))}
          <Button
            type="button"
            title="Register"
            icon={<BsArrowRight />}
            variant="btn-purple-outline"
            full
          />
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
