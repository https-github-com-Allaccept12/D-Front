import React from "react";
import { ReactComponent as DplusC } from "../../static/logo/Dplus/DplusC.svg";
import { ReactComponent as DplusW } from "../../static/logo/Dplus/DplusW.svg";
import DplusCF from "../../static/logo/Dplus/DplusW.png";
import DplusCFF from "../../static/logo/Dplus/DplusC.png";

import tw from "tailwind-styled-components";
const ArtWorkImage = tw.img`
overflow-hidden object-cover object-center 
`;

const Logo = (props) => {
    const { name, iconSize, logoSizeW, logoSizeH, onClick } = props;

    if (name === "DplusCF") {
        return <ArtWorkImage onClick={onClick} src={DplusCF} />;
    }
    if (name === "DplusCFF") {
        return <ArtWorkImage onClick={onClick} src={DplusCFF} />;
    }
    if (name === "DplusC") {
        return <DplusW width={logoSizeW} height={logoSizeH} onClick={onClick} />;
    }
    if (name === "DplusW") {
        return (
            <div className="text-white">
                <DplusW width={logoSizeW} height={logoSizeH} onClick={onClick} />
            </div>
        );
    } else return null;
};

Logo.defaultProps = {
    name: "DplusW",
    iconSize: "24",
    onClick: () => {},
    logoSizeW: "228",
    logoSizeH: "51",
};

export default Logo;
