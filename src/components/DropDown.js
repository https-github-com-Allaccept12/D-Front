import React, { useState } from "react";
import tw from "tailwind-styled-components";
import { Button } from "../elements";

const Btime = tw.div` 
    bg-blue-400 p-1 flex
    text-gray-200 font-sanss2 justify-evenly items-center
     shadow-md flex-wrap
` 
const Menu = tw.a`
block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white
`

const DropDown = (props) => {
  const {
    list01,
    list02,
    list03,
    list04,
  } = props;
  const [is_open, setIsOpen] = useState(false)

  return (
      <React.Fragment>
      <div className="relative inline-block">
            <Button
            onClick={()=> setIsOpen(!is_open)}>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
            </Button>

         { is_open && <div class="absolute right-0 z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl dark:bg-gray-800">
                <Menu href="#">
                    {list01}
                </Menu>
                
                <Menu href="#">
                    view profile
                </Menu>

                <hr class="border-gray-200 dark:border-gray-700 " />
                
                <Menu href="#">
                    {list02}
                </Menu>

                <hr class="border-gray-200 dark:border-gray-700 "/>
                
                <Menu href="#">
                    {list03}
                </Menu>
                <Menu href="#">
                    로그아웃
                </Menu>
            </div>}
        </div>
    </React.Fragment>
  );
};

DropDown.defaultProps = {
  list01 : "없어",
  list02 : "없어",
  list03 : "없어",
  list04 : "없어",
};

export default DropDown;
