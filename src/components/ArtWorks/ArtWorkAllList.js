import React from "react";
import { Button, SearchInput, Title } from "../../elements";
import ArtWorkPost from "./ArtWorkPost";
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
    let history = useHistory();
    const location = useLocation();
    const a = location.pathname;
    const b = a.split("/")[3];
    if (a === "/")
        return (
            <>
                {p.map((n) => {
                    return <ArtWorkPost size="7" main />;
                })}
            </>
        );

    if (b === "all")
        return (
            <>
                <div className="bg-dgray-200 h-[3.7rem] w-full"></div>
                <Grid>
                    <div className="flex items-center justify-around w-full space-x-36">
                        <div
                            className="box-border rounded-full 
      bg-white border border-black h-[2.5rem]
      flex justify-center items-center px-10 my-5"
                        >
                            <button>인기순</button> <button>최신순</button> <button>팔로우디자이너</button>
                        </div>
                        <SearchInput />
                    </div>
                    <hr className="w-full border " />
                    {p.map((n) => {
                        return <ArtWorkPost size="3" />;
                    })}
                </Grid>
            </>
        );

    if (b === "uiux")
        return (
            <>
                <div className="bg-dgray-200 h-[3.7rem] w-full"></div>
                <Grid>
                    <div className="flex items-center justify-around w-full space-x-36">
                        <div
                            className="box-border rounded-full 
      bg-white border border-black h-[2.5rem]
      flex justify-center items-center px-10 my-5"
                        >
                            <button>인기순</button> <button>최신순</button> <button>팔로우디자이너</button>
                        </div>
                        <SearchInput />
                    </div>
                    <hr className="w-full border " />
                    {p.map((n) => {
                        return <ArtWorkPost />;
                    })}
                </Grid>
            </>
        );
    if (b === "eco")
        return (
            <>
                <div className="bg-dgray-200 h-[3.7rem] w-full"></div>
                <Grid>
                    <div className="flex items-center justify-around w-full space-x-36">
                        <div
                            className="box-border rounded-full 
      bg-white border border-black h-[2.5rem]
      flex justify-center items-center px-10 my-5"
                        >
                            <button>인기순</button> <button>최신순</button> <button>팔로우디자이너</button>
                        </div>
                        <SearchInput />
                    </div>
                    <hr className="w-full border " />
                    {p.map((n) => {
                        return <ArtWorkPost />;
                    })}
                </Grid>
            </>
        );

    if (b === "game")
        return (
            <>
                <div className="bg-dgray-200 h-[3.7rem] w-full"></div>
                <Grid>
                    <div className="flex items-center justify-around w-full space-x-36">
                        <div
                            className="box-border rounded-full 
      bg-white border border-black h-[2.5rem]
      flex justify-center items-center px-10 my-5"
                        >
                            <button>인기순</button> <button>최신순</button> <button>팔로우디자이너</button>
                        </div>
                        <SearchInput />
                    </div>
                    <hr className="w-full border " />
                    {p.map((n) => {
                        return <ArtWorkPost />;
                    })}
                </Grid>
            </>
        );

    if (b === "craft")
        return (
            <>
                <div className="bg-dgray-200 h-[3.7rem] w-full"></div>
                <Grid>
                    <div className="flex items-center justify-around w-full space-x-36">
                        <div
                            className="box-border rounded-full 
      bg-white border border-black h-[2.5rem]
      flex justify-center items-center px-10 my-5"
                        >
                            <button>인기순</button> <button>최신순</button> <button>팔로우디자이너</button>
                        </div>
                        <SearchInput />
                    </div>
                    <hr className="w-full border " />
                    {p.map((n) => {
                        return <ArtWorkPost />;
                    })}
                </Grid>
            </>
        );

    if (b === "graphic")
        return (
            <>
                <div className="bg-dgray-200 h-[3.7rem] w-full"></div>
                <Grid>
                    <div className="flex items-center justify-around w-full space-x-36">
                        <div
                            className="box-border rounded-full 
      bg-white border border-black h-[2.5rem]
      flex justify-center items-center px-10 my-5"
                        >
                            <button>인기순</button> <button>최신순</button> <button>팔로우디자이너</button>
                        </div>
                        <SearchInput />
                    </div>
                    <hr className="w-full border " />
                    {p.map((n) => {
                        return <ArtWorkPost />;
                    })}
                </Grid>
            </>
        );

    if (b === "edit")
        return (
            <>
                <div className="bg-dgray-200 h-[3.7rem] w-full"></div>
                <Grid>
                    <div className="flex items-center justify-around w-full space-x-36">
                        <div
                            className="box-border rounded-full 
      bg-white border border-black h-[2.5rem]
      flex justify-center items-center px-10 my-5"
                        >
                            <button>인기순</button> <button>최신순</button> <button>팔로우디자이너</button>
                        </div>
                        <SearchInput />
                    </div>
                    <hr className="w-full border " />
                    {p.map((n) => {
                        return <ArtWorkPost />;
                    })}
                </Grid>
            </>
        );

    if (b === "video")
        return (
            <>
                <div className="bg-dgray-200 h-[3.7rem] w-full"></div>
                <Grid>
                    <div className="flex items-center justify-around w-full space-x-36">
                        <div
                            className="box-border rounded-full 
      bg-white border border-black h-[2.5rem]
      flex justify-center items-center px-10 my-5"
                        >
                            <button>인기순</button> <button>최신순</button> <button>팔로우디자이너</button>
                        </div>
                        <SearchInput />
                    </div>
                    <hr className="w-full border " />
                    {p.map((n) => {
                        return <ArtWorkPost />;
                    })}
                </Grid>
            </>
        );

    if (b === "video")
        return (
            <>
                <div className="bg-dgray-200 h-[3.7rem] w-full"></div>
                <Grid>
                    <div className="flex items-center justify-around w-full space-x-36">
                        <div
                            className="box-border rounded-full 
      bg-white border border-black h-[2.5rem]
      flex justify-center items-center px-10 my-5"
                        >
                            <button>인기순</button> <button>최신순</button> <button>팔로우디자이너</button>
                        </div>
                        <SearchInput />
                    </div>
                    <hr className="w-full border " />
                    {p.map((n) => {
                        return <ArtWorkPost />;
                    })}
                </Grid>
            </>
        );

    if (b === "product")
        return (
            <>
                <div className="bg-dgray-200 h-[3.7rem] w-full"></div>
                <Grid>
                    <div className="flex items-center justify-around w-full space-x-36">
                        <div
                            className="box-border rounded-full 
      bg-white border border-black h-[2.5rem]
      flex justify-center items-center px-10 my-5"
                        >
                            <button>인기순</button> <button>최신순</button> <button>팔로우디자이너</button>
                        </div>
                        <SearchInput />
                    </div>
                    <hr className="w-full border " />
                    {p.map((n) => {
                        return <ArtWorkPost />;
                    })}
                </Grid>
            </>
        );

    if (b === "typo")
        return (
            <>
                <div className="bg-dgray-200 h-[3.7rem] w-full"></div>
                <Grid>
                    <div className="flex items-center justify-around w-full space-x-36">
                        <div
                            className="box-border rounded-full 
      bg-white border border-black h-[2.5rem]
      flex justify-center items-center px-10 my-5"
                        >
                            <button>인기순</button> <button>최신순</button> <button>팔로우디자이너</button>
                        </div>
                        <SearchInput />
                    </div>
                    <hr className="w-full border " />
                    {p.map((n) => {
                        return <ArtWorkPost />;
                    })}
                </Grid>
            </>
        );

    if (b === "fashion")
        return (
            <>
                <div className="bg-dgray-200 h-[3.7rem] w-full"></div>
                <Grid>
                    <div className="flex items-center justify-around w-full space-x-36">
                        <div
                            className="box-border rounded-full 
      bg-white border border-black h-[2.5rem]
      flex justify-center items-center px-10 my-5"
                        >
                            <button>인기순</button> <button>최신순</button> <button>팔로우디자이너</button>
                        </div>
                        <SearchInput />
                    </div>
                    <hr className="w-full border " />
                    {p.map((n) => {
                        return <ArtWorkPost />;
                    })}
                </Grid>
            </>
        );

    if (b === "package")
        return (
            <>
                <div className="bg-dgray-200 h-[3.7rem] w-full"></div>
                <Grid>
                    <div className="flex items-center justify-around w-full space-x-36">
                        <div
                            className="box-border rounded-full 
      bg-white border border-black h-[2.5rem]
      flex justify-center items-center px-10 my-5"
                        >
                            <button>인기순</button> <button>최신순</button> <button>팔로우디자이너</button>
                        </div>
                        <SearchInput />
                    </div>
                    <hr className="w-full border " />
                    {p.map((n) => {
                        return <ArtWorkPost />;
                    })}
                </Grid>
            </>
        );

    if (b === "else")
        return (
            <>
                <div className="bg-dgray-200 h-[3.7rem] w-full"></div>
                <Grid>
                    <div className="flex items-center justify-around w-full space-x-36">
                        <div
                            className="box-border rounded-full 
      bg-white border border-black h-[2.5rem]
      flex justify-center items-center px-10 my-5"
                        >
                            <button>인기순</button> <button>최신순</button> <button>팔로우디자이너</button>
                        </div>
                        <SearchInput />
                    </div>
                    <hr className="w-full border " />
                    {p.map((n) => {
                        return <ArtWorkPost />;
                    })}
                </Grid>
            </>
        );
    else {
        return null;
    }
};

export default ArtWorkAllList;
