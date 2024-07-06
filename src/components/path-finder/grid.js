'use client'
// import { usePathfinding } from "../hooks/usePathfinding";
import { MAX_ROWS, MAX_COLS } from "@/utils/pathfinder-utility"
import { useState } from "react";
import { useSelector } from "react-redux";
import Node from "./node";
// import { node } from "./node";
// import { MutableRefObject, useState } from "react";
// import { checkIfStartOrEnd, createNewGrid } from "../utils/helpers";

export function Grid() {
    const { grid, isGraph } = useSelector(state => state.pathFinder)
    const [isMouseDown, setIsMouseDown] = useState(false);
    console.log(MAX_COLS, MAX_COLS)

      const handleMouseDown = (row, col) => {
        if (isVisualizationRunningRef.current || checkIfStartOrEnd(row, col)) {
          return;
        }

        setIsMouseDown(true);
        const newGrid = createNewGrid(grid, row, col);
        setGrid(newGrid);
      };

      const handleMouseUp = (row, col) => {
        if (isVisualizationRunningRef.current || checkIfStartOrEnd(row, col)) {
          return;
        }

        setIsMouseDown(false);
      };

      const handleMouseEnter = (row, col) => {
        if (isVisualizationRunningRef.current || checkIfStartOrEnd(row, col)) {
          return;
        }

        if (isMouseDown) {
          const newGrid = createNewGrid(grid, row, col);
          setGrid(newGrid);
        }
      };
    console.log(grid[0][0])
    return (
        <div
            className={
                `flex items-center flex-col justify-center border-sky-300 mt-10
                lg:min-h-[${MAX_ROWS * 17}px]  md:min-h-[${MAX_ROWS * 15}px] 
                xs:min-h-[${MAX_ROWS * 8}px] min-h-[${MAX_ROWS * 7}px]
                lg:w-[${MAX_COLS * 17}px] md:w-[${MAX_COLS * 15}px] 
                xs:w-[${MAX_COLS * 8}px] w-[${MAX_COLS * 7}px]`
            }
        >
            {grid.map((row, rowIndex) => (
                <div key={rowIndex} className="flex">
                    {row.map((node, index) => (
                        <Node
                            key={index}
                            row={node.row}
                            col={node.col}
                            isStart={node.isStart}
                            isEnd={node.isEnd}
                            isTraversed={node.isTraversed}
                            isWall={node.isWall}
                            isPath={node.isPath}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}

// isVisited={node.isVisited}
// isShortestPath={node.isShortestPath}
// isMouseOver={node.isMouseOver}
// onMouseEnter={handleMouseEnter}
// onMouseDown={handleMouseDown}
// onMouseUp={handleMouseUp}
// this.row = row;
// this.col = col;
// this.isStart = isStart;
// this.isEnd = isEnd;
// this.distance = distance
// this.isWall = isWall;
// this.isPath = isPath;
// this.isTraversed = isTraversed;
// this.parent = parent;
{/* <div className="bg-white h-3 w-5 border"></div> */ }
//   className={
//     `flex items-center flex-col justify-center border-sky-300 mt-10
//     lg:min-h-[${MAX_ROWS * 17}px]  md:min-h-[${MAX_ROWS * 15}px]
//     xs:min-h-[${MAX_ROWS * 8}px] min-h-[${MAX_ROWS * 7}px]
//     lg:w-[${MAX_COLS * 17}px] md:w-[${MAX_COLS * 15}px]
//     xs:w-[${MAX_COLS * 8}px] w-[${MAX_COLS * 7}px]`
//   }
// {r.map((node, nodeIndex) => {
//   const { row, col, isEnd, isStart, isPath, isTraversed, isWall } =
//     node;
//   return (
//     <node
//       key={nodeIndex}
//       row={node.row}
//       col={node.col}
//       isEnd={isEnd}
//       isStart={isStart}
//       isPath={isPath}
//       isTraversed={isTraversed}
//       isWall={isWall}
//       handleMouseDown={() => handleMouseDown(row, col)}
//       handleMouseUp={() => handleMouseUp(row, col)}
//       handleMouseEnter={() => handleMouseEnter(row, col)}
//     />
//   );
// })}