import React from "react";
import { KAKAO_AUTH_URL } from "../../shared/OAuth";
import "./modal.css";
import { Title, Text } from "../../elements";
import kakao from "../../static/icons/kakao_login_medium_wide.png";

export const Modal = (props) => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { open, close, header } = props;

    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <div className={open ? "openModal modals" : "modals"}>
            {open ? (
                <section className="max-w-3xl">
                    <header>
                        {header}{" "}
                        <button className="close" onClick={close}>
                            &times;
                        </button>
                    </header>
                    {/* <main>{props.children}</main> */}
                    <main className="flex justify-center items-center flex-col text-dgray-600 h-full">
                        <>
                            <Title size="3" className="pb-5">
                                디플러스에 오신 것을 환영합니다!
                            </Title>
                            <div className="px-5 flex flex-col items-start justify-center md:items-center">
                                <Text size="1">디플러스의 회원이 되시면</Text>
                                <Text size="1">디플러스가 제공하는 모든 서비스를 간편하게 사용하실 수 있습니다.</Text>
                            </div>
                            <a href={KAKAO_AUTH_URL} className="mx-auto my-12">
                                <img src={kakao} className="rounded-full" />
                            </a>
                        </>
                    </main>
                    {/* <footer>
                        <button className="close" onClick={close}>
                            close
                        </button>
                    </footer> */}
                </section>
            ) : null}
        </div>
    );
};
