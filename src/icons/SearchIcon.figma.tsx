import figma from '@figma/code-connect'
import React from 'react'

import { SearchIcon } from './index'

figma.connect(
  SearchIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=453-21938', 
  {
    example: () => <SearchIcon />
  }
)
