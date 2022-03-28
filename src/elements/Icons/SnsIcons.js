import React from "react";

import tw from "tailwind-styled-components";
import Behance from "../../static/logo/sns/Behance.png";
import Facebook from "../../static/logo/sns/Facebook.png";
import Instagram from "../../static/logo/sns/Instagram.png";
import Kakao from "../../static/logo/sns/Kakao.png";
import Linkedin from "../../static/logo/sns/Linkedin.png";
import Twitter from "../../static/logo/sns/Twitter.png";
import Url from "../../static/logo/sns/Url.png";

const ArtWorkImage = tw.img`
overflow-hidden object-cover object-center w-[1.5rem] h-[1.5rem]
mt-1
`;

const Sns = (props) => {
    const { sns, className } = props;

    if (sns === "Behance")
        return (
            <>
                <ArtWorkImage src={Behance} className={className} />
            </>
        );
    if (sns === "Facebook")
        return (
            <>
                <ArtWorkImage src={Facebook} className={className} />
            </>
        );
    if (sns === "Instagram")
        return (
            <>
                <ArtWorkImage src={Instagram} className={className} />
            </>
        );
    if (sns === "Kakao")
        return (
            <>
                <ArtWorkImage src={Kakao} className={className} />
            </>
        );
    if (sns === "Linkedin")
        return (
            <>
                <ArtWorkImage src={Linkedin} className={className} />
            </>
        );
    if (sns === "Twitter")
        return (
            <>
                <ArtWorkImage src={Twitter} className={className} />
            </>
        );

    if (sns === "Url")
        return (
            <>
                <ArtWorkImage src={Url} className={className} />
            </>
        );
    else return null;
};

Sns.defaultProps = {
    sns: "Url",
    className: "",
};

export default Sns;
