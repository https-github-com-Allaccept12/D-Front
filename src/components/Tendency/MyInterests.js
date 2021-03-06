import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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

const Ptext = tw.p`
font-min1 text-sm lg:text-lg
`;

const MyInterests = (props) => {
    // 초기 세팅
    const [selectInterest, SetSelectInterest] = useState("");
    // const token = useSelector((state) => state.user.user);
    const token = sessionStorage.getItem("access_token");
    const [isClicked, setIsClicked] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

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
        // console.log(selectInterest);
        const interest = { interest: selectInterest };
        dispatch(CreateInterests({ interest, token }));
        navigate("/CreateProfile", { replace: true });
    };

    return (
        <>
            <FakeHeader />
            <Profile>
                <Grid>
                    <Robot>
                        <img src={icon} />
                        <Title size="5" className="xl:text-2xl">
                            관심사를 설정해 주세요
                        </Title>
                        <Text size="1" className="mt-4">
                            관심사는 한 개만 설정 가능합니다.
                        </Text>
                    </Robot>
                    <Body>
                        <div
                            className="grid items-end w-full h-48 col-start-1 col-end-4 row-start-1 row-end-3 px-5 py-4 my-1 text-center rounded-md shadow-lg md:mx-1 justify-items-start xl:w-72"
                            onClick={handleClicked}
                        >
                            <div className="flex-col my-3">
                                <img className="my-3" src={typography} />
                                <Ptext>타이포그래피</Ptext>
                            </div>
                        </div>
                        <div
                            className="grid items-end w-full h-48 col-start-4 col-end-6 row-start-1 row-end-3 px-6 py-4 my-1 text-center rounded-md shadow-lg xl:w-48 md:mx-1 justify-items-start"
                            onClick={handleClicked}
                        >
                            <div className="flex-col my-3">
                                <img className="my-3" src={crafts} />
                                <Ptext>공예</Ptext>
                            </div>
                        </div>
                        <div
                            className="grid items-end w-full col-start-6 col-end-8 row-start-1 row-end-4 px-6 py-4 my-1 text-center rounded-md shadow-lg xl:w-48 md:mx-1 lg:mr-8 justify-items-start h-74"
                            onClick={handleClicked}
                        >
                            <div className="flex-col my-3">
                                <img className="my-3" src={pakage} />
                                <Ptext>패키지</Ptext>
                            </div>
                        </div>
                        <div
                            className="grid items-end w-full h-48 col-start-1 col-end-3 row-start-3 row-end-5 px-6 py-4 my-1 text-center rounded-md shadow-lg xl:w-48 md:mx-1 justify-items-start"
                            onClick={handleClicked}
                        >
                            <div className="flex-col my-3">
                                <img className="my-3" src={graphic} />
                                <Ptext>그래픽</Ptext>
                            </div>
                        </div>
                        <div
                            className="grid items-end w-full col-start-3 col-end-6 row-start-3 row-end-6 px-6 py-4 my-1 text-center rounded-md shadow-lg md:mx-1 justify-items-start xl:w-74 h-74"
                            onClick={handleClicked}
                        >
                            <div className="flex-col my-3">
                                <img className="my-3" src={ui} />
                                <Ptext>UI / UX</Ptext>
                            </div>
                        </div>
                        <div
                            className="grid items-end w-full h-48 col-start-6 col-end-8 row-start-4 row-end-6 px-6 py-4 my-1 mr-8 text-center rounded-md shadow-lg xl:w-48 md:mx-1 justify-items-start"
                            onClick={handleClicked}
                        >
                            <div className="flex-col my-3">
                                <img className="my-3" src={fashion} />
                                <Ptext>패션</Ptext>
                            </div>
                        </div>
                        <div
                            className="grid items-end w-full col-start-1 col-end-3 row-start-5 row-end-7 px-6 py-4 my-1 text-center rounded-md shadow-lg xl:w-48 md:mx-1 justify-items-start h-74"
                            onClick={handleClicked}
                        >
                            <div className="flex-col my-3">
                                <img className="my-3" src={video} />
                                <Ptext>영상 / 모션</Ptext>
                            </div>
                        </div>
                        <div
                            className="grid items-end w-full h-48 col-start-3 col-end-5 row-start-6 row-end-7 px-6 py-4 my-1 text-center rounded-md shadow-lg xl:w-48 md:mx-1 justify-items-start"
                            onClick={handleClicked}
                        >
                            <div className="flex-col my-3">
                                <img className="my-3" src={product} />
                                <Ptext>제품</Ptext>
                            </div>
                        </div>
                        <div
                            className="grid items-end w-full h-48 col-start-5 col-end-8 row-start-6 row-end-7 px-6 py-4 my-1 mr-8 text-center rounded-md shadow-lg md:mx-1 justify-items-start xl:w-72 md:ml-2"
                            onClick={handleClicked}
                        >
                            <div className="flex-col my-3">
                                <img className="my-3" src={game} />
                                <Ptext>게임 / 캐릭터</Ptext>
                            </div>
                        </div>
                        <div
                            className="grid items-end w-full h-48 col-start-1 col-end-4 row-start-7 px-6 py-4 my-1 text-center rounded-md shadow-lg md:mx-1 justify-items-start row-end-8 xl:w-78"
                            onClick={handleClicked}
                        >
                            <div className="flex-col my-3">
                                <img className="my-3" src={branding} />
                                <Ptext>브랜딩 / 편집</Ptext>
                            </div>
                        </div>
                        <div
                            className="grid items-end w-full h-48 col-start-4 col-end-8 row-start-7 px-6 py-4 my-1 mr-8 text-center rounded-md shadow-lg md:mx-1 justify-items-start row-end-8 xl:w-96 lg:ml-3"
                            onClick={handleClicked}
                        >
                            <div className="flex-col my-3">
                                <img className="my-3" src={interior} />
                                <Ptext>건축 / 인테리어 / 환경</Ptext>
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
