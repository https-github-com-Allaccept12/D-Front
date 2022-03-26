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
    option03,
    option04,
    option05,
    option06,
    option07,
    option08,
    option09,
    option10,
    option11,
    option12,
  } = props;

  return (
    <>
      <select
        class="form-select appearance-none
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
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        aria-label="Default select example"
      >
        <option selected>{title}</option>
        <option value="1">{option01}</option>
        <option value="2">{option02}</option>
        <option value="3">{option03}</option>
        <option value="4">{option04}</option>
        <option value="5">{option05}</option>
        <option value="6">{option06}</option>
        <option value="7">{option07}</option>
        <option value="8">{option08}</option>
        <option value="9">{option09}</option>
        <option value="10">{option10}</option>
        <option value="11">{option11}</option>
        <option value="12">{option12}</option>
      </select>
    </>
  );
};

SelectBox.defaultProps = {
  title: "옵션을 선택하세여",
  option01: "옵션1",
  option02: "옵션2",
  option03: "옵션3",
  option04: "옵션4",
  option05: "옵션5",
  option06: "옵션6",
  option07: "옵션7",
  option08: "옵션8",
  option09: "옵션9",
  option10: "옵션10",
  option11: "옵션11",
  option12: "옵션12",
};

export default SelectBox;
