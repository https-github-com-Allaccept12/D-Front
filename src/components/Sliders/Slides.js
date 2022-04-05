import React from "react";
import { useDispatch } from "react-redux";
import { requestFollow } from "../../redux/modules/user";
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
    const history = useHistory();
    const dispatch = useDispatch();
    const {
        type,
        list,
        value,
        id,
        nickname,
        post_id,
        follow,
        account_id,
        account_nickname,
        account_profile_img,
        category,
        comment_count,
        content,
        create_time,
        hash_tag1,
        hash_tag2,
        is_selected,
        like_count,
        title,
    } = props;
    let { job } = props;
    if (job === "uiux") {
        job = "UI / UX";
    } else if (job === "fashion") {
        job = "패션";
    } else if (job === "typo") {
        job = "타이포그래피";
    } else if (job === "craft") {
        job = "공예";
    } else if (job === "package") {
        job = "패키지";
    } else if (job === "graphic") {
        job = "그래픽";
    } else if (job === "video") {
        job = "영상 / 모션";
    } else if (job === "product") {
        job = "제품";
    } else if (job === "game") {
        job = "게임 / 캐릭터";
    } else if (job === "edit") {
        job = "브랜딩 / 편집";
    } else if (job === "eco") {
        job = "건축 / 인테리어 / 환경";
    }

    const makeFollow = () => {
        const account_id = { account_id: id };
        dispatch(requestFollow(account_id));
    };

    const goToProfile = () => {
        history.push(`/myspace/myprofile/${nickname}/${id}`);
    };

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
        w-[18.75rem] h-[21rem] rounded-lg"
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
                            {/* <Link to='/myspace/myprofile?id='> */}
                            <Profile size="3" src={props.image} onClick={goToProfile} />
                            {/* </Link> */}
                        </div>
                        <div className="pt-6 pl-40">
                            <Title size="5" className="truncate">
                                {props.nickname} 님
                            </Title>
                            <div className="-mt-1">
                                <Text size="5">{job} </Text>
                            </div>
                        </div>
                        <div className="flex justify-center mt-5">
                            {!follow ? (
                                <Button size="3" color="1" onClick={makeFollow}>
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
                    <Link
                        to={{
                            pathname: `/dimo/qnadetail/${post_id}`,
                            state: {
                                id: { post_id },
                            },
                        }}
                    >
                        <div className="w-[32.5rem] h-[18.75rem] rounded-lg">
                            <ColorSlide>
                                <div>
                                    <div className="absolute pl-8 cursor-pointer top-7 hover:scale-110">
                                        <Profile size="6" src={account_profile_img} />
                                    </div>
                                    <div className="absolute top-7 left-28">
                                        <div className="flex flex-row gap-1">
                                            <Label className="">{hash_tag1}</Label>
                                            {hash_tag1 ? <Label className="">{hash_tag2}</Label> : ""}
                                        </div>
                                        <Title size="6">{title}</Title>
                                    </div>
                                </div>
                                <div className="absolute px-10 top-28">
                                    <Text size="2" className="flex flex-wrap h-24 overflow-hidden w-80 text-ellipsis">
                                        {content}
                                    </Text>
                                    <Text size="2">(더보기)</Text>
                                </div>
                                <IconBox>
                                    <div className="flex flex-row justify-end">
                                        {/* 여기가 디테일링크 */}

                                        <div className="flex flex-row gap-5">
                                            <IconBtn name="Talk" iconSize="20" count={comment_count} />
                                            <IconBtn name="HeartE" iconSize="20" count={like_count} />
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
                    <Link
                        to={{
                            pathname: `/dimo/infodetail/${post_id}`,
                            state: {
                                id: { post_id },
                            },
                        }}
                    >
                        <div className="w-[32.5rem] h-[18.75rem] rounded-lg">
                            <ColorSlide>
                                <div>
                                    <div className="absolute pl-8 cursor-pointer top-7 hover:scale-110">
                                        <Profile size="6" src={account_profile_img} />
                                    </div>
                                    <div className="absolute top-7 left-28">
                                        <div className="flex flex-row gap-1">
                                            <Label className="">{hash_tag1}</Label>
                                            {hash_tag1 ? <Label className="">{hash_tag2}</Label> : ""}
                                        </div>
                                        <Title size="6">{title}</Title>
                                    </div>
                                </div>
                                <div className="absolute px-10 top-28">
                                    <Text size="2" className="flex flex-wrap w-full h-24 overflow-hidden text-ellipsis">
                                        {content}
                                    </Text>
                                    <Text size="2">(더보기)</Text>
                                </div>
                                <IconBox>
                                    <div className="flex flex-row justify-end">
                                        {/* 여기가 디테일링크 */}

                                        <div className="flex flex-row gap-5">
                                            <IconBtn name="Talk" iconSize="20" count={comment_count} />
                                            <IconBtn name="HeartE" iconSize="20" count={like_count} />
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
