type Network =
  | 'Arbitrum'
  | 'Avalance'
  | 'BSC'
  | 'Ethereum'
  | 'Gnosis'
  | 'Polygon'

type NetworkTokens = {
  color: {
    [key in 'dark' | 'light']: string
  }
}

export const networks: { [key in Network]: NetworkTokens } = {
  Arbitrum: {
    color: {
      dark: '#212D44',
      light: '#93D4FF',
    },
  },
  Avalance: {
    color: {
      dark: '#810C0C',
      light: '#FF8080',
    },
  },
  BSC: {
    color: {
      dark: '#584508',
      light: '#FCCF43',
    },
  },
  Ethereum: {
    color: {
      dark: '#132362',
      light: '#AABBFF',
    },
  },
  Gnosis: {
    color: {
      dark: '#084246',
      light: '#8CF6FD',
    },
  },
  Polygon: {
    color: {
      dark: '#350881',
      light: '#C7A6FF',
    },
  },
} as const
