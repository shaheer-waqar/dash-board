import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DynamicForm from "../../component/form-component/DynamicForm";
import CustomTable from "../../component/CustomTable";
import { addAdmin, deleteAdmin, editAdmin } from "../../store/slices/AdminManageSlice";
function AdminManage() {
  const columns = [

    {
      field: "account",
      headerName: "Account",
      width: 120,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "nickname",
      headerName: "user nickename",
      type: "gender",
      width: 120,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "gender",
      headerName: "Gender",
      width: 90,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "phonenumber",
      headerName: "Phone number",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "avatar",
      headerName: "Avatar",
      width: 150,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <div className="flex items-center justify-center">
          <img src={params.value} className="w-[50px]" alt="dfgg" />

        </div>
      )   
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <div className="flex justify-center items-center">

        <span
        className={`px-2  py-2 rounded-[5px]  border-2 ${params.value == "unban" ? "bg-green-100 border-green-500" : "bg-red-100 border-red-500"}`}
        >
          {params.value}
        </span>
        </div>
      ),
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
          <span onClick={()=>dispatch(deleteAdmin(params.id))} 
          className="bg-red-100 border-red-300 border-2 rounded-[3px]  px-4 py-1 cursor-pointer">
            delete
          </span>
        </div>
      ),
    },
  ];
  const exhangeData = useSelector((state) => state.adminManager.adminManager);
  const dispatch = useDispatch();
  
  let [openForm,setOpenForm] = useState(false);
  const [selectedRowId, setSelectedRowId] = useState(null);

  
  let [formData,setFormData] = useState({
    account:"",
    nickname:"",
    gender:"",
    phonenumber:"",
    password:"",
    email:"",
    avatar:"",
    id:"",
    status:""
  });
  const formConfig = [
    {type:"input",label:"Accounts",name:"account",inputType:"text"},
    {type:"input",label:"Password",name:"password",inputType:"text"},
    {type:"input",label:"User nickname",name:"nickname",inputType:"text"},
    {type:"dropdown",label:"Gender",name:"gender",options:["Male","Female"],required:true},
    {type:"input",label:"Phone number",name:"phonenumber",inputType:"number"},
    {type:"input",label:"Email",name:"email",inputType:"email"},
    {type:"file",label:"File",name:"avatar",inputType:"file"},
    {type:"dropdown",label:"Status",name:"status",options:["unban","close"]},
  ]
  const fileHandler = (e)=>{
    const {name} = e.target
    const avatlink = e.target.files[0];
    const url = URL.createObjectURL(avatlink);
    setFormData({...formData,avatar:url})
    console.log(formData)

  }
  const handleEdit = (row)=>{
    setFormData(row);
    setSelectedRowId(row.id);
    setOpenForm(true);
  }
  const handelSumbit=(e)=>{
    e.preventDefault();
    if(selectedRowId){
      dispatch(editAdmin(formData))
    }else{
      const timeStamp = Math.floor(Math.random() *90) * 10 
      const formtedId = timeStamp % 100;
      dispatch(addAdmin({...formData,id:formtedId}))
    }
    setOpenForm(false);
    setSelectedRowId(null);
    console.log("added");
    setFormData({
      account:"",
      nickname:"",
      gender:"",
      password:"",
      phonenumber:"",
      email:"",
      avatar:"",
      id:"",
      status:""
    })
  }
  return (
    <div >
      <button className="text-white px-3 py-1 bg-blue-500 mb-3" onClick={()=>setOpenForm(true)} > + Add</button>
      <CustomTable columns={columns} rows={exhangeData} />
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
        fileHandler={fileHandler}
        />
      </div>
    </div>
  );
}

export default AdminManage;
