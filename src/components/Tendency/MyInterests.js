import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { CreateInterests } from "../../redux/modules/interests.js";
import { Button, Title, Text } from "../../elements";
import { FakeHeader } from "../../NavComponents";
import tw from "tailwind-styled-components";
import icon from "../../static/images/interests_icon.svg";
import typography from "../../static/images/typography.svg";
import crafts from "../../static/images/crafts.svg";
import ui from "../../static/images/ui.svg";
import pakage from "../../static/images/pakage.svg";
import fashion from "../../static/images/fashion.svg";
import video from "../../static/images/video.svg";
import product from "../../static/images/product.svg";
import game from "../../static/images/game.svg";
import branding from "../../static/images/branding.svg";
import interior from "../../static/images/interior.svg";
import graphic from "../../static/images/graphic.svg";

const Profile = tw.div`
bg-gradient-to-r from-[#9262F7] to-[#7681FB] absolute top-0 w-full h-[100rem]
`;

const Grid = tw.div`
xl:grid w-full xl:w-4/5 mx-auto mt-44 bg-white gap-3 rounded-md
col-start-1
`;

const Body = tw.div`
xl:grid bg-white col-start-2 row-start-1 max-w-2xl my-20
flex flex-col mx-auto
`;

const Robot = tw.div`
flex flex-col mx-auto justify-center max-w-xl items-center xl:mb-32
`;

const MyInterests = (props) => {
    // 초기 세팅
    const [selectInterest, SetSelectInterest] = useState("");
    // const token = useSelector((state) => state.user.user);
    const token = sessionStorage.getItem("access_token");
    const [isClicked, setIsClicked] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    // 선택 시 실행 function
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

    // 다음 버튼 function
    const SendInterests = () => {
        console.log(selectInterest);
        const interest = { interest: selectInterest };
        dispatch(CreateInterests({ interest, token }));
        history.replace("/CreateProfile");
    };

    return (
        <>
            <FakeHeader />
            <Profile>
                <Grid>
                    <Robot>
                        <img src={icon} />
                        <Title size="5" className="xl:text-2xl">
                            님의 프로필을 구성해 볼까요?
                        </Title>
                        <Text size="1" className="mt-4">
                            다른 이용자님들에게 보여질 프로필입니다.
                            <br />
                            설정하신 프로필은 어쩌구저쩌구에 활용됩니다.
                        </Text>
                    </Robot>
                    <Body>
                        <div
                            className="grid items-end h-48 col-start-1 col-end-4 row-start-1 row-end-3 px-5 py-4 md:mx-1 my-1 text-center rounded-md shadow-lg justify-items-start w-full xl:w-72"
                            onClick={handleClicked}
                        >
                            <div className="flex-col my-3">
                                <img className="my-3" src={typography} />
                                타이포그래피
                            </div>
                        </div>
                        <div
                            className="grid items-end w-full xl:w-48 h-48 col-start-4 col-end-6 row-start-1 row-end-3 px-6 py-4 md:mx-1 my-1 text-center rounded-md shadow-lg justify-items-start"
                            onClick={handleClicked}
                        >
                            <div className="flex-col my-3">
                                <img className="my-3" src={crafts} />
                                공예
                            </div>
                        </div>
                        <div
                            className="grid items-end w-full xl:w-48 col-start-6 col-end-8 row-start-1 row-end-4 px-6 py-4 md:mx-1 my-1 lg:mr-8 text-center rounded-md shadow-lg justify-items-start h-74"
                            onClick={handleClicked}
                        >
                            <div className="flex-col my-3">
                                <img className="my-3" src={pakage} />
                                패키지
                            </div>
                        </div>
                        <div
                            className="grid items-end w-full xl:w-48 h-48 col-start-1 col-end-3 row-start-3 row-end-5 px-6 py-4 md:mx-1 my-1 text-center rounded-md shadow-lg justify-items-start"
                            onClick={handleClicked}
                        >
                            <div className="flex-col my-3">
                                <img className="my-3" src={graphic} />
                                그래픽
                            </div>
                        </div>
                        <div
                            className="grid items-end col-start-3 col-end-6 row-start-3 row-end-6 px-6 py-4 md:mx-1 my-1 text-center rounded-md shadow-lg justify-items-start w-full xl:w-74 h-74"
                            onClick={handleClicked}
                        >
                            <div className="flex-col my-3">
                                <img className="my-3" src={ui} />
                                UI / UX
                            </div>
                        </div>
                        <div
                            className="grid items-end w-full xl:w-48 h-48 col-start-6 col-end-8 row-start-4 row-end-6 px-6 py-4 md:mx-1 my-1 mr-8 text-center rounded-md shadow-lg justify-items-start"
                            onClick={handleClicked}
                        >
                            <div className="flex-col my-3">
                                <img className="my-3" src={fashion} />
                                패션
                            </div>
                        </div>
                        <div
                            className="grid items-end w-full xl:w-48 col-start-1 col-end-3 row-start-5 row-end-7 px-6 py-4 md:mx-1 my-1 text-center rounded-md shadow-lg justify-items-start h-74"
                            onClick={handleClicked}
                        >
                            <div className="flex-col my-3">
                                <img className="my-3" src={video} />
                                영상 / 모션
                            </div>
                        </div>
                        <div
                            className="grid items-end w-full xl:w-48 h-48 col-start-3 col-end-5 row-start-6 row-end-7 px-6 py-4 md:mx-1 my-1 text-center rounded-md shadow-lg justify-items-start"
                            onClick={handleClicked}
                        >
                            <div className="flex-col my-3">
                                <img className="my-3" src={product} />
                                제품
                            </div>
                        </div>
                        <div
                            className="grid items-end h-48 col-start-5 col-end-8 row-start-6 row-end-7 px-6 py-4 md:mx-1 my-1 mr-8 text-center rounded-md shadow-lg justify-items-start w-full xl:w-72 md:ml-2"
                            onClick={handleClicked}
                        >
                            <div className="flex-col my-3">
                                <img className="my-3" src={game} />
                                게임 / 캐릭터
                            </div>
                        </div>
                        <div
                            className="grid items-end h-48 col-start-1 col-end-4 row-start-7 px-6 py-4 md:mx-1 my-1 text-center rounded-md shadow-lg justify-items-start row-end-8 w-full xl:w-78"
                            onClick={handleClicked}
                        >
                            <div className="flex-col my-3">
                                <img className="my-3" src={branding} />
                                브랜딩 / 편집
                            </div>
                        </div>
                        <div
                            className="grid items-end h-48 col-start-4 col-end-8 row-start-7 px-6 py-4 md:mx-1 my-1 mr-8 text-center rounded-md shadow-lg justify-items-start row-end-8 w-full xl:w-96 lg:ml-3"
                            onClick={handleClicked}
                        >
                            <div className="flex-col my-3">
                                <img className="my-3" src={interior} />
                                건축 / 인테리어 / 환경
                            </div>
                        </div>
                    </Body>

                    <div className="flex my-10 place-content-center">
                        {selectInterest !== "" ? (
                            // <Link to="/CreateProfile">
                            <Button size="1" color="1" onClick={SendInterests}>
                                확인
                            </Button>
                        ) : (
                            // </Link>
                            <Button size="1" color="2">
                                관심사를 선택해주세요.
                            </Button>
                        )}
                    </div>
                </Grid>
            </Profile>
        </>
    );
};

export default MyInterests;
