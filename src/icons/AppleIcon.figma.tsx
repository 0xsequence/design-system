import figma from '@figma/code-connect'
import React from 'react'

import { AppleIcon } from './index'

figma.connect(
  AppleIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=2159-28190', 
  {
    example: () => <AppleIcon />
  }
)
