import React from "react";
import { HeartButton, Text, Icon, Title, Profile, Label, IconBtn } from "../../../elements";

import { useHistory, Link } from "react-router-dom";
import tw from "tailwind-styled-components";

const Art = tw.div`
flex justify-center items-center flex-col shrink-0
`;

const Box = tw.div`
flex flex-row items-center justify-between w-full lg:px-2 mt-1 mx-auto

`;

const Grid = tw.div`
w-[23.238rem] h-[16rem] border border-dgray-200 rounded-lg bg-white
shadow-md
`;
const Card = tw.div`
w-[23.238rem] h-[16rem] absolute
`;

const Header = tw.div`
w-[23.238rem] h-[6.5rem]
`;

const LabelBox = tw.div`
absolute top-9 left-[7rem]
`;

const TextBox = tw.div`
 px-5 text-ellipsis w-[22.25rem] h-22 absolute left-4 top-28
`;

const IconBox = tw.div`
absolute bottom-4 px-9 w-[23.238rem]
`;

const DimoPost = (props) => {
    const { profile, nickname, thumnail, is_like, like_count, list } = props;
    if (list === "qna")
        return (
            <>
                <Link to="/dimo/qnadetail">
                    <Art>
                        <Box>
                            <Grid>
                                <Card>
                                    <Header>
                                        <Profile size="5" src={profile} className="absolute inset-6" />
                                        <LabelBox>
                                            {/* 여기에 라벨맵돌리거나 첫번째두번째 수동 */}
                                            <div className="flex flex-row gap-1">
                                                <Label className="">ui/ux</Label>
                                                <Label className="">취업하는태그가태그</Label>
                                            </div>
                                        </LabelBox>

                                        <div className="absolute top-[3.5rem] left-[7rem] w-[13rem] overflow-hidden">
                                            <Title size="5" className="text-left truncate">
                                                여기는 큐엔에이
                                            </Title>
                                        </div>
                                    </Header>
                                    <TextBox>
                                        <p className="w-[20.25rem] h-24 text-ellipsis overflow-hidden">
                                            고민내용 고민내용고민내용 고민내용 고민내용고민내용고민내용 고민내용
                                            고민내용고민내용고민내용고민내용고민내용 고민내용 고민내용고민내용 고민내용
                                            고민내용고민내용고민내용 고민내용
                                            고민내용고민내용고민내용고민내용고민내용고민내용 고민내용고민내용 고민내용
                                            고민내용고민내용고민내용 고민내용
                                            고민내용고민내용고민내용고민내용고민내용고민내용 고민내용고민내용 고민내용
                                            고민내용고민내용고민내용 고민내용 고민내용고민내용고민내용고민내용고민내용
                                        </p>
                                    </TextBox>

                                    <IconBox>
                                        <div className="flex flex-row justify-end">
                                            <div className="flex flex-row gap-5">
                                                <IconBtn name="Talk" iconSize="20" count="4" />
                                                <IconBtn name="HeartE" iconSize="20" count="4" />
                                            </div>
                                        </div>
                                    </IconBox>
                                </Card>
                            </Grid>
                        </Box>
                    </Art>
                </Link>
            </>
        );
    if (list === "shared")
        return (
            <>
                <Link to="/dimo/qnadetail">
                    <Art>
                        <Box>
                            <Grid>
                                <Card>
                                    <Header>
                                        <Profile size="5" src={profile} className="absolute inset-6" />
                                        <LabelBox>
                                            {/* 여기에 라벨맵돌리거나 첫번째두번째 수동 */}
                                            <div className="flex flex-row gap-1">
                                                <Label className="">ui/ux</Label>
                                                <Label className="">취업하는태그가태그</Label>
                                            </div>
                                        </LabelBox>

                                        <div className="absolute top-[3.5rem] left-[7rem] w-[13rem] overflow-hidden">
                                            <Title size="5" className="text-left truncate">
                                                여기는 정보공유타이틀이 15자이상일 경우보이는 모양dfdsfdsf
                                            </Title>
                                        </div>
                                    </Header>
                                    <TextBox>
                                        <p className="w-[20.25rem] h-24 text-ellipsis overflow-hidden">
                                            고민내용 고민내용고민내용 고민내용 고민내용고민내용고민내용 고민내용
                                            고민내용고민내용고민내용고민내용고민내용 고민내용 고민내용고민내용 고민내용
                                            고민내용고민내용고민내용 고민내용
                                            고민내용고민내용고민내용고민내용고민내용고민내용 고민내용고민내용 고민내용
                                            고민내용고민내용고민내용 고민내용
                                            고민내용고민내용고민내용고민내용고민내용고민내용 고민내용고민내용 고민내용
                                            고민내용고민내용고민내용 고민내용 고민내용고민내용고민내용고민내용고민내용
                                        </p>
                                    </TextBox>

                                    <IconBox>
                                        <div className="flex flex-row justify-end">
                                            <div className="flex flex-row gap-5">
                                                <IconBtn name="Talk" iconSize="20" count="4" />
                                                <IconBtn name="HeartE" iconSize="20" count="4" />
                                            </div>
                                        </div>
                                    </IconBox>
                                </Card>
                            </Grid>
                        </Box>
                    </Art>
                </Link>
            </>
        );
    else return null;
};

export default DimoPost;
