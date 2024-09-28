import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    nickname:[
        {
            id:"133",
            nicknamerestriction:"WhatsApp"
        },
        {
            id:"145",
            nicknamerestriction:"Facebook"
        },
        {
            id:"134",
            nicknamerestriction:"fuck"
        },
        {
            id:"156",
            nicknamerestriction:"yash"
        },
        {
            id:"189",
            nicknamerestriction:"king"
        },
     
    ]
}
const nicknameRestrictionSlice = createSlice({
    name:"nicknameRestriction",
    initialState,
    reducers:{
        addNickName:(state,action)=>{
            const nickName = action.payload
            state.nickname.push(nickName);
        },
        deleteNickName:(state,action)=>{
            state.nickname = state.nickname.filter(nickename => nickename.id !== action.payload)
        },
        deleteAllnicName :(state,action)=>{
            state.nickname = [];   
        }
    }
})

export const {addNickName,deleteNickName,deleteAllnicName} = nicknameRestrictionSlice.actions
export default nicknameRestrictionSlice.reducer