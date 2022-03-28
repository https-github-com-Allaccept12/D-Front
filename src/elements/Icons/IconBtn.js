import React from "react";
import { ReactComponent as ArrowL } from "../../static/icons/arrow/arrow_L.svg";
import { ReactComponent as ArrowR } from "../../static/icons/arrow/arrow_R.svg";
import { ReactComponent as BookmarkE } from "../../static/icons/bookmark/bookmark_Empty.svg";
import { ReactComponent as BookmarkF } from "../../static/icons/bookmark/bookmark_Filled.svg";
import { ReactComponent as HeartE } from "../../static/icons/heart/heart_Empty.svg";
import { ReactComponent as HeartF } from "../../static/icons/heart/heart_Filled.svg";
import { ReactComponent as StarE } from "../../static/icons/star/star_Empty.svg";
import { ReactComponent as StarF } from "../../static/icons/star/star_Filled.svg";

import { ReactComponent as Success } from "../../static/icons/success/success.svg";
import { ReactComponent as SuccessC } from "../../static/icons/success/SuccessCircle.svg";

import { ReactComponent as Cancel } from "../../static/icons/cancel.svg";
import { ReactComponent as Delete } from "../../static/icons/delete.svg";
import { ReactComponent as Download } from "../../static/icons/download.svg";
import { ReactComponent as Edit } from "../../static/icons/edit.svg";
import { ReactComponent as Link } from "../../static/icons/link.svg";
import { ReactComponent as Loading } from "../../static/icons/loading.svg";
import { ReactComponent as Plus } from "../../static/icons/plus.svg";
import { ReactComponent as Private } from "../../static/icons/private.svg";
import { ReactComponent as Replace } from "../../static/icons/replace.svg";
import { ReactComponent as Search } from "../../static/icons/search.svg";

import { ReactComponent as Talk } from "../../static/icons/talk.svg";
import { ReactComponent as Time } from "../../static/icons/time.svg";
import { ReactComponent as Warning } from "../../static/icons/warning.svg";
//2차 추가 아이콘
import { ReactComponent as Chat } from "../../static/icons/Chat.svg";
import { ReactComponent as Eye } from "../../static/icons/Eye.svg";
import { ReactComponent as Image } from "../../static/icons/Image.svg";
import { ReactComponent as Inarray } from "../../static/icons/Inarray.svg";
import { ReactComponent as Mail } from "../../static/icons/Mail.svg";
import { ReactComponent as Sand } from "../../static/icons/Sand.svg";
import { ReactComponent as Upload } from "../../static/icons/Upload.svg";
import { ReactComponent as User } from "../../static/icons/User.svg";
import { ReactComponent as Video } from "../../static/icons/Video.svg";
import { Subtitle } from "../../elements";

const IconBtn = (props) => {
    const { name, iconSize, onClick, className, count } = props;

    if (name === "ArrowL") {
        return (
            <>
                <div className="flex flex-row justify-center items-center gap-3">
                    <ArrowL width={iconSize} height={iconSize} onClick={onClick} />
                    <Subtitle size="1" className="">
                        {count}
                    </Subtitle>
                </div>
            </>
        );
    }

    if (name === "ArrowR") {
        return (
            <>
                <div className="flex flex-row justify-center items-center gap-3">
                    <ArrowR width={iconSize} height={iconSize} onClick={onClick} />
                    <Subtitle size="1" className="">
                        {count}
                    </Subtitle>
                </div>
            </>
        );
    }

    if (name === "BookmarkE") {
        return (
            <>
                <div className="flex flex-row justify-center items-center gap-3">
                    <BookmarkE width={iconSize} height={iconSize} onClick={onClick} />
                    <Subtitle size="1" className="">
                        {count}
                    </Subtitle>
                </div>
            </>
        );
    }

    if (name === "BookmarkF") {
        return (
            <>
                <div className="flex flex-row justify-center items-center gap-3">
                    <BookmarkF width={iconSize} height={iconSize} onClick={onClick} />
                    <Subtitle size="1" className="">
                        {count}
                    </Subtitle>
                </div>
            </>
        );
    }

    if (name === "HeartE") {
        return (
            <>
                <div className="flex flex-row justify-center items-center gap-3">
                    <HeartE width={iconSize} height={iconSize} onClick={onClick} />
                    <Subtitle size="1" className="">
                        {count}
                    </Subtitle>
                </div>
            </>
        );
    }

    if (name === "HeartF") {
        return (
            <>
                <div className="flex flex-row justify-center items-center gap-3">
                    <HeartF width={iconSize} height={iconSize} onClick={onClick} />
                    <Subtitle size="1" className="">
                        {count}
                    </Subtitle>
                </div>
            </>
        );
    }

    if (name === "StarE") {
        return (
            <>
                <div className="flex flex-row justify-center items-center gap-3">
                    <StarE width={iconSize} height={iconSize} onClick={onClick} />
                    <Subtitle size="1" className="">
                        {count}
                    </Subtitle>
                </div>
            </>
        );
    }
    if (name === "StarF") {
        return (
            <>
                <div className="flex flex-row justify-center items-center gap-3">
                    <StarF width={iconSize} height={iconSize} onClick={onClick} />
                    <Subtitle size="1" className="">
                        {count}
                    </Subtitle>
                </div>
            </>
        );
    }

    if (name === "Success") {
        return (
            <>
                <div className="flex flex-row justify-center items-center gap-3">
                    <Success width={iconSize} height={iconSize} onClick={onClick} />
                    <Subtitle size="1" className="">
                        {count}
                    </Subtitle>
                </div>
            </>
        );
    }

    if (name === "SuccessC") {
        return (
            <>
                <div className="flex flex-row justify-center items-center gap-3">
                    <SuccessC width={iconSize} height={iconSize} onClick={onClick} />
                    <Subtitle size="1" className="">
                        {count}
                    </Subtitle>
                </div>
            </>
        );
    }

    if (name === "Cancel") {
        return (
            <>
                <div className="flex flex-row justify-center items-center gap-3">
                    <Cancel width={iconSize} height={iconSize} onClick={onClick} />
                    <Subtitle size="1" className="">
                        {count}
                    </Subtitle>
                </div>
            </>
        );
    }

    if (name === "Delete") {
        return (
            <>
                <div className="flex flex-row justify-center items-center gap-3">
                    <Delete width={iconSize} height={iconSize} onClick={onClick} />
                    <Subtitle size="1" className="">
                        {count}
                    </Subtitle>
                </div>
            </>
        );
    }
    if (name === "Download") {
        return (
            <>
                <div className="flex flex-row justify-center items-center gap-3">
                    <Download width={iconSize} height={iconSize} onClick={onClick} />
                    <Subtitle size="1" className="">
                        {count}
                    </Subtitle>
                </div>
            </>
        );
    }

    if (name === "Edit") {
        return (
            <>
                <div className="flex flex-row justify-center items-center gap-3">
                    <Edit width={iconSize} height={iconSize} onClick={onClick} />
                    <Subtitle size="1" className="">
                        {count}
                    </Subtitle>
                </div>
            </>
        );
    }

    if (name === "Link") {
        return (
            <>
                <div className="flex flex-row justify-center items-center gap-3">
                    <Link width={iconSize} height={iconSize} onClick={onClick} />
                    <Subtitle size="1" className="">
                        {count}
                    </Subtitle>
                </div>
            </>
        );
    }

    if (name === "Loading") {
        return (
            <>
                <div className="flex flex-row justify-center items-center gap-3">
                    <Loading width={iconSize} height={iconSize} onClick={onClick} />
                    <Subtitle size="1" className="">
                        {count}
                    </Subtitle>
                </div>
            </>
        );
    }

    if (name === "Plus") {
        return (
            <>
                <div className="flex flex-row justify-center items-center gap-3">
                    <Plus width={iconSize} height={iconSize} onClick={onClick} />
                    <Subtitle size="1" className="">
                        {count}
                    </Subtitle>
                </div>
            </>
        );
    }

    if (name === "Private") {
        return (
            <>
                <div className="flex flex-row justify-center items-center gap-3">
                    <Private width={iconSize} height={iconSize} onClick={onClick} />
                    <Subtitle size="1" className="">
                        {count}
                    </Subtitle>
                </div>
            </>
        );
    }

    if (name === "Replace") {
        return (
            <>
                <div className="flex flex-row justify-center items-center gap-3">
                    <Replace width={iconSize} height={iconSize} onClick={onClick} />
                    <Subtitle size="1" className="">
                        {count}
                    </Subtitle>
                </div>
            </>
        );
    }

    if (name === "Search") {
        return (
            <>
                <div className="flex flex-row justify-center items-center gap-3">
                    <Search width={iconSize} height={iconSize} onClick={onClick} />
                    <Subtitle size="1" className="">
                        {count}
                    </Subtitle>
                </div>
            </>
        );
    }

    if (name === "Talk") {
        return (
            <>
                <div className="flex flex-row justify-center items-center gap-3">
                    <Talk width={iconSize} height={iconSize} onClick={onClick} />
                    <Subtitle size="1" className="">
                        {count}
                    </Subtitle>
                </div>
            </>
        );
    }

    if (name === "Time") {
        return (
            <>
                <div className="flex flex-row justify-center items-center gap-3">
                    <Time width={iconSize} height={iconSize} onClick={onClick} />
                    <Subtitle size="1" className="">
                        {count}
                    </Subtitle>
                </div>
            </>
        );
    }

    if (name === "Chat") {
        return (
            <>
                <div className="flex flex-row justify-center items-center gap-3">
                    <Chat width={iconSize} height={iconSize} onClick={onClick} />
                    <Subtitle size="1" className="">
                        {count}
                    </Subtitle>
                </div>
            </>
        );
    }

    if (name === "Eye") {
        return (
            <>
                <div className="flex flex-row justify-center items-center gap-3">
                    <Eye width={iconSize} height={iconSize} onClick={onClick} />
                    <Subtitle size="1" className="">
                        {count}
                    </Subtitle>
                </div>
            </>
        );
    }
    if (name === "Image") {
        return (
            <>
                <div className="flex flex-row justify-center items-center gap-3">
                    <Image width={iconSize} height={iconSize} onClick={onClick} />
                    <Subtitle size="1" className="">
                        {count}
                    </Subtitle>
                </div>
            </>
        );
    }

    if (name === "Inarray") {
        return (
            <>
                <div className="flex flex-row justify-center items-center gap-3">
                    <Inarray width={iconSize} height={iconSize} onClick={onClick} />
                    <Subtitle size="1" className="">
                        {count}
                    </Subtitle>
                </div>
            </>
        );
    }

    if (name === "Mail") {
        return (
            <>
                <div className="flex flex-row justify-center items-center gap-3">
                    <Mail width={iconSize} height={iconSize} onClick={onClick} />
                    <Subtitle size="1" className="">
                        {count}
                    </Subtitle>
                </div>
            </>
        );
    }

    if (name === "Sand") {
        return (
            <>
                <div className="flex flex-row justify-center items-center gap-3">
                    <Sand width={iconSize} height={iconSize} onClick={onClick} />
                    <Subtitle size="1" className="">
                        {count}
                    </Subtitle>
                </div>
            </>
        );
    }

    if (name === "Upload") {
        return (
            <>
                <div className="flex flex-row justify-center items-center gap-3">
                    <Upload width={iconSize} height={iconSize} onClick={onClick} />
                    <Subtitle size="1" className="">
                        {count}
                    </Subtitle>
                </div>
            </>
        );
    }

    if (name === "User") {
        return (
            <>
                <div className="flex flex-row justify-center items-center gap-3">
                    <User width={iconSize} height={iconSize} onClick={onClick} />
                    <Subtitle size="1" className="">
                        {count}
                    </Subtitle>
                </div>
            </>
        );
    }

    if (name === "Video") {
        return (
            <>
                <div className="flex flex-row justify-center items-center gap-3">
                    <Video width={iconSize} height={iconSize} onClick={onClick} />
                    <Subtitle size="1" className="">
                        {count}
                    </Subtitle>
                </div>
            </>
        );
    } else return null;
};

IconBtn.defaultProps = {
    name: "HeartE",
    iconSize: "24",
    onClick: () => {},
    className: "",
};

export default IconBtn;
