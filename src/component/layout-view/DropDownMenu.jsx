import React, { useState } from "react";
import { sideBarData } from "../../data/sideBar/Index";
import DropDownItem from "./DropDownItem";

function DropDownMenu({menuOpen,setMenuOpen}) {

  
  return (
    <>
    <div onClick={()=>setMenuOpen(prev => !prev)}
    className={`fixed h-screen xl:h-auto md:relativ z-[98] bg-[#0000003d] ${menuOpen ? "w-full" : "w-auto"} `}>
    
    </div>
    

    <div className={`w-full z-[100] max-w-[300px] bg-[#304156]
     h-screen xl:left-0 top-0 text-gray-200 overflow-y-scroll scrollbar-thin 
     fixed  ${menuOpen ? "left-0" :"left-[-300px]"} transition-all duration-300 z-[100]
     `}>
      {sideBarData.map((item) =>  (
        <button key={item.label} className="w-full text-left">
          <DropDownItem items={item} setMenuOpen={setMenuOpen} />
        </button>
      ))}
    </div>
     </>
  );
}

export default DropDownMenu;
