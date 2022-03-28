import React from "react";
import { useSelector } from "react-redux";
import { Button, Title } from "../../elements";
import ArtWorkPost from "../../Hold/ArtWorkPost";
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
    console.log(artworks);
    let arrayArtworks = () => {};
    if (artworks) {
        arrayArtworks = () => {
            const arr = [];
            for (let i = 0; i < artworks.length; i++) {
                arr.push(
                    <ArtWorkPost
                        size="7"
                        main
                        profile={artworks[i].account_profile}
                        nickname={artworks[i].account_nickname}
                        thumnail={artworks[i].img}
                        is_like={artworks[i].is_like}
                        like_count={artworks[i].like_count}
                    />,
                );
            }
            return arr;
        };
    }

    const location = useLocation();
    const a = location.pathname;
    const b = a.split("/")[3];
    if (a === "/")
        return (
            // <>
            //     {p.map((n) => {
            //         return <ArtWorkPost size="7" main />;
            //     })}
            // </>
            <>{arrayArtworks()}</>
        );
    else {
        return null;
    }
};

export default ArtWorkAllList;
