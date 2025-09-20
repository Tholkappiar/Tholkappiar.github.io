'use client'

import React, { JSX, useState } from "react";
import { ExternalLink } from "lucide-react";
import { getDetails, Module } from "./shared";
import { ContactInfo, FormDetails } from "../types";
import { availableServices, contactMethods, personal, responseTime } from "@/lib/data";

const ContactPage: React.FC = () => {
    const [formDetails, setFormDetails] = useState<FormDetails>({
        subject: "",
        email: "",
        name: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target;
        setFormDetails(prev => ({
            ...prev,
            [name]: value
        }));
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const formData = new FormData();
            Object.entries(formDetails).forEach(([key, value]) => {
                formData.append(key, value);
            });

            const response = await fetch(`https://formsubmit.co/ajax/${getDetails('email')}`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formDetails)
            });

            if (response.ok) {
                setIsSubmitted(true);
                setFormDetails({
                    subject: "",
                    email: "",
                    name: "",
                    message: ""
                });
            }
        } catch (error) {
            console.error('Submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    }

    const renderContactMethod = (contact: ContactInfo, index: number): JSX.Element => (
        <div
            key={index}
            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted/30 transition-colors cursor-pointer group"
        >
            <contact.icon className="w-3 h-3 text-muted-foreground group-hover:text-foreground" />
            <div className="flex-1">
                <div className="text-xs text-muted-foreground">{contact.label}</div>
                <div className="text-xs text-foreground font-mono">{contact.value}</div>
            </div>
            <ExternalLink className="w-3 h-3 text-border opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
    );

    const renderServiceItem = (item: string, index: number): JSX.Element => (
        <div key={index} className="flex items-center space-x-2 text-xs text-muted">
            <div className="w-1 h-1 bg-border rounded-full" />
            <span>{item}</span>
        </div>
    );

    return (
        <div className="space-y-4 sm:space-y-6 max-h-full overflow-hidden">
            <div className="sm:mb-6">
                <h2 className="text-lg sm:text-xl font-semibold text-foreground">Let&apos;s Connect</h2>
                <p className="text-sm text-muted">Always open to interesting conversations</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 max-h-full">
                <div className="lg:col-span-2 bg-card backdrop-blur-sm border border-border rounded-xl p-4 sm:p-6 transition-colors duration-1000">
                    <h3 className="text-lg text-foreground ml-1 mb-4">Send a Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-4 my-2">
                        <input type="hidden" name="subject" value={formDetails.subject} />
                        <div className="space-y-3 sm:space-y-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formDetails.name}
                                onChange={handleChange}
                                className="w-full bg-card/70 border border-border rounded-lg p-3 sm:p-4 text-xs sm:text-sm placeholder:text-muted/70 outline-none transition-colors duration-1000"
                                required
                            />
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={formDetails.subject}
                                onChange={handleChange}
                                className="w-full bg-card/70 border border-border rounded-lg p-3 sm:p-4 text-xs sm:text-sm placeholder:text-muted/70 outline-none transition-colors duration-1000"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formDetails.email}
                                onChange={handleChange}
                                className="w-full bg-card/70 border border-border rounded-lg p-3 sm:p-4 text-xs sm:text-sm placeholder:text-muted/70 outline-none transition-colors duration-1000"
                                required
                            />
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                rows={3}
                                value={formDetails.message}
                                onChange={handleChange}
                                className="w-full bg-card/70 border border-border rounded-lg p-3 sm:p-4 text-xs sm:text-sm placeholder:text-muted/70 outline-none transition-colors duration-1000 resize-none"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting || isSubmitted}
                            className="w-full bg-primary/20 text-primary-foreground border-none rounded-lg p-3 sm:p-4 text-xs sm:text-sm font-medium hover:bg-primary transition-colors disabled:hover:bg-primary/20"
                        >
                            {isSubmitted ? "Thank you!" : (isSubmitting ? "Sending..." : "Send Message")}
                        </button>
                    </form>
                </div>
                <div className="grid grid-cols-1 lg:grid-rows-2 gap-4">
                    <Module>{contactMethods.map(renderContactMethod)}</Module>
                    <Module>
                        <div className="space-y-3">
                            <div className="p-3 bg-accent/10 rounded-lg border-none">
                                <div className="text-xs font-medium mb-1">Currently available</div>
                                <div className="text-xs text-muted">Open to new opportunities</div>
                            </div>

                            <div className="space-y-1.5">{availableServices.map(renderServiceItem)}</div>

                            <div className="pt-3 border-t border-border">
                                <div className="text-xs text-muted">Response time: {responseTime}</div>
                            </div>
                        </div>
                    </Module>
                </div>
            </div>

            <Module className="text-center" hover={false}>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-4 text-xs text-muted">
                    <span>{personal.location}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{personal.location_preference}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{personal.timezone} ({personal.timezone_offset})</span>
                </div>
            </Module>
        </div>
    );
};

export default ContactPage;