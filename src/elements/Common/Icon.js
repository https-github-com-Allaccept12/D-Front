import React from "react";
import { ReactComponent as ArrowL } from "../../static/icons/arrow/arrow_L.svg";
import { ReactComponent as ArrowR } from "../../static/icons/arrow/arrow_R.svg";
import { ReactComponent as BookmarkE } from "../../static/icons/bookmark/bookmark_Empty.svg";
import { ReactComponent as BookmarkF } from "../../static/icons/bookmark/bookmark_Filled.svg";
import { ReactComponent as HeartE } from "../../static/icons/heart/heart_Empty.svg";
import { ReactComponent as HeartF } from "../../static/icons/heart/heart_Filled.svg";
import { ReactComponent as StarE } from "../../static/icons/star/star_Empty.svg";
import { ReactComponent as StarF } from "../../static/icons/star/star_Filled.svg";
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
import { ReactComponent as Success } from "../../static/icons/success.svg";
import { ReactComponent as Talk } from "../../static/icons/talk.svg";
import { ReactComponent as Time } from "../../static/icons/time.svg";
import { ReactComponent as Warning } from "../../static/icons/warning.svg";

const Icon = (props) => {
    const { name, iconSize, onClick, className } = props;

    if (name === "ArrowL") {
        return <ArrowL width={iconSize} height={iconSize} onClick={onClick} />;
    }

    if (name === "ArrowR") {
        return <ArrowR width={iconSize} height={iconSize} onClick={onClick} />;
    }

    if (name === "BookmarkE") {
        return <BookmarkE width={iconSize} height={iconSize} onClick={onClick} />;
    }

    if (name === "BookmarkF") {
        return <BookmarkF width={iconSize} height={iconSize} onClick={onClick} />;
    }

    if (name === "HeartE") {
        return <HeartE width={iconSize} height={iconSize} onClick={onClick} />;
    }

    if (name === "HeartF") {
        return <HeartF width={iconSize} height={iconSize} onClick={onClick} />;
    }

    if (name === "StarE") {
        return <StarE width={iconSize} height={iconSize} onClick={onClick} />;
    }
    if (name === "StarF") {
        return <StarF width={iconSize} height={iconSize} onClick={onClick} />;
    }

    if (name === "Cancel") {
        return (
            <div className={className}>
                <Cancel width={iconSize} height={iconSize} onClick={onClick} />
            </div>
        );
    }

    if (name === "Delete") {
        return <Delete width={iconSize} height={iconSize} onClick={onClick} />;
    }

    if (name === "Download") {
        return <Download width={iconSize} height={iconSize} onClick={onClick} />;
    }

    if (name === "Edit") {
        return <Edit width={iconSize} height={iconSize} onClick={onClick} />;
    }

    if (name === "Link") {
        return <Link width={iconSize} height={iconSize} onClick={onClick} />;
    }

    if (name === "Loading") {
        return <Loading width={iconSize} height={iconSize} onClick={onClick} />;
    }

    if (name === "Plus") {
        return <Plus width={iconSize} height={iconSize} onClick={onClick} />;
    }

    if (name === "Private") {
        return <Private width={iconSize} height={iconSize} onClick={onClick} />;
    }

    if (name === "Replace") {
        return <Replace width={iconSize} height={iconSize} onClick={onClick} />;
    }

    if (name === "Search") {
        return (
            <div className={className}>
                <Search width={iconSize} height={iconSize} onClick={onClick} />
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

    if (name === "Talk") {
        return <Talk width={iconSize} height={iconSize} onClick={onClick} />;
    }

    if (name === "Time") {
        return <Time width={iconSize} height={iconSize} onClick={onClick} />;
    }

    if (name === "Warning") {
        return <Warning width={iconSize} height={iconSize} onClick={onClick} />;
    }
};

Icon.defaultProps = {
    name: "ArrowL",
    iconSize: "24",
    onClick: () => {},
    className: "",
};

export default Icon;
