import React from "react";
import {
  HomeIcon,
  PlusCircleIcon,
  MagnifyingGlassIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

function MobileNav() {
  return (
    <nav className="fixed bottom-0 bg-slate-200 w-full h-[9vh] md:hidden">
      <ul className="flex row justify-between items-center mx-4 mt-2">
        <li className="">
          <Link href={"/"} className="">
            <HomeIcon className="w-8 h-8" />
          </Link>
        </li>
        <li className="">
          <Link href={"/"} className="">
            <MagnifyingGlassIcon className="w-8 h-8" />
          </Link>
        </li>
        <li className="">
          <Link href={"/"} className="">
            <PlusCircleIcon className="w-8 h-8" />
          </Link>
        </li>
        <li className="">
          <Link href={"/"} className="">
            <HeartIcon className="w-8 h-8" />
          </Link>
        </li>
        <li className="">
          <Link href={"/"} className="">
            <span className="block flex justify-center h-8 w-8 rounded-full border-2 border-black">
              {" "}
              1
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default MobileNav;
