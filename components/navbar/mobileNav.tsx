"use client";
import React, { useState } from "react";
import {
  HomeIcon,
  PlusCircleIcon,
  MagnifyingGlassIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { mobileNavigationsList as list } from "../../static/navigationList";
import profile from "../../assets/profilePic.jpg";
import Image from "next/image";

function MobileNav() {
  const [currentLink, setCurrentLink] = useState<String>("");

  const handleClick = (link: String) => setCurrentLink(link);
  return (
    <nav className="fixed bottom-0 bg-white w-full h-[7vh] md:hidden">
      <ul className="flex row justify-between items-center mx-14 mt-3 mb-1">
        {list.map(
          ({ id, title, solidIcon: SolidIcon, outlineIcon: OutlineIcon }) => (
            <li className="" key={id} onClick={() => handleClick(id)}>
              <Link href={"/"} className="">
                {currentLink === id ? (
                  <SolidIcon className="w-7 h-7" />
                ) : (
                  <OutlineIcon className="w-7 h-7" />
                )}
              </Link>
            </li>
          )
        )}

        <li onClick={() => handleClick("profile")}>
          <Link href={"/"} className="">
            <Image
              src={profile}
              className={`w-7 h-7 rounded-full border-black ${
                currentLink === "profile" ? "border-2" : "border-0"
              }`}
              alt="profile pic"
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default MobileNav;
