import React from "react";
import { Button, Image, Container } from "../../elements";
import { MyArtWork } from "../../components/MySpace"
import { useHistory } from "react-router-dom";

const Port_cnt = 0

const MyPortfolio = (props) => {
  let history = useHistory();
  if(Port_cnt === 0) return (
    <>

        <div className="grid">
        <div>PORTFOLIO</div>
        <hr className="w-full border-4" /> 
        포트폴리오 추가하기
       <div className="bg-white h-96 flex justify-center items-center">
        
         <div className="text-2xl">
           <p>아직 등록한 포트폴리오가 없습니다.</p>
           <p>지금 바로 포트폴리오를 등록해보세여</p>
           <Button>추가하기</Button>
         </div>

       </div>
</div>
    </>

  );
  return (
    <>

        <div className="grid">
        <div>PORTFOLIO</div>
        <hr className="w-full border-4" /> 
       <MyArtWork />
</div>
    </>

  );
};

export default MyPortfolio;