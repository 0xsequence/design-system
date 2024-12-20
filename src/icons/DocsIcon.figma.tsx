import figma from '@figma/code-connect'
import React from 'react'

import { DocsIcon } from './index'

figma.connect(
  DocsIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=453-22070', 
  {
    example: () => <DocsIcon />
  }
)
