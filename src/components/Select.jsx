import React, { useId } from "react";

function Select({ label, options = [], className = "", ...props }, ref) {
  const id = useId();
  return (
    <div className=" w-full">
      {label && (
        <label
          className=" block text-left mb-1 pl-1 text-lg text-footeritem"
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <select
        id={id}
        {...props}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-[#393E46] 
          outline-none text-white focus:bg-[#393E46] 
         duration-200 border border-gray-200 w-full
         ring-2 ring-[#00FFF5]/40
         ${className}`}
      >
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default React.forwardRef(Select);
