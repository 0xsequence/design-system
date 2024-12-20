import figma from '@figma/code-connect'
import React from 'react'

import { DiscordIcon } from './index'

figma.connect(
  DiscordIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=23094-59442', 
  {
    example: () => <DiscordIcon />
  }
)
