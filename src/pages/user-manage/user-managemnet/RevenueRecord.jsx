import React, { useEffect, useState } from "react";
import CustomTable from "../../../component/CustomTable";

function RevenueRecord () {
  const columns = [
    {
      field: "id",
      headerName: "Number",
      width: 100,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "portableuser",
      headerName: "Portable User",
      width: 180,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "coin",
      headerName: "Coin",
      width: 150,
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
      field: "note",
      headerName: "Note",
      width: 200,
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
    {id:"553329",portableuser:"بسبوسه💖🥺(167021)",coin:"+ 50",category:"Gift",note:"1个Lovesea",addtime:"2024-09-11 09:02:17"},
    {id:"553328",portableuser:"بسبوسه💖🥺(167021)",coin:"+ 50",category:"Gift",note:"1个Lovesea",addtime:"2024-09-11 09:02:17"},
    {id:"553327",portableuser:"بسبوسه💖🥺(167021)",coin:"+ 50",category:"Gift",note:"1个Lovesea",addtime:"2024-09-11 09:02:17"},
    {id:"553326",portableuser:"بسبوسه💖🥺(167021)",coin:"+ 50",category:"Gift",note:"1个Lovesea",addtime:"2024-09-11 09:02:17"},
    {id:"553325",portableuser:"بسبوسه💖🥺(167021)",coin:"+ 50",category:"Gift",note:"1个Lovesea",addtime:"2024-09-11 09:02:17"},
    {id:"553324",portableuser:"بسبوسه💖🥺(167021)",coin:"+ 50",category:"Gift",note:"1个Lovesea",addtime:"2024-09-11 09:02:17"},
    {id:"553323",portableuser:"بسبوسه💖🥺(167021)",coin:"+ 50",category:"Gift",note:"1个Lovesea",addtime:"2024-09-11 09:02:17"},
    {id:"553322",portableuser:"بسبوسه💖🥺(167021)",coin:"+ 50",category:"Gift",note:"1个Lovesea",addtime:"2024-09-11 09:02:17"},
  ]

  return (
    <div >
      <CustomTable columns={columns} rows={rowdata} height={400} />
    </div>
  );
}

export default RevenueRecord ;
