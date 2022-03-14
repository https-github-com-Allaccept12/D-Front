import React, { useState } from "react";
import { TagsInput } from "react-tag-input-component";

const Hashtag = (props) => {
  const [selected, setSelected] = useState(["해시태그!"]);

  return (
    <div className="bg-blue-300 p-1">
      <h1>Add Fruits</h1>

      <pre>{JSON.stringify(selected)}</pre>

      <TagsInput
        value={selected}
        onChange={setSelected}
        name="fruits"
        placeHolder="enter fruits"
      />
      <em>press enter to add new tag</em>
    </div>
  );
}

export default Hashtag;