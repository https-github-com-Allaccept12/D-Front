import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { myPageLoad } from "../redux/modules/myPage";
import { Button, Title, Icon, ProgressBar, PageLoadSpinner } from "../elements";
import { Link, useLocation } from "react-router-dom";
import {
    CreateMyIntro,
    CreateMySpaceUser,
    CreateMyExp,
    ChangeMyPortfolio,
    CreateMySkill,
    ChangeMyInterests,
} from "../components/MySpace";
import { useTabs } from "../hooks";
import tw from "tailwind-styled-components";
import back_inventor from "../static/images/MyPageImages/back_inventor.svg";
import back_adventure from "../static/images/MyPageImages/back_adventure.svg";
import back_artist from "../static/images/MyPageImages/back_artist.svg";
import back_detail from "../static/images/MyPageImages/back_detail.svg";
import back_harmonious from "../static/images/MyPageImages/back_harmonious.svg";
import back_innovator from "../static/images/MyPageImages/back_innovator.svg";

const BgType = tw.div`
bg-blue-400 h-[28.313rem] w-10/12 mx-auto
`;
const Line = tw.hr`
border border-gray-600 my-5 w-full
`;

const GrayLine = tw.hr`
border border-gray-300 mt-20 mb-6 w-full
`;

const ProgBox = tw.div`
2xl:flex w-[18.75rem] mx-auto flex-col border-2 rounded-lg h-[30.063rem] p-4 ml-4 py-10
gap-4 hidden
`;

const TabBtn = tw.button`
   rounded-full text-base flex flex-row justify-start items-center 
   font-min1 text-left
`;

const Items = tw.div`
flex flex-col justify-center items-center w-full mx-auto 
`;

const ProgBoxMobile = tw.div`
fixed top-0 bg-white opacity-70 2xl:hidden
`;

const EditMySpace = (props) => {
    const dispatch = useDispatch();
    let account_id = 0;
    // const id_cookie = getCookie("account_id");
    const id_cookie = sessionStorage.getItem("account_id");
    if (id_cookie) {
        account_id = id_cookie;
        // console.log("account_id: ", account_id);
    }
    const owner_account_id = account_id;
    useEffect(() => {
        dispatch(myPageLoad({ account_id, owner_account_id, dispatch }));
    }, [dispatch, account_id, owner_account_id]);

    const info = useSelector((state) => state.myPage.myPage);
    const exp = useSelector((state) => state.myPage.history);
    let tendency = "";
    if (info) {
        tendency = info.tendency;
    }
    // const tendency = info.tendency
    const location = useLocation();
    const a = location.pathname;
    const b = a.split("/")[2];

    const array_sample = [
        {
            tab: "?????????",
            content: <CreateMySpaceUser info={info} />,
        },
        {
            tab: "??????",
            content: <CreateMyIntro info={info} />,
        },
        {
            tab: "?????? ??????",
            content: <CreateMyExp info={info} exp={exp} />,
        },
        // {
        //     tab: "???????????????",
        //     content: <ChangeMyPortfolio />,
        // },
        {
            tab: "?????? ??????",
            content: <CreateMySkill info={info} />,
        },
        {
            tab: "?????????",
            content: <ChangeMyInterests />,
        },
    ];

    const { currentItem, changeItem } = useTabs(0, array_sample);
    const [success, setSuccess] = useState(false);
    const [percent, setPercent] = useState(0);

    const makeSuccess = () => {
        setSuccess(true);
    };

    useEffect(() => {
        setPercent(percent + 0.1);
    }, [setSuccess]);

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
                    <div className="grid h-screen grid-row-3">
                        {tendency == "???????????? ?????????" && (
                            <div className="grid items-center justify-items-center relative bg-[#E9EDFF] h-[22.5rem] w-full">
                                <img src={back_inventor} />
                            </div>
                        )}
                        {tendency == "????????? ?????????" && (
                            <div className="grid items-center justify-items-center relative bg-[#FFF7E1] h-[22.5rem] w-full">
                                <img src={back_adventure} />
                            </div>
                        )}
                        {tendency == "????????? ?????????" && (
                            <div className="grid items-center justify-items-center relative bg-[#EDDFFF] h-[22.5rem] w-full">
                                <img src={back_artist} />
                            </div>
                        )}
                        {tendency == "????????? ??????" && (
                            <div className="grid items-center justify-items-center relative bg-[#FEEEE8] h-[22.5rem] w-full">
                                <img src={back_detail} />
                            </div>
                        )}
                        {tendency == "???????????? ?????????" && (
                            <div className="grid items-center justify-items-center relative bg-[#DCF0EC] h-[22.5rem] w-full">
                                <img src={back_harmonious} />
                            </div>
                        )}
                        {tendency == "????????? ?????????" && (
                            <div className="grid items-center justify-items-center relative bg-[#FEEAED] h-[22.5rem] w-full">
                                <img src={back_innovator} />
                            </div>
                        )}

                        <div className="flex flex-row w-full mx-auto xl:w-4/5 2xl:w-2/3">
                            <div className="flex flex-col items-start justify-start w-full mx-auto mt-3">
                                <Title size="4">????????? ??????</Title>

                                <Line />

                                <Items>{currentItem.content}</Items>

                                <GrayLine />
                                <div className="flex flex-row justify-end w-full gap-10">
                                    <Link to="/myspace/myprofile">
                                        <Button size="2" color="2">
                                            ??????????????????
                                        </Button>
                                    </Link>
                                    {/* <Button size="2" color="1">
                                ????????????
                            </Button> */}
                                </div>
                            </div>

                            <ProgBox>
                                {/* <button
            onClick={() =>
              setPercent(percent + 0.1)
            }
          >
            Add 10%
          </button> */}
                                <ProgressBar width={240} percent={percent} />
                                <TabBtn
                                    onClick={() => {
                                        changeItem([0]);
                                    }}
                                    className={success === true ? `text-dgray-600` : `text-dgray-400`}
                                >
                                    {success === true ? (
                                        <Icon
                                            name="Success"
                                            iconSize="16"
                                            className="mr-3 text-white rounded-full bg-dpurple-200"
                                        />
                                    ) : (
                                        <Icon
                                            name="Cancel"
                                            iconSize="16"
                                            className="mr-3 text-white rounded-full bg-dgray-400"
                                        />
                                    )}

                                    {array_sample[0].tab}
                                </TabBtn>

                                <TabBtn
                                    onClick={() => {
                                        changeItem([1]);
                                    }}
                                    className={success === true ? `text-dgray-600` : `text-dgray-400`}
                                >
                                    {success === true ? (
                                        <Icon
                                            name="Success"
                                            iconSize="16"
                                            className="mr-3 text-white rounded-full bg-dpurple-200"
                                        />
                                    ) : (
                                        <Icon
                                            name="Cancel"
                                            iconSize="16"
                                            className="mr-3 text-white rounded-full bg-dgray-400"
                                        />
                                    )}
                                    {array_sample[1].tab}
                                </TabBtn>

                                <TabBtn
                                    onClick={() => {
                                        changeItem([2]);
                                    }}
                                    className={success === true ? `text-dgray-600` : `text-dgray-400`}
                                >
                                    {success === true ? (
                                        <Icon
                                            name="Success"
                                            iconSize="16"
                                            className="mr-3 text-white rounded-full bg-dpurple-200"
                                        />
                                    ) : (
                                        <Icon
                                            name="Cancel"
                                            iconSize="16"
                                            className="mr-3 text-white rounded-full bg-dgray-400"
                                        />
                                    )}
                                    {array_sample[2].tab}
                                </TabBtn>

                                <TabBtn
                                    onClick={() => {
                                        changeItem([3]);
                                    }}
                                    className={success === true ? `text-dgray-600` : `text-dgray-400`}
                                >
                                    {success === true ? (
                                        <Icon
                                            name="Success"
                                            iconSize="16"
                                            className="mr-3 text-white rounded-full bg-dpurple-200"
                                        />
                                    ) : (
                                        <Icon
                                            name="Cancel"
                                            iconSize="16"
                                            className="mr-3 text-white rounded-full bg-dgray-400"
                                        />
                                    )}
                                    {array_sample[3].tab}
                                </TabBtn>

                                <TabBtn
                                    success={success}
                                    onClick={() => {
                                        changeItem([4]);
                                    }}
                                    className={success === true ? `text-dgray-600` : `text-dgray-400`}
                                >
                                    {success === true ? (
                                        <Icon
                                            name="Success"
                                            iconSize="16"
                                            className="mr-3 text-white rounded-full bg-dpurple-200"
                                        />
                                    ) : (
                                        <Icon
                                            name="Cancel"
                                            iconSize="16"
                                            className="mr-3 text-white rounded-full bg-dgray-400"
                                        />
                                    )}
                                    {array_sample[4].tab}
                                </TabBtn>

                                {/* <TabBtn
                            onClick={() => {
                                changeItem([5]);
                            }}
                            className={success === true ? `text-dgray-600` : `text-dgray-400`}
                        >
                            {success === true ? (
                                <Icon
                                    name="Success"
                                    iconSize="16"
                                    className="mr-3 text-white rounded-full bg-dpurple-200"
                                />
                            ) : (
                                <Icon
                                    name="Cancel"
                                    iconSize="16"
                                    className="mr-3 text-white rounded-full bg-dgray-400"
                                />
                            )}
                            {array_sample[5].tab}
                        </TabBtn> */}
                            </ProgBox>
                        </div>
                    </div>

                    <ProgBoxMobile>
                        <ProgressBar width={240} percent={percent} />
                        <TabBtn
                            onClick={() => {
                                changeItem([0]);
                            }}
                            className={success === true ? `text-dgray-600` : `text-dgray-400`}
                        >
                            {success === true ? (
                                <Icon
                                    name="Success"
                                    iconSize="16"
                                    className="mr-3 text-white rounded-full bg-dpurple-200"
                                />
                            ) : (
                                <Icon
                                    name="Cancel"
                                    iconSize="16"
                                    className="mr-3 text-white rounded-full bg-dgray-400"
                                />
                            )}

                            {array_sample[0].tab}
                        </TabBtn>

                        <TabBtn
                            onClick={() => {
                                changeItem([1]);
                            }}
                            className={success === true ? `text-dgray-600` : `text-dgray-400`}
                        >
                            {success === true ? (
                                <Icon
                                    name="Success"
                                    iconSize="16"
                                    className="mr-3 text-white rounded-full bg-dpurple-200"
                                />
                            ) : (
                                <Icon
                                    name="Cancel"
                                    iconSize="16"
                                    className="mr-3 text-white rounded-full bg-dgray-400"
                                />
                            )}
                            {array_sample[1].tab}
                        </TabBtn>

                        <TabBtn
                            onClick={() => {
                                changeItem([2]);
                            }}
                            className={success === true ? `text-dgray-600` : `text-dgray-400`}
                        >
                            {success === true ? (
                                <Icon
                                    name="Success"
                                    iconSize="16"
                                    className="mr-3 text-white rounded-full bg-dpurple-200"
                                />
                            ) : (
                                <Icon
                                    name="Cancel"
                                    iconSize="16"
                                    className="mr-3 text-white rounded-full bg-dgray-400"
                                />
                            )}
                            {array_sample[2].tab}
                        </TabBtn>

                        <TabBtn
                            onClick={() => {
                                changeItem([3]);
                            }}
                            className={success === true ? `text-dgray-600` : `text-dgray-400`}
                        >
                            {success === true ? (
                                <Icon
                                    name="Success"
                                    iconSize="16"
                                    className="mr-3 text-white rounded-full bg-dpurple-200"
                                />
                            ) : (
                                <Icon
                                    name="Cancel"
                                    iconSize="16"
                                    className="mr-3 text-white rounded-full bg-dgray-400"
                                />
                            )}
                            {array_sample[3].tab}
                        </TabBtn>

                        <TabBtn
                            success={success}
                            onClick={() => {
                                changeItem([4]);
                            }}
                            className={success === true ? `text-dgray-600` : `text-dgray-400`}
                        >
                            {success === true ? (
                                <Icon
                                    name="Success"
                                    iconSize="16"
                                    className="mr-3 text-white rounded-full bg-dpurple-200"
                                />
                            ) : (
                                <Icon
                                    name="Cancel"
                                    iconSize="16"
                                    className="mr-3 text-white rounded-full bg-dgray-400"
                                />
                            )}
                            {array_sample[4].tab}
                        </TabBtn>

                        {/* <TabBtn
                    onClick={() => {
                        changeItem([5]);
                    }}
                    className={success === true ? `text-dgray-600` : `text-dgray-400`}
                >
                    {success === true ? (
                        <Icon name="Success" iconSize="16" className="mr-3 text-white rounded-full bg-dpurple-200" />
                    ) : (
                        <Icon name="Cancel" iconSize="16" className="mr-3 text-white rounded-full bg-dgray-400" />
                    )}
                    {array_sample[5].tab}
                </TabBtn> */}
                    </ProgBoxMobile>
                </>
            )}
        </>
    );
};

export default EditMySpace;
