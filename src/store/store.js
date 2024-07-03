'use client'

import {configureStore} from '@reduxjs/toolkit'
import sortingSlice from './slices/sortingSlice';

const store = configureStore({
    reducer:{
        sorting: sortingSlice.reducer
    }
})

export default store;
export const sortingAction = sortingSlice.actions 