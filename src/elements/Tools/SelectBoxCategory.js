import React from "react";
import tw from "tailwind-styled-components";

const SelectBoxCategory = (props) => {
    return (
        <>
            <div>
                <select
                    className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-lg font-min2
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded-md
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    aria-label="Default select example"
                >
                    <option value="0">카테고리 선택</option>
                    <option value="1">UI/UX</option>
                    <option value="2">그래픽디자인</option>
                    <option value="3">브랜딩/편집디자인</option>
                    <option value="3">제품/패키지 디자인</option>
                    <option value="3">타이포그래피</option>
                    <option value="3">영상/모션그래픽</option>
                    <option value="3">공예</option>

                    <option value="3">패션</option>
                    <option value="3">게임/캐릭터디자인</option>
                    <option value="3">건축/인테리어/환경디자인</option>
                    <option value="3">기타</option>
                </select>
            </div>
        </>
    );
};

export default SelectBoxCategory;
