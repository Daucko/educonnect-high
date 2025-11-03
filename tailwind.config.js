/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        // Base Colors
        background: 'var(--color-background)' /* white */,
        foreground: 'var(--color-foreground)' /* gray-800 */,
        surface: 'var(--color-surface)' /* slate-50 */,

        // Card Colors
        card: {
          DEFAULT: 'var(--color-card)' /* white */,
          foreground: 'var(--color-card-foreground)' /* gray-800 */,
        },

        // Popover Colors
        popover: {
          DEFAULT: 'var(--color-popover)' /* white */,
          foreground: 'var(--color-popover-foreground)' /* gray-800 */,
        },

        // Muted Colors
        muted: {
          DEFAULT: 'var(--color-muted)' /* slate-100 */,
          foreground: 'var(--color-muted-foreground)' /* gray-500 */,
        },

        // Border & Input
        border: 'var(--color-border)' /* slate-200 */,
        input: 'var(--color-input)' /* white */,
        ring: 'var(--color-ring)' /* blue-800 */,

        // Brand Primary
        primary: {
          DEFAULT: 'var(--color-primary)' /* blue-800 */,
          foreground: 'var(--color-primary-foreground)' /* white */,
        },

        // Brand Secondary
        secondary: {
          DEFAULT: 'var(--color-secondary)' /* teal-700 */,
          foreground: 'var(--color-secondary-foreground)' /* white */,
        },

        // Accent Colors
        accent: {
          DEFAULT: 'var(--color-accent)' /* amber-500 */,
          foreground: 'var(--color-accent-foreground)' /* gray-800 */,
        },

        // Status Colors
        success: {
          DEFAULT: 'var(--color-success)' /* emerald-500 */,
          foreground: 'var(--color-success-foreground)' /* white */,
        },

        warning: {
          DEFAULT: 'var(--color-warning)' /* amber-500 */,
          foreground: 'var(--color-warning-foreground)' /* gray-800 */,
        },

        error: {
          DEFAULT: 'var(--color-error)' /* red-500 */,
          foreground: 'var(--color-error-foreground)' /* white */,
        },

        destructive: {
          DEFAULT: 'var(--color-destructive)' /* red-500 */,
          foreground: 'var(--color-destructive-foreground)' /* white */,
        },

        // Text Colors
        'text-primary': 'var(--color-text-primary)' /* gray-800 */,
        'text-secondary': 'var(--color-text-secondary)' /* gray-500 */,

        // Extended Brand Colors
        'brand-ocean': {
          DEFAULT: 'var(--color-brand-ocean)' /* blue-600 */,
          foreground: 'var(--color-brand-ocean-foreground)' /* white */,
        },

        'brand-plum': {
          DEFAULT: 'var(--color-brand-plum)' /* purple-700 */,
          foreground: 'var(--color-brand-plum-foreground)' /* white */,
        },

        'brand-orange': {
          DEFAULT: 'var(--color-brand-orange)' /* orange-500 */,
          foreground: 'var(--color-brand-orange-foreground)' /* gray-800 */,
        },

        'brand-crimson': {
          DEFAULT: 'var(--color-brand-crimson)' /* red-700 */,
          foreground: 'var(--color-brand-crimson-foreground)' /* white */,
        },

        'brand-cloud': {
          DEFAULT: 'var(--color-brand-cloud)' /* slate-50 */,
          foreground: 'var(--color-brand-cloud-foreground)' /* gray-800 */,
        },

        'brand-charcoal': {
          DEFAULT: 'var(--color-brand-charcoal)' /* gray-900 */,
          foreground: 'var(--color-brand-charcoal-foreground)' /* white */,
        },
      },

      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        accent: ['Playfair Display', 'Georgia', 'serif'],
      },

      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1.1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },

      spacing: {
        xs: 'var(--spacing-xs)' /* 8px */,
        sm: 'var(--spacing-sm)' /* 13px */,
        md: 'var(--spacing-md)' /* 21px */,
        lg: 'var(--spacing-lg)' /* 34px */,
        xl: 'var(--spacing-xl)' /* 55px */,
        18: '4.5rem',
        88: '22rem',
        128: '32rem',
        144: '36rem',
      },

      borderRadius: {
        sm: 'var(--radius-sm)' /* 4px */,
        md: 'var(--radius-md)' /* 8px */,
        lg: 'var(--radius-lg)' /* 12px */,
        xl: 'var(--radius-xl)' /* 16px */,
        '2xl': '1.5rem',
        '3xl': '2rem',
      },

      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
        brand: '0 4px 6px rgba(0, 0, 0, 0.07), 0 1px 3px rgba(0, 0, 0, 0.06)',
        'brand-lg':
          '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'glow-primary': '0 0 20px rgba(30, 58, 138, 0.3)',
        'glow-accent': '0 0 20px rgba(245, 158, 11, 0.3)',
        'inner-light': 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.1)',
      },

      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'float 6s ease-in-out infinite',
        'slide-up':
          'slideUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'scale-in':
          'scaleIn 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },

      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideUp: {
          from: {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        scaleIn: {
          from: {
            opacity: '0',
            transform: 'scale(0.95)',
          },
          to: {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0%)' },
          '50%': { transform: 'translateY(-5%)' },
        },
      },

      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },

      transitionDuration: {
        250: '250ms',
        400: '400ms',
        600: '600ms',
        800: '800ms',
        2500: '2500ms',
      },

      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },

      zIndex: {
        60: '60',
        70: '70',
        80: '80',
        90: '90',
        100: '100',
      },

      screens: {
        xs: '475px',
        '3xl': '1600px',
      },

      aspectRatio: {
        '4/3': '4 / 3',
        '3/2': '3 / 2',
        '2/3': '2 / 3',
        '9/16': '9 / 16',
      },

      gridTemplateColumns: {
        13: 'repeat(13, minmax(0, 1fr))',
        14: 'repeat(14, minmax(0, 1fr))',
        15: 'repeat(15, minmax(0, 1fr))',
        16: 'repeat(16, minmax(0, 1fr))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-animate'),
  ],
};
