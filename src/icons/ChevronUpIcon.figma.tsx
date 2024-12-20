import figma from '@figma/code-connect'
import React from 'react'

import { ChevronUpIcon } from './index'

figma.connect(
  ChevronUpIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=453-21950', 
  {
    example: () => <ChevronUpIcon />
  }
)
