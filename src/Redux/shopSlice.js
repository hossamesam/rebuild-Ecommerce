import { createSlice } from '@reduxjs/toolkit'
// import { cookies } from 'next/headers';


const shopSlice = createSlice({
    name: 'shopSlice',
    initialState: {
        c: [],
        RemoveItemFromCart: false,
        RemoveItemFromCartEnd: false,
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
        },
        RemoveItemFromCartAction: state => {
            state.RemoveItemFromCart = !state.RemoveItemFromCart
        },
        RemoveItemFromCartEndAction: state => {
            state.RemoveItemFromCart = !state.RemoveItemFromCart
        }
    }
})
export const { myShoping, RemoveItemFromCartAction, RemoveItemFromCartEndAction } = shopSlice.actions
export default shopSlice.reducer