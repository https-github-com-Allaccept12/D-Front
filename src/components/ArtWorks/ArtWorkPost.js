import React from "react";
import { HeartButton, Subtitle, Icon, Thumbnail, Profile } from "../../elements";

import { useHistory } from "react-router-dom";
import ArtWorkDetail from "./ArtWorksGrid/ArtWorkDetail";
import tw from "tailwind-styled-components";

const Art = tw.div`
p-1 m-1 flex justify-center items-center flex-col shrink-0
${(props) => (props.main ? `p-0 m-0` : "")};
`;

const ArtWorkPost = (props) => {
    const { size, main, profile, nickname, thumnail, is_like, like_count } = props;
    return (
        <>
            <Art main={main}>
                <button
                    type="button"
                    className="transition duration-150 ease-in-out active:shadow-lg"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModalXl"
                >
                    <Thumbnail src={thumnail} size={size} />
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
                                <ArtWorkDetail />
                                <div className="fixed w-20 space-y-2 top-20 right-20 xl:right-60">
                                    <div className="flex flex-col items-center justify-center p-2 py-3 bg-white rounded-full font-min2">
                                        <Icon />
                                        프로필
                                    </div>
                                    <div className="flex flex-col items-center justify-center p-2 py-3 bg-white rounded-full font-min2">
                                        <Icon />
                                        팔로우
                                    </div>
                                    <div className="flex flex-col items-center justify-center p-2 py-3 bg-white rounded-full font-min2">
                                        <Icon name="HeartF" />
                                        좋아요
                                    </div>
                                    <div className="flex flex-col items-center justify-center p-2 py-3 bg-white rounded-full font-min2">
                                        <Icon />
                                        스크랩
                                    </div>
                                    <div className="flex flex-col items-center justify-center p-2 py-3 bg-white rounded-full font-min2">
                                        <Icon name="Link" />
                                        공유하기
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

export default ArtWorkPost;
