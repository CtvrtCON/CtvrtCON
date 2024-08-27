const headlessuiPlugin = require('@headlessui/tailwindcss')

/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        screens: {
            'xs': '400px',
            ...defaultTheme.screens,
        },
        fontSize: {
            xs: ['0.75rem', {lineHeight: '1rem'}],
            sm: ['0.875rem', {lineHeight: '1.5rem'}],
            base: ['1rem', {lineHeight: '1.5rem'}],
            lg: ['1.125rem', {lineHeight: '2rem'}],
            xl: ['1.25rem', {lineHeight: '2rem'}],
            '2xl': ['1.5rem', {lineHeight: '2.5rem'}],
            '3xl': ['2rem', {lineHeight: '2.5rem'}],
            '4xl': ['2.5rem', {lineHeight: '3rem'}],
            '5xl': ['3rem', {lineHeight: '3.5rem'}],
            '6xl': ['4rem', {lineHeight: '1'}],
            '7xl': ['5rem', {lineHeight: '1'}],
            '8xl': ['6rem', {lineHeight: '1'}],
            '9xl': ['8rem', {lineHeight: '1'}],
        },
        extend: {
            borderRadius: {
                '4xl': '2rem',
                '5xl': '2.5rem',
            },
            fontFamily: {
                sans: 'var(--font-inter)',
                display: 'var(--font-dm-sans)',
            },
            maxWidth: {
                '2xl': '40rem',
            },
            colors: { // http://sitehero.nl/uicolors/
                primary: { // #3eb0cf
                    '50': '#effafc',
                    '100': '#d6f1f7',
                    '200': '#b2e4ef',
                    '300': '#7dcfe3',
                    '400': '#3eb0cf',
                    '500': '#2594b5',
                    '600': '#217899',
                    '700': '#21627d',
                    '800': '#235167',
                    '900': '#214558',
                    '950': '#112c3b',
                },
            },
        },
    },
    plugins: [headlessuiPlugin],
}
