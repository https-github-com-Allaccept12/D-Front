import React from "react";
import { ReactComponent as DplusC } from "../../static/logo/Dplus/DplusC.svg";
import { ReactComponent as DplusW } from "../../static/logo/Dplus/DplusW.svg";

const Logo = (props) => {
    const { name, iconSize, logoSizeW, logoSizeH, onClick } = props;

    if (name === "DplusC") {
        return <DplusC width={logoSizeW} height={logoSizeH} onClick={onClick} />;
    }

    if (name === "DplusW") {
        return <DplusW width={logoSizeW} height={logoSizeH} onClick={onClick} />;
    }
};

Logo.defaultProps = {
    name: "LogoWhite",
    iconSize: "24",
    onClick: () => {},
    logoSizeW: "228",
    logoSizeH: "51",
};

export default Logo;
