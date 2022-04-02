import React, { useEffect, useState } from "react";
import ReactTagInput from "@pathofdev/react-tag-input";
import "./Hashtag.css";

const Hashtag = (props) => {
    const { setHashtags, hashtags } = props;
    //해시태그
    const [tags, setTags] = useState(["궁금해요"]);
    // console.log(tags);

    const sandTags = () => {
        setHashtags(tags);
    };
    useEffect(() => {
        setHashtags(tags);
    }, [sandTags]);

    return <ReactTagInput tags={tags} onChange={(newTags) => [setTags(newTags), sandTags()]} />;
};

export default Hashtag;
