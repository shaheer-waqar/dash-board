import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Form, NavLink } from "react-router-dom";
import { addPage } from "../../store/slices/receenPage";

function DropDownItem({ items, level = 1,setMenuOpen }) {
  const [isOpen, setIsOpen] = useState(false);
  const data = useSelector(state => state.recenPage.recenPage)
  const dispatch = useDispatch();

  const toggleHandler = () => {
    setIsOpen((prev) => !prev);
  };


  const hoverColor =
    level === 1
      ? "hover:bg-[#263445]"
      : "hover:bg-[#001528]"; 

  const paddingLeft = `${level * 15}px`; 

  const [recentpage,setRecentPage] = useState([]);

  const recentPageHandler = (link,path)=>{
    const obj ={link,path}
    

    dispatch(addPage(obj));
    // console.log(data)
  }
  return (
    <>
      {items.subItems ? (
        <div className={`transition-all duration-300 w-full`}>
          <div
            className={`text-[14px] flex justify-between items-center px-2 py-3 w-full ${hoverColor}`} 
            style={{ paddingLeft }} 
            onClick={toggleHandler}
          >
            <div className="flex items-center gap-2">
              {items.icons && <span className="text-lg">{items.icons}</span>}
              {items.label}
            </div>
            <div
              className={`${
                isOpen ? "rotate-180" : "rotate-0"
              } transition-all duration-200`}
            >
              <IoIosArrowDown />
            </div>
          </div>
          <div
            className={`flex flex-col text-[13px] transition-all w-full duration-300 ease-in-out overflow-hidden ${
              isOpen ? "max-h-[1000px]" : "max-h-0"
            }`}
          >
            {isOpen && items.subItems.map((subItem) => (
              <DropDownItem
                key={subItem.label}
                items={subItem}
                level={level + 1} 
              />
            ))}
          </div>
        </div>
      ) : (
        <NavLink
          to={items.path}
          // onClick={()=>setMenuOpen(false)}
          className={({isActive})=>`flex items-center gap-2 px-2 py-3 w-full ${hoverColor}
          ${isActive  &&"text-blue-600"}
          `}
          style={{ paddingLeft }}
          onClick={()=>recentPageHandler(items.label,items.path)}
        >
          {items.icons && <span className="text-xl">{items.icons}</span>}
          {items.label}
        </NavLink>
      )}
    </>
  );
}

export default DropDownItem;
