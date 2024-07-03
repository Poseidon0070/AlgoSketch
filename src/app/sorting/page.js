'use client';

import { SpeedController } from '@/components/speed-controler';
import { resetArrayandAnimation } from '@/store/slices/sortingSlice'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sortingAction } from '@/store/slices/sortingSlice';
import { AlgorithmSelector } from '@/components/algorithm-controller';
import { algorithmOptions } from "@/utils/utility";

const sortingVisualizer = () => {

    const sorting = useSelector(state => state.sorting)
    const dispatch = useDispatch()

    useEffect(() => {
    }, [sorting.animationSpeed])

    useEffect(() => {
        dispatch(resetArrayandAnimation());
        window.addEventListener("resize", () => dispatch(resetArrayandAnimation()));

        return () => {
            window.removeEventListener("resize", () => dispatch(resetArrayandAnimation()));
        };
    }, []);

    return (
        <div>
            <div className="flex flex-col justify-center items-center w-full mt-20 mb-14" id='content-container'>
                <div className="w-full mx-auto flex justify-center items-end">
                    {sorting.array.map((value, index) => (
                        <div
                            key={index}
                            className="relative mx-0.5 shadow-lg opacity-70 rounded-lg bg-cyan-700"
                            style={{ height: `${value}px`, width: "2.5px" }}
                        ></div>
                    ))}
                </div>
            </div>
            <div className='absolute bottom-12 flex justify-center items-center w-full'>
                <div className='flex justify-center items-center gap-20'>
                    <SpeedController 
                    value={sorting.animationSpeed}
                    isDisabled={sorting.isSorting} 
                    handleChange={(e) => dispatch(sortingAction.setAnimationSpeed(e.target.value))}   
                    />
                    <AlgorithmSelector options={algorithmOptions} algorithm={sorting.selectedAlgorithm} isDisabled={sorting.isSorting} onChange={(value) => dispatch(sortingAction.setAlgorithm(value))}/>
                </div>
            </div>
        </div>
    )
}

export default sortingVisualizer
