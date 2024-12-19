import figma from '@figma/code-connect'
import React from 'react'

import { GridIcon } from './index'

figma.connect(
  GridIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=2178-26429', 
  {
    example: () => <GridIcon />
  }
)
