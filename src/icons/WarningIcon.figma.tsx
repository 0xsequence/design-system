import figma from '@figma/code-connect'
import React from 'react'

import { WarningIcon } from './index'

figma.connect(
  WarningIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=2159-28143', 
  {
    example: () => <WarningIcon />
  }
)
