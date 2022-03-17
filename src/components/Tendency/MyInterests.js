import React, {useState } from "react";
import { Button, Image } from "../../elements";
import react_icon from "../../static/images/React-icon.svg.png";
import { Link } from "react-router-dom";


const interest = [];

const MyInterests = (props) => {
  
  const [isClicked, setIsClicked] = useState(false);
  const handleClicked = e => {
    if (interest.length < 1){
      setIsClicked(!isClicked)
      !isClicked ? e.currentTarget.style.border = "5px solid #9ACD32" : e.currentTarget.style.border = "1px black";
      interest.push(e.currentTarget.innerText)
    } else{
        if (e.currentTarget.innerText === interest[0]){
          setIsClicked(!isClicked)
          !isClicked ? e.currentTarget.style.border = "5px solid #9ACD32" : e.currentTarget.style.border = "1px black"
          interest.pop();
        }
    }
  }
  
  return (
    <div>
      <div className="text-center">관심 분야 1개 선택해 주세요</div>
      <div className="grid justify-center col-start-1 col-end-8 text-center bg-yellow-400">
        <div value="typo" className="grid items-center justify-center col-start-1 col-end-4 row-start-1 row-end-3 mx-1 my-1 text-center bg-green-200" onClick={handleClicked}><img src={react_icon}/>타이포그래피</div>
        <div className="grid items-center justify-center col-start-4 col-end-6 row-start-1 row-end-3 mx-1 my-1 text-center bg-green-400" onClick={handleClicked}><img src={react_icon}/>UI / UX</div>
        <div className="grid items-center justify-center col-start-6 col-end-8 row-start-1 row-end-4 mx-1 my-1 text-center bg-purple-400" onClick={handleClicked}><img src={react_icon}/>패키지</div>
        <div className="grid items-center justify-center col-start-1 col-end-3 row-start-3 row-end-5 mx-1 my-1 text-center bg-green-600" onClick={handleClicked}><img src={react_icon}/>그래픽</div>
        <div className="grid items-center justify-center col-start-3 col-end-6 row-start-3 row-end-6 mx-1 my-1 text-center bg-blue-600" onClick={handleClicked}><img src={react_icon}/>브랜딩 / 편집</div>
        <div className="grid items-center justify-center col-start-6 col-end-8 row-start-4 row-end-6 mx-1 my-1 text-center bg-red-200" onClick={handleClicked}><img src={react_icon}/>패션</div>
        <div className="grid items-center justify-center col-start-1 col-end-3 row-start-5 row-end-7 mx-1 my-1 text-center bg-green-400" onClick={handleClicked}><img src={react_icon}/>공예</div>
        <div className="grid items-center justify-center col-start-3 col-end-5 row-start-6 row-end-7 mx-1 my-1 text-center bg-red-400" onClick={handleClicked}><img src={react_icon}/>제품</div>
        <div className="grid items-center justify-center col-start-5 col-end-8 row-start-6 row-end-7 mx-1 my-1 text-center bg-blue-400" onClick={handleClicked}><img src={react_icon}/>게임 / 캐릭터</div>
        <div className="grid items-center justify-center col-start-1 col-end-4 row-start-7 mx-1 my-1 text-center bg-pink-400 row-end-8" onClick={handleClicked}><img src={react_icon}/>영상 / 모션</div>
        <div className="grid items-center justify-center col-start-4 col-end-8 row-start-7 mx-1 my-1 text-center bg-white row-end-8" onClick={handleClicked}><img src={react_icon}/>건축 / 인테리어 / 환경</div>
        <div className="grid items-center justify-center col-start-4">
          {interest.length === 1 ? <Link to="/">
            <Button size="1" color="1">확인</Button>
          </Link> : 
            <Button size="1" color="1">관심사를 선택해주세요.</Button>
          }
          
        </div>
      </div>
    </div>
  );
};

export default MyInterests;