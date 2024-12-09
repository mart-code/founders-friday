import { NavLinks } from "@/utils/constants";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="bg-[--baseWhite] h-[100px] w-full border-t-[0.5px] border-[--secondary] px-20 py-3">
      <div className="flex justify-between items-center">
        <div className="flex gap-4 text-lg">
          <Link
            href={"#"}
            className="rounded-full bg-[--seed] text-[--baseWhite] p-2"
          >
            <FaFacebook />
          </Link>
          <Link
            href={"#"}
            className="rounded-full bg-[--seed] text-[--baseWhite] p-2"
          >
            <FaInstagram />
          </Link>
          <Link
            href={"#"}
            className="rounded-full bg-[--seed] text-[--baseWhite] p-2"
          >
            <BsTwitterX />
          </Link>
        </div>
        <div className="navLinks flex justify-items-end gap-20 items-center lg:text-[24px] md:text-lg sm:text-sm font-medium ">
          <ul className="flex gap-4">
            {NavLinks.map((link: any) => (
              <Link
                href={link.link}
                key={link.key}
                className="text-[--foreground] cursor-pointer transition-all hover:text-[--primary]"
              >
                {link.name}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
