import React, { useState } from "react";

import tw from "tailwind-styled-components";
import JobOptions from "./JobOptions";

const SelectBoxCategory = (props) => {
    const { value, onChange, option } = props;

    const [selected, setSelected] = useState("");

    const handleChangeSelect = (e) => {
        setSelected(e.target.value);
    };

    return (
        <>
            <div>
                <select
                    className="form-select appearance-none
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base font-min2
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding bg-no-repeat
                                border border-solid border-gray-300
                                rounded-md
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    aria-label="Default select example"
                    onChange={onChange}
                    value={value}
                    option={option}
                ></select>
            </div>
        </>
    );
};

export default SelectBoxCategory;
