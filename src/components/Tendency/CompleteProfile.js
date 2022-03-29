import React from "react";
import { Button, Title, Text } from "../../elements";
import { useHistory, Link } from "react-router-dom";
import celebration from "../../static/images/celebration.svg";
import { FakeHeader } from "../../NavComponents";
import tw from "tailwind-styled-components";

const Profile = tw.div`
bg-gradient-to-r from-[#9262F7] to-[#7681FB] absolute top-0 w-full h-[100rem]
`;

const Cong = tw.div`
md:w-full lg:2/3 xl:w-1/2 py-28 mt-44 text-center bg-white rounded-md xl:mx-auto
`;

const CompleteProfile = (props) => {
    let history = useHistory();
    const toHome = (e) => {
        window.location.href = "/";
    };

    return (
        <>
            <FakeHeader />
            <Profile>
                <Cong>
                    <div className="grid place-content-center">
                        <img src={celebration} />
                    </div>
                    <br />
                    <Title size="3">프로필 설정이 완료되었어요.</Title>
                    <br />
                    <Text size="1">디플러스와 함께 디자이너로서의</Text>
                    <Text size="1">여정에 특별함을 더해보아요♥</Text>
                    <div className="grid mt-10 place-items-center">
                        <Button size="2" color="1" onClick={toHome}>
                            홈으로 가기
                        </Button>
                    </div>
                </Cong>
            </Profile>
        </>
    );
};

export default CompleteProfile;
