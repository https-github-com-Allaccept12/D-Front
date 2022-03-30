import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CreateTendency } from "../../redux/modules/tendency.js";
import { Title, Text } from "../../elements";
import Button from "./TendencyButton";
import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";
import { useToggle } from "../../hooks";
import { useHistory } from "react-router-dom";
import dPlus from "../../static/logo/Dplus/DplusC.png";
import AdventureIcon from "../../static/images/ResultIcon/Adventure.svg";
import ArtistIcon from "../../static/images/ResultIcon/Artist.svg";
import DetailIcon from "../../static/images/ResultIcon/Detail.svg";
import HarmoniousIcon from "../../static/images/ResultIcon/Harmonious.svg";
import InnovatorIcon from "../../static/images/ResultIcon/Innovator.svg";
import InventorIcon from "../../static/images/ResultIcon/Inventor.svg";

const Flex = tw.div`
flex flex-col justify-center items-center mx-auto
p-10 w-full
`;

const Quest = tw.div`
 font-minB text-2xl max-w-2xl 
 min-w-2xl justify-start items-start
`;

const Hidden = tw.div`
 hidden md:contents
`;

const Flexs = tw.div`
flex flex-row items-center justify-center gap-4
`;
const Inner = tw.img`
text-lg w-16 md:w-16 mb-20
`;

const mbti = { I: 0, E: 0, N: 0, S: 0, T: 0, F: 0, P: 0, J: 0 };
let mbti_s = "";

const TendencyTest = (props) => {
    let designation = "";
    // const token = useSelector((state) => state.user.user);
    const token = sessionStorage.getItem("access_token");
    const history = useHistory();
    const [TestNum, nextTestNum] = useState(0);
    mbti_s = Object.keys(mbti)
        .filter((key) => mbti[key] >= 2)
        .join("");
    // console.log(mbti_s);
    if (mbti_s === "ISTJ" || mbti_s === "ESTJ" || mbti_s === "ISFJ") {
        designation = "디테일 장인";
    } else if (mbti_s === "ENTJ" || mbti_s === "ESTP") {
        designation = "대담한 혁신가";
    } else if (mbti_s === "INFP" || mbti_s === "INFJ") {
        designation = "꿈꾸는 예술가";
    } else if (mbti_s === "INTP" || mbti_s === "ISTP" || mbti_s === "INTJ") {
        designation = "창의적인 발명가";
    } else if (mbti_s === "ENTP" || mbti_s === "ENFP" || mbti_s === "ESFP") {
        designation = "명랑한 모험가";
    } else if (mbti_s === "ISFP" || mbti_s === "ENFJ" || mbti_s === "ESFJ") {
        designation = "부드러운 중재자";
    }

    // const dispatch = useDispatch();
    // const SendTendency = () => {
    //     const tendency = { tendency: designation };
    //     dispatch(CreateTendency({ tendency, token }));
    //     console.log(tendency);
    //     history.replace("/MyInterests");
    // };

    // console.log(designation);
    return (
        <div className="flex flex-col justify-center items-center h-screen gap-4">
            {TestNum === 0 && (
                <div className="text-center">
                    <Flexs>
                        <Inner src={InventorIcon} alt="" />
                        <Inner src={HarmoniousIcon} alt="" />
                        <Inner src={InnovatorIcon} alt="" />
                        <Inner src={AdventureIcon} alt="" />
                        <Inner src={DetailIcon} alt="" />
                        <Inner src={ArtistIcon} alt="" />
                    </Flexs>
                    <Title size="2" className="text-black">
                        나의 디자인 성향은?
                    </Title>

                    <Text size="1" className="text-gray-600 mt-5">
                        디자이너라고 모두가 같은 성격을 가지고 있지는 않죠. <br /> 디플과 함께 숨겨진 나만의 디자인
                        성향을 발견해보세요!
                    </Text>
                </div>
            )}
            {TestNum === 1 && (
                <Flex>
                    <Hidden>
                        <div className="font-bold text-right text-gray-300 ">1 / 12</div>
                        <svg
                            width="552"
                            height="50"
                            viewBox="0 0 552 50"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M16 21C16 18.2386 18.2386 16 21 16H531C533.761 16 536 18.2386 536 21V21C536 23.7614 533.761 26 531 26H21C18.2386 26 16 23.7614 16 21V21Z"
                                fill="#EDF1F7"
                            />
                            <rect x="16" y="16" width="43" height="10" rx="5" fill="#9262F7" />
                        </svg>
                        <br />
                        <br />
                        <br />
                    </Hidden>
                    <Quest>
                        <div className="justify-start items-start text-2xl font-bold text-purple-500">Q1</div>
                        <br />
                        🏢 회사 첫 출근날, 내 자리를 세팅한 뒤 나는
                    </Quest>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <Button
                        size="1"
                        color="1"
                        onClick={() => {
                            mbti.E += 1;
                            nextTestNum(TestNum + 1);
                        }}
                    >
                        주변 사람들에게 먼저 말을 걸어본다 ^ㅁ^
                    </Button>
                    <br />
                    <Button
                        size="1"
                        color="1"
                        onClick={() => {
                            mbti.I += 1;
                            nextTestNum(TestNum + 1);
                        }}
                    >
                        다른 사람들이 먼저 말을 걸 때까지 기다린다 /_\
                    </Button>
                </Flex>
            )}
            {TestNum === 2 && (
                <Flex>
                    <Hidden>
                        <div className="font-bold text-right text-gray-300 ">2 / 12</div>
                        {/* <div className="ml-10"> */}
                        <svg
                            width="552"
                            height="50"
                            viewBox="0 0 552 50"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M16 21C16 18.2386 18.2386 16 21 16H531C533.761 16 536 18.2386 536 21V21C536 23.7614 533.761 26 531 26H21C18.2386 26 16 23.7614 16 21V21Z"
                                fill="#EDF1F7"
                            />
                            <rect x="16" y="16" width="86" height="10" rx="5" fill="#9262F7" />
                        </svg>
                        <br />
                        <br />
                        <br />
                    </Hidden>
                    <Quest>
                        <div className="text-2xl font-bold text-purple-500">Q2</div>
                        <br />
                        💡 재밌을 것 같은 아이디어가 번뜩 떠올랐을 때 나는
                    </Quest>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <Button
                        size="1"
                        color="1"
                        onClick={() => {
                            mbti.E += 1;
                            nextTestNum(TestNum + 1);
                        }}
                    >
                        누구랑 같이 해보면 좋을까? <br />
                        단톡방에서 같이할 팀원을 찾아본다.
                    </Button>
                    <br />
                    <Button
                        size="1"
                        color="1"
                        onClick={() => {
                            mbti.I += 1;
                            nextTestNum(TestNum + 1);
                        }}
                    >
                        혼자가 편하지! <br />
                        나만의 계획에 따라 진행한다.
                    </Button>
                </Flex>
            )}
            {TestNum === 3 && (
                <Flex>
                    <Hidden>
                        <div className="font-bold text-right text-gray-300 ">3 / 12</div>
                        <svg
                            width="552"
                            height="50"
                            viewBox="0 0 552 50"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M16 21C16 18.2386 18.2386 16 21 16H531C533.761 16 536 18.2386 536 21V21C536 23.7614 533.761 26 531 26H21C18.2386 26 16 23.7614 16 21V21Z"
                                fill="#EDF1F7"
                            />
                            <rect x="16" y="16" width="129" height="10" rx="5" fill="#9262F7" />
                        </svg>
                        <br />
                        <br />
                        <br />
                    </Hidden>
                    <Quest>
                        <div className="text-2xl font-bold text-purple-500">Q3</div>
                        <br />
                        🤔 아무리 디자인 작업을 해도 어딘가 만족스럽지
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;못 할 경우에 나는
                    </Quest>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <Button
                        size="1"
                        color="1"
                        onClick={() => {
                            mbti.E += 1;
                            nextTestNum(TestNum + 1);
                        }}
                    >
                        사수나 동료에게 피드백을 요청한다
                    </Button>
                    <br />
                    <Button
                        size="1"
                        color="1"
                        onClick={() => {
                            mbti.I += 1;
                            nextTestNum(TestNum + 1);
                        }}
                    >
                        래퍼런스를 계속 찾아보면서 혼자 해결한다
                    </Button>
                </Flex>
            )}
            {TestNum === 4 && (
                <Flex>
                    <Hidden>
                        <div className="font-bold text-right text-gray-300 ">4 / 12</div>
                        <svg
                            width="552"
                            height="50"
                            viewBox="0 0 552 50"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M16 21C16 18.2386 18.2386 16 21 16H531C533.761 16 536 18.2386 536 21V21C536 23.7614 533.761 26 531 26H21C18.2386 26 16 23.7614 16 21V21Z"
                                fill="#EDF1F7"
                            />
                            <rect x="16" y="16" width="172" height="10" rx="5" fill="#9262F7" />
                        </svg>
                        <br />
                        <br />
                        <br />
                    </Hidden>
                    <Quest>
                        <div className="text-2xl font-bold text-purple-500">Q4</div>
                        <br />
                        😱 오늘안에 급하게 시안을 바꿔야 한다면
                    </Quest>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <Button
                        size="1"
                        color="1"
                        onClick={() => {
                            mbti.S += 1;
                            nextTestNum(TestNum + 1);
                        }}
                    >
                        이전에 했던 작업 중에서 최대한 있어보이게 응용한다
                    </Button>
                    <br />
                    <Button
                        size="1"
                        color="1"
                        onClick={() => {
                            mbti.N += 1;
                            nextTestNum(TestNum + 1);
                        }}
                    >
                        시간 없어도 최대한 새로운 아이디어로 수정한다
                    </Button>
                </Flex>
            )}
            {TestNum === 5 && (
                <Flex>
                    <Hidden>
                        <div className="font-bold text-right text-gray-300 ">5 / 12</div>
                        <svg
                            width="552"
                            height="50"
                            viewBox="0 0 552 50"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M16 21C16 18.2386 18.2386 16 21 16H531C533.761 16 536 18.2386 536 21V21C536 23.7614 533.761 26 531 26H21C18.2386 26 16 23.7614 16 21V21Z"
                                fill="#EDF1F7"
                            />
                            <rect x="16" y="16" width="215" height="10" rx="5" fill="#9262F7" />
                        </svg>
                        <br />
                        <br />
                        <br />
                    </Hidden>
                    <Quest>
                        <div className="text-2xl font-bold text-purple-500">Q5</div>
                        <br />
                        💬 내가 선호하는 피드백은
                    </Quest>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <Button
                        size="1"
                        color="1"
                        onClick={() => {
                            mbti.S += 1;
                            nextTestNum(TestNum + 1);
                        }}
                    >
                        오른쪽으로 1px 옮겨주시고 색상은 #~로 수정해주세요
                    </Button>
                    <br />
                    <Button
                        size="1"
                        color="1"
                        onClick={() => {
                            mbti.N += 1;
                            nextTestNum(TestNum + 1);
                        }}
                    >
                        ~한 느낌으로 적당히 수정해주세요
                    </Button>
                </Flex>
            )}
            {TestNum === 6 && (
                <Flex>
                    <Hidden>
                        <div className="font-bold text-right text-gray-300 ">6 / 12</div>
                        <svg
                            width="552"
                            height="50"
                            viewBox="0 0 552 50"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M16 21C16 18.2386 18.2386 16 21 16H531C533.761 16 536 18.2386 536 21V21C536 23.7614 533.761 26 531 26H21C18.2386 26 16 23.7614 16 21V21Z"
                                fill="#EDF1F7"
                            />
                            <rect x="16" y="16" width="258" height="10" rx="5" fill="#9262F7" />
                        </svg>
                        <br />
                        <br />
                        <br />
                    </Hidden>
                    <Quest>
                        <div className="text-2xl font-bold text-purple-500">Q6</div>
                        <br />
                        😇 마감기한이 다가오는데 작업하기 싫을 때
                    </Quest>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <Button
                        size="1"
                        color="1"
                        onClick={() => {
                            mbti.S += 1;
                            nextTestNum(TestNum + 1);
                        }}
                    >
                        이유는 없다. 그냥 하기 싫다.
                    </Button>
                    <br />
                    <Button
                        size="1"
                        color="1"
                        onClick={() => {
                            mbti.N += 1;
                            nextTestNum(TestNum + 1);
                        }}
                    >
                        내가 이 일을 왜 해야하지? 도망가면 어떻게 될까? 상상의 나래 시작
                    </Button>
                </Flex>
            )}
            {TestNum === 7 && (
                <Flex>
                    <Hidden>
                        <div className="font-bold text-right text-gray-300 ">7 / 12</div>
                        <svg
                            width="552"
                            height="50"
                            viewBox="0 0 552 50"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M16 21C16 18.2386 18.2386 16 21 16H531C533.761 16 536 18.2386 536 21V21C536 23.7614 533.761 26 531 26H21C18.2386 26 16 23.7614 16 21V21Z"
                                fill="#EDF1F7"
                            />
                            <rect x="16" y="16" width="301" height="10" rx="5" fill="#9262F7" />
                        </svg>
                        <br />
                        <br />
                        <br />
                    </Hidden>
                    <Quest>
                        <div className="text-2xl font-bold text-purple-500">Q7</div>
                        <br />
                        🖥️ 내가 선호하는 작업 방식은
                    </Quest>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <Button
                        size="1"
                        color="1"
                        onClick={() => {
                            mbti.T += 1;
                            nextTestNum(TestNum + 1);
                        }}
                    >
                        그리드를 딱딱 맞추며 가이드라인에 충실한다
                    </Button>
                    <br />
                    <Button
                        size="1"
                        color="1"
                        onClick={() => {
                            mbti.F += 1;
                            nextTestNum(TestNum + 1);
                        }}
                    >
                        가이드라인에는 안맞아도 내 느낌! 감성! 으로 한다
                    </Button>
                </Flex>
            )}
            {TestNum === 8 && (
                <Flex>
                    <Hidden>
                        <div className="font-bold text-right text-gray-300 ">8 / 12</div>
                        <svg
                            width="552"
                            height="50"
                            viewBox="0 0 552 50"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M16 21C16 18.2386 18.2386 16 21 16H531C533.761 16 536 18.2386 536 21V21C536 23.7614 533.761 26 531 26H21C18.2386 26 16 23.7614 16 21V21Z"
                                fill="#EDF1F7"
                            />
                            <rect x="16" y="16" width="344" height="10" rx="5" fill="#9262F7" />
                        </svg>
                        <br />
                        <br />
                        <br />
                    </Hidden>
                    <Quest>
                        <div className="text-2xl font-bold text-purple-500">Q8</div>
                        <br />
                        ✌️ 디자인할 때 내가 자신있는 부분은
                    </Quest>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <Button
                        size="1"
                        color="1"
                        onClick={() => {
                            mbti.T += 1;
                            nextTestNum(TestNum + 1);
                        }}
                    >
                        논리적이고 설득력있는 기획
                    </Button>
                    <br />
                    <Button
                        size="1"
                        color="1"
                        onClick={() => {
                            mbti.F += 1;
                            nextTestNum(TestNum + 1);
                        }}
                    >
                        개성있고 창의적인 아이디어
                    </Button>
                </Flex>
            )}
            {TestNum === 9 && (
                <Flex>
                    <Hidden>
                        <div className="font-bold text-right text-gray-300 ">9 / 12</div>
                        <svg
                            width="552"
                            height="50"
                            viewBox="0 0 552 50"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M16 21C16 18.2386 18.2386 16 21 16H531C533.761 16 536 18.2386 536 21V21C536 23.7614 533.761 26 531 26H21C18.2386 26 16 23.7614 16 21V21Z"
                                fill="#EDF1F7"
                            />
                            <rect x="16" y="16" width="387" height="10" rx="5" fill="#9262F7" />
                        </svg>
                        <br />
                        <br />
                        <br />
                    </Hidden>
                    <Quest>
                        <div className="text-2xl font-bold text-purple-500">Q9</div>
                        <br />
                        👀 동료 디자이너가 새로운 툴을 추천해줬을 때
                    </Quest>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <Button
                        size="1"
                        color="1"
                        onClick={() => {
                            mbti.T += 1;
                            nextTestNum(TestNum + 1);
                        }}
                    >
                        왜 좋은 툴이지? 어떨 때 쓰면 좋은지 서치해보고 결정
                    </Button>
                    <br />
                    <Button
                        size="1"
                        color="1"
                        onClick={() => {
                            mbti.F += 1;
                            nextTestNum(TestNum + 1);
                        }}
                    >
                        좋다니까 한 번 써보자! 일단 써보고 계속 쓸지 말지 결정
                    </Button>
                </Flex>
            )}
            {TestNum === 10 && (
                <Flex>
                    <Hidden>
                        <div className="font-bold text-right text-gray-300 ">10 / 12</div>
                        <svg
                            width="552"
                            height="50"
                            viewBox="0 0 552 50"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M16 21C16 18.2386 18.2386 16 21 16H531C533.761 16 536 18.2386 536 21V21C536 23.7614 533.761 26 531 26H21C18.2386 26 16 23.7614 16 21V21Z"
                                fill="#EDF1F7"
                            />
                            <rect x="16" y="16" width="430" height="10" rx="5" fill="#9262F7" />
                        </svg>
                        <br />
                        <br />
                        <br />
                    </Hidden>
                    <Quest>
                        <div className="text-2xl font-bold text-purple-500">Q10</div>
                        <br />
                        📁 디자인 작업할 때 내 파일은
                    </Quest>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <Button
                        size="1"
                        color="1"
                        onClick={() => {
                            mbti.J += 1;
                            nextTestNum(TestNum + 1);
                        }}
                    >
                        언제나 규칙적으로! <br />
                        정해진 파일명으로 폴더에 정리한다
                    </Button>
                    <br />
                    <Button
                        size="1"
                        color="1"
                        onClick={() => {
                            mbti.P += 1;
                            nextTestNum(TestNum + 1);
                        }}
                    >
                        최종.psd, 제발최종.psd.. 그 때 그 때 기분에 따라 바탕화면에 널려 있다
                    </Button>
                </Flex>
            )}
            {TestNum === 11 && (
                <Flex>
                    <Hidden>
                        <div className="font-bold text-right text-gray-300 ">11 / 12</div>
                        <svg
                            width="552"
                            height="50"
                            viewBox="0 0 552 50"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M16 21C16 18.2386 18.2386 16 21 16H531C533.761 16 536 18.2386 536 21V21C536 23.7614 533.761 26 531 26H21C18.2386 26 16 23.7614 16 21V21Z"
                                fill="#EDF1F7"
                            />
                            <rect x="16" y="16" width="473" height="10" rx="5" fill="#9262F7" />
                        </svg>
                        <br />
                        <br />
                        <br />
                    </Hidden>
                    <Quest>
                        <div className="text-2xl font-bold text-purple-500">Q11</div>
                        <br />
                        📗 내 포트폴리오에 넣고 싶은 작업은
                    </Quest>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <Button
                        size="1"
                        color="1"
                        onClick={() => {
                            mbti.J += 1;
                            nextTestNum(TestNum + 1);
                        }}
                    >
                        포트폴리오 사이트에서 사람들에게 인기가 많았던 프로젝트
                    </Button>
                    <br />
                    <Button
                        size="1"
                        color="1"
                        onClick={() => {
                            mbti.P += 1;
                            nextTestNum(TestNum + 1);
                        }}
                    >
                        고생했지만 많이 성장할 수 있었던 프로젝트
                    </Button>
                </Flex>
            )}
            {TestNum === 12 && (
                <Flex>
                    <Hidden>
                        <div className="font-bold text-right text-gray-300 ">12 / 12</div>
                        <svg
                            width="552"
                            height="50"
                            viewBox="0 0 552 50"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M16 21C16 18.2386 18.2386 16 21 16H531C533.761 16 536 18.2386 536 21V21C536 23.7614 533.761 26 531 26H21C18.2386 26 16 23.7614 16 21V21Z"
                                fill="#EDF1F7"
                            />
                            <rect x="16" y="16" width="520" height="10" rx="5" fill="#9262F7" />
                        </svg>
                        <br />
                        <br />
                        <br />
                    </Hidden>
                    <Quest>
                        <div className="text-2xl font-bold text-purple-500">Q12</div>
                        <br />
                        ⚠️ '응답 없음' 이 떴을 때 나는
                    </Quest>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <Button
                        size="1"
                        color="1"
                        onClick={() => {
                            mbti.J += 1;
                            nextTestNum(TestNum + 1);
                        }}
                    >
                        Ctrl + S 는 생명! <br />
                        이미 저장되어 있다
                    </Button>
                    <br />
                    <Button
                        size="1"
                        color="1"
                        onClick={() => {
                            mbti.P += 1;
                            nextTestNum(TestNum + 1);
                        }}
                    >
                        시간을 삭제 당했다 <br /> 울면서 처음부터 새로 작업해야 한다
                    </Button>
                </Flex>
            )}
            {TestNum >= 13 && (
                <Flex>
                    <Hidden>
                        <svg
                            width="552"
                            height="50"
                            viewBox="0 0 552 50"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M16 21C16 18.2386 18.2386 16 21 16H531C533.761 16 536 18.2386 536 21V21C536 23.7614 533.761 26 531 26H21C18.2386 26 16 23.7614 16 21V21Z"
                                fill="#EDF1F7"
                            />
                            <rect x="16" y="16" width="520" height="10" rx="5" fill="#9262F7" />
                        </svg>
                        <br />
                        <br />
                        <br />
                    </Hidden>

                    <Title size="4">과연 당신의 타입은!</Title>

                    <Link
                        to={{
                            pathname: `/Result/${designation}`,
                            state: {
                                title: { designation },
                            },
                        }}
                    >
                        <div className="flex justify-center items-center mt-10">
                            <Button size="1" color="1">
                                보러가기
                            </Button>
                        </div>
                    </Link>
                </Flex>
            )}
            <div className="grid items-center col-start-4 row-start-4">
                {TestNum === 0 ? (
                    <>
                        <Button
                            size="1"
                            color="1"
                            onClick={() => {
                                nextTestNum(TestNum + 1);
                            }}
                        >
                            시작하기
                        </Button>{" "}
                    </>
                ) : (
                    <>
                        <div className="flex justify-center items-center mr-5 mt-4">
                            <img src={dPlus} />
                        </div>
                    </>
                )}
            </div>

            {/* <div className="col-start-7 row-start-6">{TestNum <= 12 && <Link to="/MyInterests">다음에 하기</Link>}</div> */}
        </div>
    );
};

export default TendencyTest;
