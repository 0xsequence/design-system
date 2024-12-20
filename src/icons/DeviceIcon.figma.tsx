import figma from '@figma/code-connect'
import React from 'react'

import { DeviceIcon } from './index'

figma.connect(
  DeviceIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=2159-28162', 
  {
    example: () => <DeviceIcon />
  }
)
