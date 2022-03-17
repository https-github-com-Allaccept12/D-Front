import React from "react";
import tw from "tailwind-styled-components";

const Nametag = tw.span`
font-min2 text-dpurple-200 ml-1
`


const RadioButton = (props) => {
  
  const {
    checked,
    inline,
    color,
    size,
    disabled
  } = props;

  if ( size === "1" && color === "1") {
    return (
      <>

<div>
      <label class="inline-flex items-center">
        <input type="radio" className="form-radio 
              text-dpurple-200 w-7 h-7 font-min2
              border-2
              focus-visible:border-0
              focus-within:border-0
              rounded-full 
              hover:bg-dpurple-200
              disabled:text-dgray-300 
              disabled:bg-dgray-200" name="radio" value="1" />
        <span class="ml-2">{inline}</span>
      </label>
    </div>
            </>
    )
    }
  if (size === "1" && color === "2") {
    return (
        <>

              <label class="inline-flex items-center">
                <input type="radio" className="form-radio 
                      text-dgray-600 w-7 h-7 font-min2
                      rounded-full border-2 hover:border-dgray-600 
                      hover:bg-dgray-600
                      focus-visible:border-0
                      focus-within:border-0
                      disabled:text-dgray-300 
                      disabled:bg-dgray-200 
                      disabled:border-0" name="radio" value="1" />
                <span class="ml-2">{inline}</span>
              </label>

                    </>
    )
    }
    if (size === "2" && color === "1") {
      return (
        <>

        <div>
              <label class="inline-flex items-center">
                <input type="radio" className="form-radio 
                      text-dpurple-200 w-4 h-4 font-min2
                      rounded-full border-2 hover:border-dpurple-200              
                      focus-visible:border-0
                      focus-within:border-0 
                      disabled:text-dgray-300 
                      disabled:bg-dgray-200 
                      disabled:border-0" name="radio" value="1" />
                <span class="ml-2">{inline}</span>
              </label>
            </div>
                    </>
      )
      }
  
    if (color === "2" && size === "2") {
      return (
        <>

        <div>
              <label class="inline-flex items-center">
                <input type="radio" className="form-radio 
                      text-dgray-600 w-4 h-4 font-min2
                      rounded-full border-2 hover:border-dgray-600     
                      focus-visible:border-0
                      focus-within:border-0
                      disabled:text-dgray-300 
                      disabled:bg-dgray-200 
                      disabled:border-0" name="radio" value="1" />
                <span class="ml-2">{inline}</span>
              </label>
            </div>
                    </>
      )
      }
};

RadioButton.defaultProps = {
  onClick: () => {},
  size: "1",
  color: "1",
  inline: "옵션을 설정해주세여",
  checked: false,
  disabled: false,
};


export default RadioButton;