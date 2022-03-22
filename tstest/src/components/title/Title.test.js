import React from 'react'
import { render, screen } from '@testing-library/react'
import Title from './Title'

test('renders title DEFAULT LABEL with color blue when no props are provided', () => {
  render(<Title />)
  const titleElement = screen.getByText(/DEFAULT LABEL/i)

  expect(titleElement).toBeInTheDocument()

  expect(titleElement.style.color).toEqual('blue')
})

test('renders title TS TEST in red color', () => {
  render(<Title label="TS TEST" color="red" />)
  const titleElement = screen.getByText(/TS TEST/i)
  expect(titleElement).toBeInTheDocument()
})
