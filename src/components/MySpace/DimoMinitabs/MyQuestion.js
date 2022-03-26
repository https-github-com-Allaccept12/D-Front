import React from "react";

import { DimoQNACard } from "../../Dimo";
import tw from "tailwind-styled-components";

const Box = tw.div`
min-h-screen flex flex-col gap-3 w-full
`;

const MyQuestion = (props) => {
  return (
    <>
      <Box>
        <DimoQNACard />
        <DimoQNACard />
        <DimoQNACard />
      </Box>
    </>
  );
};

export default MyQuestion;
