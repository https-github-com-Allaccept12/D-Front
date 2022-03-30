import React from "react";
import tw from "tailwind-styled-components";

const SubtitleText = tw.div`
${(props) => (props.size === "1" ? `font-min1 text-lg` : "")};
${(props) => (props.size === "2" ? `font-min1 text-base` : "")};
${(props) => (props.size === "3" ? `font-min1 font-bold text-xl md:text-3xl shrink-0 py-6 mb-12` : "")};
${(props) => (props.size === "4" ? `font-min1 text-lg leading-tight font-extralight mt-3` : "")};

`;

const Subtitle = (props) => {
    const { children, onClick, size, className } = props;

    return (
        <SubtitleText onClick={onClick} size={size} className={className}>
            {children}
        </SubtitleText>
    );
};

Subtitle.defaultProps = {
    children: null,
    onClick: () => {},
    size: 1,
    className: "",
};

export default Subtitle;
