import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DimoFilter, DimoList } from "../components/Dimo";
import tw from "tailwind-styled-components";
import { Title, Button, CategoryMini, Icon, PageLoadSpinner } from "../elements";
import { DimoSlider } from "../components";
import { dimoPageLoad, categoryDimo } from "../redux/modules/dimo";
import { useToggle } from "../hooks";

const SlideBox = tw.div`
row-start-2 col-span-full
`;

const Box = tw.div`
row-start-3
`;

const MobileBtn = tw.button`
bg-dpurple-200  rounded-full p-2 xl:hidden fixed bottom-10 right-5 text-white shadow-md
`;

const Dimo = (props) => {
    const { dimos } = props;

    const location = useLocation();
    const navigate = useNavigate();
    const [lights, SetLight] = useToggle();
    const [lightss, SetLights] = useToggle();

    const a = location.pathname;

    const b = a.split("/")[2];
    const board = b.toUpperCase();
    // console.log(b);
    const category = "uiux";
    const dispatch = useDispatch();
    // console.log(b);
    let account_id = 0;
    // const id_cookie = getCookie("account_id");
    const id_cookie = sessionStorage.getItem("account_id");
    if (id_cookie) {
        account_id = id_cookie;
        // console.log("account_id: ", account_id);
    }
    const visitor_account_id = account_id;

    const goToQNA = () => {
        navigate(`/dimo/qna/uiux`, {
            state: {
                board: "QNA",
                category: "uiux",
            },
        });
        SetLight();
    };
    useEffect(() => {
        const board = b.toUpperCase();
        dispatch(categoryDimo({ category, dispatch, board, visitor_account_id }));
        dispatch(dimoPageLoad({ dispatch, board, visitor_account_id }));
    }, [lights, lightss]);

    const goToINFO = () => {
        navigate(`/dimo/info/uiux`, {
            state: {
                board: "INFO",
                category: "uiux",
            },
        });
        SetLights();
    };

    const goToCreate = () => {
        navigate(`/dimo/create/${b}`, {
            state: {
                title: { b },
            },
        });
    };
    const [time, setTime] = useState(true);

    useEffect(() => {
        const aaa = setTimeout(() => {
            setTime();
        }, 500);
    }, []);

    return (
        <>
            {time === true ? (
                <PageLoadSpinner />
            ) : (
                <>
                    <div className="bg-dgray-200 min-h-screen h-[200rem]">
                        <div className="xl:grid xl:grid-cols-4 ">
                            <div className="flex flex-row p-4 xl:pl-28 2xl:pl-44 gap-3 h-[7rem] justify-start items-center">
                                <Title
                                    size="5"
                                    value="QNA"
                                    onClick={goToQNA}
                                    className="cursor-pointer text-dpurple-200"
                                >
                                    QNA
                                </Title>

                                <Title
                                    size="5"
                                    value="INFO"
                                    onClick={goToINFO}
                                    className="cursor-pointer text-dpurple-200"
                                >
                                    정보공유
                                </Title>
                            </div>
                            <div className="hidden xl:contents">
                                <div className="col-start-4 w-36 xl:mt-10 2xl:ml-32 ">
                                    <Button size="3" onClick={goToCreate}>
                                        글쓰기
                                    </Button>
                                </div>
                            </div>
                            <SlideBox>
                                <DimoSlider list={board} slidedimo={dimos} />
                            </SlideBox>

                            <Box>
                                <div className="top-0 h-[44rem] invisible fixed xl:visible xl:sticky">
                                    <div className=" flex flex-col h-[44rem]">
                                        <div className="flex flex-row justify-end items-end self-end -mt-[1.41rem] w-[18.75rem] h-[44rem]">
                                            <DimoFilter list={b} />
                                        </div>
                                    </div>
                                </div>
                            </Box>

                            <div className="w-full xl:row-start-3 xl:col-start-2 xl:col-end-5">
                                <div className="w-full h-[200rem]">
                                    <DimoList list={b} key="key" />
                                    <CategoryMini list={b} />

                                    <MobileBtn onClick={goToCreate}>
                                        <Icon name="Edit" />
                                    </MobileBtn>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Dimo;
