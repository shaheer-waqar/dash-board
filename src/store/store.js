import { configureStore } from "@reduxjs/toolkit";
import AdvertiseSlice from "./slices/AdvertiseSlice";
import EXchangeRuleSclice from "./slices/EXchangeRuleSclice";
import purchaseRuleSclice from "./slices/purchaseRuleSclice";

export const store = configureStore({
    reducer :{
        exchangeRule:EXchangeRuleSclice,
        adverTise:AdvertiseSlice,
        purchaseRule:purchaseRuleSclice,
    }
})