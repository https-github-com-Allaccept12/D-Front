import React from "react";
import tw from "tailwind-styled-components";


const ArtWorkImage = tw.img`
overflow-hidden object-cover object-center rounded-full
${(props) => (props.size === "1" ? `w-p01 h-p01` : "")};
${(props) => (props.size === "2" ? `w-p02 h-p02` : "")};
${(props) => (props.size === "3" ? `w-p03 h-p03` : "")};
${(props) => (props.size === "4" ? `w-p04 h-p04` : "")};
${(props) => (props.size === "5" ? `w-p05 h-p05` : "")};
${(props) => (props.size === "6" ? `w-p06 h-p06` : "")};
${(props) => (props.size === "7" ? `w-p07 h-p07` : "")};
${(props) => (props.size === "8" ? `w-p08 h-p08` : "")};
${(props) => (props.main ? `border-dpurple-200 border-8` : "")};
`;



const Profile = (props) => {
  const { src, size, main } = props;
    return (
        <>
    <ArtWorkImage src={src} size={size} main={main} />
    </>
    )
}

Profile.defaultProps = {
  src: "https://user-images.githubusercontent.com/89088205/155078987-592a07cd-a490-49fc-aabc-bc47cb508963.jpg",
  size: "3",
  main: false
};
 





export default Profile;
