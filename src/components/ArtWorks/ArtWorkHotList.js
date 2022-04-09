import React from "react";
import { useSelector } from "react-redux";
import { Button, Title } from "../../elements";
import ArtPostMain from "./ArtPostMain";
import tw from "tailwind-styled-components";
import { useHistory, useLocation } from "react-router-dom";
import { ArtWorkCategory, ArtWorkWrite } from "../ArtWorks";

const ArtWorkHotList = (props) => {
    const artworks = useSelector((state) => state.mainPage.artworks);
    console.log('for ArtPostMain', artworks);

    return (
        <>
        {artworks && artworks.map((value) => {
            return(
                <ArtPostMain
                    account_id={value.account_id}
                    artwork_id={value.artwork_id}
                    profile={value.account_profile}
                    nickname={value.account_nickname}
                    thumbnail={value.img}
                    like_count={value.like_count}
                />
            )
        })}
        </>
    )
    
};

export default ArtWorkHotList;
