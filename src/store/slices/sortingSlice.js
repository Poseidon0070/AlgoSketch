'use client'

const { createSlice } = require("@reduxjs/toolkit");

const sortingSlice = createSlice({
    initialState : {
        array : [],
        selectedAlgorithm : "bubble",
        isSorting : false,
        animationSpeed : 500,
        isAnimationComplete : false 
    },
    name : 'sorting-slice',
    reducers : {
        setArray : (state, action) => {
            state.array = action.payload;
        },
        setSelectedAlgorithm : (state, action) => {
            state.selectedAlgorithm = action.payload;
        },
        setIsSorting : (state, action) => {
            state.isSorting = action.payload;
        },
        setAnimationSpeed : (state, action) => {
            state.isSorting = action.payload;
        },
        setIsAnimationComplete : (state, action) => {
            state.isAnimationComplete = action.payload;
        },
    }
})

export default sortingSlice