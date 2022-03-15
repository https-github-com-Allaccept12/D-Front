import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";

const options = [
  { label: "Grapes 🍇", value: "grapes" },
  { label: "Mango 🥭", value: "mango" },
  { label: "Strawberry 🍓", value: "strawberry" },
];

const Example = (props) => {
  const [selected, setSelected] = useState([]);
  const { title } = props;

  return (
    <div>
      <h1>{ title }</h1>
      {/* <pre>{JSON.stringify(selected)}</pre> */}
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
      />
    </div>
  );
};

Example.defaultProps = {
  title: "사용 툴"
}

export default Example;