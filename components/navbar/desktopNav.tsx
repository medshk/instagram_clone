"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import profilePic from "../../assets/profilePic.jpg";

import { navigationList } from "../../static/navigationList";
import NavItem from "./navItem";
import Image from "next/image";
import logo from "../../assets/logo.png";
import { profile } from "console";

function DesktopNav() {
  const [isFull, setIsFull] = useState(true);
  const [currentLink, setCurrentLink] = useState<String>("");
  // todo : --add a child component to nav which appears when nav shrinks cause
  //        of event click on messages and notifications buttons
  //        -- add notifications and messages compo as well as their inside compos
  //        -- add state to nav compo for open close
  //        -- add the logic to diff between rendering notifications compo and messages compo
  //           (assign  a compo to a state or variable and coditionaly render it ps: making of a costum hook is to consider )
  const handleClick = (link: String) => {
    registerLink(link);
    setIsFull((isfull) => !isfull);
  };

  // store current link in state
  const registerLink = (link: String) => setCurrentLink(link);
  return (
    <div>
      <nav className={`nav ${isFull ? "lg:w-64" : "lg:w-20"}`}>
        <div className="m-4">
          <div className="text-xl  mt-10 ml-2 relative ">
            <Link href={""} className="">
              <FaInstagram
                className={`nav-icon transition ease-linear duration-200 md:scale-100 ${
                  isFull ? "lg:scale-0" : "lg:scale-100"
                } `}
              />

              <Image
                src={logo}
                className={`absolute  top-0 md:hidden ${
                  isFull ? "lg:inline-block" : "lg:hidden"
                }`}
                alt="instagram logo"
              />
            </Link>
          </div>
          <ul className="mt-10 flex flex-col gap-3">
            {navigationList.map(
              ({
                id,
                title,
                hasLink,
                solidIcon: SolidIcon,
                outlineIcon: OutlineIcon,
              }) =>
                hasLink ? (
                  <li
                    className="nav-btn"
                    key={id}
                    onClick={() => registerLink(id)}
                  >
                    <Link href={""}>
                      <NavItem title={title} isFull={isFull}>
                        {currentLink === id ? (
                          <SolidIcon className="nav-icon" />
                        ) : (
                          <OutlineIcon className="nav-icon" />
                        )}
                      </NavItem>
                    </Link>
                  </li>
                ) : (
                  <li
                    className="nav-btn"
                    key={id}
                    onClick={() => handleClick(id)}
                  >
                    <NavItem title={title} isFull={isFull}>
                      {currentLink === id ? (
                        <SolidIcon className="nav-icon" />
                      ) : (
                        <OutlineIcon className="nav-icon" />
                      )}
                    </NavItem>
                  </li>
                )
            )}
            <li className="nav-btn" onClick={() => registerLink("profile")}>
              <Link href={"/"} className="flex items-center">
                <NavItem title="Profile" isFull={isFull}>
                  <Image
                    src={profilePic}
                    className={`nav-icon rounded-full border-black ${
                      currentLink === "profile" ? "border-2" : "border-0"
                    }`}
                    alt="profile pic"
                  />
                </NavItem>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className={`  slide-bar ${isFull ? "w-0 " : "w-96"} `}></div>
    </div>
  );
}

export default DesktopNav;
