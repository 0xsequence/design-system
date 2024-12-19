import figma from '@figma/code-connect'
import React from 'react'

import { EllipsisIcon } from './index'

figma.connect(
  EllipsisIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=768-47027', 
  {
    example: () => <EllipsisIcon />
  }
)
