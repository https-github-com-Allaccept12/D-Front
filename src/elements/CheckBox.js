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

const CheckBox = (props) => {
  const {
    children,
    checked,
    label,
  } = props;


  return (
      <>
    <div className="form-check flex-row">
      <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
      <label className="form-check-label inline-block text-gray-800" for="flexCheckDefault">
        {label}
      </label>

    </div>
      </>
  );
};

CheckBox.defaultProps = {
  children: null,
  onClick: () => {},
  size: "",
  color: "",
};


export default CheckBox;