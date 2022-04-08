import React from "react";
import { Button, Text } from "../elements";

import { useNavigate } from "react-router-dom";
import tw from "tailwind-styled-components";

const Foot = tw.div`
h-20 bg-dpurple-200 opacity-70 sm:opacity-0 fixed hover:opacity-60 bottom-0 w-3/5 rounded-tr-full
transition ease-in-out delay-150 mx-auto 
`;

const OutSide = tw.div`
fixed bottom-0 text-dpurple-300 p-5 animate-pulse
`;

const SpBtn = tw.button`
font-min1 text-[0.05rem] md:text-base text-white rounded-full bg-dpurple-300 sm:bg-dpurple-300 hover:bg-dpurple-400  p-2
`;
const Footer = (props) => {
    let navigate = useNavigate();

    return (
        <>
            <OutSide>
                <Text size="2" className="hidden md:contents">
                    재밌게 구경하시고 있나요? <br />
                    여기에 의견을 남겨주세요!
                </Text>
            </OutSide>
            <Foot>
                <div className="flex flex-row p-3 justify-center items-center gap-3">
                    <SpBtn
                        size="3"
                        onClick={() => {
                            navigate(-1);
                        }}
                    >
                        뒤로가기
                    </SpBtn>
                    <a target="_blank" href="https://open.kakao.com/o/sBAlRG9d">
                        <SpBtn
                            size="3"
                            onClick={() => {
                                navigate(-1);
                            }}
                        >
                            버그제보
                        </SpBtn>
                    </a>

                    <a
                        target="_blank"
                        href="https://www.notion.so/robinchoi11/HELLO-D-PLUS-3739025471ea45c6a4228f47331c0dd3"
                    >
                        <SpBtn
                            size="3"
                            onClick={() => {
                                navigate(-1);
                            }}
                        >
                            Team D+
                        </SpBtn>
                    </a>
                    <div className="hidden md:contents">
                        <a
                            target="_blank"
                            href="https://docs.google.com/forms/d/e/1FAIpQLSfSN674wDe-jEqCN7yQEOEHhD2nl8aWC1IJLBxzCeJ6eY5miw/viewform"
                        >
                            <SpBtn
                                onClick={() => {
                                    navigate(-1);
                                }}
                            >
                                설문조사 제출하고
                                <br className="md:hidden" /> 스타벅스 커피받기☕
                            </SpBtn>
                        </a>
                    </div>
                </div>
            </Foot>
        </>
    );
};

export default Footer;
