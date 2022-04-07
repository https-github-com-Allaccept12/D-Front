import React from "react";
import { useDispatch } from "react-redux";
import { requestFollow, requestUnFollow } from "../../redux/modules/user";
import { Label, Title, HeartButton, Text, Card, Profile, Button, Thumbnail, IconBtn } from "../../elements";
import tw from "tailwind-styled-components";
import { useToggle } from "../../hooks";
import { useNavigate, Link } from "react-router-dom";
import { DimoWorkPost } from "../Dimo";
const IconBox = tw.div`
absolute bottom-6 px-9 w-full
`;

const ColorSlide = tw.div`
absolute w-[28.9rem] h-[18.75rem]  rounded-lg bg-dpurple-200 cursor-pointer

`;

const Slides = (props) => {
    const navigate = useNavigate();
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

    const [is_fow, setIsfow] = useToggle(follow);

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
        // console.log('account_id:', account_id, 'now:', follow);
        setIsfow(!is_fow);
        if (follow) {
            dispatch(requestUnFollow(account_id));
        } else {
            dispatch(requestFollow(account_id));
        }
    };


    const goToProfile = () => {
        navigate(`/myspace/myprofile/${id}`);
    };

    const goToDimoQNA = () => {
        navigate(`/dimo/qnadetail/${post_id}`, {
            state: {
                post_id: post_id,
                board: "QNA",
            },
        });
    };

    const goToDimoINFO = () => {
        navigate(`/dimo/infodetail/${post_id}`, {
            state: {
                post_id: post_id,
                board: "INFO",
            },
        });
    };

    const clickSlides = () => {
        navigate(`/detailart/${value.artwork_id}`);
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
                            <Title size="5" className="text-gray-700 truncate">
                                {props.nickname} 님
                            </Title>
                            <div className="-mt-1">
                                <Text size="5">{job} </Text>
                            </div>
                        </div>
                        <div className="flex justify-center mt-5">
                            {!is_fow === true ? (
                                <Button size="3" color="1" onClick={makeFollow}>
                                    팔로우 🎉
                                </Button>
                            ) : (
                                <Button size="3" color="4" onClick={makeFollow}>
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
                <div onClick={clickSlides} className="flex items-center justify-center rounded-lg">
                    <button data-bs-dismiss="modal">
                        <Thumbnail size="7" src={value.img} />
                    </button>
                    <div className="absolute bottom-0">
                        <div className="rounded-b-lg bg-dgray-500 opacity-80 w-[18.75rem] h-14">
                            <div className="flex items-center justify-center pt-3 font-min1">{value.artwork_title}</div>
                        </div>
                    </div>
                </div>
            </>
        );

    if (type === "dimo" && list === "QNA")
        return (
            <>
                <>
                    <div className="w-[28.9rem] h-[18.75rem] rounded-lg" onClick={goToDimoQNA}>
                        <ColorSlide>
                            <div>
                                <div className="absolute pl-8 cursor-pointer top-7 hover:scale-110">
                                    <Profile size="6" src={value.account_profile_img} />
                                </div>
                                <div className="absolute top-7 left-28">
                                    <div className="flex flex-row gap-1 ">
                                        {value ? (
                                            <>
                                                <Label co="slide">{value.hash_tag[0]?.tag}</Label>

                                                {value?.hash_tag[1] && (
                                                    <Label co="slide">{value.hash_tag[1]?.tag}</Label>
                                                )}
                                            </>
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                    <Title size="6" className="truncate w-72">
                                        {value.title}
                                    </Title>
                                </div>
                            </div>
                            <div className="absolute px-10 top-28">
                                <Text size="2" className="flex flex-wrap w-full h-24 overflow-hidden text-ellipsis">
                                    {value.content}
                                </Text>
                                {/* <Text size="2">(더보기)</Text> */}
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
                </>
            </>
        );
    if (type === "dimo" && list === "INFO")
        return (
            <>
                <>
                    <div className="w-[28.9rem] h-[18.75rem] rounded-lg" onClick={goToDimoINFO}>
                        <ColorSlide>
                            <div>
                                <div className="absolute pl-8 cursor-pointer top-7 hover:scale-110">
                                    <Profile size="6" src={value.account_profile_img} />
                                </div>
                                <div className="absolute top-7 left-28">
                                    <div className="flex flex-row gap-1 ">
                                        {value ? (
                                            <>
                                                <Label co="slide">{value.hash_tag[0]?.tag}</Label>

                                                {value?.hash_tag[1] && (
                                                    <Label co="slide">{value.hash_tag[1]?.tag}</Label>
                                                )}
                                            </>
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                    <Title size="6" className="truncate w-72">
                                        {value.title}
                                    </Title>
                                </div>
                            </div>
                            <div className="absolute px-10 top-28">
                                <Text size="2" className="flex flex-wrap w-full h-24 overflow-hidden text-ellipsis">
                                    {value.content}
                                </Text>
                                {/* <Text size="2">(더보기)</Text> */}
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
                </>
            </>
        );
    else return null;
};

export default Slides;
