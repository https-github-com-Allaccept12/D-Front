import React from "react";
import tw from "tailwind-styled-components";

const P = tw.div`
  text-base md:text-lg w-14 sm:w-24 lg:w-32
  rounded-md m-1 hover:bg-opacity-100
  absolute p-4 text-yellow-800 font-sanss2 shadow-md
  bg-yellow-300 animate-bounce hover:cursor-pointer
  hover:border-yellow-200 hover:border-4
  transform hover:w-auto
${(props) => (props.is_false ? "" : "truncate")};
${(props) => (props.layout === "left" ? `ml-60 bg-opacity-75 lg:ml-80` : "")};
${(props) => (props.layout === "right" ? `mr-60 bg-opacity-75 lg:mr-80` : "")};
${(props) => (props.layout === "bottom" ? `mt-60 bg-opacity-75 lg:mt-80` : "")};
`;

const PostText = (props) => {
  const { children, _onClick, is_false, layout } =
    props;

  return (
    <P is_false={is_false} layout={layout} onClick={_onClick}> 
      {children}
    </P>
  );
};

PostText.defaultProps = {
  children: null,
  _onClick: () => {},
  is_false : false,
  layout : "bottom"
};


export default PostText;
