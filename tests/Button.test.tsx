import * as React from 'react'
import { render } from '@testing-library/react'

import { Button } from '../src'

describe('Render', () => {
  it('renders', () => {
    render(<Button />)
  })
})
