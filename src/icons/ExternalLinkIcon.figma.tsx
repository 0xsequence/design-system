import figma from '@figma/code-connect'
import React from 'react'

import { ExternalLinkIcon } from './index'

figma.connect(
  ExternalLinkIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=830-46613', 
  {
    example: () => <ExternalLinkIcon />
  }
)
