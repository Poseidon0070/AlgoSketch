import { MAX_ROWS } from "@/utils/pathfinder-utility";

export const TILE_STYLE = "lg:w-[17px] md:w-[15px] xs:w-[8px] w-[7px] lg:h-[17px] md:h-[15px] xs:h-[8px] h-[7px] border-t border-r border-sky-200";
export const TRAVERSED_TILE_STYLE = TILE_STYLE + " bg-cyan-500";
export const START_TILE_STYLE = TILE_STYLE + " bg-purple-600";
export const END_TILE_STYLE = TILE_STYLE + " bg-green-600";
// export const END_TILE_STYLE = TILE_STYLE + " bg-red-600";
export const WALL_TILE_STYLE = TILE_STYLE + " bg-gray-200";
export const PATH_TILE_STYLE = TILE_STYLE + " bg-green-600";

const Node = ({ row, col, isStart, isEnd, isTraversed, isWall, isPath, handleMouseDown, handleMouseUp, handleMouseEnter }) => {

  let nodeStyle;

  if (isStart) {
    nodeStyle = START_TILE_STYLE;
  } else if (isEnd) {
    nodeStyle = END_TILE_STYLE;
  } else if (isWall) {
    nodeStyle = WALL_TILE_STYLE;
  } else if (isPath) {
    nodeStyle = PATH_TILE_STYLE;
  } else if (isTraversed) {
    nodeStyle = TRAVERSED_TILE_STYLE;
  } else {
    nodeStyle = TILE_STYLE;
  }

  const borderStyle =
    row === MAX_ROWS - 1 ? "border-b" : col === 0 ? "border-l" : "";
  const edgeStyle = row === MAX_ROWS - 1 && col === 0 ? "border-l" : "";

  return (
    <div
      className={`${nodeStyle} ${borderStyle} ${edgeStyle}`}
      id={`${row}-${col}`}
      onMouseUp={() => handleMouseUp(row, col)}
      onMouseDown={() => handleMouseDown(row, col)}
      onMouseEnter={() => handleMouseEnter(row, col)}
    />
  );
};

export default Node