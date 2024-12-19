import figma from '@figma/code-connect'
import React from 'react'

import { SwapIcon } from './index'

figma.connect(
  SwapIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=453-21917', 
  {
    example: () => <SwapIcon />
  }
)
