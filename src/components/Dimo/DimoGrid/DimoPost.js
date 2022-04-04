import React, { useEffect } from "react";
import { HeartButton, Text, Icon, Title, Profile, Label, IconBtn } from "../../../elements";
import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { dimoQnaDetailLoad, dimoQnaDetailSimilar, dimoInfoDetailLoad } from "../../../redux/modules/dimo";
import tw from "tailwind-styled-components";

const Art = tw.div`
flex justify-center items-center flex-col shrink-0
`;

const Box = tw.div`
flex flex-row items-center justify-between w-full lg:px-2 mt-1 mx-auto
 
`;

const Grid = tw.div`
w-[23.238rem] h-[16rem] border border-dgray-200 rounded-lg bg-white
shadow-md
`;
const Card = tw.div`
w-[23.238rem] h-[16rem] absolute
`;

const Header = tw.div`
w-[23.238rem] h-[6.5rem]
`;

const LabelBox = tw.div`
absolute top-9 left-[7rem]
`;

const TextBox = tw.div`
 px-5 text-ellipsis w-[22.25rem] h-22 absolute left-4 top-28
`;

const IconBox = tw.div`
absolute bottom-4 pr-7 w-[23.238rem]
`;

const DimoPost = (props) => {
    const {
        account_nickname,
        account_profile_img,
        category,
        comment_count,
        content,
        create_time,
        hash_tag,
        is_selected,
        like_count,
        post_id,
        title,
        list,
    } = props;
    const dispatch = useDispatch();

    const handleClickDimoQna = () => {
        // let owner_account_id = account_id;
        useEffect(() => {
            dispatch(dimoQnaDetailLoad({ post_id, dispatch }));
            dispatch(dimoQnaDetailSimilar({ category, post_id, dispatch }));
        });
    };

    const handleClickDimoInfo = () => {
        dispatch(dimoInfoDetailLoad({ post_id, dispatch }));
    };
    useEffect(() => {
        dispatch(dimoQnaDetailLoad({ post_id, dispatch }));
    }, [dispatch]);

    if (list === "qna")
        return (
            <>
                <Art onClick={handleClickDimoQna}>
                    <Link
                        to={{
                            pathname: `/dimo/qnadetail/${post_id}`,
                            state: {
                                id: { post_id },
                            },
                        }}
                    >
                        <Box>
                            <Grid>
                                <Card>
                                    <Header>
                                        <Profile size="5" src={account_profile_img} className="absolute inset-6" />
                                        <LabelBox>
                                            <div className="flex flex-row gap-1 flex-wrap">
                                                <Label className="" size="1">
                                                    {hash_tag[0]?.tag}
                                                </Label>
                                                {hash_tag[1] ? <Label className="">{hash_tag[1]?.tag}</Label> : ""}
                                            </div>
                                        </LabelBox>

                                        <div className="absolute top-[3.5rem] left-[7rem] w-[13rem] overflow-hidden">
                                            <Title size="5" className="text-left truncate">
                                                {title}
                                            </Title>
                                        </div>
                                    </Header>
                                    <TextBox>
                                        <p className="w-[20.25rem] h-24 text-ellipsis overflow-hidden">{content}</p>
                                    </TextBox>

                                    <IconBox>
                                        <div className="flex flex-row justify-end items-end">
                                            <div className="flex flex-row gap-5 text-dgray-400">
                                                <IconBtn name="Talk" iconSize="20" count={comment_count} />
                                                <IconBtn name="HeartE" iconSize="20" count={like_count} />
                                            </div>
                                        </div>
                                    </IconBox>
                                </Card>
                            </Grid>
                        </Box>
                    </Link>
                </Art>
            </>
        );
    if (list === "info")
        return (
            <>
                <Link
                    to={{
                        pathname: `/dimo/infodetail/${post_id}`,
                        state: {
                            id: { post_id },
                        },
                    }}
                >
                    <Art onClick={handleClickDimoInfo}>
                        <Box>
                            <Grid>
                                <Card>
                                    <Header>
                                        <Profile size="5" src={account_profile_img} className="absolute inset-6" />
                                        <LabelBox>
                                            <div className="flex flex-row gap-1">
                                                <Label className="">{hash_tag[0]?.tag}</Label>
                                                {hash_tag[1] ? <Label className="">{hash_tag[1].tag}</Label> : ""}
                                            </div>
                                        </LabelBox>

                                        <div className="absolute top-[3.5rem] left-[7rem] w-[13rem] overflow-hidden">
                                            <Title size="5" className="text-left truncate">
                                                {title}
                                            </Title>
                                        </div>
                                    </Header>
                                    <TextBox>
                                        <p className="w-[20.25rem] h-24 text-ellipsis overflow-hidden">{content}</p>
                                    </TextBox>

                                    <IconBox>
                                        <div className="flex flex-row justify-end items-end">
                                            <div className="flex flex-row gap-5 text-dgray-400">
                                                <IconBtn name="Talk" iconSize="20" count={comment_count} />
                                                <IconBtn name="HeartE" iconSize="20" count={like_count} />
                                            </div>
                                        </div>
                                    </IconBox>
                                </Card>
                            </Grid>
                        </Box>
                    </Art>
                </Link>
            </>
        );
    else return null;
};

export default DimoPost;
