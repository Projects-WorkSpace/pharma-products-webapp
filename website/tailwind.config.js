/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
    ],
    theme: {
        extend: {
            colors: {
                dark: 'rgb(12 12 13 / 1)',
                super: '#e74142',
                background: '#f5f5f5',
            },
        },
        screens: {},
    },
    plugins: [require('@tailwindcss/line-clamp')],
}
