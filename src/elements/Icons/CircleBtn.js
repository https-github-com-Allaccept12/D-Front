import React from "react";
import { ReactComponent as BookmarkE } from "../../static/icons/bookmark/bookmark_Empty.svg";
import { ReactComponent as BookmarkF } from "../../static/icons/bookmark/bookmark_Filled.svg";
import { ReactComponent as HeartE } from "../../static/icons/heart/heart_Empty.svg";
import { ReactComponent as HeartF } from "../../static/icons/heart/heart_Filled.svg";
import { ReactComponent as StarE } from "../../static/icons/star/star_Empty.svg";
import { ReactComponent as StarF } from "../../static/icons/star/star_Filled.svg";
import { ReactComponent as Delete } from "../../static/icons/delete.svg";
import { ReactComponent as Edit } from "../../static/icons/edit.svg";
import { ReactComponent as Link } from "../../static/icons/link.svg";
import { ReactComponent as Plus } from "../../static/icons/plus.svg";
import { ReactComponent as Private } from "../../static/icons/private.svg";
import { ReactComponent as Replace } from "../../static/icons/replace.svg";
import { ReactComponent as Download } from "../../static/icons/download.svg";
import Text from "../Common/Text";
import tw from "tailwind-styled-components";

const Badge = tw.div`
w-8 h-8 rounded-full bg-white flex justify-center items-center
opacity-100 hover:animate-spin cursor-pointer 
${(props) => (props.states == true ? "" : `hidden`)};
`;

const Icons = tw.i`
rounded-full bg-white w-8 h-8 xl:w-16 xl:h-16 justify-center flex flex-row items-center
hover:scale-110 opacity-100 cursor-pointer
`;

const IconBox = tw.div`
flex flex-col justify-center items-center

`;

const CircleBtn = (props) => {
    const { name, iconSize, onClick, states } = props;

    if (name === "Edit") {
        return (
            <>
                <IconBox>
                    <Icons>
                        <Edit width="28" height="28" onClick={onClick} />
                    </Icons>
                    <Text size="1" className="mt-2 text-white">
                        수정
                    </Text>
                </IconBox>
            </>
        );
    }

    if (name === "Delete") {
        return (
            <>
                <IconBox>
                    <Icons>
                        <Delete width="28" height="28" onClick={onClick} />
                    </Icons>
                    <Text size="1" className="mt-2 text-white">
                        삭제
                    </Text>
                </IconBox>
            </>
        );
    }

    if (name === "MyStar") {
        return (
            <>
                <IconBox>
                    <Icons>
                        <StarE width="28" height="28" onClick={onClick} />
                    </Icons>
                    <Text size="1" className="mt-2 text-white">
                        대표작품
                    </Text>
                </IconBox>
            </>
        );
    }

    if (name === "Private") {
        return (
            <>
                <IconBox>
                    <Icons>
                        <Private width="28" height="28" onClick={onClick} />
                    </Icons>
                    <Text size="1" className="mt-2 text-white">
                        비공개
                    </Text>
                </IconBox>
            </>
        );
    }

    if (name === "Detail") {
        return (
            <>
                <IconBox>
                    <Icons>
                        <Replace width="28" height="28" onClick={onClick} />
                    </Icons>
                    <Text size="1" className="mt-2 text-white">
                        보러가기
                    </Text>
                </IconBox>
            </>
        );
    }

    if (name === "BookMark") {
        return (
            <>
                <IconBox>
                    <Icons>
                        <BookmarkF width="28" height="28" onClick={onClick} />
                    </Icons>
                    <Text size="1" className="mt-2 text-white">
                        스크랩 해제
                    </Text>
                </IconBox>
            </>
        );
    }

    if (name === "MyStarMini") {
        return (
            <>
                <Badge states={states}>
                    <StarF width="16" height="16" onClick={onClick} />
                </Badge>
            </>
        );
    }

    if (name === "PrivateMini") {
        return (
            <>
                <Badge states={states}>
                    <Private width="16" height="16" onClick={onClick} />
                </Badge>
            </>
        );
    }
};

CircleBtn.defaultProps = {
    name: "ArrowL",
    iconSize: "24",
    onClick: () => {},
};

export default CircleBtn;
