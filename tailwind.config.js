import defaultTheme from 'tailwindcss/defaultTheme'

export default {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './app.vue',
        './error.vue',
        './content/**/*.md'  // Added content directory
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#0066cc',
                    dark: '#004c99',
                    light: '#3399ff'
                },
                secondary: {
                    DEFAULT: '#2c3e50',
                    dark: '#1a252f',
                    light: '#34495e'
                },
                accent: {
                    DEFAULT: '#f39c12',
                    dark: '#d35400',
                    light: '#f1c40f'
                }
            },
            fontFamily: {
                sans: ['Lato', ...defaultTheme.fontFamily.sans],
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        color: theme('colors.gray.700'),
                        h1: {
                            color: theme('colors.secondary.DEFAULT'),
                        },
                        h2: {
                            color: theme('colors.primary.DEFAULT'),
                        },
                        h3: {
                            color: theme('colors.secondary.DEFAULT'),
                        },
                        a: {
                            color: theme('colors.primary.DEFAULT'),
                            '&:hover': {
                                color: theme('colors.primary.dark'),
                            },
                        },
                    },
                },
            }),
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
    ],
}
