import React from 'react'

const MainHeader = () => {
  return (
    <div className='flex  h-[80px] justify-around items-center main-header'>
        <div>
            AlgoSketch
        </div>
        <div>
            <ul className='flex gap-20'> 
                <li>Sorting</li>
                <li>Path-Finder</li>
            </ul>
        </div>
      
    </div>
  )
}

export default MainHeader
