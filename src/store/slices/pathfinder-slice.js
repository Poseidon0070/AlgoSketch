'use client'

import { TILE_STYLE } from "@/components/path-finder/node"
import { createMazeWithWalls, destroyWall } from "@/utils/pathfinder-algorithms/createMaze"

const { generateGrid, MAX_ROWS, MAX_COLS, delay, removeWall, isEqual, getRandInt } = require("@/utils/pathfinder-utility")
const { createSlice } = require("@reduxjs/toolkit")

const pathFinderSlice = createSlice({
    name: 'pathFinder',
    initialState: {
        grid: generateGrid({ row: 1, col: 1 }, { row: MAX_ROWS - 2, col: MAX_COLS - 2 }),
        maze: "none",
        algorithm: "dijstra",
        startNode: { row: 1, column: 1 },
        endNode: { row: MAX_ROWS - 2, col: MAX_COLS - 2 },
        traversalSpeed: 2.5,
        isGraphTraversed: false,
    },
    reducers: {
        setGrid: (state, action) => {
            state.grid = generateGrid({ row: 1, col: 1 }, { row: MAX_ROWS - 2, col: MAX_COLS - 2 })
        },
        setMaze: (state, action) => {
            state.maze = action.payload
        },
        setAlgorithm: (state, action) => {
            state.algorithm = action.payload
        },
        setIsGraphTraversed: (state, action) => {
            state.isGraphTraversed = action.payload
        },
        setStartNode: (state, action) => {
            state.startNode = { row: action.payload.row, col: action.payload.col }
        },
        setEndNode: (state, action) => {
            state.startNode = { row: action.payload.row, col: action.payload.col }
        },
        setTraversalSpeed: (state, action) => {
            state.traversalSpeed = action.payload
        },
        toggleGridNodeToWall: (state, action) => {
            state.grid[action.payload.row][action.payload.col].isWall = !state.grid[action.payload.row][action.payload.col].isWall
        },
        setGridNodeToWall: (state, action) => {
            state.grid[action.payload.row][action.payload.col].isWall = !action.payload.value
        }
    }
})

export const pathFinderActions = pathFinderSlice.actions

export const generateMaze = (grid, startNode, endNode, setIsDisabled, speed) => {
    return async (dispatch, getState) => {
        await createMazeWithWalls(grid, startNode, endNode, setIsDisabled, speed);
        const state = getState();
        const pathFinder = state.pathFinder;
        const start = pathFinder.startNode;
        const end = pathFinder.endNode;

        const changes = [];
        await destroyWall(grid, 1, 1, 1, changes);
        await destroyWall(grid, 1, 1, 0, changes);
        const wallDetroyer = async () => {
            for (let r = 1; r < MAX_ROWS; r += 2) {
                for (let c = 1; c < MAX_COLS; c += 2) {
                    if (r === MAX_ROWS - 2 && c === MAX_COLS - 2) {
                        continue;
                    } else if (r === MAX_ROWS - 2) {
                        await destroyWall(grid, r, c, 1, changes);
                    } else if (c === MAX_COLS - 2) {
                        changes.push({ row: r + 1, col: c });
                        await destroyWall(grid, r, c, 0, changes);
                    } else {
                        let x = getRandInt(0, 2);
                        await destroyWall(grid, r, c, x, changes);
                    }
                }
            }
        }
        await wallDetroyer();
        // await wallDetroyer();
        const newGrid = grid.map((row, rowIndex) =>
            row.map((obj, colIndex) => {
                const newObj = { ...obj };
                if (rowIndex % 2 === 0 || colIndex % 2 === 0) {
                    newObj.isWall = true;
                }
                return newObj;
            })
        );

        changes.forEach(({ row, col }) => {
            newGrid[row][col].isWall = false;
        });

        dispatch(pathFinderActions.setGrid(newGrid));
    };
};

export const resetGrid = () => {
    return async (dispatch) => {
        for (let r = 0; r < MAX_ROWS; r++) {
            for (let c = 0; c < MAX_COLS; c++) {
                if((r == MAX_ROWS-2 && c == MAX_COLS-2) || (r == 1 && c == 1)){
                    continue;
                }
                let node = document.getElementById(`${r}-${c}`)
                node.className = `${TILE_STYLE} animate-wall`
                // console.log("1here")
                if(r === MAX_ROWS-1){
                    node.classList.add("border-b")
                }
                if(c === 0){
                    console.log("here")
                    node.classList.add("border-l")
                }
            }
        }
        dispatch(pathFinderActions.setGrid())
    }
}


export const pathFinderReducer = pathFinderSlice.reducer