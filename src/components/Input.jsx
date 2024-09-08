import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label
          className=" inline-block float-left mb-1 pl-1 text-lg text-footeritem"
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <input
        type={type}
        autoComplete="username"
        className={` px-3 py-2 rounded-lg bg-[#393E46] text-white 
        outline-none focus:bg-[#393E46] duration-200 border 
        border-gray-200 w-full ring-2 ring-[#00FFF5]/40 ${className}`}
        ref={ref}
        {...props}
        id={id}
      />
    </div>
  );
});

export default Input;
