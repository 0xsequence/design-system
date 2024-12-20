import figma from '@figma/code-connect'
import React from 'react'

import { CurrencyIcon } from './index'

figma.connect(
  CurrencyIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=2159-28205', 
  {
    example: () => <CurrencyIcon />
  }
)
