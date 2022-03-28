import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCookie } from "../shared/cookie";
import axios from "axios";
import { myPageLoad } from "../redux/modules/myPage";
import { useHistory, Link, useLocation } from "react-router-dom";
import { MyPageCategory, MyProfile, MySpaceTab, TopOfProfile } from "../components/MySpace";

const MyPage = (props) => {
  const dispatch = useDispatch();
  let account_id = 0;
  const id_cookie = getCookie("account_id");
  if (id_cookie) {
      account_id = id_cookie;
      console.log("account_id: ", account_id);
  }
  const owner_account_id = account_id;
  useEffect(() => {
    dispatch(myPageLoad({ account_id, owner_account_id, dispatch }))
  }, [dispatch, account_id, owner_account_id]);
  
  const location = useLocation();
  const a = location.pathname;
  const b = a.split("/")[2];

  return (
    <>
      <div className="grid grid-cols-5">
        <div className="w-40 h-full mt-4 md:ml-28 ">
          <MyPageCategory />
        </div>
        {/* 내정보일땐 마이프로필 다른사람정보일땐 디폴리오 각 메뉴를 클릭하면 메뉴 */}
        <TopOfProfile/>
        {/* <div className="col-start-2 col-end-6">
          <div className=" bg-blue-400 h-52 w-[80.625rem]">
            {" "}
            여기에 배경이미지
            <div className="items-center justify-items-center">
              <div className="flex justify-end">팔로잉 팔로워</div>

              <div className="flex flex-col items-center mt-20">
                <Profile size="1" />
                <div className="ml-2">
                  <div className="grid p-1 rounded-lg justify-items-center">
                    <h3 className="text-xl font-medium text-gray-800 font-minB">
                      펭귄 님
                    </h3>
                    <span className="text-sm text-gray-600 font-minB">
                      UX/UI Designer
                    </span>
                    <Button size="3">
                      <span className="text-xs font-min-2"> INTP </span>
                    </Button>

                    <div className="flex flex-row p-1 text-2xl">
                      <Icon name="Time" iconSize="32" />
                      <Icon name="Talk" iconSize="32" />
                      <Icon name="Link" iconSize="32" />
                      <Icon name="Edit" iconSize="32" />
                    </div>
                  </div>
                </div>
              </div>

              <MySpaceTab />
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default MyPage;
