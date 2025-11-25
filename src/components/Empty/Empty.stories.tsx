import { ExternalLinkIcon, FolderIcon } from 'src/icons/index.js'

import { Button } from '../Button/Button.js'

import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from './Empty.js'

export default {
  title: 'Components/Empty',
}

export const Default = {
  render: () => (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <FolderIcon />
        </EmptyMedia>
        <EmptyTitle>No Projects Yet</EmptyTitle>
        <EmptyDescription>
          You haven&apos;t created any projects yet. Get started by creating
          your first project.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <div className="flex gap-2">
          <Button variant="emphasis" shape="square" size="sm">
            Create Project
          </Button>
          <Button shape="square" size="sm">
            Import Project
          </Button>
        </div>
      </EmptyContent>
      <Button
        variant="text"
        className="text-muted underline underline-offset-4"
        size="sm"
        asChild
      >
        <a href="#">
          Learn More <ExternalLinkIcon />
        </a>
      </Button>
    </Empty>
  ),
}
