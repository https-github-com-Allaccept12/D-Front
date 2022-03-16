import React from "react";
import tw from "tailwind-styled-components";

// 작업 완료!

const InputStyles = tw.input`
w-full h-I01 px-12 border border-dgray-400 rounded-lg py-1
hover:border-dpurple-200 
active:border-dpurple-300 
focus:border-dpurple-300 
outline-none
${(props) => (props.is_error ? `ring-1 ring-dred-400` : "")};

`

const TextAreaField = tw.textarea`
  w-full box-border px-5 py-4 border border-dgray-400 
  rounded-md shadow-md outline-none
  hover:border-dpurple-200 active:border-dpurple-300
${(props) => (props.size === "1" ? `h-I02 px-4` : "")};
${(props) => (props.size === "2" ? `h-I03 px-4` : "")};
${(props) => (props.is_error ? `border-2 border-dred-500` : "")};
`;

const Title = tw.h2`
  mr-2 flex-row justify-center items-center mt-4 font-min1
`
const Text = tw.h2`
`

const Sp = tw.h2`
flex justify-end text-xs font-min1

`

const Input = (props) => {
  const {
    title,
    label,
    type,
    placeholder,
    value,
    onChange,
    onSubmit,
    is_submit,
    is_error,
    textarea,
		size,
    size_textarea,
    is_value,
    maxLen,
  } = props;
  if (is_submit) {
    return  (
      <>
      <div className="flex">
      { title && <Title>{title}</Title> } 
      
      <label><Text>{label}</Text>
        <InputStyles
          type={type}
          value={value}
          is_error={is_error}
          placeholder={placeholder}
          onChange={onChange}
          size={size}
          maxLen={maxLen}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              onSubmit(e);
            }
          }}
        />
        { is_error && <Sp>글자수를 초과하였습니다.</Sp>}
        <Sp>{is_value}/{maxLen}</Sp>
      </label>
      
      </div>
     
      </>
    );
  } else if (textarea) {
    return (
      <>
      <div className="flex">
      { title && <Title>{title}</Title> } 
      
      <label><Text>{label}</Text>
        <TextAreaField 
          type={type}
          value={value}
          is_error={is_error}
          placeholder={placeholder}
          onChange={onChange}
          size={size}
          row={size_textarea}
          maxLen={maxLen}
        />
        { is_error && <Sp>글자수를 초과하였습니다.</Sp>}
        <Sp>{is_value}/{maxLen}</Sp>
      </label>
      
      </div>
     
      </>
    )
  } else {
    return (
      <>
      <div className="flex">
      { title && <Title>{title} </Title> } 
      
      <label><Text>{label}</Text>
        <InputStyles
          type={type}
          value={value}
          is_error={is_error}
          placeholder={placeholder}
          onChange={onChange}
          maxLen={maxLen}
        />
        { is_error && <Sp>글자수를 초과하였습니다.</Sp>}
        <Sp>{is_value}/{maxLen}</Sp>
      </label>
      
      </div>
     
      </>
    );
  }
};

Input.defaultProps = {
  title: "",
  label: "",
  type: "text",
  placeholder: "입력해주세요!",
  value: "",
  onChange: () => {},
  onSubmit: () => {},
  is_submit: false,
  size: "2",
  size_textarea: 5,
  is_value: 0,
  maxLen: "10"
};




export default Input;
