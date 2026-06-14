import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
      },
      colors: {
        canvas: '#FFFFFF',
        'surface-soft': '#F5F7FA',
        hairline: '#DADDE1',
        'hairline-soft': '#E9EBED',
        'ink-deep': '#0A1317',
        ink: '#1C2B33',
        charcoal: '#3A4750',
        slate: '#5B6770',
        steel: '#8A949C',
        primary: '#0064E0',
        'primary-deep': '#0143B5',
        success: '#31A24C',
        warning: '#FFD33D',
      },
      borderRadius: {
        '4xl': '32px',
        '5xl': '40px',
      },
    },
  },
  plugins: [],
}

export default config
