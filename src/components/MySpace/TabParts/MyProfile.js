import React, { useEffect, Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getCookie } from "../../../shared/cookie";
import { myPageLoad } from "../../../redux/modules/myPage";
import { useHistory, Link } from "react-router-dom";
import { useToggle } from "../../../hooks";
import { MySpaceUser, MyExp, MyPortfolio, MySkill, MyTimeLine, MyIntro } from "..";

// 한번에 다 보여주기
const MyProfile = (props) => {
    const location = useLocation();
    // const dispatch = useDispatch();
    // let account_id = 0;
    // const id_cookie = getCookie("account_id");
    // if (id_cookie) {
    //     account_id = id_cookie;
    //     console.log("account_id: ", account_id);
    // }
    // const owner_account_id = account_id;
    // useEffect(() => {
    //   dispatch(myPageLoad({ account_id, owner_account_id, dispatch }))
    // }, [dispatch, account_id, owner_account_id]);

    // const info = useSelector(state => state.myPage.myPage);
    const { info, exp, feed } = props;
    console.log(info);
    console.log(exp);
    console.log(feed);
    return (
        <>
            <Suspense fallback={<h1>Loading..</h1>}>
                {info ? (
                    <MyIntro info={info} />
                ) : (
                    <>
                        <p>소개를 올려보세요!</p>
                    </>
                )}
                {info && <MySkill info={info} />}
                <MyPortfolio feed={feed} />
                {exp && <MyExp exp={exp} />}
            </Suspense>
            {/* <MyTimeLine info={info} /> */}
        </>
    );
};

export default MyProfile;
