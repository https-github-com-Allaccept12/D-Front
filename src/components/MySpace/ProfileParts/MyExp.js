import React from "react";
import { Button, Title, Text } from "../../../elements";

import tw from "tailwind-styled-components";

const Line = tw.hr`
border border-gray-600 my-5
`;

const InnerLine = tw.hr`
border border-dgray-300 w-full col-span-full mb-5
`;

const La = tw.li`
text-dgray-400 font-min2 ml-4 mt-4
`;

const MyExp = (props) => {
  const {info} = props
  
  return (
    <>
      <div className="flex flex-col w-5/6 mx-auto">
        <div className="flex flex-row gap-14 my-7">
          <Title size="6">EXPERIENCE</Title>{" "}
          <Title size="6" className="text-gray-300 font-extralight">
            총 1년
          </Title>
        </div>
        <Line />

        <ol className="grid grid-cols-3 mb-10">
          <li className="row-start-1 mb-10 ml-4">
            <Title size="5">Toss</Title>
            <Text size="3" className="mt-1 leading-none text-gray-400">
              2022~03 재직중
            </Text>
          </li>
          <ul className="col-start-2 row-start-1 mb-10 ml-4 list-disc col-span-full">
            <Title size="6">Product Designer / Design</Title>
            <La>
              {" "}
              UX 설계, UX 디자인, Prototype을 통해 유저에게 가치를 전달하는 모든
              설계 과정에 관여하며, 고객이 바라보는 제품의 경험을 결정
            </La>
            <La>
              {" "}
              고객이 제품을 사용하면서 느끼는 불편한 점과 의견들을 정성,
              정량적으로 수집하여 고객의 니즈를 충족하는 제품이 될 때까지 개선을
              반복
            </La>
            <La>
              {" "}
              비즈니스가 함께 성장할 수 있는지 고민하며, 팀의 비즈니스 성공 위해
              헌신
            </La>
          </ul>
        </ol>

        <InnerLine />
        <ol className="grid grid-cols-3 mb-10">
          <li className="row-start-1 mb-10 ml-4">
            <Title size="5">Toss</Title>
            <Text size="3" className="mt-1 leading-none text-gray-400">
              2022~03 재직중
            </Text>
          </li>
          <ul className="col-start-2 row-start-1 mb-10 ml-4 list-disc col-span-full">
            <Title size="6">Product Designer / Design</Title>
            <La>
              {" "}
              UX 설계, UX 디자인, Prototype을 통해 유저에게 가치를 전달하는 모든
              설계 과정에 관여하며, 고객이 바라보는 제품의 경험을 결정
            </La>
            <La>
              {" "}
              고객이 제품을 사용하면서 느끼는 불편한 점과 의견들을 정성,
              정량적으로 수집하여 고객의 니즈를 충족하는 제품이 될 때까지 개선을
              반복
            </La>
            <La>
              {" "}
              비즈니스가 함께 성장할 수 있는지 고민하며, 팀의 비즈니스 성공 위해
              헌신
            </La>
          </ul>
        </ol>

        <Line />
      </div>
    </>
  );
};

export default MyExp;
