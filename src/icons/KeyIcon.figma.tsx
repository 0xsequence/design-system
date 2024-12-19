import figma from '@figma/code-connect'
import React from 'react'

import { KeyIcon } from './index'

figma.connect(
  KeyIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=2511-2669', 
  {
    example: () => <KeyIcon />
  }
)
