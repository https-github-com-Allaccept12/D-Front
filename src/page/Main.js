import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Title, Text, Subtitle, PageLoadSpinner } from "../elements";
import { MainSlider } from "../components";
import { ArtWorkHotList, ArtWorkPost } from "../components/ArtWorks";
import { mainPageLoad } from "../redux/modules/mainPageLoad";
import { setCookie, getCookie } from "../shared/cookie";

const Main = (props) => {
    const dispatch = useDispatch();
    if (sessionStorage.getItem("access_token")) {
        setCookie("access_token", sessionStorage.getItem("access_token"), 7);
        setCookie("refresh_token", sessionStorage.getItem("refresh_token"), 7);
        setCookie("account_id", sessionStorage.getItem("account_id"), 7);
        setCookie("profile_img", sessionStorage.getItem("profile_img"), 7);
    }
    useEffect(() => {
        let account_id = 0;
        let id_cookie = getCookie("account_id");
        if (id_cookie) {
            account_id = id_cookie;
            sessionStorage.setItem("access_token", getCookie("access_token"));
            sessionStorage.setItem("account_id", getCookie("account_id"));
        }
        // console.log(account_id);
        const visitor_account_id = account_id;
        dispatch(mainPageLoad({ visitor_account_id, dispatch }));
    }, []);

    const [time, setTime] = useState(true);

    useEffect(() => {
        const aaa = setTimeout(() => {
            setTime();
        }, 500);
    }, []);

    return (
        <>
            {time === true ? (
                <PageLoadSpinner />
            ) : (
                <>
                    <div className="w-full">
                        <div className="invisible text-white lg:visible lg:absolute inset-44 h-1/3 ">
                            <Title size="2">Hot 디자이너</Title>
                            <div className="mt-4 ml-1">
                                <Subtitle size="1">
                                    현재 가장 핫한
                                    <br />
                                    디자이너님들을 소개합니다
                                </Subtitle>
                            </div>
                        </div>

                        <div className="fixed invisible lg:visible lg:absolute top-36 right-28">
                            <MainSlider />
                        </div>
                    </div>

                    <div className="-mt-32 lg:mt-24 mx-auto w-full xl:max-w-[1620px]">
                        <Title
                            size="2"
                            className="flex items-end justify-center col-start-2 row-start-1 my-3 ml-0 text-gray-700 xl:justify-start md:ml-10 lg:ml-0"
                        >
                            추천 아트워크
                        </Title>
                        <div className="flex flex-wrap items-center justify-center gap-3 pb-20 lg:gap-4 2xl:gap-[30px] xl:justify-start">
                            <ArtWorkHotList />
                        </div>
                    </div>
                </>
            )}
        </>
    );
};
export default Main;
