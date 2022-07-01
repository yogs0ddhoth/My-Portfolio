import React from "react";
import { useForm } from "react-hook-form";

import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
// type Inputs = {
//   example: string,
//   exampleRequired: string,
// };

export default function ContactForm() {
  const {
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting }
  } = useForm(
    { defaultValues: {name: "", email: "", message: ""} }
  );

  console.log(errors);

  return (
    <form onSubmit={ handleSubmit((data) => console.log(data)) }>
      
      <FormControl 
        required
        error={errors.name?.message !== undefined}
      >
        <TextField 
          id="name"
          label="Name:"
          color="primary"
          // borderRadius={'sm'}
          { ...register("name", {required: "This field is required."}) }
          helperText={errors.name?.message}
        />
      </FormControl>

      <FormControl 
        error={errors.email?.message !== undefined}
        required
      >
        <TextField 
          id="email"
          label="Email:"
          // borderRadius={'sm'}
          { ...register("email",
              {
                required: "This field is required.", 
                pattern: {
                  value: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
                  message: "Enter a valid email address."
                } 
              }
            )
          }
          helperText={errors.email?.message} 
        />
      </FormControl>

      <FormControl>
        <TextField 
          id="message"
          label="Message:"
          multiline
          // borderRadius={'sm'}
          {...register("message")} 
        />
      </FormControl>

      <Button 
        variant="outlined" 
        // borderRadius={'sm'}
      >Submit</Button>     
    </form>
  )
}