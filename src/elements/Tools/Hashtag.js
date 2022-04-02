import React, { useState } from "react";
import ReactTagInput from "@pathofdev/react-tag-input";
import "./Hashtag.css";

const Hashtag = (props) => {
    const { setHashtags, hashtags } = props;
    //해시태그
    const [tags, setTags] = useState(["궁금해요!"]);
    const [forceRerender, setForceRerender] = useState(true);
    // console.log(tags);

    const sandTags = () => {
        setHashtags(tags);
        setForceRerender(!forceRerender);
        // console.log("sand");

        // dispatch(tags);
    };

    return <ReactTagInput tags={tags} onChange={(newTags) => [setTags(newTags), sandTags()]} />;
};

export default Hashtag;
