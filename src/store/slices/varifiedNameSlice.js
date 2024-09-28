import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    verifiedName: [
        { id: 1, name: "13", sort: "1",},
       
    ]
};

const verifiedNameSlice = createSlice({
    name: "verifeidnamelist",
    initialState,
    reducers: {
        addName: (state, action) => {
            const name = action.payload;
            state.verifiedName.push(name);
        },
        deleteName: (state, action) => {
            state.verifiedName = state.verifiedName.filter(name => name.id !== action.payload);
        },
        editName: (state, action) => {
            const index = state.verifiedName.findIndex(name => name.id === action.payload.id);
            state.verifiedName[index] = action.payload;
        }
    }
});

export const { addName, deleteName, editName } = verifiedNameSlice.actions;
export default verifiedNameSlice.reducer;
