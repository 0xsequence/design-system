import figma from '@figma/code-connect'
import React from 'react'

import { IndexerIcon } from './index'

figma.connect(
  IndexerIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=2209-26451', 
  {
    example: () => <IndexerIcon />
  }
)