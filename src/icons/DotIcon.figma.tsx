import figma from '@figma/code-connect'
import React from 'react'

import { DotIcon } from './index'

figma.connect(
  DotIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=453-22025', 
  {
    example: () => <DotIcon />
  }
)
