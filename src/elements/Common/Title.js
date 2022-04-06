import React from "react";
import tw from "tailwind-styled-components";

const TitleText = tw.div`
${(props) => (props.size === "1" ? `font-minB text-5xl` : "")};
${(props) => (props.size === "2" ? `font-minB text-2xl md:text-4xl` : "")};
${(props) => (props.size === "3" ? `font-minB text-xl md:text-3xl` : "")};
${(props) => (props.size === "4" ? `font-minB text-2xl` : "")};
${(props) => (props.size === "5" ? `font-minB text-xl` : "")};
${(props) => (props.size === "6" ? `font-min1 text-sm md:text-xl` : "")};
${(props) => (props.color === "W" ? `text-white` : "")};
`;

const Title = (props) => {
    const { children, onClick, size, color, className, value } = props;

    return (
        <TitleText onClick={onClick} size={size} color={color} className={className} value={value}>
            {children}
        </TitleText>
    );
};

Title.defaultProps = {
    children: null,
    onClick: () => {},
    size: 3,
    color: "",
    className: "",
    value: "",
};

export default Title;
