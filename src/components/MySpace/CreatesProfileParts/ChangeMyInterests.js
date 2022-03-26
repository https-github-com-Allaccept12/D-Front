import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { interests } from "../../../redux/modules/interests.js";
import { Text } from "../../../elements";
import icon from "../../../static/images/interests_icon.svg";
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

const MyInterests = (props) => {
  const [selectInterest, SetSelectInterest] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

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
    <div className="mt-4 bg-white w-fit">
      <div className="flex my-10 place-content-center">
        <div className="grid col-start-2 col-end-8 text-center bg-white">
          <div
            className="grid items-end h-48 col-start-1 col-end-4 row-start-1 row-end-3 px-5 py-4 mx-1 my-1 text-center rounded-md shadow-lg justify-items-start w-74"
            onClick={handleClicked}
          >
            <div className="flex-col my-3">
              <img className="my-3" src={typography} alt="" />
              <Text size="1">타이포그래피</Text>
            </div>
          </div>

          <div
            className="grid items-end w-48 h-48 col-start-4 col-end-6 row-start-1 row-end-3 px-6 py-4 mx-1 my-1 text-center rounded-md shadow-lg justify-items-start"
            onClick={handleClicked}
          >
            <div className="flex-col my-3">
              <img className="my-3" src={crafts} alt="" />
              <Text size="1">공예</Text>
            </div>
          </div>

          <div
            className="grid items-end w-48 col-start-6 col-end-8 row-start-1 row-end-4 px-6 py-4 mx-1 my-1 mr-8 text-center rounded-md shadow-lg justify-items-start h-74"
            onClick={handleClicked}
          >
            <div className="flex-col my-3">
              <img className="my-3" src={pakage} alt="" />
              <Text size="1">패키지</Text>
            </div>
          </div>

          <div
            className="grid items-end w-48 h-48 col-start-1 col-end-3 row-start-3 row-end-5 px-6 py-4 mx-1 my-1 text-center rounded-md shadow-lg justify-items-start"
            onClick={handleClicked}
          >
            <div className="flex-col my-3">
              <img className="my-3" src={graphic} alt="" />
              <Text size="1">그래픽</Text>
            </div>
          </div>

          <div
            className="grid items-end col-start-3 col-end-6 row-start-3 row-end-6 px-6 py-4 mx-1 my-1 text-center rounded-md shadow-lg justify-items-start w-74 h-74"
            onClick={handleClicked}
          >
            <div className="flex-col my-3">
              <img className="my-3" src={ui} alt="" />
              <Text size="1">UI / UX</Text>
            </div>
          </div>

          <div
            className="grid items-end w-48 h-48 col-start-6 col-end-8 row-start-4 row-end-6 px-6 py-4 mx-1 my-1 mr-8 text-center rounded-md shadow-lg justify-items-start"
            onClick={handleClicked}
          >
            <div className="flex-col my-3">
              <img className="my-3" src={fashion} alt="" />
              <Text size="1">패션</Text>
            </div>
          </div>

          <div
            className="grid items-end w-48 col-start-1 col-end-3 row-start-5 row-end-7 px-6 py-4 mx-1 my-1 text-center rounded-md shadow-lg justify-items-start h-74"
            onClick={handleClicked}
          >
            <div className="flex-col my-3">
              <img className="my-3" src={video} alt="" />
              <Text size="1">영상 / 모션</Text>
            </div>
          </div>

          <div
            className="grid items-end w-48 h-48 col-start-3 col-end-5 row-start-6 row-end-7 px-6 py-4 mx-1 my-1 text-center rounded-md shadow-lg justify-items-start"
            onClick={handleClicked}
          >
            <div className="flex-col my-3">
              <img className="my-3" src={product} alt="" />
              <Text size="1">제품</Text>
            </div>
          </div>

          <div
            className="grid items-end h-48 col-start-5 col-end-8 row-start-6 row-end-7 px-6 py-4 mx-1 my-1 mr-8 text-center rounded-md shadow-lg justify-items-start w-74"
            onClick={handleClicked}
          >
            <div className="flex-col my-3">
              <img className="my-3" src={game} alt="" />
              <Text size="1">게임 / 캐릭터</Text>
            </div>
          </div>

          <div
            className="grid items-end h-48 col-start-1 col-end-4 row-start-7 px-6 py-4 mx-1 my-1 text-center rounded-md shadow-lg justify-items-start row-end-8 w-74"
            onClick={handleClicked}
          >
            <div className="flex-col my-3">
              <img className="my-3" src={branding} alt="" />
              <Text size="1">브랜딩 / 편집</Text>
            </div>
          </div>

          <div
            className="grid items-end h-48 col-start-4 col-end-8 row-start-7 px-6 py-4 mx-1 my-1 mr-8 text-center rounded-md shadow-lg justify-items-start row-end-8 w-94"
            onClick={handleClicked}
          >
            <div className="flex-col my-3">
              <img className="my-3" src={interior} alt="" />
              <Text size="1">건축 / 인테리어 / 환경</Text>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex my-10 place-content-center">
          {selectInterest !== "" ? 
            // <Link to="/CreateProfile">
              <Button size="1" color="1" onClick={SendInterests}>확인</Button>
            // </Link>
            : 
            <Button size="1" color="2">관심사를 선택해주세요.</Button>
          }
        </div> */}
    </div>
  );
};

export default MyInterests;
