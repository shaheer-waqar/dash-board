import React, { useState } from "react";
import CustomTable from "../../../component/CustomTable";
import { useDispatch, useSelector } from "react-redux";
import DynamicForm from "../../../component/form-component/DynamicForm";
import { addEncrypKey, deleteEncrypKey, editEncrypKey } from "../../../store/slices/encryptionKeySlce";

function EncryptionConfig() {
  const columns = [
    {
      field: "id",
      headerName: "Number",
      width: 90,
      headerAlign: "center",
      align: "center",
    },

    {
      field: "encryptkey",
      headerName: "Encryption key configuration",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "packing",
      headerName: "Packing and filling",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "valid",
      headerName: "wheter toEnable",
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
        <div className="w-ful flex justify-center "onClick={(e)=>e.stopPropagation()}>
          <span 
          onClick={()=>handleEdit(params.row)}
          className="mr-1 bg-blue-100 border-blue-300 border-2 rounded-[3px]  px-4 py-1 cursor-pointer ">
            edit
          </span>
          <span onClick={()=>dispatch(deleteEncrypKey(params.id))} 
          className="bg-red-100 border-red-300 border-2 rounded-[3px]  px-4 py-1 cursor-pointer">
            delete
          </span>
        </div>
      ),
    },
  ];

  let [formData,setFormData] = useState({
    encryptkey:"",
    packing:"",
    id:"",
    valid:"",
  });
  
  const formConfig = [
    {type:"input",label:"Encryption key configuration",name:"encryptkey",inputType:"number"},
    {type:"radio",label:"Packing and filling",inputType:"radio",options:[
      {label:"Yes",name:"packing",id:"yes",value:"Yes"},
      {label:"No",name:"packing",id:"no",value:"No"}
    ]},
    {type:"radio",label:"Whether to Enable",inputType:"radio",options:[
      {label:"Valid",name:"valid",id:"valid",value:"Yes"},
      {label:"Invalid",name:"valid",id:"invalid",value:"No"}
    ]},

  ]
  const adverTiseData = useSelector((state) => state.enctryptKey.enctryptKey);
  const dispatch = useDispatch();
  
  let [openForm,setOpenForm] = useState(false);
  const [selectedRowId, setSelectedRowId] = useState(null);

  const handleEdit = (row)=>{
    setFormData(row);
    setSelectedRowId(row.id);
    setOpenForm(true);
  }
  const handelSumbit=(e)=>{
    e.preventDefault();
    if(selectedRowId){
      dispatch(editEncrypKey(formData))
    }else{
      const timeStamp = Date.now()
      const formtedId = timeStamp % 100;
      dispatch(addEncrypKey({...formData,id:formtedId}))
    }
    setOpenForm(false);
    setSelectedRowId(null);
    console.log("added");
    setFormData({
      encryptkey:"",
      packing:"",
      id:"",
      valid:"",
    })
  }
  return (
    <div >
      <button className="text-white px-3 py-1 bg-blue-500 mb-3" onClick={()=>setOpenForm(true)} > + Add</button>
      <CustomTable columns={columns} rows={adverTiseData} />
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

export default EncryptionConfig;
