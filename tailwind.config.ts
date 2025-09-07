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
                DEFAULT: {
                    css: {
                        // Fix headings to use theme colors
                        'h1, h2, h3, h4, h5, h6': {
                            color: 'var(--color-foreground)',
                        },
                        // Fix paragraphs and general text
                        'p': {
                            color: 'var(--color-foreground)',
                        },
                        // Fix code blocks
                        'pre': {
                            backgroundColor: 'var(--color-card)',
                            color: 'var(--color-foreground)',
                            border: '1px solid var(--color-border)',
                        },
                        // Fix inline code
                        'code': {
                            color: 'var(--color-foreground)',
                            backgroundColor: 'var(--color-muted)',
                            padding: '0.2rem 0.4rem',
                            borderRadius: '0.25rem',
                            fontSize: '0.875em',
                        },
                        // Fix code inside pre tags
                        'pre code': {
                            backgroundColor: 'transparent',
                            color: 'inherit',
                            padding: '0',
                        },
                        // Fix links
                        'a': {
                            color: 'var(--color-primary)',
                            '&:hover': {
                                color: 'var(--color-primary-hover)',
                            },
                        },
                        // Fix blockquotes
                        'blockquote': {
                            borderLeftColor: 'var(--color-border)',
                            color: 'var(--color-muted-foreground)',
                        },
                        // Fix list items
                        'li': {
                            color: 'var(--color-foreground)',
                        },
                        // Fix strong/bold text
                        'strong': {
                            color: 'var(--color-foreground)',
                        },
                        // Fix em/italic text
                        'em': {
                            color: 'var(--color-foreground)',
                        },
                    },
                },
                // Dark mode specific overrides
                invert: {
                    css: {
                        'h1, h2, h3, h4, h5, h6': {
                            color: 'var(--color-foreground)',
                        },
                        'p': {
                            color: 'var(--color-foreground)',
                        },
                        'pre': {
                            backgroundColor: 'var(--color-card)',
                            color: 'var(--color-foreground)',
                            border: '1px solid var(--color-border)',
                        },
                        'code': {
                            color: 'var(--color-background)',
                            backgroundColor: 'var(--color-muted)',
                        },
                        'pre code': {
                            backgroundColor: 'transparent',
                            color: 'inherit',
                        },
                        'a': {
                            color: 'var(--color-primary)',
                            '&:hover': {
                                color: 'var(--color-primary-hover)',
                            },
                        },
                        'blockquote': {
                            borderLeftColor: 'var(--color-border)',
                            color: 'var(--color-muted-foreground)',
                        },
                        'li': {
                            color: 'var(--color-foreground)',
                        },
                        'strong': {
                            color: 'var(--color-foreground)',
                        },
                        'em': {
                            color: 'var(--color-foreground)',
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