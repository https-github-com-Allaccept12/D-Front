import React from "react";
import tw from "tailwind-styled-components";


const ArtWorkImage = tw.img`
overflow-hidden object-cover object-center m-2
${(props) => (props.size === "1" ? `w-c01 h-c01` : "")};
${(props) => (props.size === "2" ? `w-c02 h-c02` : "")};
${(props) => (props.size === "3" ? `w-c03 h-c03` : "")};
${(props) => (props.size === "4" ? `w-c04 h-c04` : "")};
${(props) => (props.size === "5" ? `w-c05 h-c05` : "")};
${(props) => (props.size === "6" ? `w-c06 h-c06` : "")};
`;



const Card = (props) => {
  const { src, size } = props;
    return (
        <>
    <ArtWorkImage src={src} size={size} />
    </>
    )
}

Card.defaultProps = {
  src: "https://user-images.githubusercontent.com/89088205/155078987-592a07cd-a490-49fc-aabc-bc47cb508963.jpg",
  size: "3",
};
 





export default Card;
