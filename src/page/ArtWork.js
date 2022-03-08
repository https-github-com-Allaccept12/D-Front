import React from "react";
import { Button, Input } from "../elements";

import { useHistory } from "react-router-dom";
import { useInput } from "../hooks";

const ArtWork = (props) => {
  let history = useHistory();

  const noEmail = v => !v.includes("@");
  const for_textarea = useInput("", noEmail);
  return (
    <div className="flex flex-col p-3 justify-center items-center">
      <Button
        _onClick={() => {
          history.goBack();
        }}
      >
        작품페이지
      </Button>


<Input
          textarea    // 이렇게 속성형으로
          value={for_textarea.value}
          placeholder="시험용!"
					size_textarea="8" // 숫자!
          onChange={for_textarea.onChange}
        />
    </div>
  );
};

export default ArtWork;