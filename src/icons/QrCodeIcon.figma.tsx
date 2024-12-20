import figma from '@figma/code-connect'
import React from 'react'

import { QrCodeIcon } from './index'

figma.connect(
  QrCodeIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=453-21878', 
  {
    example: () => <QrCodeIcon />
  }
)
