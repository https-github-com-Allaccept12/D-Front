import React, { useState, useEffect } from "react";
import { Button, Title } from "../../../elements";

import { useSelector, useDispatch } from "react-redux";
import { myQNAList, myAnswerList } from "../../../redux/modules/myPage";
import { useTabs } from "../../../hooks";

import { MyAnswer, MyQuestion } from "../../MySpace";
import tw from "tailwind-styled-components";

const Line = tw.hr`
border border-gray-600 my-5 w-full
`;

const TabBtn = tw.button`
   rounded-full text-base flex flex-row justify-center items-center 
   font-min1
`;

const Table = tw.div`
flex flex-row justify-start items-center w-5/6 mx-auto gap-3
mb-7
`;

const Items = tw.div`
flex flex-row 2xl:justify-start justify-center items-center w-5/6 mx-auto
`;

const MyQNA = (props) => {
    const { profile } = props;
    const [active, setActive] = useState("0");


    
    const visitor_account_id = sessionStorage.getItem("account_id");
    const dispatch = useDispatch();
  
    useEffect(() => {
        dispatch(myQNAList({visitor_account_id, dispatch}));
        dispatch(myAnswerList({visitor_account_id, dispatch}));
    }, [])
    
    const myqnas = useSelector((state) => state.myPage.myqnas);
    const myanswers = useSelector((state) => state.myPage.myanswers);
    console.log(myqnas);
    console.log(myanswers);


    const array_sample = [
        {
            tab: "나의 질문",
            content: <MyQuestion data={myqnas} profile={profile}/>,
        },
        {
            tab: "나의 답변",
            content: <MyAnswer data={myanswers}/>,
        },
    ];
    
    const { currentItem, changeItem } = useTabs(0, array_sample);

    return (
        <>
            <>
                <div className="flex flex-col items-start justify-start w-5/6 mx-auto mt-3">
                    <Title size="4">QNA 관리</Title>

                    <Line />
                </div>
            </>

            <Table>
                <TabBtn
                    active={active}
                    onClick={() => {
                        changeItem([0]);
                        setActive("0");
                    }}
                    className={active === "0" ? `text-dpurple-300 bg-dpurple-100 px-8 py-2` : `px-8 py-2`}
                >
                    {array_sample[0].tab}
                </TabBtn>

                <TabBtn
                    active={active}
                    onClick={() => {
                        changeItem([1]);
                        setActive("1");
                    }}
                    className={active === "1" ? `text-dpurple-300 bg-dpurple-100 px-8 py-2` : `px-8 py-2`}
                >
                    {array_sample[1].tab}
                </TabBtn>
            </Table>

            <Items>{currentItem.content}</Items>
        </>
    );
};

export default MyQNA;
