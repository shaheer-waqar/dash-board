import React, { useState } from "react";
import CustomTable from "../../../component/CustomTable";
import { useDispatch, useSelector } from "react-redux";
import { addAdvertise, delteAddverTise, editAdverise } from "../../../store/slices/AdvertiseSlice";
import DynamicForm from "../../../component/form-component/DynamicForm";

function AdvertiseConfig() {
  const columns = [
    {
      field: "id",
      headerName: "Number",
      width: 90,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "title",
      headerName: "Ttile",
      width: 290,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <span
          style={{
            color: "blue",
            textAlign: "center",
            width: "100%",
          }}
        >
          {params.value}
        </span>
      ),
    },
    {
      field: "displayposition",
      headerName: "Display Position",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "sort",
      headerName: "Sort",
      type: "number",
      width: 90,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "type",
      headerName: "Type",
      width: 130,
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
          <span onClick={()=>dispatch(delteAddverTise(params.id))} 
          className="bg-red-100 border-red-300 border-2 rounded-[3px]  px-4 py-1 cursor-pointer">
            delete
          </span>
        </div>
      ),
    },
  ];


  const adverTiseData = useSelector((state) => state.adverTise.adverTise);
  const dispatch = useDispatch();
  
  let [openForm,setOpenForm] = useState(false);
  const [selectedRowId, setSelectedRowId] = useState(null);

  let [formData,setFormData] = useState({
    title:"",
    displayposition:"",
    type:"",
    webuUrl:"",
    sort:"",
    id:"",
  });
  const formConfig = [
    {type:"input",label:"Title",name:"title",inputType:"text"},
    {type:"file",label:"image",name:"files",inputType:"text"},
    {type:"dropdown",label:"Display Position",name:"displayposition",options:["Carousel","Startup Advertisement"]},
    {type:"dropdown",label:"Type",name:"type",options:["Webpage URL link","Ranking list app jump"]},
    {type:"input",label:"Webpage URL link",name:"webuUrl",inputType:"text"},
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
      dispatch(editAdverise(formData))
    }else{
      const timeStamp = Date.now()
      const formtedId = timeStamp % 100;
      dispatch(addAdvertise({...formData,id:formtedId}))
    }
    setOpenForm(false);
    setSelectedRowId(null);
    console.log("added");
    setFormData({
      title:"",
      displayposition:"",
      type:"",
      webuUrl:"",
      sort:"",
      id:"",
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

export default AdvertiseConfig;
