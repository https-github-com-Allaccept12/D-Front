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

import { ReactComponent as Email } from "../../static/icons/sns/E-mail.svg";
import { ReactComponent as Instagram } from "../../static/icons/sns/instagram.svg";
import { ReactComponent as LinkedIn } from "../../static/icons/sns/linkedin.svg";
import { ReactComponent as Brunch } from "../../static/icons/sns/brunch.svg";


const Icon = (props) => {
    const { name, iconSize, onClick, className } = props;

    if (name === "Email") {
        return (
            <div className={className}>
                <Email width={iconSize} height={iconSize} onClick={onClick} />
            </div>
        );
    }
    
    if (name === "Instagram") {
        return (
            <div className={className}>
                <Instagram width={iconSize} height={iconSize} onClick={onClick} />
            </div>
        );
    }
    
    if (name === "LinkedIn") {
        return (
            <div className={className}>
                <LinkedIn width={iconSize} height={iconSize} onClick={onClick} />
            </div>
        );
    }

    if (name === "Brunch") {
        return (
            <div className={className}>
                <Brunch width={iconSize} height={iconSize} onClick={onClick} />
            </div>
        );
    }

    if (name === "ArrowL") {
        return (
            <div className={className}>
                <ArrowL width={iconSize} height={iconSize} onClick={onClick} />
            </div>
        );
    }

    if (name === "ArrowR") {
        return (
            <div className={className}>
                <ArrowR width={iconSize} height={iconSize} onClick={onClick} />
            </div>
        );
    }

    if (name === "BookmarkE") {
        return (
            <div className={className}>
                <BookmarkE width={iconSize} height={iconSize} onClick={onClick} />
            </div>
        );
    }

    if (name === "BookmarkF") {
        return (
            <div className={className}>
                <BookmarkF width={iconSize} height={iconSize} onClick={onClick} />
            </div>
        );
    }

    if (name === "HeartE") {
        return (
            <div className={className}>
                <HeartE width={iconSize} height={iconSize} onClick={onClick} />
            </div>
        );
    }
    if (name === "HeartF") {
        return (
            <div className={className}>
                <HeartF width={iconSize} height={iconSize} onClick={onClick} />
            </div>
        );
    }
    if (name === "StarE") {
        return (
            <div className={className}>
                <StarE width={iconSize} height={iconSize} onClick={onClick} />
            </div>
        );
    }
    if (name === "StarF") {
        return (
            <div className={className}>
                <StarF width={iconSize} height={iconSize} onClick={onClick} />
            </div>
        );
    }

    if (name === "Success") {
        return (
            <div className={className}>
                <Success width={iconSize} height={iconSize} onClick={onClick} />
            </div>
        );
    }

    if (name === "SuccessC") {
        return (
            <div className={className}>
                <SuccessC width={iconSize} height={iconSize} onClick={onClick} />
            </div>
        );
    }

    if (name === "Cancel") {
        return (
            <div className={className}>
                <Cancel width={iconSize} height={iconSize} onClick={onClick} />
            </div>
        );
    }

    if (name === "Delete") {
        return (
            <div className={className}>
                <Delete width={iconSize} height={iconSize} onClick={onClick} />
            </div>
        );
    }

    if (name === "Download") {
        return (
            <div className={className}>
                <Download width={iconSize} height={iconSize} onClick={onClick} />
            </div>
        );
    }

    if (name === "Edit") {
        return (
            <div className={className}>
                <Edit width={iconSize} height={iconSize} onClick={onClick} />
            </div>
        );
    }

    if (name === "Link") {
        return (
            <div className={className}>
                <Link width={iconSize} height={iconSize} onClick={onClick} />
            </div>
        );
    }

    if (name === "Loading") {
        return (
            <div className={className}>
                <Loading width={iconSize} height={iconSize} onClick={onClick} />
            </div>
        );
    }

    if (name === "Plus") {
        return (
            <div className={className}>
                <Plus width={iconSize} height={iconSize} onClick={onClick} />
            </div>
        );
    }

    if (name === "Private") {
        return (
            <div className={className}>
                <Private width={iconSize} height={iconSize} onClick={onClick} />
            </div>
        );
    }

    if (name === "Replace") {
        return (
            <div className={className}>
                <Replace width={iconSize} height={iconSize} onClick={onClick} />
            </div>
        );
    }

    if (name === "Search") {
        return (
            <div className={className}>
                <Search width={iconSize} height={iconSize} onClick={onClick} />
            </div>
        );
    }

    if (name === "Talk") {
        return (
            <div className={className}>
                <Talk width={iconSize} height={iconSize} onClick={onClick} />
            </div>
        );
    }

    if (name === "Time") {
        return (
            <div className={className}>
                <Time width={iconSize} height={iconSize} onClick={onClick} />
            </div>
        );
    }

    if (name === "Chat") {
        return (
            <div className={className}>
                <Chat width={iconSize} height={iconSize} onClick={onClick} />
            </div>
        );
    }

    if (name === "Eye") {
        return (
            <div className={className}>
                <Eye width={iconSize} height={iconSize} onClick={onClick} />
            </div>
        );
    }

    if (name === "Image") {
        return (
            <div className={className}>
                <Image width={iconSize} height={iconSize} onClick={onClick} />
            </div>
        );
    }

    if (name === "Inarray") {
        return (
            <div className={className}>
                <Inarray width={iconSize} height={iconSize} onClick={onClick} />
            </div>
        );
    }

    if (name === "Mail") {
        return (
            <div className={className}>
                <Mail width={iconSize} height={iconSize} onClick={onClick} />
            </div>
        );
    }
    if (name === "Sand") {
        return (
            <div className={className}>
                <Sand width={iconSize} height={iconSize} onClick={onClick} />
            </div>
        );
    }

    if (name === "Upload") {
        return (
            <div className={className}>
                <Upload width={iconSize} height={iconSize} onClick={onClick} />
            </div>
        );
    }

    if (name === "User") {
        return (
            <div className={className}>
                <User width={iconSize} height={iconSize} onClick={onClick} />
            </div>
        );
    }

    if (name === "Video") {
        return (
            <div className={className}>
                <Video width={iconSize} height={iconSize} onClick={onClick} />
            </div>
        );
    } else return null;
};

Icon.defaultProps = {
    name: "ArrowL",
    iconSize: "24",
    onClick: () => {},
    className: "",
};

export default Icon;
