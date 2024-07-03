import React from "react";

export const AlgorithmSelector = ({options,defaultValue,onChange,isDisabled = false}) => {
  return (
    <div className="inline-block relative w-48">
      <select
        disabled={isDisabled}
        onChange={onChange}
        defaultValue={defaultValue}
        className="block appearance-none h-8 w-full bg-gray-800 border-cyan-900 
        border px-4 py-1 pr-8 rounded-lg shadow leading-tight focus:outline-none focus:shadow-outline text-gray-300"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

    </div>
  );
};