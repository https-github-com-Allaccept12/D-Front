import React from "react";
import { Button } from "../elements";

import { Link } from "react-router-dom";
import { MyPortfolio, MySkill } from "../components/MySpace";
import { CreateMyIntro, CreateMySpaceUser, CreateMyExp } from "../components/MySpace";
import { useTabs } from "../hooks";
import { MyInterests } from "../components"

const array_sample = [
{
  tab: "내정보",
  content: <CreateMySpaceUser />,
},
{
  tab: "소개",
  content: <CreateMyIntro />,
},
{
  tab: "업무경험",
  content: <CreateMyExp />,
},
{
  tab: "포트폴리오",
  content: <MyPortfolio />,
},
{
  tab: "작업 및 직업스킬",
  content: <MySkill />,
},
{
  tab: "관심사",
  content: <MyInterests />,
},
]


const EditMySpace = (props) => {

  const {currentItem, changeItem} = useTabs(0, array_sample);

  return (
<>
    <div className=" bg-blue-400 h-52 grid col-start-1 col-end-5"> 여기에 배경이미지</div>


  <div className="w-full grid grid-cols-6">
    

 
      <div className="bg-green-400 m-1 rounded-md w-full h-64 z-50 col-start-6 sticky top-2">
        프로그래스바
          {array_sample.map((arrays, index) => 
      (
        <div className="">

        <div className=" bg-slate-300 rounded-md m-1 cursor-pointer text-xs md:text-sm" onClick={()=>changeItem(index)}>
				{arrays.tab}</div>
        </div>

        ))}

          </div>


          <div className="bg-yellow-100 p-4 justify-items-center items-center
          row-start-1 col-span-5 col-end-6">
  <div className="row-start-1 col-start-1 col-end-5 col-span-5">
    기본정보 수정
    <hr className="border-4" />
  </div>
             <div>{currentItem.content}
             </div>
             <hr className="border-4 my-5" />
            <div className="flex flex-row justify-end space-x-2">
              <Link to="/myspace"><Button size="2">돌아가기</Button></Link>
              <Button size="2" color="3">저장하기</Button>
            </div>
               </div>
    </div>




</>
  );
};

export default EditMySpace;