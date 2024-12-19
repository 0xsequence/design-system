import figma from '@figma/code-connect'
import React from 'react'

import { UploadIcon } from './index'

figma.connect(
  UploadIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=2254-2301', 
  {
    example: () => <UploadIcon />
  }
)
