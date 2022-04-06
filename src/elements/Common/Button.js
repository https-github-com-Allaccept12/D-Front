import React from "react";
import Icon from "../Icons/Icon";
import tw from "tailwind-styled-components";

const Btn = tw.button`
   rounded-full text-sm md:text-base shadow-sm flex flex-row justify-center items-center 
   font-min1 disabled:bg-dgray-300
  ${(props) => (props.size === "1" ? `h-b01 px-6 w-36` : "")};
  ${(props) => (props.size === "2" ? `h-b02 px-4 py-4 w-36` : "")};
  ${(props) => (props.size === "3" ? `h-b03 px-2 py-5 w-40` : "")};
  ${(props) => (props.disabled ? "bg-gray-300" : "")};

  ${(props) =>
      props.color === "1"
          ? `
  text-white bg-dpurple-200 
  hover:bg-dpurple-300 
  active:bg-dpurple-400
  disabled:bg-dpurple-100`
          : ""};
  ${(props) =>
      props.color === "2"
          ? `
  text-white bg-dgray-300 
  hover:bg-dgray-400 
  active:bg-dgray-500
  disabled:bg-dgray-100`
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
  text-dpurple-200 bg-white
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
  text-dgray-400 bg-white
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
  text-dred-300 
  border border-dred-300
  hover:bg-dred-100 
  active:bg-[#FFD3DA]
  disabled:border-dred-100
  disabled:bg-white
  disabled:text-dred-100
  
  `
          : ""};
          ${(props) =>
              props.color === "7"
                  ? `
        text-white
        border border-white
        bg-transparent
        hover:bg-dpurple-100
        active:bg-dpurple-200
        disabled:border-dred-100
        disabled:bg-white
        disabled:text-dpurple-200
        
        `
                  : ""};
`;
const IconColor = tw.span` 
mr-2 
${(props) => (props.iconColor === "heart" ? `text-dred-300` : "")};
${(props) => (props.iconColor === "book" ? `text-dpurple-300` : "")};
`;

const Button = (props) => {
    const {
        size,
        color,
        styles,
        children,
        onClick,
        disabled,
        is_loading,
        icon,
        name,
        iconSize,
        iconColor,
        className,
        count,
    } = props;

    return (
        <Btn
            size={size}
            color={color}
            styles={styles}
            onClick={onClick}
            disabled={disabled}
            is_loading={is_loading}
            className={className}
        >
            {icon && (
                <IconColor iconColor={iconColor}>
                    <Icon name={name} iconSize={iconSize} />
                </IconColor>
            )}

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
