import React, { useRef } from "react";
import Slider from "react-slick";
import tw from "tailwind-styled-components";
import MainSlide from "./MainSlide";
import { Image, Text } from "../../elements";
import DimoSlide from "../Dimo/DimoSlide"

// 리액트 슬라이더 중에 제일 많이들쓰는거
// 구글링해서 커스텀 css 만들기!
export const Slide = tw(Slider)`
    
    ${(props) => (props.detail ? `bg-transparent mx-auto mt-10 col-start-2 col-end-6 row-start-1 col-
    opacity-90 text-white
    font-sanss2 text-lg w-full` : "")};
    ${(props) => (props.main ? `bg-transparent mx-auto mt-10
    opacity-90 text-white overflow-hidden
    font-sanss2 text-lg w-64 md:w-4/5` : "")};
    ${(props) => (props.artwork ? `bg-transparent mx-auto mt-10
    opacity-90 text-white overflow-hidden
    font-sanss2 text-lg w-64 md:w-4/5` : "")};
`
const SS = tw.div`
    box-border container
`
const PrevBtn = tw.button`
  text-white opacity-75 mx-auto hidden
`

const NextBtn = tw.button`
text-white opacity-75 mx-auto hidden
`

const MainSlider = (props)=>{
    const slider = React.useRef(null);
    const { main, detail, dimo } = props;

    const settings = {
        dots: false,  // 슬라이드 밑에 점 보이게
        infinite: true,  // 무한으로 반복
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,  // 넘어가는 속도
        slidesToShow: 3,  // 4장씩 보이게
        slidesToScroll: 1,  // 1장씩 뒤로 넘어가게
        centerMode: true,
        centerPadding: '0px',
        arrows: false,
         
         // 0px 하면 슬라이드 끝쪽 이미지가 안잘림
         responsive: [ // 반응형 웹 구현 옵션
         {
             breakpoint: 1550, // 화면 사이즈 1200px
             settings: {
               slidesToShow: 4,
             },
         },
         {
           breakpoint: 1500,
           settings: {
             slidesToShow: 2
           },
         },
         {
           breakpoint: 1023,
           settings: {
             slidesToShow: 1
           },
         }
       ]
     }

    
    if(main) return (
      <>
       <PrevBtn onClick={() => slider?.current?.slickPrev()}>◀</PrevBtn>
    	<Slide {...settings} ref={slider}>
         
                <SS> 
                    <MainSlide />
                </SS>
                <SS>
                    <MainSlide />
                </SS>
                <SS>
                    <MainSlide />
                </SS>
                <SS>
                    <MainSlide />
                </SS>
                <SS>
                    <MainSlide />
                </SS>
               
            </Slide>
            <NextBtn onClick={() => slider?.current?.slickNext()}>▶</NextBtn>  
            </>
            
    );

    if(detail) return (
      <>
       <PrevBtn onClick={() => slider?.current?.slickPrev()}>◀</PrevBtn>
    	<Slide {...settings} ref={slider}>
         
                <SS> 
                    <MainSlide />
                </SS>
                <SS>
                    <MainSlide />
                </SS>
                <SS>
                    <MainSlide />
                </SS>
                <SS>
                    <MainSlide />
                </SS>
                <SS>
                    <MainSlide />
                </SS>
               
            </Slide>
            <NextBtn onClick={() => slider?.current?.slickNext()}>▶</NextBtn>  
            </>
            
    );
    if(dimo) return (
      <>
       <PrevBtn onClick={() => slider?.current?.slickPrev()}>◀</PrevBtn>
    	<Slide {...settings} ref={slider}>
         
                <SS> 
                <DimoSlide />
                </SS>
                <SS>
                <DimoSlide />
                </SS>
                <SS>
                <DimoSlide />
                </SS>
                <SS>
                <DimoSlide />
                </SS>
                <SS>
                <DimoSlide />
                </SS>
               
            </Slide>
            <NextBtn onClick={() => slider?.current?.slickNext()}>▶</NextBtn> 
            </>
      );
}

MainSlider.defaultProps = {
  main: false,
  artwork: true,
  dimo: false,
};

export default MainSlider;