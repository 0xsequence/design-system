import figma from '@figma/code-connect'
import React from 'react'

import { HiddenIcon } from './index'

figma.connect(
  HiddenIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=2146-28118', 
  {
    example: () => <HiddenIcon />
  }
)
