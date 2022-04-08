import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Button, EditMyArtWork, Title } from "../../../elements";

import { useHistory } from "react-router-dom";
import tw from "tailwind-styled-components";

const Line = tw.hr`
border border-gray-600 my-6 w-5/6 mx-auto
`;

const MyPortfolio = (props) => {
    const feed = useSelector((state) => state.myPage.careerFeed);
    // console.log('feed: ', feed);
    // const [feeds, setFeeds] = useState([]);

    // useEffect(() => {
    //     feed.forEach((el) => feeds.push(el));
    // }, [feed])
    return (
        <>
            <div className="flex flex-row flex-wrap items-center justify-start w-5/6 mx-auto">
                <Title size="3" className="mt-32">
                    PORTFOLIO
                </Title>
            </div>
            <Line />
            <div className="flex flex-row flex-wrap items-center justify-center gap-10">
                {!feed && (
                    <>
                        <Title size="5">작품을 업로드하고, 대표작품을 설정해 나만의 포트폴리오를 만들어보세요!</Title>
                    </>
                )}
                {feed &&
                    feed.map((value) => {
                        return (
                            <EditMyArtWork
                                src={value.img}
                                artwork_id={value.artwork_id}
                                size="1"
                                key={value.artwork_id}
                                isMaster={value.is_master}
                            />
                        );
                    })}
            </div>
        </>
    );
};

export default MyPortfolio;
