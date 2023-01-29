import { sprinkles } from './sprinkles.css'

export type Atoms = Parameters<typeof sprinkles>[0]

const FLEX_PROPS = [
  'alignItems',
  'alignSelf',
  'flexDirection',
  'gap',
  'justifyContent',
  'justifySelf',
  'placeItems',
]

// Wrap sprinkles with additional helper logic
export const atoms = (props: Atoms) => {
  // Automatically set display: flex if any flex props are present
  props.display ||= Object.keys(props).some(prop => FLEX_PROPS.includes(prop))
    ? 'flex'
    : undefined

  return sprinkles(props)
}

atoms.properties = sprinkles.properties
