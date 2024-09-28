import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DynamicForm from "../../../component/form-component/DynamicForm";
import CustomTable from "../../../component/CustomTable";
import { addName, deleteName, editName } from "../../../store/slices/varifiedNameSlice";

function VerifiedNameList() {
  const columns = [
    {
      field: "id",
      headerName: "Number",
      width: 120,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "name",
      headerName: "Name",
      width: 500,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "sort",
      headerName: "Sort",
      type: "number",
      width: 150,
      headerAlign: "center",
      align: "center",
    },

    {
      field: "operations",
      headerName: "Operations",
      width: 200,
      headerAlign: "center",
      resizable: false,
      sortable:false,
      filterable: false,
      hidetable:false,
      renderCell: (params) => (
        <div className="w-full flex justify-center "onClick={(e)=>e.stopPropagation()}>
          <span 
          onClick={()=>handleEdit(params.row)}
          className="mr-1 bg-blue-100 border-blue-300 border-2 rounded-[3px]  px-4 py-1 cursor-pointer ">
            edit
          </span>
          <span onClick={()=>dispatch(deleteName(params.id))} 
          className="bg-red-100 border-red-300 border-2 rounded-[3px]  px-4 py-1 cursor-pointer">
            delete
          </span>
        </div>
      ),
    },
  ];


  const rowData = useSelector((state) => state.verifiedName.verifiedName);
  const dispatch = useDispatch();
  
  let [openForm,setOpenForm] = useState(false);
  const [selectedRowId, setSelectedRowId] = useState(null);

  let [formData,setFormData] = useState({
    name:"",
    sort:"",
    id:"",
  });
  const formConfig = [
    {type:"input",label:"Name",name:"name",inputType:"text"},
    {type:"input",label:"Sort",name:"sort",inputType:"number"},

  ]
  const handleEdit = (row)=>{
    setFormData(row);
    setSelectedRowId(row.id);
    setOpenForm(true);
  }
  const handelSumbit=(e)=>{
    e.preventDefault();
    if(selectedRowId){
      dispatch(editName(formData))
    }else{
      const timeStamp = Date.now()
      const formtedId = timeStamp % 100;
      dispatch(addName({...formData,id:formtedId}))
    }
    setOpenForm(false);
    setSelectedRowId(null);
    console.log("added");
    setFormData({
      name:"",
      sort:"",
      id:"",
    })
  }
  return (
    <div >
      <button className="text-white px-3 py-1 bg-blue-500 mb-3" onClick={()=>setOpenForm(true)} > + Add</button>
      <CustomTable columns={columns} rows={rowData} />
      <div
       onClick={()=>setOpenForm(false)}
       className={`fixed  top-0 left-0 z-[999] w-full h-screen bg-[#00000049] block ${!openForm && "hidden"}`}></div>
      <div className={`w-full max-w-[800px] absolute right-[50%] -translate-x-[-50%] bg-white z-[1000]  ${openForm ? "top-10 transition-all duration-300 " : "top-[-1000px]"} `}>
        <h1 className="px-5 py-3">Create</h1>
        <DynamicForm 
        formField={formConfig}
        formData={formData}
        setFormData={setFormData}
        handelSumbit={handelSumbit}
        setOpenForm={setOpenForm}
        />
      </div>
    </div>
  );
}

export default VerifiedNameList;


