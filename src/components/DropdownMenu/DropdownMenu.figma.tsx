import figma from '@figma/code-connect'
import React from 'react'

import { ContextMenuIcon } from '../../icons'
import { IconButton } from '../IconButton'

import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRoot,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from './DropdownMenu'

/**
 * -- This file was auto-generated by Code Connect --
 * None of your props could be automatically mapped to Figma properties.
 * You should update the `props` object to include a mapping from your
 * code props to Figma properties, and update the `example` function to
 * return the code example you'd like to see in Figma
 */

figma.connect(
  DropdownMenuRoot,
  'https://www.figma.com/design/0OB1JVXSqaxmJDrP7qAMJr?node-id=11510%3A28005',
  {
    props: {
      side: figma.enum('ponting', {
        default: 'bottom',
        inverted: 'top',
      }),
      children: figma.children(['atoms/dropdown-menu-item-wallet', 'Divider']),
    },
    example: props => (
      <DropdownMenuRoot>
        <DropdownMenuTrigger asChild>
          <IconButton icon={ContextMenuIcon} />
        </DropdownMenuTrigger>
        <DropdownMenuContent side={props.side}>
          {props.children}
        </DropdownMenuContent>
      </DropdownMenuRoot>
    ),
  }
)

figma.connect(
  DropdownMenuItem,
  'https://www.figma.com/design/0OB1JVXSqaxmJDrP7qAMJr?node-id=10606-387',
  {
    props: {
      label: figma.textContent('Menu item'),
    },
    example: props => <DropdownMenuItem>{props.label}</DropdownMenuItem>,
  }
)

// figma.connect(
//   DropdownMenuSeparator,
//   'https://www.figma.com/design/0OB1JVXSqaxmJDrP7qAMJr?node-id=10606-387',
//   {
//     example: () => <DropdownMenuSeparator />,
//   }
// )
