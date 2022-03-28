import React, { useRef } from "react";
import Slider from "react-slick";
import tw from "tailwind-styled-components";
import Slides from "./Slides";
import { Image, Text, Icon } from "../../elements";

export const Slide = tw(Slider)`
w-full md:w-[32.5rem] lg:w-[40rem] xl:w-[70rem] 2xl:w-[99rem]
    mx-auto text-white pl-5
    overflow-hidden text-lg
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
    const { list } = props;

    const settings = {
        dots: false, // 슬라이드 밑에 점 보이게
        infinite: true, // 무한으로 반복
        speed: 500,
        autoplay: true,
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
                breakpoint: 1550,
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

    return (
        <>
            <div className="flex-row hidden md:flex">
                <PrevBtn onClick={() => slider?.current?.slickPrev()}>
                    <Icon name="ArrowL" iconSize="48" />{" "}
                </PrevBtn>
                <Slide {...settings} ref={slider}>
                    <SS>
                        <Slides type="dimo" list={list} />
                    </SS>
                    <SS>
                        <Slides type="dimo" list={list} />
                    </SS>
                    <SS>
                        <Slides type="dimo" list={list} />
                    </SS>
                    <SS>
                        <Slides type="dimo" list={list} />
                    </SS>
                    <SS>
                        <Slides type="dimo" list={list} />
                    </SS>
                </Slide>
                <NextBtn onClick={() => slider?.current?.slickNext()}>
                    <Icon name="ArrowR" iconSize="48" />
                </NextBtn>
            </div>
        </>
    );
};

export default DimoSlider;
