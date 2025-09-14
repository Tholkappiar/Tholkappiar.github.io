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
                        
                        // ========== IMAGE CONTROLS ==========
                        // Main image styling
                        'img': {
                            maxWidth: '100%',
                            maxHeight: '500px',
                            width: 'auto',
                            height: 'auto',
                            margin: '2rem auto',
                            display: 'block',
                            borderRadius: '0.75rem', // rounded-xl
                            objectFit: 'contain',
                            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)', // shadow-md
                            border: '1px solid var(--color-border)',
                            transition: 'all 0.2s ease-in-out',
                            
                            '&:hover': {
                                boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)', // shadow-lg
                                transform: 'scale(1.01)',
                            },
                        },
                        
                        // Images inside paragraphs
                        'p img': {
                            margin: '1.5rem auto',
                        },
                        
                        // Figure styling for better image captions
                        'figure': {
                            margin: '2.5rem auto',
                            textAlign: 'center',
                            maxWidth: '100%',
                            
                            '& img': {
                                margin: '0 auto 1rem',
                                maxWidth: '100%',
                            },
                        },
                        
                        'figcaption': {
                            fontSize: '0.875rem',
                            lineHeight: '1.25rem',
                            color: 'var(--color-muted-foreground)',
                            fontStyle: 'italic',
                            textAlign: 'center',
                            marginTop: '0.75rem',
                        },
                    },
                },
                
                // Responsive sizing variants
                'sm': {
                    css: {
                        'img': {
                            maxHeight: '400px',
                            margin: '1.5rem auto',
                        },
                        'figure': {
                            margin: '2rem auto',
                        },
                    },
                },
                
                'lg': {
                    css: {
                        'img': {
                            maxHeight: '600px',
                            maxWidth: '800px',
                        },
                    },
                },
                
                'xl': {
                    css: {
                        'img': {
                            maxHeight: '700px',
                            maxWidth: '1000px',
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
                        
                        // Dark mode image adjustments
                        'img': {
                            border: '1px solid var(--color-border)',
                            // Slightly different shadow for dark mode
                            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.3), 0 2px 4px -2px rgb(0 0 0 / 0.3)',
                            
                            '&:hover': {
                                boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.4), 0 4px 6px -4px rgb(0 0 0 / 0.4)',
                            },
                        },
                        
                        'figcaption': {
                            color: 'var(--color-muted-foreground)',
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