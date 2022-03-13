import React from "react";
import tw from "tailwind-styled-components"

const TitleText = tw.div`
  font-sanss2 ml-2 text-xl font-bold tracking-wide text-gray-100
  cursor-pointer underline decoration-gray-100
`;

const Title = (props) => {
  const { children, onClick } =
  props;


  return <TitleText onClick={onClick} >{children}</TitleText>;
};

Title.defaultProps = {
  children: null,
  onClick: () => {},
};



export default Title;
