import React, { useRef } from "react";
import Slider from "react-slick";
import tw from "tailwind-styled-components";
import Slides from "./Slides";
import { Image, Text, Icon } from "../../elements";


// 리액트 슬라이더 중에 제일 많이들쓰는거
// 구글링해서 커스텀 css 만들기!
export const Slide = tw(Slider)`
    w-[61.5rem]
    ${(props) => (props.artwork ? `bg-transparent
    opacity-90 text-white overflow-hidden text-lg` : "")};
`


const SS = tw.div`
    
`


const PrevBtnDetail = tw.button`
  z-10 text-dgray-600
`

const NextBtnDetail = tw.button`
  z-10 text-dgray-600
`

const MainSlider = (props)=>{
    const slider = React.useRef(null);
    const { main, artwork, dimo } = props;

     const DetailSettings = {
      dots: false,  // 슬라이드 밑에 점 보이게
      infinite: true,  // 무한으로 반복
      speed: 500,  // 넘어가는 속도
      slidesToShow: 3,  // 4장씩 보이게
      slidesToScroll: 1,  // 1장씩 뒤로 넘어가게
      centerMode: false,
      centerPadding: '0px',
      arrows: false,
       
       // 0px 하면 슬라이드 끝쪽 이미지가 안잘림
       responsive: [ // 반응형 웹 구현 옵션

       {
         breakpoint: 1023,
         settings: {
           slidesToShow: 1
         },
       }
     ]
   }

   
    if(artwork) return (
      <>
           <div className="flex-row hidden md:flex">
       <PrevBtnDetail onClick={() => slider?.current?.slickPrev()}><Icon name="ArrowL" iconSize="48" /> </PrevBtnDetail>
    	<Slide {...DetailSettings} ref={slider}>
         
                <SS> 
                
                <Slides artwork />
                </SS>
                <SS>
               
                <Slides artwork />
                
                </SS>
                <SS>
               
                <Slides artwork />
                
                </SS>
                <SS>
               
                <Slides artwork />
              
                </SS>
                <SS>
               
                <Slides artwork />
                
                </SS>
               
            </Slide>
            <NextBtnDetail onClick={() => slider?.current?.slickNext()}><Icon name="ArrowR" iconSize="48" /></NextBtnDetail>
            </div>  
            
            </>
            
    );

}

MainSlider.defaultProps = {
  main: false,
  dimo: false,
  artwork: true,
};

export default MainSlider;