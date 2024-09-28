import React, { useEffect, useState } from "react";
import CustomTable from "../../../component/CustomTable";
import { useDispatch, useSelector } from "react-redux";
import { deleteAllPrivate, deletePrivate } from "../../../store/slices/privateMessageSlice";

function PrivateMessageGift() {
  const columns = [
    {
      field: "id",
      headerName: "Clear Condition",
      width: 200,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "anchorname",
      headerName: "Anchor Nickname",
      width: 200,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "totalrevenue",
      headerName: "Total Revenue (Coin)",
      width: 200,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "totalppl",
      headerName: "Total number of people ",
      width: 200,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "operation",
      headerName: "Operation",
      width: 192,
      headerAlign: "center",
      resizable: false,
      sortable:false,
      filterable: false,
      hidetable:false,
      renderCell: (params) => (
        <div className="w-full flex justify-center "onClick={(e)=>e.stopPropagation()}>
          <span onClick={()=>dispatch(deletePrivate(params.id))} 
          className="bg-red-100 border-red-300 border-2 rounded-[3px]  px-4 py-1 cursor-pointer floa">
            delete
          </span>
        </div>
      ),
    },
  ];

  
  const rowdata = useSelector((state) => state.private.private);
  const [data,setData] = useState([]);
  useEffect(()=>{
    setData(rowdata);
  },[rowdata]);
  const dispatch = useDispatch();
  

 
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
      <button className="bg-red-100 border-red-300 border-2 rounded-[3px]  px-4 py-1 mt-1" onClick={()=>dispatch(deleteAllPrivate())}>Delete </button>
    </div>
  );
}

export default PrivateMessageGift;
