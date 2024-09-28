import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DynamicForm from "../../component/form-component/DynamicForm";
import CustomTable from "../../component/CustomTable";
import {
  addAdmin,
  deleteAdmin,
  editAdmin,
} from "../../store/slices/AdminManageSlice";
import { addSystemMsg, deleteSystemMsg } from "../../store/slices/systemMessageSlice";

function SystemManageMessage() {
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "title",
      headerName: "Title",
      width: 120,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "content",
      headerName: "Contenet ",
      width: 90,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "coverimg",
      headerName: "Cover image",
      width: 120,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <div className="flex items-center justify-center">
          <img
            src={params.value}
            className={`w-[50px] ${!params.value && "border h-10"}`}
            alt=""
          />
        </div>
      ),
    },
    {
      field: "type",
      headerName: "Type",
      width: 100,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "link",
      headerName: "Link",
      width: 100,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "releasedate",
      headerName: "Release Date",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "userid",
      headerName: "User ID",
      width: 100,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "operations",
      headerName: "Operations",
      width: 140,
      headerAlign: "center",
      resizable: false,
      sortable: false,
      filterable: false,
      hidetable: false,
      renderCell: (params) => (
        <div
          className="w-full flex justify-center "
          onClick={(e) => e.stopPropagation()}
        >
          <span
            onClick={() => dispatch(deleteSystemMsg(params.id))}
            className="bg-red-100 border-red-300 border-2 rounded-[3px]  px-4 py-1 cursor-pointer"
          >
            delete
          </span>
        </div>
      ),
    },
  ];
  const exhangeData = useSelector((state) => state.systemMsg.systemMsg);
  const dispatch = useDispatch();

  let [openForm, setOpenForm] = useState(false);

  let [formData, setFormData] = useState({
    title: "",
    content: "",
    userid: "",
    type: "",
    coverimg: "",
    releasedate:""
  });
  const formConfig = [
    { type: "input", label: "Title", name: "title", inputType: "text" },
    { type: "input", label: "Content", name: "content", inputType: "text" },
    { type: "input", label: "User Id", name: "userid", inputType: "number" },
    {
      type: "radio",
      label: "Type",
      inputType: "radio",
      options: [
        { label: "Text", name: "type", id: "txt", value: "text" },
        { label: "Rich Text", name: "type", id: "richtxt", value: "rich text" },
      ],
    },
    { type: "file", label: "Cover Image", name: "coverimg", inputType: "file" },
  ];
  const fileHandler = (e) => {
    const avatlink = e.target.files[0];
    const url = URL.createObjectURL(avatlink);
    setFormData({ ...formData, coverimg: url });
    console.log(formData)
  };

  const handelSumbit = (e) => {
    e.preventDefault();

    const timeStamp = Math.floor(Math.random() * 90) * 20;
    const formtedId = timeStamp % 100;
    const d = new Date()
    dispatch(addSystemMsg({ ...formData, id: formtedId,releasedate:d.toLocaleString()}));
    console.log(formData)
    setOpenForm(false);
    console.log("added");
    setFormData({
      title: "",
      content: "",
      userid: "",
      type: "",
      coverimg: "",
    });
  };
  return (
    <div>
      <button
        className="text-white px-3 py-1 bg-blue-500 mb-3"
        onClick={() => setOpenForm(true)}
      >
        {" "}
        + Add
      </button>
      <CustomTable columns={columns} rows={exhangeData} />
      <div
        onClick={() => setOpenForm(false)}
        className={`fixed  top-0 left-0 z-[999] w-full h-screen bg-[#00000049] block ${
          !openForm && "hidden"
        }`}
      ></div>
      <div
        className={`w-full max-w-[800px] absolute right-[50%] -translate-x-[-50%] bg-white z-[1000]  ${
          openForm ? "top-10 transition-all duration-300 " : "top-[-1000px]"
        } `}
      >
        <h1 className="px-5 py-3">Create</h1>
        <DynamicForm
          formField={formConfig}
          formData={formData}
          setFormData={setFormData}
          handelSumbit={handelSumbit}
          setOpenForm={setOpenForm}
          fileHandler={fileHandler}
        />
      </div>
    </div>
  );
}

export default SystemManageMessage;
