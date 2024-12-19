import figma from '@figma/code-connect'
import React from 'react'

import { HomeIcon } from './index'

figma.connect(
  HomeIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=8044-1484', 
  {
    example: () => <HomeIcon />
  }
)
