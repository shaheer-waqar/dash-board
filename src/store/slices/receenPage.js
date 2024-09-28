import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recenPage: [],
};

const recentPageSlice = createSlice({
  name: "recentPage",
  initialState,
  reducers: {
    addPage: (state, action) => {
        const { link, path } = action.payload; // Access link and path from payload

        // Check if the page already exists in the state
        const exists = state.recenPage.some(
          (page) => page.link === link && page.path === path
        );
  
        // Add the page only if it doesn't exist
        if (!exists) {
          state.recenPage.push(action.payload);
          localStorage.setItem("recentpage",JSON.stringify(state.recenPage));
        }
    },
    deletePage:(state,action)=>{
        state.recenPage = state.recenPage.filter(page => page.path !== action.payload);
        localStorage.setItem("recentpage",JSON.stringify(state.recenPage));


    }
  },
});

export const { addPage,deletePage } = recentPageSlice.actions;
export default recentPageSlice.reducer;
