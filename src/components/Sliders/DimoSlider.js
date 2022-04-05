import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import tw from "tailwind-styled-components";
import Slides from "./Slides";
import { Image, Text, Icon } from "../../elements";
import { useSelector, useDispatch } from "react-redux";
import { Link, Route, Switch, useLocation } from "react-router-dom";
import { dimoPageLoad, categoryDimo } from "../../redux/modules/dimo";
export const Slide = tw(Slider)`
w-full md:w-[32.5rem] lg:w-[66rem] 2xl:w-[106rem]
    mx-auto text-white pl-5 lg:ml-40 xl:ml-5
    overflow-hidden text-lg flex
`;

const SS = tw.div`
    
`;

const PrevBtn = tw.button`
z-10 text-white ml-10
`;

const NextBtn = tw.button`
z-10 text-white mr-10
`;

const DimoSlider = (props) => {
    const slider = React.useRef(null);
    const location = useLocation();
    const a = location.pathname;
    const b = a.split("/")[2];
    let board = b.toUpperCase();

    const dispatch = useDispatch();
    let account_id = 0;
    // const id_cookie = getCookie("account_id");
    const id_cookie = sessionStorage.getItem("account_id");
    if (id_cookie) {
        account_id = id_cookie;
        // console.log("account_id: ", account_id);
    }
    const visitor_account_id = account_id;
    useEffect(() => {
        if (board === "INFO") {
            dispatch(dimoPageLoad({ dispatch, board, visitor_account_id }));
        }
        board = "QNA";
        dispatch(dimoPageLoad({ dispatch, board, visitor_account_id }));
    }, [board, dispatch]);

    const dimos = useSelector((state) => state.dimo.dimos?.postRecommendationFeed);
    console.log(dimos);
    const { list } = props;

    const settings = {
        dots: false, // 슬라이드 밑에 점 보이게
        infinite: true, // 무한으로 반복
        speed: 500,
        autoplay: false,
        autoplaySpeed: 2000, // 넘어가는 속도
        slidesToShow: 3, // 4장씩 보이게
        slidesToScroll: 1, // 1장씩 뒤로 넘어가게
        centerMode: true,
        centerPadding: "0px",
        arrows: false,

        // 0px 하면 슬라이드 끝쪽 이미지가 안잘림
        responsive: [
            // 반응형 웹 구현 옵션

            {
                breakpoint: 1700,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    if (list === "qna")
        return (
            <>
                <div className="flex-row hidden md:flex">
                    <PrevBtn onClick={() => slider.current.slickPrev()}>
                        <Icon name="ArrowL" iconSize="48" />
                    </PrevBtn>
                    <Slide {...settings} ref={slider}>
                        {dimos &&
                            dimos.map((value) => {
                                return (
                                    <SS key={value?.post_id}>
                                        <Slides type="dimo" list={list} value={value} post_id={value?.post_id} />
                                    </SS>
                                );
                            })}
                    </Slide>
                    <NextBtn onClick={() => slider.current.slickNext()}>
                        <Icon name="ArrowR" iconSize="48" />
                    </NextBtn>
                </div>
            </>
        );
    else if (list === "info")
        return (
            <>
                <div className="flex-row hidden md:flex">
                    <PrevBtn onClick={() => slider.current.slickPrev()}>
                        <Icon name="ArrowL" iconSize="48" />
                    </PrevBtn>
                    <Slide {...settings} ref={slider}>
                        {dimos &&
                            dimos.map((value) => {
                                return (
                                    // <Images src={value.img_url} />
                                    <SS key={value?.post_id}>
                                        <Slides type="dimo" list={list} value={value} post_id={value?.post_id} />
                                    </SS>
                                );
                            })}
                    </Slide>
                    <NextBtn onClick={() => slider.current.slickNext()}>
                        <Icon name="ArrowR" iconSize="48" />
                    </NextBtn>
                </div>
            </>
        );
};

export default DimoSlider;
