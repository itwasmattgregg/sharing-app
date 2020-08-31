import { render } from '@redwoodjs/testing'

import MyItemsPage from './MyItemsPage'

describe('MyItemsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MyItemsPage />)
    }).not.toThrow()
  })
})
