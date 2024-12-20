import figma from '@figma/code-connect'
import React from 'react'

import { RefreshIcon } from './index'

figma.connect(
  RefreshIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=2146-28115', 
  {
    example: () => <RefreshIcon />
  }
)
