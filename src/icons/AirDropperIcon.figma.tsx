import figma from '@figma/code-connect'
import React from 'react'

import { AirDropperIcon } from './index'

figma.connect(
  AirDropperIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=2146-25164', 
  {
    example: () => <AirDropperIcon />
  }
)
