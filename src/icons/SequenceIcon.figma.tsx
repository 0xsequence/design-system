import figma from '@figma/code-connect'
import React from 'react'

import { SequenceIcon } from './index'

figma.connect(
  SequenceIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=643-17692', 
  {
    example: () => <SequenceIcon />
  }
)
