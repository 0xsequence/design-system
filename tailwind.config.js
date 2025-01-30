/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@0xsequence/design-system/src/**/*.{js,ts,jsx,tsx}',
  ],
  future: {
    respectDefaultRingColorOpacity: true,
  },
  theme: {
    extend: {
      colors: {
        // Status colors
        positive: 'var(--seq-color-positive)',
        negative: 'var(--seq-color-negative)',
        info: 'var(--seq-color-info)',
        warning: 'var(--seq-color-warning)',

        // Text colors
        primary: 'var(--seq-color-primary)',
        secondary: 'var(--seq-color-secondary)',
        muted: 'var(--seq-color-muted)',
        inverse: 'var(--seq-color-inverse)',

        // Background colors
        background: {
          primary: 'var(--seq-color-background-primary)',
          secondary: 'var(--seq-color-background-secondary)',
          contrast: 'var(--seq-color-background-contrast)',
          muted: 'var(--seq-color-background-muted)',
          control: 'var(--seq-color-background-control)',
          inverse: 'var(--seq-color-background-inverse)',
          backdrop: 'var(--seq-color-background-backdrop)',
          overlay: 'var(--seq-color-background-overlay)',
          raised: 'var(--seq-color-background-raised)',
        },

        // Border colors
        border: {
          normal: 'var(--seq-color-border-normal)',
          focus: 'var(--seq-color-border-focus)',
        },

        // Button colors
        button: {
          glass: 'var(--seq-color-button-glass)',
          emphasis: 'var(--seq-color-button-emphasis)',
          inverse: 'var(--seq-color-button-inverse)',
        },
      },
      backgroundImage: {
        'gradient-backdrop': 'var(--seq-color-gradient-backdrop)',
        'gradient-primary': 'var(--seq-color-gradient-primary)',
        'gradient-secondary': 'var(--seq-color-gradient-secondary)',
        'gradient-skeleton': 'var(--seq-color-gradient-skeleton)',
      },
      keyframes: {
        spin: {
          '100%': { transform: 'rotate(1turn)' },
        },
        swipeOut: {
          from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
          to: { transform: 'translateX(100%)' },
        },
        skeleton: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        spin: 'spin 2s linear infinite',
        swipeOut: 'swipeOut 200ms ease-out',
        skeleton: 'skeleton 1s ease infinite',
      },
    },
  },
  plugins: [],
}
