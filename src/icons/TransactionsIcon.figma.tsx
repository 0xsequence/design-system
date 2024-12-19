import figma from '@figma/code-connect'
import React from 'react'

import { TransactionsIcon } from './index'

figma.connect(
  TransactionsIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=453-21932', 
  {
    example: () => <TransactionsIcon />
  }
)
