import { HTMLAttributes, ReactNode } from 'react'

import { Divider } from '~/components/Divider'
import { Text } from '~/components/Text'

interface Path {
  label: string
  url?: string
}

interface BreadcrumbsProps extends HTMLAttributes<HTMLDivElement> {
  excludeDivider?: boolean
  paths: Path[]
  renderLink?: (path: Path, children: ReactNode) => JSX.Element
}

export const Breadcrumbs = (props: BreadcrumbsProps) => {
  const {
    className,
    paths,
    excludeDivider = false,
    renderLink,
    ...rest
  } = props

  return (
    <div className={className} {...rest}>
      {paths.map((path, idx) => (
        <BreadcrumbSegment
          key={idx}
          path={path}
          active={idx === paths.length - 1}
          renderLink={renderLink}
        />
      ))}

      {!excludeDivider && <Divider />}
    </div>
  )
}

interface BreadcrumbSegmentProps {
  path: Path
  active?: boolean
  renderLink?: (path: Path, children: ReactNode) => JSX.Element
}

const defaultRenderLink = (path: Path, children: ReactNode) => (
  <a
    href={path.url}
    className="no-underline outline-none focus:ring-2 focus:ring-border-focus"
  >
    {children}
  </a>
)

const BreadcrumbSegment = (props: BreadcrumbSegmentProps) => {
  const { path, active, renderLink = defaultRenderLink } = props

  return active ? (
    <Text variant="small" fontWeight="medium" color="text100" nowrap capitalize>
      {path.label}
    </Text>
  ) : (
    <>
      {renderLink(
        path,
        <Text
          variant="small"
          fontWeight="medium"
          color="text50"
          nowrap
          capitalize
          className="hover:opacity-80"
        >
          {path.label}
        </Text>
      )}
      <Text variant="small" fontWeight="medium" color="text50">
        {' / '}
      </Text>
    </>
  )
}
