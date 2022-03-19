import React from "react";
import tw from "tailwind-styled-components";


const ArtWorkImage = tw.img`
overflow-hidden object-cover object-center rounded-lg
${(props) => (props.size === "1" ? `w-t01 h-t01` : "")};
${(props) => (props.size === "2" ? `w-t02 h-t02` : "")};
${(props) => (props.size === "3" ? `w-t03 h-t03` : "")};
${(props) => (props.size === "4" ? `w-t04 h-t04` : "")};
${(props) => (props.size === "5" ? `w-t05 h-t05` : "")};
${(props) => (props.size === "6" ? `w-[8.375.rem] h-[12.5rem] ` : "")};
`;



const Thumbnail = (props) => {
  const { src, size } = props;
    return (
        <>
    <ArtWorkImage src={src} size={size} />
    </>
    )
}

Thumbnail.defaultProps = {
  src: "https://user-images.githubusercontent.com/89088205/155078987-592a07cd-a490-49fc-aabc-bc47cb508963.jpg",
  size: "3",
};
 





export default Thumbnail;
