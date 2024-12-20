import figma from '@figma/code-connect'
import React from 'react'

import { ChevronDownIcon } from './index'

figma.connect(
  ChevronDownIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=453-21944', 
  {
    example: () => <ChevronDownIcon />
  }
)
