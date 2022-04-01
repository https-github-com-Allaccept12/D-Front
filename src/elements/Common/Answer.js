import React from "react";
import tw from "tailwind-styled-components";

const TextAreaField = tw.textarea`
w-full px-4 py-4 border border-dgray-400 border-box
  rounded-md shadow-md outline-none resize-none font-min1
  hover:border-dpurple-200 active:border-dpurple-300
   flex flex-wrap  break-words whitespace-pre-wrap h-44
   ${(props) => (props.cardsize === "1" ? `h-I01 px-4` : "")};   
${(props) => (props.cardsize === "2" ? `h-I02 px-4` : "")};
${(props) => (props.cardsize === "3" ? `h-I03 px-4` : "")};
${(props) => (props.is_error ? `border-2 border-dred-500` : "")};
`;

const Sp = tw.h2`
flex justify-end text-xs font-min1
peer-invalid:visible
`;

const Answer = (props) => {
    const {
        label,
        type,
        placeholder,
        value,
        onChange,
        onSubmit,
        onBlur,
        is_submit,
        is_error,
        textarea,
        cardsize,
        is_value,
        maxlen,
        className,
    } = props;

    return (
        <>
            <div className="w-full">
                <label id={label}>
                    <TextAreaField
                        value={value}
                        cardsize={cardsize}
                        placeholder={placeholder}
                        onChange={onChange}
                        onKeyPress={(e) => {
                            if (e.key === "Enter" && !e.shiftKey) {
                                onSubmit(e);
                            }
                        }}
                    />
                </label>
            </div>
        </>
    );
};

Answer.defaultProps = {
    label: "",
    type: "text",
    placeholder: "입력해주세요!",
    value: "",
    cardsize: "1",
    onChange: () => {},
    onSubmit: () => {},
    is_submit: false,
    is_value: 0,
    className: "",
};

export default Answer;
