import figma from '@figma/code-connect'
import React from 'react'

import { LinkIcon } from './index'

figma.connect(
  LinkIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=2039-24951', 
  {
    example: () => <LinkIcon />
  }
)
