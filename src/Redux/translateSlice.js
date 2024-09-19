import { createSlice } from '@reduxjs/toolkit'
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';


const translateSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 20,
        pathname: "",
    },
    reducers: {
        incremented: state => {
            state.value += 1
        },
        decremented: state => {
            state.value -= 1
        },
        pathNow: state => {
            const pathname = usePathname();
            state.pathname = pathname.split("/").slice(2).split("/").slice(2)
            console.log("ssssssssssssssss:");
            console.log(state.pathname);
        },

    }
})
export const { incremented, decremented, pathNow } = translateSlice.actions
export default translateSlice.reducer