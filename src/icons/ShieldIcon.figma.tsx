import figma from '@figma/code-connect'
import React from 'react'

import { ShieldIcon } from './index'

figma.connect(
  ShieldIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=2159-28097', 
  {
    example: () => <ShieldIcon />
  }
)
