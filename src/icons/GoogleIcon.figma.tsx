import figma from '@figma/code-connect'
import React from 'react'

import { GoogleIcon } from './index'

figma.connect(
  GoogleIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=10594-538', 
  {
    example: () => <GoogleIcon />
  }
)
