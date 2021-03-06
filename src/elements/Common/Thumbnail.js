import React from "react";
import tw from "tailwind-styled-components";

const ArtWorkImage = tw.img`
overflow-hidden object-cover object-center rounded-md
${(props) => (props.size === "1" ? `w-t01 h-t01` : "")};
${(props) => (props.size === "2" ? `w-t02 h-t02` : "")};
${(props) => (props.size === "3" ? `w-t03 h-t03` : "")};
${(props) => (props.size === "4" ? `w-t04 h-t04` : "")};
${(props) => (props.size === "5" ? `w-t05 h-t05` : "")};
${(props) => (props.size === "6" ? `w-[8.375rem] h-[12.5rem] ` : "")};
${(props) => (props.size === "7" ? `w-[18.75rem] h-[18.75rem] ` : "")};
${(props) => (props.size === "8" ? `w-[11.875rem] h-[11.875rem] ` : "")};
${(props) => (props.size === "9" ? `w-[19rem] h-[19rem] ` : "")};

`;

const Thumbnail = (props) => {
    const { src, size } = props;
    return (
        <>
            <ArtWorkImage src={src} size={size} />
        </>
    );
};

Thumbnail.defaultProps = {
    src: "https://user-images.githubusercontent.com/89088205/162211636-aee89859-b067-4e82-946d-8157354b1b99.png",
    size: "3",
};

export default Thumbnail;
