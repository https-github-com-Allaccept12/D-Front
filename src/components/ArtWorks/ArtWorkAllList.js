import React from "react";
import { useSelector } from "react-redux";
import { Button, Title } from "../../elements";
import ArtPostMain from "./ArtPostMain";
import tw from "tailwind-styled-components";
import { useHistory, useLocation } from "react-router-dom";
import { ArtWorkCategory, ArtWorkWrite } from "../../components/ArtWorks";

const Grid = tw.div` 
flex flex-row flex-wrap items-center gap-4 2xl:max-w-[80%]
`;

const p = [
    { 1: "1" },
    { 2: "2" },
    { 3: "3" },
    { 4: "4" },
    { 5: "5" },
    { 6: "6" },
    { 7: "7" },
    { 8: "8" },
    { 9: "9" },
    { 10: "10" },
];

const ArtWorkAllList = (props) => {
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

export default ArtWorkAllList;
