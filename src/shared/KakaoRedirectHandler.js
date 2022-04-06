import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { kakaoLoginAxios } from "../redux/modules/user";
import { kakaoSlice } from "../redux/modules/temp";
import PageLoadSpinner from "../elements/Common/PageLoadSpinner";

const KakaoRedirectHandler = (props) => {
    const dispatch = useDispatch();
    // const navigate = useNavigate();

    const code = new URL(window.location.href).searchParams.get("code");

    useEffect(() => {
        // dispatch(kakaoLoginAxios({code, history}))
        dispatch(kakaoSlice({ code, history, dispatch }));
    });
    // if (sessionStorage.getItem("access_token")) {
    //   setCookie("access_token", sessionStorage.getItem("access_token"), 7);
    //   setCookie("refresh_token", sessionStorage.getItem("access_token"), 7);
    // }
    // history.replace("/");

    return (
        <>
            <PageLoadSpinner />
        </>
    );
};

export default KakaoRedirectHandler;
