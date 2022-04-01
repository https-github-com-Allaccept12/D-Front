import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editIntroduce } from "../../../redux/modules/editProfile";
import { myPageLoad } from "../../../redux/modules/myPage";
import { useInput } from "../../../hooks";
import { Button, Input } from "../../../elements";

const CreateMyIntro = (props) => {
    const dispatch = useDispatch();
    const { info } = props;
    const [title_content, setTitleContent] = useState("");
    const [sub_content, setSubContent] = useState("");
    useEffect(() => {
        if (info) {
            setTitleContent(info.title_content);
            setSubContent(info.sub_content);
        }
    }, [info]);
    const validmaxlen = (value) => value.length <= 200;
    const validmaxlen1000 = (value) => value.length <= 1000;
    const intro = useInput(title_content, [validmaxlen]);
    const sub = useInput(sub_content, [validmaxlen1000]);
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
                        maxlen="200"
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
                        cardsize="3"
                        maxlen="1000"
                        value={sub.value}
                        onChange={sub.onChange}
                        is_error={sub.errors}
                        is_value={sub.value.length}
                        placeholder={sub_content}
                    />
                </div>
            </div>
            <Button onClick={SendIntro}>다음</Button>
        </>
    );
};

export default CreateMyIntro;
