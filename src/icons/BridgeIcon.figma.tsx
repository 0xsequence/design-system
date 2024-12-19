import figma from '@figma/code-connect'
import React from 'react'

import { BridgeIcon } from './index'

figma.connect(
  BridgeIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=453-21926', 
  {
    example: () => <BridgeIcon />
  }
)
