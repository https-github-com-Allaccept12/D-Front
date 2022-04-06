import React, { useState, useEffect } from "react";
import Button from "./TendencyButton";
import tw from "tailwind-styled-components";
import { Title, Subtitle, Text } from "../../elements";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FacebookShareButton, FacebookIcon, TwitterIcon, TwitterShareButton } from "react-share";

import { useDispatch, useSelector } from "react-redux";
import { CreateTendency } from "../../redux/modules/tendency.js";
import { CopyToClipboard } from "react-copy-to-clipboard";
import KakaoShare from "./KakaoShare";
import Adventure from "../../static/images/Result/Adventure.png";
import Artist from "../../static/images/Result/Artist.png";
import Detail from "../../static/images/Result/Detail.png";
import Harmonious from "../../static/images/Result/Harmonious.png";
import Innovator from "../../static/images/Result/Innovator.png";
import Inventor from "../../static/images/Result/Inventor.png";
import Spinner from "./Spinner";

import C from "../../static/images/SNS/SNS_color-3.svg";

import AdventureIcon from "../../static/images/ResultIcon/Adventure.svg";
import ArtistIcon from "../../static/images/ResultIcon/Artist.svg";
import DetailIcon from "../../static/images/ResultIcon/Detail.svg";
import HarmoniousIcon from "../../static/images/ResultIcon/Harmonious.svg";
import InnovatorIcon from "../../static/images/ResultIcon/Innovator.svg";
import InventorIcon from "../../static/images/ResultIcon/Inventor.svg";

const Flex = tw.div`
mx-auto flex flex-col justify-center items-center
md:p-10 w-full 
`;
const InnerFlex = tw.div`
w-full md:w-[46.25rem] bg-white flex flex-col justify-center items-center
p-10 md:px-24 gap-1 rounded-lg shadow-lg
`;
const LaLa = tw.li`
  font-min1 text-xl sm:text-2xl text-gray-700
`;
const La = tw.p`
  font-min3 text-lg sm:text-xl text-dgray-400 mt-1
`;
const Types = tw.p`
 font-min1 border rounded-full pl-5 pr-4 text-sm leading-tight py-1 mb-5 flex flex-row justify-center items-center gap-2 mt-8
 
`;
const Result = tw.img`
overflow-hidden object-cover object-center rounded-lg
bg-white
`;
const CardBox = tw.div`
flex flex-row mt-4 mb-8 gap-4
`;

const Cover = tw.div`
absolute top-0 w-full
`;

const TendencyResult = ({ history, match }) => {
    const currentUrl = window.location.href;
    const location = useLocation();
    const navigate = useNavigate();
    const token = sessionStorage.getItem("access_token");
    const [is_loaded, setIsLoaded] = useState(false);
    const [myTendency, setMyTendency] = useState("");
    const fromMyPage = location.state.from;
    console.log(location.state);
    console.log(fromMyPage);

    useEffect(() => {
        setMyTendency(location.state.title.tendency);
    }, []);

    useEffect(() => {
        if (fromMyPage) {
            let timer = setTimeout(() => {
                setIsLoaded(true);
            }, 0);
        } else {
            let timer = setTimeout(() => {
                setIsLoaded(true);
            }, 2000);
        }
    });

    const Back = () => {
        navigate(-1);
    };

    const dispatch = useDispatch();
    const SendTendency = () => {
        const tendency = { tendency: myTendency };
        console.log(tendency);
        dispatch(CreateTendency({ tendency, token }));

        navigate("/MyInterests", { replace: true });
    };

    if (myTendency === "디테일 장인")
        return (
            <>
                <Cover>
                    <Flex className="bg-gradient-to-b from-[#F5C3AF] to-white">
                        <InnerFlex>
                            <Types className="border-[#F5C3AF] text-[#F5C3AF]">
                                TYPE <img src={DetailIcon} alt="" />
                            </Types>
                            <Subtitle size="4" className="text-gray-400">
                                1px의 여백도 놓치지 않는 섬세함
                            </Subtitle>
                            <Title size="2" className="text-[#F5C3AF]">
                                {myTendency}
                            </Title>
                            <Result src={Detail} alt="" />
                            <Subtitle size="3" className="text-[#F5C3AF]">
                                #책임감 #완벽주의 #안정추구 #개인지향
                            </Subtitle>

                            <ul className="list-disc marker:text-[#F5C3AF] space-y-12 mb-12">
                                <LaLa>
                                    어떤일이든 계획적으로
                                    <La>세세하고 체계적으로 일정을 짜고 계획을 세워서 일하는걸 좋아해요</La>
                                </LaLa>
                                <LaLa>
                                    1px의 차이를 기가 막히게 찾아내요
                                    <La>남들이 놓치기 쉬운 디테일을 보는 꼼꼼함을 가지고 있어요</La>
                                </LaLa>
                                <LaLa>
                                    모든상황을 다 고려해야해
                                    <La>여러가지 경우의 수를 생각해 항상 미래의 상황에 대비해요</La>
                                </LaLa>
                                <LaLa>
                                    한번맡은 일은 끝까지
                                    <La>단단한 구석이 있어 책임감이 매우 강해요</La>
                                </LaLa>
                            </ul>

                            <Text size="2">테스트 공유하기</Text>
                            <CardBox>
                                <KakaoShare />
                                <FacebookShareButton url={currentUrl}>
                                    <FacebookIcon size={48} round={true} borderRadius={24}></FacebookIcon>
                                </FacebookShareButton>
                                <TwitterShareButton url={currentUrl}>
                                    <TwitterIcon size={48} round={true} borderRadius={24}></TwitterIcon>
                                </TwitterShareButton>
                                <CopyToClipboard text={currentUrl}>
                                    <img
                                        className="w-12 cursor-pointer"
                                        onClick={() => alert("주소가 복사되었습니다!")}
                                        src={C}
                                        alt=""
                                    />
                                </CopyToClipboard>
                            </CardBox>
                            {fromMyPage ? (
                                <Button size="3" onClick={Back} color="4" className="mb-[0.75rem]">
                                    확인
                                </Button>
                            ) : (
                                <>
                                    {/* <Link to="/">
                                        <Button size="3" color="4" className="mb-[0.75rem]">
                                            D PLUS 홈으로
                                        </Button>
                                    </Link> */}
                                    <Button size="3" color="4" onClick={SendTendency}>
                                        다음
                                    </Button>
                                </>
                            )}
                        </InnerFlex>
                    </Flex>
                    {!is_loaded && <Spinner />}
                </Cover>
            </>
        );

    if (myTendency === "대담한 혁신가")
        return (
            <>
                <Cover>
                    <Flex className="bg-gradient-to-b from-[#DB4A60] to-white">
                        <InnerFlex>
                            <Types className="border-[#DB4A60] text-[#DB4A60]">
                                TYPE <img src={InnovatorIcon} alt="" />
                            </Types>
                            <Subtitle size="4" className="text-gray-400">
                                한계를 뛰어넘는 문제 해결력
                            </Subtitle>
                            <Title size="2" className="text-[#DB4A60]">
                                {myTendency}
                            </Title>
                            <Result src={Innovator} alt="" />
                            <Subtitle size="3" className=" text-[#DB4A60]">
                                #추진력 #해결사 #도전추구 #팀지향
                            </Subtitle>

                            <ul className="list-disc marker:text-[#DB4A60] space-y-12 mb-12">
                                <LaLa>
                                    논리적인 성격과 창의성이 만나면?
                                    <La>남들이 고민할때 빠르게 해결책을 제시해줘요</La>
                                </LaLa>
                                <LaLa>
                                    승부사 기질이 있어요
                                    <La>어려운 문제를 전략적으로 해결할 수 있고, 복잡한 문제를 즐기는 편이에요</La>
                                </LaLa>
                                <LaLa>
                                    불도저같은 추진력!
                                    <La>효율적인 방법을 계획해서 실행에 옮겨요</La>
                                </LaLa>
                                <LaLa>
                                    내 인생은 곧! 목표를 달성하는 것
                                    <La>결단력과 통솔력이 있어 하고자 하는 일은 어떻게든 해내요</La>
                                </LaLa>
                            </ul>

                            <Text size="2">테스트 공유하기</Text>
                            <CardBox>
                                <KakaoShare />
                                <FacebookShareButton url={currentUrl}>
                                    <FacebookIcon size={48} round={true} borderRadius={24}></FacebookIcon>
                                </FacebookShareButton>
                                <TwitterShareButton url={currentUrl}>
                                    <TwitterIcon size={48} round={true} borderRadius={24}></TwitterIcon>
                                </TwitterShareButton>
                                <CopyToClipboard text={currentUrl}>
                                    <img
                                        className="w-12 cursor-pointer"
                                        onClick={() => alert("주소가 복사되었습니다!")}
                                        src={C}
                                        alt=""
                                    />
                                </CopyToClipboard>
                            </CardBox>
                            {fromMyPage ? (
                                <Button size="3" onClick={Back} color="4" className="mb-[0.75rem]">
                                    확인
                                </Button>
                            ) : (
                                <>
                                    {/* <Link to="/">
                                        <Button size="3" color="4" className="mb-[0.75rem]">
                                            D PLUS 홈으로
                                        </Button>
                                    </Link> */}
                                    <Button size="3" color="4" onClick={SendTendency}>
                                        다음
                                    </Button>
                                </>
                            )}
                        </InnerFlex>
                        {!is_loaded && <Spinner />}
                    </Flex>
                </Cover>
            </>
        );

    if (myTendency === "꿈꾸는 예술가")
        return (
            <>
                <Cover>
                    <Flex className="bg-gradient-to-b from-[#9262F7] to-white">
                        <InnerFlex>
                            <Types className="border-[#9262F7] text-[#9262F7]">
                                TYPE <img src={ArtistIcon} alt="" />
                            </Types>
                            <Subtitle size="4" className="text-gray-400">
                                저너머를 바라보는 남다른 시각
                            </Subtitle>
                            <Title size="2" className="text-[#9262F7]">
                                {myTendency}
                            </Title>
                            <Result src={Artist} alt="" />
                            <Subtitle size="3" className=" text-[#9262F7]">
                                #이상주의 #통찰력 #안정추구 #개인지향
                            </Subtitle>

                            <ul className="list-disc marker:text-[#9262F7] space-y-12 mb-12">
                                <LaLa>
                                    깊은 통찰력을 가진 관찰자
                                    <La>넓은 시야와 사고로 문제를 창의적으로 시도하는 편이에요</La>
                                </LaLa>
                                <LaLa>
                                    가치 있다 생각하는 일에 몰빵!
                                    <La>자신의 가치관과 이상을 표현할 수 있는 일이라면 한없이 헌신적이에요</La>
                                </LaLa>
                                <LaLa>
                                    세상은 아름답고 재밌는 것은 많아
                                    <La>다양한 상황과 새로운 아이디어에 선입견 없이 열려있어요</La>
                                </LaLa>
                                <LaLa>
                                    오늘도 재밌는 상상이었다
                                    <La>철학, 종교, 심리학 등에 호기심이 많고, 상상력을 자극하는 일을 좋아해요</La>
                                </LaLa>
                            </ul>

                            <Text size="2">테스트 공유하기</Text>
                            <CardBox>
                                <KakaoShare />
                                <FacebookShareButton url={currentUrl}>
                                    <FacebookIcon size={48} round={true} borderRadius={24}></FacebookIcon>
                                </FacebookShareButton>
                                <TwitterShareButton url={currentUrl}>
                                    <TwitterIcon size={48} round={true} borderRadius={24}></TwitterIcon>
                                </TwitterShareButton>
                                <CopyToClipboard text={currentUrl}>
                                    <img
                                        className="w-12 cursor-pointer"
                                        onClick={() => alert("주소가 복사되었습니다!")}
                                        src={C}
                                        alt=""
                                    />
                                </CopyToClipboard>
                            </CardBox>
                            {fromMyPage ? (
                                <Button size="3" onClick={Back} color="4" className="mb-[0.75rem]">
                                    확인
                                </Button>
                            ) : (
                                <>
                                    {/* <Link to="/">
                                        <Button size="3" color="4" className="mb-[0.75rem]">
                                            D PLUS 홈으로
                                        </Button>
                                    </Link> */}
                                    <Button size="3" color="4" onClick={SendTendency}>
                                        다음
                                    </Button>
                                </>
                            )}
                        </InnerFlex>
                    </Flex>
                    {!is_loaded && <Spinner />}
                </Cover>
            </>
        );

    if (myTendency === "창의적인 발명가")
        return (
            <>
                <Cover>
                    <Flex className="bg-gradient-to-b from-[#5876FF] to-white">
                        <InnerFlex>
                            <Types className="border-[#5876FF] text-[#5876FF]">
                                TYPE <img src={InventorIcon} alt="" />
                            </Types>
                            <Subtitle size="4" className="text-gray-400">
                                넘치는 호기심의 타오르는 열정
                            </Subtitle>
                            <Title size="2" className="text-[#5876FF]">
                                {myTendency}
                            </Title>
                            <Result src={Inventor} alt="" />
                            <Subtitle size="3" className="text-[#5876FF]">
                                #현실주의 #논리력 #도전주의 #개인지향
                            </Subtitle>

                            <ul className="list-disc marker:text-[#5876FF] space-y-12 mb-12">
                                <LaLa>
                                    원인 없는 결과는 없다!
                                    <La>높은 통찰력으로 근본적인 원인을 분석하고자 해요</La>
                                </LaLa>
                                <LaLa>
                                    호기심 천국
                                    <La>시대의 흐름에 민감하고 일어나는 현상에 호기심이 많아요</La>
                                </LaLa>
                                <LaLa>
                                    틀에 박힌 방법은 NO!
                                    <La>내 기술과 능력을 발전시킬 수 있는 새로운 방식을 좋아해요</La>
                                </LaLa>
                                <LaLa>
                                    도대체 이유가 뭔데!
                                    <La>이유가 궁금해! 이유를 모르면 궁금해서 견딜 수 없어요</La>
                                </LaLa>
                            </ul>

                            <Text size="2">테스트 공유하기</Text>
                            <CardBox>
                                <KakaoShare />
                                <FacebookShareButton url={currentUrl}>
                                    <FacebookIcon size={48} round={true} borderRadius={24}></FacebookIcon>
                                </FacebookShareButton>
                                <TwitterShareButton url={currentUrl}>
                                    <TwitterIcon size={48} round={true} borderRadius={24}></TwitterIcon>
                                </TwitterShareButton>
                                <CopyToClipboard text={currentUrl}>
                                    <img
                                        className="w-12 cursor-pointer"
                                        onClick={() => alert("주소가 복사되었습니다!")}
                                        src={C}
                                        alt=""
                                    />
                                </CopyToClipboard>
                            </CardBox>
                            {fromMyPage ? (
                                <Button size="3" onClick={Back} color="4" className="mb-[0.75rem]">
                                    확인
                                </Button>
                            ) : (
                                <>
                                    {/* <Link to="/">
                                        <Button size="3" color="4" className="mb-[0.75rem]">
                                            D PLUS 홈으로
                                        </Button>
                                    </Link> */}
                                    <Button size="3" color="5" onClick={SendTendency}>
                                        다음
                                    </Button>
                                </>
                            )}
                        </InnerFlex>
                    </Flex>
                    {!is_loaded && <Spinner />}
                </Cover>
            </>
        );

    if (myTendency === "명랑한 모험가")
        return (
            <>
                <Cover>
                    <Flex className="bg-gradient-to-b from-[#FED263] to-white">
                        <InnerFlex>
                            <Types className="border-[#FED263] text-[#FED263]">
                                TYPE <img src={AdventureIcon} alt="" />
                            </Types>
                            <Subtitle size="4" className="text-gray-400">
                                톡톡 튀는 아이디어와 에너지
                            </Subtitle>
                            <Title size="2" className="text-[#FED263]">
                                {myTendency}
                            </Title>
                            <Result src={Adventure} alt="" />
                            <Subtitle size="3" className="text-[#FED263]">
                                #아이디어 #에너지 #도전추구 #팀지향
                            </Subtitle>

                            <ul className="list-disc marker:text-[#FED263] space-y-12 mb-12">
                                <LaLa>
                                    짜릿해, 재밌는게 최고야!
                                    <La>내가 좋아하고, 하고 싶은 일에는 엄청난 에너지의 열정이 뿜어져 나와요!</La>
                                </LaLa>
                                <LaLa>
                                    흥미로운 일은 어디에나 있어요
                                    <La>단조로운 일상 속에서도 재밌는 것, 흥미로운 것을 탐색하는 편이에요</La>
                                </LaLa>
                                <LaLa>
                                    에너지 넘치는 아이디어뱅크
                                    <La>자유로운 사고로 색다른 아이디어가 언제나 가득해요</La>
                                </LaLa>
                                <LaLa>
                                    적응력 천재
                                    <La>즉흥적인 새로운 일에도 두려움 없이 잘 적응해요</La>
                                </LaLa>
                            </ul>

                            <Text size="2">테스트 공유하기</Text>
                            <CardBox>
                                <KakaoShare />
                                <FacebookShareButton url={currentUrl}>
                                    <FacebookIcon size={48} round={true} borderRadius={24}></FacebookIcon>
                                </FacebookShareButton>
                                <TwitterShareButton url={currentUrl}>
                                    <TwitterIcon size={48} round={true} borderRadius={24}></TwitterIcon>
                                </TwitterShareButton>
                                <CopyToClipboard text={currentUrl}>
                                    <img
                                        className="w-12 cursor-pointer"
                                        onClick={() => alert("주소가 복사되었습니다!")}
                                        src={C}
                                        alt=""
                                    />
                                </CopyToClipboard>
                            </CardBox>
                            {fromMyPage ? (
                                <Button size="3" onClick={Back} color="4" className="mb-[0.75rem]">
                                    확인
                                </Button>
                            ) : (
                                <>
                                    {/* <Link to="/">
                                        <Button size="3" color="4" className="mb-[0.75rem]">
                                            D PLUS 홈으로
                                        </Button>
                                    </Link> */}
                                    <Button size="3" color="4" onClick={SendTendency}>
                                        다음
                                    </Button>
                                </>
                            )}
                        </InnerFlex>
                    </Flex>
                    {!is_loaded && <Spinner />}
                </Cover>
            </>
        );

    if (myTendency === "부드러운 중재자")
        return (
            <>
                <Cover>
                    <Flex className="bg-gradient-to-b from-[#1ABC9C] to-white">
                        <InnerFlex>
                            <Types className="border-[#1ABC9C] text-[#1ABC9C]">
                                TYPE <img src={HarmoniousIcon} alt="" />
                            </Types>
                            <Subtitle size="4" className="text-gray-400">
                                모든 것을 조화롭게 만드는 이해력
                            </Subtitle>
                            <Title size="2" className="text-[#1ABC9C]">
                                {myTendency}
                            </Title>
                            <Result src={Harmonious} alt="" />
                            <Subtitle size="3" className=" text-[#1ABC9C]">
                                #열정적 #공감능력 #도전추구 #팀지향
                            </Subtitle>

                            <ul className="list-disc marker:text-[#1ABC9C] space-y-12 mb-12">
                                <LaLa>
                                    타고난 커뮤니케이터! 긍정의 힘
                                    <La>뛰어난 의사소통능력으로 사람들로부터 협력을 이끌어 내는 에너지가 있어요</La>
                                </LaLa>
                                <LaLa>
                                    같이의 가치! 중요한건 함께 성장하는 것
                                    <La>사람들에게 직접적으로 도움이 되고, 선한 영향력을 가지고 싶어해요</La>
                                </LaLa>
                                <LaLa>
                                    새로운 가능성을 찾는 대범한 열정러
                                    <La>
                                        새로운 일에 강한 추진력으로 도전하기를 좋아하고 목표를 달성하려는 욕구가 강해요
                                    </La>
                                </LaLa>
                                <LaLa>
                                    숲속에 숨겨진 보물을 찾는 자
                                    <La>행위와 아이디어로부터 큰 그림을 보고 숨은 뜻을 파악하는 능력이 있어요 </La>
                                </LaLa>
                            </ul>

                            <Text size="2">테스트 공유하기</Text>
                            <CardBox>
                                <KakaoShare />
                                <FacebookShareButton url={currentUrl}>
                                    <FacebookIcon size={48} round={true} borderRadius={24}></FacebookIcon>
                                </FacebookShareButton>
                                <TwitterShareButton url={currentUrl}>
                                    <TwitterIcon size={48} round={true} borderRadius={24}></TwitterIcon>
                                </TwitterShareButton>
                                <CopyToClipboard text={currentUrl}>
                                    <img
                                        className="w-12 cursor-pointer"
                                        onClick={() => alert("주소가 복사되었습니다!")}
                                        src={C}
                                        alt=""
                                    />
                                </CopyToClipboard>
                            </CardBox>
                            {fromMyPage ? (
                                <Button size="3" onClick={Back} color="4" className="mb-[0.75rem]">
                                    확인
                                </Button>
                            ) : (
                                <>
                                    {/* <Link to="/">
                                        <Button size="3" color="4" className="mb-[0.75rem]">
                                            D PLUS 홈으로
                                        </Button>
                                    </Link> */}
                                    <Button size="3" color="4" onClick={SendTendency}>
                                        다음
                                    </Button>
                                </>
                            )}
                        </InnerFlex>
                    </Flex>
                    {!is_loaded && <Spinner />}
                </Cover>
            </>
        );
    else {
        return null;
    }
};

export default TendencyResult;
