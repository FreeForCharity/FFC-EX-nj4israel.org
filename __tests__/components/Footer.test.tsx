import React from 'react'
import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import Footer from '../../src/components/footer'

// Extend Jest matchers
expect.extend(toHaveNoViolations)

describe('Footer component', () => {
  it('should render the footer', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()
  })

  it('should display the About section', () => {
    render(<Footer />)
    expect(screen.getByText('About')).toBeInTheDocument()
  })

  it('should display the Get Involved section', () => {
    render(<Footer />)
    expect(screen.getByText('Get Involved')).toBeInTheDocument()
  })

  it('should display the Contact section', () => {
    render(<Footer />)
    const headings = screen.getAllByRole('heading', { name: 'Contact' })
    expect(headings.length).toBeGreaterThan(0)
  })

  it('should display the EIN', () => {
    render(<Footer />)
    expect(screen.getByText(/47-1257878/)).toBeInTheDocument()
  })

  it('should display the current year in copyright', () => {
    render(<Footer />)
    const currentYear = new Date().getFullYear()
    expect(screen.getByText(new RegExp(currentYear.toString()))).toBeInTheDocument()
  })

  it('should have email contact link', () => {
    render(<Footer />)
    const links = screen.getAllByRole('link')
    const emailLink = links.find((link) => link.getAttribute('href')?.includes('mailto:'))
    expect(emailLink).toBeDefined()
  })

  it('should have social media links', () => {
    render(<Footer />)
    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThan(0)
  })

  it('should not have accessibility violations', async () => {
    const { container } = render(<Footer />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
