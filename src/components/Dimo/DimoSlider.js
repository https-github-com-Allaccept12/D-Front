import React, { useRef } from "react";
import Slider from "react-slick";
import tw from "tailwind-styled-components";
import styled from "styled-components";
import MainSlide from "../Main/MainSlide";
import { Image, Text, Title } from "../../elements";
import DimoSlide from "./DimoSlide";

import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <div className="bg-red-200 rounded-xl max-w-md px-1 font-sanss2 font-bold" onClick={handleOpen}> 채택된 답변보기</div>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
      >
        <div className="absolute top-52 right-10 w-full md:w-2/5 mx-auto bg-white p-10 rounded-lg
        shadow-md font-sanss2">
          <h2 id="child-modal-title">모달속의 모달</h2>
          <p id="child-modal-description">
            오렌지를 드세여!
          </p>
          <Button onClick={handleClose}>오렌지</Button>
          </div>
      </Modal>
    </React.Fragment>
  );
}


// 리액트 슬라이더 중에 제일 많이들쓰는거
// 구글링해서 커스텀 css 만들기!
export const Slide = tw(Slider)`
    bg-transparent mx-auto mt-10 grid
    opacity-90 text-white
    font-sanss2 text-lg w-full

`
const SS = tw.div`
    box-border container
`
const PrevBtn = tw.button`
  text-white opacity-75 mx-auto md:mt-10 hidden md:contents
`

const NextBtn = tw.button`
text-white opacity-75 mx-auto md:mt-10 hidden md:contents
`

const DimoSlider = ()=>{
    const slider = React.useRef(null);
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


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

    
    return (
      <>
       <PrevBtn onClick={() => slider?.current?.slickPrev()}>◀</PrevBtn>
    	<Slide {...settings} ref={slider}>
         
                <SS> 
                <Button onClick={handleOpen}>
                <DimoSlide />
                </Button>
                </SS>
                <SS>
                <Button onClick={handleOpen}>
                <DimoSlide />
                </Button>
                </SS>
                <SS>
                <Button onClick={handleOpen}>
                <DimoSlide />
                </Button>
                </SS>
                <SS>
                <Button onClick={handleOpen}>
                <DimoSlide />
                </Button>
                </SS>
                <SS>
                <Button onClick={handleOpen}>
                <DimoSlide />
                </Button>
                </SS>
               
            </Slide>
            <NextBtn onClick={() => slider?.current?.slickNext()}>▶</NextBtn> 
            



      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <div className="bg-blue-200 rounded-xl w-5/6 md:w-2/3 h-auto flex justify-center items-center
        mx-auto flex-col mt-20 p-3">
          <div className="flex flex-row">
          <Text id="parent-modal-description">
            고민을 얘기하는 디모모달!
            </Text>
            <ChildModal />
          
          </div>
  <div class="container mx-auto flex flex-col px-5 py-5 justify-center items-center">
  <Image shape="big_square" alt="" />
    <div class="w-full md:w-2/3 flex flex-col mb-4 items-center text-center">
      <Title class="sm:text-4xl text-3xl mb-4 font-medium text-gray-900"> 고민을 얘기해보세여</Title>

      <div className="flex justify-between items-center">
      <div className="flex flex-row justify-between">
      <hr className="border-4 border-white" />
      <Image shape="circle" size="small" />
      <div className="shrink-0 font-sanss2 font-bold text-yellow-700 hidden md:contents">
        000 님</div>

      <span className="flex-shrink-0 flex-grow p-2 mb-3 py-2 font-bold bg-yellow-500 bg-opacity-50 rounded-full"><Text>코멘트를 이렇게 남기기</Text></span>
      <div className="hidden md:contents"><Text>2022.02.13</Text></div>
      
      </div>
    </div>
    </div>
  </div>


      <div className="flex flex-row justify-between">
      <hr className="border-4 border-white" />
      <Image shape="circle" size="small" />
      <div className="shrink-0 font-sanss2 font-bold text-yellow-700 hidden md:contents">
        000 님</div>

      <span className="flex-shrink-0 flex-grow p-2 mb-3 py-2 font-bold bg-yellow-500 bg-opacity-50 rounded-full"><Text>코멘트를 이렇게 남기기</Text></span>
      <div className="hidden md:contents"><Text>2022.02.13</Text></div>
      
      </div>
      





          
        </div>
      </Modal>


            </>
            
    );
}


export default DimoSlider;