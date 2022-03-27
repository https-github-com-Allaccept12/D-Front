import React from "react";

import tw from "tailwind-styled-components";
import Adventure from "../../static/images/ResultIcon/Adventure.svg";
import Artist from "../../static/images/ResultIcon/Artist.svg";
import Detail from "../../static/images/ResultIcon/Detail.svg";
import Harmonious from "../../static/images/ResultIcon/Harmonious.svg";
import Innovator from "../../static/images/ResultIcon/Innovator.svg";
import Inventor from "../../static/images/ResultIcon/Inventor.svg";

const Types = tw.p`
 font-min1 border rounded-full pl-5 pr-4 text-sm leading-tight py-1 mb-5 flex flex-row justify-center items-center gap-2
 ${(props) => (props.types === "det" ? `border-[#F5C3AF] text-[#F5C3AF]` : "")};
 ${(props) => (props.types === "ino" ? `border-[#DB4A60] text-[#DB4A60]` : "")};
 ${(props) => (props.types === "art" ? `border-[#9262F7] text-[#9262F7]` : "")};
 ${(props) => (props.types === "inv" ? `border-[#5876FF] text-[#5876FF]` : "")};
 ${(props) => (props.types === "adv" ? `border-[#FED263] text-[#FED263]` : "")};   
 ${(props) => (props.types === "har" ? `border-[#1ABC9C] text-[#1ABC9C]` : "")};
                        


`;

const TypeBtn = (props) => {
    const { types, className } = props;

    if (types === "det")
        return (
            <Types className={className}>
                TYPE <img src={Detail} alt="" />
            </Types>
        );
    if (types === "ino")
        return (
            <Types className={className} types="in">
                TYPE <img src={Innovator} alt="" />
            </Types>
        );
    if (types === "art")
        return (
            <Types className={className}>
                TYPE <img src={Artist} alt="" />
            </Types>
        );
    if (types === "inv")
        return (
            <Types className={className}>
                TYPE <img src={Inventor} alt="" />
            </Types>
        );
    if (types === "adv")
        return (
            <Types className={className}>
                TYPE <img src={Adventure} alt="" />
            </Types>
        );
    if (types === "har")
        return (
            <Types className={className}>
                TYPE <img src={Harmonious} alt="" />
            </Types>
        );
};

TypeBtn.defaultProps = {
    types: "art",
    className: "",
};

export default TypeBtn;
