import React, {useState} from "react";
import { Button, Title } from "../../../elements";

import { useHistory } from "react-router-dom";
import { useTabs } from "../../../hooks";

import { MyAnswer, MyQuestion } from "../../MySpace"
import tw from "tailwind-styled-components";

const Line = tw.hr`
border border-gray-600 my-5 w-full
`

const TabBtn = tw.button`
   rounded-full text-base flex flex-row justify-center items-center 
   font-min1
`

const Table = tw.div`
flex flex-row justify-start items-center w-5/6 mx-auto gap-3
mb-7
`

const Items = tw.div`
flex flex-row justify-start items-center w-5/6 mx-auto
`

const MyQNA = (props) => {
  let history = useHistory();
  
    const array_sample = [
    {
      tab: "나의 질문",
      content: <MyQuestion />,
    },
    {
      tab: "나의 답변",
      content:  <MyAnswer />,
    },

    ]
    const {currentItem, changeItem} = useTabs(0, array_sample);
    const [active, setActive] = useState("0");

  return (
    <>

<>
    <div className="flex w-5/6 mx-auto flex-col justify-start items-start mt-3">

         <Title size="4">QNA 관리</Title> 
    
        <Line /> 

        </div>
    </>

    <Table>

    <TabBtn active={active} onClick={()=> {
      changeItem([0])
      setActive("0")
    }}
    className={active === "0" ? `text-dpurple-300 bg-dpurple-100 px-8 py-2` : `px-8 py-2`}
    >
      {array_sample[0].tab}</TabBtn>

    <TabBtn active={active} onClick={()=> {
              changeItem([1])
              setActive("1")
            }}
            className={active === "1" ? `text-dpurple-300 bg-dpurple-100 px-8 py-2` : `px-8 py-2`}
            >{array_sample[1].tab}</TabBtn>


</Table>

<Items>
            {currentItem.content}
             </Items>


</>
  );
};

export default MyQNA;