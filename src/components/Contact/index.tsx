import React from "react";
import { useForm } from "react-hook-form";
import { 
  FormErrorMessage, 
  FormLabel,
  FormControl,
  Input,
  Textarea,
  Button,
} from '@chakra-ui/react';

type Inputs = {
  example: string,
  exampleRequired: string,
};

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
      
      <FormControl isInvalid={errors.name?.message !== undefined}>
        <FormLabel htmlFor="name">Name: </FormLabel>
        <Input 
          id="name"
          placeholder="Enter your name..."
          { ...register("name", {required: "This field is required."}) } 
        />
        <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.email?.message !== undefined}>
        <FormLabel htmlFor="email">Email: </FormLabel>
        <Input 
          id="email"
          placeholder="Enter an email..."
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
        />
        <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="message">Message: </FormLabel>
        <Textarea 
          id="message"
          placeholder="Leave a message..."
          {...register("message")} 
        />
      </FormControl>

      <Button type="submit">Submit</Button>     
    </form>
  )
}