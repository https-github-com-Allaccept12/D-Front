import React from "react";
import tw from "tailwind-styled-components";

const P = tw.p`
  text-base text-gray-600 font-sanss2 font-extrabold
  ${(props) => (props.size === "medium" ? "text-lg" : "")};
  ${(props) => (props.size === "large" ? "text-2xl" : "")};
  ${(props) => (props.bold === "medium" ? "font-bold" : "")};
  ${(props) => (props.bold === "large" ? "font-extrabold" : "")};
  ${(props) => (props.color === "red" ? "text-red-500" : "")};
  ${(props) => (props.color === "green" ? "text-green-500" : "")};
`;

const Text = (props) => {
  const { 
    children, 
    onClick,
    bold,
    size, 
    color,
  } =
    props;


  return (
    <P onClick={onClick} bold={bold} size={size} color={color} >
      {children}
    </P>
  );
};

Text.defaultProps = {
  children: null,
  onClick: () => {},
  bold: "",
  size: "",
  color: "",
};


export default Text;
