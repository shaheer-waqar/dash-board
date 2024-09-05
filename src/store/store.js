import { configureStore } from "@reduxjs/toolkit";
import purchaseRuleSclice from "./slices/purchaseRuleSclice";
import AdvertiseSlice from "./slices/AdvertiseSlice";
import exchangeRule from "./slices/exchangeRule";

export const store = configureStore({
    reducer :{
        exchangeRule:exchangeRule,
        adverTise:AdvertiseSlice,
        purchaseRule:purchaseRuleSclice,
    }
})