import React from "react";
import tw from "tailwind-styled-components";

const Nametag = tw.span`
font-min2 text-dpurple-200 ml-1
`;

const CheckBox = (props) => {
  const { checked, inline, color, size, disabled } = props;

  if (size === "1" && color === "1") {
    return (
      <>
        <label class="inline-flex items-center mr-1">
          <input
            type="checkbox"
            class="form-checkbox 
              text-dpurple-200 w-7 h-7 font-min2
              rounded-md border-2 hover:border-dpurple-200 disabled:text-dgray-300 
              disabled:bg-dgray-200 
              disabled:border-0
              "
          />
          <Nametag>{inline}</Nametag>
        </label>
      </>
    );
  }
  if (size === "1" && color === "2") {
    return (
      <>
        <label class="inline-flex items-center mr-1">
          <input
            type="checkbox"
            class="form-checkbox 
              text-dgray-600 w-7 h-7 font-min2
              rounded-md border-2 hover:border-dgray-600 disabled:text-dgray-300 
              disabled:bg-dgray-200 
              disabled:border-0
              "
          />
          <Nametag>{inline}</Nametag>
        </label>
      </>
    );
  }
  if (size === "2" && color === "1") {
    return (
      <>
        <label class="inline-flex items-center mr-1">
          <input
            type="checkbox"
            class="form-checkbox 
                text-dpurple-200 w-4 h-4 font-min2
                rounded-md border-2 hover:border-dpurple-200 disabled:text-dgray-300 
                disabled:bg-dgray-200 
                disabled:border-0
                "
          />
          <Nametag>{inline}</Nametag>
        </label>
      </>
    );
  }

  if (color === "2" && size === "2") {
    return (
      <>
        <label class="inline-flex items-center mr-1">
          <input
            type="checkbox"
            class="form-checkbox 
                text-dgray-600 w-4 h-4 font-min2
                rounded-md border-2 hover:border-dgray-600 disabled:text-dgray-300 
                disabled:bg-dgray-200 
                disabled:border-0
                "
          />
          <Nametag>{inline}</Nametag>
        </label>
      </>
    );
  }
};

CheckBox.defaultProps = {
  onClick: () => {},
  size: "1",
  color: "1",
  inline: "옵션을 설정해주세여",
  checked: false,
  disabled: false,
};

export default CheckBox;
