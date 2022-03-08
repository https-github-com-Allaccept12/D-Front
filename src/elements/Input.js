import React from "react";
import { Text } from "../elements";
import tw from "tailwind-styled-components";

// 작업 완료!

const InputStyles = tw.input`
    w-full px-3 py-2 leading-tight text-gray-700 text-lg
    border-1 rounded-md shadow-md hover:ring-4 hover:ring-blue-300
    focus-visible:ring-blue-200 outline-none
`
const TextAreaField = tw.textarea`
  w-full box-border px-5 py-4 text-yellow-700 text-lg
  border-1 rounded-md shadow-md hover:ring-4 hover:ring-blue-300
    focus-visible:ring-blue-200 outline-none
`;

const Input = (props) => {
  const {
    label,
    type,
    placeholder,
    value,
    onChange,
    is_submit,
    onSubmit,
    textarea,
    size_textarea,
  } = props;

  if (is_submit) {
    return (
      <label>
        <Text>{label}</Text>
        <InputStyles
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              onSubmit(e);
            }
          }}
        />
      </label>
    );
  } else if (textarea) {
    return (
      <label>
        <Text>{label}</Text>
        <TextAreaField
          value={value}
          rows={size_textarea}
          placeholder={placeholder}
          onChange={onChange}
        />
      </label>
    );
  } else {
    return (
      <label>
        <Text>{label}</Text>
        <InputStyles
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      </label>
    );
  }
};

Input.defaultProps = {
  label: false,
  type: "text",
  placeholder: "입력해주세요!",
  value: "",
  is_submit: false,
  onChange: () => {},
  onSubmit: () => {},
  size_textarea: 10,
};




export default Input;
