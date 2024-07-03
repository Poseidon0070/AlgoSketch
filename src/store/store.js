'use client'

import {configureStore} from '@reduxjs/toolkit'
import {sortingReducer} from './slices/sortingSlice';

const store = configureStore({
    reducer:{
        sorting: sortingReducer
    }
})

export default store;