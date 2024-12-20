import figma from '@figma/code-connect'
import React from 'react'

import { ExpandIcon } from './index'

figma.connect(
  ExpandIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=453-22079', 
  {
    example: () => <ExpandIcon />
  }
)
