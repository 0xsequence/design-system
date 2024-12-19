import figma from '@figma/code-connect'
import React from 'react'

import { EditIcon } from './index'

figma.connect(
  EditIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=453-22034', 
  {
    example: () => <EditIcon />
  }
)
