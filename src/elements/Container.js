import React from "react";
import tw from "tailwind-styled-components";

const Btime = tw.div` 
    bg-blue-400 h-80 container
     ${(props) => (props.direction === "right" ? `grid col-end-7 row-span-2` : "")};
     ${(props) => (props.direction === "left" ? `absolute left-2` : "")};
     ${(props) => (props.color === "trans" ? `bg-transparent` : "")};
     ${(props) => (props.is_flex ? `flex` : "")};
     ${(props) => (props.size === "large" ? `p-40` : "")};
     ${(props) => (props.size === "small" ? `w-full mx-auto p-4` : "")};
` 

const Container = (props) => {
  const {
    children,
    direction,
    color,
    shadow,
    size,
    is_flex
  } = props;

  return (
      <React.Fragment>
      <Btime direction={direction} color={color} shadow={shadow} size={size} is_flex={is_flex}>
        {children}
      </Btime>
    </React.Fragment>
  );
};

Container.defaultProps = {
  children: null,
  direction: "",
  is_trans: "",
  shadow: "",
  size: "",
  is_flex: false
};

export default Container;
