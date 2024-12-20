import figma from '@figma/code-connect'
import React from 'react'

import { GasTankIcon } from './index'

figma.connect(
  GasTankIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=2146-25160', 
  {
    example: () => <GasTankIcon />
  }
)
