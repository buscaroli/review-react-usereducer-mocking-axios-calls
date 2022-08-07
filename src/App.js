import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import Form from './components/Form'
import Data from './components/Data'

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <h1>Setup a form using the useReducer Hook</h1>
        <Form />
        <Data />
      </div>
    </ChakraProvider>
  )
}

export default App
