import React, { useState } from "react";
import ReactTagInput from "@pathofdev/react-tag-input";
import "./Hashtag.css";

const Hashtag = (props) => {
    const [tags, setTags] = React.useState(["궁금해요!"]);
    // console.log(tags);
    const sandTags = () => {
        dispatch(tags);
    };
    return <ReactTagInput tags={tags} onChange={(newTags) => setTags(newTags)} />;
};

export default Hashtag;
