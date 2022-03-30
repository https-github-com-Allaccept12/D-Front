import React from "react";

import tw from "tailwind-styled-components";

const Btn = tw.button` 
   rounded-full text-base shadow-sm 
   flex flex-row justify-center items-center 
   font-min2 px-4 p-0
  ${(props) => (props.size === "1" ? `h-b02 w-full max-w-xl` : "")};
  ${(props) => (props.size === "2" ? `h-b02 px-4 w-44 ` : "")};
  ${(props) => (props.size === "3" ? `w-[18rem]` : "")};

  ${(props) =>
      props.color === "1"
          ? `
  text-white bg-dgray-300 h-16 px-10 md:px-32 md:h-b02
  hover:bg-dpurple-300 
  active:bg-dpurple-400
  disabled:bg-dpurple-100`
          : ""};
  ${(props) =>
      props.color === "2"
          ? `
  text-white bg-dpurple-200
  hover:bg-dpurple-300 
  active:bg-dpurple-400
  disabled:bg-dpurple-100`
          : ""};
  ${(props) =>
      props.color === "3"
          ? `
  text-white bg-dred-300 
  hover:bg-dred-400 
  active:bg-dred-500
  disabled:bg-dred-100`
          : ""};

  ${(props) =>
      props.color === "4"
          ? `
  text-dpurple-200 bg-white h-b02 w-full md:w-[32.5rem]
  border border-dpurple-200
  hover:bg-dpurple-100 
  active:bg-[#E3D7FD]
  disabled:border-dpurple-100
  disabled:bg-white
  disabled:text-dpurple-100
  `
          : ""};
  ${(props) =>
      props.color === "5"
          ? `
  text-dgray-400 bg-white h-b02 w-full md:w-[32.5rem]
  border border-dgray-400
  hover:bg-dgray-200 
  active:bg-[#EBEEF3]
  disabled:border-dgray-200
  disabled:bg-white
  disabled:text-dgray-200
  
  `
          : ""};
  ${(props) =>
      props.color === "6"
          ? `
  text-dred-300 md:px-80 md:h-b02 md:w-[32.5rem]
  border border-dred-300
  hover:bg-dred-100 
  active:bg-[#FFD3DA]
  disabled:border-dred-100
  disabled:bg-white
  disabled:text-dred-100
  
  `
          : ""};
`;

const Button = (props) => {
    const { size, color, styles, children, onClick, disabled, className } = props;

    return (
        <Btn size={size} color={color} styles={styles} onClick={onClick} disabled={disabled} className={className}>
            {children}
        </Btn>
    );
};

Button.defaultProps = {
    size: "1",
    color: "1",
    children: null,
    onClick: () => {},
    iconColor: "",
    className: "",
};

export default Button;
