import figma from '@figma/code-connect'
import React from 'react'

import { CollaboratorsIcon } from './index'

figma.connect(
  CollaboratorsIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=10474-2503', 
  {
    example: () => <CollaboratorsIcon />
  }
)
