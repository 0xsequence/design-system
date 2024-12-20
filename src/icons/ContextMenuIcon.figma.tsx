import figma from '@figma/code-connect'
import React from 'react'

import { ContextMenuIcon } from './index'

figma.connect(
  ContextMenuIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=768-47027', 
  {
    example: () => <ContextMenuIcon />
  }
)
