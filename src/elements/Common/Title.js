import React from "react";
import tw from "tailwind-styled-components"

const TitleText = tw.div`
${(props) => (props.size === "1" ? `font-minB text-5xl` : "")};
${(props) => (props.size === "2" ? `font-minB text-4xl` : "")};
${(props) => (props.size === "3" ? `font-minB text-3xl` : "")};
${(props) => (props.size === "4" ? `font-minB text-2xl` : "")};
${(props) => (props.size === "5" ? `font-minB text-xl` : "")};
${(props) => (props.size === "6" ? `font-min1 text-xl` : "")};
${(props) => (props.color === "W" ? `text-white` : "")};
`;

const Title = (props) => {
  const { children, onClick, size, color, className } =
  props;


  return <TitleText onClick={onClick} size={size} color={color} className={className} >{children}</TitleText>;
};

Title.defaultProps = {
  children: null,
  onClick: () => {},
  size: 3,
  color: "",
  className: ""
};



export default Title;
