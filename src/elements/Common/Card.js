import React from "react";
import tw from "tailwind-styled-components";

const ArtWorkImage = tw.img`
overflow-hidden object-cover object-center m-2 rounded-lg pointer-events-none
${(props) => (props.size === "1" ? `w-c01 h-c01` : "")};
${(props) => (props.size === "2" ? `w-c02 h-c02` : "")};
${(props) => (props.size === "3" ? `w-c03 h-c03` : "")};
${(props) => (props.size === "4" ? `w-c04 h-c04` : "")};
${(props) => (props.size === "5" ? `w-c05 h-c05` : "")};
${(props) => (props.size === "6" ? `w-c06 h-c06` : "")};
`;

const ArtWorkCard = tw.div`
m-2 rounded-lg justify-center flex flex-col items-center
border-y-yellow-200  pointer-events-none
${(props) => (props.size === "1" ? `w-c01 h-c01` : "")};
${(props) => (props.size === "2" ? `w-c02 h-c02` : "")};
${(props) => (props.size === "3" ? `w-c03 h-c03 bg-dpurple-200 shadow-md` : "")};
${(props) => (props.size === "4" ? `w-c04 h-c04` : "")};
${(props) => (props.size === "5" ? `w-[18.75rem] h-[22.813rem]` : "")};
${(props) => (props.size === "6" ? `w-c06 h-c06` : "")};
${(props) => (props.size === "7" ? `w-[32.5rem] h-[18.75rem]` : "")};
`;

const Card = (props) => {
    const { src, size, children, types } = props;
    if (types === "image")
        return (
            <>
                <ArtWorkImage src={src} size={size} />
            </>
        );
    if (types === "text")
        return (
            <>
                <ArtWorkCard size={size}>{children}</ArtWorkCard>
            </>
        );
};

Card.defaultProps = {
    src: "https://user-images.githubusercontent.com/89088205/162211636-aee89859-b067-4e82-946d-8157354b1b99.png",
    size: "3",
    children: "",
    types: "image",
};

export default Card;
