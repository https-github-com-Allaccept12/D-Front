import React from "react";
import {
    Profile,
    HeartButton,
    IconBtn,
    SkillThumbnailMini,
    Title,
    Text,
    Button,
    InputNoTitle,
    TypeBtn,
    SnsIcons,
} from "../../elements";

import DetailSlider from "../Sliders/DetailSlider";
import { Comment } from "../Comment";
import { useInput, useToggle } from "../../hooks";
import tw from "tailwind-styled-components";
import { useHistory, Link, useLocation } from "react-router-dom";

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

const MobileBox = tw.div`
 bg-white w-40 border-2 rounded-xl absolute z-30
`;

const Flex = tw.div`
flex flex-col gap-2 justify-center items-center
`;

const ArtWorkDetail = (props) => {
    const { id } = props;
    const history = useHistory();
    const validMaxLen = (value) => value.length <= 30;
    const name = useInput("", [validMaxLen]);
    const [showMenu, setShowMenu] = useToggle();

    const commentSubmit = () => {
        const data = { comment: name.value };
        history.goBack();
        //여기에 뭔가 돌아가기버튼...
    };
    return (
        <>
            <Grid>
                <Box>
                    <Header>
                        <div className="flex items-center">
                            <Profile size="6" className="hidden sm:contents" />
                        </div>
                        <div className="flex flex-col gap-2 ml-2 text-left">
                            <Title size="6">은행 어플리케이션 디자인</Title>
                            <p className="flex flex-row text-md text-dgray-500 font-min2">
                                2022.03.10
                                <InnerLine /> UX / UI
                            </p>
                        </div>
                        <div className="flex flex-row gap-2 ml-auto">
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
                        <IconBtn name="HeartE" iconSize="24" count="40" />
                        <IconBtn name="Eye" iconSize="28" count="40" />
                        <IconBtn name="Talk" iconSize="24" count="40" />
                    </ViewBox>

                    <div className="p-6 bg-white">
                        <ProfileBox>
                            <div className="flex flex-row items-center justify-start">
                                <Profile size="5" className="mb-3" onClick={setShowMenu} />
                                {showMenu && (
                                    <div className="absolute w-40">
                                        <MobileBox>
                                            <Flex>
                                                <Text size="1">프로필</Text>
                                                <Text size="1">팔로우</Text>
                                                <Text size="1">좋아요</Text>
                                                <Text size="1">스크랩</Text>
                                                <Text size="1">공유하기</Text>
                                            </Flex>
                                        </MobileBox>
                                    </div>
                                )}

                                <div className="flex flex-col gap-1 ml-2 text-left">
                                    <Text size="1" className="font-semibold text-dgray-600">
                                        이름 이름
                                    </Text>
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

                        <Title size="6" className="hidden pb-5 pl-7 md:contents">
                            댓글 0개
                        </Title>

                        <CommentBox>
                            <div className="bg-white flex p-5 xl:px-10 2xl:px-20 gap-3">
                                <div>
                                    <Profile size="6" src="http://kids.donga.com/www/data/news/201408/2014080726.jpg" />
                                </div>
                                <div className="w-full ml-auto">
                                    <InputNoTitle
                                        value={name.value}
                                        onChange={name.onChange}
                                        is_error={name.errors}
                                        is_value={name.value.length}
                                        cardsize="1"
                                        maxlen="30"
                                        width="2"
                                        is_submit
                                        onSubmit={commentSubmit}
                                    />
                                    <Button size="3" className="invisible ">
                                        제출
                                    </Button>
                                </div>
                            </div>

                            <div className="">
                                <Comment />
                                <Comment />
                            </div>
                        </CommentBox>
                    </div>
                    <button
                        type="button"
                        className="box-content w-4 h-4 p-1 text-white border-none rounded-none btn-close opacity-80 focus:shadow-none focus:outline-none focus:opacity-100 md:hidden"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </ModalBody>
            </Grid>
        </>
    );
};

export default ArtWorkDetail;
