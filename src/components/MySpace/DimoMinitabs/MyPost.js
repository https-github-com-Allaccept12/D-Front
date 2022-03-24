import React from "react";

import { DimoCard } from "../../Dimo"
import { useHistory } from "react-router-dom";
import tw from "tailwind-styled-components";

const Box = tw.div`
min-h-screen flex flex-col gap-3
`

const MyPost = (props) => {
  let history = useHistory();
  return (
    <>
    <Box>
<DimoCard />
<DimoCard />
<DimoCard />
</Box>
    </>
  );
};

export default MyPost;