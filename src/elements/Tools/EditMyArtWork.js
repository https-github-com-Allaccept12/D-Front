import React from "react";
import tw from "tailwind-styled-components";


const ArtWorkImage = tw.img`
overflow-hidden object-cover object-center rounded-md
w-t01 h-t01 relative
${(props) => (props.size === "1" ? `` : "")};
`;

const Hover = tw.div`
rounded-md w-t01 h-t01 relative
${(props) => (props.size === "1" ? `` : "")};
`;

const Actives = tw.div`
absolute w-t01 h-t01 z-10 bg-yellow-200 top-0 rounded-md
opacity-0 hover:opacity-80
`
const Constan = tw.div`
absolute w-t01 h-t01 z-10 top-0 rounded-md

`

const Edit = tw.div`
absolute top-40 left-20
`
const FlexBox = tw.div`
 flex flex-row w-full gap-4
`
const Icons = tw.div`
rounded-full bg-white w-20 h-20 justify-center flex flex-row items-center
hover:scale-110 opacity-100 cursor-pointer
`

const BadgeBox = tw.div`
w-full flex flex-row justify-end items-end
`
const Badge = tw.div`
w-14 h-14 rounded-full bg-white flex justify-center items-center
opacity-100 hover:scale-110 cursor-pointer
`


const EditMyArtWork = (props) => {
  const { src, size } = props;
    return (
        <>
          <Hover>
           <ArtWorkImage src={src} size={size} />
           <Actives>
<Edit>
<FlexBox>
<Icons>수정</Icons>
<Icons>삭제</Icons>
<Icons>대표작품</Icons>
<Icons>비공개</Icons>
</FlexBox>
</Edit>


           </Actives>
<Constan>
<BadgeBox>
   <Badge>dd</Badge>
   <Badge>dd</Badge>
   <Badge>dd</Badge>
</BadgeBox>
</Constan>
    </Hover>
    

    </>
    )
}

EditMyArtWork.defaultProps = {
  src: "https://user-images.githubusercontent.com/89088205/155078987-592a07cd-a490-49fc-aabc-bc47cb508963.jpg",
  size: "1",
};
 





export default EditMyArtWork;
