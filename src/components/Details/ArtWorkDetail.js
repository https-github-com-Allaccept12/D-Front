import React from "react";
import { Button, Image, Logo, Text, Input, Profile, HeartButton, Icon } from "../../elements";

import { useHistory } from "react-router-dom";
import { DetailSlider, Comment } from "../../components";



const ArtWorkDetail = (props) => {
  let history = useHistory();
  return (
    <>



    <div className="flex justify-center items-center flex-col w-full overflow-y-hidden">
      
       <div className="bg-white p-10 justify-between w-full h-[9rem]">
                <div className="flex items-center justify-start flex-row">

                    <div className="flex items-center">
                        <Profile size="6" />
                    </div>
                    <div className="flex flex-col gap-2 text-left ml-2">
                    <p className="font-semibold text-dgray-600">은행 어플리케이션 디자인</p>
                    <p className="text-xs text-dgray-500">2022.03.10
                    <span className="px-2">∣</span> UX / UI</p>
                    </div>
                </div>
            </div>

      <div className="w-full mx-auto overflow-hidden bg-transparent rounded-lg shadow-md ">
        <img className="object-cover w-full h-fit" src="https://www.khgames.co.kr/news/photo/202004/122506_91284_1453.jpg" alt="" />
        <div className="bg-dgray-100 h-[7rem] flex flex-row justify-center space-x-20 items-center">

        <HeartButton like_cnt="1" is_like nameF="StarF" nameE="StarE" />
        <HeartButton like_cnt="1" is_like nameF="HeartF" nameE="HeartE" />
        <HeartButton like_cnt="1" is_like nameF="BookmarkF" nameE="BookmarkE" />
        </div>
        <div className="p-6 bg-white">
        <div className="bg-white p-10 justify-between w-full h-[9rem]">
                <div className="flex items-center justify-start flex-row">

                    <div className="flex items-center">
                        <Profile size="6" />
                    </div>
                    <div className="flex flex-col gap-2 text-left ml-2">
                    <p className="font-semibold text-dgray-600">은행 어플리케이션 디자인</p>
                    <div className="flex flex-row">
                    <p className="text-xs text-dgray-500">창의적인 발명가
                    </p> 
                    <Icon name="Link" iconSize="12" />
                    <Icon name="Link" iconSize="12" />
                    </div>
                    </div>
                </div>
            </div>

            <div className=" p-2 justify-between w-full">


 {/* 슬라이더 자리 */}

 <div>
   <DetailSlider />
 </div>
</div>

            <div className="w-full bg-white p-2 pt-4 rounded shadow-lg">
  <div className="flex ml-3">
    <div className="mr-3">
      <img src="http://picsum.photos/50" alt="" className="rounded-full" />
    </div>
    <div>
      <h1 className="font-semibold">Itay Buyoy</h1>
      <p className="text-xs text-gray-500">2 seconds ago</p>
    </div>

  </div>

  <div className="mt-3 p-3 w-full">
    <textarea rows="3" className="border p-2 rounded w-full" placeholder="Write something..."></textarea>
  </div>

  <div className="flex justify-between mx-3">
    <div><button className="px-4 py-1 bg-gray-800 text-white rounded font-light hover:bg-gray-700">Submit</button></div>



  </div>
  <div className="grid grid-rows-6 grid-cols-4 p-3">

<Comment />
<Comment />
<Comment />

</div>


<button type="button"
          className="btn-close box-content w-4 h-4 p-1 text-white border-none rounded-none opacity-80 focus:shadow-none focus:outline-none focus:opacity-100 md:hidden"
          data-bs-dismiss="modal" aria-label="Close"></button>

</div>

        </div>



    </div>
    
    </div>
    <div className="sticky bottom-20 top-20">
      <div className="hidden md:flex flex-row md:flex-col gap-7 shrink">
        <div className="flex flex-col justify-center items-center bg-white rounded-full p-2 py-3 font-min2">
        <Icon />프로필
        </div>
        <div className="flex flex-col justify-center items-center bg-white rounded-full p-2 py-3 font-min2">
        <Icon />팔로우
        </div>
        <div className="flex flex-col justify-center items-center bg-white rounded-full p-2 py-3 font-min2">
        <Icon name="HeartF" />좋아요
        </div>
        <div className="flex flex-col justify-center items-center bg-white rounded-full p-2 py-3 font-min2">
        <Icon />스크랩
        </div>
        <div className="flex flex-col justify-center items-center bg-white rounded-full p-2 py-3 font-min2">
        <Icon name="Link" />공유하기
        </div>



            </div>
          </div>
</>
  );
};

export default ArtWorkDetail;