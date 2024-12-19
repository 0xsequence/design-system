import figma from '@figma/code-connect'
import React from 'react'

import { HelpIcon } from './index'

figma.connect(
  HelpIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=453-22067', 
  {
    example: () => <HelpIcon />
  }
)
