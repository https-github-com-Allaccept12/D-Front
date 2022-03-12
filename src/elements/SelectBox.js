import React from "react";
import tw from "tailwind-styled-components";


const Btn = tw.button`
  font-sanss2 shadow-md box-border
  rounded-md p-2 py-2 text-white
  ${(props) => (props.disabled ? "bg-gray-300" : "bg-blue-400")};
  ${(props) => (props.disabled ? "cursor-default" : "cursor-pointer")};
  ${(props) => (props.size === "medium" ? "p-20" : "")};
  ${(props) => (props.size === "large" ? "p-40" : "")};
  ${(props) => (props.color === "red" ? "bg-red-500" : "")};
  ${(props) => (props.color === "green" ? "bg-green-500" : "")};
`;

const SelectBox = (props) => {
  const {
    title,
    option01,
    option02,
    option03
  } = props;


  return (
      <>
    <select class="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
        <option selected>{title}</option>
        <option value="1">{option01}</option>
        <option value="2">{option02}</option>
        <option value="3">{option03}</option>
    </select>
      </>
  );
};

SelectBox.defaultProps = {
    title: "옵션을 선택하세여",
    option01: "옵션1",
    option02: "옵션2",
    option03: "옵션3"
};


export default SelectBox;