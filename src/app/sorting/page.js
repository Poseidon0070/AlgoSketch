'use client';

import { resetArrayandAnimation } from '@/store/slices/sortingSlice'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const sortingVisualizer = () => {

    const array = useSelector(state => state.sorting.array)
    const dispatch = useDispatch()
    console.log("array=>", array)
    useEffect(() => {
        dispatch(resetArrayandAnimation());
        console.log("here----")
        window.addEventListener("resize", () => dispatch(resetArrayandAnimation()));

        return () => {
            window.removeEventListener("resize", () => dispatch(resetArrayandAnimation()));
        };
    }, []);

    return (
        <div>
            <div className="relative h-[calc(100vh-66px)] w-full" id='content-container'>
                <div className="absolute bottom-[32px] w-full mx-auto left-0 right-0 flex justify-center items-end">
                    {array.map((value, index) => (
                        <div
                            key={index}
                            className="relative mx-0.5 shadow-lg opacity-70 rounded-lg bg-purple-700"
                            style={{ height: `${value}px`, width: "2.5px" }}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default sortingVisualizer
