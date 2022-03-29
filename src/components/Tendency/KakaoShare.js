import React, { useEffect } from "react";
import D from "../../static/images/SNS/SNS_color.svg";

const KakaoShare = () => {
    const url = window.location.href; //현재 url가져오기
    useEffect(() => {
        initKakao(); //
    }, []);

    //자바스크립트키로 카카오 init
    const initKakao = () => {
        if (window.Kakao) {
            const kakao = window.Kakao;
            if (!kakao.isInitialized()) {
                kakao.init(process.env.REACT_APP_KAKAO_TOKEN);
            }
        }
    };

    //버튼을 누르면 실행되는 함수
    const shareKakao = () => {
        //이부분이 매우 헷갈림 여러 사이트를 참고했는데 이 sendDefault부분을 잘 봐야한다.
        window.Kakao.Link.sendDefault({
            objectType: "feed",
            content: {
                title: "Dplus 성향테스트",
                description: "#심리테스트 #재밌음 #심테 #성향테스트",
                imageUrl:
                    "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fceac33ae-326f-4b1e-b7bf-3ff9a028f413%2F%E1%84%85%E1%85%A9%E1%84%83%E1%85%B5%E1%86%BC.png?table=block&id=24dc1b2c-a31f-4f4b-91a7-4f178a87b1f2&spaceId=e553479e-a7cd-4601-9ce5-0b1423c2fbd3&width=2000&userId=fbbb2188-0e47-49be-b0a0-2f704de9193f&cache=v2",
                link: {
                    mobileWebUrl: url,
                    webUrl: url,
                },
            },
            social: {
                likeCount: 286,
                commentCount: 45,
                sharedCount: 845,
            },
            buttons: [
                {
                    title: "웹으로 보기",
                    link: {
                        mobileWebUrl: url,
                        webUrl: url,
                    },
                },
                {
                    title: "앱으로 보기",
                    link: {
                        mobileWebUrl: url,
                        webUrl: url,
                    },
                },
            ],
        });
    };

    return (
        <>
            <img className="w-12 cursor-pointer" onClick={shareKakao} src={D} alt="" />
        </>
    );
};

export default KakaoShare;
