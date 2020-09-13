import React, {useState, useEffect} from "react";
import Form from './component/Form';
import Home from './component/Home';
import formSchema from './component/formSchema';
import {Route, Switch, Link} from 'react-router-dom';
import * as yup from 'yup';

const initialFormValues = {
  first_name: '',
  size: '',
  toppings:{
    pepperoni: false,
    chicken: false,
    onions: false,
    tomatoes: false,
  },
  substitute: false,

  instructions:'',
}

const initialFormErrors = {
  first_name:'',
  size: '',
  instructions: '',
}

const initialDisabled = true;


const App = () => {

  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const onInputChange = event => {
    const name = event.target.name
    const value = event.target.value

    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: ''
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      })
      setFormValues({
        ...formValues,
        [name]: value
      })
  }
  const onCheckboxChange = event => {
    const {name} = event.target
    const {checked} = event.target

    setFormValues({
      ...formValues,
      toppings: {
        ...formValues.toppings,
        [name]: checked,
      }
    })
  }
  const onSubmit = event => {
    event.preventDefault()
  };

    useEffect(() =>{
      formSchema.isValid(formValues)
      .then(valid => {
        setDisabled(!valid)
      })
    },[formValues])

  return (
    <>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/pizza'>Order</Link>
      </nav>
      <Switch>
      <Route path='/pizza'>
        <Form 
        values={formValues} 
        onInputChange={onInputChange}
        onCheckboxChange={onCheckboxChange}
        onSubmit={onSubmit}
        errors={formErrors}
        disabled={disabled}
        />
      </Route>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
    </>

  );
};
export default App;
