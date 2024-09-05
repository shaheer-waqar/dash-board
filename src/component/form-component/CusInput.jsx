import React from "react";

function CusInput({ label, name, onchangeHandler,value }) {
  return (
    <div className="flex gap-4 items-center text-right">
      <label className="w-2/12">{label}</label>
      <input
        name={name}
        type="text"
        className="border-[1px] w-9/12 px-2 py-1 rounded-md outline-0"
        onChange={onchangeHandler}
        value={value}
      />
    </div>
  );
}

export default CusInput;
