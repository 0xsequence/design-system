import figma from '@figma/code-connect'
import React from 'react'

import { PaymentsIcon } from './index'

figma.connect(
  PaymentsIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=2209-26441', 
  {
    example: () => <PaymentsIcon />
  }
)
