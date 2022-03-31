import React from "react";
import { Profile, HeartButton, Icon, SkillThumbnailMini, Title, Input, TypeBtn, Text } from "../../elements";

import DetailSlider from "../Sliders/DetailSlider";
import { Comment } from "../Comment";
import { useInput } from "../../hooks";
import tw from "tailwind-styled-components";

const Paddings = tw.div`
w-full bg-dgray-300 h-full
`;

const Grid = tw.div`
flex justify-center items-center flex-col lg:w-4/5
`;

const Box = tw.div`
bg-white p-10 justify-between w-full h-[9rem]
`;

const Header = tw.div`
flex items-center justify-start flex-row 
`;

const InnerLine = tw.hr`
border h-4 mx-3 mt-1 text-dgray-300
`;

const ModalBody = tw.div`
w-full mx-auto overflow-hidden bg-transparent rounded-lg shadow-md
`;

const Images = tw.img`
object-cover w-full h-fit
`;

const ViewBox = tw.div`
bg-dgray-100 h-[7rem] flex flex-row justify-center space-x-20 items-center
`;

const ProfileBox = tw.div`
bg-white p-10 justify-between w-full h-[9rem]
`;

const Line = tw.hr`
w-[95%] border mx-auto border-gray-300 my-6
`;

const CommentBox = tw.div` 
flex flex-col grow md:px-5
`;

const CommentInput = tw.section`
flex mt-5 
`;
const ArtWorkInlineDetail = (props) => {
    const validMaxLen = (value) => value.length <= 30;
    const name = useInput("", [validMaxLen]);
    return (
        <>
            <Paddings>
                <div className="fixed right-12 invisible lg:visible">
                    <div className="flex flex-col">
                        <div className="flex justify-center items-center flex-col gap-1 cursor-pointer hover:scale-110">
                            <div className="flex flex-col items-center justify-center bg-white rounded-full font-min2">
                                <Profile size="5" />
                            </div>
                            <Text size="1">프로필</Text>
                        </div>
                        <div className="flex justify-center items-center flex-col gap-1 cursor-pointer hover:scale-110">
                            <div className="flex flex-col items-center justify-center bg-white rounded-full font-min2">
                                <Icon name="StarE" iconSize="48" className="absolute" />
                                <Profile size="5" className="invisible" />
                            </div>
                            <Text size="1">팔로우</Text>
                        </div>
                        <div className="flex justify-center items-center flex-col gap-1  cursor-pointer hover:scale-110">
                            <div className="flex flex-col items-center justify-center bg-white rounded-full font-min2">
                                <Icon name="StarE" iconSize="48" className="absolute" />
                                <Profile size="5" className="invisible" />
                            </div>
                            <Text size="1">좋아요</Text>
                        </div>
                        <div className="flex justify-center items-center flex-col gap-1  cursor-pointer hover:scale-110">
                            <div className="flex flex-col items-center justify-center bg-white rounded-full font-min2">
                                <Icon name="StarE" iconSize="48" className="absolute" />
                                <Profile size="5" className="invisible" />
                            </div>
                            <Text size="1">스크랩</Text>
                        </div>
                        <div className="flex justify-center items-center flex-col gap-1  cursor-pointer hover:scale-110">
                            <div className="flex flex-col items-center justify-center bg-white rounded-full font-min2">
                                <Icon name="StarE" iconSize="48" className="absolute" />
                                <Profile size="5" className="invisible" />
                            </div>
                            <Text className="" size="1">
                                공유하기
                            </Text>
                        </div>
                    </div>
                </div>
                <Grid>
                    <Box>
                        <Header>
                            <div className="flex items-center">
                                <Profile size="6" className="hidden sm:contents" />
                            </div>
                            <div className="flex flex-col gap-2 text-left ml-2">
                                <Title size="6">은행 어플리케이션 디자인</Title>
                                <p className="text-md text-dgray-500 flex flex-row font-min2">
                                    2022.03.10
                                    <InnerLine /> UX / UI
                                </p>
                            </div>
                            <div className="flex ml-auto flex-row gap-2">
                                <SkillThumbnailMini skill="A1" />
                                <SkillThumbnailMini skill="A5" />
                            </div>
                        </Header>
                    </Box>

                    <ModalBody>
                        <Images
                            src="https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/cnoC/image/d8fBsA26Y_-zWzEHHYNUgV51oWU.JPG"
                            alt=""
                        />

                        <ViewBox>
                            <HeartButton like_cnt="1" is_like nameF="StarF" nameE="StarE" />
                            <HeartButton like_cnt="1" is_like nameF="HeartF" nameE="HeartE" />
                            <HeartButton like_cnt="1" is_like nameF="BookmarkF" nameE="BookmarkE" />
                        </ViewBox>

                        <div className="p-6 bg-white">
                            <ProfileBox>
                                <div className="flex items-center justify-start flex-row">
                                    <Profile size="5" className="mb-3" />

                                    <div className="flex flex-col gap-1 text-left ml-2">
                                        <p className="font-semibold text-dgray-600">이름 이름</p>
                                        <div className="flex flex-row">
                                            <TypeBtn types="art" />
                                        </div>
                                    </div>
                                </div>
                            </ProfileBox>

                            <DetailSlider />
                            <Line />

                            <Title size="6" className="pl-7 pb-5 hidden md:contents">
                                댓글 0개
                            </Title>

                            <CommentBox>
                                <Profile size="5" className="absolute invisible md:visible" />
                                <Input
                                    value={name.value}
                                    onChange={name.onChange}
                                    is_error={name.errors}
                                    is_value={name.value.length}
                                    textarea
                                    maxlen="30"
                                />

                                <div className="">
                                    <Comment />
                                    <Comment />
                                </div>
                            </CommentBox>
                        </div>
                    </ModalBody>
                </Grid>
            </Paddings>
        </>
    );
};

export default ArtWorkInlineDetail;
