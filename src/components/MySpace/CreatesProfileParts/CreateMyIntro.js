import React from "react";
import { Button, Input } from "../../../elements";

import { useHistory } from "react-router-dom";
import { useInput } from "../../../hooks";

const CreateMyIntro = (props) => {
  let history = useHistory();
  const validMaxLen = (value) => value.length <= 200;
  const validMaxLen1000 = (value) => value.length <= 1000;
  const intro = useInput("", [validMaxLen]);
  const sub = useInput("", [validMaxLen1000]);

  const SendIntro = () => {
    const formData = new FormData();
    let data = {
      intro_content: intro.value,
      sub_content: sub.value,
    };
    formData.append("data");
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-6 w-full">
        <div className="col-start-1 row-start-3 col-span-full w-full">
          <Input
            title="한줄소개"
            textarea
            maxLen="200"
            value={intro.value}
            onChange={intro.onChange}
            is_error={intro.errors}
            is_value={intro.value.length}
          />
        </div>
        <div className="col-start-1 row-start-4 col-span-4 w-full">
          <Input
            title="간단소개글"
            textarea
            cardSize="3"
            maxLen="1000"
            value={sub.value}
            onChange={sub.onChange}
            is_error={sub.errors}
            is_value={sub.value.length}
          />
        </div>
      </div>
    </>
  );
};

export default CreateMyIntro;
