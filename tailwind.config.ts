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
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
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
      },
      borderColor: {
        line: 'var(--brd-line)',
        interactive: 'var(--brd-interactive)'
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
