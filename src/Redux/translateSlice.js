import { createSlice } from '@reduxjs/toolkit'
import { useTranslations } from 'next-intl';


const translateSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 20,
    },
    reducers: {
        incremented: state => {
            state.value += 1
        },
        decremented: state => {
            state.value -= 1
        },

    }
})
export const { incremented, decremented } = translateSlice.actions
export default translateSlice.reducer