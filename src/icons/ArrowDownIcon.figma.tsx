import figma from '@figma/code-connect'
import React from 'react'

import { ArrowDownIcon } from './index'

figma.connect(
  ArrowDownIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=2431-2649', 
  {
    example: () => <ArrowDownIcon />
  }
)
