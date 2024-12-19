import figma from '@figma/code-connect'
import React from 'react'

import { DeployIcon } from './index'

figma.connect(
  DeployIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=2146-28123', 
  {
    example: () => <DeployIcon />
  }
)
