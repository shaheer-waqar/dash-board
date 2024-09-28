import { createSlice } from "@reduxjs/toolkit";
import image1 from "../../assets/avatar/avatar1.jpg"

const initialState = {
    adminManager : [
        { id: 1,account:"admin",password:"122345556", nickname: 'administrator',gender:"Male",phonenumber:"15855888888",email:"weipeng201707@gmail.com",avatar:image1, status: "unban"},        
    ]
}

const AdminManager = createSlice({
    name:"adminmangager",
    initialState,
    reducers:{
        addAdmin: (state, action) => {
            const rule = action.payload;
            state.adminManager.push(rule);
        },
        editAdmin: (state, action) => {
            const index = state.adminManager.findIndex(rule => rule.id === action.payload.id);
            state.adminManager[index] = action.payload;
        },
        deleteAdmin:(state,action)=>{
            state.adminManager = state.adminManager.filter(admin => admin.id !== action.payload);
        }
    }
})

export const {addAdmin,editAdmin,deleteAdmin} = AdminManager.actions
export default  AdminManager.reducer