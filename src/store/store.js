'use client'

import {configureStore} from '@reduxjs/toolkit'
import {sortingReducer} from './slices/sorting-slice';

const store = configureStore({
    reducer:{
        sorting: sortingReducer
    }
})

export default store;