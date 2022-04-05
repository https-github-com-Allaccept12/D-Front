import React from "react";
import { Button, Label, Profile, Title, Text, IconBtn } from "../../../../elements";

import { useHistory, Link, useLocation } from "react-router-dom";
import tw from "tailwind-styled-components";

const InnerLine = tw.hr`
border border-dgray-300 w-full col-span-full mt-10 mb-5
`;

const IconBox = tw.div`
absolute bottom-4 pr-16 md:pr-24 xl:pr-12 xl:pb-5 w-[21rem] md:w-[31.4375rem] xl:w-[62.875rem] 
`;

const Grid = tw.div`
mx-auto 2xl:mx-0 cursor-pointer hover:scale-105
`;

const DimoQNACard = (props) => {
    const { data, profile } = props;
    const location = useLocation();
    const a = location.pathname;
    const b = a.split("/")[1];
    const { size } = props;
    const history = useHistory();

    const goToDetail = () => {
        history.push(`/dimo/qnadetail/${data.post_id}`);
    }

    return (
        <>
            <Grid onClick={goToDetail}>
                <div className="w-[20rem] h-[20rem] md:w-[28.4375rem] md:h-[18.125rem] xl:w-[62.875rem] xl:h-[30.25rem] rounded-lg ">
                    <div className="absolute w-[20rem] h-[20rem]   md:w-[28.4375rem] md:h-[18.125rem] xl:w-[62.875rem] xl:h-[30.25rem] bg-white rounded-lg border border-dgray-200 hover:shadow-xl">
                        <div>
                            <div className="absolute pl-8 cursor-pointer top-7 hover:scale-110">
                                <Profile
                                    size="6"
                                    src={profile}
                                    main
                                />
                            </div>
                            <div className="absolute top-7 left-28">
                                {/* <div className="flex flex-row gap-1">
                                    <Label size="1" color="4">
                                        취준생
                                    </Label>
                                    <Label size="1" color="5">
                                        진로고민
                                    </Label>
                                </div> */}
                                <Title size="6">{data && data.title}</Title>
                            </div>
                        </div>
                        <div className="absolute px-10 top-28">
                            <Text size="2" className="flex flex-wrap w-full h-24 overflow-hidden text-ellipsis">
                                {data && data.content}
                            </Text>{" "}
                            <Text size="2">(더보기)</Text>
                        </div>
                        <IconBox>
                            <div className="flex flex-row items-end justify-end">
                                <div className="flex flex-row gap-5 text-dgray-400">
                                    <IconBtn name="Talk" iconSize="20" count={data && data.answer_count} />
                                    <IconBtn name="HeartE" iconSize="20" count={data && data.like_count} />
                                </div>
                            </div>
                        </IconBox>
                    </div>
                </div>

                <InnerLine />
            </Grid>
        </>
    );
};

DimoQNACard.defaultProps = {
    size: "2",
};

export default DimoQNACard;
