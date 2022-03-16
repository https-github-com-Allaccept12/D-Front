import React from "react";
import { Button, Image } from "../../elements";

import { Link,  useLocation } from "react-router-dom";


const MyInterests = (props) => {
  const location = useLocation();
  const a = location.pathname
  return (
<div className="grid col-start-1 col-end-8 bg-yellow-400">
  
{/* {!a === "/editmyspace" ?
  <button className="col-start-5 row-start-1"><Link to="/createprofile">다음으로 넘어가기</Link>
  </button>
  : ""} */}
<div className="grid col-start-1 col-end-4 row-start-1 row-end-3 mx-1 my-1 bg-green-200"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/400px-React-icon.svg.png"/></div>
<div className="grid col-start-4 col-end-6 row-start-1 row-end-3 mx-1 my-1 bg-green-400"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/400px-React-icon.svg.png"/></div>
<div className="grid col-start-6 col-end-8 row-start-1 row-end-4 mx-1 my-1 bg-purple-400"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/400px-React-icon.svg.png"/></div>
<div className="grid col-start-1 col-end-3 row-start-3 row-end-5 mx-1 my-1 bg-green-600"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/400px-React-icon.svg.png"/></div>
<div className="grid col-start-3 col-end-6 row-start-3 row-end-6 mx-1 my-1 bg-blue-600"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/400px-React-icon.svg.png"/></div>
<div className="grid col-start-6 col-end-8 row-start-4 row-end-6 mx-1 my-1 bg-red-200"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/400px-React-icon.svg.png"/></div>
<div className="grid col-start-1 col-end-3 row-start-5 row-end-7 mx-1 my-1 bg-green-400"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/400px-React-icon.svg.png"/></div>
<div className="grid col-start-3 col-end-5 row-start-6 row-end-7 mx-1 my-1 bg-red-400"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/400px-React-icon.svg.png"/></div>
<div className="grid col-start-5 col-end-8 row-start-6 row-end-7 mx-1 my-1 bg-blue-400"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/400px-React-icon.svg.png"/></div>
<div className="grid col-start-1 col-end-4 row-start-7 mx-1 my-1 bg-pink-400 row-end-8"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/400px-React-icon.svg.png"/></div>
<div className="grid col-start-4 col-end-8 row-start-7 mx-1 my-1 bg-white row-end-8"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/400px-React-icon.svg.png"/></div>

    {/* <div className="">
        관심사를 정해주세여
    </div>
          <div className="">

<section className="text-gray-600 body-font ">
  <div className="container px-5 py-2 mx-auto">

    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/3 sm:w-1/2">
        <div className="relative flex">
          <img alt="gallery" className="absolute inset-0 object-cover object-center w-full h-full" src="https://dummyimage.com/600x360" />
          <div className="relative z-10 w-full px-8 py-10 bg-white border-4 border-gray-200 opacity-0 hover:opacity-100">
            <h2 className="mb-1 text-sm font-medium tracking-widest text-indigo-500 title-font">THE SUBTITLE</h2>
            <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">Shooting Stars</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/3 sm:w-1/2">
        <div className="relative flex">
          <img alt="gallery" className="absolute inset-0 object-cover object-center w-full h-full" src="https://dummyimage.com/601x361" />
          <div className="relative z-10 w-full px-8 py-10 bg-white border-4 border-gray-200 opacity-0 hover:opacity-100">
            <h2 className="mb-1 text-sm font-medium tracking-widest text-indigo-500 title-font">THE SUBTITLE</h2>
            <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">The Catalyzer</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/3 sm:w-1/2">
        <div className="relative flex">
          <img alt="gallery" className="absolute inset-0 object-cover object-center w-full h-full" src="https://dummyimage.com/603x363" />
          <div className="relative z-10 w-full px-8 py-10 bg-white border-4 border-gray-200 opacity-0 hover:opacity-100">
            <h2 className="mb-1 text-sm font-medium tracking-widest text-indigo-500 title-font">THE SUBTITLE</h2>
            <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">The 400 Blows</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/3 sm:w-1/2">
        <div className="relative flex">
          <img alt="gallery" className="absolute inset-0 object-cover object-center w-full h-full" src="https://dummyimage.com/602x362" />
          <div className="relative z-10 w-full px-8 py-10 bg-white border-4 border-gray-200 opacity-0 hover:opacity-100">
            <h2 className="mb-1 text-sm font-medium tracking-widest text-indigo-500 title-font">THE SUBTITLE</h2>
            <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">Neptune</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/3 sm:w-1/2">
        <div className="relative flex">
          <img alt="gallery" className="absolute inset-0 object-cover object-center w-full h-full" src="https://dummyimage.com/605x365" />
          <div className="relative z-10 w-full px-8 py-10 bg-white border-4 border-gray-200 opacity-0 hover:opacity-100">
            <h2 className="mb-1 text-sm font-medium tracking-widest text-indigo-500 title-font">THE SUBTITLE</h2>
            <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">Holden Caulfield</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/3 sm:w-1/2">
        <div className="relative flex">
          <img alt="gallery" className="absolute inset-0 object-cover object-center w-full h-full" src="https://dummyimage.com/606x366" />
          <div className="relative z-10 w-full px-8 py-10 bg-white border-4 border-gray-200 opacity-0 hover:opacity-100">
            <h2 className="mb-1 text-sm font-medium tracking-widest text-indigo-500 title-font">THE SUBTITLE</h2>
            <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">Alper Kamu</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/3 sm:w-1/2">
        <div className="relative flex">
          <img alt="gallery" className="absolute inset-0 object-cover object-center w-full h-full" src="https://dummyimage.com/606x366" />
          <div className="relative z-10 w-full px-8 py-10 bg-white border-4 border-gray-200 opacity-0 hover:opacity-100">
            <h2 className="mb-1 text-sm font-medium tracking-widest text-indigo-500 title-font">THE SUBTITLE</h2>
            <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">Alper Kamu</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/3 sm:w-1/2">
        <div className="relative flex">
          <img alt="gallery" className="absolute inset-0 object-cover object-center w-full h-full" src="https://dummyimage.com/606x366" />
          <div className="relative z-10 w-full px-8 py-10 bg-white border-4 border-gray-200 opacity-0 hover:opacity-100">
            <h2 className="mb-1 text-sm font-medium tracking-widest text-indigo-500 title-font">THE SUBTITLE</h2>
            <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">Alper Kamu</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/3 sm:w-1/2">
        <div className="relative flex">
          <img alt="gallery" className="absolute inset-0 object-cover object-center w-full h-full" src="https://dummyimage.com/606x366" />
          <div className="relative z-10 w-full px-8 py-10 bg-white border-4 border-gray-200 opacity-0 hover:opacity-100">
            <h2 className="mb-1 text-sm font-medium tracking-widest text-indigo-500 title-font">THE SUBTITLE</h2>
            <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">Alper Kamu</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



                </div>

                
            */}



</div>
  );
};

export default MyInterests;