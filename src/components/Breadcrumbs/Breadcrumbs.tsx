import { Box, BoxProps } from '~/components/Box'
import { Divider } from '~/components/Divider'
import { Text } from '~/components/Text'

interface Path {
  label: string
  url?: string
}

type BreadcrumbsProps = BoxProps & {
  excludeDivider?: boolean
  paths: Path[]
}

export const Breadcrumbs = (props: BreadcrumbsProps) => {
  const { paths, excludeDivider = false, ...rest } = props

  return (
    <Box {...rest}>
      {paths.map((path, idx) => (
        <BreadcrumbSegment
          key={idx}
          path={path}
          active={idx === paths.length - 1}
        />
      ))}

      {!excludeDivider && <Divider />}
    </Box>
  )
}

interface BreadcrumbSegmentProps {
  path: Path
  active?: boolean
}

const BreadcrumbSegment = (props: BreadcrumbSegmentProps) => {
  const { path, active } = props

  return active ? (
    <Text
      variant="small"
      fontWeight="medium"
      color="text100"
      whiteSpace="nowrap"
      capitalize
    >
      {path.label}
    </Text>
  ) : (
    <Text
      as="a"
      href={path.url}
      variant="small"
      fontWeight="medium"
      color="text50"
      whiteSpace="nowrap"
      capitalize
    >
      {path.label}
      {' / '}
    </Text>
  )
}
