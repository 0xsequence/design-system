import figma from '@figma/code-connect'
import React from 'react'

import { RelayerIcon } from './index'

figma.connect(
  RelayerIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=453-22076', 
  {
    example: () => <RelayerIcon />
  }
)
