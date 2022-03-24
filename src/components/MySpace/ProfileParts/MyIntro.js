import React from "react";
import { Button, Image, Container } from "../../../elements";

import { useHistory } from "react-router-dom";


const MyIntro = (props) => {
  let history = useHistory();
  return (
    <>

        <div className="grid">
            <div>
                한줄 소개
                <p>아ㅣㄹ너ㅏㅣ런아ㅣ러니러나ㅣ러ㅏㅣ</p>
            </div>
      
</div>

    </>

  );
};

export default MyIntro;