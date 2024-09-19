import { createSlice } from '@reduxjs/toolkit'
// import { cookies } from 'next/headers';


const shopSlice = createSlice({
    name: 'shopSlice',
    initialState: {
        c: []


    },
    reducers: {
        myShoping: (state, action = {
            id,
            name,
            kind,
            src,
            alt,
            href,
            color,
            price,
            description,
        }) => {
            state.purchasesData = [...state.purchasesData, action.payload]
            localStorage.setItem("shopSlice", state.purchasesData);
            console.log("state is");
            console.log(state.purchasesData);
        }
    }
})
export const { myShoping } = shopSlice.actions
export default shopSlice.reducer