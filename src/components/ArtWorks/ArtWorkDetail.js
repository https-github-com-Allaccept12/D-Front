import React, { useState, useEffect, useCallback } from "react";
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
import adventure from "../../static/images/MyPageImages/adventure.svg";
import artist from "../../static/images/MyPageImages/artist.svg";
import detail from "../../static/images/MyPageImages/detail.svg";
import harmonious from "../../static/images/MyPageImages/harmonious.svg";
import innovator from "../../static/images/MyPageImages/innovator.svg";
import inventor from "../../static/images/MyPageImages/inventor.svg";

import { useDispatch, useSelector } from "react-redux";
import { submitComment } from "../../redux/modules/artWork";
import DetailSlider from "../Sliders/DetailSlider";
import { Comment } from "../Comment";
import skillList from "../ArtWorks/skillList_code";
import { useInput, useToggle } from "../../hooks";
import tw from "tailwind-styled-components";
import { useNavigate } from "react-router-dom";

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
    const { closeRef, fromPostMain, setTempProfile, setBarArtWorkId, setBarBookMark, setBarLike, setBarFollow } = props;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const myProfileImg = sessionStorage.getItem("profile_img");
    const writerInfo = useSelector((state) => state.myPage.myPage);
    const artworks = useSelector((state) => state.artwork.detailArtwork);

    // console.log(artworks);
    const [artworkId, setArtworkId] = useState("");
    const [nickname, setNickname] = useState("");
    const [category, setCategory] = useState("");
    const [profile, setProfile] = useState("");
    const [content, setContent] = useState("");
    const [copyright, setCopyright] = useState("");
    const [time, setTime] = useState("");
    const [specialty, setSpecialty] = useState([]);
    const [title, setTitle] = useState("");
    const [commentCount, setCommentCount] = useState("");
    const [likeCount, setLikeCount] = useState("");
    const [viewCount, setViewCount] = useState("");
    const [images, setImages] = useState([]);
    const [tendency, setTendency] = useState("");
    const [others, setOthers] = useState([]);
    const [comment, setComment] = useState([]);

    useEffect(() => {
        if (artworks) {
            setArtworkId(artworks.artWorkSubDetail.artwork_id);
            setNickname(artworks.artWorkSubDetail.account_nickname);
            setCategory(artworks.artWorkSubDetail.category);
            setProfile(artworks.artWorkSubDetail.account_profile_img);
            setTempProfile(artworks.artWorkSubDetail.account_profile_img);
            setBarArtWorkId(artworks.artWorkSubDetail.artwork_id);
            if(!fromPostMain){
                setBarFollow(artworks.is_follow);
                setBarLike(artworks.is_like);
                setBarBookMark(artworks.is_bookmark);
            }
            setContent(artworks.artWorkSubDetail.content);
            setCopyright(artworks.artWorkSubDetail.account_nickname);
            setTime(artworks.artWorkSubDetail.create_time);
            setTitle(artworks.artWorkSubDetail.title);
            setCommentCount(artworks.artWorkSubDetail.comment_count);
            setLikeCount(artworks.artWorkSubDetail.like_count);
            setViewCount(artworks.artWorkSubDetail.view_count);
            setImages(artworks.img);
            setComment(artworks.comment);
            setOthers(artworks.similar_Work);
            const temp = artworks.artWorkSubDetail.specialty.split("/");
            const temp2 = [];
            for (var i = 0; temp.length; i++) {
                var x = temp.pop();
                for (var skill of skillList) {
                    if (x == skill.label) {
                        temp2.push(skill.value);
                    }
                }
            }
            setSpecialty(temp2);
        }
        if (writerInfo) {
            setTendency(writerInfo.tendency);
        }
    }, [artworks, writerInfo]);

    const validMaxLen = (value) => value.length <= 30;
    const name = useInput("", [validMaxLen]);
    const [showMenu, setShowMenu] = useToggle();

    const commentSubmit = () => {
        const artwork_id = artworkId;
        const data = { content: name.value };
        dispatch(submitComment({ artwork_id, data }));

        navigate(`/art/list/all`, { replace: true });
        // history.goBack();
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
                            <Title size="6">{title}</Title>
                            <p className="flex flex-row text-md text-dgray-500 font-min2">
                                {time.split("T")[0]}
                                <InnerLine /> {category}
                            </p>
                        </div>
                        <div className="flex flex-row gap-2 ml-auto">
                            {specialty &&
                                specialty.map((value) => {
                                    return <SkillThumbnailMini skill={value}  key="1" />;
                                })}
                        </div>
                    </Header>
                </Box>

                <ModalBody>
                    {images &&
                        images.map((value) => {
                            return <Images src={value.img_url} />;
                        })}

                    <ViewBox>
                        <IconBtn name="HeartE" iconSize="24" count={likeCount} />
                        <IconBtn name="Eye" iconSize="28" count={viewCount} />
                        <IconBtn name="Talk" iconSize="24" count={commentCount} />
                    </ViewBox>

                    <div className="p-6 bg-white">
                        <ProfileBox>
                            <div className="flex flex-row items-center justify-start">
                                <Profile
                                    size="5"
                                    className="mb-3"
                                    src={profile}
                                    // onClick={setShowMenu}
                                />
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
                                    <Title size="6" className="font-semibold text-dgray-600">
                                        {nickname && nickname}
                                    </Title>
                                    <div className="flex flex-row justify-start gap-x-1">
                                        {/* <TypeBtn types="art" />
                                        <div className="mt-2 mb-4"> */}
                                        {tendency && tendency == "명랑한 모험가" && <img src={adventure} />}
                                        {tendency && tendency == "꿈꾸는 예술가" && <img src={artist} />}
                                        {tendency && tendency == "디테일 장인" && <img src={detail} />}
                                        {tendency && tendency == "부드러운 중재자" && <img src={harmonious} />}
                                        {tendency && tendency == "대담한 혁신가" && <img src={innovator} />}
                                        {tendency && tendency == "창의적인 발명가" && <img src={inventor} />}
                                        {/* </div> */}

                                        {/* <SnsIcons sns="Behance" />
                                        <SnsIcons sns="Kakao" /> */}
                                    </div>
                                </div>
                            </div>
                        </ProfileBox>

                        {/* 슬라이더 자리 */}

                        <DetailSlider main="main" others={others} />
                        <Line />

                        {/* <Title size="6" className="hidden pb-5 pl-7 md:contents">
                            댓글 0개
                        </Title> */}

                        <CommentBox>
                            <div className="flex gap-3 p-5 bg-white xl:px-10 2xl:px-20">
                                <div>
                                    <Profile size="6" src={myProfileImg} />
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
                                    <Button size="3" className="invisible">
                                        제출
                                    </Button>
                                </div>
                            </div>

                            <div className="">
                                {comment &&
                                    comment.map((value) => {
                                        return <Comment value={value} />;
                                    })}
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
