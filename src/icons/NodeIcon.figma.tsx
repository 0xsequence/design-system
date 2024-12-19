import figma from '@figma/code-connect'
import React from 'react'

import { NodeIcon } from './index'

figma.connect(
  NodeIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=453-22073', 
  {
    example: () => <NodeIcon />
  }
)
