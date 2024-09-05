import { createSlice } from "@reduxjs/toolkit";

 
const initialState = {
    adverTise: [
        { id: 1,webuUrl:"sg_fer", title: 'Weekly Topic',displayposition:"Webpage URL link",type:"Carousel", sort: 1, age: 35 },
        { id: 2,webuUrl:"sg_fer", title: 'charm list',displayposition:"Ranking list app jump",type:"Startup Advertisment", sort: 14, age: 42 },
        { id: 3,webuUrl:"sg_fer", title: 'Bogolive',displayposition:"Ranking list app jump",type:"Carousel", sort: 54, age: 45 },
        { id: 4,webuUrl:"sg_fer", title: 'game',displayposition:"Webpage URL link",type:"Startup Advertisment", sort: 23, age: 16 },
        { id: 5,webuUrl:"sg_fer", title: 'Hot live',displayposition:"Webpage URL link",type:"Carousel", sort: 7, age: null },
        { id: 6,webuUrl:"sg_fer", title: 'Party',displayposition:"Ranking list app jump",type:"Startup Advertisment", sort:6, age: 150 },
        { id: 7,webuUrl:"sg_fer", title: 'Greedy',displayposition:"Ranking list app jump ",type:"Carousel", sort: 15, age: 44 },
        { id: 8,webuUrl:"sg_fer", title: 'Ranking',displayposition:"Webpage URL link",type:"Carousel", sort: 18, age: 36 },

      ]
}

export const advertiseSlice = createSlice({
    name:"advertise",
    initialState,
    reducers:{
        addAdvertise : (state,action)=>{
            const adver = action.payload
            state.adverTise.push(adver)
            console.log("hello")

        },
        delteAddverTise : (state,action)=>{
            state.adverTise = state.adverTise.filter(todo => todo.id !== action.payload)
        },
        editAdverise:(state,action)=>{
            // console.log(action.payload.id)
            const index = state.adverTise.findIndex((ad )=> ad.id === action.payload.id)

            state.adverTise[index] = action.payload
        }
    }
})

export const {addAdvertise,delteAddverTise,editAdverise} = advertiseSlice.actions;
export default advertiseSlice.reducer;