import figma from '@figma/code-connect'
import React from 'react'

import { ScanIcon } from './index'

figma.connect(
  ScanIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=453-21885', 
  {
    example: () => <ScanIcon />
  }
)
