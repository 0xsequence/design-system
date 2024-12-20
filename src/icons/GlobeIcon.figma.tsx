import figma from '@figma/code-connect'
import React from 'react'

import { GlobeIcon } from './index'

figma.connect(
  GlobeIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=2159-28130', 
  {
    example: () => <GlobeIcon />
  }
)
