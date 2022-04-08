import React, { useEffect, useState } from "react";
import { IconBtn, Subtitle, Icon, Thumbnail, Profile, Text } from "../../elements";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { requestFollow, requestUnFollow } from "../../redux/modules/user";
import { artworkDetailLoad, LikeArtwork, UnLikeArtwork, MarkArtwork, UnMarkArtwork } from "../../redux/modules/artWork";
import { myPageLoad } from "../../redux/modules/myPage";
import ArtWorkDetail from "./ArtWorkDetail";
import tw from "tailwind-styled-components";
import Swal from "sweetalert2";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Art = tw.div`
flex justify-center items-center flex-col shrink-0

`;

const ArtPost = (props) => {
    const {
        please,
        account_id,
        profile,
        nickname,
        thumbnail,
        is_follow,
        is_like,
        like_count,
        artwork_id,
        is_bookmark,
    } = props;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [follow, setFollow] = useState(is_like);
    const [like, setLike] = useState(is_like);
    const [bookmark, setBookmark] = useState(is_bookmark);
    const [tempProfile, setTempProfile] = useState("");
    const [barArtWorkId, setBarArtWorkId] = useState("");
    const [barFollow, setBarFollow] = useState();
    const [barLike, setBarLike] = useState();
    const [barBookMark, setBarBookMark] = useState();
    const [barAccountId, setBarAccountId] = useState();
    const [posterid, setposterid] = useState("");
    const sessionId = sessionStorage.getItem("account_id");
    const [isMine, setIsMine] = useState(false);
    useEffect(() => {
        if (sessionId == account_id) {
            setIsMine(true);
        }
    }, []);

    const ArtWorkURL = `dplusday.com/detailart/${barArtWorkId}`;

    const handleClickArtWork = () => {
        // setShowDetail(!showDetail);
        let owner_account_id = account_id;
        const visitor_account_id = sessionStorage.getItem("account_id");
        dispatch(artworkDetailLoad({ artwork_id, visitor_account_id, dispatch }));
        dispatch(myPageLoad({ account_id, owner_account_id, dispatch }));
    };
    // console.log(please, account_id)
    const clickProfile = () => {
        console.log("click accountid", barAccountId);
        navigate(`/myspace/myprofile/${barArtWorkId}`);
    };

    const clickFollow = () => {
        setFollow(!follow);
        setBarFollow(!barFollow);
        if (follow) {
            dispatch(requestUnFollow(account_id));
        } else {
            dispatch(requestFollow(account_id));
        }
    };

    const clickLike = () => {
        setLike(!like);
        setBarLike(!barLike);
        if (like) {
            // console.log('unlike');
            dispatch(UnLikeArtwork(barArtWorkId));
        } else {
            // console.log('like');
            dispatch(LikeArtwork(barArtWorkId));
        }
    };

    const clickBookmark = () => {
        setBookmark(!bookmark);
        setBarBookMark(!barBookMark);
        if (bookmark) {
            // console.log('unmark');
            dispatch(UnMarkArtwork(barArtWorkId));
        } else {
            // console.log('mark');
            dispatch(MarkArtwork(barArtWorkId));
        }
    };

    const ClickShare = () => {
        Swal.fire({
            icon: "success",
            title: "클립보드에 복사됐습니다.",
            showConfirmButton: false,
            timer: 1000,
        });
    };

    return (
        <>
            <Art>
                <button
                    type="button"
                    className="transition duration-150 ease-in-out active:shadow-lg"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModalXl"
                    onClick={() => {
                        handleClickArtWork({ artwork_id });
                    }}
                >
                    <Thumbnail src={thumbnail} size="3" />
                </button>
                <div className="flex flex-row items-stretch justify-between flex-shrink-0 w-full mt-1">
                    <div className="flex flex-row items-center gap-2">
                        <Profile size="7" src={profile} />
                        <Subtitle size="2" className="text-dpurple-300 truncate w-32">
                            {nickname}
                        </Subtitle>
                    </div>
                    <div className="flex flex-row items-center text-gray-600">
                        <IconBtn name="HeartE" count={like_count} />
                    </div>
                </div>
            </Art>

            {/* <> */}
            <div
                className="fixed top-0 left-0 hidden w-full h-full overflow-x-hidden overflow-y-auto outline-none modal fade"
                id="exampleModalXl"
                tabIndex="-1"
                aria-labelledby="exampleModalXlLabel"
                aria-modal="true"
                role="dialog"
            >
                <div className="relative w-auto pointer-events-none modal-dialog modal-xl">
                    <div className="relative flex flex-col w-full text-current bg-white border-none rounded-md shadow-lg outline-none pointer-events-auto modal-content bg-clip-padding">
                        <div className="modal-body">
                            <ArtWorkDetail
                                setBarFollow={setBarFollow}
                                setBarBookMark={setBarBookMark}
                                setBarLike={setBarLike}
                                artwork_id={artwork_id}
                                setTempProfile={setTempProfile}
                                setBarArtWorkId={setBarArtWorkId}
                                setposterid={setposterid}
                            />

                            <div className="hidden lg:contents">
                                <div className="flex flex-row justify-start w-20 gap-3 mx-auto lg:fixed top-20 right-10 2xl:right-48 lg:flex-col">
                                    <div
                                        onClick={clickProfile}
                                        className="flex flex-col items-center justify-center gap-1 cursor-pointer hover:scale-110"
                                    >
                                        <div className="flex flex-col items-center justify-center bg-white rounded-full font-min2">
                                            <button data-bs-dismiss="modal">
                                                <Profile size="5" src={tempProfile} />
                                            </button>
                                        </div>
                                        <Text size="1">프로필</Text>
                                    </div>
                                    {isMine && (
                                        <>
                                            <div
                                                onClick={clickFollow}
                                                className="flex flex-col items-center justify-center gap-1 cursor-pointer hover:scale-110"
                                            >
                                                <div className="flex flex-col items-center justify-center bg-white rounded-full font-min2">
                                                    <Icon name="Plus" iconSize="48" className="absolute" />
                                                    <Profile size="5" className="invisible" />
                                                </div>
                                                <Text size="1">팔로우</Text>
                                            </div>

                                            <div
                                                onClick={clickLike}
                                                className="flex flex-col items-center justify-center gap-1 cursor-pointer hover:scale-110"
                                            >
                                                <div className="flex flex-col items-center justify-center bg-white rounded-full font-min2">
                                                    {!barLike ? (
                                                        <Icon name="HeartE" iconSize="48" className="absolute" />
                                                    ) : (
                                                        <Icon name="HeartF" iconSize="48" className="absolute" />
                                                    )}
                                                    <Profile size="5" className="invisible" />
                                                </div>
                                                <Text size="1">좋아요</Text>
                                            </div>
                                            <div
                                                onClick={clickBookmark}
                                                className="flex flex-col items-center justify-center gap-1 cursor-pointer hover:scale-110"
                                            >
                                                <div className="flex flex-col items-center justify-center bg-white rounded-full font-min2">
                                                    {!barBookMark ? (
                                                        <Icon name="BookmarkE" iconSize="48" className="absolute" />
                                                    ) : (
                                                        <Icon name="BookmarkF" iconSize="48" className="absolute" />
                                                    )}
                                                    {/* <Icon name="BookmarkE" iconSize="48" className="absolute" /> */}
                                                    <Profile size="5" className="invisible" />
                                                </div>
                                                <Text size="1">스크랩</Text>
                                            </div>
                                        </>
                                    )}
                                    <div className="flex flex-col items-center justify-center gap-1 cursor-pointer hover:scale-110">
                                        <CopyToClipboard text={ArtWorkURL}>
                                            <div
                                                onClick={ClickShare}
                                                className="flex flex-col items-center justify-center bg-white rounded-full font-min2"
                                            >
                                                <Icon name="Link" iconSize="48" className="absolute" />
                                                <Profile size="5" className="invisible" />
                                            </div>
                                        </CopyToClipboard>
                                        <Text className="hidden lg:contents" size="1">
                                            공유하기
                                        </Text>
                                    </div>
                                </div>
                            </div>
                            {/* 여기가버튼끝 */}
                        </div>
                    </div>
                </div>
            </div>
            {/* </> */}
        </>
    );
};

export default ArtPost;
