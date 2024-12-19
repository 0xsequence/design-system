import figma from '@figma/code-connect'
import React from 'react'

import { PinIcon } from './index'

figma.connect(
  PinIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=2434-2644', 
  {
    example: () => <PinIcon />
  }
)
