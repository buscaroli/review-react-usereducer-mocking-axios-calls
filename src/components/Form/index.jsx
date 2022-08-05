import React from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  Container
} from '@chakra-ui/react'


function Form() {
  return (
    <Container mt="20">
      <FormControl p="10" bg="gray.600" color="gray.200" borderRadius="lg">
      <FormLabel fontSize="xl">Email address</FormLabel>
      <Input type='email' fontSize="xl"/>

      <FormLabel fontSize="xl" mt="5">Password</FormLabel>
      <Input type='password' fontSize="xl"/>

      <FormHelperText  color="gray.200">Validation powered by useReducer.</FormHelperText>

      <Button colorScheme='teal' size='md' mt="5">
        Submit
      </Button>
    </FormControl>
    </Container>
    
  )
}

export default Form
