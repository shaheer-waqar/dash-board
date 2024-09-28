import React from 'react'
import CustomDataTable from '../../../component/CustomDataTalbe';

function AnchorTag() {
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "label",
      headerName: "Label",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "gender",
      headerName: "Gender",
      type: "number",
      width: 90,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "color",
      headerName: "Color",
      width: 130,
      headerAlign: "center",
      align: "center",
    },

  ];
  const formConfig = [
    {type:"input",label:"Label",name:"label",inputType:"text"},
    {type:"radio",label:"Whether to Enable",inputType:"radio",options:[
      {label:"Valid",name:"valid",id:"valid",value:"Yes"},
      {label:"Invalid",name:"valid",id:"invalid",value:"No"}
    ]},
    {type:"input",label:"Color",name:"color",inputType:"color"},
  ]
  const intailForm ={
    title:"",
    displayposition:"",
    type:"",
    webuUrl:"",
    sort:"",
    id:"",
  }
  return (
    <CustomDataTable
    columns={columns}
    formConfig={formConfig}
    intailForm={intailForm}
    opertion={true}
    />
  )
}

export default AnchorTag