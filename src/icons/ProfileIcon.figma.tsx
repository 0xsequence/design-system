import figma from '@figma/code-connect'
import React from 'react'

import { ProfileIcon } from './index'

figma.connect(
  ProfileIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=453-22031', 
  {
    example: () => <ProfileIcon />
  }
)
