import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { interests } from "../../../redux/modules/interests.js";
import { Text } from "../../../elements";
import typography from "../../../static/images/typography.svg";
import crafts from "../../../static/images/crafts.svg";
import ui from "../../../static/images/ui.svg";
import pakage from "../../../static/images/pakage.svg";
import fashion from "../../../static/images/fashion.svg";
import video from "../../../static/images/video.svg";
import product from "../../../static/images/product.svg";
import game from "../../../static/images/game.svg";
import branding from "../../../static/images/branding.svg";
import interior from "../../../static/images/interior.svg";
import graphic from "../../../static/images/graphic.svg";

const ChangeMyInterests = (props) => {
  const [selectInterest, SetSelectInterest] = useState("");
  const dispatch = useDispatch();

  const SendInterests = () => {
    // console.log(selectInterest);
    dispatch(interests(selectInterest));
    // history.replace('/CreateProfile');
  };
  const [isClicked, setIsClicked] = useState(false);
  const handleClicked = (e) => {
    if (selectInterest === "") {
      setIsClicked(!isClicked);
      !isClicked
        ? (e.currentTarget.style.border = "5px solid #A162F7")
        : (e.currentTarget.style.border = "1px black");
      SetSelectInterest(e.currentTarget.innerText);
    } else {
      if (e.currentTarget.innerText === selectInterest) {
        setIsClicked(!isClicked);
        !isClicked
          ? (e.currentTarget.style.border = "5px solid #A162F7")
          : (e.currentTarget.style.border = "1px black");
        SetSelectInterest("");
      }
    }
  };

  return (
    <div className="grid col-start-2 col-end-8 text-center bg-white">
            <div
              className="grid items-end h-48 col-start-1 col-end-4 row-start-1 row-end-3 px-5 py-4 mx-1 my-1 text-center rounded-md shadow-lg justify-items-start w-74"
              onClick={handleClicked}
            >
              <div className="flex-col my-3">
                <img className="my-3" src={typography} />
                타이포그래피
              </div>
            </div>
            <div
              className="grid items-end w-48 h-48 col-start-4 col-end-6 row-start-1 row-end-3 px-6 py-4 mx-1 my-1 text-center rounded-md shadow-lg justify-items-start"
              onClick={handleClicked}
            >
              <div className="flex-col my-3">
                <img className="my-3" src={crafts} />
                공예
              </div>
            </div>
            <div
              className="grid items-end w-48 col-start-6 col-end-8 row-start-1 row-end-4 px-6 py-4 mx-1 my-1 mr-8 text-center rounded-md shadow-lg justify-items-start h-74"
              onClick={handleClicked}
            >
              <div className="flex-col my-3">
                <img className="my-3" src={pakage} />
                패키지
              </div>
            </div>
            <div
              className="grid items-end w-48 h-48 col-start-1 col-end-3 row-start-3 row-end-5 px-6 py-4 mx-1 my-1 text-center rounded-md shadow-lg justify-items-start"
              onClick={handleClicked}
            >
              <div className="flex-col my-3">
                <img className="my-3" src={graphic} />
                그래픽
              </div>
            </div>
            <div
              className="grid items-end col-start-3 col-end-6 row-start-3 row-end-6 px-6 py-4 mx-1 my-1 text-center rounded-md shadow-lg justify-items-start w-74 h-74"
              onClick={handleClicked}
            >
              <div className="flex-col my-3">
                <img className="my-3" src={ui} />
                UI / UX
              </div>
            </div>
            <div
              className="grid items-end w-48 h-48 col-start-6 col-end-8 row-start-4 row-end-6 px-6 py-4 mx-1 my-1 mr-8 text-center rounded-md shadow-lg justify-items-start"
              onClick={handleClicked}
            >
              <div className="flex-col my-3">
                <img className="my-3" src={fashion} />
                패션
              </div>
            </div>
            <div
              className="grid items-end w-48 col-start-1 col-end-3 row-start-5 row-end-7 px-6 py-4 mx-1 my-1 text-center rounded-md shadow-lg justify-items-start h-74"
              onClick={handleClicked}
            >
              <div className="flex-col my-3">
                <img className="my-3" src={video} />
                영상 / 모션
              </div>
            </div>
            <div
              className="grid items-end w-48 h-48 col-start-3 col-end-5 row-start-6 row-end-7 px-6 py-4 mx-1 my-1 text-center rounded-md shadow-lg justify-items-start"
              onClick={handleClicked}
            >
              <div className="flex-col my-3">
                <img className="my-3" src={product} />
                제품
              </div>
            </div>
            <div
              className="grid items-end h-48 col-start-5 col-end-8 row-start-6 row-end-7 px-6 py-4 mx-1 my-1 mr-8 text-center rounded-md shadow-lg justify-items-start w-74"
              onClick={handleClicked}
            >
              <div className="flex-col my-3">
                <img className="my-3" src={game} />
                게임 / 캐릭터
              </div>
            </div>
            <div
              className="grid items-end h-48 col-start-1 col-end-4 row-start-7 px-6 py-4 mx-1 my-1 text-center rounded-md shadow-lg justify-items-start row-end-8 w-74"
              onClick={handleClicked}
            >
              <div className="flex-col my-3">
                <img className="my-3" src={branding} />
                브랜딩 / 편집
              </div>
            </div>
            <div
              className="grid items-end h-48 col-start-4 col-end-8 row-start-7 px-6 py-4 mx-1 my-1 mr-8 text-center rounded-md shadow-lg justify-items-start row-end-8 w-94"
              onClick={handleClicked}
            >
              <div className="flex-col my-3">
                <img className="my-3" src={interior} />
                건축 / 인테리어 / 환경
              </div>
            </div>
          </div>
          
  );
};

export default ChangeMyInterests;
