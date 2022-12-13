import { Box, BoxProps } from '~/components/Box'
import { Divider } from '~/components/Divider'
import { Text } from '~/components/Text'

type Path = {
  label: string
  url?: string
}

type BreadcrumbsProps = BoxProps & {
  excludeDivider?: boolean
  paths: Path[]
}

export const Breadcrumbs = ({
  excludeDivider = false,
  paths,
  ...props
}: BreadcrumbsProps) => {
  const lastPath = paths.slice(-1)[0]
  const restPaths = paths.slice(0, -1)

  return (
    <Box {...props}>
      <Text as="p" variant="small" fontWeight="medium" color="textFaded">
        {restPaths.map(({ label, url }, key) => (
          <Box as="a" href={url} key={key}>
            {label}
            {' / '}
          </Box>
        ))}

        <Text as="a" color="textBody">
          {lastPath.label}
        </Text>
      </Text>

      {!excludeDivider && <Divider />}
    </Box>
  )
}
