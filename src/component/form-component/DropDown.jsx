import React from "react";

function DropDown({ label, options,name ,onchangeHandler,value}) {
  return (
    <div className="flex items-center gap-4">
      <label className="w-2/12 text-right ">{label}</label>
      <select
        className="border-[1px] py-2 outline-none w-4/12"
        onChange={onchangeHandler}
        name={name}
        value={value}
      >
        {options.map((val) => (
          <option value={val} key={val}>
            {val}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropDown;
