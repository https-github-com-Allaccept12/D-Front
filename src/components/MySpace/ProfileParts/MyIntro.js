import React from "react";
import { Title, Text } from "../../../elements";

import { useHistory } from "react-router-dom";
import tw from "tailwind-styled-components";

const Line = tw.hr`
border border-gray-200 my-20
`;

const MyIntro = (props) => {
  let history = useHistory();
  return (
    <>
      <Line />
      <div className="flex flex-col w-5/6 mx-auto">
        <Title size="3">MOVES IN DESIGN</Title>
        <Title size="3" className="mb-5">
          안녕하세요, 디자이너 김민지입니다.
        </Title>
        <Text size="1">
          한국에서 디자인이라는 단어는 아직도 '예쁘고 상업적인 것을 제작하는
          행위'를 말하는 경우가 많은데요, 사실 디자인은 본질적으로 '설계'에
          가깝다고 생각합니다. 전통적인 디자이너의 역량인 '예쁜 것을 만드는
          능력'은 사회 현상에서 불편함을 찾고, 해결책을 제안할 수 있는
          마인드셋과 함께할 때 더욱 효과적이라고 생각합니다.
        </Text>
      </div>
      <Line />
    </>
  );
};

export default MyIntro;
