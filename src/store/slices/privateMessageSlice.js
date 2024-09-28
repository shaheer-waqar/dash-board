import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    private:[
        {
            id:"166836",
            anchorname:"BD 6 🇧🇩",
            totalrevenue: "50",
            totalppl:"2",
        },
        {
            id:"166837",
            anchorname:"Daniel",
            totalrevenue: "50",
            totalppl:"1",
        },
        {
            id:"166838",
            anchorname:"VICKEY",
            totalrevenue: "50",
            totalppl:"1",
        },
        {
            id:"166839",
            anchorname:"بسبوسه💖🥺",
            totalrevenue: "50",
            totalppl:"1",
        },
        {
            id:"166840",
            anchorname:"i v a n 33",
            totalrevenue: "26000",
            totalppl:"1"
        },
        {
            id:"166841",
            anchorname:"𝖎𝖙'𝖘 𝖒𝖊",
            totalrevenue: "50",
            totalppl:"1",
        },
     
    ]
}
const privateMessageSlice = createSlice({
    name:"privateMessage",
    initialState,
    reducers:{
        addPrivate:(state,action)=>{
            const PrivateMsg = action.payload
            state.private.push(PrivateMsg);
        },
        deletePrivate:(state,action)=>{
            state.private = state.private.filter(prvt => prvt.id !== action.payload)
        },
        deleteAllPrivate :(state,action)=>{
            state.private = [];   
        }
    }
})

export const {addPrivate,deletePrivate,deleteAllPrivate} = privateMessageSlice.actions
export default privateMessageSlice.reducer