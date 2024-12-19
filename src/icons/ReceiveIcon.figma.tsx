import figma from '@figma/code-connect'
import React from 'react'

import { ReceiveIcon } from './index'

figma.connect(
  ReceiveIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=453-21878', 
  {
    example: () => <ReceiveIcon />
  }
)
