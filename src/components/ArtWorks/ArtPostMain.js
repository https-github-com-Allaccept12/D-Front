import React from "react";
import { HeartButton, Subtitle, Icon, Thumbnail, Profile, Text } from "../../elements";

import { useDispatch } from "react-redux";
import { artworkDetailLoad } from "../../redux/modules/artWork";
import ArtWorkDetail from "./ArtWorkDetail";
import tw from "tailwind-styled-components";

const Art = tw.div`
flex justify-center items-center flex-col shrink-0

`;

const ArtPostMain = (props) => {
    const dispatch = useDispatch();
    dispatch(artworkDetailLoad);
    const { profile, nickname, thumnail, is_like, like_count, id } = props;
    const handleClickArtWork = (id) => {
        console.log(id.id);
        dispatch(artworkDetailLoad(id.id));
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
                        handleClickArtWork({ id });
                    }}
                >
                    <Thumbnail src={thumnail} size="9" />
                </button>
                <div className="flex flex-row items-center justify-between flex-shrink-0 w-full px-2 mt-1">
                    <div className="flex flex-row items-center gap-2">
                        <Profile size="7" src={profile} />
                        <Subtitle size="1">{nickname}</Subtitle>
                    </div>
                    <div className="flex flex-row items-center mt-1 mr-1">
                        <HeartButton like_cnt={like_count} is_like={is_like} />
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

                                <div className="hidden md:contents">
                                    <div className="flex flex-row justify-start w-20 gap-3 mx-auto lg:fixed top-20 right-10 2xl:right-48 lg:flex-col">
                                        <div className="flex flex-col items-center justify-center gap-1 cursor-pointer hover:scale-110">
                                            <div className="flex flex-col items-center justify-center bg-white rounded-full font-min2">
                                                <Profile size="5" />
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
                                        <div className="flex flex-col items-center justify-center gap-1 cursor-pointer hover:scale-110">
                                            <div className="flex flex-col items-center justify-center bg-white rounded-full font-min2">
                                                <Icon name="HeartE" iconSize="48" className="absolute" />
                                                <Profile size="5" className="invisible" />
                                            </div>
                                            <Text size="1">좋아요</Text>
                                        </div>
                                        <div className="flex flex-col items-center justify-center gap-1 cursor-pointer hover:scale-110">
                                            <div className="flex flex-col items-center justify-center bg-white rounded-full font-min2">
                                                <Icon name="BookmarkE" iconSize="48" className="absolute" />
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
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </>
    );
};

export default ArtPostMain;
