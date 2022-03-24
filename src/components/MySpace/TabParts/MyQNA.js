import React, {useState} from "react";
import { Button, Image } from "../../../elements";

import { useHistory } from "react-router-dom";
import { useTabs } from "../../../hooks";

import { MyAnswer, MyQuestion } from "../../MySpace"
import tw from "tailwind-styled-components";

const TabBtn = tw.button`
   rounded-full text-base  flex flex-row justify-center items-center 
   font-min1
`

const Table = tw.div`
flex flex-row justify-start items-center
`

const MyQNA = (props) => {
  let history = useHistory();
  
    const array_sample = [
    {
      tab: "내답변",
      content: <MyAnswer />,
    },
    {
      tab: "내질문",
      content: <MyQuestion />,
    },

    ]
    const {currentItem, changeItem} = useTabs(0, array_sample);
    const [active, setActive] = useState("0");

  return (
    <>

    <Table>

    <TabBtn active={active} onClick={()=> {
      changeItem([0])
      setActive("0")
    }}
    className={active === "0" ? 'bg-yellow-400' : ''}
    >
      {array_sample[0].tab}</TabBtn>

    <TabBtn active={active} onClick={()=> {
              changeItem([1])
              setActive("1")
            }}
            className={active === "1" ? 'bg-yellow-400' : ''}
            >{array_sample[1].tab}</TabBtn>


</Table>

      <div>{currentItem.content}
         </div>

</>
  );
};

export default MyQNA;