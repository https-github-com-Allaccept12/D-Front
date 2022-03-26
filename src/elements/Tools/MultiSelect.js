import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";

const options = [
  { label: "일러스트레이터", value: "illustrator" },
  { label: "포토샵", value: "photoshop" },
  { label: "피그마", value: "figma" },
];

const Example = (props) => {
  const [selected, setSelected] = useState([]);
  const { title } = props;

  return (
    <div>
      <h1>{title}</h1>
      {/* <pre>{JSON.stringify(selected)}</pre> */}
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
        hasSelectAll="false"
      />
    </div>
  );
};

Example.defaultProps = {
  title: "사용 툴",
};

export default Example;
