import { createVar } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

const iconSize = createVar()

export const icon = recipe({
  base: {
    width: iconSize
  },

  variants: {
    size: {
      sm: {
        vars: {
          [iconSize]: '12px'
        }
      },
      md: {
        vars: {
          [iconSize]: '16px'
        }
      },
      lg: {
        vars: {
          [iconSize]: '32px'
        }
      }
    }
  }
})
