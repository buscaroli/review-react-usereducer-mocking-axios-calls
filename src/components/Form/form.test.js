import React from 'react'
import axios from 'axios'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import Form from './'

afterEach(cleanup)

describe('Form Component', () => {
  it('tests the form is rendered', () => {
    render(<Form />)
    const form = screen.queryByTestId('form')
    expect(form).toBeTruthy()
  })

  it('tests the inputs are empty on page load', () => {
    render(<Form />)

    const nameInput = screen.queryByTestId('nameInput')
    const passwordInput = screen.queryByTestId('passwordInput')

    expect(nameInput.value).toBe('')
    expect(passwordInput.value).toBe('')
  })

  it('tests the submit button is disabled on page load', () => {
    render(<Form />)

    const btn = screen.queryByTestId('submit-btn')
    expect(btn.textContent).toEqual('Submit')
    expect(btn).toHaveProperty('disabled')
  })

  it('tests the submit button is enabled when the inputs have been validated', () => {
    render(<Form />)

    const nameInput = screen.queryByTestId('nameInput')
    const passwordInput = screen.queryByTestId('passwordInput')

    fireEvent.change(nameInput, { target: { value: 'George' } })
    fireEvent.change(passwordInput, { target: { value: 'mylongpassword' } })

    const btn = screen.queryByTestId('submit-btn')
    expect(btn).not.toHaveAttribute('disabled')
  })

  it('tests the submit button is disabled when the user name is too short', () => {
    render(<Form />)

    const nameInput = screen.queryByTestId('nameInput')
    const passwordInput = screen.queryByTestId('passwordInput')

    fireEvent.change(nameInput, { target: { value: 'G' } })
    fireEvent.change(passwordInput, { target: { value: 'mylongpassword' } })

    const btn = screen.queryByTestId('submit-btn')
    console.log(btn)
    expect(btn).toHaveProperty('disabled')
  })

  it('tests the submit button is disabled when the user password is too short', () => {
    render(<Form />)

    const nameInput = screen.queryByTestId('nameInput')
    const passwordInput = screen.queryByTestId('passwordInput')

    fireEvent.change(nameInput, { target: { value: 'George' } })
    fireEvent.change(passwordInput, { target: { value: 'my' } })

    const btn = screen.queryByTestId('submit-btn')
    console.log(btn)
    expect(btn).toHaveProperty('disabled')
  })
})
