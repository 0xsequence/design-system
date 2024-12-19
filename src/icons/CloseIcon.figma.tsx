import figma from '@figma/code-connect'
import React from 'react'

import { CloseIcon } from './index'

figma.connect(
  CloseIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=453-22010', 
  {
    example: () => <CloseIcon />
  }
)
