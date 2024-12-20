import figma from '@figma/code-connect'
import React from 'react'

import { ChevronRightIcon } from './index'

figma.connect(
  ChevronRightIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=453-21956', 
  {
    example: () => <ChevronRightIcon />
  }
)
