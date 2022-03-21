import React from 'react'
import { render, screen } from '@testing-library/react'
import Title from './Title'

test('renders title TS TEST in red color', () => {
  render(<Title label="TS TEST" color="red" />)
  const titleElement = screen.getByText(/TS TEST/i)
  expect(titleElement).toBeInTheDocument()
})
