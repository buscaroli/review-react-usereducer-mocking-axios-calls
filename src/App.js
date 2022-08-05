import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import Form from './components/Form'

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <h1>Setup a form using the useReducer Hook</h1>
        <Form />
      </div>
    </ChakraProvider>
  )
}

export default App
