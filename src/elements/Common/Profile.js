import React from "react";
import tw from "tailwind-styled-components";

const ArtWorkImage = tw.img`
overflow-hidden object-cover object-center rounded-full
bg-white p-1
${(props) => (props.size === "1" ? `w-p01 h-p01` : "")};
${(props) => (props.size === "2" ? `w-p02 h-p02` : "")};
${(props) => (props.size === "3" ? `w-p03 h-p03` : "")};
${(props) => (props.size === "4" ? `w-p04 h-p04` : "")};
${(props) => (props.size === "5" ? `w-p05 h-p05` : "")};
${(props) => (props.size === "6" ? `w-p06 h-p06` : "")};
${(props) => (props.size === "7" ? `w-p07 h-p07` : "")};
${(props) => (props.size === "8" ? `w-p08 h-p08` : "")};
${(props) => (props.main ? `border-white border-2` : "")};
`;

const Profile = (props) => {
    const { src, size, main, className, onClick } = props;
    return (
        <>
            <ArtWorkImage src={src} size={size} main={main} className={className} onClick={onClick} />
        </>
    );
};

Profile.defaultProps = {
    src: "https://user-images.githubusercontent.com/89088205/162211636-aee89859-b067-4e82-946d-8157354b1b99.png",
    size: "3",
    main: false,
    className: "",
    onClick: () => {},
};

export default Profile;
