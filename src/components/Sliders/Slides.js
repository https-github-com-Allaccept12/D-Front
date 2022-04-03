import React from "react";
import { Label, Title, HeartButton, Text, Card, Profile, Button, Thumbnail, IconBtn } from "../../elements";
import tw from "tailwind-styled-components";

import { useHistory, Link } from "react-router-dom";
import { DimoWorkPost } from "../Dimo";
const IconBox = tw.div`
absolute bottom-6 px-9 w-full
`;

const ColorSlide = tw.div`
absolute w-[32.5rem] h-[18.75rem]  rounded-lg bg-dpurple-200 
`;

const Slides = (props) => {
    const { type, list, value } = props;

    let history = useHistory();
    if (type === "main")
        return (
            <>
                <div className="flex flex-col items-center justify-center">
                    <div className="bg-white bg-center bg-cover rounded-lg shadow-md">
                        <Card
                            size="5"
                            types="text"
                            src="https://user-images.githubusercontent.com/89088205/155067792-882e3507-e664-4b31-ad9a-4b7abf4af948.jpg"
                        />

                        <div
                            className=" absolute top-0 
        w-[18.75rem] h-[22.813rem] rounded-lg"
                        >
                            <div className="flex flex-row items-center justify-evenly shrink-0 ml-[0.8rem] mt-3 gap-3">
                                <div
                                    className=" w-[8.375rem]
           h-[12.5rem] rounded-lg"
                                >
                                    <Thumbnail
                                        size="6"
                                        src={props.thumnail1}
                                        className="object-cover object-center overflow-hidden"
                                    />
                                </div>
                                <div
                                    className="bg-yellow-200 w-[8.375rem]
           h-[12.5rem] rounded-lg"
                                >
                                    <Thumbnail
                                        size="6"
                                        src={props.thumnail2}
                                        className="object-cover object-center overflow-hidden"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="-mt-36 overflow-hidden bg-white
        rounded-b-xl w-[18.75rem] h-[8.9rem]"
                    >
                        <div className="absolute bottom-[5rem] pl-6 hover:scale-110 cursor-pointer">
                            <Profile size="3" src={props.image} />
                        </div>
                        <div className="pt-6 pl-40">
                            <Title size="5" className="truncate">
                                {props.nickname} 님
                            </Title>
                            <div className="-mt-1">
                                <Text size="5">{props.job} </Text>
                            </div>
                        </div>
                        <div className="flex justify-center mt-5">
                            {!props.follow ? (
                                <Button size="3" color="1">
                                    팔로우
                                </Button>
                            ) : (
                                <Button size="3" color="4">
                                    팔로잉
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </>
        );
    if (type === "artwork")
        return (
            <>
                <div className="flex items-center justify-center rounded-lg">
                    <Thumbnail size="7" src={value.img} />
                    {/* <Thumbnail size="7" src="https://thumb.ac-illust.com/a5/a5b68711f17ff70ea9974c0a32a2fcb5_t.jpeg" /> */}
                    <div className="absolute bottom-0">
                        <div className="rounded-b-lg bg-dgray-500 opacity-80 w-[18.75rem] h-14">
                            <div className="flex items-center justify-center pt-3 font-min1">{value.artwork_title}</div>
                        </div>
                    </div>
                </div>
            </>
        );

    if (type === "dimo" && list === "qna")
        return (
            <>
                <>
                    <Link to="/dimo/qnadetail/">
                        <div className="w-[32.5rem] h-[18.75rem] rounded-lg">
                            <ColorSlide>
                                <div>
                                    <div className="absolute pl-8 cursor-pointer top-7 hover:scale-110">
                                        <Profile size="6" src={value.account_profile_img} />
                                    </div>
                                    <div className="absolute top-7 left-28">
                                        <div className="flex flex-row gap-1">
                                            <Label className="">{value.hash_tag[0].tag}</Label>
                                            {value.hash_tag[1] ? (
                                                <Label className="">{value.hash_tag[1].tag}</Label>
                                            ) : (
                                                ""
                                            )}
                                        </div>
                                        <Title size="6">{value.title}</Title>
                                    </div>
                                </div>
                                <div className="absolute px-10 top-28">
                                    <Text size="2" className="flex flex-wrap w-80 h-24 overflow-hidden text-ellipsis">
                                        {value.content}
                                    </Text>
                                    <Text size="2">(더보기)</Text>
                                </div>
                                <IconBox>
                                    <div className="flex flex-row justify-end">
                                        {/* 여기가 디테일링크 */}

                                        <div className="flex flex-row gap-5">
                                            <IconBtn name="Talk" iconSize="20" count={value.comment_count} />
                                            <IconBtn name="HeartE" iconSize="20" count={value.like_count} />
                                        </div>
                                    </div>
                                </IconBox>
                            </ColorSlide>
                        </div>
                    </Link>
                </>
            </>
        );
    if (type === "dimo" && list === "info")
        return (
            <>
                <>
                    <Link to="/dimo/shareddetail">
                        <div className="w-[32.5rem] h-[18.75rem] rounded-lg">
                            <ColorSlide>
                                <div>
                                    <div className="absolute pl-8 cursor-pointer top-7 hover:scale-110">
                                        <Profile size="6" src={value.account_profile_img} />
                                    </div>
                                    <div className="absolute top-7 left-28">
                                        <div className="flex flex-row gap-1">
                                            <Label className="">{value.hash_tag[0].tag}</Label>
                                            {value.hash_tag[1] ? (
                                                <Label className="">{value.hash_tag[1].tag}</Label>
                                            ) : (
                                                ""
                                            )}
                                        </div>
                                        <Title size="6">{value.title}</Title>
                                    </div>
                                </div>
                                <div className="absolute px-10 top-28">
                                    <Text size="2" className="flex flex-wrap w-full h-24 overflow-hidden text-ellipsis">
                                        {value.content}
                                    </Text>
                                    <Text size="2">(더보기)</Text>
                                </div>
                                <IconBox>
                                    <div className="flex flex-row justify-end">
                                        {/* 여기가 디테일링크 */}

                                        <div className="flex flex-row gap-5">
                                            <IconBtn name="Talk" iconSize="20" count={value.comment_count} />
                                            <IconBtn name="HeartE" iconSize="20" count={value.like_count} />
                                        </div>
                                    </div>
                                </IconBox>
                            </ColorSlide>
                        </div>
                    </Link>
                </>
            </>
        );
};

export default Slides;
