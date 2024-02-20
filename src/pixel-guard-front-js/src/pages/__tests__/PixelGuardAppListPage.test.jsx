import '@testing-library/jest-dom'
import { render, screen, } from '@testing-library/react'
import PixelGuardAppListPage from '../app-list'

describe('PixelGuardAppListPage', () => {
  it('renders a heading', () => {
    render(
      <PixelGuardAppListPage
        testpath="../app-list/PixelGuardAppListPage"
      />
    )

    const heading = screen.getByRole('heading', {
      level: 2,
    })

    expect(heading).toBeInTheDocument()
  })
})
