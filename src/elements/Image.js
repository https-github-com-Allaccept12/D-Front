import React from "react";
import tw from "tailwind-styled-components";

const CircleImage = tw.img`
  bg-cover rounded-full m-1 w-12 h-12 border-2 border-yellow-200
  shadow-md 
  ${(props) => (props.size === "x-small" ? `w-6 h-6` : "")};
  ${(props) => (props.size === "small" ? `w-10 h-10` : "")};
  ${(props) => (props.size === "large" ? `w-20 h-20` : "")};
  ${(props) => (props.size === "5xl" ? `w-80 h-80` : "")};
`;

const SmallSquareImage = tw.img`
  bg-fixed m-1 rounded-md w-14 h-14 border-2 border-yellow-200
  opacity-80 contrast-125
`;


const BigSquareImage = tw.img`
  rounded-xl bg-center bg-contain w-56 h-72
`;

const DetailImage = tw.img`
  rounded-xl bg-center bg-contain md:max-w-xl max-w-sx
`;

const ArtWorkImage = tw.img`
w-64 h-64 bg-blue-300
`;

const Image = (props) => {
  const { src, shape, size } = props;

  if (shape === "circle") {
    return <CircleImage src={src} size={size} />;
  }

  if (shape === "detail_square") {
    return <DetailImage src={src} size={size} />;
  }

  if (shape === "art_work") {
    return <ArtWorkImage src={src} size={size} />;
  }

  if (shape === "big_square") {
    return <BigSquareImage src={src} size={size} />;
  }

  if (shape === "small_square") {
    return <div className=""><SmallSquareImage style={{backgroundImage: `url(${src})`}} /> </div>;
  }
};

Image.defaultProps = {
  shape: "circle",
  src: "https://user-images.githubusercontent.com/89088205/155078987-592a07cd-a490-49fc-aabc-bc47cb508963.jpg",
  size: "s"
};
 





export default Image;
