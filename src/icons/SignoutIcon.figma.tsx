import figma from '@figma/code-connect'
import React from 'react'

import { SignoutIcon } from './index'

figma.connect(
  SignoutIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=453-22019', 
  {
    example: () => <SignoutIcon />
  }
)
