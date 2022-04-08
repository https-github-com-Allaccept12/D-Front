import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { SkillThumbnail, Title, Button } from "../../../elements";
import skillList from "../../ArtWorks/skillList_code";

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
flex flex-wrap justify-center items-center mx-auto gap-8 mt-20
`;

const MySkill = (props) => {
    const mainSkill = useSelector((state) => state.myPage.mySpecialty);
    const subSkill = useSelector((state) => state.myPage.subSpecialty);
    return (
        <>
            <div className="flex flex-row flex-wrap items-center justify-start w-5/6 mx-auto">
                <Title size="3" className="mt-32">
                    SKILLS
                </Title>
            </div>
            <Line />
            <div className="grid w-5/6 grid-cols-5 mx-auto">
                <Title size="4" className="col-start-1">
                    main skill
                </Title>
                <Title size="4" className="col-start-1 mt-20">
                    other
                </Title>

                <Box>
                    <InnerBox>
                        {mainSkill && mainSkill.map((item) => <SkillThumbnail skill={item} key={item} />)}
                    </InnerBox>
                </Box>

                <Box02>
                    <InnerBox02>
                        {!subSkill && (
                            <>
                                <Title size="5">기타 스킬도 업로드해보세요!</Title>
                            </>
                        )}
                        {subSkill &&
                            subSkill.map((item) => (
                                <Button size="3" color="4" value={item}>
                                    {item}
                                </Button>
                            ))}
                    </InnerBox02>
                </Box02>
            </div>
        </>
    );
};

export default MySkill;
