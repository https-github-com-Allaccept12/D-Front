import React from "react";
import tw from "tailwind-styled-components";

const Btime = tw.div` 
    bg-yellow-400 p-1 rounded-lg flex flex-row
    text-yellow-800 font-sanss2 justify-evenly items-center
    border-x-4 border-yellow-300 shadow-md my-3 mx-2 flex-wrap
` 

const NonGrid = (props) => {
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

NonGrid.defaultProps = {
  children: null,
  _onClick: () => {},
};

export default NonGrid;
