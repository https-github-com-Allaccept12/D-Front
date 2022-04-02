import React from "react";
import { useSelector } from "react-redux";
import { Button, Title } from "../../elements";
import ArtPostMain from "./ArtPostMain";
import tw from "tailwind-styled-components";
import { useHistory, useLocation } from "react-router-dom";
import { ArtWorkCategory, ArtWorkWrite } from "../ArtWorks";

const ArtWorkHotList = (props) => {
    const artworks = useSelector((state) => state.mainPage.artworks);
    // console.log(artworks);
    let arrayArtworks = () => {};
    if (artworks) {
        arrayArtworks = () => {
            const arr = [];
            for (let i = 0; i < artworks.length; i++) {
                arr.push(
                    <ArtPostMain
                        profile={artworks[i].account_profile}
                        nickname={artworks[i].account_nickname}
                        thumbnail={artworks[i].img}
                        is_like={artworks[i].is_like}
                        like_count={artworks[i].like_count}
                        id={artworks[i].artwork_id}
                    />,
                );
            }
            return arr;
        };
    }

    const location = useLocation();
    const a = location.pathname;
    if (a === "/")
        return (
            // <>
            //     {p.map((n) => {
            //         return <ArtPost size="7" main />;
            //     })}
            // </>
            <>{arrayArtworks()}</>
        );
    else {
        return null;
    }
};

export default ArtWorkHotList;
