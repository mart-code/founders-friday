import Image from "next/image";
import Link from "next/link";
import { NavLinks } from "@/utils/constants";
import Button from "./Button";
const Navbar = () => {
  return (
    <header className="bg-[--baseWhite] h-[100px] w-full border-b-[0.5px] border-[--secondary] px-10 py-3">
      <nav className="flex justify-between items-center">
        <Link href={"/"} className="logo flex gap-1 items-center">
          <Image src="/ff-logo.png" alt="logo" width={80} height={80} />
          <span className="font-bold text-2xl">Founder's Friday</span>
        </Link>
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
          <Button text="Register" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
