import React from "react";
import tw from "tailwind-styled-components";
import AdventureIcon from "../../static/images/ResultIcon/Adventure.svg";
import ArtistIcon from "../../static/images/ResultIcon/Artist.svg";
import DetailIcon from "../../static/images/ResultIcon/Detail.svg";
import HarmoniousIcon from "../../static/images/ResultIcon/Harmonious.svg";
import InnovatorIcon from "../../static/images/ResultIcon/Innovator.svg";
import InventorIcon from "../../static/images/ResultIcon/Inventor.svg";

const Outter = tw.div`
  fixed top-0 left-0 flex flex-col
  w-screen h-screen items-center justify-center
  bg-white z-50 
`;

const Flex = tw.div`
flex flex-row items-center justify-center gap-6 p-4 md:p-0
`;

const Inner = tw.img`
animate-spin text-2xl w-16 
`;

const PageLoadSpinner = (props) => {
    return (
        <Outter>
            <Flex>
                <Inner src={InventorIcon} alt="" />
                <Inner src={HarmoniousIcon} alt="" />
                <Inner src={InnovatorIcon} alt="" />
                <Inner src={AdventureIcon} alt="" />
                <Inner src={DetailIcon} alt="" />
                <Inner src={ArtistIcon} alt="" />
            </Flex>
        </Outter>
    );
};

export default PageLoadSpinner;
