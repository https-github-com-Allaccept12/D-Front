import React, {useState, useEffect} from "react";

const ProgressBar = ({ width, percent }) => {

    const [value, setValue] = useState(0);
  
    useEffect(() => {
      setValue(percent * width);
    });
  
    return (
      <div>
        <div className="bg-gray-300 rounded-md h-5" style={{ width: width }}>
          <div style={{ width: `${value}px` }} className="bg-dpurple-300 rounded-md h-5" />
        </div>
      </div>
    );
  };

export default ProgressBar;
