import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editIntroduce } from "../../../redux/modules/editProfile";
import { myPageLoad } from "../../../redux/modules/myPage";
import { useInput } from "../../../hooks";
import { Button, Input } from "../../../elements";

const CreateMyIntro = (props) => {
  const dispatch = useDispatch();
  let account_id = 0;
  const id_cookie = sessionStorage.getItem("account_id")
  if (id_cookie) {
      account_id = id_cookie;
      // console.log("account_id: ", account_id);
  }
  const owner_account_id = account_id;
  useEffect(() => {
    dispatch(myPageLoad({ account_id, owner_account_id, dispatch }))
  }, [dispatch, account_id, owner_account_id]);
  
  const info = useSelector(state => state.myPage.myPage);
  // const {info} = props;
  const title_content = info.title_content
  const sub_content = info.sub_content
  // useEffect(() => {
  //   if (info){
  //     title_content = info.title_content
  //     sub_content = info.sub_content
  //     console.log(info.title_content)
  //     console.log(title_content)
  //     // setTitleContent(info.title_content);
  //     // setSubContent(info.sub_content);
  //   }
  // },)
  // console.log(title_content)
  const validMaxLen = (value) => value.length <= 200;
  const validMaxLen1000 = (value) => value.length <= 1000;
  let sub = useInput(sub_content, [validMaxLen1000]);
  // if (info.sub_content){
  // sub = useInput(sub_content, [validMaxLen1000]);
  // }
  let intro = useInput(title_content, [validMaxLen]);
  // if (info.title_content){
  // intro = useInput(title_content, [validMaxLen]);
  // }
  // const intro = useInput(title_content, [validMaxLen]);
  // const sub = useInput(sub_content, [validMaxLen1000]);
  const SendIntro = () => {
    let data = {
      title_content: intro.value,
      sub_content: sub.value,
    };
    console.log(data);
    dispatch(editIntroduce(data));
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
            placeholder={title_content}
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
            placeholder={sub_content}
          />
        </div>
      </div>
        <Button onClick={SendIntro}>
        다음
      </Button>
    </>
  );
};

export default CreateMyIntro;
