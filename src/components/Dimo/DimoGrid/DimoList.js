import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, SearchInput, Title } from "../../../elements";

import tw from "tailwind-styled-components";
import { useHistory, useLocation } from "react-router-dom";
import DimoInsideFilter from "./DimoInsideFilter";
import DimoPost from "./DimoPost";
const Grid = tw.div` 
flex flex-row flex-wrap items-center justify-center
xl:justify-start lg:gap-2 px-0 sm:px-0 lg:px-4 xl:px-8 2xl:px-10
gap-y-4
`;

const Box = tw.div`
flex flex-col lg:gap-3 py-6 rounded-xl mt-2 
`;

const InnerBox = tw.div`
bg-white flex flex-col py-6 xl:px-2 rounded-xl w-full xl:max-w-[95%] 2xl:max-w-[90%]

`;

const Line = tw.hr`
w-[95%] border mx-auto border-gray-300 my-6
`;

const DimoList = (props) => {
    const { list } = props;
    const dimos = useSelector((state) => state.dimo.categoryDimos);
    console.log('dimos: ', dimos);

    // console.log(dimos);
    return (
        <>
            <Box>
                <InnerBox>
                    <DimoInsideFilter />
                    <Line />
                    <Grid>
                        {dimos?.postMainPage
                            ? dimos.postMainPage.map((value) => {
                                  return (
                                      <div key={value.post_id}>
                                          <DimoPost
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
                                              list={list}
                                              size="3"
                                          />
                                      </div>
                                  );
                              })
                            : ""}

                        {dimos?.postSearchPageMain &&
                            dimos.postSearchPageMain.map((value) => {
                                return (
                                    <div key={value.post_id}>
                                        <DimoPost
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
                                            list={list}
                                            size="3"
                                        />
                                    </div>
                                );
                            })}
                    </Grid>
                </InnerBox>
            </Box>
        </>
    );
};

export default DimoList;
