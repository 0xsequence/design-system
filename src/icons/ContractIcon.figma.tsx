import figma from '@figma/code-connect'
import React from 'react'

import { ContractIcon } from './index'

figma.connect(
  ContractIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=2146-25148', 
  {
    example: () => <ContractIcon />
  }
)
