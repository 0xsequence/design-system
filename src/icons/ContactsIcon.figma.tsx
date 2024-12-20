import figma from '@figma/code-connect'
import React from 'react'

import { ContactsIcon } from './index'

figma.connect(
  ContactsIcon,
  'https://figma.com/file/0OB1JVXSqaxmJDrP7qAMJr/?node-id=11017-8639', 
  {
    example: () => <ContactsIcon />
  }
)
