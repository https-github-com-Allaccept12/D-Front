import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editExp } from "../../../redux/modules/editProfile";
import { Button, Title, Input, CheckBox, Text, PageLoadSpinner } from "../../../elements";
import tw from "tailwind-styled-components";

const InputBox = tw.div`

`;

const TitleBox = tw.div`
flex justify-between items-center flex-row gap-4 col-span-full
`;

const InputTitle = tw.h2`
  flex-row justify-center items-center mt-1 font-min1
  shrink-0 col-start-1
`;

const InnerLine = tw.hr`
border border-dgray-300 w-full col-span-full mt-32
`;

const InputStyles = tw.input`
w-full px-4 border border-dgray-400 rounded-lg py-1
hover:border-dpurple-200 border-box peer
active:border-dpurple-300 invalid:text-pink-600
focus:border-dpurple-300 font-min1
outline-none h-I01
`;

const TextAreaField = tw.textarea`
w-full py-4 border border-dgray-400 border-box h-I02 px-4
  rounded-md shadow-md outline-none resize-none font-min1
  hover:border-dpurple-200 active:border-dpurple-300 h-I03
`;

// 인풋리스트에 모아서 전달하기... 화면을 이동하면 내용이 사라진다..!
const CreateMyExp = (props) => {
    const { info, exp } = props;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [inputList, setInputList] = useState([
        {
            company_name: "",
            company_department: "",
            company_position: "",
            work_start: "",
            work_end: "",
            achievements: "",
        },
    ]);

    // handle input change
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    };

    // handle click event of the Remove button
    const handleRemoveClick = (index) => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    // handle click event of the Add button
    const handleAddClick = () => {
        setInputList([
            ...inputList,
            {
                company_name: "",
                company_department: "",
                company_position: "",
                work_start: "",
                work_end: "",
                achievements: "",
            },
        ]);
    };

    const checkWorking = (e, i) => {
        if (e.target.value == "off") {
            const list = [...inputList];
            list[i]["work_end"] = "";
            e.target.value = "on";
            setInputList(list);
        } else {
            const list = [...inputList];
            list[i]["work_end"] = "재직 중";
            e.target.value = "off";
            setInputList(list);
        }
    };

    const SendExps = () => {
        const arr = [];
        const data = {};
        for (var i in inputList) {
            arr.push(inputList[i]);
        }
        data["history"] = arr;
        // console.log(data);
        dispatch(editExp(data));
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
                    <div className="grid w-full grid-cols-4 gap-3 col-span-full justify-items-center">
                        <TitleBox>
                            <Title size="4" className="my-6">
                                업무경험
                            </Title>
                        </TitleBox>

                        {inputList.map((x, i) => {
                            return (
                                <>
                                    <div key={i} className="grid w-full grid-cols-6 gap-6 col-span-full">
                                        <div className="col-span-3 col-start-1 row-start-2">
                                            <InputBox>
                                                <InputTitle>회사</InputTitle>
                                                <div className="col-start-2">
                                                    <label id="">
                                                        <InputStyles
                                                            name="company_name"
                                                            placeholder="회사 이름 입력"
                                                            value={x.company_name}
                                                            onChange={(e) => handleInputChange(e, i)}
                                                        />
                                                    </label>
                                                </div>
                                            </InputBox>
                                        </div>

                                        <div className="col-start-1 col-end-4 row-start-3">
                                            <InputBox>
                                                <InputTitle>부서</InputTitle>
                                                <div className="col-start-2 col-end-8">
                                                    <label id="">
                                                        <InputStyles
                                                            className="ml10"
                                                            name="company_department"
                                                            placeholder="부서 이름 입력"
                                                            value={x.company_department}
                                                            onChange={(e) => handleInputChange(e, i)}
                                                        />
                                                    </label>
                                                </div>
                                            </InputBox>
                                        </div>

                                        <div className="col-start-4 col-end-9 row-start-3">
                                            <InputBox>
                                                <InputTitle>직책</InputTitle>
                                                <div className="col-start-2 col-end-8">
                                                    <label id="">
                                                        <InputStyles
                                                            className="ml10"
                                                            name="company_position"
                                                            placeholder="직책이름 입력"
                                                            value={x.company_position}
                                                            onChange={(e) => handleInputChange(e, i)}
                                                        />
                                                    </label>
                                                </div>
                                            </InputBox>
                                        </div>

                                        <div className="col-start-1 col-end-4 row-start-4">
                                            <InputBox>
                                                <InputTitle>시작 날짜</InputTitle>
                                                <div className="col-start-2 col-end-8">
                                                    <label id="">
                                                        <InputStyles
                                                            className="ml10"
                                                            name="work_start"
                                                            placeholder="YYYY.MM"
                                                            value={x.work_start}
                                                            onChange={(e) => handleInputChange(e, i)}
                                                        />
                                                    </label>
                                                </div>
                                            </InputBox>
                                        </div>

                                        <div className="col-start-4 col-end-9 row-start-4">
                                            <InputBox>
                                                <InputTitle>종료 날짜</InputTitle>
                                                <div className="col-start-2 col-end-8">
                                                    <label id="">
                                                        <InputStyles
                                                            className="ml10"
                                                            name="work_end"
                                                            placeholder="YYYY.MM"
                                                            value={x.work_end}
                                                            onChange={(e) => handleInputChange(e, i)}
                                                            // disabled={isChecked ? true : false}
                                                        />
                                                    </label>
                                                </div>
                                            </InputBox>
                                            <input type="checkbox" onChange={(e) => checkWorking(e, i)} />
                                            <span> 재직 중</span>
                                        </div>

                                        <div className="w-full col-span-8 row-start-5">
                                            <InputBox>
                                                <InputTitle>업무 내용</InputTitle>
                                                <div className="col-start-2 col-end-8">
                                                    <label id="">
                                                        <TextAreaField
                                                            className="ml10"
                                                            name="achievements"
                                                            placeholder="업적 입력"
                                                            value={x.achievements}
                                                            onChange={(e) => handleInputChange(e, i)}
                                                        />
                                                    </label>
                                                </div>
                                            </InputBox>
                                        </div>

                                        {inputList.length - 1 === i && (
                                            <Title
                                                size="4"
                                                onClick={handleAddClick}
                                                className="absolute text-dpurple-300 cursor-pointer top-[37rem] right-[29.7rem]"
                                            >
                                                +추가하기
                                            </Title>
                                        )}

                                        <div className="col-start-1 row-start-1">
                                            {inputList.length !== 1 && (
                                                <Text
                                                    size="1"
                                                    onClick={() => handleRemoveClick(i)}
                                                    className="rounded-full cursor-pointer text-dpurple-300"
                                                >
                                                    지우기
                                                </Text>
                                            )}
                                        </div>
                                    </div>
                                    <InnerLine />
                                </>
                            );
                        })}
                        {/* <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div> */}
                        <Button onClick={SendExps}>저장</Button>
                    </div>
                </>
            )}
        </>
    );
};
export default CreateMyExp;
