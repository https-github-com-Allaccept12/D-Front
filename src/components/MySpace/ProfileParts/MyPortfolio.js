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
    console.log('feed: ', feed);
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
                {feed && feed.map((value) => {
                    return (
                    <EditMyArtWork
                        src={value.img}
                        artwork_id={value.artwork_id}
                        size="1"
                        key={value.artwork_id}
                        isMaster={value.is_master}
                    />
                    )
                })}
                {/* <EditMyArtWork
                    src="https://ohfun.net/contents/article/images/2016/0526/1464221994635450.jpg"
                    size="1"
                />
                <EditMyArtWork
                    src="https://ohfun.net/contents/article/images/2016/0526/1464221994635450.jpg"
                    size="1"
                />
                <EditMyArtWork
                    src="https://ohfun.net/contents/article/images/2016/0526/1464221994635450.jpg"
                    size="1"
                />
                <EditMyArtWork
                    src="https://ohfun.net/contents/article/images/2016/0526/1464221994635450.jpg"
                    size="1"
                /> */}
            </div>
        </>
    );
};

export default MyPortfolio;
