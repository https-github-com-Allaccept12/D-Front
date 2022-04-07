import React, { useEffect, useState } from "react";
import { Button, Title, Subtitle, PageLoadSpinner } from "../../../elements";
import { useNavigate } from "react-router-dom";
import tw from "tailwind-styled-components";
import MyArtWork from "../TabParts/MyArtWork";
import { EditMyArtWork } from "../../../elements";

const Box = tw.div`
flex justify-center items-center flex-col gap-4
`;
const InnerBox = tw.div`
flex justify-center items-center flex-col gap-1
`;

const MainBox = tw.div`
flex justify-center items-center flex-row flex-wrap min-w-fit
mt-10 gap-10 h-full
`;

const count = 1;
const MyPortfolio = (props) => {
    const [time, setTime] = useState(true);

    useEffect(() => {
        const aaa = setTimeout(() => {
            setTime();
        }, 500);
    }, []);
    if (count <= 0)
        return (
            <>
                <div className="w-full h-screen">
                    <Title size="4">대표작품</Title>

                    <div className="flex items-center justify-center w-full bg-white h-96">
                        <Box>
                            <Title size="3">아직 대표작품으로 설정한 작품이 없습니다.</Title>
                            <InnerBox>
                                <Subtitle size="1">대표작품으로 설정해보세요.</Subtitle>
                                <Subtitle size="1">프로필에서 나의 포트폴리오로 노출됩니다.</Subtitle>
                            </InnerBox>
                            <button data-bs-toggle="modal" data-bs-target="#exampleModalXl">
                                <Button icon name="Plus" color="4" size="2">
                                    추가하기
                                </Button>
                            </button>
                        </Box>
                    </div>
                </div>

                <div
                    className="fixed top-0 left-0 hidden w-full h-full overflow-x-hidden overflow-y-auto outline-none modal fade"
                    id="exampleModalXl"
                    tabIndex="-1"
                    aria-labelledby="exampleModalXlLabel"
                    aria-modal="true"
                    role="dialog"
                >
                    <div className="relative w-auto pointer-events-none modal-dialog modal-xl">
                        <div className="relative flex flex-col w-full text-current bg-white border-none rounded-md shadow-lg outline-none pointer-events-auto modal-content bg-clip-padding">
                            <div className="flex items-center justify-between flex-shrink-0 p-4 border-b border-gray-200 modal-header rounded-t-md">
                                <button
                                    type="button"
                                    className="box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 btn-close focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="relative p-4 modal-body">
                                <MyArtWork />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );

    if (count >= 0)
        return (
            <>
                {time === true ? (
                    <PageLoadSpinner />
                ) : (
                    <>
                        <div className="w-full h-full">
                            <Title size="4">대표작품</Title>

                            <MainBox>
                                <EditMyArtWork src="https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201902/18/c86d2756-97e0-40f8-81c0-76b9289c24a2.jpg" />
                                <EditMyArtWork src="https://img.insight.co.kr/static/2019/12/15/700/48706bd31ylm5wq23ef4.jpg" />
                                <EditMyArtWork src="http://www.ecomedia.co.kr/news/data/20210806/p1065604406000371_129_thum.jpg" />
                                <EditMyArtWork src="http://weekly.chosun.com/up_fd/wc_news/2557/bimg_org/2557_70.jpg" />
                            </MainBox>
                        </div>

                        <div
                            className="fixed top-0 left-0 hidden w-full h-full overflow-x-hidden overflow-y-auto outline-none modal fade"
                            id="exampleModalXl"
                            tabIndex="-1"
                            aria-labelledby="exampleModalXlLabel"
                            aria-modal="true"
                            role="dialog"
                        >
                            <div className="relative w-auto pointer-events-none modal-dialog modal-xl">
                                <div className="relative flex flex-col w-full text-current bg-white border-none rounded-md shadow-lg outline-none pointer-events-auto modal-content bg-clip-padding">
                                    <div className="flex items-center justify-between flex-shrink-0 p-4 border-b border-gray-200 modal-header rounded-t-md">
                                        <button
                                            type="button"
                                            className="box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 btn-close focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                        ></button>
                                    </div>
                                    <div className="relative p-4 modal-body">
                                        <MyArtWork />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </>
        );
};
export default MyPortfolio;
