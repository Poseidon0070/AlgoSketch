'use client'

import { generateRandomNumberFromInterval } from "@/utils/utility";

const { createSlice } = require("@reduxjs/toolkit");

const sortingSlice = createSlice({
    initialState: {
        array: [],
        selectedAlgorithm: "bubble",
        isSorting: false,
        animationSpeed: 500,
        isAnimationComplete: false,
    },

    name: 'sorting-slice',

    reducers: {
        setArray: (state, action) => {
            state.array = action.payload;
            console.log("asdasdasd")
        },
        setSelectedAlgorithm: (state, action) => {
            state.selectedAlgorithm = action.payload;
        },
        setIsSorting: (state, action) => {
            state.isSorting = action.payload;
        },
        setAnimationSpeed: (state, action) => {
            state.isSorting = action.payload;
        },
        setIsAnimationComplete: (state, action) => {
            state.isAnimationComplete = action.payload;
        },
        runAnimation: () => { }
    }
})

export const sortingAction = sortingSlice.actions

export const resetArrayandAnimation = () => {
    return (dispatch) => {
        const contentContainer = document.getElementById("content-container");
        if (!contentContainer) {
            return ;
        };
        const contentContainerWidth = contentContainer.clientWidth;
        const tempArray = [];
        const numLines = contentContainerWidth / 8;
        const containerHeight = window.innerHeight;
        const maxLineHeight = Math.max(containerHeight - 300, 100);
        for (let i = 0; i < numLines; i++) {
            tempArray.push(generateRandomNumberFromInterval(35, maxLineHeight));
        }
        dispatch(sortingAction.setArray(tempArray))
        dispatch(sortingAction.setIsSorting(false))
        dispatch(sortingAction.setIsAnimationComplete(false))
    }
}


export const sortingReducer = sortingSlice.reducer