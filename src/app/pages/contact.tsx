import React, { JSX } from "react";
import { ExternalLink } from "lucide-react";
import { Module } from "./shared";
import { ContactInfo } from "../types";
import { availableServices, contactMethods, personal, responseTime } from "@/lib/data";

const ContactPage: React.FC = () => {

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
        <div className="space-y-6">
            <div className="mb-6">
                <h2 className="text-lg font-semibold text-foreground mb-2">Let's Connect</h2>
                <p className="text-sm text-muted">Always open to interesting conversations</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="md:col-span-2 bg-card backdrop-blur-sm border border-border rounded-xl p-4">
                    <h3 className="text-lg text-foreground ml-1 mt-2 mb-2">Send a Message</h3>
                    <form action="https://formsubmit.co/alex@example.com" method="POST" className="space-y-4 my-8">
                        <input type="hidden" name="_subject" value="New Portfolio Contact" />
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_next" value="https://your-site.com/thanks" />
                        <div className="space-y-5">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className="w-full bg-card/70 border border-border rounded-lg p-4 text-xs placeholder:text-muted/70 outline-none"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                className="w-full bg-card/70 border border-border rounded-lg p-4 text-xs placeholder:text-muted/70 outline-none"
                                required
                            />
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                rows={4}
                                className="w-full bg-card/70 border border-border rounded-lg p-4 text-xs placeholder:text-muted/70 outline-none"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="mt-8 w-full bg-primary/20 text-primary-foreground border border-border rounded-lg p-4 text-xs font-medium hover:bg-primary/30 transition-colors"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
                <div className="grid md:grid-rows-2 gap-4">
                    <Module>{contactMethods.map(renderContactMethod)}</Module>
                    <Module>
                        <div className="space-y-3">
                            <div className="p-3 bg-accent/10 rounded-lg border border-border">
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
                <div className="flex items-center justify-center space-x-4 text-xs text-muted">
                    <span>{personal.location}</span>
                    <span>•</span>
                    <span>{personal.location_preference}e</span>
                    <span>•</span>
                    <span>{personal.timezone} ({personal.timezone_offset})</span>
                </div>
            </Module>
        </div>
    );
};

export default ContactPage;
