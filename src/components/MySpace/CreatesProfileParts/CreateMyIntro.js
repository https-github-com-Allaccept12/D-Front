import React from "react";
import { Button, Input } from "../../../elements";
import { useDispatch } from "react-redux";
import { editProfile } from "../../../redux/modules/editProfile";
import { useInput } from "../../../hooks";

const CreateMyIntro = (props) => {
  const {info} = props;
  const dispatch = useDispatch();
  const title_content = info.title_content;
  const validMaxLen = (value) => value.length <= 200;
  const validMaxLen1000 = (value) => value.length <= 1000;
  let sub = useInput("", [validMaxLen1000]);
  if (info.sub_content){
    sub = useInput(sub_content, [validMaxLen1000]);
  }
  const intro = useInput(title_content, [validMaxLen]);
  // const sub = useInput(sub_content, [validMaxLen1000]);
  const SendIntro = () => {
    const formData = new FormData();
    let data = {
      intro_content: intro.value,
      sub_content: sub.value,
    };
    dispatch(editProfile(data));
  };

  return (
    <>
      <div className="grid w-full grid-cols-4 gap-6">
        <div className="w-full col-start-1 row-start-3 col-span-full">
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
        <div className="w-full col-span-4 col-start-1 row-start-4">
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
