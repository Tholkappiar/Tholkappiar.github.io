import React from "react";

function Footer() {
    return (
        <div className="p-3 sm:p-4 border-t border-border/95">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-4 text-xs text-muted">
                <span>Built with Next & TypeScript</span>
                <span className="hidden sm:inline">•</span>
                <span>© 2025</span>
            </div>
        </div>
    );
}

export default Footer;
