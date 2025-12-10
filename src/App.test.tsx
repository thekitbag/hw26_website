import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

describe('App', () => {
  it('renders without crashing', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    )
    expect(screen.getByText(/Harkwise/i)).toBeInTheDocument()
  })

  it('renders the hero section', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    )
    expect(
      screen.getByText(/Turn Every Customer Into Your Next/i),
    ).toBeInTheDocument()
  })
})
