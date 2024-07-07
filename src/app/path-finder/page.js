'use client'

import { Grid } from '@/components/path-finder/grid'
import { PathfinderAlgorithmSelector } from '@/components/path-finder/pathfinder-algorithm-selector'
import { PathfinderSpeedController } from '@/components/path-finder/pathfinder-speed-controller'
import { generateMaze, pathFinderActions, resetGrid } from '@/store/slices/pathfinder-slice'
import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MAX_ROWS,MAX_COLS } from '@/utils/pathfinder-utility'

const PathFinder = () => {
  const isVisualizationRunningRef = useRef()
  const { grid, traversalSpeed } = useSelector(state => state.pathFinder)
  const dispatch = useDispatch()
  return (
    <div>
      <div>
        <Grid isVisualizationRunningRef={isVisualizationRunningRef} />
      </div>
      <div className='absolute bottom-5 sm:bottom-12 flex justify-center items-center w-full'>
        <div className='flex justify-center gap-x-5 md:gap-x-12 gap-y-4 items-center flex-wrap w-full'>
          <PathfinderSpeedController
            value={traversalSpeed}
            isDisabled={false}
            handleChange={(e) => dispatch(pathFinderActions.setTraversalSpeed(e.target.value))}
          />
          <button onClick={() => dispatch(generateMaze(grid, {row : 1, col : 1}, { row: MAX_ROWS-2, col: MAX_COLS-2 }, false, traversalSpeed))} className={`${false ? 'text-red-600' : 'bg-gray-800'} appearance-none h-8 flex items-center w-30  bg-gray-800 border-cyan-900
                    border px-4 py-1 rounded-lg shadow cursor-none leading-tight focus:outline-none focus:shadow-outline text-gray-300 select-none `}>
            Generate Maze
          </button>
          <button onClick={() => dispatch(resetGrid())} className={`${false ? 'text-red-600' : 'bg-gray-800'} appearance-none h-8 flex items-center w-30  bg-gray-800 border-cyan-900
                    border px-4 py-1 rounded-lg shadow cursor-none leading-tight focus:outline-none focus:shadow-outline text-gray-300 select-none `}>
            Reset
          </button>
          <button onClick={()=>{}} disabled={false} className='appearance-none h-8 flex items-center w-30  bg-gray-800 border-cyan-900
                    border px-4 py-1 rounded-lg shadow cursor-none leading-tight focus:outline-none focus:shadow-outline text-gray-300 select-none'>
            Start
          </button>
        </div>
      </div>
    </div>
  )
}

export default PathFinder
