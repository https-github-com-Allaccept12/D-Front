import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import {DimoCategory, DimoQNADetail, DimoDetail} from "../components";
import { CreateDimo } from '../creates';
import { Title } from "../elements"

const Dimo = () => {
    return (
      <>
     <div className='flex flex-row'> 
     <Title size="6"><Link to="/dimoqna">디모1</Link></Title>
     <Title size="6"><Link to="/dimoshared">디모2</Link></Title>
     </div>

  <Switch>
        <Route exact path={['/dimoqna', '/dimoshared']} component={DimoCategory} />
        <Route exact path="/dimoshared" component={DimoCategory} />
        <Route exact path="/dimodetail" component={DimoDetail} />
        <Route exact path="/dimoqnadetail" component={DimoQNADetail} />
        <Route exact path="/createdimo/qna" component={CreateDimo} />
        <Route exact path="/createdimo/shared" component={CreateDimo} />
        </Switch>
      </>
    );
  };
  
  export default Dimo;