import figma from '@figma/code-connect'
import React from 'react'

import { WalletIcon } from './index'

figma.connect(
  WalletIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=2146-25139', 
  {
    example: () => <WalletIcon />
  }
)
