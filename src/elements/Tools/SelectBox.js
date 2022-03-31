import React from "react";
import tw from "tailwind-styled-components";

const SelectBox = (props) => {
    const { title, option01, option02, option03, className } = props;

    return (
        <>
            <div className={className}>
                <select
                    className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-lg font-min2
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded-xl 
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    aria-label="Default select example"
                >
                    <option value="0">{title}</option>
                    <option value="1">{option01}</option>
                    <option value="2">{option02}</option>
                    <option value="3">{option03}</option>
                </select>
            </div>
        </>
    );
};

SelectBox.defaultProps = {
    title: "옵션을 선택하세여",
    option01: "옵션1",
    option02: "옵션2",
    option03: "옵션3",
    className: "",
};

export default SelectBox;
