import React from "react";
import { useSelector } from "react-redux";
import { Button, SearchInput, Title } from "../../elements";
import ArtPost from "./ArtPost";
import tw from "tailwind-styled-components";
import { useHistory, useLocation, Link } from "react-router-dom";
import ArtWorkInsideFilter from "./ArtWorkInsideFilter";

const Grid = tw.div` 
flex flex-row flex-wrap items-center justify-center 
xl:justify-start gap-6 sm:px-3 md:px-4 xl:px-8 2xl:px-20

`;

const Box = tw.div`
flex flex-col gap-6 py-6 rounded-xl mt-2
`;

const InnerBox = tw.div`
bg-white flex flex-col gap-3 py-6 xl:px-4 rounded-xl w-full xl:max-w-[95%] 2xl:max-w-[90%]
`;

const Line = tw.hr`
w-[95%] border mx-auto border-gray-300 my-6
`;

// const p = [
//     { id: "11" },
//     { id: "21" },
//     { id: "31" },
//     { id: "41" },
//     { id: "51" },
//     { id: "61" },
//     { id: "71" },
//     { id: "81" },
//     { id: "91" },
//     { id: "101" },
// ];

const ArtWorkList = (props) => {
    const artworks = useSelector((state) => state.artwork.artworks);
    console.log(artworks);
    return (
        <>
            <Box>
                <InnerBox>
                    <ArtWorkInsideFilter />
                    <Line />
                    <Grid>
                        {artworks &&
                            artworks.map((value) => {
                                return (
                                    <div>
                                        <ArtPost
                                            account_id={value.account_id}
                                            artwork_id={value.artwork_id}
                                            profile={value.account_profile}
                                            nickname={value.account_nickname}
                                            thumbnail={value.img}
                                            like_count={value.like_count}
                                            is_like={value.is_like}
                                            is_bookmark={value.is_bookmark}
                                            size="3"
                                        />
                                    </div>
                                );
                            })}
                        {/* {p.map((n) => {
                            return (
                                <>
                                    <ArtPost key={n.id.toString()} size="3" />
                                </>
                            );
                        })} */}
                    </Grid>
                </InnerBox>
            </Box>
        </>
    );
};

export default ArtWorkList;
