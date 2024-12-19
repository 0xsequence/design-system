import figma from '@figma/code-connect'
import React from 'react'

import { DragIcon } from './index'

figma.connect(
  DragIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=2364-1640', 
  {
    example: () => <DragIcon />
  }
)
