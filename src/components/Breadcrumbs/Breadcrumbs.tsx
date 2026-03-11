import type { HTMLAttributes, ReactNode } from 'react'

import { focusRingVariants } from '../../styles.js'
import { cn } from '../../utils/classnames.js'

interface Path {
  label: string
  url?: string
}

interface BreadcrumbLinkProps {
  className?: string
}

interface BreadcrumbsProps extends HTMLAttributes<HTMLDivElement> {
  paths: Path[]
  renderLink?: (
    path: Path,
    children: ReactNode,
    props?: BreadcrumbLinkProps
  ) => ReactNode
}

export const Breadcrumbs = (props: BreadcrumbsProps) => {
  const { className, paths, renderLink, ...rest } = props

  return (
    <div className={className} {...rest}>
      <div className="text-small">
        {paths.map((path, idx) => (
          <BreadcrumbSegment
            key={idx}
            path={path}
            active={idx === paths.length - 1}
            renderLink={renderLink}
          />
        ))}
      </div>
    </div>
  )
}

interface BreadcrumbSegmentProps {
  path: Path
  active?: boolean
  renderLink?: (
    path: Path,
    children: ReactNode,
    props?: BreadcrumbLinkProps
  ) => ReactNode
}

const defaultRenderLink = (
  path: Path,
  children: ReactNode,
  props?: BreadcrumbLinkProps
): ReactNode => (
  <a href={path.url} className={props?.className}>
    {children}
  </a>
)

const BreadcrumbSegment = (props: BreadcrumbSegmentProps) => {
  const { path, active, renderLink = defaultRenderLink } = props

  const linkClassName = cn(
    'text-muted whitespace-nowrap capitalize no-underline hover:opacity-80 rounded-sm',
    focusRingVariants({ inner: false })
  )

  return active ? (
    <span className="text-primary whitespace-nowrap capitalize">
      {path.label}
    </span>
  ) : (
    <>
      {renderLink(path, path.label, { className: linkClassName })}
      <span className="text-muted">{' / '}</span>
    </>
  )
}
