import React, { useState } from "react";
import CustomTable from "../../../component/CustomTable";
import { useDispatch, useSelector } from "react-redux";
import { deleteallOperation, deleteOperation } from "../../../store/slices/operationSlice";

function OperationLog() {
  const columns = [
    {
      field: "id",
      headerName: "Numbers",
      width: 70,
      headerAlign: "center",
      align: "center",
    },

    {
      field: "loginfo",
      headerName: "Log information",
      width: 160,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "addtime",
      headerName: "Add Time",
      width: 120,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "ip",
      headerName: "IP",
      width: 100,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "systemadministrator",
      headerName: "System Administrator",
      width: 100,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "result",
      headerName: "Result",
      width: 100,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "module",
      headerName: "Module",
      width: 100,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "fucntion",
      headerName: "Function",
      width: 90,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "operations",
      headerName: "Operations",
      width: 150,
      headerAlign: "center",
      resizable: false,
      sortable:false,
      filterable: false,
      hidetable:false,
      disableColumnMenu: true,
      renderCell: (params) => (
        <div className="w-full flex justify-center "onClick={(e)=>e.stopPropagation()}>
          <span onClick={()=>dispatch(deleteOperation(params.id))} 
          className="bg-red-100 border-red-300 border-2 rounded-[3px]  px-4 py-1 cursor-pointer floa">
            delete
          </span>
        </div>
      ),
    },
  ];


  const exhangeData = useSelector((state) => state.operation.operation);
  const dispatch = useDispatch();
  
  return (
    <div className="py-2" >
      <CustomTable columns={columns} rows={exhangeData} />
      <button className="bg-red-100 border-red-300 border-2 rounded-[3px]  px-4 py-1 mt-1" onClick={()=>dispatch(deleteallOperation())}>Delete </button>

      </div>
  );
}

export default OperationLog;
