import React, { useRef, useEffect, useState } from "react";
import { IconBtn, Subtitle, Icon, Thumbnail, Profile, Text } from "../../elements";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { artworkDetailLoad, LikeArtwork, UnLikeArtwork, MarkArtwork, UnMarkArtwork } from "../../redux/modules/artWork";
import { myPageLoad } from "../../redux/modules/myPage";
import ArtWorkDetail from "./ArtWorkDetail";
import tw from "tailwind-styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Art = tw.div`
flex justify-center items-center flex-col shrink-0

`;

const ArtPost = (props) => {
    const { account_id, profile, nickname, thumbnail, is_like, like_count, artwork_id, is_bookmark } = props;
    console.log(account_id, nickname, "여기요 여기");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [like, setLike] = useState(is_like);
    const [bookmark, setBookmark] = useState(is_bookmark);
    const [tempProfile, setTempProfile] = useState('');
    const [barArtWorkId, setBarArtWorkId] = useState('');
    const [barLike, setBarLike] = useState();
    const [barBookMark, setBarBookMark] = useState();
    const ArtWorkURL = `localhost:3000/detailart/${barArtWorkId}`;
    console.log(ArtWorkURL);
    const handleClickArtWork = () => {
        let owner_account_id = account_id;
        const visitor_account_id = sessionStorage.getItem("account_id");
        dispatch(artworkDetailLoad({ artwork_id, visitor_account_id, dispatch }));
        dispatch(myPageLoad({ account_id, owner_account_id, dispatch }));
    };

    const clickProfile = () => {
        console.log('clickckcick');
        navigate(`/myspace/myprofile/${barArtWorkId}`, {
            state: {
                owner_id: { barArtWorkId },
            }
        })
    }
    console.log('barLike: ', barLike);
    const clickLike = () => {
        setLike(!like);
        setBarLike(!barLike);
        if (like){
            console.log('unlike');
            dispatch(UnLikeArtwork(barArtWorkId));
        } else{
            console.log('like');
            dispatch(LikeArtwork(barArtWorkId));

        }
    }

    const clickBookmark = () => {
        setBookmark(!bookmark);
        setBarBookMark(!barBookMark);
        if (bookmark){
            console.log('unmark');
            dispatch(UnMarkArtwork(barArtWorkId));
        } else{
            console.log('mark');
            dispatch(MarkArtwork(barArtWorkId));

        }
    }

    const ClickShare = () => {
        alert('클립보드에 복사됐습니다.')
    }
    
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
                <div className="flex flex-row items-center justify-between flex-shrink-0 w-full px-2 mt-1">
                    <div className="flex flex-row items-center gap-2">
                        <Profile size="7" src={profile} />
                        <Subtitle size="1">{nickname}</Subtitle>
                    </div>
                    <div className="flex flex-row items-center text-dgray-400">
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
                                <ArtWorkDetail setBarBookMark={setBarBookMark} setBarLike={setBarLike} artwork_id={artwork_id} setTempProfile={setTempProfile} setBarArtWorkId={setBarArtWorkId}/>

                                <div className="hidden lg:contents">
                                    <div className="flex flex-row justify-start w-20 gap-3 mx-auto lg:fixed top-20 right-10 2xl:right-48 lg:flex-col">
                                        <div onclick={clickProfile} className="flex flex-col items-center justify-center gap-1 cursor-pointer hover:scale-110">
                                            <div className="flex flex-col items-center justify-center bg-white rounded-full font-min2">
                                                <Profile onclick={clickProfile} size="5" src={tempProfile} />
                                            </div>
                                            <Text size="1">프로필</Text>
                                        </div>
                                        <div className="flex flex-col items-center justify-center gap-1 cursor-pointer hover:scale-110">
                                            <div className="flex flex-col items-center justify-center bg-white rounded-full font-min2">
                                                <Icon name="Plus" iconSize="48" className="absolute" />
                                                <Profile size="5" className="invisible" />
                                            </div>
                                            <Text size="1">팔로우</Text>
                                        </div>
                                        <div onClick={clickLike} className="flex flex-col items-center justify-center gap-1 cursor-pointer hover:scale-110">
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
                                        <div onClick={clickBookmark} className="flex flex-col items-center justify-center gap-1 cursor-pointer hover:scale-110">
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
                                        <div className="flex flex-col items-center justify-center gap-1 cursor-pointer hover:scale-110">
                                            
                                            
                                                <CopyToClipboard text={ArtWorkURL}>
                                                <div onClick={ClickShare} className="flex flex-col items-center justify-center bg-white rounded-full font-min2">
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
