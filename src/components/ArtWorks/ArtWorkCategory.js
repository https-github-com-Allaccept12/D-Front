import React, { useState } from "react";

import { Title, Button, Text } from "../../elements";
import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";

const ArtWorkCategory = (props) => {
  const [active, setActive] = useState("0");

  return (
    <>
      <div className="sticky top-20">
        <div
          className="flex flex-col justify-center pl-[2.5rem] mt-10 text-left ml-6 p-2 w-[17.75rem] h-[32.5rem]
  rounded-lg bg-white"
        >
          <Link to="/createart">
            <Button>작품등록</Button>
          </Link>
          <Title size="5" className="py-3">
            카테고리
          </Title>

          <Link to="/art/list/all">
            <Text
              size="2"
              onClick={() => {
                setActive("0");
              }}
              className={active === "0" ? "bg-yellow-400" : ""}
            >
              □ 전체보기
            </Text>
          </Link>

          <Link to="/art/list/uiux">
            <Text
              size="2"
              onClick={() => {
                setActive("1");
              }}
              className={active === "1" ? "bg-yellow-400" : ""}
            >
              {" "}
              □ UI / UX
            </Text>
          </Link>

          <Link to="/art/list/eco">
            <Text
              size="2"
              onClick={() => {
                setActive("2");
              }}
              className={active === "2" ? "bg-yellow-400" : ""}
            >
              □ 건축 / 인테리어 / 환경디자인
            </Text>
          </Link>

          <Link to="/art/list/game">
            <Text
              size="2"
              onClick={() => {
                setActive("3");
              }}
              className={active === "3" ? "bg-yellow-400" : ""}
            >
              □ 게임 / 캐릭터 디자인
            </Text>
          </Link>

          <Link to="/art/list/craft">
            <Text
              size="2"
              onClick={() => {
                setActive("4");
              }}
              className={active === "4" ? "bg-yellow-400" : ""}
            >
              □ 공예
            </Text>
          </Link>

          <Link to="/art/list/graphic">
            <Text
              size="2"
              onClick={() => {
                setActive("5");
              }}
              className={active === "5" ? "bg-yellow-400" : ""}
            >
              □ 그래픽디자인
            </Text>
          </Link>

          <Link to="/art/list/edit">
            <Text
              size="2"
              onClick={() => {
                setActive("6");
              }}
              className={active === "6" ? "bg-yellow-400" : ""}
            >
              □ 브랜딩 / 편집디자인
            </Text>
          </Link>

          <Link to="/art/list/video">
            <Text
              size="2"
              onClick={() => {
                setActive("7");
              }}
              className={active === "7" ? "bg-yellow-400" : ""}
            >
              □ 영상 / 모션그래픽
            </Text>
          </Link>

          <Link to="/art/list/product">
            <Text
              size="2"
              onClick={() => {
                setActive("8");
              }}
              className={active === "8" ? "bg-yellow-400" : ""}
            >
              □ 제품 디자인
            </Text>
          </Link>

          <Link to="/art/list/fashion">
            <Text
              size="2"
              onClick={() => {
                setActive("9");
              }}
              className={active === "9" ? "bg-yellow-400" : ""}
            >
              □ 패션
            </Text>
          </Link>

          <Link to="/art/list/package">
            <Text
              size="2"
              onClick={() => {
                setActive("10");
              }}
              className={active === "10" ? "bg-yellow-400" : ""}
            >
              □ 패키지 디자인
            </Text>
          </Link>

          <Link to="/art/list/else">
            <Text
              size="2"
              onClick={() => {
                setActive("11");
              }}
              className={active === "11" ? "bg-yellow-400" : ""}
            >
              □ 기타
            </Text>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ArtWorkCategory;
