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

const Button = (props) => {
  const {
    children,
    disabled,
    size,
    color,
    onClick,
  } = props;


  return (
    <Btn disabled={disabled} onClick={onClick} size={size} color={color}>
      {children}
    </Btn>
  );
};

Button.defaultProps = {
  children: null,
  onClick: () => {},
  size: "",
  color: "",
};


export default Button;