import React from 'react';
import { Link, Route, Switch, useLocation } from 'react-router-dom';
import { DimoCategory, DimoAllList } from "../components/Dimo";

import { Title } from "../elements"



const Dimo = () => {
  const location = useLocation();
const a = location.pathname
const b = a.split("/")[2]
    return (
      <>
      <div className='bg-dgray-200 min-h-screen'>
        <div className="flex flex-row p-4 pl-10 gap-3">
      <Title size="6"><Link to="/dimo/qna/all">QNA</Link></Title>
     <Title size="6"><Link to="/dimo/shared/all">정보공유</Link></Title>
     </div>
     <div className='flex flex-row'> 


     <DimoCategory list={b} />
     </div>
    
  <Switch>

        <Route exact path={['/dimo/qna/:name', '/dimo/shared/:name']} component={DimoAllList} />



        </Switch>
        </div>
      </>
    );
  };
  
  export default Dimo;