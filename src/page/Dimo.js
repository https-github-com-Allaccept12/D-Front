import React from 'react';
import { Link, Route, Switch, useLocation } from 'react-router-dom';
import {DimoCategory,DimoQNADetail, DimoDetail, DimoAllList } from "../components";
import CreateDimo from '../components/Dimo/CreateDimo';
import { Title } from "../elements"



const Dimo = () => {
  const location = useLocation();
const a = location.pathname
const b = a.split("/")[2]
    return (
      <>
      <div className='bg-dgray-200 min-h-screen'>
     <div className='flex flex-row'> 
     <Title size="6"><Link to="/dimo/qna/all">디모1</Link></Title>
     <Title size="6"><Link to="/dimo/shared/all">디모2</Link></Title>

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