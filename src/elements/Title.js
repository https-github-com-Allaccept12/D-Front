import React from "react";
import tw from "tailwind-styled-components"

const TitleText = tw.div`
  font-sanss ml-2 text-5xl font-bold tracking-wide text-gray-100
  cursor-pointer underline decoration-gray-100
`;

const Title = (props) => {
  const { children, _onClick } =
  props;


  return <TitleText onClick={_onClick} >{children}</TitleText>;
};

Title.defaultProps = {
  children: null,
  _onClick: () => {},
};



export default Title;
