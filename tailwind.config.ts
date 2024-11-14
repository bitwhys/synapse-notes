import { type Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'
import * as tailwindcss_animate from 'tailwindcss-animate'

module.exports = {
  darkMode: ['class'],
  content: ['src/renderer/**/*.{ts,tsx,html}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        gray: {
          1: 'var(--color-gray-1)',
          2: 'var(--color-gray-2)',
          3: 'var(--color-gray-3)',
          4: 'var(--color-gray-4)',
          5: 'var(--color-gray-5)',
          6: 'var(--color-gray-6)',
          7: 'var(--color-gray-7)',
          8: 'var(--color-gray-8)',
          9: 'var(--color-gray-9)',
          10: 'var(--color-gray-10)',
          11: 'var(--color-gray-11)',
          12: 'var(--color-gray-12)',
          a1: 'var(--color-gray-a1)',
          a2: 'var(--color-gray-a2)',
          a3: 'var(--color-gray-a3)',
          a4: 'var(--color-gray-a4)',
          a5: 'var(--color-gray-a5)',
          a6: 'var(--color-gray-a6)',
          a7: 'var(--color-gray-a7)',
          a8: 'var(--color-gray-a8)',
          a9: 'var(--color-gray-a9)',
          a10: 'var(--color-gray-a10)',
          a11: 'var(--color-gray-a11)',
          a12: 'var(--color-gray-a12)'
        },
        accent: {
          1: 'var(--color-accent-1)',
          2: 'var(--color-accent-2)',
          3: 'var(--color-accent-3)',
          4: 'var(--color-accent-4)',
          5: 'var(--color-accent-5)',
          6: 'var(--color-accent-6)',
          7: 'var(--color-accent-7)',
          8: 'var(--color-accent-8)',
          9: 'var(--color-accent-9)',
          10: 'var(--color-accent-10)',
          11: 'var(--color-accent-11)',
          12: 'var(--color-accent-12)',
          a1: 'var(--color-accent-a1)',
          a2: 'var(--color-accent-a2)',
          a3: 'var(--color-accent-a3)',
          a4: 'var(--color-accent-a4)',
          a5: 'var(--color-accent-a5)',
          a6: 'var(--color-accent-a6)',
          a7: 'var(--color-accent-a7)',
          a8: 'var(--color-accent-a8)',
          a9: 'var(--color-accent-a9)',
          a10: 'var(--color-accent-a10)',
          a11: 'var(--color-accent-a11)',
          a12: 'var(--color-accent-a12)',
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        'deep-black': 'var(--color-deep-black)',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      textColor: {
        //   TODO: define utilities for --cnt-* variables
        primary: 'var(--cnt-primary)',
        secondary: 'var(--cnt-secondary)',
        tertiary: 'var(--cnt-tertiary)',
        'on-accent': 'var(--cnt-on-accent-bold)',
        inverse: 'var(--cnt-inverse)', // useful for black buttons...etc
        accent: 'var(--cnt-accent)',
        info: 'var(--cnt-info)',
        success: 'var(--cnt-success)',
        warning: 'var(--cnt-warning)',
        danger: 'var(--cnt-danger)'
      },
      backgroundColor: {
        //   TODO: define utilities for --bg-* variables
        page: 'var(--pagebg-base)',
        'page-soft': 'var(--pagebg-soft)',
        base: 'var(--bg-base)',
        soft: 'var(--bg-soft)',
        plate: 'var(--bg-plate)',
        surface: 'var(--bg-surface)',
        'accent-soft': 'var(--bg-accent-soft)',
        'info-soft': 'var(--bg-info-soft)',
        'success-soft': 'var(--bg-success-soft)',
        'warning-soft': 'var(--bg-warning-soft)',
        'danger-soft': 'var(--bg-danger-soft)',
        'accent-bold': 'var(--bg-accent-bold)',
        'info-bold': 'var(--bg-info-bold)',
        'success-bold': 'var(--bg-success-bold)',
        'warning-bold': 'var(--bg-warning-bold)',
        'danger-bold': 'var(--bg-danger-bold)'
      },
      borderColor: {
        interactive: 'var(--brd-interactive)',
        line: 'var(--brd-line)',
        separator: 'var(--brd-separator)',
        accent: 'var(--brd-accent)',
        info: 'var(--brd-info)',
        success: 'var(--brd-success)',
        warning: 'var(--brd-warning)',
        danger: 'var(--brd-danger)'
      },
      ringColor: {
        interactive: 'var(--brd-interactive)',
        line: 'var(--brd-line)',
        separator: 'var(--brd-separator)',
        accent: 'var(--brd-accent)',
        info: 'var(--brd-info)',
        success: 'var(--brd-success)',
        warning: 'var(--brd-warning)',
        danger: 'var(--brd-danger)'
      },
      borderRadius: {
        DEFAULT: '',
        sm: 'var(--ui-radius-1)',
        md: `var(--ui-radius-2)`,
        lg: `var(--ui-radius-3)`,
        xl: `var(--ui-radius-4)`,
        '2xl': `var(--ui-radius-5)`,
        '3xl': `var(--ui-radius-6)`
      },
      fontFamily: {
        sans: ['Geliat', ...fontFamily.sans]
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      },
      boxShadow: {
        DEFAULT: 'var(--ui-shadow-default)',
        sm: 'var(--ui-shadow-sm)',
        md: 'var(--ui-shadow-sm)',
        lg: 'var(--ui-shadow-sm)',
        xl: 'var(--ui-shadow-sm)',
        '2xl': 'var(--ui-shadow-sm)',
        inner: 'var(--ui-shadow-sm)',
        1: 'var(--ui-shadow-1)',
        2: 'var(--ui-shadow-2)',
        3: 'var(--ui-shadow-3)',
        4: 'var(--ui-shadow-4)',
        5: 'var(--ui-shadow-5)',
        6: 'var(--ui-shadow-6)'
      }
    }
  },
  plugins: [tailwindcss_animate]
} satisfies Config
