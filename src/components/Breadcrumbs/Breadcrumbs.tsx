import { ReactNode } from 'react'

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
  renderLink?: (path: Path, children: ReactNode) => JSX.Element
}

export const Breadcrumbs = (props: BreadcrumbsProps) => {
  const { paths, excludeDivider = false, renderLink, ...rest } = props

  return (
    <Box {...rest}>
      {paths.map((path, idx) => (
        <BreadcrumbSegment
          key={idx}
          path={path}
          active={idx === paths.length - 1}
          renderLink={renderLink}
        />
      ))}

      {!excludeDivider && <Divider />}
    </Box>
  )
}

interface BreadcrumbSegmentProps {
  path: Path
  active?: boolean
  renderLink?: (path: Path, children: ReactNode) => JSX.Element
}

const defaultRenderLink = (path: Path, children: ReactNode) => (
  <Box as="a" href={path.url} textDecoration="none">
    {children}
  </Box>
)

const BreadcrumbSegment = (props: BreadcrumbSegmentProps) => {
  const { path, active, renderLink = defaultRenderLink } = props

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
    renderLink(
      path,
      <Text
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
  )
}
