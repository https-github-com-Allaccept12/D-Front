import React from "react";
import { Button, Title, Text, SearchInput } from "../../elements";

import { Link, Route, Switch, useLocation } from 'react-router-dom';


import { DimoSlider } from "../../components"


const MyPageCategory = (props) => {

   return (
    <> 


<div className="sticky top-20">


        <div className="flex flex-col justify-center pl-[2.5rem] mt-10 text-left ml-6 p-2 w-[13.75rem] h-[32.5rem]
        rounded-lg bg-white">


   
      
      
            <div class="">
            <Title size="4">MyProfile</Title>
          <Text size="2" className="leading-loose"><Link to="/myspace">□ 내 프로필</Link></Text>
          <Text size="2" className="leading-loose"><Link to="/editmyspace">□ 프로필 수정</Link></Text>
          <Title size="4">Work</Title>
          <Text size="2" className="leading-loose"><Link to="/myspace/mywork">□ 내작업</Link></Text>
          <Text size="2" className="leading-loose"><Link to="/myspace/mypic">□ 스크랩한 작업</Link></Text>
          <Title size="4">Community</Title>
          <Text size="2" className="leading-loose"><Link to="/myspace/share">□ 게시글</Link></Text>
          <Text size="2" className="leading-loose"><Link to="/myspace/qna">□ QNA</Link></Text>

  
          </div>

      </div>
         

    </div>
  

    </>
  );

};

export default MyPageCategory;
