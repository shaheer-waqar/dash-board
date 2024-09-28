import React, { useState } from "react";
import CustomTable from "../../../component/CustomTable";
import { useDispatch, useSelector } from "react-redux";
import DynamicForm from "../../../component/form-component/DynamicForm";
import { addPurchase, deletePurchase, editPurchase } from "../../../store/slices/purchaseRuleSclice";

function PurchaseRule() {
  const columns = [
    {
      field: "id",
      headerName: "Number",
      width: 90,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "name",
      headerName: "Name",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "diamonds",
      headerName: "Number of Diamonds",
      width: 120,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "price",
      headerName: "price",
      type: "number",
      width: 90,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "receiveddiamonds",
      headerName: "Apple Pay received diamonds",
      type: "number",
      width: 90,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "paypriced",
      headerName: "Apple Pay Price",
      type: "number",
      width: 90,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "projectid",
      headerName: "Apple project ID",
      type: "number",
      width: 90,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "diamondgift",
      headerName: "Diamond gifting",
      type: "number",
      width: 90,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "status",
      headerName: "Status",
      width: 250,
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
      field: "sort",
      headerName: "Sort",
      type: "number",
      width: 90,
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
          <span onClick={()=>dispatch(deletePurchase(params.id))} 
          className="bg-red-100 border-red-300 border-2 rounded-[3px]  px-4 py-1 cursor-pointer">
            delete
          </span>
        </div>
      ),
    },
  ];


  const adverTiseData = useSelector((state) => state.purchaseRule.purchaseRule);
  const dispatch = useDispatch();
  
  let [openForm,setOpenForm] = useState(false);
  const [selectedRowId, setSelectedRowId] = useState(null);

  let [formData,setFormData] = useState({
    name:"",
    diamonds:"",
    price:"",
    receiveddiamonds:"",
    paypriced:"",
    projectid:"",
    diamondgift:"",
    googlepay:"",
    sort:"",
    status:"valid",
    id:"",
  });
  const formConfig = [
    {type:"input",label:"Name",name:"name",inputType:"text"},
    {type:"input",label:"Number of Diamonds",name:"diamonds",inputType:"number"},
    {type:"input",label:"Price",name:"price",inputType:"number"},
    {type:"input",label:"Apple Pay received diamonds",name:"receiveddiamonds",inputType:"number"},
    {type:"input",label:"Apple Pay Price",name:"paypriced",inputType:"number"},
    {type:"input",label:"Apple project ID",name:"projectid",inputType:"number"},
    {type:"input",label:"Diamond gifting",name:"diamondgift",inputType:"number"},
    {type:"input",label:"Google pay",name:"googlepay",inputType:"number"},
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
      dispatch(editPurchase(formData))
    }else{
      const timeStamp = Date.now()
      const formtedId = timeStamp % 100 + 100;
      dispatch(addPurchase({...formData,id:formtedId}))
    }
    setOpenForm(false);
    setSelectedRowId(null);
    console.log("added");
    setFormData({
      name:"",
      diamonds:"",
      price:"",
      receiveddiamonds:"",
      paypriced:"",
      projectid:"",
      diamondgift:"",
      googlepay:"",
      sort:"",
      status:"valid",
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

export default PurchaseRule;
