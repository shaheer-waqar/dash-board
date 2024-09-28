import { createSlice } from "@reduxjs/toolkit";

 
const initialState = {
    enctryptKey: [
        { 
            id: 1,
            encryptkey:"1400480612000000",
            packing:'Yes',
            valid:"No"

        },
       

      ]
}

export const encryptionKeySlice = createSlice({
    name:"ecrytion",
    initialState,
    reducers:{
        addEncrypKey : (state,action)=>{
            const adver = action.payload
            state.enctryptKey.push(adver)
            console.log("hello")

        },
        deleteEncrypKey : (state,action)=>{
            state.enctryptKey = state.enctryptKey.filter(todo => todo.id !== action.payload)
        },
        editEncrypKey:(state,action)=>{
            // console.log(action.payload.id)
            const index = state.enctryptKey.findIndex((ad )=> ad.id === action.payload.id)

            state.enctryptKey[index] = action.payload
        }
    }
})

export const {addEncrypKey,deleteEncrypKey,editEncrypKey} = encryptionKeySlice.actions;
export default encryptionKeySlice.reducer;