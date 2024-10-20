import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { useTranslations } from 'next-intl';

export const getLanguage = createAsyncThunk(
    'counter/getLanguage',
    async (data, thunkAPI) => {
        const e = useTranslations('createpage');
        const c = await useTranslations('catogry');

        return  c;
    })

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
    },

    extraReducers: (builder) => {
        builder
            .addCase(getLanguage.pending, (state, action) => {

                return console.log(action.payload);
                // state.value = action.payload
            })
        builder
            .addCase(getLanguage.fulfilled, (state, action) => {
                return console.log(action.payload);
                // state.value = action.payload
            })
        builder
            .addCase(getLanguage.rejected, (state, action) => {
                return console.log(action.payload);
                // state.value = action.payload
            })
    }
})
export const { incremented, decremented, pathNow } = translateSlice.actions
export default translateSlice.reducer