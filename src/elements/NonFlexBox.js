import React from "react";
import tw from "tailwind-styled-components";

const Btime = tw.div` 
    bg-yellow-300 rounded-sm
    text-yellow-800 font-sanss2 justify-evenly items-center
    shadow-md my-3 p-4
` 

const NonFlexBox = (props) => {
  const {
    children,
    _onClick,
  } = props;


  return (
      <React.Fragment>
    <Btime onClick={_onClick}>
      {children}
    </Btime>
    </React.Fragment>
  );
};

NonFlexBox.defaultProps = {
  children: null,
  _onClick: () => {},
};

export default NonFlexBox;
