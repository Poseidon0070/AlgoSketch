export const MAX_ROWS = 45;
export const MAX_COLS = 90;

class Node{
    constructor(row, col, isStart=false, isEnd=false, distance=Infinity, isWall=false, isPath=false, isTraversed=false, parent=null){
        this.row = row;
        this.col = col;
        this.isStart = isStart;
        this.isEnd = isEnd;
        this.distance = distance
        this.isWall = isWall;
        this.isPath = isPath;
        this.isTraversed = isTraversed;
        this.parent = parent;
    }
}

export const generateGrid = (start, end) => {
    const grid = Array.from({length:MAX_ROWS}, () => Array(MAX_COLS))
    for (let row = 0; row < MAX_ROWS; row++) {
        for (let col = 0; col < MAX_COLS; col++) {
            grid[row][col] = new Node(
                row,
                col,
                (row === start.row && col === start.col),
                (row === end.row && col === end.col),
            );
        }
    }
    return grid;
}


// 