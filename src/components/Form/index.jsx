import React, { useReducer, useRef, useEffect } from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  Container
} from '@chakra-ui/react'

const initState = {
  name: {
    value: '',
    touched: false,
    error: null
  },
  password: {
    value: '',
    touched: false,
    error: null
  }
}

const reducer = (state, action ) => {
  switch(action.type) {
    case 'UPDATE_NAME':
      return {
        ...state,
        name: action.payload.name
      }

    case 'UPDATE_PW':
      return {
        ...state,
        password: action.payload.password
      }
    
    case 'RESET':
      return initState
    
    default:
      throw new Error('Trying to dispatch an unknown action type of ', action.type)
  }
}


function Form() {

  // using useRef in combination with useEffect to focus the name Input on page load
  const nameRef = useRef()
  useEffect(() => {
    nameRef.current.focus()
  }, [])

  const [state, dispatch] = useReducer(reducer, initState)
  
  const handleInputChange = (e) => {
    const key = e.target.name
    
    if (key === 'name') {
      dispatch({
        type: 'UPDATE_NAME',
        payload: {
          name : {
            value: e.target.value,
            touched: true,
            error: state.name.touched ? e.target.value.length < 3 ? true : null : null
          }
        }
      })
    }
    else if (key === 'password') {
      dispatch({
        type: 'UPDATE_PW',
        payload: {
          password : {
            value: e.target.value,
            touched: true,
            error: state.password.touched ? e.target.value.length < 6 ? true : null : null
          }
        }
      })
    }
    else {
      throw new Error('Trying to dispatch for unknown key: ', key)
    }
  }

  return (
    <Container mt="20">
      <FormControl p="10" bg="gray.600" color="gray.200" borderRadius="lg">
        <FormLabel fontSize="xl">Name</FormLabel>
        <Input
          ref={nameRef}
          name="name"
          value={state.name.value}
          onChange={handleInputChange}
          isInvalid={state.name.error}
          errorBorderColor='crimson' 
          type='text' 
          fontSize="xl"
        />

        <FormLabel fontSize="xl" mt="5">Password</FormLabel>
        <Input
          name="password"
          value={state.password.value}
          onChange={handleInputChange}
          isInvalid={state.password.error}
          errorBorderColor='crimson' 
          type='password'
          fontSize="xl"
        />

        <FormHelperText  color="gray.200">Validation FX powered by useReducer.</FormHelperText>

        <Button 
          isDisabled={state.password.error || state.name.error || !state.name.touched || !state.password.touched}
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
