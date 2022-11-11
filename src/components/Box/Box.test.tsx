import { cleanup, render, screen } from '@testing-library/react'
import { ElementType, forwardRef } from 'react'

import {
  Box,
  PolymorphicComponent,
  PolymorphicProps,
  PolymorphicRef,
} from './Box'

describe('<Box />', () => {
  afterEach(cleanup)

  it('renders', () => {
    render(<Box>foo bar baz</Box>)
    expect(screen.getByText(/foo/i)).toBeInTheDocument()
  })
})

describe('Type errors', () => {
  beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation(() => jest.fn())
  })

  afterEach(cleanup)

  afterAll(() => {
    jest.restoreAllMocks()
  })

  // prettier-ignore
  it('fails typing', () => {
    const Link = (props: { to: string; children?: React.ReactNode }) => (
      <a href="#" onClick={() => console.log(props.to)}>
        {props.children}
      </a>
    )

    type ButtonProps = {
      variant?: 'primary' | 'normal'
      size?: 'sm' | 'md' | 'lg'
      label: string
    }

    const Button: PolymorphicComponent<ButtonProps, 'button'> = forwardRef(
        <T extends ElementType>(props: PolymorphicProps<ButtonProps, T>, ref: PolymorphicRef<T>) => {
      const { as = 'button', variant = 'normal', size = "md", label, ...rest } = props

      return (
        <Box as={as} className={variant + size} ref={ref} {...rest}>
          {label}
        </Box>
      )
    })

    render(<Button label="Hello" variant="primary" ref={ref => ref}/>)

    render(<Button as="a" href="/hello" label="Hello" onClick={(ev) => ev} ref={ref => ref} />)
    render(<Button as={Link} to="/hello" label="Hello" ref={ref => ref} />)

    render(<Box ref={ref => ref} />)

    render(<div ref={ref => ref} />)

    // @ts-expect-error - `href` is not a valid prop for 'input'
    render(<Box as="input" href="" />)

    render(<Box as="input" type="email" />) // ok

    // @ts-expect-error - `enterKeyHint` must be a valid value
    render(<Box as="input" enterKeyHint="huh" />)

    render(<Box as="input" enterKeyHint="search" />) // ok

    // @ts-expect-error - `hrefx` is not a valid prop for `a`
    render(<Box as="a" hrefx="/home" />)

    // @ts-expect-error - `href` must be a string
    render(<Box as="a" href={5} />)

    render(<Box as="a" href="/home" />) // ok

    // @ts-expect-error - `to` is mising from `Link`
    render(<Box as={Link}>Home</Box>)

    // @ts-expect-error - `href` is not a valid prop for `Link`
    render(<Box as={Link} href="/home">Home</Box>)

    render(<Box as={Link} to="/home">Home</Box>) // ok

    // @ts-expect-error - `displayx` is not a valid sx prop`
    render(<Box displayx="block" />)
  })
})
