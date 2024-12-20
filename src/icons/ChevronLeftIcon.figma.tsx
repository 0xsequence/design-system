import figma from '@figma/code-connect'
import React from 'react'

import { ChevronLeftIcon } from './index'

figma.connect(
  ChevronLeftIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=453-21962', 
  {
    example: () => <ChevronLeftIcon />
  }
)
