import React from "react";
import tw from "tailwind-styled-components";


const Btn = tw.button`
  font-sanss2 shadow-md box-border 
  rounded-md p-2 py-2 text-white
  ${(props) => (props.disabled ? "bg-gray-300" : "bg-yellow-400")};
  ${(props) => (props.disabled ? "cursor-default" : "cursor-pointer")};
`;

const Button = (props) => {
  const {
    children,
    _disabled,
    _onClick
  } = props;


  return (
    <Btn disabled={_disabled} onClick={_onClick}>
      {children}
    </Btn>
  );
};

Button.defaultProps = {
  children: null,
  _onClick: () => {},
  
};


export default Button;