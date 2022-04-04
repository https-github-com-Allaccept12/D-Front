import React from "react";
import { Button, Label, Title, Text, Input, Profile, Icon } from "../../../elements";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Comment } from "../../Comment";
import DimoPost from "./DimoPost";
import DimoQNAQuestion from "./DimoQNAQuestion";
import DimoQNAAnswer from "./DimoQNAAnswer";
import { detailDimoQna, deleteDimo } from "../../../redux/modules/dimo";
import tw from "tailwind-styled-components";

const Box = tw.div`
w-full 
`;

const Grid = tw.div`
w-full xl:w-5/6  p-3 sm:p-10 ml-auto
`;

const InnerLine = tw.hr`
border border-dgray-300 w-full col-span-full mt-10 mb-5

`;

const DimoQNADetail = ({ history, location, match }) => {
    const dispatch = useDispatch();

    const dimos = useSelector((state) => state.dimo.detaildimoQna);
    const dimoSimilars = useSelector((state) => state.dimo.dimoQnaDetailSimilars);
    const dimosPost = useSelector((state) => state.dimo.detaildimoQna?.postAnswerSubDetail);
    const post_id = match.params.name;

    // let owner_account_id = account_id;

    return (
        <>
            <div className="xl:grid xl:grid-cols-4 bg-dgray-200 h-full">
                <div className="col-start-4 col-span-2 xl:grid grid-rows-6 ">
                    <div className="top-28 h-full invisible fixed 2xl:visible 2xl:absolute">
                        <div className=" flex flex-col">
                            <div className="flex flex-row justify-end items-end self-end">
                                <div className="row-start-1 ">
                                    <Title size="4" className="mt-10 md:mt-28 mb-3 ml-1">
                                        유사한 질문
                                    </Title>
                                    <div className="flex flex-col gap-5 h-fit">
                                        {dimoSimilars &&
                                            dimoSimilars.map((value) => {
                                                return (
                                                    <div key={value.post_id}>
                                                        <DimoPost
                                                            list="qna"
                                                            account_nickname={value.account_nickname}
                                                            account_profile_img={value.account_profile_img}
                                                            category={value.category}
                                                            comment_count={value.comment_count}
                                                            content={value.content}
                                                            create_time={value.create_time}
                                                            hash_tag={value.hash_tag}
                                                            is_selected={value.is_selected}
                                                            like_count={value.like_count}
                                                            post_id={value.post_id}
                                                            title={value.title}
                                                            size="3"
                                                        />
                                                    </div>
                                                );
                                            })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-start-1 col-end-4 row-start-1 col-span-full">
                    <Box>
                        <Grid>
                            <DimoQNAQuestion followed="true" value={dimos} post={dimosPost} />
                            <InnerLine />
                            <div className="flex flex-row justify-start items-center gap-3">
                                <Icon name="Talk" iconSize="36" />
                                <Title size="3">{dimos.answer_count}</Title>
                            </div>
                            {dimos.answer_count > 0
                                ? dimos.answers.map((value) => {
                                      return (
                                          <div key={value.answer_id}>
                                              <DimoQNAAnswer
                                                  selected={value.is_selected}
                                                  account_id={value.account_id}
                                                  account_nickname={value.account_nickname}
                                                  account_profile_img={value.account_profile_img}
                                                  answer_id={value.answer_id}
                                                  content={value.content}
                                                  is_follow={value.is_follow}
                                                  is_like={value.is_like}
                                                  is_selected={value.is_selected}
                                                  like_count={value.like_count}
                                                  modify_time={value.modify_time}
                                              />
                                          </div>
                                      );
                                  })
                                : ""}
                        </Grid>
                    </Box>
                </div>
            </div>
        </>
    );
};

export default DimoQNADetail;
