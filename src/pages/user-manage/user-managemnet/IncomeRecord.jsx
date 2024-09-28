import React, { useEffect, useState } from "react";
import CustomTable from "../../../component/CustomTable";

function IncomeRecord () {
  const columns = [
    {
      field: "id",
      headerName: "Number",
      width: 100,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "user",
      headerName: "User",
      width: 180,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "numofchanges",
      headerName: "Number of changes",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "content",
      headerName: "Content",
      width: 200,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "category",
      headerName: "Category",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "addtime",
      headerName: "Add Time",
      width: 180,
      headerAlign: "center",
      align: "center",
    },

  ];

  
  const rowdata = [
    {id:"553329",user:"VICKEY(166968)",numofchanges:"-1000",content:"10IndividualDeer Fairy",category:"Gift",addtime:"2024-09-11 09:02:17"},
    {id:"553328",user:"VICKEY(166968)",numofchanges:"-1000",content:"10IndividualDeer Fairy",category:"Gift",addtime:"2024-09-11 09:02:17"},
    {id:"553327",user:"VICKEY(166968)",numofchanges:"-1000",content:"10IndividualDeer Fairy",category:"Gift",addtime:"2024-09-11 09:02:17"},
    {id:"553326",user:"VICKEY(166968)",numofchanges:"-1000",content:"10IndividualDeer Fairy",category:"Gift",addtime:"2024-09-11 09:02:17"},
    {id:"553325",user:"VICKEY(166968)",numofchanges:"-1000",content:"10IndividualDeer Fairy",category:"Gift",addtime:"2024-09-11 09:02:17"},
    {id:"553324",user:"VICKEY(166968)",numofchanges:"-1000",content:"10IndividualDeer Fairy",category:"Gift",addtime:"2024-09-11 09:02:17"},
    {id:"553323",user:"VICKEY(166968)",numofchanges:"-1000",content:"10IndividualDeer Fairy",category:"Gift",addtime:"2024-09-11 09:02:17"},
    {id:"553322",user:"VICKEY(166968)",numofchanges:"-1000",content:"10IndividualDeer Fairy",category:"Gift",addtime:"2024-09-11 09:02:17"},
  ]
  const [data,setData] = useState([]);
  useEffect(()=>{
    setData(rowdata);
  },[rowdata]);
  

 
  const [queryInput,setQueryInput] = useState("");

  const querySumbit =()=>{
    const newData = rowdata.filter(row =>{
      return row.anchorname.toLowerCase().includes(queryInput.toLowerCase());
    })
    setData(newData)
  }
  const  clearQuesru=()=>{
    setData(rowdata);
    setQueryInput("");
  }
  return (
    <div >
      <div className="w-full flex gap-2 flex-wrap mb-2 ">
        <div className="flex border-[1px] rounded-sm">
          <div className=" bg-slate-100 w-7/12 text-[16px] px-1 border-r-[1px] flex justify-center items-center">Anchor Nickname </div>
          <div><input type="text" value={queryInput} className="w-full outline-none px-2 py-1" placeholder="Anchor Nickname " onChange={(e)=>setQueryInput(e.target.value)}/></div>
        </div>
        <button className="text-white px-3 py-1 rounded-[3px] bg-blue-500" onClick={querySumbit}>Query</button>
        <button className="text-white px-3 py-1 rounded-[3px] bg-red-500" onClick={clearQuesru}>Clear Condition</button>
      </div>
      <CustomTable columns={columns} rows={data} height={400} />
    </div>
  );
}

export default IncomeRecord ;
