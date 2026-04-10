import { ExternalLinkIcon, FolderIcon } from 'lucide-react'

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
          <Button size="sm">Create Project</Button>
          <Button size="sm">Import Project</Button>
        </div>
      </EmptyContent>
      <Button
        variant="link"
        className="text-muted underline underline-offset-4"
        size="sm"
        render={<a href="#" />}
      >
        Learn More <ExternalLinkIcon />
      </Button>
    </Empty>
  ),
}
