import { HTMLAttributes, JSX, ReactNode } from 'react'

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
      <Text variant="small" fontWeight="medium" asChild>
        <div>
          {paths.map((path, idx) => (
            <BreadcrumbSegment
              key={idx}
              path={path}
              active={idx === paths.length - 1}
              renderLink={renderLink}
            />
          ))}
        </div>
      </Text>

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
  <a href={path.url}>{children}</a>
)

const BreadcrumbSegment = (props: BreadcrumbSegmentProps) => {
  const { path, active, renderLink = defaultRenderLink } = props

  return active ? (
    <Text color="primary" nowrap capitalize>
      {path.label}
    </Text>
  ) : (
    <>
      <Text
        color="muted"
        nowrap
        capitalize
        className="no-underline outline-hidden focus:ring-2 focus:ring-border-focus hover:opacity-80"
        asChild
      >
        {renderLink(path, path.label)}
      </Text>
      <Text color="muted">{' / '}</Text>
    </>
  )
}
