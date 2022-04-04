import React, { useRef, useEffect } from "react";
import { IconBtn, Subtitle, Icon, Thumbnail, Profile, Text } from "../../elements";

import { useDispatch } from "react-redux";
import { artworkDetailLoad, LikeArtwork } from "../../redux/modules/artWork";
import { myPageLoad } from "../../redux/modules/myPage";
import ArtWorkDetail from "./ArtWorkDetail";
import tw from "tailwind-styled-components";

const Art = tw.div`
flex justify-center items-center flex-col shrink-0

`;

const ArtPost = (props) => {
    const { account_id, profile, nickname, thumbnail, is_like, like_count, id, is_bookmark } = props;
    console.log(profile);
    const dispatch = useDispatch();
    const handleClickArtWork = () => {
        let owner_account_id = account_id;
        dispatch(artworkDetailLoad({ id, dispatch }));
        dispatch(myPageLoad({ account_id, owner_account_id, dispatch }));
    };

    const clickLike = () => {
        console.log('click');
        dispatch(LikeArtwork(id));
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
                        handleClickArtWork({ id });
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

            <>
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
                                <ArtWorkDetail id={id} />

                                <div className="hidden lg:contents">
                                    <div className="flex flex-row justify-start w-20 gap-3 mx-auto lg:fixed top-20 right-10 2xl:right-48 lg:flex-col">
                                        <div className="flex flex-col items-center justify-center gap-1 cursor-pointer hover:scale-110">
                                            <div className="flex flex-col items-center justify-center bg-white rounded-full font-min2">
                                                <Profile size="5" src={profile} />
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
                                                {!is_like ? (
                                                    <Icon name="HeartE" iconSize="48" className="absolute" />
                                                ) : (
                                                    <Icon name="HeartF" iconSize="48" className="absolute" />
                                                )}
                                                <Profile size="5" className="invisible" />
                                            </div>
                                            <Text size="1">좋아요</Text>
                                        </div>
                                        <div className="flex flex-col items-center justify-center gap-1 cursor-pointer hover:scale-110">
                                            <div className="flex flex-col items-center justify-center bg-white rounded-full font-min2">
                                                {!is_bookmark ? (
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
                                            <div className="flex flex-col items-center justify-center bg-white rounded-full font-min2">
                                                <Icon name="Link" iconSize="48" className="absolute" />
                                                <Profile size="5" className="invisible" />
                                            </div>
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
            </>
        </>
    );
};

export default ArtPost;
