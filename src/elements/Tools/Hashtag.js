import React, { useState } from "react";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";

const Hashtag = (props) => {
  const [tags, setTags] = React.useState(["example tag"]);
  return <ReactTagInput tags={tags} onChange={(newTags) => setTags(newTags)} />;
};

export default Hashtag;
