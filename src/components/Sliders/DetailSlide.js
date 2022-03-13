import React from "react";
import { Grid, Title, Image, Text, Input } from "../../elements";

import { useHistory, Link } from "react-router-dom";


const ArtWorkSlide = (props) => {
  let history = useHistory();
  return (
    <>
    <div className="max-w-sm py-2 mx-auto mt-4 bg-white rounded-lg shadow-lg dark:bg-gray-800 font-sanss2">
        <Image shape="big_square" />
    </div>
    
    </>
  );
};

export default ArtWorkSlide;