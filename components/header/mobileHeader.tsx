import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../assets/logo.png";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
function MobileHeader() {
  return (
    <header className="absolute top-0 bg-white  border-b border-gray-300 w-full md:hidden">
      <div className="flex items-center my-3 mx-4">
        <Link href={"/"}>
          <Image src={logo} alt="logo" />
        </Link>
        <div className="ml-auto flex px-2 items-center rounded-lg bg-gray-100 w-64 group">
          <CiSearch className="  h-5 w-5 group-focus-within:hidden" />
          <input
            placeholder="Search"
            tabIndex={0}
            className="outline-none bg-transparent ml-2 h-9 w-48  shadow-none "
          />
        </div>
        <Link href={""}>
          <FaRegHeart className="w-6 h-6 ml-5" />
        </Link>
      </div>
    </header>
  );
}

export default MobileHeader;
