import React, { useState } from "react";
import { Button, Title, SearchInput } from "../../elements";

import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";

const TabBtn = tw.button`
font-min1 Text-base w-full text-left 
`;
const MyPageCategory = (props) => {
  const [active, setActive] = useState("0");

  return (
    <>
      <div className="fixed top-20">
        <div
          className="flex flex-col justify-center pl-[2.5rem] mt-10 ml-6 p-2 w-[13.75rem] h-[32.5rem]
        rounded-lg bg-white"
        >
          <div className="">
            <Title size="4">MyProfile</Title>

            <Link to="/myspace/myprofile">
              <TabBtn
                size="2"
                onClick={() => {
                  setActive("0");
                }}
                className={active === "0" ? "bg-yellow-400" : ""}
              >
                □ 내 프로필
              </TabBtn>
            </Link>

            <Link to="/editmyspace/z">
              <TabBtn size="2">□ 프로필 수정</TabBtn>
            </Link>

            <Title size="4">Work</Title>

            <Link to="/myspace/mywork">
              <TabBtn
                size="2"
                onClick={() => {
                  setActive("1");
                }}
                className={active === "1" ? "bg-yellow-400" : ""}
              >
                □ 내작업
              </TabBtn>
            </Link>

            <Link to="/myspace/mypic">
              <TabBtn
                size="2"
                onClick={() => {
                  setActive("2");
                }}
                className={active === "2" ? "bg-yellow-400" : ""}
              >
                □ 스크랩한 작업
              </TabBtn>
            </Link>

            <Title size="4">Community</Title>

            <Link to="/myspace/share">
              <TabBtn
                size="2"
                onClick={() => {
                  setActive("3");
                }}
                className={active === "3" ? "bg-yellow-400" : ""}
              >
                □ 게시글
              </TabBtn>
            </Link>

            <Link to="/myspace/qna">
              <TabBtn
                size="2"
                onClick={() => {
                  setActive("4");
                }}
                className={active === "4" ? "bg-yellow-400" : ""}
              >
                □ QNA
              </TabBtn>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPageCategory;
