import figma from '@figma/code-connect'
import React from 'react'

import { ArrowRightIcon } from './index'

figma.connect(
  ArrowRightIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=453-22013', 
  {
    example: () => <ArrowRightIcon />
  }
)
