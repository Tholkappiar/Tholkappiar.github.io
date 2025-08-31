import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: 'class', // Enable dark mode
    theme: {
        extend: {
            typography: ({ theme }) => ({
                // Base prose styles
                DEFAULT: {
                    css: {
                        pre: {
                            backgroundColor: theme('colors.gray.100'),
                        },
                    },
                },
                // Dark mode prose styles
                invert: {
                    css: {
                        pre: {
                            backgroundColor: theme('colors.red.600'), 
                        },
                    },
                },
            }),
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
};

export default config;