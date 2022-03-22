import React from 'react';
import { Link, Route, Switch, useLocation } from 'react-router-dom';
import { DimoCategory, DimoAllList, DimoPage } from "../components/Dimo";

import { Title, Button } from "../elements"



const Dimo = () => {
  const location = useLocation();
const a = location.pathname
const b = a.split("/")[2]
const c = a.split("/")[3]

    return (
      <>


      <div className='bg-dgray-200 min-h-screen'>
        <div className="flex flex-row p-4 pl-10 gap-3">
    {b === "qna" ?  <Title size="6" className="text-dpurple-200"><Link to="/dimo/qna/all">QNA</Link></Title> : <Title size="6"><Link to="/dimo/qna/all">QNA</Link></Title> } 

    {b === "shared" ?  <Title size="6" className="text-dpurple-200"><Link to="/dimo/shared/all">정보공유</Link></Title> :  <Title size="6"><Link to="/dimo/shared/all">정보공유</Link></Title> } 

    
     </div>

     <div className='flex flex-row'> 
     <DimoCategory list={b} />
     </div>
    <div className='grid grid-cols-4'>
        <div className='md:ml-28 mt-4 w-40 h-[112.5rem] '>
        <DimoPage list={b}/> 
        </div>
    <div className="col-start-2 col-end-5">
        <DimoAllList list={c} />
        </div>
        </div>


      

        </div>
      </>
    );
  };
  
  export default Dimo;