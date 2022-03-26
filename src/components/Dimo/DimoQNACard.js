import React from "react";
import {
  Button,
  Label,
  Profile,
  Title,
  Text,
  HeartButton,
} from "../../elements";

import { useHistory, Link, useLocation } from "react-router-dom";
import tw from "tailwind-styled-components";

const InnerLine = tw.hr`
border border-dgray-300 w-full col-span-full mt-10 mb-5
`;

const DimoQNACard = (props) => {
  const location = useLocation();
  const a = location.pathname;
  const b = a.split("/")[1];
  const { size } = props;
  let history = useHistory();
  return (
    <>
      <div className="w-[62.875rem] h-[36.25rem] rounded-lg ">
        <div className="absolute w-[62.875rem] h-[36.25rem] bg-white rounded-lg border border-dgray-200 hover:shadow-xl">
          <div>
            <div className="absolute top-7 pl-8 hover:scale-110 cursor-pointer">
              <Profile
                size="6"
                src="http://kids.donga.com/www/data/news/201408/2014080726.jpg"
                main
              />
            </div>
            <div className="absolute top-7 left-28">
              <div className="flex flex-row gap-1">
                <Label size="1" color="4">
                  취준생
                </Label>
                <Label size="1" color="5">
                  진로고민
                </Label>
              </div>
              <Title size="6">이런이런 고민이 있어여</Title>
            </div>
          </div>
          <div className="absolute top-28 px-10">
            <Text
              size="2"
              className="flex flex-wrap w-full h-24 overflow-hidden text-ellipsis"
            >
              안녕하세요. UI / UX 디자이너를 꿈꾸고 있는 대학교 3학년
              학생입니다. 다름이 아니라 고학년이 되며 제 미래에 대한 고민이
              많아져서 많은 디자이너 분들의 의견을 얻고자 글을 올리게
              되었습니다. 제 전공은 산업디자인입니다. 때문에 구체적인
              시각디자인과 UIUX 관련 수업을 수강한 적은 없습니다.
            </Text>{" "}
            <Text size="2">(더보기)</Text>
            <div className="absolute bottom-7 px-10 w-full">
              <div className="flex flex-row justify-between">
                <HeartButton like_cnt="1" is_like />
                <div className="flex flex-row space-x-4">
                  <HeartButton like_cnt="0" is_like />
                  <HeartButton like_cnt="1" is_like />
                </div>
              </div>
            </div>
            <InnerLine />
            <div>djflksjflk 답변 더ㅏ더ㅏㅣㄴ이ㅏ허</div>
          </div>
        </div>
      </div>
    </>
  );
};

DimoQNACard.defaultProps = {
  size: "2",
};

export default DimoQNACard;
