import React from "react";
import { ReactComponent as DplusC } from "../../static/logo/Dplus/DplusC.svg";
import { ReactComponent as DplusW } from "../../static/logo/Dplus/DplusW.svg";

import { ReactComponent as Behance } from "../../static/logo/sns/Behance.svg";
import { ReactComponent as Facebook } from "../../static/logo/sns/Facebook.svg";
import { ReactComponent as Instagram } from "../../static/logo/sns/Instagram.svg";
import { ReactComponent as Kakao } from "../../static/logo/sns/Kakao.svg";
import { ReactComponent as Linkedin } from "../../static/logo/sns/Linkedin.svg";
import { ReactComponent as Twitter } from "../../static/logo/sns/Twitter.svg";
import { ReactComponent as Url } from "../../static/logo/sns/Url.svg";

import { ReactComponent as BrunchGray } from "../../static/logo/snsGray/BrunchGray.svg";
import { ReactComponent as EmailGray } from "../../static/logo/snsGray/EmailGray.svg";
import { ReactComponent as InstagramGray } from "../../static/logo/snsGray/InstagramGray.svg";
import { ReactComponent as LinkedinGray } from "../../static/logo/snsGray/LinkedinGray.svg";

const Logo = (props) => {
  const { name, iconSize, logoSizeW, logoSizeH, onClick } = props;

  if (name === "DplusC") {
    return <DplusC width={logoSizeW} height={logoSizeH} onClick={onClick} />;
  }

  if (name === "DplusW") {
    return <DplusW width={logoSizeW} height={logoSizeH} onClick={onClick} />;
  }

  if (name === "Behance") {
    return <Behance width={iconSize} height={iconSize} onClick={onClick} />;
  }

  if (name === "Facebook") {
    return <Facebook width={iconSize} height={iconSize} onClick={onClick} />;
  }

  if (name === "Instagram") {
    return <Instagram width={iconSize} height={iconSize} onClick={onClick} />;
  }

  if (name === "Kakao") {
    return <Kakao width={iconSize} height={iconSize} onClick={onClick} />;
  }

  if (name === "Linkedin") {
    return <Linkedin width={iconSize} height={iconSize} onClick={onClick} />;
  }
  if (name === "Twitter") {
    return <Twitter width={iconSize} height={iconSize} onClick={onClick} />;
  }

  if (name === "Url") {
    return <Url width={iconSize} height={iconSize} onClick={onClick} />;
  }

  if (name === "BrunchGray") {
    return <BrunchGray width={iconSize} height={iconSize} onClick={onClick} />;
  }

  if (name === "EmailGray") {
    return <EmailGray width={iconSize} height={iconSize} onClick={onClick} />;
  }

  if (name === "InstagramGray") {
    return (
      <InstagramGray width={iconSize} height={iconSize} onClick={onClick} />
    );
  }

  if (name === "LinkedinGray") {
    return (
      <LinkedinGray width={iconSize} height={iconSize} onClick={onClick} />
    );
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
