import { useState } from 'react'
import { Button, Container, Text } from '@chakra-ui/react'
import React from 'react'

function Data() {
  const [data, setData] = useState(null)

  const handleButtonClick = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => {
        // console.log(json)
        const users10 = json.slice(0, 10)
        setData(users10)
      })
  }

  return (
    <Container>
      <Button onClick={handleButtonClick} colorScheme="teal" size="md" mt="5">
        Fetch
      </Button>
      {!data && <Text>Click to show the Data!</Text>}
      {data &&
        data.map((user, idx) => {
          return <p key={idx}>{user.title}</p>
        })}
    </Container>
  )
}

export default Data
