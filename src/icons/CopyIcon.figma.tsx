import figma from '@figma/code-connect'
import React from 'react'

import { CopyIcon } from './index'

figma.connect(
  CopyIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=453-22022', 
  {
    example: () => <CopyIcon />
  }
)
