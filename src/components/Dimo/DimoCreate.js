import React from "react";
import { Button, Image, Input, Hashtag } from "../../elements";

import { useHistory, useLocation } from "react-router-dom";



const DimoCreate = () => {
  const location = useLocation();
  const history = useHistory();
  const a = location.pathname

  const status = a.split("/")[3]
 console.log(status)
  if(status === "qna") return (
    <>

               <div className="
               ">
                 <div className="bg-white">
               <div className="w-full bg-white">
                크리에이트 디모 QnA
                <Hashtag />
                제목<Input placeholder="제목을 입력해주세여" />
                </div>

                <div className="col-start-2 row-start-3 col-span-3 w-full">

                <Input textarea placeholder="내용을 입력해주세여" />
                </div>
                <div className="bg-white p-4">
                  파일추가 파일은 복수로 첨부가능하며
                </div>
                <Button>입력 완료!</Button>
                <Button         onClick={() => {
          history.goBack();
        }}>돌아가기!</Button>
                </div>
                </div>

    </>

  );

  if(status === "shared") return (
    <>

    <div className="p-4 bg-slate-200">
    <div className="col-start-2 row-start-2 col-span-3 w-full">
     크리에이트 디모 정보공유
     <Hashtag />
     제목<Input placeholder="제목을 입력해주세여" />
     </div>

     <div className="col-start-2 row-start-3 col-span-3 w-full">

     <Input textarea placeholder="내용을 입력해주세여" />
     </div>
     <div className="bg-white p-4">
       파일추가 파일은 복수로 첨부가능하며
     </div>
     <Button>입력 완료!</Button>
     </div>


</>

  );
  else return (<>
  <div>dk</div>
  </>)
};

export default DimoCreate;