import figma from '@figma/code-connect'
import React from 'react'

import { TransactionIcon } from './index'

figma.connect(
  TransactionIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=453-21932', 
  {
    example: () => <TransactionIcon />
  }
)
