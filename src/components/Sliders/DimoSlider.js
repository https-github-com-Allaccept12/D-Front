import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import tw from "tailwind-styled-components";
import Slides from "./Slides";
import { Image, Text, Icon } from "../../elements";
import { useSelector, useDispatch } from "react-redux";
import { Link, Route, Switch, useLocation } from "react-router-dom";
import { dimoPageLoad, categoryDimo } from "../../redux/modules/dimo";
export const Slide = tw(Slider)`
w-full md:w-[32.5rem] lg:w-[70rem] 2xl:w-[96rem]
    mx-auto text-white pl-10 lg:ml-40 xl:ml-20
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

const slidedlider = (props) => {
    const { list, slidedimo } = props;
    const slider = React.useRef(null);
    const location = useLocation();
    const a = location.pathname;
    const b = a.split("/")[2];
    let board = b.toUpperCase();
    // console.log(board);

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
        let board = b.toUpperCase();
        dispatch(dimoPageLoad({ dispatch, board, visitor_account_id }));
    }, [dispatch]);

    let slided = useSelector((state) => state.dimo.dimos.postRecommendationFeed);

    const [time, setTime] = useState(true);

    // useEffect(() => {
    //     const aaa = setTimeout(() => {
    //         setTime();
    //     }, 100);
    // }, []);
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
                    slidesToShow: 2,
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

    if (list === "QNA")
        return (
            <>
                <div className="flex-row hidden md:flex">
                    <PrevBtn onClick={() => slider?.current.slickPrev()}>
                        <Icon name="ArrowL" iconSize="48" />
                    </PrevBtn>
                    <Slide {...settings} ref={slider}>
                        {slided.map((value) => {
                            // console.log(value);
                            return (
                                // <Images src={value.img_url} />
                                <SS>
                                    <Slides type="dimo" value={value} list="QNA" post_id={value.post_id} />
                                </SS>
                            );
                        })}
                    </Slide>
                    <NextBtn onClick={() => slider?.current.slickNext()}>
                        <Icon name="ArrowR" iconSize="48" />
                    </NextBtn>
                </div>
            </>
        );
    else
        return (
            <>
                <div className="flex-row hidden md:flex">
                    <PrevBtn onClick={() => slider?.current.slickPrev()}>
                        <Icon name="ArrowL" iconSize="48" />
                    </PrevBtn>
                    <Slide {...settings} ref={slider}>
                        {slided.map((value) => {
                            return (
                                // <Images src={value.img_url} />
                                <SS key={value.post_id}>
                                    <Slides type="dimo" value={value} list="INFO" post_id={value.post_id} />
                                </SS>
                            );
                        })}
                    </Slide>
                    <NextBtn onClick={() => slider?.current.slickNext()}>
                        <Icon name="ArrowR" iconSize="48" />
                    </NextBtn>
                </div>
            </>
        );
};

export default slidedlider;
