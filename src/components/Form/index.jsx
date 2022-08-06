import React, { useReducer } from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  Container
} from '@chakra-ui/react'

const initState = {
  value: '',
  touched: false,
  error: null
}

const reducer = (state, { type, payload} ) => {
  switch(type) {
    case 'UPDATE':
      return {
        value: payload.value,
        touched: true,
        error: payload.error
      }
    
    case 'RESET':
      return initState
    
    default:
      throw new Error('Trying to dispatch an unknown action type of ', type)
  }
}


function Form() {

  const [nameState, dispatchName] = useReducer(reducer, initState)
  const [pwState, dispatchPw]  = useReducer(reducer, initState)

  const handleNameChange = (e) => {
    dispatchName({
      type: 'UPDATE',
      payload: {
        value: e.target.value,
        touched: true,
        error: nameState.touched ? e.target.value.length < 3 ? true : null : null
      }
    })
  }

  const handlePwChange = (e) => {
    dispatchPw({
      type: 'UPDATE',
      payload: {
        value: e.target.value,
        touched: true,
        error: nameState.touched ? e.target.value.length < 6 ? true : null : null
      }
    })
  }

  

  return (
    <Container mt="20">
      <FormControl p="10" bg="gray.600" color="gray.200" borderRadius="lg">
      <FormLabel fontSize="xl">Name</FormLabel>
      <Input
        value={nameState.value}
        onChange={handleNameChange}
        isInvalid={nameState.error}
        errorBorderColor='crimson' 
        type='text' 
        fontSize="xl"/>

      <FormLabel fontSize="xl" mt="5">Password</FormLabel>
      <Input
        value={pwState.value}
        onChange={handlePwChange}
        isInvalid={pwState.error}
        errorBorderColor='crimson' 
        type='password'
         fontSize="xl"/>

      <FormHelperText  color="gray.200">Validation powered by useReducer.</FormHelperText>

      <Button 
        isDisabled={pwState.error || nameState.error}
        colorScheme='teal' 
        size='md' 
        mt="5">
        Submit
      </Button>
    </FormControl>
    </Container>
    
  )
}

export default Form
