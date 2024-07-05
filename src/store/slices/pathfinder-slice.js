'use client'

const { createSlice } = require("@reduxjs/toolkit")

const pathFinderSlice = createSlice({
    name: 'pathFinder',
    initialState : {
        grid : [],
        maze : "none",
        algorithm : "dijstra",
        
    }
})