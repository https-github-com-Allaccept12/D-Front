import React from "react";
import Slider from "react-slick";
import tw from "tailwind-styled-components";
import { Image } from "../elements";

// 리액트 슬라이더 중에 제일 많이들쓰는거
// 구글링해서 커스텀 css 만들기!
export const Slide = tw(Slider)`
    .slick-list{ 
        w-3/4 h-64 m-auto bg-transparent justify-center
        items-center
    }
    
    .slick-prev:before, .slick-next:before{ 
    	font-sanss2 text-lg
        opacity-75 text-yellow-500
    }
`

const SimpleSlider = ()=>{

    const settings = {
        dots: false,  // 슬라이드 밑에 점 보이게
        infinite: true,  // 무한으로 반복
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,  // 넘어가는 속도
        slidesToShow: 4,  // 4장씩 보이게
        slidesToScroll: 1,  // 1장씩 뒤로 넘어가게
        centerMode: true,
        centerPadding: '0px',  // 0px 하면 슬라이드 끝쪽 이미지가 안잘림
    };
    
    return (
    	<Slide {...settings}>
                <div>
                    <Image src="https://images.unsplash.com/photo-1609385509807-f191a8dc2bd2?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=4800" shape="big_square" />
                </div>
                <div>
                <Image src="https://images.unsplash.com/photo-1609385509807-f191a8dc2bd2?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=4800" shape="big_square" />
                </div>
                <div>
                <Image src="https://images.unsplash.com/photo-1609385509807-f191a8dc2bd2?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=4800" shape="big_square" />
                </div>
                <div>
                <Image src="https://images.unsplash.com/photo-1609385509807-f191a8dc2bd2?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=4800" shape="big_square" />
                </div>
                <div>
                <Image src="https://images.unsplash.com/photo-1609385509807-f191a8dc2bd2?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=4800" shape="big_square" />
                </div>
            </Slide>  
    );
}


export default SimpleSlider;