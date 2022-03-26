import React from "react";
import { DimoComment } from "../../Dimo";
import tw from "tailwind-styled-components";

const Box = tw.div`
min-h-screen flex flex-col gap-3 w-full
`;

const MyComment = (props) => {
  return (
    <>
      <Box>
        <DimoComment />
        <DimoComment />
        <DimoComment />
      </Box>
    </>
  );
};

export default MyComment;
