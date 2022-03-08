import React, { KeyboardEvent } from "react";
import { Text } from "../elements";
import tw from "tailwind-styled-components";


const InputStyles = tw.input`
    w-full px-3 py-2 leading-tight text-yellow-700 text-lg
    border-1 rounded-md shadow-md hover:ring-4 hover:ring-yellow-300
    focus-visible:ring-yellow-200 outline-none
`
const TextAreaField = tw.textarea`
  w-full box-border px-5 py-4 text-yellow-700 text-lg
  border-1 rounded-md shadow-md hover:ring-4 hover:ring-yellow-300
    focus-visible:ring-yellow-200 outline-none
`;

const Input = (props) => {
  const {
    label,
    type,
    placeholder,
    value,
    onChange,
    is_submit,
    _onSubmit,
    textarea,
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
              _onSubmit(e);
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
          rows={10}
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
  is_upload: false,
  onChange: () => {},
  onSubmit: () => {},
};




export default Input;
