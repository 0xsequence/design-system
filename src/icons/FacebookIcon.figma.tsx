import figma from '@figma/code-connect'
import React from 'react'

import { FacebookIcon } from './index'

figma.connect(
  FacebookIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=10594-539', 
  {
    example: () => <FacebookIcon />
  }
)
