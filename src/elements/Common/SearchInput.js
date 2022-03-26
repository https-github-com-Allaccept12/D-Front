import React from "react";
import tw from "tailwind-styled-components";
import Icon from "./Icon";

const InputStyles = tw.input`
w-full border border-dgray-400 rounded-full py-1
border-box peer font-min1
outline-none hover:bg-dgray-200
${(props) => (props.cardSize === "1" ? `h-I00 px-20` : "")};
${(props) => (props.cardSize === "2" ? `h-I01 px-20` : "")};

`;

const SearchInput = (props) => {
  const { label, type, placeholder, value, onChange, onSubmit, cardSize } =
    props;

  return (
    <>
      <label id={label}>
        <div className="relative">
          <div className="absolute left-7 top-0 mt-3">
            {cardSize == "2" ? (
              <Icon name="Search" iconSize="30" is_Search />
            ) : (
              <Icon name="Search" iconSize="24" is_Search />
            )}
          </div>
          <InputStyles
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            cardSize={cardSize}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                onSubmit(e);
              }
            }}
          />
        </div>
      </label>
    </>
  );
};

SearchInput.defaultProps = {
  title: "",
  label: "",
  type: "submit",
  placeholder: "검색어를 입력해보세요!",
  value: "",
  onChange: () => {},
  onSubmit: () => {},
  is_submit: false,
  is_value: 0,
  cardSize: "1",
};

export default SearchInput;
