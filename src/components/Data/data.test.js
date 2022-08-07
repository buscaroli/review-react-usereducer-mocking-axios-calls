import React from 'react'
import axios from 'axios'
import { render, screen, cleanup } from '@testing-library/react'
import Data from './index'
import { getData } from '../../utils/getData'

jest.mock('axios')

afterEach(cleanup)

describe('Data Component', () => {
  it('tests pre-fetch text is shown when data has not been fetched yet', async () => {
    render(<Data />)
    const text = screen.getByTestId('waiting-msg')
    expect(text.textContent).toBe('Click to show the Data!')
  })

  it('tests data can be fetched', async () => {
    const fakeUsers = {
      data: [
        {
          completed: false,
          id: 1000,
          title: 'This is a test',
          userId: 1,
        },
        {
          completed: false,
          id: 2000,
          title: 'This is another test',
          userId: 2,
        },
      ],
    }

    axios.get.mockResolvedValueOnce(fakeUsers)

    const result = await getData()

    expect(axios.get).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/todos'
    )
    expect(result.length).toEqual(2)
  })
})
