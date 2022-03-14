import React from "react";
import { Button, Image } from "../../elements";

import { useHistory } from "react-router-dom";


const MyArtWork = (props) => {
  let history = useHistory();
  return (
    <>
    <div className="bg-yellow-300 py-2">
      <div className="col-start-2 col-span-4">내 포트폴리오</div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-2 mx-auto">

    <div className="flex flex-wrap -m-4">

      <div className="sm:w-1/2 p-4">
        <div className="flex relative h-96">
          <Image shape="myartwork" />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">호버하면서 수정삭제</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Alper Kamu</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>

      <div className="sm:w-1/2 p-4">
        <div className="flex relative h-96">
        <Image shape="myartwork" />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">호버하면서 수정삭제</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Alper Kamu</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>

      <div className="sm:w-1/2 p-4">
        <div className="flex relative h-96">
        <Image shape="myartwork" />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">호버하면서 수정삭제</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Alper Kamu</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>

      <div className="sm:w-1/2 p-4">
        <div className="flex relative h-96">
        <Image shape="myartwork" />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">호버하면서 수정삭제</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Alper Kamu</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* <div className="col-start-2"><Image shape="myartwork" /></div>
      <div className="col-start-3"><Image shape="myartwork" /></div>
      <div className="row-start-2 col-start-2"><Image shape="myartwork" /></div>
      <div className="row-start-2 col-start-3"><Image shape="myartwork" /></div> */}
     
</div>
    </>
  );
};

export default MyArtWork;