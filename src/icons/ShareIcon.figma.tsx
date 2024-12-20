import figma from '@figma/code-connect'
import React from 'react'

import { ShareIcon } from './index'

figma.connect(
  ShareIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=453-22040', 
  {
    example: () => <ShareIcon />
  }
)
