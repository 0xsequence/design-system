import figma from '@figma/code-connect'
import React from 'react'

import { MinterIcon } from './index'

figma.connect(
  MinterIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=2146-25154', 
  {
    example: () => <MinterIcon />
  }
)
