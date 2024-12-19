import figma from '@figma/code-connect'
import React from 'react'

import { AddIcon } from './index'

figma.connect(
  AddIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=453-22028', 
  {
    example: () => <AddIcon />
  }
)
