import figma from '@figma/code-connect'
import React from 'react'

import { TwitchIcon } from './index'

figma.connect(
  TwitchIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=10594-540', 
  {
    example: () => <TwitchIcon />
  }
)
