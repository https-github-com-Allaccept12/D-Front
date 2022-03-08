import React from "react";
import tw from "tailwind-styled-components";

const P = tw.p`
  text-base text-yellow-800 font-sanss2
`;

const Text = (props) => {
  const { children, _onClick, is_click } =
    props;

  const styles = {
    children,
    is_click,
  };
  return (
    <P {...styles} onClick={_onClick}>
      {children}
    </P>
  );
};

Text.defaultProps = {
  children: null,
  _onClick: () => {},
};


export default Text;
