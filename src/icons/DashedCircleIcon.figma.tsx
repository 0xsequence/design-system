import figma from '@figma/code-connect'
import React from 'react'

import { DashedCircleIcon } from './index'

figma.connect(
  DashedCircleIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=848-57511', 
  {
    example: () => <DashedCircleIcon />
  }
)
