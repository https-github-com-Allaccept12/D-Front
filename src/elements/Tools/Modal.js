import React from "react";
import tw from "tailwind-styled-components";

const P = tw.p`
  text-base text-gray-600 font-sanss2 font-extrabold
  ${(props) => (props.size === "medium" ? "text-lg" : "")};
`;

const Modal = (props) => {
  const { 
    children, 
    onClick,
    bold,
    size, 
    color,
  } =
    props;


  return (
    <>
        <button type="button" className=" active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModalXl">
            {children}
            </button>

            <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalXl" tabIndex="-1" aria-labelledby="exampleModalXlLabel" aria-modal="true" role="dialog">
  <div className="modal-dialog modal-xl relative w-auto pointer-events-none">
    <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
      <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
        <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalXlLabel">
          클릭하면 작품이 나오게!
        </h5>

        <button type="button"
          className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
          data-bs-dismiss="modal" aria-label="Close"></button>
      </div>


      <div className="modal-body top-0 z-10 p-4">
        <div className="flex justify-center items-center">
        
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  );
};

Text.defaultProps = {
  children: null,
  onClick: () => {},
  bold: "",
  size: "",
  color: "",
};


export default Modal;
