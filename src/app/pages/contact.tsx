import React, { JSX } from "react";
import {
    Mail,
    Github,
    Linkedin,
    Twitter,
    ExternalLink,
    LucideIcon,
} from "lucide-react";
import { Module } from "./shared";

interface ContactInfo {
    icon: LucideIcon;
    label: string;
    value: string;
}

const ContactPage: React.FC = () => {
    const contactMethods: ContactInfo[] = [
        {
            icon: Mail,
            label: "Email",
            value: "alex@example.com",
        },
        {
            icon: Github,
            label: "GitHub",
            value: "alexjohnson",
        },
        {
            icon: Linkedin,
            label: "LinkedIn",
            value: "alexjohnson",
        },
        {
            icon: Twitter,
            label: "Twitter",
            value: "@alexjohnson",
        },
    ];

    const availableServices: string[] = [
        "Full-time roles",
        "Contract work",
        "Consulting",
        "Open source",
    ];

    const renderContactMethod = (
        contact: ContactInfo,
        index: number
    ): JSX.Element => (
        <div
            key={index}
            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800/50 transition-colors cursor-pointer group"
        >
            <contact.icon className="w-3 h-3 text-gray-500 group-hover:text-gray-400" />
            <div className="flex-1">
                <div className="text-xs text-gray-500">{contact.label}</div>
                <div className="text-xs text-gray-300 font-mono">
                    {contact.value}
                </div>
            </div>
            <ExternalLink className="w-3 h-3 text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
    );

    const renderServiceItem = (item: string, index: number): JSX.Element => (
        <div
            key={index}
            className="flex items-center space-x-2 text-xs text-gray-400"
        >
            <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
            <span>{item}</span>
        </div>
    );

    return (
        <div className="space-y-6">
            <div className="mb-6">
                <h2 className="text-lg font-semibold text-white mb-2">
                    Let&apos;s Connect
                </h2>
                <p className="text-sm text-gray-400">
                    Always open to interesting conversations
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
                <Module>
                    <h3 className="text-sm font-medium text-white mb-4 flex items-center space-x-2">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span>Reach Out</span>
                    </h3>
                    <div className="space-y-3">
                        {contactMethods.map(renderContactMethod)}
                    </div>
                </Module>

                <Module>
                    <h3 className="text-sm font-medium text-white mb-4 flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span>Status</span>
                    </h3>
                    <div className="space-y-3">
                        <div className="p-3 bg-green-900/20 rounded-lg border border-green-800/50">
                            <div className="text-xs font-medium text-green-400 mb-1">
                                Currently available
                            </div>
                            <div className="text-xs text-gray-500">
                                Open to new opportunities
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            {availableServices.map(renderServiceItem)}
                        </div>

                        <div className="pt-3 border-t border-gray-800">
                            <div className="text-xs text-gray-500">
                                Response time: 24h
                            </div>
                        </div>
                    </div>
                </Module>
            </div>

            {/* Location Info */}
            <Module className="text-center" hover={false}>
                <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
                    <span>San Francisco, CA</span>
                    <span>•</span>
                    <span>Remote worldwide</span>
                    <span>•</span>
                    <span>PST (UTC-8)</span>
                </div>
            </Module>
        </div>
    );
};

export default ContactPage;
