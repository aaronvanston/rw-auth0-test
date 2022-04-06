import { render } from '@redwoodjs/testing/web'

import SecretPage from './SecretPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SecretPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SecretPage />)
    }).not.toThrow()
  })
})
