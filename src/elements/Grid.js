import React from "react";
import tw from "tailwind-styled-components";

const Btime = tw.div` 
    bg-blue-400 p-1 flex
    text-gray-200 font-sanss2 justify-evenly items-center
     shadow-md flex-wrap
` 

const Grid = (props) => {
  const {
    children,
  } = props;

  return (
      <React.Fragment>
      <Btime>
        {children}
      </Btime>
    </React.Fragment>
  );
};

Grid.defaultProps = {
  children: null,
};

export default Grid;
