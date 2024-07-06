import { MAX_ROWS } from "@/utils/pathfinder-utility";

const Node = ({ row, col, isStart, isEnd, isTraversed, isWall, isPath, handleMouseDown, handleMouseUp, handleMouseEnter }) => {
  let nodeStyle;
  
  const TILE_STYLE = "lg:w-[17px] md:w-[15px] xs:w-[8px] w-[7px] lg:h-[17px] md:h-[15px] xs:h-[8px] h-[7px] border-t border-r border-sky-200";
  const TRAVERSED_TILE_STYLE = TILE_STYLE + " bg-cyan-500";
  const START_TILE_STYLE = TILE_STYLE + " bg-purple-600";
  const END_TILE_STYLE = TILE_STYLE + " bg-red-600";
  const WALL_TILE_STYLE = TILE_STYLE + " bg-gray-200";
  const PATH_TILE_STYLE = TILE_STYLE + " bg-green-600";

  if (isStart) {
    nodeStyle = START_TILE_STYLE;
    console.log(nodeStyle)
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

  // Define border styles statically
  const borderStyle =
    row === MAX_ROWS - 1 ? "border-b" : col === 0 ? "border-l" : "";
  const edgeStyle = row === MAX_ROWS - 1 && col === 0 ? "border-l" : "";

  //   console.log(nodeStyle)
  return (
    <div
      className={`${nodeStyle} ${borderStyle} ${edgeStyle}`}
      id={`${row}-${col}`}
    />
  );
};
// onMouseDown={() => handleMouseDown(row, col)}
// onMouseUp={() => handleMouseUp(row, col)}
// onMouseEnter={() => handleMouseEnter(row, col)}

export default Node