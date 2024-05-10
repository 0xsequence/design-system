import { cleanup, render } from '@testing-library/react'

import { networkImageUrl } from '~/utils'

import { NetworkImage } from './NetworkImage'

describe('<NetworkImage />', () => {
  afterEach(cleanup)

  it('renders token image', () => {
    const { container } = render(<NetworkImage chainId={1} />)
    const el = container.querySelector('img')

    expect(el?.getAttribute('src')).toContain(networkImageUrl(1))
  })
})
