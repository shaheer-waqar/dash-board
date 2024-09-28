import React, { useEffect, useState } from "react";
import CustomTable from "../../../component/CustomTable";
import { useDispatch, useSelector } from "react-redux";
import DynamicForm from "../../../component/form-component/DynamicForm";
import { addNickName, deleteAllnicName, deleteNickName } from "../../../store/slices/nicknameRestrictSlice";

function NickNameConfig() {
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 200,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "nicknamerestriction",
      headerName: "Nickname Restriction",
      width: 500,
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
          <span onClick={()=>dispatch(deleteNickName(params.id))} 
          className="bg-red-100 border-red-300 border-2 rounded-[3px]  px-4 py-1 cursor-pointer floa">
            delete
          </span>
        </div>
      ),
    },
  ];

  
  const exhangeData = useSelector((state) => state.nickname.nickname);
  const [data,setData] = useState([]);
  useEffect(()=>{
    setData(exhangeData);
  },[exhangeData]);
  const dispatch = useDispatch();
  
  let [openForm,setOpenForm] = useState(false);

  let [formData,setFormData] = useState({
    Nicknamerestriction:"",
    coin:"",
    id:"",
  });
  const formConfig = [
    {type:"input",label:"Number of Diamonds",name:"nicknamerestriction",inputType:"text"},
  ]
 
  const handelSumbit=(e)=>{
    e.preventDefault();
    

    const timeStamp = Math.floor(Math.random() * 90) + 10;
    const formtedId = timeStamp % 100;
    dispatch(addNickName({...formData,id:formtedId}))
    setOpenForm(false);
    console.log("added");
    setFormData({
      nicknamerestriction:"",
    })
  }
  const [queryInput,setQueryInput] = useState("");

  const querySumbit =()=>{
    const newData = exhangeData.filter(row =>{
      return row.nicknamerestriction.toLowerCase().includes(queryInput.toLowerCase());
    })
    setData(newData)
  }
  const  clearQuesru=()=>{
    setData(exhangeData);
    setQueryInput("");
  }
  return (
    <div >
      <button className="text-white px-3 py-1 rounded-[3px] bg-blue-500 mb-3" onClick={()=>setOpenForm(true)} > + Add</button>
      <div className="w-full flex gap-2 flex-wrap mb-2 ">
        <div className="flex border-[1px] rounded-sm">
          <div className=" bg-slate-100 w-7/12 text-[16px] px-1 border-r-[1px] flex justify-center items-center">Nickname Restriction</div>
          <div><input type="text" value={queryInput} className="w-full outline-none px-2 py-1" placeholder="Nickname Restriction" onChange={(e)=>setQueryInput(e.target.value)}/></div>
        </div>
        <button className="text-white px-3 py-1 rounded-[3px] bg-blue-500" onClick={querySumbit}>Query</button>
        <button className="text-white px-3 py-1 rounded-[3px] bg-red-500" onClick={clearQuesru}>Clear Condition</button>
      </div>
      <CustomTable columns={columns} rows={data} height={400} />
      <button className="bg-red-100 border-red-300 border-2 rounded-[3px]  px-4 py-1 mt-1" onClick={()=>dispatch(deleteAllnicName())}>Delete </button>
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

export default NickNameConfig;
