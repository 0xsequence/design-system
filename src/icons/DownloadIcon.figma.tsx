import figma from '@figma/code-connect'
import React from 'react'

import { DownloadIcon } from './index'

figma.connect(
  DownloadIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=2159-28107', 
  {
    example: () => <DownloadIcon />
  }
)
