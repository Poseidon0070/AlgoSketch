import React from 'react'
import NavLink from './nav-link'

const MainHeader = () => {
  return (
    <div className='flex h-[80px] justify-around items-center main-header'>
        <div className='text-[20px] font-semibold'>
            AlgoSketch
        </div>
        <div>
            <ul className='flex gap-20'> 
                <NavLink href={'/sorting'}>Sorting</NavLink>
                <NavLink href={'/path-finder'}>Path-Finder</NavLink>
            </ul>
        </div>
      
    </div>
  )
}

export default MainHeader
