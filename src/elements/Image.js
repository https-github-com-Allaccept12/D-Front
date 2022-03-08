import React from "react";
import tw from "tailwind-styled-components";

const CircleImage = tw.img`
  bg-cover rounded-full m-1 w-12 h-12 border-2 border-yellow-200
  shadow-md 
`;

const SmallSquareImage = tw.img`
  bg-fixed m-1 rounded-md w-14 h-14 border-2 border-yellow-200
  opacity-80 contrast-125
`;


const BigSquareImage = tw.img`
  rounded-xl bg-center bg-contain w-80 h-80
`;

const DetailImage = tw.img`
  rounded-xl bg-center bg-contain md:max-w-xl max-w-sx
`;

const Image = (props) => {
  const { src, shape } = props;

  if (shape === "circle") {
    return <CircleImage src={src} />;
  }

  if (shape === "detail_square") {
    return <DetailImage src={src} />;
  }

  if (shape === "big_square") {
    return <BigSquareImage src={src} />;
  }

  if (shape === "small_square") {
    return <div className=""><SmallSquareImage style={{backgroundImage: `url(${src})`}} /> </div>;
  }
};

Image.defaultProps = {
  shape: "circle",
  src: "https://user-images.githubusercontent.com/89088205/155078987-592a07cd-a490-49fc-aabc-bc47cb508963.jpg",
};
 





export default Image;
