import React, { useState, useReducer, useEffect } from 'react';

import '../assets/css/style.css';
import '../assets/css/Contact.css'

// import ContactForm from './contactForm';

interface Form<Type> {
  name: Type;
  email: Type;
  message: Type;
};
interface FormState extends Form<string> {
  errors: Form<boolean>;
}

const initialState: FormState = {
  name: "", 
  email: "", 
  message: "", 
  errors: { 
    name: false, 
    email: false, 
    message: false 
  }
};
const reducer = (state: FormState, action: {type: string, payload?: string}) => {
  if (action.payload === undefined) {
    switch (action.type) {
      case "error_name":
        return {...state, errors: {...state.errors, name: !state.errors.name}};
      case "error_email":
        return {...state, errors: {...state.errors, email: !state.errors.email}};
      case "error_message":
        return {...state, errors: {...state.errors, message: !state.errors.message}};
      default: return state;
    }
  }
  switch (action.type) {
    case "name":
      return {...state, name: action.payload};
    case "email":
      return {...state, email: action.payload};
    case "message":
      return {...state, message: action.payload};
    default: return state;
  }
};

export default function Contact() {
  const [formState, dispatch] = useReducer(reducer, initialState);

  const [emailValid, setEmailValid] = useState('');
  const [selected, setSelected] = useState('')

  // const handleClick = (event:React.MouseEvent<HTMLDivElement>) => { // remove Err from input when clicked
  //   const { id } = event.target;
    
  //   switch (id) {
  //     case 'name':
  //       setFormErr( {...formErr, name: false} ) ;
  //       break;
  //     case 'email':
  //       setFormErr( {...formErr, email: false} );
  //       break;
  //     case 'message':
  //       setFormErr( {...formErr, message: false} );
  //       break;
  //   }
  //   setSelected(id);
  // };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => { // save input data as states
    console.log(event);
    const { id, value } = event.target;
    dispatch({type: id, payload: value});
    
    // switch (id) {
    //   case 'name':
    //     setFormState( {...formState, name: value} );
    //     break;
    //   case 'email':
    //     setFormState( {...formState, email: value} );
    //     setEmailValid(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(formState.email) ? true : false);
    //     break;
    //   case 'message':
    //     setFormState( {...formState, message: value} );
    //     break;
    // }
  };
  // const handleFormSubmit = (event: React.SyntheticEvent) => {
  //   event.preventDefault();
  
  //   setFormErr({ 
  //     name: formState.name === '' ? true : null, 
  //     email: formState.email === '' ? true : null, 
  //     message: formState.message === '' ? true : null 
  //   });
  //   if ( !([ formErr.name, formErr.email, formErr.message ].includes(true)) ) {
  //     setFormState({ name: '', email: '', message: '' });
  //   };
  // };

  // const errStatus = (state, err, selectedState, htmlId) => {
  //   if (err === true || (err === false && selectedState !== htmlId && state === '')) {
  //     return <span className='error'>* This field is required.</span>
  //   }
  // };

  // const emailStatus = () => {
  //   if (formErr.email === true || emailValid === false || (formErr.email === false && selected !== 'email' && emailValid === false)) {
  //     return <span className='error'>Enter a valid email address.</span>
  //   }
  // }

  return (
    <div 
      // onClick={handleClick} 
      className='col-12 flex-row justify-center '
    >
      <h2 className='title col-12 col-md-9 text-center'>Contact Me</h2>

      <form 
        // onSubmit={handleFormSubmit} 
        className='col-12 col-md-9 col-lg-8 col-xl-7'
      >
        <div className='col-12 flex-row justify-center'>

          <label 
            htmlFor='name' 
            className='col-10 pb-1'
          >
            {/* Name: {errStatus(formState.name, formErr.name, selected, 'name')} */}
          </label>
          <input 
            type='text' 
            id='name' 
            // value={formState.name} 
            onChange={handleChange} 
            className='col-10' 
          />
        </div>

        <div className='col-12 flex-row justify-center'>

          <label 
           htmlFor='email' 
            className='col-10 pb-1'
          >
            {/* Email Address: {errStatus(formState.email, formErr.email, selected, 'email')} {emailStatus()} */}
          </label>
          <input 
            type='text' 
            id='email' 
            value={formState.email} 
            onChange={handleChange} 
            className='col-10'  
          />
        </div>

        <div className='col-12 flex-row justify-center'>

          <label 
            htmlFor='message' 
            className='col-10 pb-1'
          >
            {/* Message: {errStatus(formState.message, formErr.message, selected, 'message')} */}
          </label>
          <textarea 
            // type='text' 
            id='message' 
            value={formState.message} 
            onChange={handleChange} 
            className='col-10' 
          />
        </div>

        <div className='col-12 pt-3 flex-row justify-center'>

          <input className='col-10' type='submit' />
        </div>
      </form>
    </div>
  )
};