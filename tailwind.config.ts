import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            typography: ({ theme }) => ({
                invert: {
                    css: {
                        pre: {
                            backgroundColor: theme('colors.gray.800'), 
                        },
                    },
                },
            }),
           colors: {
                "background": "var(--color-background)",
                "foreground": "var(--color-foreground)",
                "primary": "var(--color-primary)",
                "primary-foreground": "var(--color-primary-foreground)",
                "secondary": "var(--color-secondary)",
                "secondary-foreground": "var(--color-secondary-foreground)",
                "primary-hover": "var(--color-primary-hover)",
                "card": "var(--color-card)",
                "card-foreground": "var(--color-card-foreground)",
                "muted": "var(--color-muted)",
                "muted-foreground": "var(--color-muted-foreground)",
                "accent": "var(--color-accent)",
                "accent-foreground": "var(--color-accent-foreground)",
                "destructive": "var(--color-destructive)",
                "destructive-foreground": "var(--color-destructive-foreground)",
                "border": "var(--color-border)",
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
};

export default config;