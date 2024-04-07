"use client";

import Link from "next/link";
import { TbMessage2Minus, TbPhoneCall } from "react-icons/tb";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { VscMenu } from "react-icons/vsc";

import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

const navLinks = ["Portal", "Calendar", "Alumni", "Events", "Contact Us"];
const mainMenu = [
  "Home",
  "About US",
  "Pages",
  "Programs",
  "Admission",
  "Student Life",
  "International",
];

const components = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];
const icons = [
  { url: "#", icon: FaFacebookF },
  { url: "#", icon: FaXTwitter },
  { url: "#", icon: FaInstagram },
  { url: "#", icon: FaLinkedinIn },
  { url: "#", icon: FaYoutube },
];
const NavLinks = () => {
  return (
    <div className="w-full px-5 relative">
      <div className="absolute top-0 hidden">
        <div className="flex xl:col-span-4 col-span-6  items-center justify-between font-medium lg:text-base text-xs">
          <div className="w-full  flex justify-between xl:space-x-12 mr-20">
            {mainMenu.map((link, index) => (
              <Link key={index} href="/">
                {link}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-10">
            <button>
              <TbMessage2Minus size={20} />
            </button>
            <button>
              <TbMessage2Minus size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* FIXED MENU */}
      <div className="w-full top_header grid grid-rows-2 gap-3 grid-cols-6 py-2 z-[999] font-inter">
        <div className="w-full row-span-2 col-span-1"></div>
        <div className="xl:flex hidden items-center col-span-2 gap-5 text-sm font-light ">
          <div className="flex items-center gap-2">
            <TbMessage2Minus />
            <span>hello@iugb.edu.ci</span>
          </div>
          <div className="flex items-center gap-2">
            <TbPhoneCall />
            <span>+132313242354</span>
          </div>
        </div>
        <div className="flex items-center gap-8 xl:my-5 my-2 xl:text-sm text-xs justify-end xl:col-span-3 col-span-5">
          {navLinks.map((link, index) => (
            <Link
              className={index === 4 && `xl:pl-10 pl-2 xl:ml-5 ml-2 border-l`}
              key={link}
              href="/"
            >
              {link}
            </Link>
          ))}
        </div>
        <div className="social justify-start col-span-1 hidden xl:flex items-center gap-2 xl:gap-5">
          {icons.map((icon) => (
            <Link
              href={icon.url}
              key={icon.icon}
              className="hover:border hover:rounded-full hover:text-white p-1 hover:bg-blue-900"
            >
              <icon.icon />
            </Link>
          ))}
        </div>
        <div className="flex xl:col-span-4 col-span-6 items-center justify-between font-medium lg:text-base text-xs">
          <div className="w-full flex justify-end xl:gap-10 gap-5 mr-20"></div>
          <div className="flex items-center gap-10">
            <button>
              <FiSearch size={20} />
            </button>
            <button>
              <VscMenu size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
const ListItem = ({ className, children, title, ...props }, forwardedRef) => (
  <li>
    <NavigationMenu.Link asChild>
      <a
        className={
          ("focus:shadow-[0_0_0_2px] focus:shadow-violet7 hover:bg-mauve3 block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors",
          className)
        }
        {...props}
        ref={forwardedRef}
      >
        <div className="text-violet12 mb-[5px] font-medium leading-[1.2]">
          {title}
        </div>
        <p className="text-mauve11 leading-[1.4]">{children}</p>
      </a>
    </NavigationMenu.Link>
  </li>
);

export default NavLinks;
