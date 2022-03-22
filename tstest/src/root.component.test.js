import React from 'react'
import { render, screen } from '@testing-library/react'
import Root from './root.component'

test('renders with section and title TS TEST', () => {
  render(<Root />)
  const sectionElement = screen.getByTestId('tstest')

  const titleElement = screen.getByText(/TS TEST/i)

  expect(sectionElement.contains(titleElement))

  expect(titleElement.style.color).toEqual('red')
})
