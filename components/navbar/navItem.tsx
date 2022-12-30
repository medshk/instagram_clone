import React, { ReactNode } from "react";

interface InavItem {
  isFull: boolean;
  title: string;
  children: ReactNode;
}

export default function NavItem({ isFull, children, title }: InavItem) {
  return (
    <button className=" flex">
      {children}
      <label
        className={`btn-label ${isFull ? "lg:inline-block" : "lg:hidden"} `}
      >
        {title}
      </label>
    </button>
  );
}
