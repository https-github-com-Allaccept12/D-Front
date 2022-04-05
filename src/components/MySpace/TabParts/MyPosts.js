import React, { useState, useEffect } from "react";
import { Image, Title } from "../../../elements";

import { useSelector, useDispatch } from "react-redux";
import { myPostList, myBookMarkList, myCommentList } from "../../../redux/modules/myPage";
import { useTabs } from "../../../hooks";
import tw from "tailwind-styled-components";
import { MyBookmark, MyComment, MyPost } from "../../MySpace";

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

const MyPosts = (props) => {
    const { profile } = props;
    const visitor_account_id = sessionStorage.getItem("account_id");
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(myPostList({visitor_account_id, dispatch}));
      dispatch(myBookMarkList({visitor_account_id, dispatch}));
      dispatch(myCommentList({visitor_account_id, dispatch}));
    }, [])
    
    const myposts = useSelector((state) => state.myPage.myposts);
    const mymarks = useSelector((state) => state.myPage.mymarks);
    const mycomments = useSelector((state) => state.myPage.mycomments);
    console.log(myposts);
    console.log(mymarks);
    console.log(mycomments);

    const array_sample = [
        {
            tab: "나의 글",
            content: <MyPost data={myposts} profile={profile}/>,
        },
        {
            tab: "내댓글",
            content: <MyComment data={mymarks}/>,
        },
        {
            tab: "스크랩글",
            content: <MyBookmark data={mycomments}/>,
        },
    ];
    const { currentItem, changeItem } = useTabs(0, array_sample);
    const [active, setActive] = useState("0");

    return (
        <>
            <>
                <div className="flex flex-col items-start justify-start w-5/6 mx-auto mt-3">
                    <Title size="4">게시글 관리</Title>

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

                <TabBtn
                    active={active}
                    onClick={() => {
                        changeItem([2]);
                        setActive("2");
                    }}
                    className={active === "2" ? `text-dpurple-300 bg-dpurple-100 px-8 py-2` : `px-8 py-2`}
                >
                    {array_sample[2].tab}
                </TabBtn>
            </Table>

            <Items>{currentItem.content}</Items>
        </>
    );
};

export default MyPosts;
