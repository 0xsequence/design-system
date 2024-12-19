import figma from '@figma/code-connect'
import React from 'react'

import { CheckmarkIcon } from './index'

figma.connect(
  CheckmarkIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=2159-28156', 
  {
    example: () => <CheckmarkIcon />
  }
)
