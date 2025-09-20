"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { User, FileText, Code2, Mail, Menu, X } from "lucide-react";
import { ThemeToggleButton } from "@/components/ToggleButton";

interface NavigationItem {
    id: string;
    label: string;
    iconName: string;
}

// Icon mapping
const iconMap = {
    User,
    FileText,
    Code2,
    Mail,
} as const;

type SectionType = "about" | "blogs" | "stack" | "contact";

interface NavigationServerProps {
    navigation: NavigationItem[];
    activeSection: SectionType;
}

export const NavigationServer: React.FC<NavigationServerProps> = ({
    navigation,
    activeSection,
}) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navRef = useRef<HTMLElement>(null);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setIsMobileMenuOpen(false);
            }
        };

        if (isMobileMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMobileMenuOpen]);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [activeSection]);

    return (
        <nav ref={navRef} className="bg-card backdrop-blur-sm rounded-xl border border-border transition-colors duration-500">
            {/* Desktop Navigation */}
            <div className="hidden sm:flex space-x-1 p-1">
                {navigation.map((item) => {
                    const IconComponent = iconMap[item.iconName as keyof typeof iconMap];
                    return (
                        <Link
                            key={item.id}
                            href={`?section=${item.id}`}
                            className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg text-xs font-medium transition-all duration-500 ${activeSection === item.id
                                ? "bg-primary text-white shadow-lg"
                                : "text-muted-foreground hover:text-foreground hover:bg-muted"
                                }`}
                        >
                            <IconComponent className="w-3 h-3 flex-shrink-0" />
                            <span className={`${activeSection === item.id && "text-white"}`}>
                                {item.label}
                            </span>
                        </Link>
                    );
                })}
                <div className="ml-auto">
                    <ThemeToggleButton />
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className="sm:hidden">
                <div className="flex items-center justify-between p-2">
                    <button
                        onClick={toggleMobileMenu}
                        className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200 active:scale-95"
                        aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
                        aria-expanded={isMobileMenuOpen}
                    >
                        <div className="relative w-5 h-5">
                            <Menu className={`absolute inset-0 w-5 h-5 transition-all duration-200 ${isMobileMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                                }`} />
                            <X className={`absolute inset-0 w-5 h-5 transition-all duration-200 ${isMobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                                }`} />
                        </div>
                    </button>
                    <ThemeToggleButton />
                </div>

                {/* Mobile Menu Items */}
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                    <div className="px-2 pb-2 space-y-1 border-t border-border/50 bg-card/95 backdrop-blur-sm">
                        {navigation.map((item) => {
                            const IconComponent = iconMap[item.iconName as keyof typeof iconMap];
                            return (
                                <Link
                                    key={item.id}
                                    href={`?section=${item.id}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`flex items-center space-x-3 px-3 py-3 rounded-lg text-sm font-medium transition-all duration-500 ${activeSection === item.id
                                        ? "bg-primary text-white shadow-lg"
                                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                                        }`}
                                >
                                    <IconComponent className="w-4 h-4 flex-shrink-0" />
                                    <span className={`${activeSection === item.id && "text-white"}`}>
                                        {item.label}
                                    </span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </nav>
    );
};