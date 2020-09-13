import React from "react";
import Form from './component/Form';
import Home from './component/Home';
import formSchema from './component/formSchema';
import {Route, Switch, Link} from 'react-router-dom';

const App = () => {
  return (
    <>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/pizza'>Order</Link>
      </nav>
      <Switch>
      <Route path='/pizza'>
        <Form />
      </Route>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
    </>

  );
};
export default App;
