import { createSlice } from '@reduxjs/toolkit'
import { useTranslations } from 'next-intl';


const HeaderSlice = createSlice({
    name: 'HeaderSlice',
    initialState: {
        signnow: false,
    },
    reducers: {

        signNow: state => {
            state.signnow = !state.signnow
        }
    }
})
export const { signNow } = HeaderSlice.actions
export default HeaderSlice.reducer