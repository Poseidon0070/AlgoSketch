'use client'
import { algorithmOptions } from "@/utils/utility";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
export const AlgorithmSelector = ({ options, algorithm = "bubble", onChange, isDisabled = false }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const selectHandler = (value) => {
        onChange(value);
        setIsOpen(false)
    }
    return (
        <div className="relative inline-block text-left">
            <div>
                <div
                    className="appearance-none h-8 flex items-center w-48  bg-gray-800 border-cyan-900
                    border px-4 py-1 rounded-lg shadow cursor-none leading-tight focus:outline-none focus:shadow-outline text-gray-300 select-none"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                    onClick={toggleDropdown}
                >
                    <div className="flex justify-evenly w-full items-center">
                        <p>{algorithm}</p>
                        <div className="w-full ml-auto"><IoIosArrowUp className="ml-auto" /></div>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div
                    className="origin-top-right absolute left-0 bottom-9 cursor-none mt-1 w-48 rounded-md shadow-lg bg-gray-800 border-cyan-900  ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1"
                >
                    <ul className="py-1" role="none">
                        {
                            options.map((option, index) => (
                                <li
                                    className="block px-4 py-1 text-sm cursor-none"
                                    role="menuitem"
                                    key={index}
                                    value={option.value} // Ensure each option has a value
                                    onClick={() => selectHandler(option.value)} // Pass the option's value to selectHandler
                                >
                                    {option.label}
                                </li>
                            ))
                        }
                    </ul>
                </div>

            )}
        </div>
    );
};

// import React from "react";
// import { IoIosArrowUp } from "react-icons/io";

// export const AlgorithmSelector = ({options,defaultValue,onChange,isDisabled = false}) => {
//   return (
//     <div className="flex items-center relative w-48 ">
//       <select
//         disabled={isDisabled}
//         onChange={onChange}
//         defaultValue={defaultValue}
//         className="block appearance-none h-8 w-full bg-gray-800 border-cyan-900
//         border px-4 py-1 pr-8 rounded-lg shadow cursor-none leading-tight focus:outline-none focus:shadow-outline text-gray-300"
//       >
//         {options.map((option) => (
//           <option key={option.value} value={option.value}>
//             {option.label}
//           </option>
//         ))}
//       </select>
//         <IoIosArrowUp className="relative right-6"/>
//     </div>
//   );
// };