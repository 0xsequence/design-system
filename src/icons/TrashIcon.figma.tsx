import figma from '@figma/code-connect'
import React from 'react'

import { TrashIcon } from './index'

figma.connect(
  TrashIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=2562-2678', 
  {
    example: () => <TrashIcon />
  }
)
