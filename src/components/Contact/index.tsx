import React from "react";
import { useForm, Controller } from "react-hook-form";

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
    handleSubmit,
    reset,
    control,
    formState: { errors }
  } = useForm(
    { defaultValues: {name: "", email: "", message: ""} }
  );

  console.log(errors);

  return (
    <form className="
        col-span-10
        grid grid-cols-12 grid-rows-6 justify-center
      "
      onSubmit={ handleSubmit((data) => console.log(data)) }
    >
      
      <FormControl 
        className="
          col-span-8
        " 
        required
        error={errors.name?.message !== undefined}
      >
        <Controller
          name="name"
          control={control}
          render={ ({field}) => {
              return (
                <TextField {...field} 
                  label="Name:" color="primary"
                  helperText={errors.name?.message}
                />
              )
            }
          }
          rules={
            {required: "This field is required."}
          }
        />
      </FormControl>

      <FormControl
          className="
          col-span-8
        "  
        error={errors.email?.message !== undefined}
        required
      >
        <Controller
          name="email"
          control={control}
          render={
            ({field}) => {
              return (
                <TextField {...field} 
                  label="Email:" color="primary" 
                  helperText={errors.email?.message}
                />
              )
            }
          }
          rules={
            {pattern: {
                value: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
                message: "Enter a valid email address."
              }
            }
          }
        />
      </FormControl>

      <FormControl className="
          col-span-8
        " >
        <Controller
          name="message"
          control={control}
          render={
            ({field}) => {
              return (
                <TextField {...field} 
                  label="Message:" color="primary" 
                  multiline
                />
              )
            }
          }
        />
      </FormControl>

      <Button 
        type="submit"
        variant="outlined" 
        // borderRadius={'sm'}
      >Submit</Button>     
    </form>
  )
}