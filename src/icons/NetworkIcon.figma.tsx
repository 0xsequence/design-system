import figma from '@figma/code-connect'
import React from 'react'

import { NetworkIcon } from './index'

figma.connect(
  NetworkIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=2159-28174', 
  {
    example: () => <NetworkIcon />
  }
)
