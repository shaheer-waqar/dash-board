import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    systemMsg : [
        { id: 532,title:"Welcom MR Akash",content:"All", coverimg: '',type:"Text",link:"",releasedate:"2024-06-18 16:14:11", userid: "all"},        
    ]
}


const systemMessgaeSlice = createSlice({
    name:"systemMessage",
    initialState,
    reducers:{
        addSystemMsg: (state, action) => {
            const msg = action.payload;
            state.systemMsg.push(msg);
        },
        deleteSystemMsg:(state,action)=>{
            state.systemMsg = state.systemMsg.filter(sysMesg => sysMesg.id !== action.payload);
        }
    }
})

export const {addSystemMsg,deleteSystemMsg} = systemMessgaeSlice.actions
export default  systemMessgaeSlice.reducer