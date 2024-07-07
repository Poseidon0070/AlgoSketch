import { TILE_STYLE } from "@/components/path-finder/node"


class Node {
    constructor(row, col, isStart = false, isEnd = false, distance = Infinity, isWall = false, isPath = false, isTraversed = false, parent = null) {
        return {
            row: row,
            col: col,
            isStart: isStart,
            isEnd: isEnd,
            distance: distance,
            isWall: isWall,
            isPath: isPath,
            isTraversed: isTraversed,
            parent: parent
        }
    }
}

export const generateGrid = (start, end) => {
    const grid = Array.from({ length: MAX_ROWS }, () => Array(MAX_COLS))
    for (let row = 0; row < MAX_ROWS; row++) {
        for (let col = 0; col < MAX_COLS; col++) {
            grid[row][col] = new Node(
                row,
                col,
                (row === start.row && col === start.col),
                (row === end.row && col === end.col),
            )
        }
    }
    return grid
}
    
export const MAX_ROWS = 45
export const MAX_COLS = 91

export const delay = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

export const getRandInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

export const checkIfStartOrEnd = (row, col) => {
    return (
        (row === 0 && col === 0) || (row === MAX_ROWS - 1 && col === MAX_COLS - 1)
    )
}

export const isEqual = (a, b) => {
    return a.row === b.row && a.col === b.col;
}

export const isRowColEqual = (row, col, tile) => {
    return row === tile.row && col === tile.col
}

