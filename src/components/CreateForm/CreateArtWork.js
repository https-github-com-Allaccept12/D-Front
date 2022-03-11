import React from "react";
import { Button } from "../../elements";

import { useHistory } from "react-router-dom";


const CreateArtWork = (props) => {
  let history = useHistory();
  return (
    <div className="flex flex-col p-3 justify-center items-center">
      <Button
        _onClick={() => {
          history.goBack();
        }}
      >
        작품만들기
      </Button>
    </div>
  );
};

export default CreateArtWork;