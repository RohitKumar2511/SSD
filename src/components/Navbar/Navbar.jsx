import { Menu } from "lucide-react";
import Image from "next/image";
import React from "react";

export const Navbar = () => {
  const navOptions = [
    {
      name: "About Us",
      link: "#",
    },
    {
      name: "Contact Us",
      link: "#",
    },
    {
      name: "Services",
      link: "#",
    },
  ];
  return (
    <div className="w-full h-16 p-2 bg-white flex items-center justify-between border-b border-gray-200">
      <div className="w-[100%] h-[100%] flex items-center justify-center gap-x-2 pointer-events-none">
        <div className="w-10 h-full relative">
          <Image
            src="/ssdLogo.jpg"
            alt="Logo"
            layout="fill"
            objectFit="contain"
            className="aspect-square"
          />
        </div>
        <div className="flex items-start flex-col text-sm font-bold">
          <span className="-m-1 uppercase">SSD</span>
          <span className="-m-1 text-blue-500 uppercase">Engineering</span>
          <span className="-m-1 uppercase">Works</span>
        </div>
      </div>
      <div className="w-full h-full flex items-center justify-center md:gap-x-6">
        <div className="hidden md:flex justify-center gap-x-6 w-full">
          {navOptions.map((option) => (
            <span className="uppercase hover:text-blue-500 cursor-pointer">
              {option.name}
            </span>
          ))}
        </div>
        <Menu size={24} className="cursor-pointer md:hidden" />
      </div>
    </div>
  );
};