import figma from '@figma/code-connect'
import React from 'react'

import { SendIcon } from './index'

figma.connect(
  SendIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=453-21862', 
  {
    example: () => <SendIcon />
  }
)
