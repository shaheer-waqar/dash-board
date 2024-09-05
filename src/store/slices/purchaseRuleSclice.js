import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    purchaseRule: [
        { id: 1,name:"Diamonds", price:"1.00",receiveddiamonds:"100",paypriced:"2.00",projectid:"", diamonds: "13", diamondgift: "1", status: "valid",googlepay:"32",sort:"21" },
        { id: 2,name:"Diamonds",price:"1.00",receiveddiamonds:"100",paypriced:"2.00",projectid:"", diamonds: "13", diamondgift: "1", status: "valid",googlepay:"32",sort:"21" },
        { id: 3,name:"Diamonds",price:"1.00",receiveddiamonds:"100",paypriced:"2.00",projectid:"", diamonds: "13", diamondgift: "1", status: "valid",googlepay:"32",sort:"21" },
        { id: 5,name:"Diamonds",price:"1.00",receiveddiamonds:"100",paypriced:"2.00",projectid:"", diamonds: "13", diamondgift: "1", status: "valid",googlepay:"32",sort:"21" },
        { id: 6,name:"Diamonds",price:"1.00",receiveddiamonds:"100",paypriced:"2.00",projectid:"", diamonds: "13", diamondgift: "1", status: "valid",googlepay:"32",sort:"21" },
        { id: 7,name:"Diamonds",price:"1.00",receiveddiamonds:"100",paypriced:"2.00",projectid:"", diamonds: "13", diamondgift: "1", status: "valid",googlepay:"32",sort:"21" },
        { id: 8,name:"Diamonds",price:"1.00",receiveddiamonds:"100",paypriced:"2.00",projectid:"", diamonds: "13", diamondgift: "1", status: "valid",googlepay:"32",sort:"21" },
    ]
};

const purchaseRuleSlice = createSlice({
    name: "purchase",
    initialState,
    reducers: {
        addPurchase: (state, action) => {
            const rule = action.payload;
            state.purchaseRule.push(rule);
        },
        deletePurchase: (state, action) => {
            state.purchaseRule = state.purchaseRule.filter(rule => rule.id !== action.payload);
        },
        editPurchase: (state, action) => {
            const index = state.purchaseRule.findIndex(rule => rule.id === action.payload.id);
            state.purchaseRule[index] = action.payload;
        }
    }
});

export const { addPurchase, deletePurchase, editPurchase } = purchaseRuleSlice.actions;
export default purchaseRuleSlice.reducer;
