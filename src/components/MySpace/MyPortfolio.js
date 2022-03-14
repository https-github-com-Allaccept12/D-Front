import React from "react";
import { Button, Image, Container } from "../../elements";
import { MyArtWork } from "../../components"
import { useHistory } from "react-router-dom";


const MyPortfolio = (props) => {
  let history = useHistory();
  return (
    <>

        <div className="grid">
        <div>PORTFOLIO</div>
        <hr className="w-full border-4" /> 
       <MyArtWork />


</div>



    </>

  );
};

export default MyPortfolio;