import type { HTMLAttributes, JSX, ReactNode } from 'react'

import { focusRingVariants } from '../../styles.js'
import { cn } from '../../utils/classnames.js'
import { Text } from '../Text/Text.js'

interface Path {
  label: string
  url?: string
}

interface BreadcrumbsProps extends HTMLAttributes<HTMLDivElement> {
  paths: Path[]
  renderLink?: (path: Path, children: ReactNode) => JSX.Element
}

export const Breadcrumbs = (props: BreadcrumbsProps) => {
  const { className, paths, renderLink, ...rest } = props

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
        className={cn(
          'no-underline hover:opacity-80 rounded-sm',
          focusRingVariants({ inner: false })
        )}
        asChild
      >
        {renderLink(path, path.label)}
      </Text>
      <Text color="muted">{' / '}</Text>
    </>
  )
}
