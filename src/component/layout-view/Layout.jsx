import React, { useState } from "react";
import Sidebar from "./Sidebar";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

function Layout() {
  const [menuOpen,setMenuOpen] = useState(false);
  return (
    <>
      <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="flex flex-col items-end justify-end px-3  pt-10 ">
        <div className="w-full xl:max-w-[calc(100%-300px)] pt-[80px]">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Layout;
