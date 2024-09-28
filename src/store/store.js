import { configureStore } from "@reduxjs/toolkit";
import purchaseRuleSclice from "./slices/purchaseRuleSclice";
import AdvertiseSlice from "./slices/AdvertiseSlice";
import exchangeRule from "./slices/exchangeRule";
import receenPage from "./slices/receenPage";
import AdminManageSlice from "./slices/AdminManageSlice";
import nicknameRestrictSlice from "./slices/nicknameRestrictSlice";
import encryptionKeySlce from "./slices/encryptionKeySlce";
import operationSlice from "./slices/operationSlice";
import privateMessageSlice from "./slices/privateMessageSlice";
import systemMessageSlice from "./slices/systemMessageSlice";
import verifiedNameSlice from "./slices/varifiedNameSlice"

export const store = configureStore({
    reducer :{
        exchangeRule:exchangeRule,
        adverTise:AdvertiseSlice,
        purchaseRule:purchaseRuleSclice,
        recenPage:receenPage,
        adminManager:AdminManageSlice,
        nickname:nicknameRestrictSlice,
        enctryptKey:encryptionKeySlce,
        operation:operationSlice,
        private:privateMessageSlice,
        systemMsg:systemMessageSlice,
        verifiedName:verifiedNameSlice,
    }
})