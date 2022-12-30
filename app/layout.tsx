import React from "react";
import Header from "../components/header/header";
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
        </header>
        <MobileNav />
        <DesktopNav />
        <main className="bg-red-400">{children}</main>
      </body>
    </html>
  );
}

export default RootLayout;
