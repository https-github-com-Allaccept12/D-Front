import React from "react";
import { Button } from "../../elements";
import { useHistory, Link } from "react-router-dom";
import celebration from "../../static/images/celebration.svg";

const CompleteProfile = (props) => {
  let history = useHistory();
  const toHome = (e) => {
    history.push("/");
  };

  return (
    <div className="bg-gradient-to-r from-[#9262F7] to-[#7681FB] grid place-items-center w-full h-screen pb-20">
      <div className="grid row-start-1 py-10"></div>
      <div className="grid w-1/2 row-start-2 py-20 mt-10 text-center bg-white rounded-md">
        <div className="grid place-content-center">
          <img src={celebration} />
        </div>
        <br />
        <p className="text-2xl font-bold">기본 설정이 완료되었어요.</p>
        <br />
        <p>앞으로 디플러스와 함께 어쩌구 저쩌구</p>
        <p>어쩌구 저쩌구 어쩌구 저쩌구♥</p>
        <div className="grid mt-10 place-items-center">
          <Button size="2" color="1" onClick={toHome}>
            홈으로 가기
          </Button>
        </div>
      </div>
      <div className="grid row-start-3 py-10"></div>
    </div>
  );
};

export default CompleteProfile;
