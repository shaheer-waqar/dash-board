import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DynamicForm from "./form-component/DynamicForm";
import CustomTable from "./CustomTable";

function CustomDataTable({columns,formConfig,intailForm,opertion=true}) {
 

    const newcolumn = opertion ?
    [{...columns,...{
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
            <span onClick={()=>dispatch(delteAddverTise(params.id))} 
            className="bg-red-100 border-red-300 border-2 rounded-[3px]  px-4 py-1 cursor-pointer">
              delete
            </span>
          </div>
        ),
      }}]
      :
      columns
  const adverTiseData = useSelector((state) => state.adverTise.adverTise);
  const dispatch = useDispatch();
  
  let [openForm,setOpenForm] = useState(false);
  const [selectedRowId, setSelectedRowId] = useState(null);

  let [formData,setFormData] = useState(intailForm);

  const handleEdit = (row)=>{
    setFormData(row);
    setSelectedRowId(row.id);
    setOpenForm(true);
  }
  const handelSumbit=(e)=>{
  }
  return (
    <div >
      <button className="text-white px-3 py-1 bg-blue-500 mb-3" onClick={()=>setOpenForm(true)} > + Add</button>
      <CustomTable columns={newcolumn} rows={adverTiseData} />
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

export default CustomDataTable;
