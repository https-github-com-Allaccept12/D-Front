import React from "react";
import Icon from "../Icons/Icon";
import tw from "tailwind-styled-components";

const Btn = tw.button`
   rounded-full shadow-sm flex flex-row justify-center items-center
   font-min1 flex-shrink-0 text-base font-min1 bg-dpurple-200 text-white
  ${(props) => (props.size === "1" ? `h-5 px-3 text-sm` : "")};
  ${(props) => (props.size === "2" ? `h-7 px-5 py-1 text-base ` : "")};
  ${(props) => (props.size === "4" ? `h-10 px-5 py-1 text-base ` : "")};
`;

const BtnSlide = tw.button`
   rounded-full shadow-sm flex flex-row justify-center items-center h-5 px-3 text-sm
   font-min1 flex-shrink-0 border font-min1 border-white text-white
`;
const IconColor = tw.span` 
mr-2
${(props) => (props.iconColor === "heart" ? `text-dred-300` : "")};
`;

const Label = (props) => {
    const {
        slides,
        size,
        color,
        styles,
        children,
        onClick,
        disabled,
        is_loading,
        icon,
        name,
        iconSize,
        iconColor,
        className,
        co,
    } = props;

    if (co == "slide")
        return (
            <>
                <BtnSlide
                    size={size}
                    color={color}
                    styles={styles}
                    onClick={onClick}
                    disabled={disabled}
                    className={className}
                    co={co}
                >
                    {icon && (
                        <IconColor iconColor={iconColor}>
                            <Icon name={name} iconSize={iconSize} />
                        </IconColor>
                    )}

                    {children}
                </BtnSlide>
            </>
        );
    else
        return (
            <>
                <Btn
                    size={size}
                    color={color}
                    styles={styles}
                    onClick={onClick}
                    disabled={disabled}
                    className={className}
                    co={co}
                >
                    {icon && (
                        <IconColor iconColor={iconColor}>
                            <Icon name={name} iconSize={iconSize} />
                        </IconColor>
                    )}

                    {children}
                </Btn>
            </>
        );
};

Label.defaultProps = {
    size: "1",
    color: "1",
    children: null,
    onClick: () => {},
    iconColor: "",
    className: "",
    slide: false,
};

export default Label;
