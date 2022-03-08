import React from "react";
import tw from "tailwind-styled-components"
import GitHubIcon from '@mui/icons-material/GitHub';

const Intro = () => {

    return (
      <Outter>
        <GitHubIcon style={{fontSize: "150px"}} className={"text-yellow-800 motion-safe:animate-bounce"} />
      </Outter>
    );
}

const Outter = tw.div`
  fixed top-0 left-0
  w-screen h-screen flex items-center justify-center
  bg-yellow-300 z-50
`;

export default Intro;