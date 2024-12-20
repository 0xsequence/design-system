import figma from '@figma/code-connect'
import React from 'react'

import { SubtractIcon } from './index'

figma.connect(
  SubtractIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=2159-27742', 
  {
    example: () => <SubtractIcon />
  }
)
