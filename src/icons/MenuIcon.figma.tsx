import figma from '@figma/code-connect'
import React from 'react'

import { MenuIcon } from './index'

figma.connect(
  MenuIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=2159-28073', 
  {
    example: () => <MenuIcon />
  }
)
