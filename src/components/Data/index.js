import { useState, useEffect } from 'react'
import { Button, Container, Text } from '@chakra-ui/react'
import React from 'react'
import { getData } from '../../utils/getData'

function Data() {
  const [data, setData] = useState(null)

  const handleButtonClick = async () => {
    const users = await getData()
    // console.log('==== ', users)
    setData(users)
  }

  useEffect(() => {}, [data])

  return (
    <Container>
      <Button
        role="button"
        data-testid="fetch-btn"
        onClick={handleButtonClick}
        colorScheme="teal"
        size="md"
        mt="5"
      >
        Fetch
      </Button>
      {!data && <Text data-testid="waiting-msg">Click to show the Data!</Text>}
      <Container data-test-id="fetch-list">
        {data &&
          data.map((user, idx) => {
            return (
              <Text data-testid="item" fontSize="lg" key={idx}>
                {user.title}
              </Text>
            )
          })}
      </Container>
    </Container>
  )
}

export default Data
