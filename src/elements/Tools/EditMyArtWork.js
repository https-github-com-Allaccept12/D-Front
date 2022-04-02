import React from "react";
import CircleBtn from "../Icons/CircleBtn";
import tw from "tailwind-styled-components";

const ArtWorkImage = tw.img`
overflow-hidden object-cover object-center rounded-md
xl:w-t01 xl:h-t01 relative w-t03 h-t03
${(props) => (props.size === "1" ? `` : "")};
`;

const Hover = tw.div`
rounded-md xl:w-t01 xl:h-t01 relative w-t03 h-t03 
${(props) => (props.size === "1" ? `` : "")};
`;

const Actives = tw.div`
absolute xl:w-t01 xl:h-t01 z-10 bg-dgray-600 top-0 rounded-md
opacity-0 hover:opacity-80 h-t03 w-t03 
`;
const Constan = tw.div`
absolute xl:w-t01 w-t03 h-20 z-10 top-0 rounded-md

`;

const Edit = tw.div`
absolute top-24 left-6 xl:top-44 xl:left-28
`;
const FlexBox = tw.div`
 w-full gap-4 flex flex-row
`;

const BadgeBox = tw.div`
w-full flex flex-row justify-end items-end gap-3 p-5
`;

const EditMyArtWork = (props) => {
    const { src, size } = props;
    return (
        <>
            <Hover>
                <ArtWorkImage src={src} size={size} />
                <Actives>
                    <Edit>
                        <FlexBox>
                            <CircleBtn name="Edit"></CircleBtn>
                            <CircleBtn name="Delete"></CircleBtn>
                            <CircleBtn name="MyStar"></CircleBtn>
                            <CircleBtn name="Private"></CircleBtn>
                        </FlexBox>
                    </Edit>
                </Actives>
                <Constan>
                    <BadgeBox>
                        <CircleBtn name="MyStarMini" states="true" />
                        <CircleBtn name="PrivateMini" states="false" />
                    </BadgeBox>
                </Constan>
            </Hover>
        </>
    );
};

EditMyArtWork.defaultProps = {
    src: "https://user-images.githubusercontent.com/89088205/155078987-592a07cd-a490-49fc-aabc-bc47cb508963.jpg",
    size: "1",
};

export default EditMyArtWork;
