import figma from '@figma/code-connect'
import React from 'react'

import { EmailIcon } from './index'

figma.connect(
  EmailIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=2159-28122', 
  {
    example: () => <EmailIcon />
  }
)
