import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    operation:[
        {
            id:"133",
            loginfo:"adminLogin Successful",
            addtime:"2024-09-08 23:07:08",
            ip:"43.229.166.208",
            systemadministrator:"administrator",
            result:"Success",
            module:"admin/login",
            fucntion:"login",
        },
        {
            id:"1855",
            loginfo:"adminLogin Successful",
            addtime:"2024-09-08 23:07:08",
            ip:"43.229.166.208",
            systemadministrator:"administrator",
            result:"Success",
            module:"admin/login",
            fucntion:"login",
        },
        {
            id:"1856",
            loginfo:"adminLogin Successful",
            addtime:"2024-09-08 23:07:08",
            ip:"43.229.166.208",
            systemadministrator:"administrator",
            result:"Success",
            module:"admin/login",
            fucntion:"login",
        },
        {
            id:"1858",
            loginfo:"adminLogin Successful",
            addtime:"2024-09-08 23:07:08",
            ip:"43.229.166.208",
            systemadministrator:"administrator",
            result:"Success",
            module:"admin/login",
            fucntion:"login",
        },
        {
            id:"1851",
            loginfo:"adminLogin Successful",
            addtime:"2024-09-08 23:07:08",
            ip:"43.229.166.208",
            systemadministrator:"administrator",
            result:"Success",
            module:"admin/login",
            fucntion:"login",
        },
        {
            id:"1812",
            loginfo:"adminLogin Successful",
            addtime:"2024-09-08 23:07:08",
            ip:"43.229.166.208",
            systemadministrator:"administrator",
            result:"Success",
            module:"admin/login",
            fucntion:"login",
        },
        {
            id:"1817",
            loginfo:"adminLogin Successful",
            addtime:"2024-09-08 23:07:08",
            ip:"43.229.166.208",
            systemadministrator:"administrator",
            result:"Success",
            module:"admin/login",
            fucntion:"login",
        },
        {
            id:"18129",
            loginfo:"adminLogin Successful",
            addtime:"2024-09-08 23:07:08",
            ip:"43.229.166.208",
            systemadministrator:"administrator",
            result:"Success",
            module:"admin/login",
            fucntion:"login",
        },
     
    ]
}
const operationSlice = createSlice({
    name:"operation",
    initialState,
    reducers:{
        deleteOperation:(state,action)=>{
            state.operation = state.operation.filter(operation => operation.id !== action.payload)
        },
        deleteallOperation :(state,action)=>{
            state.operation = [];   
        }
    }
})

export const {deleteOperation,deleteallOperation} = operationSlice.actions
export default operationSlice.reducer