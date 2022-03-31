import React from "react";
import tw from "tailwind-styled-components";

const InputStyles = tw.input`
w-full px-4 border border-dgray-400 rounded-lg py-1
hover:border-dpurple-200 border-box peer
active:border-dpurple-300 invalid:text-pink-600
focus:border-dpurple-300 font-min1
outline-none
${(props) => (props.is_error ? `ring-1 ring-dred-400` : "")};
${(props) => (props.cardsize === "1" ? `h-I01 px-4` : "")};
`;

const TextAreaField = tw.textarea`
w-full px-4 py-4 border border-dgray-400 border-box
  rounded-md shadow-md outline-none resize-none font-min1
  hover:border-dpurple-200 active:border-dpurple-300
${(props) => (props.cardsize === "2" ? `h-I02 px-4` : "")};
${(props) => (props.cardsize === "3" ? `h-I03 px-4` : "")};
${(props) => (props.is_error ? `border-2 border-dred-500` : "")};
`;

const Title = tw.h2`
  mr-2 inline-flex mt-1 font-min1 col-span-2
  shrink-0 text-sm md:text-base w-24 row-start-1 col-start-1
`;

const Sp = tw.h2`
flex justify-end text-xs font-min1
peer-invalid:visible
`;

const Input = (props) => {
    const {
        title,
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
    if (is_submit) {
        return (
            <>
                <div className="grid grid-cols-8 row-start-1">
                    {title && <Title>{title} </Title>}
                    <div className="col-start-3 col-end-8 row-start-1">
                        <label id={label}>
                            <InputStyles
                                type={type}
                                value={value}
                                is_error={is_error}
                                cardsize={cardsize}
                                placeholder={placeholder}
                                onChange={onChange}
                                maxlen={maxlen}
                                onKeyPress={(e) => {
                                    if (e.key === "Enter") {
                                        onSubmit(e);
                                    }
                                }}
                            />
                            {is_error && <Sp>글자수를 초과하였습니다.</Sp>}
                            <Sp>
                                {is_value}/{maxlen}
                            </Sp>
                        </label>
                    </div>
                </div>
            </>
        );
    } else if (textarea) {
        return (
            <>
                <div className="grid grid-cols-8 row-start-1">
                    {title && <Title>{title}</Title>}
                    <div className="col-start-3 col-end-8 row-start-1">
                        <label id={label}>
                            <TextAreaField
                                type={type}
                                value={value}
                                is_error={is_error}
                                placeholder={placeholder}
                                onChange={onChange}
                                cardsize={cardsize}
                                maxlen={maxlen}
                                className={className}
                            />
                            {is_error && <Sp>글자수를 초과하였습니다.</Sp>}
                            <Sp>
                                {is_value}/{maxlen}
                            </Sp>
                        </label>
                    </div>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className="grid grid-cols-8 row-start-1">
                    {title && <Title>{title} </Title>}
                    <div className="col-start-3 col-end-8 row-start-1">
                        <label id={label}>
                            <InputStyles
                                type={type}
                                value={value}
                                is_error={is_error}
                                cardsize={cardsize}
                                placeholder={placeholder}
                                onChange={onChange}
                                onBlur={onBlur}
                                maxlen={maxlen}
                                className={className}
                            />
                            {is_error && <Sp>글자수를 초과하였습니다.</Sp>}
                            {maxlen && (
                                <Sp>
                                    {is_value}/{maxlen}
                                </Sp>
                            )}
                        </label>
                    </div>
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
    cardsize: "1",
    onChange: () => {},
    onSubmit: () => {},
    is_submit: false,
    is_value: 0,
    className: "",
};

export default Input;
