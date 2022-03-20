import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import {DimoCategory, DimoQNADetail, DimoDetail} from "../components";
import { CreateDimo } from '../creates';
import { Title } from "../elements"

const Dimo = () => {
    return (
      <>
     <div className='flex flex-row'> 
     <Title size="6"><Link to="/dimo/qna">디모1</Link></Title>
     <Title size="6"><Link to="/dimo/shared">디모2</Link></Title>
     </div>

  <Switch>
        <Route exact path={['/dimo/qna', '/dimo/shared']} component={DimoCategory} />
        <Route exact path="/dimo/shared" component={DimoCategory} />
        <Route exact path="/dimo/detail" component={DimoDetail} />
        <Route exact path="/dimo/qnadetail" component={DimoQNADetail} />
        <Route exact path="/dimo/create/qna" component={CreateDimo} />
        <Route exact path="/dimo/create/shared" component={CreateDimo} />
        </Switch>
      </>
    );
  };
  
  export default Dimo;