import { configureStore } from "@reduxjs/toolkit";
import EXchangeRuleSclice from "./slices/EXchangeRuleSclice";
import purchaseRuleSclice from "./slices/purchaseRuleSclice";
import AdvertiseSlice from "./slices/AdvertiseSlice";

export const store = configureStore({
    reducer :{
        exchangeRule:EXchangeRuleSclice,
        adverTise:AdvertiseSlice,
        purchaseRule:purchaseRuleSclice,
    }
})