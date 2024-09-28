import React from "react";
import { GrFormFolder } from "react-icons/gr";

function DynamicForm({
  formField,
  formData,
  setFormData,
  handelSumbit,
  setOpenForm,
  fileHandler,
}) {
  const onchangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <form
      className="w-[100%] m-auto flex flex-col gap-4 py-4"
      onSubmit={handelSumbit}
    >
      {formField.map((field, index) => {
        switch (field.type) {
          case "input":
            return (
              <div className="flex gap-4 items-center text-right" key={index}>
                <label className="w-2/12">{field.label}</label>
                <input
                  className="border-[1px] w-9/12 px-2 py-1 rounded-md outline-0"
                  name={field.name}
                  value={formData[field.name] || ""}
                  onChange={onchangeHandler}
                  type={field.inputType || ""}
                />
              </div>
            );
          case "dropdown":
            return (
              <div className="flex items-center gap-4" key={index}>
                <label className="w-2/12 text-right ">{field.label}</label>
                <select
                  required
                  className="border-[1px] py-2 outline-none w-4/12"
                  onChange={onchangeHandler}
                  name={field.name}
                  value={formData[field.name]}
                >
                  <option value="">--select--</option>
                  {field.options.map((val) => (
                    <option value={val} key={val}>
                      {val}
                    </option>
                  ))}
                </select>
              </div>
            );
          case "file":
            return (
              <div className="flex w-full gap-4" key={index}>
                <label className="pt-4 w-2/12 text-right">Image</label>
                <div className="flex items-center justify-center w-9/12 overflow-hidden">
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-52 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 "
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                    <input
                      id="dropzone-file"
                      type="file"
                      className="hidden"
                      onChange={fileHandler && fileHandler}
                    />
                  </label>
                </div>
              </div>
            );
          case "radio":
            return (
              <div className="flex gap-4 w-full" key={index}>
                <label className=" text-right w-2/12">
                  Packing and filling
                </label>
                <div>
                  <div className="border-[1px] rounded-md overflow-hidden">
                    {field.options.map((val, ind) => {
                      return (
                        <div className="inline-flex" key={ind}>
                          <input
                            type="radio"
                            name={val.name}
                            id={val.id}
                            className="peer"
                            hidden
                            onChange={onchangeHandler}
                            value={val.value}
                            // checked={formData[field.name] == val.value}
                          />
                          <label
                            htmlFor={val.id}
                            className="px-4 py-1 peer-checked:bg-blue-500 peer-checked:text-white text-center"
                          >
                            {val.label}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          default:
            return null;
        }
      })}
      <div className="flex w-full justify-center gap-2">
        <button
          type="button"
          onClick={() => setOpenForm(false)}
          className="bg-white border-[1px] hover:bg-blue-100 hover:text-blue-400 px-2 py-2 rounded-[5px]"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-blue-500 text-white hover:bg-blue-400 px-2 py-2 rounded-[5px] "
        >
          Confirm
        </button>
      </div>
    </form>
  );
}

export default DynamicForm;
