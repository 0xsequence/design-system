import figma from '@figma/code-connect'
import React from 'react'

import { SettingsIcon } from './index'

figma.connect(
  SettingsIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=453-22016', 
  {
    example: () => <SettingsIcon />
  }
)
