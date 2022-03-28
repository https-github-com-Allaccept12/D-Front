import React from "react";
import { Profile, HeartButton, Icon, SkillThumbnailMini, Title, Input, TypeBtn, SnsIcons } from "../../elements";

import DetailSlider from "../Sliders/DetailSlider";
import { Comment } from "../Comment";
import { useInput } from "../../hooks";
import tw from "tailwind-styled-components";

const Grid = tw.div`
flex justify-center items-center flex-col w-full
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
const ArtWorkDetail = (props) => {
    const validMaxLen = (value) => value.length <= 30;
    const name = useInput("", [validMaxLen]);
    return (
        <>
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
                                    <div className="flex flex-row justify-start gap-x-1">
                                        <TypeBtn types="art" />

                                        <SnsIcons sns="Behance" />
                                        <SnsIcons sns="Kakao" />
                                    </div>
                                </div>
                            </div>
                        </ProfileBox>

                        {/* 슬라이더 자리 */}

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
                                maxLen="30"
                            />

                            <div className="">
                                <Comment />
                                <Comment />
                            </div>
                        </CommentBox>
                    </div>
                    <button
                        type="button"
                        className="btn-close box-content w-4 h-4 p-1 text-white border-none rounded-none opacity-80 focus:shadow-none focus:outline-none focus:opacity-100 md:hidden"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </ModalBody>
            </Grid>
        </>
    );
};

export default ArtWorkDetail;
