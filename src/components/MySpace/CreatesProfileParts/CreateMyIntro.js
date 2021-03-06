import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editIntroduce } from "../../../redux/modules/editProfile";
import { myPageLoad } from "../../../redux/modules/myPage";
import { useInput } from "../../../hooks";
import { Button, Input, PageLoadSpinner } from "../../../elements";

const CreateMyIntro = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { info } = props;
    console.log(info);
    const [title_content, setTitleContent] = useState("");
    const [sub_content, setSubContent] = useState("");
    useEffect(() => {
        if (info) {
            setTitleContent(info?.title_content);
            setSubContent(info?.sub_content);
        }
    }, [info]);
    // const validmaxlen = (value) => value.length <= 200;
    // const validmaxlen1000 = (value) => value.length <= 1000;

    let introTemp = "";
    let subTemp = "";

    if (info) {
        introTemp = info.title_content;
        subTemp = info.sub_content;
    }
    // validmaxlen1000, validmaxlen
    const intro = useInput(introTemp, []);
    const sub = useInput(subTemp, []);
    const SendIntro = () => {
        let data = {
            title_content: intro.value,
            sub_content: sub.value,
        };
        // console.log(data);
        dispatch(editIntroduce(data));
        navigate(-1);
    };

    const [time, setTime] = useState(true);

    useEffect(() => {
        const aaa = setTimeout(() => {
            setTime();
        }, 500);
    }, []);

    return (
        <>

            {time === true ? (
                <PageLoadSpinner />
            ) : (
                <>
                    <div className="grid w-full grid-cols-4 gap-6">
                        <div className="w-full col-start-1 row-start-3 col-span-full">
                            <Input
                                title="한줄소개"
                                textarea
                                maxlen="200"
                                value={intro?.value}
                                onChange={intro?.onChange}
                                // is_error={intro?.errors}
                                // is_value={intro && intro?.value?.length}
                                placeholder={title_content}
                            />
                        </div>
                        <div className="w-full col-span-4 col-start-1 row-start-4">
                            <Input
                                title="간단소개글"
                                textarea
                                cardsize="3"
                                maxlen="1000"
                                value={sub?.value}
                                onChange={sub?.onChange}
                                // is_error={sub?.errors}
                                // is_value={sub && sub?.value.length}
                                placeholder={sub_content}
                            />
                        </div>
                    </div>
                    <Button onClick={SendIntro}>저장</Button>
                </>
            )}
        </>
    );
};

export default CreateMyIntro;
