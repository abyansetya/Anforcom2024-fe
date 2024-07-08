import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['var(--font-sans)'],
      serif: ['var(--font-serif)']
    },
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
          foreground: 'hsl(var(--primary-foreground))',
          hover: 'hsl(var(--primary-hover))',
          pressed: 'hsl(var(--primary-pressed))',
          light: 'hsl(var(--primary-light))',
          lightForeground: 'hsl(var(--primary-light-foreground))'
        },
        secondary1: {
          DEFAULT: 'hsl(var(--secondary1))',
          foreground: 'hsl(var(--secondary1-foreground))',
          hover: 'hsl(var(--secondary1-hover))',
          pressed: 'hsl(var(--secondary1-pressed))',
          light: 'hsl(var(--secondary1-light))',
          lightForeground: 'hsl(var(--secondary1-light-foreground))'
        },
        secondary2: {
          DEFAULT: 'hsl(var(--secondary2))',
          foreground: 'hsl(var(--secondary2-foreground))',
          hover: 'hsl(var(--secondary2-hover))',
          pressed: 'hsl(var(--secondary2-pressed))',
          light: 'hsl(var(--secondary2-light))',
          lightForeground: 'hsl(var(--secondary2-light-foreground))'
        },
        disabled: {
          DEFAULT: 'hsl(var(--disabled))',
          foreground: 'hsl(var(--disabled-foreground))'
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
        },
        //white
        cwhite: {
          0: '#fefefa',
          1: '#fefdf6',
          2: '#fdfcf2',
          3: '#fdfbee',
          4: '#fcfaea',
          5: '#FCF9E6',
          6: '#d2cfbf',
          7: '#a8a699',
          8: '#7e7c73',
          9: '#54534c'
        },
        //green
        cgreen: {
          0: '#deeae6',
          1: '#bed6cd',
          2: '#9ec2b5',
          3: '#7dae9c',
          4: '#5d9a83',
          5: '#3D866B',
          6: '#326f59',
          7: '#285947',
          8: '#1e4335',
          9: '#142c23'
        },
        //red
        cred: {
          0: '#fbe4e1',
          1: '#f8c9c4',
          2: '#f4aea7',
          3: '#f19389',
          4: '#ed786c',
          5: '#EA5E4F',
          6: '#c34e41',
          7: '#9c3e34',
          8: '#752f27',
          9: '#4e1f1a'
        },
        //blue
        cblue: {
          0: '#d5dbdf',
          1: '#acb8bf',
          2: '#83959f',
          3: '#59727f',
          4: '#304f5f',
          5: '#072C3F',
          6: '#052434',
          7: '#041d2a',
          8: '#03161f',
          9: '#020e15'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [
    require('tailwindcss-animate'),
    require('tailwind-scrollbar'),
    plugin(function ({ addVariant, e, postcss }) {
      addVariant('firefox', ({ container, separator }) => {
        const isFirefoxRule = postcss.atRule({
          name: '-moz-document',
          params: 'url-prefix()'
        })
        isFirefoxRule.append(container.nodes)
        container.append(isFirefoxRule)
        isFirefoxRule.walkRules((rule) => {
          rule.selector = `.${e(`firefox${separator}${rule.selector.slice(1)}`)}`
        })
      })
    })
  ]
}
