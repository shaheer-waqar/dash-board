import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    exchangeRule: [
        { id: 1, diamonds: "13", coin: "1", status: "valid" },
        { id: 2, diamonds: "13", coin: "1", status: "valid" },
        { id: 3, diamonds: "13", coin: "1", status: "valid" },
        { id: 5, diamonds: "13", coin: "1", status: "valid" },
        { id: 6, diamonds: "13", coin: "1", status: "valid" },
        { id: 7, diamonds: "13", coin: "1", status: "valid" },
        { id: 8, diamonds: "13", coin: "1", status: "valid" },
    ]
};

const exchangeRuleSclice = createSlice({
    name: "exchange",
    initialState,
    reducers: {
        addExchange: (state, action) => {
            const rule = action.payload;
            state.exchangeRule.push(rule);
        },
        deleteExchange: (state, action) => {
            state.exchangeRule = state.exchangeRule.filter(rule => rule.id !== action.payload);
        },
        editExchange: (state, action) => {
            const index = state.exchangeRule.findIndex(rule => rule.id === action.payload.id);
            state.exchangeRule[index] = action.payload;
        }
    }
});

export const { addExchange, deleteExchange, editExchange } = exchangeRuleSclice.actions;
export default exchangeRuleSclice.reducer;
