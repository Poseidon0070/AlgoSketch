'use client'

const { generateGrid } = require("@/utils/pathfinder-utility")
const { createSlice } = require("@reduxjs/toolkit")

const pathFinderSlice = createSlice({
    name: 'pathFinder',
    initialState : {
        grid : generateGrid({row : 0, col : 0}, {row : 49, col : 49}),
        maze : "none",
        algorithm : "dijstra",
        startNode : {row : 0, column : 0},
        endNode : {row : 49, column : 49},
        traversalSpeed : 2,
        isGraphTraversed : false,
    },
    reducers : {
        setGrid : (state, action) => {
            const start = action.payload.start 
            const end = action.payload.end 
            state.grid = generateGrid(start,end)
        },
        setMaze : (state, action) => {
            state.maze = action.payload
        },
        setAlgorithm : (state, action) => {
            state.algorithm = action.payload
        },
        setIsGraphTraversed : (state, action) => {
            state.isGraphTraversed = action.payload
        },
        setStartNode : (state, action) => {
            state.startNode = {row : action.payload.row,col : action.payload.col}
        },
        setEndNode : (state, action) => {
            state.startNode = {row : action.payload.row,col : action.payload.col}
        },
        setTraversalSpeed : (state, action) => {
            state.traversalSpeed = action.payload
        }
    }
})

export const pathFinderAction = pathFinderSlice.actions
export const pathFinderReducer = pathFinderSlice.reducer