import React from "react";
import { SkillThumbnail, Title, Button } from "../../../elements";

import { useHistory } from "react-router-dom";
import tw from "tailwind-styled-components";

const Line = tw.hr`
border border-gray-600 my-6 w-5/6 mx-auto
`;
const Box = tw.div`
row-start-1 col-start-2 col-span-full justify-center items-center mx-auto
`;
const InnerBox = tw.div`
flex flex-wrap justify-center items-center mx-auto gap-8
`;

const Box02 = tw.div`
row-start-2 col-start-2 col-span-full justify-start items-start
`;

const InnerBox02 = tw.div`
flex flex-wrap justify-start items-start mx-auto gap-8 mt-20
`;

const MySkill = (props) => {
  let history = useHistory();
  return (
    <>
      <div className="flex w-5/6 mx-auto flex-row flex-wrap justify-start items-center">
        <Title size="3" className="mt-32">
          SKILLS
        </Title>
      </div>
      <Line />
      <div className="grid w-5/6 mx-auto grid-cols-5">
        <Title size="4" className="col-start-1">
          main skill
        </Title>
        <Title size="4" className="col-start-1 mt-20">
          other
        </Title>

        <Box>
          <InnerBox>
            <SkillThumbnail skill="I1" />
            <SkillThumbnail skill="P1" />
            <SkillThumbnail skill="A3" />
            <SkillThumbnail skill="A10" />
          </InnerBox>
        </Box>

        <Box02>
          <InnerBox02>
            <Button size="3" color="4">
              premiere Pro
            </Button>
            <Button size="3" color="4">
              premiere Pro
            </Button>
            <Button size="3" color="4">
              premiere Pro
            </Button>
            <Button size="3" color="4">
              premiere Pro
            </Button>
          </InnerBox02>
        </Box02>
      </div>
    </>
  );
};

export default MySkill;
