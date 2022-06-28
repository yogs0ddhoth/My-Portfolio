import React, { useState, useReducer, useEffect } from 'react';

import '../assets/css/style.css';
import '../assets/css/Contact.css'

import ContactForm from '../components/Contact'
import { ChakraProvider } from '@chakra-ui/react';

// interface Form<Type> {
//   name: Type;
//   email: Type;
//   message: Type;
// };
// interface FormState extends Form<string> {
//   selected: Array<string>
//   errors: Form<string | boolean>;
// }

// const initialState: FormState = {
//   name: "", 
//   email: "", 
//   message: "", 
//   selected: [],
//   errors: { 
//     name: false, 
//     email: false, 
//     message: false 
//   }
// };
// const reducer = (state: FormState, action: {type: string, payload?: string | boolean}): FormState => {
//   if (action.payload === undefined) {
//     switch (action.type) {
//       case "clear_form":
//         return {...state, name: "", email: "", message: ""};
//       case "clear_error_email":
//         return {...state, errors: {...state.errors, email: false}}
//       // case "clear_errors": 
//       //   return {...state, errors: {name: false, email: false, message: false}};
//       case "reset":
//         return initialState;
//       default: return state;
//     }
//   }
//   if (action.payload === true || action.payload === false) {
//     switch (action.type) {
//       case "error_name":
//         return {...state, errors: {...state.errors, name: action.payload}};
//       case "error_message":
//         return {...state, errors: {...state.errors, message: action.payload}};
//       default: return state;
//     }
//   }
//   switch (action.type) {
//     case "name":
//       return {...state, name: action.payload};
//     case "email":
//       return {...state, email: action.payload};
//     case "message":
//       return {...state, message: action.payload};
//     case "select":
//       if (state.selected.includes(action.payload)) {
//         return state;
//       } else {
//         return {...state, selected: [...state.selected, action.payload]};
//       }
//     case "error_email":
//       return {...state, errors: {...state.errors, email: action.payload}};
//     default: return state;
//   } 
// };

export const Contact = () => {
  // const [formState, dispatch] = useReducer(reducer, initialState);

  // useEffect(() => {
  //   if (formState.selected.includes("name") && formState.name === "") {
  //     dispatch({ type: "error_name", payload: true });
  //   } else {
  //     dispatch({ type: "error_name", payload: false });
  //   }
  // }, [formState.name]);

  // useEffect(() => {
  //   if (formState.email !== "") {

  //     if (!/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(formState.email)) {
  //       dispatch({ type: "error_email", payload: "invalid"});
  //     } else {
  //       dispatch({ type: "clear_error_email"})
  //     }
  //   }
  // }, [formState.email]);

  // useEffect(() => {
  //   if (formState.selected.includes("message") && formState.message === "") {
  //     dispatch({ type: "error_message", payload: true });
  //   } else {
  //     dispatch({ type: "error_message", payload: false });
  //   }
  // }, [formState.message]);

  // const handleClick = (event:React.MouseEvent<HTMLDivElement | HTMLInputElement | HTMLTextAreaElement>) => { 
  //   const { id } = event.target as Element;
  //   if (id !== "") {
  //     dispatch({type: "select", payload: id});
  //   };
  // };
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   const { id, value } = event.target;
  //   dispatch({ type: id, payload: value });
  // };

  // const handleFormSubmit = (event: React.SyntheticEvent) => {
  //   event.preventDefault();
  //   if ( [formState.errors.name, formState.errors.email, formState.errors.message].filter(el => el === false).length === 3 ) {
  //     dispatch({type: "reset"})
  //   } else {
  //     dispatch({type: "clear_form"});
  //   }
  // };

  // const errStatus = (errorState: string | boolean, fieldState?: string, htmlId?: string) => {
  //   if (errorState !== false) {
  //     return <span className='error'> This field is required.</span>;
  //   }
  // };

  // const emailStatus = () => {
  //   if (formState.errors.email === "invalid") {
  //     return <span className='error'> Enter a valid email address.</span>;
  //   }
  // }

  return (
    // <div onClick={handleClick} className='col-12 flex-row justify-center '>
      
      // <h2 className='title col-12 col-md-9 text-center'>
      //   Contact Me
      // </h2>
    //   <form onSubmit={handleFormSubmit} className='col-12 col-md-9 col-lg-8 col-xl-7'>
    //     <div className='col-12 flex-row justify-center'>

    //       <label htmlFor='name' className='col-10 pb-1'>
    //         Name: <span>*</span>
    //         {errStatus(formState.errors.name)}
    //       </label>
    //       <input 
    //         placeholder='Name'
    //         type='text' 
    //         id='name' 
    //         value={formState.name} 
    //         onChange={handleChange} 
    //         className='col-10' 
    //       />
    //     </div>

    //     <div className='col-12 flex-row justify-center'>

    //       <label htmlFor='email' className='col-10 pb-1'>
    //         Email: <span>*</span>
    //         {errStatus(formState.errors.email)} 
    //         {emailStatus()}
    //       </label>
    //       <input 
    //         placeholder='Email'
    //         type='text' 
    //         id='email' 
    //         value={formState.email} 
    //         onChange={handleChange} 
    //         className='col-10'  
    //       />
    //     </div>

    //     <div className='col-12 flex-row justify-center'>

    //       <label htmlFor='message' className='col-10 pb-1'>
    //         Message: 
    //         {errStatus(formState.errors.message)}
    //       </label>
    //       <textarea 
    //         // type='text'
    //         placeholder='Message' 
    //         id='message' 
    //         value={formState.message} 
    //         onChange={handleChange} 
    //         className='col-10' 
    //       />
    //     </div>

    //     <div className='col-12 pt-3 flex-row justify-center'>
    //       <button className='col-10' type='submit'>Submit</button>
    //     </div>
    //   </form>

      <div>
        <h2 className='title col-12 col-md-9 text-center'>
          Contact Me
        </h2>
        <ContactForm />
      </div>
    // </div>
  )
};