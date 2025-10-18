declare global {
  interface Navigator {
    readonly userAgentData?: {
      readonly platform: string
      readonly brands: Array<{
        readonly brand: string
        readonly version: string
      }>
      getHighEntropyValues(hints: string[]): Promise<{
        readonly architecture?: string
        readonly platformVersion?: string
      }>
    }
  }
}

export function isMacOS() {
  return navigator.userAgentData
    ? navigator.userAgentData.platform === 'macOS'
    : navigator.platform.toUpperCase().includes('MAC')
}
