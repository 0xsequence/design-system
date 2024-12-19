import figma from '@figma/code-connect'
import React from 'react'

import { MarketplaceIcon } from './index'

figma.connect(
  MarketplaceIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=2209-26467', 
  {
    example: () => <MarketplaceIcon />
  }
)
