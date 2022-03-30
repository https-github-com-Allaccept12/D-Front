import React from "react";
import Icon from "../Icons/Icon";
import tw from "tailwind-styled-components";

const Btn = tw.button`
   rounded-full text-sm md:text-base shadow-sm flex flex-row justify-center items-center 
   font-min1 w-44
  ${(props) => (props.followed == "true" ? `h-b01 w-24 px-12` : "")};
  ${(props) => (props.followed == "false" ? `h-b01 w-24 px-12` : "")};
  ${(props) => (props.size === "1" ? `h-b01 px-6 w-36` : "")};
  ${(props) => (props.size === "2" ? `h-b02 px-4 py-3 w-32` : "")};
  ${(props) => (props.size === "3" ? `h-b03 px-4 py-5 w-32` : "")};
  ${(props) =>
      props.color === "1"
          ? `
text-white bg-dpurple-200 
hover:bg-dpurple-300 
active:bg-dpurple-400
disabled:bg-dpurple-100`
          : ""};

`;

const FollowBtn = (props) => {
    const { size, children, color, onClick, disabled, className, followed } = props;

    return (
        <Btn size={size} onClick={onClick} color={color} className={className}>
            {followed == "true" ? (
                <>
                    <Icon name="Success" iconSize="24" className="pr-2" />
                    팔로잉
                </>
            ) : (
                <>팔로우</>
            )}
        </Btn>
    );
};

FollowBtn.defaultProps = {
    size: "1",
    children: null,
    onClick: () => {},
    className: "",
};

export default FollowBtn;
