import React from "react";
import tw from "tailwind-styled-components"

const BodyText = tw.div`
${(props) => (props.size === "1" ? `font-min1 text-tiny` : "")};
${(props) => (props.size === "2" ? `font-min2 text-tiny` : "")};
${(props) => (props.size === "3" ? `font-min1 text-sm` : "")};
${(props) => (props.size === "4" ? `font-min2 text-sm` : "")};
${(props) => (props.size === "5" ? `font-min2 text-xs` : "")};
${(props) => (props.size === "6" ? `font-min3 text-xs` : "")};
${(props) => (props.size === "7" ? `font-min3 text-7xl` : "")};

`;

const Text = (props) => {
  const { children, onClick, size } =
  props;


  return <BodyText onClick={onClick} size={size} >{children}</BodyText>;
};

Text.defaultProps = {
  children: null,
  onClick: () => {},
  size: 3,
};



export default Text;
