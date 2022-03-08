import React from "react";
import tw from "tailwind-styled-components";


const Btn = tw.button`
  font-sanss2 shadow-md box-border 
  rounded-md p-2 py-2 text-white
  ${(props) => (props.disabled ? "bg-gray-300" : "bg-blue-400")};
  ${(props) => (props.disabled ? "cursor-default" : "cursor-pointer")};
`;

const Button = (props) => {
  const {
    children,
    _disabled,
    onClick
  } = props;


  return (
    <Btn disabled={_disabled} onClick={onClick}>
      {children}
    </Btn>
  );
};

Button.defaultProps = {
  children: null,
  onClick: () => {},
  
};


export default Button;