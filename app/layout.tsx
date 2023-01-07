import React from "react";
import Header from "../components/header/header";
import MobileHeader from "../components/header/mobileHeader";
import DesktopNav from "../components/navbar/desktopNav";
import MobileNav from "../components/navbar/mobileNav";
import "../styles/globals.css";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head></head>
      <body className="h-screen ralative bg-yellow-500">
        <header>
          <Header />
          <MobileHeader />
        </header>
        <MobileNav />
        {/* <DesktopNav /> */}
        <main className=" bg-gray-50 mt-14 md:mt-0 ml:0 md:ml-64 overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}

export default RootLayout;
