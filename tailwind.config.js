/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}'],
  future: {
    respectDefaultRingColorOpacity: true,
  },
  theme: {
    extend: {
      colors: {
        // Status colors
        positive: 'var(--seq-colors-positive)',
        negative: 'var(--seq-colors-negative)',
        info: 'var(--seq-colors-info)',
        warning: 'var(--seq-colors-warning)',

        // Text colors
        text: {
          100: 'var(--seq-colors-text100)',
          80: 'var(--seq-colors-text80)',
          50: 'var(--seq-colors-text50)',
          inverse: 'var(--seq-colors-text-inverse100)',
        },

        // Background colors
        background: {
          primary: 'var(--seq-colors-background-primary)',
          secondary: 'var(--seq-colors-background-secondary)',
          contrast: 'var(--seq-colors-background-contrast)',
          muted: 'var(--seq-colors-background-muted)',
          control: 'var(--seq-colors-background-control)',
          inverse: 'var(--seq-colors-background-inverse)',
          backdrop: 'var(--seq-colors-background-backdrop)',
          overlay: 'var(--seq-colors-background-overlay)',
          raised: 'var(--seq-colors-background-raised)',
        },

        // Border colors
        border: {
          normal: 'var(--seq-colors-border-normal)',
          focus: 'var(--seq-colors-border-focus)',
        },

        // Button colors
        button: {
          glass: 'var(--seq-colors-button-glass)',
          emphasis: 'var(--seq-colors-button-emphasis)',
          inverse: 'var(--seq-colors-button-inverse)',
        },
      },
      backgroundImage: {
        'gradient-backdrop': 'var(--seq-colors-gradient-backdrop)',
        'gradient-primary': 'var(--seq-colors-gradient-primary)',
        'gradient-secondary': 'var(--seq-colors-gradient-secondary)',
        'gradient-skeleton': 'var(--seq-colors-gradient-skeleton)',
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
