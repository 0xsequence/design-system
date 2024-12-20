import figma from '@figma/code-connect'
import React from 'react'

import { ListIcon } from './index'

figma.connect(
  ListIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=7818-2221', 
  {
    example: () => <ListIcon />
  }
)
