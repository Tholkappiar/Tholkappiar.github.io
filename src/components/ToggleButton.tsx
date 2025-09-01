"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggleButton() {
    const { setTheme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <button className="py-2 px-4 rounded-xl">
                <span className="w-6 h-4 block">⚪</span>
            </button>
        )
    }

    return (
        <button
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            className="py-2 px-4 dark:hover:bg-gray-900 hover:bg-gray-200 rounded-xl relative w-12 h-12 transition-colors duration-1000"
        >
            <span
                className={`absolute inset-0 flex items-center justify-center transform transition-transform duration-1000
      ${resolvedTheme === 'dark' ? 'rotate-180 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}
    `}
            >
                🌙
            </span>

            <span
                className={`absolute inset-0 flex items-center justify-center transform transition-transform duration-1000
      ${resolvedTheme === 'dark' ? 'rotate-0 scale-100 opacity-100' : 'rotate-180 scale-0 opacity-0'}
    `}
            >
                ☀️
            </span>
        </button>

    )
}